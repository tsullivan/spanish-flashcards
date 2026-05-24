import * as fs from 'fs'
import * as path from 'path'

interface VerbInfo {
  infinitive: string
  english: string
  type: 'ar' | 'er' | 'ir'
  // Overrides for irregular stems/forms
  presentStem?: string // default: infinitive minus -ar/-er/-ir
  presentYoOverride?: string // e.g. "tengo" for tener
  stemChangePresent?: string // 'e>ie' | 'o>ue' | 'e>i'
  preteriteStem?: string // for strong preterits like tuv-, hic-, dij-
  preteriteYoEnding?: string // '-e' for strong, default is '-é'/'-í'
  imperfectStem?: string // only for ser (er-), ir (ib-), ver (ve-)
  futureStem?: string // for irregular futures: tendr-, saldr-, etc.
  // Reflexive
  reflexive?: boolean
  // Representative sentence objects (used to build conjugation phrases)
  context: {
    yo: string // e.g. "español"
    tu: string
    usted: string
    ella: string
    el: string
    ellos: string
    ustedes: string
    nosotros: string
  }
  contextEnglish: {
    yo: string
    tu: string
    usted: string
    ella: string
    el: string
    ellos: string
    ustedes: string
    nosotros: string
  }
  infinitivePhrases: Array<{ es: string; en: string }>
}

// ---------- conjugation helpers ----------

function presentStem(v: VerbInfo): string {
  if (v.presentStem) return v.presentStem
  return v.infinitive.slice(0, -2) // remove -ar/-er/-ir
}

function applyStemChange(stem: string, change?: string): string {
  if (!change) return stem
  if (change === 'e>ie') return stem.replace(/e([^aeiou]*)$/, 'ie$1')
  if (change === 'o>ue') return stem.replace(/o([^aeiou]*)$/, 'ue$1')
  if (change === 'e>i') return stem.replace(/e([^aeiou]*)$/, 'i$1')
  return stem
}

function presentConjugate(v: VerbInfo): string[] {
  if (v.presentYoOverride) {
    const base = presentStem(v)
    const changed = applyStemChange(base, v.stemChangePresent)
    const [yo, ...rest] = presentEndings(v.type)
    return [
      v.presentYoOverride,
      changed + rest[0],
      changed + rest[1],
      changed + rest[2],
      changed + rest[3],
      base + rest[4], // nosotros never has stem change
      changed + rest[5],
    ]
  }
  const base = presentStem(v)
  const changed = applyStemChange(base, v.stemChangePresent)
  const nosBase = base // nosotros/vosotros keep original stem
  const ends = presentEndings(v.type)
  return [
    changed + ends[0],
    changed + ends[1],
    changed + ends[2],
    changed + ends[3],
    changed + ends[4],
    nosBase + ends[5],
    changed + ends[6],
  ]
}

function presentEndings(type: 'ar' | 'er' | 'ir'): string[] {
  if (type === 'ar') return ['o', 'as', 'a', 'a', 'an', 'amos', 'an']
  if (type === 'er') return ['o', 'es', 'e', 'e', 'en', 'emos', 'en']
  return ['o', 'es', 'e', 'e', 'en', 'imos', 'en']
}

function preteriteConjugate(v: VerbInfo): string[] {
  if (v.preteriteStem) {
    // strong preterite (no accent, -e ending for yo)
    const s = v.preteriteStem
    const yoEnd = v.preteriteYoEnding ?? 'e'
    if (v.type === 'ar' || v.type === 'er' || v.type === 'ir') {
      return [s + yoEnd, s + 'iste', s + 'o', s + 'o', s + 'ieron', s + 'imos', s + 'ieron']
    }
  }
  const base = v.infinitive.slice(0, -2)
  if (v.type === 'ar') {
    const yo = spellChangeAr(base)
    return [
      yo + 'é',
      base + 'aste',
      base + 'ó',
      base + 'ó',
      base + 'aron',
      base + 'amos',
      base + 'aron',
    ]
  }
  // -er/-ir: handle leyó/leyeron type spelling
  const s = preteriteErIrStem(v)
  if (v.stemChangePresent === 'e>i' || v.stemChangePresent === 'o>ue') {
    // 3rd person stem change in preterite for e>i and o>ue -ir verbs
    const changed3 = applyStemChange(s, v.stemChangePresent === 'o>ue' ? 'o>u' : 'e>i')
    return [
      s + 'í',
      s + 'iste',
      changed3 + 'ió',
      changed3 + 'ió',
      changed3 + 'ieron',
      s + 'imos',
      changed3 + 'ieron',
    ]
  }
  return [s + 'í', s + 'iste', s + 'ió', s + 'ió', s + 'ieron', s + 'imos', s + 'ieron']
}

function preteriteErIrStem(v: VerbInfo): string {
  const base = v.infinitive.slice(0, -2)
  // leer, creer: ley-, crey-
  if (base.endsWith('e') || base.endsWith('i')) {
    // check if adding -ió would create two vowels needing y
    const penult = base[base.length - 1]
    if ('aeiouáéíóú'.includes(penult)) {
      return base.slice(0, -1) + 'y'
    }
  }
  return base
}

function spellChangeAr(base: string): string {
  // llegar → llegué (g→gu), buscar → busqué (c→qu), empezar → empecé (z→c)
  if (base.endsWith('g')) return base + 'u'
  if (base.endsWith('c')) return base.slice(0, -1) + 'qu'
  if (base.endsWith('z')) return base.slice(0, -1) + 'c'
  return base
}

function imperfectConjugate(v: VerbInfo): string[] {
  if (v.imperfectStem) {
    const s = v.imperfectStem
    if (v.type === 'ar') {
      return [s + 'ba', s + 'bas', s + 'ba', s + 'ba', s + 'ban', s + 'bamos', s + 'ban']
    }
    return [s + 'a', s + 'as', s + 'a', s + 'a', s + 'an', s + 'amos', s + 'an']
  }
  const base = v.infinitive.slice(0, -2)
  if (v.type === 'ar') {
    return [
      base + 'aba',
      base + 'abas',
      base + 'aba',
      base + 'aba',
      base + 'aban',
      base + 'ábamos',
      base + 'aban',
    ]
  }
  return [
    base + 'ía',
    base + 'ías',
    base + 'ía',
    base + 'ía',
    base + 'ían',
    base + 'íamos',
    base + 'ían',
  ]
}

function futureConjugate(v: VerbInfo): string[] {
  const stem = v.futureStem ?? v.infinitive
  return [stem + 'é', stem + 'ás', stem + 'á', stem + 'á', stem + 'án', stem + 'emos', stem + 'án']
}

function conditionalConjugate(v: VerbInfo): string[] {
  const stem = v.futureStem ?? v.infinitive
  return [
    stem + 'ía',
    stem + 'ías',
    stem + 'ía',
    stem + 'ía',
    stem + 'ían',
    stem + 'íamos',
    stem + 'ían',
  ]
}

// ---------- phrase builders ----------

const SUBJECTS_ES = ['yo', 'tú', 'usted', 'ella', 'él', 'ellos', 'ustedes', 'nosotros']
const SUBJECTS_EN = [
  (v: string) => `I ${v}`,
  (v: string) => `You (informal) ${v}`,
  (v: string) => `You (formal) ${v}`,
  (v: string) => `She ${v}`,
  (v: string) => `He ${v}`,
  (v: string) => `They (informal) ${v}`,
  (v: string) => `They (formal) ${v}`,
  (v: string) => `We ${v}`,
]

// conjugation order: yo,tú,usted,ella,él,ellos,ustedes,nosotros
// (our arrays: [yo,tu,usted,ella,el,ellos,ustedes,nosotros])
const CONJ_ORDER = [0, 1, 2, 3, 4, 5, 6, 5] // map from subject index to conjugation array index
// Actually conjugate returns: [yo, tu, usted, ella, ellos, nosotros, ustedes] — 7 items
// Reorder to: yo, tu, usted, ella, el, ellos, ustedes, nosotros

function reorder(conj: string[]): string[] {
  // input:  [yo, tu, usted-or-ella, ella-or-el, ellos, nosotros, ustedes]  (7 items from helpers)
  // output: [yo, tu, usted, ella, el, ellos, ustedes, nosotros]  (8 items)
  // The helpers return 7 items: yo, tu, usted/ella, ella/el(?), ellos, nosotros, ustedes
  // Let me re-examine: presentEndings returns 7 suffixes indexed 0-6
  // index 0: yo, 1: tu, 2: usted, 3: ella, 4: ellos, 5: nosotros, 6: ustedes
  // We want output: yo, tu, usted, ella, el(=ella), ellos, ustedes, nosotros
  return [conj[0], conj[1], conj[2], conj[3], conj[3], conj[4], conj[6], conj[5]]
}

type Phrase = { answer: string; question: string }

function buildTensePhrases(
  conj: string[],
  verb: VerbInfo,
  verbEn: string, // e.g. "speak", "spoke", "used to speak", "will speak", "would speak"
  pronoun: string, // "ella" vs "él" for 3rd person
): Phrase[] {
  const ordered = reorder(conj)
  const ctx = verb.context
  const ctxEn = verb.contextEnglish
  const contexts = [
    ctx.yo,
    ctx.tu,
    ctx.usted,
    ctx.ella,
    ctx.el,
    ctx.ellos,
    ctx.ustedes,
    ctx.nosotros,
  ]
  const contextsEn = [
    ctxEn.yo,
    ctxEn.tu,
    ctxEn.usted,
    ctxEn.ella,
    ctxEn.el,
    ctxEn.ellos,
    ctxEn.ustedes,
    ctxEn.nosotros,
  ]
  const subjectsEs = ['yo', 'tú', 'usted', 'ella', 'él', 'ellos', 'ustedes', 'nosotros']

  return ordered.map((form, i) => {
    const subEn = SUBJECTS_EN[i]
    // For reflexive verbs, prepend the reflexive pronoun
    let formWithReflexive = form
    if (verb.reflexive) {
      const refProns = ['me', 'te', 'se', 'se', 'se', 'se', 'se', 'nos']
      formWithReflexive = refProns[i] + ' ' + form
    }
    return {
      answer: `${subEn(verbEn)} ${contextsEn[i]}`.trim(),
      question: `${subjectsEs[i]} ${formWithReflexive} ${contexts[i]}`.trim(),
    }
  })
}

function buildVerbPhrases(v: VerbInfo): Phrase[] {
  const present = reorder(presentConjugate(v))
  const preterite = reorder(preteriteConjugate(v))
  const imperfect = reorder(imperfectConjugate(v))
  const future = reorder(futureConjugate(v))
  const conditional = reorder(conditionalConjugate(v))

  const ctx = v.context
  const ctxEn = v.contextEnglish
  const contexts = [
    ctx.yo,
    ctx.tu,
    ctx.usted,
    ctx.ella,
    ctx.el,
    ctx.ellos,
    ctx.ustedes,
    ctx.nosotros,
  ]
  const contextsEn = [
    ctxEn.yo,
    ctxEn.tu,
    ctxEn.usted,
    ctxEn.ella,
    ctxEn.el,
    ctxEn.ellos,
    ctxEn.ustedes,
    ctxEn.nosotros,
  ]
  const subjectsEs = ['yo', 'tú', 'usted', 'ella', 'él', 'ellos', 'ustedes', 'nosotros']
  const refProns = ['me', 'te', 'se', 'se', 'se', 'se', 'se', 'nos']

  function form(conj: string[], i: number): string {
    if (v.reflexive) return refProns[i] + ' ' + conj[i]
    return conj[i]
  }

  const tenseDefs = [
    { forms: present, verb: (s: string) => s, prefix: '' },
    { forms: preterite, verb: (s: string) => s.replace(/^(\w)/, (m) => m), prefix: '' },
    { forms: imperfect, verb: (s: string) => s, prefix: '' },
    { forms: future, verb: (s: string) => s, prefix: '' },
    { forms: conditional, verb: (s: string) => s, prefix: '' },
  ]

  // English verb forms
  const enVerbs = [
    v.english.replace(/^to /, ''),
    v.english.replace(/^to /, '') + 'ed (past)', // will override per-verb
    'used to ' + v.english.replace(/^to /, ''),
    'will ' + v.english.replace(/^to /, ''),
    'would ' + v.english.replace(/^to /, ''),
  ]

  const phrases: Phrase[] = []

  // Generate for all 5 tenses × 8 persons
  const tenseEnglishVerb = [
    enVerb(v, 'present'),
    enVerb(v, 'preterite'),
    enVerb(v, 'imperfect'),
    enVerb(v, 'future'),
    enVerb(v, 'conditional'),
  ]

  const allConj = [present, preterite, imperfect, future, conditional]

  for (let t = 0; t < 5; t++) {
    for (let i = 0; i < 8; i++) {
      const subEn = SUBJECTS_EN[i]
      const verbPhrase = `${subjectsEs[i]} ${form(allConj[t], i)} ${contexts[i]}`.trim()
      const engPhrase = subEn(`${tenseEnglishVerb[t]} ${contextsEn[i]}`).trim()
      phrases.push({ answer: engPhrase, question: verbPhrase })
    }
  }

  // Add infinitive phrases
  for (const p of v.infinitivePhrases) {
    phrases.push({ answer: p.en, question: p.es })
  }

  return phrases
}

