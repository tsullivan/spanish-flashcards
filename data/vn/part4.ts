import type { CardCollection } from '../types';

/**
 * Part 4: Emergencies and Essentials
 */
export const Part4: CardCollection = {
  'Health': [{ cards: [
    // subTitle: Parts Of The Body
    // arm - canh tay
    // - phrases: My arm hurts. - Canh tay toi bi dau. / I broke my arm. - Canh tay toi bi hong. / I burned my arm. - Canh tay toi bi phong.
    // back - lung
    // - phrases: My back hurts. - Lung toi bi dau. / I hurt my back. - Lung toi bi thuong.
    // chest - nguc
    // - phrases: My chest hurts. - Nguc toi bi dau.
    // ear - tai
    // - phrases: My ear hurts. - Tai toi bi dau. / I have an ear infection. - Tai toi bi nhiem trung.
    // eye - mat
    // - phrases: My eye hurts. - Mat toi bi dau. / Close your eyes. - Nhin mat lai di.
    // face - mat
    // - phrases: My face hurts. - Mat toi bi dau. / I know your face. - Toi biet mat ban.
    // foot - chan
    // - phrases: My foot hurts. - Chan toi bi dau. / I hurt my foot. - Chan toi bi thuong.
    // hand - tay
    // - phrases: My hand hurts. - Tay toi bi dau. / Wash your hands. - Rua tay di. / Hold my hand. - Nam tay toi di.
    // head - dau
    // - phrases: My head hurts. - Dau toi bi dau. / I have a headache. - Toi bi nhuc dau.
    // leg - chan
    // - phrases: My leg hurts. - Chan toi bi dau. / My leg is strong. - Chan toi khoe.
    // mouth - mieng
    // - phrases: My mouth hurts. - Mieng toi bi dau. / Open your mouth. - Mo mieng ra di.
    // neck - co
    // - phrases: My neck hurts. - Co toi bi dau. / I hurt my neck. - Co toi bi thuong.
    // shoulder - vai
    // - phrases: My shoulder hurts. - Vai toi bi dau. / Put your head on my shoulder. - Tua dau vao vai toi di.
    // finger - ngon tay
    // - phrases: My finger hurts. - Ngon tay toi bi dau. / I hurt my finger. - Ngon tay toi bi thuong.
    // heart - tim
    // - phrases: The heart is the size of a fist. - Tim co kich thuoc bang mot nam tay.
    // heel - got chan
    // - phrases: My heel hurts. - Got chan toi bi dau. / I hurt my heel. - Got chan toi bi thuong.
    // hip - mong
    // - phrases: I just got a new hip. - Toi vua moi thay mong moi. / hip replacement - thay mong
    // knee - dau goi
    // - phrases: My knee hurts. - Dau goi toi bi dau. / I hurt my knee. - Dau goi toi bi thuong.
    // liver - gan
    // - phrases: Take care of your liver. - Cham soc gan di. / I have a liver problem. - Toi bi benh gan.
    // lung - phoi
    // - phrases: My lung hurts. - Phoi toi bi dau. / I have a lung infection. - Phoi toi bi nhiem trung.
    // lip - moi
    // - phrases: My lip hurts. - Moi toi bi dau. / Your lips are very soft. - Moi ban rat mem.
    // neck - co
    // - phrases: My neck hurts. - Co toi bi dau. / I hurt my neck. - Co toi bi thuong.
    // nose - mui
    // - phrases: My nose hurts. - Mui toi bi dau. / nosebleed - chay mau mui
    // skin - da
    // - phrases: My skin hurts. - Da toi bi dau. / I have a skin rash. - Da toi bi phat ban.
    // stomach - bung
    // - phrases: A cow has four stomachs. - Con bo co bon cai
    // throat - hong
    // - phrases: My throat hurts. - Hong toi bi dau. / I have a sore throat. - Hong toi bi sung hong.
    // thumb - ngon tay cai
    // - phrases: My thumb hurts. - Ngon tay cai toi bi dau. / I hurt my thumb. - Ngon tay cai toi bi thuong. / Under my thumb - duoi ngon tay cai cua toi
    // tongue - luoi
    // - phrases: My tongue hurts. - Luoi toi bi dau. / I bit my tongue. - Toi can luoi toi.
    // tooth - rang
    // - phrases: My tooth hurts. - Rang toi bi dau. / I have a toothache. - Toi bi dau rang. / Take care of your teeth. - Cham soc rang di.
    // wrist - co tay
    // - phrases: My wrist hurts. - Co tay toi bi dau. / I hurt my wrist. - Co tay toi bi thuong.

    // subTitle: Something's the Matter
    // accident - tai nan
    // - phrases: There was an accident. - Co mot tai nan.
    // ago, before - cach day
    // - phrases: I got injured two days ago. - Toi bi thuong cach day hai ngay. / Last week I had a bad cold. - Tuan truoc toi bi cam lanh nang.
    // allergy - di ung
    // - phrases: I have allergies. - Toi bi di ung. / I have a peanut allergy. - Toi bi di ung dau phong.
    // ambulance - xe cuu thuong
    // - phrases: Please call an ambulance! - Xin goi xe cuu thuong! / The ambulance is on its way. - Xe cuu thuong dang tren duong den day.
    // antibiotic - xe cuu thuong
    // - phrases: I need an antibiotic. - Toi can mot loai thuoc khang sinh.
    // appointment - cuoc hen
    // - phrases: I have an appointment with the doctor. - Toi co mot cuoc hen voi bac si. / I need to make an appointment. - Toi can dat mot cuoc hen.
    // bad, severe - nang, nghiem trong
    // - phrases: I have a bad cold. - Toi bi cam lanh nang. / I have a severe headache. - Toi bi nhuc dau nang.
    // blood - mau
    // - phrases: I need to give a blood sample. - Toi can lay mau. / I need a blood test. - Toi can lam thu nghiem mau. / I can't stand the sight of blood. - Toi khong chiu duoc canh mau me.
    // breathing difficulty - kho tho
    // - phrases: I have difficulty breathing. - Toi kho tho. / Do you have any breathing difficulties? - Ban co bi kho tho khong?
    // broken - bi hong
    // - phrases: I broke my arm. - Canh tay toi bi hong. / My leg is broken. - Chan toi bi hong.
    // broken bone - xuong bi hong
    // - phrases: I have a broken bone. - Toi bi hong xuong. / I think I broke a bone. - Toi nghi toi bi hong xuong.
    // bruise - vet bam
    // - phrases: I have a bruise on my arm. - Canh tay toi bi bam. / I got a bruise from bumping into the table. - Toi bi bam vi va vao ban.
    // burn - bi boi, vet boi
    // - phrases: I burned my hand. - Tay toi bi phong. / I have a burn on my arm. - Canh tay toi bi boi. / This steak is burned. - Mon bo nay bi boi.
    // can, be able to - co the
    // - phrases: Can you help me? - Ban co the giup toi khong? / I can't move my leg. - Toi khong the di chuyen duoc chan.
    // cast - vat bot
    // - phrases: I have a cast on my leg. - Chan toi bi vat bot. / I need to get a cast for my broken arm. - Toi can di vat bot cho canh tay bi hong cua toi.
    // chills - oh lanh
    // - phrases: I have chills. - Toi bi oh lanh. / Do you have chills? - Ban co bi oh lanh khong? / Jack-o-lanterns give me chills. - Jack-o-lanterns lam toi bi oh lanh.
    // cold (ailment) - cam lanh
    // - phrases: I have a cold. - Toi bi cam lanh. / I have a bad cold. - Toi bi cam lanh nang.
    // contagious - lay nhiem
    // - phrases: Is this illness contagious? - Benh nay co lay nhiem khong?
    // cut - vet cat, bi cat
    // - phrases: I have a cut on my finger. - Ngon tay toi bi cat. / I cut myself while cooking. - Toi bi cat khi nau an.
    // dentist - nha si
    // - phrases: I need to see a dentist. - Toi can gap nha si. / I have a dentist appointment. - Toi co mot cuoc hen voi nha si.
    // diarrhea - tieu chay
    // - phrases: I have diarrhea. - Toi bi di tieu chay. / I had diarrhea last night. - Toi hom qua toi bi di tieu chay. / I have massive diarrhea right now. - Toi dang bi di tieu chay nang.
    // dizzy - choang vang, chong mat
    // - phrases: I feel dizzy. - Toi cam thay choang vang. / Do you feel dizzy? - Ban co cam thay choang vang khong?
    // doctor - bac si
    // - phrases: I need to see a doctor. - Toi can gap bac si. / I have a doctor's appointment. - Toi co mot cuoc hen voi bac si.
    // ear infection - nhiem trung tai
    // - phrases: I have an ear infection. - Tai toi bi nhiem trung. / I need to get treatment for my ear infection. - Toi can duoc dieu tri cho benh nhiem trung tai cua toi.
    // emergency - cap cuu, tinh trang khan cap
    // - phrases: This is an emergency! - Day la mot tinh trang khan cap! / I need emergency medical care. - Toi can duoc cham soc y te cap cuu. / It wasn't an emergency. - Day khong phai la mot tinh trang khan cap.
    // emergency room - phong cap cuu
    // - phrases: I need to go to the emergency room. - Toi can di phong cap cuu. / The emergency room is very busy. - Phong cap cuu rat ban ron.
    // faint (verb) - xiu
    // - phrases: I feel like I'm going to faint. - Toi cam thay sap xiu. / I fainted at the sight of blood. - Toi da xiu khi thay canh mau me.
    // fever - sot
    // - phrases: I have a fever. - Toi bi sot. / I have a high fever. - Toi bi sot cao.
    // flu - cum
    // - phrases: I have the flu. - Toi bi cum. / I have a bad case of the flu. - Toi bi cum nang.
    // follow-up - tai kham
    // - phrases: When do I come back for a follow-up? - Bao gio toi tro lai tai kham?
    // food poisoning - trung thuc
    // - phrases: Perhaps I have food poisoning. - Co le toi bi trung thuc. / I think I have food poisoning. - Toi nghi toi bi trung thuc.
    // fracture - xuong
    // - phrases: I have a fracture. - Toi bi xuong. / I think I have a fracture. - Toi nghi toi bi xuong.
    // go home - ve nha
    // - phrases: When can I go home, Doctor? - Khi nao toi co the ve nha, thua bac si? / I want to go home. - Toi muon ve nha.
    // headache - nhuc dau
    // - phrases: I have a headache. - Toi bi nhuc dau. / I have a severe headache. - Toi bi nhuc dau nang.
    // heat stroke - trung nang
    // - phrases: Heat stroke can be very dangerous. - Trung nang co the rat nguy hiem. / I think I have heat stroke. - Toi nghi toi bi trung nang.
    // hospital - benh vien
    // - phrases: I need to go to a hospital. - Toi can di benh vien. / The hospital is very crowded. - Benh vien rat dong duc.
    // hurt - bi thuong
    // - phrases: I hurt my back. - Lung toi bi thuong. / I hurt my foot. - Chan toi bi thuong
    // hurt (verb) - bi dau
    // - phrases: My arm hurts. - Canh tay toi bi dau. / My head hurts. - Dau toi bi dau.
    // infected - bi nhiem trung
    // - phrases: Is my wound getting infected? - Vet thuong cua toi co bi nhiem trung khong? / I have an infected cut. - Toi bi cat bi nhiem trung.
    // hydrate - cung cap nuoc, cung cap do am
    // - phrases: You need to hydrate. - Ban can cung cap nuoc. / I need to hydrate. - Toi can cung cap nuoc.
    // hydration - su cung cap nuoc, su cung cap do am
    // - phrases: Hydration is important. - Su cung cap nuoc la quan trong.
    // injury - vi thuong, vet thuong
    // - phrases: I got injured two days ago. - Toi bi thuong cach day hai ngay. / I have an injury on my leg. - Chan toi bi thuong.
    // itchy - bi ngua
    // - phrases: It's very itchy. - No bi ngua lam. / Do you feel itchy? - Ban co cam thay bi ngua khong?
    // medicine - thuoc
    // - phrases: I need to take my medicine. - Toi can uong thuoc. / I need to buy some medicine. - Toi can mua mot so thuoc.
    // mosquito bite - vet muoi can
    // - phrases: I have a mosquito bite. - Toi bi can muoi. / I got stung by a mosquito. - Toi bi can muoi.
    // nausea - buon oi
    // - phrases: I feel nauseous. - Toi cam thay buon oi. / Do you feel nauseous? - Ban co cam thay buon oi khong?
    // pain - dau
    // - phrases: I have pain in my chest. - Toi bi dau o nguc. / I have a lot of pain. - Toi bi dau nhieu. / Do you feel any pain? - Ban co cam thay dau khong?
    // perhaps - co le
    // - phrases: Perhaps I have food poisoning. - Co le toi bi trung thuc. / Perhaps I have a broken bone. - Co le toi bi hong xuong.
    // sick, ill - bi benh
    // - phrases: I am sick. - Toi bi benh. / I have been sick for a week. - Toi bi benh mot tuan nay.
    // sore - bi dau
    // - phrases: My throat is sore. - Hong toi bi dau. / I have a sore throat. - Hong toi bi sung hong.
    // sprain - bi bong
    // - phrases: I have a sprain. - Toi bi bong. / I think I have a sprain. - Toi nghi toi bi bong.
    // stomachache - dau bung
    // - phrases: I have a stomachache. - Toi bi dau
    // stung - bi can
    // - phrases: I got stung by a bee. - Toi bi can bo. / I got stung by a mosquito. - Toi bi can muoi. / Those insects can sting. - Nhung con trung do co the can.
    // swollen - bi sung
    // - phrases: My ankle is swollen. - Mat ca chan toi bi sung. / I have a swollen throat. - Hong toi bi sung.
    // sting - can, bi can
    // - phrases: I got stung by a bee. - Toi bi can bo. / I got stung by a mosquito. - Toi bi can muoi. / Those insects can sting. - Nhung con trung do co the can.
    // symptom - trieu chung
    // - phrases: What are your symptoms? - Trieu chung cua ban la gi? / I have many symptoms. - Toi co nhieu trieu chung.
    // test - thu nghiem
    // - phrases: Do I need any tests? - Toi co can lam thu nghiem khong? / Do I need a blood test? - Toi co can thu mau khong?
    // tired - met moi
    // - phrases: I am tired. - Toi bi met moi. / I have been tired all day. - Toi bi met moi ca ngay.
    // toothache - dau rang
    // - phrases: I have a toothache. - Toi bi dau rang. / I cannot sleep because of my toothache. - Toi khong ngu duoc vi bi cam rang.
    // vomit - oi
    // - phrases: I feel like I'm going to vomit. - Toi cam thay sap oi. / I vomited last night. - Toi hom qua toi bi oi. / There was vomit on the floor. - Tren san co vet oi.
    // when? - khi nao?
    // - phrases: When can I go home, Doctor? - Khi nao toi co the ve nha, thua bac si? / When do I come back for a follow-up? - Bao gio toi tro lai tai kham?
    // wound (injury) - vet thuong
    // - phrases: I have a wound on my leg. - Chan toi bi thuong. / Is my wound getting infected? - Vet thuong cua toi co bi nhiem trung khong?
    // My back hurts. - Lung toi bi dau.
    // - phrases: I hurt my back. - Lung toi bi thuong. / back - lung / hurts - bi dau
    // I burned my hand. - Tay toi bi phong.
    // - phrases: I have a burn on my arm. - Canh tay toi bi boi. / burn - bi boi / hand - tay
    // Please call an ambulance! - Xin goi xe cuu thuong!
    // - phrases: The ambulance is on its way. - Xe cuu thuong dang tren duong den day. / ambulance - xe cuu thuong
    // My husband has had an accident. - Chong toi bi tai nan.
    // - phrases: accident - tai nan / My husband - Chong toi
    // Perhaps I have food poisoning. - Co le toi bi trung thuc.
    // - phrases: food - trung thuc / Perhaps - co le / I have - toi bi / have food poisoning - bi trung thuc
    // I have a high fever. - Toi bi sot cao.
    // - phrases: fever - sot / high - cao / I have - toi bi
    // I need to go to a hospital. - Toi can di benh vien.
    // - phrases: hospital - benh vien / I need to go - Toi can di
    // Last week I had a bad cold. - Tuan truoc toi bi cam lanh nang.
    // - phrases: Last week - Tuan truoc / I had - Toi bi / bad cold - cam lanh nang
    // I cannot sleep because of my toothache. - Toi khong ngu duoc vi bi cam rang.
    // - phrases: toothache - dau rang / I cannot sleep - Toi khong ngu duoc / because of - vi / my toothache - bi cam rang cua toi
    // Last night I had diarrhea. - Toi hom qua toi bi di tieu chay.
    // - phrases: Last night - Toi hom qua / I had - Toi bi / diarrhea - di tieu chay
    // I got injured two days ago. - Toi bi thuong cach day hai ngay.
    // - phrases: I got injured - Toi bi thuong / two days ago - cach day hai ngay
    // Is my wound getting infected? - Vet thuong cua toi co bi nhiem trung khong?
    // - phrases: wound - vet thuong / getting infected - bi nhiem trung / Is my wound getting infected? - Vet thuong cua toi co bi nhiem trung khong?
    // Do I need any tests? - Toi co can lam thu nghiem khong?
    // - phrases: test - thu nghiem / need - can
    // Do I need a blood test? - Toi co can thu mau khong?
    // - phrases: blood test - thu nghiem mau / need - can
    // When can I go home, Doctor? - Khi nao toi co the ve nha, thua bac si?
    // - phrases: go home - ve nha / Doctor - bac si
    // You'll have to stay in the hospital for a few days. - Ang can o trong benh vien mot tuan.
    // - phrases: stay in the hospital - o trong benh vien / for a few days - mot tuan
    // Here's your prescription. - Day la toa thuoc cua chi.
    // - phrases: prescription - toa thuoc
    // When do I come back for a follow-up? - Bao gio toi tro lai tai kham?
    // - phrases: follow-up - tai kham
    // Where's the pharmacy? - Nha thuoc tay o dau?
    // - phrases: pharmacy - nha thuoc tay
  ] }],
  'At the Pharmacy': [{ cards: [
    // subTitle: At The Pharmacy
    // antifungal medication - thoc tri name
    // - phrases: Do you have any antifungal medication? - Co thuoc tri nam nao khong? / I need an antifungal medication. - Toi can mot loai thuoc tri nam.
    // antiseptic - thuoc sat trung, thuoc khu trung
    // - phrases: Do you have any antiseptic? - Co thuoc sat trung nao khong? / I need an antiseptic. - Toi can mot loai thuoc sat trung.
    // asthma - benh suyen
    // - phrases: I have asthma. - Toi bi benh suyen. / I need my asthma medication. - Toi can thuoc tri benh suyen cua toi.
    // bandage - bang cuu thuong
    // - phrases: Do you have any bandages? - Co bang cuu thuong nao khong? / I need some bandages. - Toi can mot so bang cuu thuong.
    // Band-Aid - bang ca nhan
    // - phrases: I need to buy some Band-Aids. - Toi can mua bang ca nhan. / Do you have any Band-Aids? - Co bang ca nhan nao khong?
    // cortisone - cooc-ti-zon
    // - phrases: Do you have any cortisone? - Co cooc-ti-zon nao khong? / I need some cortisone. - Toi can mot so cooc-ti-zon.
    // cough - ho
    // - phrases: I have a cough. - Toi bi ho. / I need some cough medicine. - Toi can mot so thuoc ho. / Someone was coughing in the elevator. - Co nguoi dang ho trong thang may.
    // disinfectant - thuoc sat trung
    // - phrases: I need a bottle of disinfectant. - Toi can mot chai thuoc sat trung. / Do you have any disinfectant? - Co thuoc sat trung nao khong?
    // dry skin - da kho
    // - phrases: I have dry skin. - Da toi bi kho. / I need some lotion for my dry skin. - Toi can mot so kem duong cho da kho cua toi.
    // flu - cum
    // - phrases: I need a flu shot. - Toi can chich ngua cum. / Do you have any flu medicine? - Co thuoc cum nao khong?
    // flu shot - chich ngua cum
    // - phrases: I need a flu shot. - Toi can chich ngua cum. / Do you have any flu shots available? - Co chich ngua cum nao khong?
    // kind, type - loai
    // - phrases: What kind of medicine do you have for a headache? - Co loai thuoc gi cho nhuc dau khong? / What kind of antiseptics do you have? - Co nhung loai thuoc khu trung nao?
    // medicated oil - dau gio
    // - phrases: Do you have any medicated oil? - Co dau gio nao khong? / I need some medicated oil. - Toi can mot so dau gio.
    // medicine, medication - thuoc
    // - phrases: I need to take my medicine. - Toi can uong thuoc. / I need to buy some medicine. - Toi can mua mot so thuoc.
    // mosquito repellent - kem chong muoi
    // - phrases: Do you have any mosquito repellent? - Co kem chong muoi nao khong? / I need some mosquito repellent. - Toi can mot so kem chong muoi.
    // ointment - thuoc mo, thuoc boi
    // - phrases: Do you have any ointment? - Co thuoc mo nao khong? / I need some ointment. - Toi can mot so thuoc mo.
    // pain reliever - thuoc boi, thuoc giam dau
    // - phrases: Do you have any pain relievers? - Co thuoc giam dau nao khong? / I need some pain relievers. - Toi can mot so thuoc giam dau.
    // pharmacist - duoc si
    // - phrases: Can I talk to the pharmacist? - Cho toi noi chuyen voi duoc si? / The pharmacist is very helpful. - Duoc si rat huu ich.
    // pharmacy - nha thuoc tay
    // - phrases: Where's the pharmacy? - Nha thuoc tay o dau? / I need to go to the pharmacy. - Toi can di nha thuoc tay.
    // prescription - toa thuoc
    // - phrases: Here's my prescription. - Day la toa thuoc cua chi. / I need this prescription filled. - Toi muon mua thuoc theo toa nay.
    // rash - vet phat ban
    // - phrases: I have a skin rash. - Da toi bi phat ban. / Do you have any medicine for a rash? - Co thuoc tri phat ban nao khong?
    // skin care - cham soc da
    // - phrases: I need some skin care products. - Toi can mot so san pham cham soc da. / Do you have any skin care products? - Co san pham cham soc da nao khong?
    // ready - san sang
    // - phrases: Is my medication ready yet? - Thuoc cua toi da san sang chua? / Your medication is ready. - Thuoc cua ban da san sang.
    // sore throat - sung hong, viem hong
    // - phrases: I have a sore throat. - Hong toi bi dau. / I have a sore throat and a cough. - Hong toi bi dau va bi ho.
    // sunburn - bi boi nang
    // - phrases: I have a sunburn. - Toi bi boi nang. / I need some aloe vera for my sunburn. - Toi can mot so gel nha dam cho vet boi nang cua toi.
    // sunscreen - kem chong nang
    // - phrases: Do you have any sunscreen? - Co kem chong nang nao khong? / I need some sunscreen. - Toi can mot so kem chong nang.
    // topical - thuoc boi, thuoc mo
    // - phrases: Do you have any topical medication? - Co thuoc boi nao khong? / Is this a topical medication? - Thuoc nay co phai la thuoc boi khong?
    // vitamin - vitamin
    // - phrases: Do you have any vitamins? - Co vitamin nao khong? / I need some vitamins. - Toi can mot so vitamin. / What vitamins are you taking? - Ban dang uong vitamin gi?
    // Here's my prescription. - Day la toa thuoc cua chi.
    // - phrases: prescription - toa thuoc / here - day / my - cua chi
    // I need to buy some Band-Aids. - Toi can mua bang ca nhan.
    // - phrases: Band-Aid - bang ca nhan / I need to buy - Toi can mua
    // I need a flu shot. - Toi can chich ngua cum.
    // - phrases: flu shot - chich ngua cum / I need - Toi can
    // Is my medication ready yet? - Thuoc cua toi da san sang chua?
    // - phrases: medication - thuoc / ready - san sang
    // I will come back tomorrow. - Toi se tro lai ngay mai.
    // - phrases: come back - tro lai / tomorrow - ngay mai
    // Do you have any cold medicine? - Co thuoc cam khong?
    // - phrases: cold medicine - thuoc cam / Do you have...? - Co thuoc... nao khong?
    // Do you have anything for a headache? - Co thuoc nhuc dau khong?
    // - phrases: headache - nhuc dau / Do you have anything for...? - Co thuoc... nao khong?
    // I need this prescription filled. - Toi muon mua thuoc theo toa nay.
    // - phrases: prescription - toa thuoc / filled - mua theo toa
    // I need a bottle of disinfectant. - Toi can mot chai thuoc sat trung.
    // - phrases: disinfectant - thuoc sat trung / bottle - chai / I need... - Toi can...
    // I want to buy some cough medicine. - Toi muon mua thuoc ho.
    // - phrases: cough medicine - thuoc ho / I want to buy... - Toi muon mua...
    // I have allergies. What medicine do I need to buy? - Toi bi di ung. Toi can mua thuoc gi?
    // - phrases: allergies - di ung / medicine - thuoc
    // Can I talk to the pharmacist? - Cho toi noi chuyen voi duoc si?
    // - phrases: talk to - noi chuyen voi / pharmacist - duoc si
    // What kind of antiseptics do you have? - Co nhung loai thuoc khu trung nao?
    // - phrases: kind - loai / antiseptics - thuoc khu trung
    // How much is this medicine? - Thuoc nay bao nhieu tien?
    // - phrases: medicine - thuoc / How much...? - Bao nhieu...?
  ] }],
  'Basic Necessities (Restrooms, Laundry, etc.)': [{ cards: [
    // bathroom - phong tam, nha ve sinh
    // - phrases: Where's the bathroom? - Phong tam o dau? / Is there a bathroom here? - Co phong tam o day khong? / I need to use the bathroom. - Toi can di ve sinh.
    // dry-clean - hap tay
    // - phrases: Do you do dry-cleaning? - Ban co hap tay khong?
    // dry cleaner's - tiem giat ui
    // - phrases: I need to find a dry cleaner's. - Toi can tim mot tiem giat ui va hap tay.
    // laundry room - phong giat do
    // - phrases: Is there a laundry room? - Co phong giat do trong khach san nay khong?
    // look for - tim, kiem
    // - phrases: I'm looking for the restroom. - Toi dang tim nha ve sinh. / I'm looking for the laundry room. - Toi dang tim phong giat do.
    // men's room - nha ve sinh nam
    // - phrases: Where's the men's room? - Nha ve sinh nam o dau?
    // pick up (item) - den lay
    // - phrases: When can I pick it up? - Khi nao toi den lay duoc? / I will pick it up tomorrow. - Toi se den lay ngay mai.
    // restroom - nha ve sinh
    // - phrases: Is there a restroom here? - Co nha ve sinh o day khong? / Where's the restroom? - Nha ve sinh o dau?
    // sink (noun) - bon rua tay, bon rua mat
    // - phrases: The sink is clogged. - Bon rua tay bi tac. / The sink is leaking. - Bon rua tay bi ro ri. / This is a nice sink. - Day la mot bon rua tay dep.
    // women's room - nha ve sinh nu
    // - phrases: Where's the women's room? - Nha ve sinh nu o dau? / This is a nice women's room. - Day la mot nha ve sinh nu dep.
    // Is there a restroom here? - Co nha ve sinh o day khong?
    // - phrases: Where's the restroom? - Nha ve sinh o dau? / I need to use the restroom. - Toi can di ve sinh.
    // Where's the women's room? - Nha ve sinh nu o dau?
    // - phrases: women's room - nha ve sinh nu / Where's...? - ... o dau?
    // Is there a laundry room in this hotel? - Khach san nay co phong giat do khong?
    // - phrases: laundry room - phong giat do / Is there...? - Co... khong?
    // What floor is it on? - Phong giat o tren lau may?
    // - phrases: floor - lau / What floor...? - ... o tren lau may?
    // Where's the bathroom? - Phong tam o dau?
    // - phrases: bathroom - phong tam / Where's...? - ... o dau?
    // Is there hot water? - Co nuoc nong khong?
    // - phrases: hot water - nuoc nong / Is there...? - Co... khong?
    // I need to find a dry cleaner's. - Toi can tim mot tiem giat ui va hap tay.
    // - phrases: dry cleaner's - tiem giat ui / I need to find... - Toi can tim...
    // How much is it to get this jacket dry-cleaned? - Hap tay cai ao khoac nay bao nhieu?
    // - phrases: dry-clean - hap tay / How much...? - Bao nhieu...?
    // When can I pick it up? - Khi nao toi den lay duoc?
    // - phrases: pick up - den lay / When can I...? - Khi nao toi...?
  ] }],
  'Banking and Money': [{ cards: [
    // ATM - may rut tien tu dong
    // - phrases: Where's the nearest ATM? - May rut tien tu dong gan nhat o dau?
    // bank - ngan hang
    // - phrases: Is there a bank near here? - Co ngan hang nao gan day khong? / I need to go to the bank. - Toi can di ngan hang.
    // bill (money) - hoa don, tien
    // - phrases: Can I pay the bill? - Toi co the tra tien khong? / Can I get the bill, please? - Cho toi xin hoa don, lam on? / How much is the bill? - Hoa don bao nhieu?
    // bill (paper) - to tien
    // - phrases: Can I pay the bill? - Toi co the tra tien khong? / Can I get the bill, please? - Cho toi xin hoa don, lam on? / How much is the bill? - Hoa don bao nhieu?
    // cash - tien mat
    // - phrases: I need to withdraw some cash. - Toi can rut mot so tien mat. / Can I pay in cash? - Toi co the tra tien mat khong?
    // change (money) - tien le
    // - phrases: Do you have change for a 20-dollar bill? - Ban co tien le cho mot to tien 20 do khong? / I need some change. - Toi can mot so tien le.
    // credit card - the tin dung
    // - phrases: Can I use my credit card here? - Toi co the su dung the tin dung o day khong? / Do you accept credit cards? - Ban co chap nhan the tin dung khong?
    // currency exchange - doi tien
    // - phrases: Where can I exchange money? - Toi co the doi tien o dau? / I need to exchange some money. - Toi can doi mot so tien.
    // deposit - gui tien
    // - phrases: I would like to make a deposit. - Toi muon gui tien vao ngan hang. / Can I make a deposit here? - Toi co the gui tien o day khong?
    // exchange rate - ty gia
    // - phrases: What is the exchange rate for US dollars? - Ty gia doi tien cua dong My la bao nhieu? / Can you tell me the exchange rate? - Ban co the cho toi biet ty gia khong?
    // fee - phi
    // - phrases: Is there a fee for using the ATM? - Co phi khi su dung may rut tien tu dong khong?
    // interest rate - lai suat
    // - phrases: What is the interest rate for a savings account? - Lai suat cho tai khoan tiet kiem la bao nhieu?
    // loan - vay tien
    // - phrases: I need to apply for a loan. - Toi can xin vay tien. / What is the interest rate for a loan? - Lai suat cho vay tien la bao nhieu?
    // money - tien
    // - phrases: How much money do I have? - Toi co bao nhieu tien? / I need to get some money. - Toi can lay mot so tien.
    // receipt - hoa don
    // - phrases: Can I get a receipt, please? - Cho toi mot hoa don, lam on? / Here's your receipt. - Day la hoa don cua ban.
    // withdraw - rut tien
    // - phrases: I need to withdraw some cash. - Toi can rut mot so tien mat.
    // Where's the nearest ATM? - May rut tien tu dong gan nhat o dau?
    // - phrases: ATM - may rut tien tu dong / Where's the nearest...? - ... gan nhat o dau?
    // I need to withdraw some cash. - Toi can rut mot so tien mat.
    // - phrases: withdraw - rut tien / cash - tien mat / I need to... - Toi can...
    // Can I use my credit card here? - Toi co the su dung the tin dung o day khong?
    // - phrases: credit card - the tin dung / Can I...? - Toi co the... khong?
    // What is the exchange rate for US dollars? - Ty gia doi tien cua dong My la bao nhieu?
    // - phrases: exchange rate - ty gia / US dollars - dong My / What is...? - Ty gia doi tien cua... la bao nhieu?
    // I would like to make a deposit. - Toi muon gui tien vao ngan hang.
    // - phrases: deposit - gui tien / I would like to... - Toi muon...
    // How much is the fee for this transaction? - Phi cho giao dich nay la bao nhieu?
    // - phrases: fee - phi / How much...? - Bao nhieu...?
    // Can I get a receipt, please? - Cho toi mot hoa don, lam on?
    // - phrases: receipt - hoa don / Can I get...? - Cho toi mot...?
    // exchange money - doi tien
    // - phrases: Where can I exchange money? - Toi co the doi tien o dau? / I need to exchange some money. - Toi can doi mot so tien.
    // exchange rate - hoi suat
    // - phrases: What is the exchange rate for US dollars? - Ty gia doi tien cua dong My la bao nhieu? / Can you tell me the exchange rate? - Ban co the cho toi biet ty gia khong?
    // savings account - tai khoan tiet kiem
    // - phrases: I want to open a savings account. - Toi muon mo mot tai khoan tiet kiem. / What is the interest rate for a savings account? - Lai suat cho tai khoan tiet kiem la bao nhieu?
    // transfer money - chuyen tien
    // - phrases: I need to transfer some money. - Toi can chuyen mot so tien. / Can I transfer money to another account? - Toi co the chuyen tien sang tai khoan khac khong?
    // US dollars - do
    // - phrases: How many US dollars do I have? - Toi co bao nhieu do? / I need to exchange some money for US dollars. - Toi can doi mot so tien sang do.
    // Vietnamese currency - dong
    // - phrases: How many dong do I have? - Toi co bao nhieu dong? / I need to exchange some money for Vietnamese dong. - Toi can doi mot so tien sang dong.
    // withdraw money - rut tien
    // - phrases: I need to withdraw some cash. - Toi can rut mot so tien mat. / Can I withdraw money from this ATM? - Toi co the rut tien tu may rut tien tu dong nay khong?
    // Is there an ATM near here? - Co may rut tien tu dong gan day khong?
    // - phrases: ATM - may rut tien tu dong / Is there...? - Co... khong?
    // I'd like to withdraw 600 dollars from my checking account. - Toi muon rut sau tram do tu tai khoan chinh cua toi.
    // - phrases: withdraw - rut tien / dollars - do / checking account - tai khoan chinh /
    // I'd like to exchange 200 dollars for Vietnamese dong - Toi muon doi hai tram do sang dong.
    // - phrases: exchange - doi tien / dollars - do / Vietnamese dong - dong
    // How many dong to the dollar? - Bao nhieu dong cho mot do?
    // - phrases: dong - dong / dollar - do / How many...? - Bao nhieu...?
    // Is there an Australian bank in this city? - Co ngan hang Uc nao o thanh pho nay khong?
    // - phrases: Australian bank - ngan hang Uc / Is there...? - Co... khong?
  ] }],
  'Making Phone Calls and Using the Internet': [{ cards: [
    // call back - goi lai
    // - phrases: Can you call back after 8? - Goi lai cho toi sau tam gio duoc khong? / I will call you back later. - Toi se goi lai cho ban sau.
    // cell phone - dien thoai di dong
    // - phrases: Can I use your cell phone? - Toi co the dung dien thoai di dong cua ban khong? / What's your cell phone number? - So dien thoai di dong cua ban la bao nhieu? / Who's cell phone is this? - Day la dien thoai di dong cua ai?
    // cell phone number - so dien thoai di dong
    // - phrases: What's your cell phone number? - So dien thoai di dong cua ban la bao nhieu? / Can I have your cell phone number? - Cho toi xin so dien thoai di dong cua ban?
    // computer - may tinh, may vi tinh
    // - phrases: Can I use this computer? - Toi dung may vi tinh nay duoc khong? / This is a nice computer. - Day la mot may vi tinh dep.
    // email - email (eh-meh-oo)
    // - phrases: Could I have your email address? - Cho toi xin dia chi email? / I will send you an email. - Toi se gui ban mot email.
    // hello (answering the phone) - a lo
    // - phrases: Hello? - Alo? / Hello, this is John. - Alo, day la John.
    // international call - goi dien thoai quoc te
    // - phrases: I need to make an international call. - Toi can goi dien thoai quoc te. / Can I make an international call from this phone? - Toi co the goi dien thoai quoc te tu dien thoai nay khong?
    // Internet - In-to-net (In tuh net)
    // - phrases: Can I use the Internet here? - Toi co the su dung Internet o day khong? / The Internet is very slow. - Internet rat cham. / high-speed Internet - Internet toc do cao
    // Internet cafe - quan In-to-net cafe
    // - phrases: Is there an Internet cafe nearby? - Co quan Internet cafe gan day khong? / I need to find an Internet cafe. - Toi can tim mot quan Internet cafe.
    // leave a message - nhan lai
    // - phrases: Can I leave a message? - Toi nhan lai duoc khong? / Please leave a message after the beep. - Vui long de lai loi nhan sau tieng bip.
    // local call - goi dien thoai noi hat
    // - phrases: Local calls are free. - Goi dien thoai noi hat la mien phi.
    // long-distance call - goi dien thoai vien lien
    // - phrases: I need to make a long-distance call. - Toi can goi dien thoai vien lien. / Long-distance calls are more expensive. - Goi dien thoai vien lien dat hon.
    // make a phone call - goi dien thoai
    // - phrases: I need to make a phone call. - Toi can goi dien thoai. / Can I make a phone call from this room? - Toi co the goi dien thoai tu phong nay khong?
    // message - loi nhan
    // - phrases: Can I leave a message? - Toi nhan lai duoc khong? / I will leave a message for him. - Toi se de lai loi nhan cho anh ay. / Please leave a message after the beep. - Vui long de lai loi nhan sau tieng bip.
    // now - bay gio
    // - phrases: I can't talk on the phone now. - Toi khong noi chuyen tren dien thoai duoc bay gio. / Can I call you back later? - Toi co the goi lai cho ban sau khong?
    // phone number - so dien thoai
    // - phrases: What's your phone number? - So dien thoai cua ban la bao nhieu? / Can I have your phone number? - Cho toi xin so dien thoai cua ban? / I didn't get the phone number. - Toi khong co so dien thoai.
    // public phone - dien thoai cong cong
    // - phrases: Is there a public phone nearby? - Co dien thoai cong cong gan day khong? / I need to find a public phone. - Toi can tim mot dien thoai cong cong.
    // telephone - dien thoai
    // - phrases: Can I use the telephone in my room? - Toi co the dung dien thoai trong phong khong? / The telephone is not working. - Dien thoai bi hong.
    // use - dung
    // - phrases: Can I use your cell phone? - Toi co the dung dien thoai di dong cua ban khong? / Can I use the phone in my room? - Toi co the dung dien thoai trong phong khong? / Can I use the Internet here? - Toi co the su dung Internet o day khong?
    // work phone number - so dien thoai van phong
    // - phrases: Call me on my work phone number. - Goi toi tren so dien thoai van phong cua toi.
    // I need to make a phone call. - Toi can goi dien thoai.
    // - phrases: make a phone call - goi dien thoai / I need to... - Toi can...
    // Can I use your cell phone? - Toi co the dung dien thoai di dong cua ban khong?
    // - phrases: cell phone - dien thoai di dong / Can I...? - Toi co the... khong?
    // Can I use the phone in my room? - Toi co the dung dien thoai trong phong khong?
    // - phrases: telephone - dien thoai / Can I use...? - Toi co the... khong?
    // Is there a public phone nearby? - Co dien thoai cong cong gan day khong?
    // - phrases: public phone - dien thoai cong cong / Is there...? - Co... khong?
    // I need to make an international call. - Toi can goi dien thoai quoc te.
    // - phrases: international call - goi dien thoai quoc te / I need to... - Toi can...
    // Can I use the Internet here? - Toi co the su dung Internet o day khong?
    // - phrases: Internet - Internet / Can I...? - Toi co the... khong?
    // Is there an Internet cafe nearby? - Co quan Internet cafe gan day khong?
    // - phrases: Internet cafe - quan Internet cafe / Is there...? - Co... khong?
    // What's your cell phone number? - So dien thoai di dong cua ban la bao nhieu?
    // - phrases: cell phone number - so dien thoai di dong / What's...? - So... la bao nhieu?
    // Can you call back after 8? - Goi lai cho toi sau tam gio duoc khong?
    // - phrases: call back - goi lai / Can you...? - Goi lai cho toi... khong?
    // Can I leave a message? - Toi nhan lai duoc khong?
    // - phrases: leave a message - nhan lai / Can I...? - Toi nhan lai duoc khong?
    // I can't talk on the phone now - Toi khong noi chuyen tren dien thoai duoc bay gio.
    // - phrases: talk on the phone - noi chuyen tren dien thoai / now - bay gio / I can't... - Toi khong... duoc...
    // Can I use this computer? - Toi dung may vi tinh nay duoc khong?
    // - phrases: computer - may tinh / Can I...? - Toi... khong?
    // How much do I have to pay? - Toi phai tra bao nhieu?
    // - phrases: How much...? - Toi phai tra bao nhieu?
    // Could I have your email address? - Cho toi xin dia chi email?
    // - phrases: email address - dia chi email / Could I have...? - Cho toi xin...?
  ] }],
};
