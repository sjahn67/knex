import chalk from 'chalk'

let logger = {
  warn(msg) {
    // eslint-disable-next-line
    console.warn(chalk.yellow(`Knex:warning - ${msg}`));
  },
  log(...args) {
    // eslint-disable-next-line
    console.log(...args);
  },
  error(msg) {
    // eslint-disable-next-line
    console.log(chalk.red(`Knex:Error ${msg}`))
  }
};

export function getLogger() {
  return logger;
}

export function setLogger(newLogger) {
  if (
    typeof newLogger.warn === 'function' && 
    typeof newLogger.log === 'function' &&
    typeof newLogger.error === 'function'
  ) {
    logger = newLogger;
  } else {
    logger.error(
      'Invalid logger instance passed to setLogger' + 
      ', must have `warn`, `log`, and `error` methods.'
    )
  }
}
