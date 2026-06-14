// Event-based logger. Callers emit level-tagged events; subscribers (sinks)
// receive them. A console sink is attached by default. Kept dependency-free and
// functional to match the rest of the codebase.

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export type LogEvent = {
  level: LogLevel;
  message: string;
  data?: unknown;
  timestamp: number;
};

export type LogHandler = (event: LogEvent) => void;

// Default sink: route each level to the matching console method.
export const consoleHandler: LogHandler = ({ level, message, data }) => {
  const fn =
    level === 'debug' ? console.debug
    : level === 'info' ? console.info
    : level === 'warn' ? console.warn
    : console.error;
  if (data !== undefined) fn(`[${level}] ${message}`, data);
  else fn(`[${level}] ${message}`);
};

export type Logger = {
  /** Subscribe a handler; returns an unsubscribe function. */
  on: (handler: LogHandler) => () => void;
  debug: (message: string, data?: unknown) => void;
  info: (message: string, data?: unknown) => void;
  warn: (message: string, data?: unknown) => void;
  error: (message: string, data?: unknown) => void;
};

export const createLogger = (handlers: LogHandler[] = [consoleHandler]): Logger => {
  const subscribers = new Set<LogHandler>(handlers);

  const emit = (level: LogLevel, message: string, data?: unknown): void => {
    const event: LogEvent = { level, message, data, timestamp: Date.now() };
    for (const handler of subscribers) handler(event);
  };

  return {
    on: handler => {
      subscribers.add(handler);
      return () => subscribers.delete(handler);
    },
    debug: (message, data) => emit('debug', message, data),
    info: (message, data) => emit('info', message, data),
    warn: (message, data) => emit('warn', message, data),
    error: (message, data) => emit('error', message, data),
  };
};

// Shared application logger.
export const logger = createLogger();