// ---------- English verb forms ----------

const IRREGULAR_PAST: Record<string, string> = {
  speak: 'spoke',
  eat: 'ate',
  live: 'lived',
  work: 'worked',
  study: 'studied',
  run: 'ran',
  write: 'wrote',
  read: 'read',
  dance: 'danced',
  sing: 'sang',
  travel: 'traveled',
  cook: 'cooked',
  swim: 'swam',
  draw: 'drew',
  listen: 'listened',
  watch: 'watched',
  buy: 'bought',
  sell: 'sold',
  clean: 'cleaned',
  help: 'helped',
  teach: 'taught',
  learn: 'learned',
  wait: 'waited',
  arrive: 'arrived',
  leave: 'left',
  enter: 'entered',
  return: 'returned',
  start: 'started',
  finish: 'finished',
  open: 'opened',
  close: 'closed',
  win: 'won',
  lose: 'lost',
  change: 'changed',
  find: 'found',
  think: 'thought',
  believe: 'believed',
  know: 'knew',
  feel: 'felt',
  sleep: 'slept',
  'ask for': 'asked for',
  serve: 'served',
  repeat: 'repeated',
  follow: 'followed',
  say: 'said',
  tell: 'told',
  do: 'did',
  make: 'made',
  come: 'came',
  have: 'had',
  'be able to': 'was able to',
  want: 'wanted',
  should: 'should',
  be: 'was/were',
  go: 'went',
  'get up': 'got up',
  shower: 'showered',
  'get dressed': 'got dressed',
}

function enVerb(v: VerbInfo, tense: string): string {
  const base = v.english.replace(/^to /, '')
  if (tense === 'present') return base + 's' // will be fixed per-subject but good enough
  if (tense === 'preterite') return IRREGULAR_PAST[base] ?? base + 'ed'
  if (tense === 'imperfect') return 'used to ' + base
  if (tense === 'future') return 'will ' + base
  if (tense === 'conditional') return 'would ' + base
  return base
}

// Override: for yo/tú/nosotros, remove the 's' from present
// Actually, let's build a proper English conjugator
function enVerbSubject(base: string, subjectIndex: number, tense: string): string {
  if (tense === 'present') {
    // 3rd person singular (ella/él = index 3,4) gets -s
    if (subjectIndex === 3 || subjectIndex === 4) {
      if (base.endsWith('y') && !'aeiou'.includes(base[base.length - 2]))
        return base.slice(0, -1) + 'ies'
      if (base.endsWith('s') || base.endsWith('sh') || base.endsWith('ch') || base.endsWith('x'))
        return base + 'es'
      return base + 's'
    }
    return base
  }
  if (tense === 'preterite') return IRREGULAR_PAST[base] ?? base + 'ed'
  if (tense === 'imperfect') return 'used to ' + base
  if (tense === 'future') return 'will ' + base
  if (tense === 'conditional') return 'would ' + base
  return base
}

// Rebuild buildVerbPhrases to use proper English conjugation
function buildVerbPhrasesV2(v: VerbInfo): Phrase[] {
  const allConj: string[][] = [
    reorder(presentConjugate(v)),
    reorder(preteriteConjugate(v)),
    reorder(imperfectConjugate(v)),
    reorder(futureConjugate(v)),
    reorder(conditionalConjugate(v)),
  ]
  const tenses = ['present', 'preterite', 'imperfect', 'future', 'conditional']

  const ctx = v.context
  const ctxEn = v.contextEnglish
  const contexts = [
    ctx.yo,
    ctx.tu,
    ctx.usted,
    ctx.ella,
    ctx.el,
    ctx.ellos,
    ctx.ustedes,
    ctx.nosotros,
  ]
  const contextsEn = [
    ctxEn.yo,
    ctxEn.tu,
    ctxEn.usted,
    ctxEn.ella,
    ctxEn.el,
    ctxEn.ellos,
    ctxEn.ustedes,
    ctxEn.nosotros,
  ]
  const subjectsEs = ['yo', 'tú', 'usted', 'ella', 'él', 'ellos', 'ustedes', 'nosotros']
  const refProns = ['me', 'te', 'se', 'se', 'se', 'se', 'se', 'nos']
  const base = v.english.replace(/^to /, '')

  const phrases: Phrase[] = []

  for (let t = 0; t < tenses.length; t++) {
    for (let i = 0; i < 8; i++) {
      let spForm = allConj[t][i]
      if (v.reflexive) spForm = refProns[i] + ' ' + spForm
      const spPhrase = `${subjectsEs[i]} ${spForm} ${contexts[i]}`.trim()
      const enVerbStr = enVerbSubject(base, i, tenses[t])
      const enPhrase = `${SUBJECTS_EN[i](enVerbStr)} ${contextsEn[i]}`.trim()
      phrases.push({ answer: enPhrase, question: spPhrase })
    }
  }

  for (const p of v.infinitivePhrases) {
    phrases.push({ answer: p.en, question: p.es })
  }

  return phrases
}

// ---------- verb definitions ----------

