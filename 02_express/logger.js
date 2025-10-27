import { createLogger, format, transports } from "winston";
const { combine, timestamp, json, colorize, printf } = format;

// Console log format
const consoleLogFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  level: "info",
  format: combine(timestamp(), json()), // for file
  transports: [
    new transports.Console({
      format: combine(colorize(), timestamp(), consoleLogFormat), // for console
    }),
    new transports.File({ filename: "app.log" }), // for file logs
  ],
});

export default logger;