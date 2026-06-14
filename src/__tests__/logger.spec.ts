import { describe, it, expect, vi } from 'vitest';
import { createLogger, type LogEvent } from '../logger';

describe('createLogger', () => {
  it('delivers an emitted event to a subscribed handler with level, message, data, and timestamp', () => {
    const received: LogEvent[] = [];
    const log = createLogger([]);
    log.on(e => received.push(e));

    log.info('hello', { a: 1 });

    expect(received).toHaveLength(1);
    expect(received[0]!.level).toBe('info');
    expect(received[0]!.message).toBe('hello');
    expect(received[0]!.data).toEqual({ a: 1 });
    expect(typeof received[0]!.timestamp).toBe('number');
  });

  it('tags events with the level of the method called', () => {
    const levels: string[] = [];
    const log = createLogger([]);
    log.on(e => levels.push(e.level));

    log.debug('d');
    log.info('i');
    log.warn('w');
    log.error('e');

    expect(levels).toEqual(['debug', 'info', 'warn', 'error']);
  });

  it('fans out to every subscribed handler', () => {
    const a = vi.fn();
    const b = vi.fn();
    const log = createLogger([]);
    log.on(a);
    log.on(b);

    log.info('msg');

    expect(a).toHaveBeenCalledOnce();
    expect(b).toHaveBeenCalledOnce();
  });

  it('stops delivering after the returned unsubscribe is called', () => {
    const handler = vi.fn();
    const log = createLogger([]);
    const off = log.on(handler);

    log.info('first');
    off();
    log.info('second');

    expect(handler).toHaveBeenCalledOnce();
  });

  it('uses the provided initial handlers', () => {
    const initial = vi.fn();
    const log = createLogger([initial]);

    log.warn('boom');

    expect(initial).toHaveBeenCalledOnce();
    expect(initial.mock.calls[0]![0].level).toBe('warn');
  });
});