const VERBS: VerbInfo[] = [
  {
    infinitive: 'hablar',
    english: 'to speak',
    type: 'ar',
    context: {
      yo: 'español',
      tu: 'inglés',
      usted: 'inglés',
      ella: 'inglés',
      el: 'inglés',
      ellos: 'inglés',
      ustedes: 'inglés',
      nosotros: 'español',
    },
    contextEnglish: {
      yo: 'Spanish',
      tu: 'English',
      usted: 'English',
      ella: 'English',
      el: 'English',
      ellos: 'English',
      ustedes: 'English',
      nosotros: 'Spanish',
    },
    infinitivePhrases: [
      { es: 'hablar en público', en: 'to speak in public' },
      { es: 'hablar español', en: 'to speak Spanish' },
      { es: 'hablar inglés', en: 'to speak English' },
      { es: 'hablar con amigos', en: 'to speak with friends' },
      { es: 'hablar por teléfono', en: 'to speak on the phone' },
      { es: 'hablar de un tema', en: 'to speak about a topic' },
      { es: 'hablar despacio', en: 'to speak slowly' },
      { es: 'hablar con claridad', en: 'to speak clearly' },
      { es: 'hablar en voz alta', en: 'to speak loudly' },
      { es: 'nosotros deberíamos hablar español', en: 'we should speak Spanish' },
      { es: 'hablemos español', en: "let's speak Spanish" },
    ],
  },
  {
    infinitive: 'comer',
    english: 'to eat',
    type: 'er',
    context: {
      yo: 'el desayuno',
      tu: 'el almuerzo',
      usted: 'el almuerzo',
      ella: 'la cena',
      el: 'la cena',
      ellos: 'el desayuno',
      ustedes: 'el desayuno',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'breakfast',
      tu: 'lunch',
      usted: 'lunch',
      ella: 'dinner',
      el: 'dinner',
      ellos: 'breakfast',
      ustedes: 'breakfast',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'comer el desayuno', en: 'to eat breakfast' },
      { es: 'comer el almuerzo', en: 'to eat lunch' },
      { es: 'comer la cena', en: 'to eat dinner' },
      { es: 'comer con amigos', en: 'to eat with friends' },
      { es: 'comer en un restaurante', en: 'to eat at a restaurant' },
      { es: 'comer en casa', en: 'to eat at home' },
      { es: 'comer rápido', en: 'to eat quickly' },
      { es: 'comer saludable', en: 'to eat healthily' },
      { es: 'nosotros deberíamos comer bien', en: 'we should eat well' },
      { es: 'comamos juntos', en: "let's eat together" },
    ],
  },
  {
    infinitive: 'vivir',
    english: 'to live',
    type: 'ir',
    context: {
      yo: 'en una casa',
      tu: 'en un apartamento',
      usted: 'en un apartamento',
      ella: 'en una casa',
      el: 'en una casa',
      ellos: 'en un apartamento',
      ustedes: 'en un apartamento',
      nosotros: 'en la ciudad',
    },
    contextEnglish: {
      yo: 'in a house',
      tu: 'in an apartment',
      usted: 'in an apartment',
      ella: 'in a house',
      el: 'in a house',
      ellos: 'in an apartment',
      ustedes: 'in an apartment',
      nosotros: 'in the city',
    },
    infinitivePhrases: [
      { es: 'vivir en una ciudad', en: 'to live in a city' },
      { es: 'vivir en el campo', en: 'to live in the countryside' },
      { es: 'vivir con la familia', en: 'to live with family' },
      { es: 'vivir solo', en: 'to live alone' },
      { es: 'vivir cerca del trabajo', en: 'to live close to work' },
      { es: 'vivir en el extranjero', en: 'to live abroad' },
      { es: 'nosotros deberíamos vivir aquí', en: 'we should live here' },
      { es: 'vivamos juntos', en: "let's live together" },
    ],
  },
  {
    infinitive: 'trabajar',
    english: 'to work',
    type: 'ar',
    context: {
      yo: 'en una empresa',
      tu: 'en una tienda',
      usted: 'en una tienda',
      ella: 'en una empresa',
      el: 'en una empresa',
      ellos: 'en una tienda',
      ustedes: 'en una tienda',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'at a company',
      tu: 'at a store',
      usted: 'at a store',
      ella: 'at a company',
      el: 'at a company',
      ellos: 'at a store',
      ustedes: 'at a store',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'trabajar desde casa', en: 'to work from home' },
      { es: 'trabajar en una oficina', en: 'to work in an office' },
      { es: 'trabajar con colegas', en: 'to work with colleagues' },
      { es: 'trabajar en un proyecto', en: 'to work on a project' },
      { es: 'trabajar horas extra', en: 'to work overtime' },
      { es: 'trabajar a tiempo parcial', en: 'to work part-time' },
      { es: 'nosotros deberíamos trabajar más', en: 'we should work more' },
      { es: 'trabajemos en equipo', en: "let's work as a team" },
    ],
  },
  {
    infinitive: 'estudiar',
    english: 'to study',
    type: 'ar',
    context: {
      yo: 'en la biblioteca',
      tu: 'en casa',
      usted: 'en casa',
      ella: 'en la biblioteca',
      el: 'en la biblioteca',
      ellos: 'en casa',
      ustedes: 'en casa',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'at the library',
      tu: 'at home',
      usted: 'at home',
      ella: 'at the library',
      el: 'at the library',
      ellos: 'at home',
      ustedes: 'at home',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'estudiar para un examen', en: 'to study for an exam' },
      { es: 'estudiar con amigos', en: 'to study with friends' },
      { es: 'estudiar en grupo', en: 'to study in a group' },
      { es: 'estudiar por la noche', en: 'to study at night' },
      { es: 'estudiar durante el día', en: 'to study during the day' },
      { es: 'estudiar un idioma', en: 'to study a language' },
      { es: 'nosotros deberíamos estudiar más', en: 'we should study more' },
      { es: 'estudiemos para el examen', en: "let's study for the exam" },
    ],
  },
  {
    infinitive: 'correr',
    english: 'to run',
    type: 'er',
    context: {
      yo: 'en el parque',
      tu: 'por la mañana',
      usted: 'por la mañana',
      ella: 'en el parque',
      el: 'en el parque',
      ellos: 'por la mañana',
      ustedes: 'por la mañana',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'in the park',
      tu: 'in the morning',
      usted: 'in the morning',
      ella: 'in the park',
      el: 'in the park',
      ellos: 'in the morning',
      ustedes: 'in the morning',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'correr rápido', en: 'to run fast' },
      { es: 'correr despacio', en: 'to run slowly' },
      { es: 'correr con amigos', en: 'to run with friends' },
      { es: 'correr en una carrera', en: 'to run in a race' },
      { es: 'correr para hacer ejercicio', en: 'to run for exercise' },
      { es: 'correr cinco kilómetros', en: 'to run five kilometers' },
      { es: 'nosotros deberíamos correr más', en: 'we should run more' },
      { es: 'corramos en el parque', en: "let's run in the park" },
    ],
  },
  {
    infinitive: 'escribir',
    english: 'to write',
    type: 'ir',
    context: {
      yo: 'una carta',
      tu: 'un correo',
      usted: 'un correo',
      ella: 'una historia',
      el: 'una historia',
      ellos: 'correos',
      ustedes: 'correos',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'a letter',
      tu: 'an email',
      usted: 'an email',
      ella: 'a story',
      el: 'a story',
      ellos: 'emails',
      ustedes: 'emails',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'escribir una carta', en: 'to write a letter' },
      { es: 'escribir un correo electrónico', en: 'to write an email' },
      { es: 'escribir una historia', en: 'to write a story' },
      { es: 'escribir con bolígrafo', en: 'to write with a pen' },
      { es: 'escribir en español', en: 'to write in Spanish' },
      { es: 'escribir en una computadora', en: 'to write on a computer' },
      { es: 'nosotros deberíamos escribir más', en: 'we should write more' },
      { es: 'escribamos una historia', en: "let's write a story" },
    ],
  },
  {
    infinitive: 'leer',
    english: 'to read',
    type: 'er',
    preteriteStem: 'le', // leyó, leyeron handled specially
    context: {
      yo: 'un libro',
      tu: 'el periódico',
      usted: 'el periódico',
      ella: 'una revista',
      el: 'una revista',
      ellos: 'libros',
      ustedes: 'libros',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'a book',
      tu: 'the newspaper',
      usted: 'the newspaper',
      ella: 'a magazine',
      el: 'a magazine',
      ellos: 'books',
      ustedes: 'books',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'leer un libro', en: 'to read a book' },
      { es: 'leer el periódico', en: 'to read the newspaper' },
      { es: 'leer una revista', en: 'to read a magazine' },
      { es: 'leer con gafas', en: 'to read with glasses' },
      { es: 'leer en la cama', en: 'to read in bed' },
      { es: 'leer por la noche', en: 'to read at night' },
      { es: 'nosotros deberíamos leer más', en: 'we should read more' },
      { es: 'leamos un libro', en: "let's read a book" },
    ],
  },
  {
    infinitive: 'bailar',
    english: 'to dance',
    type: 'ar',
    context: {
      yo: 'en la fiesta',
      tu: 'en el club',
      usted: 'en el club',
      ella: 'en la fiesta',
      el: 'en la fiesta',
      ellos: 'en el club',
      ustedes: 'en el club',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'at the party',
      tu: 'at the club',
      usted: 'at the club',
      ella: 'at the party',
      el: 'at the party',
      ellos: 'at the club',
      ustedes: 'at the club',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'bailar salsa', en: 'to dance salsa' },
      { es: 'bailar tango', en: 'to dance tango' },
      { es: 'bailar con una pareja', en: 'to dance with a partner' },
      { es: 'bailar en una boda', en: 'to dance at a wedding' },
      { es: 'bailar bien', en: 'to dance well' },
      { es: 'nosotros deberíamos bailar más', en: 'we should dance more' },
      { es: 'bailemos en la fiesta', en: "let's dance at the party" },
    ],
  },
  {
    infinitive: 'cantar',
    english: 'to sing',
    type: 'ar',
    context: {
      yo: 'en la ducha',
      tu: 'en el coche',
      usted: 'en el coche',
      ella: 'en un concierto',
      el: 'en un concierto',
      ellos: 'en la ducha',
      ustedes: 'en la ducha',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'in the shower',
      tu: 'in the car',
      usted: 'in the car',
      ella: 'at a concert',
      el: 'at a concert',
      ellos: 'in the shower',
      ustedes: 'in the shower',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'cantar una canción', en: 'to sing a song' },
      { es: 'cantar en un coro', en: 'to sing in a choir' },
      { es: 'cantar con amigos', en: 'to sing with friends' },
      { es: 'cantar en el escenario', en: 'to sing on stage' },
      { es: 'cantar bien', en: 'to sing well' },
      { es: 'nosotros deberíamos cantar más', en: 'we should sing more' },
      { es: 'cantemos juntos', en: "let's sing together" },
    ],
  },
  {
    infinitive: 'viajar',
    english: 'to travel',
    type: 'ar',
    context: {
      yo: 'a España',
      tu: 'a México',
      usted: 'a México',
      ella: 'a Francia',
      el: 'a Francia',
      ellos: 'a España',
      ustedes: 'a España',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'to Spain',
      tu: 'to Mexico',
      usted: 'to Mexico',
      ella: 'to France',
      el: 'to France',
      ellos: 'to Spain',
      ustedes: 'to Spain',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'viajar en avión', en: 'to travel by plane' },
      { es: 'viajar en tren', en: 'to travel by train' },
      { es: 'viajar en coche', en: 'to travel by car' },
      { es: 'viajar con amigos', en: 'to travel with friends' },
      { es: 'viajar de vacaciones', en: 'to travel on vacation' },
      { es: 'viajar por trabajo', en: 'to travel for work' },
      { es: 'nosotros deberíamos viajar más', en: 'we should travel more' },
      { es: 'viajemos a un país nuevo', en: "let's travel to a new country" },
    ],
  },
  {
    infinitive: 'cocinar',
    english: 'to cook',
    type: 'ar',
    context: {
      yo: 'la cena',
      tu: 'el desayuno',
      usted: 'el desayuno',
      ella: 'el almuerzo',
      el: 'el almuerzo',
      ellos: 'la cena',
      ustedes: 'la cena',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'dinner',
      tu: 'breakfast',
      usted: 'breakfast',
      ella: 'lunch',
      el: 'lunch',
      ellos: 'dinner',
      ustedes: 'dinner',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'cocinar una comida', en: 'to cook a meal' },
      { es: 'cocinar con verduras', en: 'to cook with vegetables' },
      { es: 'cocinar con carne', en: 'to cook with meat' },
      { es: 'cocinar con especias', en: 'to cook with spices' },
      { es: 'cocinar para la familia', en: 'to cook for the family' },
      { es: 'cocinar en casa', en: 'to cook at home' },
      { es: 'nosotros deberíamos cocinar más', en: 'we should cook more' },
      { es: 'cocinemos juntos', en: "let's cook together" },
    ],
  },
  {
    infinitive: 'nadar',
    english: 'to swim',
    type: 'ar',
    context: {
      yo: 'en la piscina',
      tu: 'en el océano',
      usted: 'en el océano',
      ella: 'en la piscina',
      el: 'en la piscina',
      ellos: 'en el océano',
      ustedes: 'en el océano',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'in the pool',
      tu: 'in the ocean',
      usted: 'in the ocean',
      ella: 'in the pool',
      el: 'in the pool',
      ellos: 'in the ocean',
      ustedes: 'in the ocean',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'nadar en un lago', en: 'to swim in a lake' },
      { es: 'nadar en el mar', en: 'to swim in the sea' },
      { es: 'nadar en la piscina', en: 'to swim in the pool' },
      { es: 'nadar con amigos', en: 'to swim with friends' },
      { es: 'nadar para hacer ejercicio', en: 'to swim for exercise' },
      { es: 'nosotros deberíamos nadar más', en: 'we should swim more' },
      { es: 'nademos juntos', en: "let's swim together" },
    ],
  },
  {
    infinitive: 'dibujar',
    english: 'to draw',
    type: 'ar',
    context: {
      yo: 'un retrato',
      tu: 'un paisaje',
      usted: 'un paisaje',
      ella: 'un retrato',
      el: 'un retrato',
      ellos: 'paisajes',
      ustedes: 'paisajes',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'a portrait',
      tu: 'a landscape',
      usted: 'a landscape',
      ella: 'a portrait',
      el: 'a portrait',
      ellos: 'landscapes',
      ustedes: 'landscapes',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'dibujar con lápices', en: 'to draw with pencils' },
      { es: 'dibujar con marcadores', en: 'to draw with markers' },
      { es: 'dibujar con carbón', en: 'to draw with charcoal' },
      { es: 'dibujar con tinta', en: 'to draw with ink' },
      { es: 'dibujar bien', en: 'to draw well' },
      { es: 'nosotros deberíamos dibujar más', en: 'we should draw more' },
      { es: 'dibujemos juntos', en: "let's draw together" },
    ],
  },
  {
    infinitive: 'escuchar',
    english: 'to listen',
    type: 'ar',
    context: {
      yo: 'música',
      tu: 'la radio',
      usted: 'la radio',
      ella: 'podcasts',
      el: 'podcasts',
      ellos: 'música',
      ustedes: 'música',
      nosotros: 'música juntos',
    },
    contextEnglish: {
      yo: 'to music',
      tu: 'to the radio',
      usted: 'to the radio',
      ella: 'to podcasts',
      el: 'to podcasts',
      ellos: 'to music',
      ustedes: 'to music',
      nosotros: 'to music together',
    },
    infinitivePhrases: [
      { es: 'escuchar música', en: 'to listen to music' },
      { es: 'escuchar la radio', en: 'to listen to the radio' },
      { es: 'escuchar podcasts', en: 'to listen to podcasts' },
      { es: 'escuchar con auriculares', en: 'to listen with headphones' },
      { es: 'escuchar en casa', en: 'to listen at home' },
      { es: 'nosotros deberíamos escuchar más', en: 'we should listen more' },
      { es: 'escuchemos música', en: "let's listen to music" },
    ],
  },
  {
    infinitive: 'mirar',
    english: 'to watch',
    type: 'ar',
    context: {
      yo: 'la televisión',
      tu: 'una película',
      usted: 'una película',
      ella: 'un programa',
      el: 'un programa',
      ellos: 'la televisión',
      ustedes: 'la televisión',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'TV',
      tu: 'a movie',
      usted: 'a movie',
      ella: 'a show',
      el: 'a show',
      ellos: 'TV',
      ustedes: 'TV',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'mirar la televisión', en: 'to watch TV' },
      { es: 'mirar una película', en: 'to watch a movie' },
      { es: 'mirar un programa', en: 'to watch a show' },
      { es: 'mirar con amigos', en: 'to watch with friends' },
      { es: 'mirar por la noche', en: 'to watch at night' },
      { es: 'nosotros deberíamos mirar menos televisión', en: 'we should watch less TV' },
      { es: 'miremos una película', en: "let's watch a movie" },
    ],
  },
  {
    infinitive: 'comprar',
    english: 'to buy',
    type: 'ar',
    context: {
      yo: 'ropa',
      tu: 'comestibles',
      usted: 'comestibles',
      ella: 'un coche',
      el: 'un coche',
      ellos: 'ropa',
      ustedes: 'ropa',
      nosotros: 'comestibles juntos',
    },
    contextEnglish: {
      yo: 'clothes',
      tu: 'groceries',
      usted: 'groceries',
      ella: 'a car',
      el: 'a car',
      ellos: 'clothes',
      ustedes: 'clothes',
      nosotros: 'groceries together',
    },
    infinitivePhrases: [
      { es: 'comprar ropa', en: 'to buy clothes' },
      { es: 'comprar comestibles', en: 'to buy groceries' },
      { es: 'comprar un coche', en: 'to buy a car' },
      { es: 'comprar una casa', en: 'to buy a house' },
      { es: 'comprar un regalo', en: 'to buy a gift' },
      { es: 'comprar en línea', en: 'to buy online' },
      { es: 'comprar en una tienda', en: 'to buy in a store' },
      { es: 'nosotros deberíamos comprar menos', en: 'we should buy less' },
      { es: 'compremos un regalo', en: "let's buy a gift" },
    ],
  },
  {
    infinitive: 'vender',
    english: 'to sell',
    type: 'er',
    context: {
      yo: 'productos',
      tu: 'artículos',
      usted: 'artículos',
      ella: 'ropa',
      el: 'ropa',
      ellos: 'productos',
      ustedes: 'productos',
      nosotros: 'artículos juntos',
    },
    contextEnglish: {
      yo: 'products',
      tu: 'items',
      usted: 'items',
      ella: 'clothes',
      el: 'clothes',
      ellos: 'products',
      ustedes: 'products',
      nosotros: 'items together',
    },
    infinitivePhrases: [
      { es: 'vender ropa', en: 'to sell clothes' },
      { es: 'vender productos', en: 'to sell products' },
      { es: 'vender en línea', en: 'to sell online' },
      { es: 'vender en una tienda', en: 'to sell in a store' },
      { es: 'vender en un mercado', en: 'to sell at a market' },
      { es: 'nosotros deberíamos vender más', en: 'we should sell more' },
      { es: 'vendamos en línea', en: "let's sell online" },
    ],
  },
  {
    infinitive: 'limpiar',
    english: 'to clean',
    type: 'ar',
    context: {
      yo: 'la casa',
      tu: 'la habitación',
      usted: 'la habitación',
      ella: 'la cocina',
      el: 'la cocina',
      ellos: 'la casa',
      ustedes: 'la casa',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'the house',
      tu: 'the room',
      usted: 'the room',
      ella: 'the kitchen',
      el: 'the kitchen',
      ellos: 'the house',
      ustedes: 'the house',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'limpiar la casa', en: 'to clean the house' },
      { es: 'limpiar la habitación', en: 'to clean the room' },
      { es: 'limpiar la cocina', en: 'to clean the kitchen' },
      { es: 'limpiar con una aspiradora', en: 'to clean with a vacuum' },
      { es: 'limpiar con una escoba', en: 'to clean with a broom' },
      { es: 'nosotros deberíamos limpiar más', en: 'we should clean more' },
      { es: 'limpiemos la casa', en: "let's clean the house" },
    ],
  },
  {
    infinitive: 'ayudar',
    english: 'to help',
    type: 'ar',
    context: {
      yo: 'a mis amigos',
      tu: 'a tu familia',
      usted: 'a su familia',
      ella: 'a sus amigos',
      el: 'a sus amigos',
      ellos: 'a su familia',
      ustedes: 'a su familia',
      nosotros: 'los demás',
    },
    contextEnglish: {
      yo: 'my friends',
      tu: 'your family',
      usted: 'your family',
      ella: 'her friends',
      el: 'his friends',
      ellos: 'their family',
      ustedes: 'their family',
      nosotros: 'others',
    },
    infinitivePhrases: [
      { es: 'ayudar con la tarea', en: 'to help with homework' },
      { es: 'ayudar con las tareas del hogar', en: 'to help with chores' },
      { es: 'ayudar con un proyecto', en: 'to help with a project' },
      { es: 'ayudar con un problema', en: 'to help with a problem' },
      { es: 'nosotros deberíamos ayudar más', en: 'we should help more' },
      { es: 'ayudemos a los demás', en: "let's help others" },
    ],
  },
  {
    infinitive: 'enseñar',
    english: 'to teach',
    type: 'ar',
    context: {
      yo: 'español',
      tu: 'inglés',
      usted: 'inglés',
      ella: 'matemáticas',
      el: 'matemáticas',
      ellos: 'español',
      ustedes: 'español',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'Spanish',
      tu: 'English',
      usted: 'English',
      ella: 'math',
      el: 'math',
      ellos: 'Spanish',
      ustedes: 'Spanish',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'enseñar una clase', en: 'to teach a class' },
      { es: 'enseñar una materia', en: 'to teach a subject' },
      { es: 'enseñar con una pizarra', en: 'to teach with a whiteboard' },
      { es: 'enseñar con un proyector', en: 'to teach with a projector' },
      { es: 'enseñar con paciencia', en: 'to teach with patience' },
      { es: 'nosotros deberíamos enseñar mejor', en: 'we should teach better' },
      { es: 'enseñemos una clase', en: "let's teach a class" },
    ],
  },
  {
    infinitive: 'aprender',
    english: 'to learn',
    type: 'er',
    context: {
      yo: 'español',
      tu: 'inglés',
      usted: 'inglés',
      ella: 'matemáticas',
      el: 'matemáticas',
      ellos: 'español',
      ustedes: 'español',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'Spanish',
      tu: 'English',
      usted: 'English',
      ella: 'math',
      el: 'math',
      ellos: 'Spanish',
      ustedes: 'Spanish',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'aprender un idioma', en: 'to learn a language' },
      { es: 'aprender una materia', en: 'to learn a subject' },
      { es: 'aprender con un maestro', en: 'to learn with a teacher' },
      { es: 'aprender de los errores', en: 'to learn from mistakes' },
      { es: 'aprender rápido', en: 'to learn quickly' },
      { es: 'nosotros deberíamos aprender más', en: 'we should learn more' },
      { es: 'aprendamos juntos', en: "let's learn together" },
    ],
  },
  {
    infinitive: 'esperar',
    english: 'to wait',
    type: 'ar',
    context: {
      yo: 'el autobús',
      tu: 'el tren',
      usted: 'el tren',
      ella: 'el taxi',
      el: 'el taxi',
      ellos: 'el autobús',
      ustedes: 'el autobús',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'for the bus',
      tu: 'for the train',
      usted: 'for the train',
      ella: 'for the taxi',
      el: 'for the taxi',
      ellos: 'for the bus',
      ustedes: 'for the bus',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'esperar a un amigo', en: 'to wait for a friend' },
      { es: 'esperar a un médico', en: 'to wait for a doctor' },
      { es: 'esperar con paciencia', en: 'to wait patiently' },
      { es: 'esperar en la fila', en: 'to wait in line' },
      { es: 'nosotros deberíamos esperar aquí', en: 'we should wait here' },
      { es: 'esperemos aquí', en: "let's wait here" },
    ],
  },
  {
    infinitive: 'llegar',
    english: 'to arrive',
    type: 'ar',
    presentStem: 'lleg',
    context: {
      yo: 'al aeropuerto',
      tu: 'al hotel',
      usted: 'al hotel',
      ella: 'al restaurante',
      el: 'al restaurante',
      ellos: 'al aeropuerto',
      ustedes: 'al aeropuerto',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'at the airport',
      tu: 'at the hotel',
      usted: 'at the hotel',
      ella: 'at the restaurant',
      el: 'at the restaurant',
      ellos: 'at the airport',
      ustedes: 'at the airport',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'llegar a tiempo', en: 'to arrive on time' },
      { es: 'llegar tarde', en: 'to arrive late' },
      { es: 'llegar temprano', en: 'to arrive early' },
      { es: 'llegar en avión', en: 'to arrive by plane' },
      { es: 'llegar en tren', en: 'to arrive by train' },
      { es: 'nosotros deberíamos llegar temprano', en: 'we should arrive early' },
      { es: 'lleguemos a tiempo', en: "let's arrive on time" },
    ],
  },
  {
    infinitive: 'salir',
    english: 'to leave',
    type: 'ir',
    presentYoOverride: 'salgo',
    futureStem: 'saldr',
    context: {
      yo: 'de la casa',
      tu: 'del apartamento',
      usted: 'del apartamento',
      ella: 'de la oficina',
      el: 'de la oficina',
      ellos: 'de la casa',
      ustedes: 'de la casa',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'the house',
      tu: 'the apartment',
      usted: 'the apartment',
      ella: 'the office',
      el: 'the office',
      ellos: 'the house',
      ustedes: 'the house',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'salir para el trabajo', en: 'to leave for work' },
      { es: 'salir para la escuela', en: 'to leave for school' },
      { es: 'salir de viaje', en: 'to leave on a trip' },
      { es: 'salir con amigos', en: 'to go out with friends' },
      { es: 'salir tarde', en: 'to leave late' },
      { es: 'nosotros deberíamos salir más temprano', en: 'we should leave earlier' },
      { es: 'salgamos ahora', en: "let's leave now" },
    ],
  },
  {
    infinitive: 'entrar',
    english: 'to enter',
    type: 'ar',
    context: {
      yo: 'en la habitación',
      tu: 'en el edificio',
      usted: 'en el edificio',
      ella: 'en la casa',
      el: 'en la casa',
      ellos: 'en la habitación',
      ustedes: 'en la habitación',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'the room',
      tu: 'the building',
      usted: 'the building',
      ella: 'the house',
      el: 'the house',
      ellos: 'the room',
      ustedes: 'the room',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'entrar en un lugar', en: 'to enter a place' },
      { es: 'entrar en un edificio', en: 'to enter a building' },
      { es: 'entrar en una tienda', en: 'to enter a store' },
      { es: 'entrar sin permiso', en: 'to enter without permission' },
      { es: 'nosotros deberíamos entrar ahora', en: 'we should enter now' },
      { es: 'entremos juntos', en: "let's enter together" },
    ],
  },
  {
    infinitive: 'volver',
    english: 'to return',
    type: 'er',
    stemChangePresent: 'o>ue',
    context: {
      yo: 'a casa',
      tu: 'al trabajo',
      usted: 'al trabajo',
      ella: 'a la escuela',
      el: 'a la escuela',
      ellos: 'a casa',
      ustedes: 'a casa',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'home',
      tu: 'to work',
      usted: 'to work',
      ella: 'to school',
      el: 'to school',
      ellos: 'home',
      ustedes: 'home',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'volver a un lugar', en: 'to return to a place' },
      { es: 'volver a empezar', en: 'to start over' },
      { es: 'volver a casa', en: 'to return home' },
      { es: 'nosotros deberíamos volver pronto', en: 'we should return soon' },
      { es: 'volvamos a casa', en: "let's return home" },
    ],
  },
  {
    infinitive: 'empezar',
    english: 'to start',
    type: 'ar',
    stemChangePresent: 'e>ie',
    context: {
      yo: 'a trabajar',
      tu: 'la escuela',
      usted: 'la escuela',
      ella: 'un proyecto',
      el: 'un proyecto',
      ellos: 'a trabajar',
      ustedes: 'a trabajar',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'work',
      tu: 'school',
      usted: 'school',
      ella: 'a project',
      el: 'a project',
      ellos: 'work',
      ustedes: 'work',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'empezar una tarea', en: 'to start a task' },
      { es: 'empezar un proyecto', en: 'to start a project' },
      { es: 'empezar desde cero', en: 'to start from scratch' },
      { es: 'empezar de nuevo', en: 'to start over' },
      { es: 'nosotros deberíamos empezar ahora', en: 'we should start now' },
      { es: 'empecemos ahora', en: "let's start now" },
    ],
  },
  {
    infinitive: 'terminar',
    english: 'to finish',
    type: 'ar',
    context: {
      yo: 'el trabajo',
      tu: 'la escuela',
      usted: 'la escuela',
      ella: 'el proyecto',
      el: 'el proyecto',
      ellos: 'el trabajo',
      ustedes: 'el trabajo',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'work',
      tu: 'school',
      usted: 'school',
      ella: 'the project',
      el: 'the project',
      ellos: 'work',
      ustedes: 'work',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'terminar una tarea', en: 'to finish a task' },
      { es: 'terminar un proyecto', en: 'to finish a project' },
      { es: 'terminar a tiempo', en: 'to finish on time' },
      { es: 'terminar la tarea', en: 'to finish the homework' },
      { es: 'nosotros deberíamos terminar pronto', en: 'we should finish soon' },
      { es: 'terminemos ahora', en: "let's finish now" },
    ],
  },
  {
    infinitive: 'abrir',
    english: 'to open',
    type: 'ir',
    context: {
      yo: 'la puerta',
      tu: 'la ventana',
      usted: 'la ventana',
      ella: 'la caja',
      el: 'la caja',
      ellos: 'la puerta',
      ustedes: 'la puerta',
      nosotros: 'la tienda',
    },
    contextEnglish: {
      yo: 'the door',
      tu: 'the window',
      usted: 'the window',
      ella: 'the box',
      el: 'the box',
      ellos: 'the door',
      ustedes: 'the door',
      nosotros: 'the store',
    },
    infinitivePhrases: [
      { es: 'abrir una puerta', en: 'to open a door' },
      { es: 'abrir una ventana', en: 'to open a window' },
      { es: 'abrir una caja', en: 'to open a box' },
      { es: 'abrir un libro', en: 'to open a book' },
      { es: 'nosotros deberíamos abrir la ventana', en: 'we should open the window' },
      { es: 'abramos la puerta', en: "let's open the door" },
    ],
  },
  {
    infinitive: 'cerrar',
    english: 'to close',
    type: 'ar',
    stemChangePresent: 'e>ie',
    context: {
      yo: 'la puerta',
      tu: 'la ventana',
      usted: 'la ventana',
      ella: 'la caja',
      el: 'la caja',
      ellos: 'la puerta',
      ustedes: 'la puerta',
      nosotros: 'la tienda',
    },
    contextEnglish: {
      yo: 'the door',
      tu: 'the window',
      usted: 'the window',
      ella: 'the box',
      el: 'the box',
      ellos: 'the door',
      ustedes: 'the door',
      nosotros: 'the store',
    },
    infinitivePhrases: [
      { es: 'cerrar una puerta', en: 'to close a door' },
      { es: 'cerrar una ventana', en: 'to close a window' },
      { es: 'cerrar una caja', en: 'to close a box' },
      { es: 'cerrar con llave', en: 'to lock (close with a key)' },
      { es: 'nosotros deberíamos cerrar la puerta', en: 'we should close the door' },
      { es: 'cerremos las ventanas', en: "let's close the windows" },
    ],
  },
  {
    infinitive: 'ganar',
    english: 'to win',
    type: 'ar',
    context: {
      yo: 'el juego',
      tu: 'el premio',
      usted: 'el premio',
      ella: 'la competencia',
      el: 'la competencia',
      ellos: 'el juego',
      ustedes: 'el juego',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'the game',
      tu: 'the prize',
      usted: 'the prize',
      ella: 'the competition',
      el: 'the competition',
      ellos: 'the game',
      ustedes: 'the game',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'ganar un juego', en: 'to win a game' },
      { es: 'ganar un premio', en: 'to win a prize' },
      { es: 'ganar una competencia', en: 'to win a competition' },
      { es: 'ganar dinero', en: 'to win/earn money' },
      { es: 'nosotros deberíamos ganar más', en: 'we should win more' },
      { es: 'ganemos este partido', en: "let's win this match" },
    ],
  },
  {
    infinitive: 'perder',
    english: 'to lose',
    type: 'er',
    stemChangePresent: 'e>ie',
    context: {
      yo: 'el juego',
      tu: 'el premio',
      usted: 'el premio',
      ella: 'la competencia',
      el: 'la competencia',
      ellos: 'el juego',
      ustedes: 'el juego',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'the game',
      tu: 'the prize',
      usted: 'the prize',
      ella: 'the competition',
      el: 'the competition',
      ellos: 'the game',
      ustedes: 'the game',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'perder un juego', en: 'to lose a game' },
      { es: 'perder las llaves', en: 'to lose the keys' },
      { es: 'perder el tiempo', en: 'to waste time' },
      { es: 'perder la paciencia', en: 'to lose patience' },
      { es: 'perder de vista', en: 'to lose sight of' },
      { es: 'nosotros deberíamos perder menos', en: 'we should lose less' },
    ],
  },
  {
    infinitive: 'cambiar',
    english: 'to change',
    type: 'ar',
    context: {
      yo: 'mi ropa',
      tu: 'tus planes',
      usted: 'sus planes',
      ella: 'de opinión',
      el: 'de opinión',
      ellos: 'su ropa',
      ustedes: 'su ropa',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'my clothes',
      tu: 'your plans',
      usted: 'your plans',
      ella: 'her mind',
      el: 'his mind',
      ellos: 'their clothes',
      ustedes: 'their clothes',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'cambiar de ropa', en: 'to change clothes' },
      { es: 'cambiar de planes', en: 'to change plans' },
      { es: 'cambiar de opinión', en: 'to change your mind' },
      { es: 'cambiar el mundo', en: 'to change the world' },
      { es: 'nosotros deberíamos cambiar más', en: 'we should change more' },
      { es: 'cambiemos de planes', en: "let's change plans" },
    ],
  },
  {
    infinitive: 'encontrar',
    english: 'to find',
    type: 'ar',
    stemChangePresent: 'o>ue',
    context: {
      yo: 'mis llaves',
      tu: 'tu teléfono',
      usted: 'su teléfono',
      ella: 'su cartera',
      el: 'su cartera',
      ellos: 'sus llaves',
      ustedes: 'sus llaves',
      nosotros: 'una solución',
    },
    contextEnglish: {
      yo: 'my keys',
      tu: 'your phone',
      usted: 'your phone',
      ella: 'her wallet',
      el: 'his wallet',
      ellos: 'their keys',
      ustedes: 'their keys',
      nosotros: 'a solution',
    },
    infinitivePhrases: [
      { es: 'encontrar algo', en: 'to find something' },
      { es: 'encontrar una solución', en: 'to find a solution' },
      { es: 'encontrar un lugar', en: 'to find a place' },
      { es: 'encontrar trabajo', en: 'to find work' },
      { es: 'nosotros deberíamos encontrar una solución', en: 'we should find a solution' },
      { es: 'encontremos una solución', en: "let's find a solution" },
    ],
  },
  {
    infinitive: 'pensar',
    english: 'to think',
    type: 'ar',
    stemChangePresent: 'e>ie',
    context: {
      yo: 'en el problema',
      tu: 'en la solución',
      usted: 'en la solución',
      ella: 'en la idea',
      el: 'en la idea',
      ellos: 'en el problema',
      ustedes: 'en el problema',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'about the problem',
      tu: 'about the solution',
      usted: 'about the solution',
      ella: 'about the idea',
      el: 'about the idea',
      ellos: 'about the problem',
      ustedes: 'about the problem',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'pensar en algo', en: 'to think about something' },
      { es: 'pensar en un problema', en: 'to think about a problem' },
      { es: 'pensar con claridad', en: 'to think clearly' },
      { es: 'pensar antes de actuar', en: 'to think before acting' },
      { es: 'nosotros deberíamos pensar más', en: 'we should think more' },
      { es: 'pensemos en una solución', en: "let's think of a solution" },
    ],
  },
  {
    infinitive: 'creer',
    english: 'to believe',
    type: 'er',
    context: {
      yo: 'en Dios',
      tu: 'en ti mismo',
      usted: 'en sí mismo',
      ella: 'en el amor',
      el: 'en el amor',
      ellos: 'en Dios',
      ustedes: 'en Dios',
      nosotros: 'en nosotros mismos',
    },
    contextEnglish: {
      yo: 'in God',
      tu: 'in yourself',
      usted: 'in yourself',
      ella: 'in love',
      el: 'in love',
      ellos: 'in God',
      ustedes: 'in God',
      nosotros: 'in ourselves',
    },
    infinitivePhrases: [
      { es: 'creer en algo', en: 'to believe in something' },
      { es: 'creer en una persona', en: 'to believe in a person' },
      { es: 'creer en uno mismo', en: 'to believe in oneself' },
      {
        es: 'nosotros deberíamos creer más en nosotros',
        en: 'we should believe in ourselves more',
      },
      { es: 'creamos en nosotros mismos', en: "let's believe in ourselves" },
    ],
  },
  {
    infinitive: 'saber',
    english: 'to know',
    type: 'er',
    presentYoOverride: 'sé',
    preteriteStem: 'sup',
    futureStem: 'sabr',
    context: {
      yo: 'la respuesta',
      tu: 'la información',
      usted: 'la información',
      ella: 'el hecho',
      el: 'el hecho',
      ellos: 'la respuesta',
      ustedes: 'la respuesta',
      nosotros: 'la verdad',
    },
    contextEnglish: {
      yo: 'the answer',
      tu: 'the information',
      usted: 'the information',
      ella: 'the fact',
      el: 'the fact',
      ellos: 'the answer',
      ustedes: 'the answer',
      nosotros: 'the truth',
    },
    infinitivePhrases: [
      { es: 'saber un hecho', en: 'to know a fact' },
      { es: 'saber la respuesta', en: 'to know the answer' },
      { es: 'saber cocinar', en: 'to know how to cook' },
      { es: 'saber hablar español', en: 'to know how to speak Spanish' },
      { es: 'nosotros deberíamos saber más', en: 'we should know more' },
      { es: 'sepamos la verdad', en: "let's know the truth" },
    ],
  },
  {
    infinitive: 'conocer',
    english: 'to know (people/places)',
    type: 'er',
    presentYoOverride: 'conozco',
    context: {
      yo: 'la ciudad',
      tu: 'a la persona',
      usted: 'a la persona',
      ella: 'el lugar',
      el: 'el lugar',
      ellos: 'la ciudad',
      ustedes: 'la ciudad',
      nosotros: 'el barrio',
    },
    contextEnglish: {
      yo: 'the city',
      tu: 'the person',
      usted: 'the person',
      ella: 'the place',
      el: 'the place',
      ellos: 'the city',
      ustedes: 'the city',
      nosotros: 'the neighborhood',
    },
    infinitivePhrases: [
      { es: 'conocer a una persona', en: 'to know/meet a person' },
      { es: 'conocer un lugar', en: 'to know a place' },
      { es: 'conocer a alguien nuevo', en: 'to meet someone new' },
      { es: 'conocer la cultura', en: 'to know the culture' },
      { es: 'nosotros deberíamos conocer más personas', en: 'we should meet more people' },
      { es: 'conozcamos nuevos lugares', en: "let's get to know new places" },
    ],
  },
  {
    infinitive: 'sentir',
    english: 'to feel',
    type: 'ir',
    stemChangePresent: 'e>ie',
    context: {
      yo: 'feliz',
      tu: 'triste',
      usted: 'triste',
      ella: 'cansada',
      el: 'cansado',
      ellos: 'felices',
      ustedes: 'felices',
      nosotros: 'bien',
    },
    contextEnglish: {
      yo: 'happy',
      tu: 'sad',
      usted: 'sad',
      ella: 'tired',
      el: 'tired',
      ellos: 'happy',
      ustedes: 'happy',
      nosotros: 'well',
    },
    infinitivePhrases: [
      { es: 'sentir una emoción', en: 'to feel an emotion' },
      { es: 'sentirse bien', en: 'to feel well' },
      { es: 'sentir dolor', en: 'to feel pain' },
      { es: 'sentir alegría', en: 'to feel joy' },
      { es: 'nosotros deberíamos sentir más gratitud', en: 'we should feel more gratitude' },
      { es: 'sintamos las emociones', en: "let's feel the emotions" },
    ],
  },
  {
    infinitive: 'dormir',
    english: 'to sleep',
    type: 'ir',
    stemChangePresent: 'o>ue',
    context: {
      yo: 'por la noche',
      tu: 'durante el día',
      usted: 'durante el día',
      ella: 'en la cama',
      el: 'en la cama',
      ellos: 'por la noche',
      ustedes: 'por la noche',
      nosotros: 'bien',
    },
    contextEnglish: {
      yo: 'at night',
      tu: 'during the day',
      usted: 'during the day',
      ella: 'in the bed',
      el: 'in the bed',
      ellos: 'at night',
      ustedes: 'at night',
      nosotros: 'well',
    },
    infinitivePhrases: [
      { es: 'dormir ocho horas', en: 'to sleep eight hours' },
      { es: 'dormir bien', en: 'to sleep well' },
      { es: 'dormir en una cama', en: 'to sleep in a bed' },
      { es: 'dormir la siesta', en: 'to take a nap' },
      { es: 'dormir profundamente', en: 'to sleep deeply' },
      { es: 'nosotros deberíamos dormir más', en: 'we should sleep more' },
      { es: 'durmamos temprano', en: "let's sleep early" },
    ],
  },
  {
    infinitive: 'pedir',
    english: 'to ask for',
    type: 'ir',
    stemChangePresent: 'e>i',
    context: {
      yo: 'ayuda',
      tu: 'direcciones',
      usted: 'direcciones',
      ella: 'un favor',
      el: 'un favor',
      ellos: 'ayuda',
      ustedes: 'ayuda',
      nosotros: 'la cuenta',
    },
    contextEnglish: {
      yo: 'for help',
      tu: 'for directions',
      usted: 'for directions',
      ella: 'for a favor',
      el: 'for a favor',
      ellos: 'for help',
      ustedes: 'for help',
      nosotros: 'for the check',
    },
    infinitivePhrases: [
      { es: 'pedir ayuda', en: 'to ask for help' },
      { es: 'pedir direcciones', en: 'to ask for directions' },
      { es: 'pedir un favor', en: 'to ask for a favor' },
      { es: 'pedir perdón', en: 'to ask for forgiveness' },
      { es: 'pedir la cuenta', en: 'to ask for the check' },
      { es: 'nosotros deberíamos pedir ayuda', en: 'we should ask for help' },
      { es: 'pidamos ayuda', en: "let's ask for help" },
    ],
  },
  {
    infinitive: 'servir',
    english: 'to serve',
    type: 'ir',
    stemChangePresent: 'e>i',
    context: {
      yo: 'comida',
      tu: 'bebidas',
      usted: 'bebidas',
      ella: 'a los clientes',
      el: 'a los clientes',
      ellos: 'comida',
      ustedes: 'comida',
      nosotros: 'a los invitados',
    },
    contextEnglish: {
      yo: 'food',
      tu: 'drinks',
      usted: 'drinks',
      ella: 'the customers',
      el: 'the customers',
      ellos: 'food',
      ustedes: 'food',
      nosotros: 'the guests',
    },
    infinitivePhrases: [
      { es: 'servir comida', en: 'to serve food' },
      { es: 'servir bebidas', en: 'to serve drinks' },
      { es: 'servir a los clientes', en: 'to serve the customers' },
      { es: 'servir de ejemplo', en: 'to serve as an example' },
      { es: 'nosotros deberíamos servir más', en: 'we should serve more' },
      { es: 'sirvamos la cena', en: "let's serve dinner" },
    ],
  },
  {
    infinitive: 'repetir',
    english: 'to repeat',
    type: 'ir',
    stemChangePresent: 'e>i',
    context: {
      yo: 'la pregunta',
      tu: 'la respuesta',
      usted: 'la respuesta',
      ella: 'la información',
      el: 'la información',
      ellos: 'la pregunta',
      ustedes: 'la pregunta',
      nosotros: 'la lección',
    },
    contextEnglish: {
      yo: 'the question',
      tu: 'the answer',
      usted: 'the answer',
      ella: 'the information',
      el: 'the information',
      ellos: 'the question',
      ustedes: 'the question',
      nosotros: 'the lesson',
    },
    infinitivePhrases: [
      { es: 'repetir una pregunta', en: 'to repeat a question' },
      { es: 'repetir una respuesta', en: 'to repeat an answer' },
      { es: 'repetir información', en: 'to repeat information' },
      { es: 'repetir para aprender', en: 'to repeat to learn' },
      { es: 'nosotros deberíamos repetir más', en: 'we should repeat more' },
      { es: 'repitamos la lección', en: "let's repeat the lesson" },
    ],
  },
  {
    infinitive: 'seguir',
    english: 'to follow',
    type: 'ir',
    stemChangePresent: 'e>i',
    presentYoOverride: 'sigo',
    context: {
      yo: 'las instrucciones',
      tu: 'las reglas',
      usted: 'las reglas',
      ella: 'el consejo',
      el: 'el consejo',
      ellos: 'las instrucciones',
      ustedes: 'las instrucciones',
      nosotros: 'el plan',
    },
    contextEnglish: {
      yo: 'the instructions',
      tu: 'the rules',
      usted: 'the rules',
      ella: 'the advice',
      el: 'the advice',
      ellos: 'the instructions',
      ustedes: 'the instructions',
      nosotros: 'the plan',
    },
    infinitivePhrases: [
      { es: 'seguir las instrucciones', en: 'to follow the instructions' },
      { es: 'seguir las reglas', en: 'to follow the rules' },
      { es: 'seguir el consejo', en: 'to follow the advice' },
      { es: 'seguir adelante', en: 'to keep going / move forward' },
      { es: 'nosotros deberíamos seguir el plan', en: 'we should follow the plan' },
      { es: 'sigamos adelante', en: "let's keep going" },
    ],
  },
  {
    infinitive: 'decir',
    english: 'to say',
    type: 'ir',
    presentYoOverride: 'digo',
    preteriteStem: 'dij',
    futureStem: 'dir',
    context: {
      yo: 'algo',
      tu: 'la verdad',
      usted: 'la verdad',
      ella: 'un chiste',
      el: 'un chiste',
      ellos: 'algo',
      ustedes: 'algo',
      nosotros: 'la verdad',
    },
    contextEnglish: {
      yo: 'something',
      tu: 'the truth',
      usted: 'the truth',
      ella: 'a joke',
      el: 'a joke',
      ellos: 'something',
      ustedes: 'something',
      nosotros: 'the truth',
    },
    infinitivePhrases: [
      { es: 'decir algo', en: 'to say something' },
      { es: 'decir la verdad', en: 'to tell the truth' },
      { es: 'decir un chiste', en: 'to tell a joke' },
      { es: 'decir gracias', en: 'to say thank you' },
      { es: 'decir adiós', en: 'to say goodbye' },
      { es: 'nosotros deberíamos decir la verdad', en: 'we should tell the truth' },
      { es: 'digamos la verdad', en: "let's tell the truth" },
    ],
  },
  {
    infinitive: 'hacer',
    english: 'to do',
    type: 'er',
    presentYoOverride: 'hago',
    preteriteStem: 'hic',
    futureStem: 'har',
    context: {
      yo: 'algo',
      tu: 'un favor',
      usted: 'un favor',
      ella: 'un proyecto',
      el: 'un proyecto',
      ellos: 'algo',
      ustedes: 'algo',
      nosotros: 'ejercicio',
    },
    contextEnglish: {
      yo: 'something',
      tu: 'a favor',
      usted: 'a favor',
      ella: 'a project',
      el: 'a project',
      ellos: 'something',
      ustedes: 'something',
      nosotros: 'exercise',
    },
    infinitivePhrases: [
      { es: 'hacer ejercicio', en: 'to exercise' },
      { es: 'hacer un favor', en: 'to do a favor' },
      { es: 'hacer un proyecto', en: 'to do a project' },
      { es: 'hacer la tarea', en: 'to do the homework' },
      { es: 'hacer una pregunta', en: 'to ask a question' },
      { es: 'nosotros deberíamos hacer más ejercicio', en: 'we should exercise more' },
      { es: 'hagamos algo', en: "let's do something" },
    ],
  },
  {
    infinitive: 'venir',
    english: 'to come',
    type: 'ir',
    presentYoOverride: 'vengo',
    stemChangePresent: 'e>ie',
    preteriteStem: 'vin',
    futureStem: 'vendr',
    context: {
      yo: 'a la fiesta',
      tu: 'al evento',
      usted: 'al evento',
      ella: 'a la reunión',
      el: 'a la reunión',
      ellos: 'a la fiesta',
      ustedes: 'a la fiesta',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'to the party',
      tu: 'to the event',
      usted: 'to the event',
      ella: 'to the meeting',
      el: 'to the meeting',
      ellos: 'to the party',
      ustedes: 'to the party',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'venir a un lugar', en: 'to come to a place' },
      { es: 'venir a un evento', en: 'to come to an event' },
      { es: 'venir a una reunión', en: 'to come to a meeting' },
      { es: 'venir con amigos', en: 'to come with friends' },
      { es: 'nosotros deberíamos venir más seguido', en: 'we should come more often' },
      { es: 'vengamos al evento', en: "let's come to the event" },
    ],
  },
  {
    infinitive: 'tener',
    english: 'to have',
    type: 'er',
    presentYoOverride: 'tengo',
    stemChangePresent: 'e>ie',
    preteriteStem: 'tuv',
    futureStem: 'tendr',
    context: {
      yo: 'un coche',
      tu: 'una casa',
      usted: 'una casa',
      ella: 'un perro',
      el: 'un perro',
      ellos: 'un coche',
      ustedes: 'un coche',
      nosotros: 'tiempo',
    },
    contextEnglish: {
      yo: 'a car',
      tu: 'a house',
      usted: 'a house',
      ella: 'a dog',
      el: 'a dog',
      ellos: 'a car',
      ustedes: 'a car',
      nosotros: 'time',
    },
    infinitivePhrases: [
      { es: 'tener algo', en: 'to have something' },
      { es: 'tener una mascota', en: 'to have a pet' },
      { es: 'tener tiempo', en: 'to have time' },
      { es: 'tener razón', en: 'to be right' },
      { es: 'tener hambre', en: 'to be hungry' },
      { es: 'tener sed', en: 'to be thirsty' },
      { es: 'tener miedo', en: 'to be afraid' },
      { es: 'nosotros deberíamos tener más paciencia', en: 'we should have more patience' },
      { es: 'tengamos paciencia', en: "let's have patience" },
    ],
  },
  {
    infinitive: 'poder',
    english: 'to be able to',
    type: 'er',
    stemChangePresent: 'o>ue',
    preteriteStem: 'pud',
    futureStem: 'podr',
    context: {
      yo: 'hablar español',
      tu: 'nadar',
      usted: 'nadar',
      ella: 'bailar',
      el: 'bailar',
      ellos: 'hablar inglés',
      ustedes: 'hablar inglés',
      nosotros: 'hacerlo',
    },
    contextEnglish: {
      yo: 'speak Spanish',
      tu: 'swim',
      usted: 'swim',
      ella: 'dance',
      el: 'dance',
      ellos: 'speak English',
      ustedes: 'speak English',
      nosotros: 'do it',
    },
    infinitivePhrases: [
      { es: 'poder hacer algo', en: 'to be able to do something' },
      { es: 'poder hablar un idioma', en: 'to be able to speak a language' },
      { es: 'poder ayudar', en: 'to be able to help' },
      { es: 'poder llegar a tiempo', en: 'to be able to arrive on time' },
      { es: 'nosotros deberíamos poder hacerlo', en: 'we should be able to do it' },
      { es: 'podamos lograrlo', en: "let's be able to achieve it" },
    ],
  },
  {
    infinitive: 'querer',
    english: 'to want',
    type: 'er',
    stemChangePresent: 'e>ie',
    preteriteStem: 'quis',
    futureStem: 'querr',
    context: {
      yo: 'un café',
      tu: 'un sándwich',
      usted: 'un sándwich',
      ella: 'una ensalada',
      el: 'una ensalada',
      ellos: 'un café',
      ustedes: 'un café',
      nosotros: 'algo',
    },
    contextEnglish: {
      yo: 'a coffee',
      tu: 'a sandwich',
      usted: 'a sandwich',
      ella: 'a salad',
      el: 'a salad',
      ellos: 'a coffee',
      ustedes: 'a coffee',
      nosotros: 'something',
    },
    infinitivePhrases: [
      { es: 'querer algo', en: 'to want something' },
      { es: 'querer una bebida', en: 'to want a drink' },
      { es: 'querer comida', en: 'to want food' },
      { es: 'querer cambiar', en: 'to want to change' },
      { es: 'querer aprender', en: 'to want to learn' },
      { es: 'nosotros deberíamos querer más', en: 'we should want more' },
      { es: 'queramos una pizza', en: "let's want a pizza" },
    ],
  },
  {
    infinitive: 'deber',
    english: 'to should',
    type: 'er',
    context: {
      yo: 'estudiar',
      tu: 'hacer ejercicio',
      usted: 'hacer ejercicio',
      ella: 'comer saludable',
      el: 'comer saludable',
      ellos: 'estudiar',
      ustedes: 'estudiar',
      nosotros: 'estudiar juntos',
    },
    contextEnglish: {
      yo: 'study',
      tu: 'exercise',
      usted: 'exercise',
      ella: 'eat healthily',
      el: 'eat healthily',
      ellos: 'study',
      ustedes: 'study',
      nosotros: 'study together',
    },
    infinitivePhrases: [
      { es: 'deber hacer algo', en: 'to have to do something' },
      { es: 'deber estudiar', en: 'to have to study' },
      { es: 'deber llegar a tiempo', en: 'to have to arrive on time' },
      { es: 'deber trabajar más', en: 'to have to work more' },
      { es: 'nosotros debemos esforzarnos más', en: 'we must try harder' },
      {
        es: 'debamos cumplir con nuestras responsabilidades',
        en: "let's meet our responsibilities",
      },
    ],
  },
]

const IRREGULAR_VERBS: VerbInfo[] = [
  {
    infinitive: 'ser',
    english: 'to be',
    type: 'er',
    // present: soy eres es somos son
    // preterite: fui fuiste fue fuimos fueron
    // imperfect: era eras era éramos eran  (irregular stem: er-)
    // future: seré serás será seremos serán
    presentYoOverride: 'soy',
    preteriteStem: 'fu',
    preteriteYoEnding: 'i',
    imperfectStem: 'er',
    context: {
      yo: 'estudiante',
      tu: 'maestro',
      usted: 'maestro',
      ella: 'doctora',
      el: 'doctor',
      ellos: 'estudiantes',
      ustedes: 'estudiantes',
      nosotros: 'amigos',
    },
    contextEnglish: {
      yo: 'a student',
      tu: 'a teacher',
      usted: 'a teacher',
      ella: 'a doctor',
      el: 'a doctor',
      ellos: 'students',
      ustedes: 'students',
      nosotros: 'friends',
    },
    infinitivePhrases: [
      { es: 'ser amable', en: 'to be kind' },
      { es: 'ser honesto', en: 'to be honest' },
      { es: 'ser paciente', en: 'to be patient' },
      { es: 'ser responsable', en: 'to be responsible' },
      { es: 'ser valiente', en: 'to be brave' },
      { es: 'nosotros deberíamos ser mejores', en: 'we should be better' },
      { es: 'seamos amables', en: "let's be kind" },
    ],
  },
  {
    infinitive: 'estar',
    english: 'to be',
    type: 'ar',
    // present: estoy estás está estamos están
    // preterite: estuve estuviste estuvo estuvimos estuvieron
    presentYoOverride: 'estoy',
    preteriteStem: 'estuv',
    context: {
      yo: 'feliz',
      tu: 'cansado',
      usted: 'cansado',
      ella: 'en casa',
      el: 'en casa',
      ellos: 'felices',
      ustedes: 'felices',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'happy',
      tu: 'tired',
      usted: 'tired',
      ella: 'at home',
      el: 'at home',
      ellos: 'happy',
      ustedes: 'happy',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'estar bien', en: 'to be well' },
      { es: 'estar en casa', en: 'to be at home' },
      { es: 'estar cansado', en: 'to be tired' },
      { es: 'estar de acuerdo', en: 'to agree' },
      { es: 'estar seguro', en: 'to be sure' },
      { es: 'nosotros deberíamos estar más unidos', en: 'we should be more united' },
      { es: 'estemos en contacto', en: "let's stay in touch" },
    ],
  },
  {
    infinitive: 'ir',
    english: 'to go',
    type: 'ir',
    // present: voy vas va vamos van
    // preterite: fui fuiste fue fuimos fueron (same as ser)
    // imperfect: iba ibas iba íbamos iban (irregular stem: ib-)
    presentYoOverride: 'voy',
    preteriteStem: 'fu',
    preteriteYoEnding: 'i',
    imperfectStem: 'ib',
    context: {
      yo: 'al parque',
      tu: 'a la tienda',
      usted: 'a la tienda',
      ella: 'a la playa',
      el: 'a la playa',
      ellos: 'al parque',
      ustedes: 'al parque',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'to the park',
      tu: 'to the store',
      usted: 'to the store',
      ella: 'to the beach',
      el: 'to the beach',
      ellos: 'to the park',
      ustedes: 'to the park',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'ir a un lugar', en: 'to go to a place' },
      { es: 'ir al parque', en: 'to go to the park' },
      { es: 'ir de compras', en: 'to go shopping' },
      { es: 'ir al cine', en: 'to go to the movies' },
      { es: 'ir a la playa', en: 'to go to the beach' },
      { es: 'nosotros deberíamos ir más seguido', en: 'we should go more often' },
      { es: 'vamos al parque', en: "let's go to the park" },
    ],
  },
]

const REFLEXIVE_VERBS: VerbInfo[] = [
  {
    infinitive: 'levantarse',
    english: 'to get up',
    type: 'ar',
    reflexive: true,
    presentStem: 'levant',
    context: {
      yo: 'temprano',
      tu: 'tarde',
      usted: 'tarde',
      ella: 'temprano',
      el: 'temprano',
      ellos: 'tarde',
      ustedes: 'tarde',
      nosotros: 'juntos',
    },
    contextEnglish: {
      yo: 'early',
      tu: 'late',
      usted: 'late',
      ella: 'early',
      el: 'early',
      ellos: 'late',
      ustedes: 'late',
      nosotros: 'together',
    },
    infinitivePhrases: [
      { es: 'levantarse temprano', en: 'to get up early' },
      { es: 'levantarse tarde', en: 'to get up late' },
      { es: 'levantarse a una hora específica', en: 'to get up at a specific time' },
      { es: 'levantarse con energía', en: 'to get up with energy' },
      { es: 'nosotros deberíamos levantarnos más temprano', en: 'we should get up earlier' },
      { es: 'levantémonos a las siete', en: "let's get up at seven" },
    ],
  },
  {
    infinitive: 'ducharse',
    english: 'to shower',
    type: 'ar',
    reflexive: true,
    presentStem: 'duch',
    context: {
      yo: 'por la mañana',
      tu: 'por la noche',
      usted: 'por la noche',
      ella: 'por la mañana',
      el: 'por la mañana',
      ellos: 'por la noche',
      ustedes: 'por la noche',
      nosotros: 'cada día',
    },
    contextEnglish: {
      yo: 'in the morning',
      tu: 'at night',
      usted: 'at night',
      ella: 'in the morning',
      el: 'in the morning',
      ellos: 'at night',
      ustedes: 'at night',
      nosotros: 'every day',
    },
    infinitivePhrases: [
      { es: 'ducharse por la mañana', en: 'to shower in the morning' },
      { es: 'ducharse por la noche', en: 'to shower at night' },
      { es: 'ducharse después de ejercicio', en: 'to shower after exercise' },
      { es: 'ducharse con agua fría', en: 'to shower with cold water' },
      { es: 'nosotros deberíamos ducharnos más', en: 'we should shower more' },
      { es: 'duchémonos ahora', en: "let's shower now" },
    ],
  },
  {
    infinitive: 'vestirse',
    english: 'to get dressed',
    type: 'ir',
    reflexive: true,
    stemChangePresent: 'e>i',
    presentStem: 'vest',
    context: {
      yo: 'para el trabajo',
      tu: 'para la fiesta',
      usted: 'para la fiesta',
      ella: 'para la escuela',
      el: 'para la escuela',
      ellos: 'para el trabajo',
      ustedes: 'para el trabajo',
      nosotros: 'rápido',
    },
    contextEnglish: {
      yo: 'for work',
      tu: 'for the party',
      usted: 'for the party',
      ella: 'for school',
      el: 'for school',
      ellos: 'for work',
      ustedes: 'for work',
      nosotros: 'quickly',
    },
    infinitivePhrases: [
      { es: 'vestirse por la mañana', en: 'to get dressed in the morning' },
      { es: 'vestirse para un evento', en: 'to get dressed for an event' },
      { es: 'vestirse de manera formal', en: 'to dress formally' },
      { es: 'vestirse con elegancia', en: 'to dress elegantly' },
      { es: 'nosotros deberíamos vestirnos más rápido', en: 'we should get dressed faster' },
      { es: 'vistámonos para la fiesta', en: "let's get dressed for the party" },
    ],
  },
]

// ---------- noun definitions (unchanged structure) ----------

interface NounEntry {
  answer: string
  question: string
  phrases: Array<{ answer: string; question: string }>
}

const NOUNS: NounEntry[] = [
  {
    answer: 'house',
    question: 'casa',
    phrases: [
      { answer: 'the big house', question: 'la casa grande' },
      { answer: 'the small house', question: 'la casa pequeña' },
      { answer: 'the red house', question: 'la casa roja' },
      { answer: 'the blue house', question: 'la casa azul' },
      { answer: 'the new house', question: 'la casa nueva' },
      { answer: 'the old house', question: 'la casa vieja' },
      { answer: 'a beautiful house', question: 'una casa hermosa' },
      { answer: 'my house', question: 'mi casa' },
      { answer: 'your house', question: 'tu casa' },
      { answer: 'our house', question: 'nuestra casa' },
    ],
  },
  {
    answer: 'car',
    question: 'coche',
    phrases: [
      { answer: 'the fast car', question: 'el coche rápido' },
      { answer: 'the slow car', question: 'el coche lento' },
      { answer: 'the red car', question: 'el coche rojo' },
      { answer: 'the blue car', question: 'el coche azul' },
      { answer: 'the new car', question: 'el coche nuevo' },
      { answer: 'the old car', question: 'el coche viejo' },
      { answer: 'my car', question: 'mi coche' },
      { answer: 'a big car', question: 'un coche grande' },
      { answer: 'an expensive car', question: 'un coche caro' },
      { answer: 'a cheap car', question: 'un coche barato' },
    ],
  },
  {
    answer: 'book',
    question: 'libro',
    phrases: [
      { answer: 'the interesting book', question: 'el libro interesante' },
      { answer: 'the boring book', question: 'el libro aburrido' },
      { answer: 'the red book', question: 'el libro rojo' },
      { answer: 'the new book', question: 'el libro nuevo' },
      { answer: 'the old book', question: 'el libro viejo' },
      { answer: 'a good book', question: 'un buen libro' },
      { answer: 'my book', question: 'mi libro' },
      { answer: 'a thick book', question: 'un libro grueso' },
      { answer: 'a thin book', question: 'un libro delgado' },
      { answer: "a children's book", question: 'un libro infantil' },
    ],
  },
  {
    answer: 'dog',
    question: 'perro',
    phrases: [
      { answer: 'the big dog', question: 'el perro grande' },
      { answer: 'the small dog', question: 'el perro pequeño' },
      { answer: 'the black dog', question: 'el perro negro' },
      { answer: 'the white dog', question: 'el perro blanco' },
      { answer: 'the brown dog', question: 'el perro marrón' },
      { answer: 'my dog', question: 'mi perro' },
      { answer: 'a friendly dog', question: 'un perro amigable' },
      { answer: 'a noisy dog', question: 'un perro ruidoso' },
    ],
  },
]

// ---------- special overrides for irregular verbs ----------
// We need to patch the conjugation output for verbs where our generic
// helpers produce wrong forms.

function patchConjugations(v: VerbInfo, tense: string, forms: string[]): string[] {
  const inf = v.infinitive

  // ser: present
  if (inf === 'ser' && tense === 'present')
    return ['soy', 'eres', 'es', 'es', 'es', 'son', 'son', 'somos']

  // ser: preterite (same as ir)
  if (inf === 'ser' && tense === 'preterite')
    return ['fui', 'fuiste', 'fue', 'fue', 'fue', 'fueron', 'fueron', 'fuimos']

  // ser: imperfect (era, eras...)
  if (inf === 'ser' && tense === 'imperfect')
    return ['era', 'eras', 'era', 'era', 'era', 'eran', 'eran', 'éramos']

  // ser: future
  if (inf === 'ser' && tense === 'future')
    return ['seré', 'serás', 'será', 'será', 'será', 'serán', 'serán', 'seremos']

  // ser: conditional
  if (inf === 'ser' && tense === 'conditional')
    return ['sería', 'serías', 'sería', 'sería', 'sería', 'serían', 'serían', 'seríamos']

  // estar: present
  if (inf === 'estar' && tense === 'present')
    return ['estoy', 'estás', 'está', 'está', 'está', 'están', 'están', 'estamos']

  // estar: preterite
  if (inf === 'estar' && tense === 'preterite')
    return [
      'estuve',
      'estuviste',
      'estuvo',
      'estuvo',
      'estuvo',
      'estuvieron',
      'estuvieron',
      'estuvimos',
    ]

  // estar: imperfect (regular -ar pattern)
  if (inf === 'estar' && tense === 'imperfect')
    return ['estaba', 'estabas', 'estaba', 'estaba', 'estaba', 'estaban', 'estaban', 'estábamos']

  // estar: future
  if (inf === 'estar' && tense === 'future')
    return ['estaré', 'estarás', 'estará', 'estará', 'estará', 'estarán', 'estarán', 'estaremos']

  // estar: conditional
  if (inf === 'estar' && tense === 'conditional')
    return [
      'estaría',
      'estarías',
      'estaría',
      'estaría',
      'estaría',
      'estarían',
      'estarían',
      'estaríamos',
    ]

  // ir: present
  if (inf === 'ir' && tense === 'present')
    return ['voy', 'vas', 'va', 'va', 'va', 'van', 'van', 'vamos']

  // ir: preterite (same as ser)
  if (inf === 'ir' && tense === 'preterite')
    return ['fui', 'fuiste', 'fue', 'fue', 'fue', 'fueron', 'fueron', 'fuimos']

  // ir: imperfect (iba, ibas...)
  if (inf === 'ir' && tense === 'imperfect')
    return ['iba', 'ibas', 'iba', 'iba', 'iba', 'iban', 'iban', 'íbamos']

  // ir: future
  if (inf === 'ir' && tense === 'future')
    return ['iré', 'irás', 'irá', 'irá', 'irá', 'irán', 'irán', 'iremos']

  // ir: conditional
  if (inf === 'ir' && tense === 'conditional')
    return ['iría', 'irías', 'iría', 'iría', 'iría', 'irían', 'irían', 'iríamos']

  // leer: preterite (leyó, leyeron)
  if (inf === 'leer' && tense === 'preterite')
    return ['leí', 'leíste', 'leyó', 'leyó', 'leyó', 'leyeron', 'leyeron', 'leímos']

  // hacer: preterite (hice, hiciste, hizo...)
  if (inf === 'hacer' && tense === 'preterite')
    return ['hice', 'hiciste', 'hizo', 'hizo', 'hizo', 'hicieron', 'hicieron', 'hicimos']

  // hacer: present
  if (inf === 'hacer' && tense === 'present')
    return ['hago', 'haces', 'hace', 'hace', 'hace', 'hacen', 'hacen', 'hacemos']

  // decir: present
  if (inf === 'decir' && tense === 'present')
    return ['digo', 'dices', 'dice', 'dice', 'dice', 'dicen', 'dicen', 'decimos']

  // decir: preterite (dije, dijiste, dijo...)
  if (inf === 'decir' && tense === 'preterite')
    return ['dije', 'dijiste', 'dijo', 'dijo', 'dijo', 'dijeron', 'dijeron', 'dijimos']

  // saber: present
  if (inf === 'saber' && tense === 'present')
    return ['sé', 'sabes', 'sabe', 'sabe', 'sabe', 'saben', 'saben', 'sabemos']

  // saber: preterite
  if (inf === 'saber' && tense === 'preterite')
    return ['supe', 'supiste', 'supo', 'supo', 'supo', 'supieron', 'supieron', 'supimos']

  // conocer: present
  if (inf === 'conocer' && tense === 'present')
    return ['conozco', 'conoces', 'conoce', 'conoce', 'conoce', 'conocen', 'conocen', 'conocemos']

  // tener: present
  if (inf === 'tener' && tense === 'present')
    return ['tengo', 'tienes', 'tiene', 'tiene', 'tiene', 'tienen', 'tienen', 'tenemos']

  // tener: preterite
  if (inf === 'tener' && tense === 'preterite')
    return ['tuve', 'tuviste', 'tuvo', 'tuvo', 'tuvo', 'tuvieron', 'tuvieron', 'tuvimos']

  // venir: present
  if (inf === 'venir' && tense === 'present')
    return ['vengo', 'vienes', 'viene', 'viene', 'viene', 'vienen', 'vienen', 'venimos']

  // venir: preterite
  if (inf === 'venir' && tense === 'preterite')
    return ['vine', 'viniste', 'vino', 'vino', 'vino', 'vinieron', 'vinieron', 'vinimos']

  // poder: preterite
  if (inf === 'poder' && tense === 'preterite')
    return ['pude', 'pudiste', 'pudo', 'pudo', 'pudo', 'pudieron', 'pudieron', 'pudimos']

  // querer: preterite
  if (inf === 'querer' && tense === 'preterite')
    return ['quise', 'quisiste', 'quiso', 'quiso', 'quiso', 'quisieron', 'quisieron', 'quisimos']

  // salir: present
  if (inf === 'salir' && tense === 'present')
    return ['salgo', 'sales', 'sale', 'sale', 'sale', 'salen', 'salen', 'salimos']

  // seguir: present
  if (inf === 'seguir' && tense === 'present')
    return ['sigo', 'sigues', 'sigue', 'sigue', 'sigue', 'siguen', 'siguen', 'seguimos']

  // seguir: preterite
  if (inf === 'seguir' && tense === 'preterite')
    return ['seguí', 'seguiste', 'siguió', 'siguió', 'siguió', 'siguieron', 'siguieron', 'seguimos']

  // sentir: preterite (sintió, sintieron)
  if (inf === 'sentir' && tense === 'preterite')
    return ['sentí', 'sentiste', 'sintió', 'sintió', 'sintió', 'sintieron', 'sintieron', 'sentimos']

  // dormir: preterite (durmió, durmieron)
  if (inf === 'dormir' && tense === 'preterite')
    return ['dormí', 'dormiste', 'durmió', 'durmió', 'durmió', 'durmieron', 'durmieron', 'dormimos']

  // pedir: preterite (pidió, pidieron)
  if (inf === 'pedir' && tense === 'preterite')
    return ['pedí', 'pediste', 'pidió', 'pidió', 'pidió', 'pidieron', 'pidieron', 'pedimos']

  // servir: preterite
  if (inf === 'servir' && tense === 'preterite')
    return ['serví', 'serviste', 'sirvió', 'sirvió', 'sirvió', 'sirvieron', 'sirvieron', 'servimos']

  // repetir: preterite
  if (inf === 'repetir' && tense === 'preterite')
    return [
      'repetí',
      'repetiste',
      'repitió',
      'repitió',
      'repitió',
      'repitieron',
      'repitieron',
      'repetimos',
    ]

  // vestirse: preterite
  if (inf === 'vestirse' && tense === 'preterite')
    return ['vestí', 'vestiste', 'vistió', 'vistió', 'vistió', 'vistieron', 'vistieron', 'vestimos']

  return forms
}

// ---------- main generation ----------

function escStr(s: string): string {
  return s.replace(/'/g, "\\'")
}

function generateEntry(v: VerbInfo, label: string): string {
  const tenseNames = ['present', 'preterite', 'imperfect', 'future', 'conditional']
  const base = v.english.replace(/^to /, '')

  const subjectsEs = ['yo', 'tú', 'usted', 'ella', 'él', 'ellos', 'ustedes', 'nosotros']
  const refProns = ['me', 'te', 'se', 'se', 'se', 'se', 'se', 'nos']

  const ctx = v.context
  const ctxEn = v.contextEnglish
  const contexts = [
    ctx.yo,
    ctx.tu,
    ctx.usted,
    ctx.ella,
    ctx.el,
    ctx.ellos,
    ctx.ustedes,
    ctx.nosotros,
  ]
  const contextsEn = [
    ctxEn.yo,
    ctxEn.tu,
    ctxEn.usted,
    ctxEn.ella,
    ctxEn.el,
    ctxEn.ellos,
    ctxEn.ustedes,
    ctxEn.nosotros,
  ]

  const rawConj = [
    presentConjugate(v),
    preteriteConjugate(v),
    imperfectConjugate(v),
    futureConjugate(v),
    conditionalConjugate(v),
  ].map((c) => reorder(c))

  // Apply patches
  const allConj = rawConj.map((c, t) => patchConjugations(v, tenseNames[t], c))

  let phrases = ''

  for (let t = 0; t < 5; t++) {
    for (let i = 0; i < 8; i++) {
      let spForm = allConj[t][i]
      if (v.reflexive) spForm = refProns[i] + ' ' + spForm
      const spPhrase = `${subjectsEs[i]} ${spForm} ${contexts[i]}`.trim()
      const enVerbStr = enVerbSubject(base, i, tenseNames[t])
      const enPhrase = `${SUBJECTS_EN[i](enVerbStr)} ${contextsEn[i]}`.trim()
      phrases += `      { answer: '${escStr(enPhrase)}', question: '${escStr(spPhrase)}' },\n`
    }
  }

  for (const p of v.infinitivePhrases) {
    phrases += `      { answer: '${escStr(p.en)}', question: '${escStr(p.es)}' },\n`
  }

  return `  {\n    answer: '${escStr(v.english)}',\n    question: '${escStr(v.infinitive)}',\n    phrases: [\n${phrases}    ],\n  },\n`
}

// ---------- output ----------

let output = `interface FlashcardPhrase {
  question: string
  answer: string
}

interface FlashcardMain {
  question: string
  answer: string
  phrases: FlashcardPhrase[]
}

/*
 * Spanish flashcard data organized by category:
 * 1. Regular Verbs — present, preterite, imperfect, future, conditional
 * 2. Irregular Verbs
 * 3. Reflexive Verbs
 * 4. Nouns
 */

// 1a. Regular Verbs
const regularVerbs: FlashcardMain[] = [\n`

for (const v of VERBS) {
  output += generateEntry(v, 'regular')
}
output += `]\n\n`

output += `// 1b. Irregular Verbs\nconst irregularVerbs: FlashcardMain[] = [\n`
for (const v of IRREGULAR_VERBS) {
  output += generateEntry(v, 'irregular')
}
output += `]\n\n`

output += `// 1c. Reflexive Verbs\nconst reflexiveVerbs: FlashcardMain[] = [\n`
for (const v of REFLEXIVE_VERBS) {
  output += generateEntry(v, 'reflexive')
}
output += `]\n\n`

output += `// 2. Nouns\nconst nouns: FlashcardMain[] = [\n`
for (const n of NOUNS) {
  output += `  {\n    answer: '${escStr(n.answer)}',\n    question: '${escStr(n.question)}',\n    phrases: [\n`
  for (const p of n.phrases) {
    output += `      { answer: '${escStr(p.answer)}', question: '${escStr(p.question)}' },\n`
  }
  output += `    ],\n  },\n`
}
output += `]\n\n`

output += `export const source: Array<FlashcardMain & { type: string }> = [
  ...regularVerbs.map(card => ({ ...card, type: 'Regular Verbs' })),
  ...irregularVerbs.map(card => ({ ...card, type: 'Irregular Verbs' })),
  ...reflexiveVerbs.map(card => ({ ...card, type: 'Reflexive Verbs' })),
  ...nouns.map(card => ({ ...card, type: 'Nouns' })),
]\n`

import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const outPath = path.resolve(__dirname, '../data/source.ts')
fs.writeFileSync(outPath, output, 'utf8')
const kb = (fs.statSync(outPath).size / 1024).toFixed(1)
console.log(`Written: ${outPath} (${kb} KB)`)
