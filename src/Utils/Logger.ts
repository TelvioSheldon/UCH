/* eslint-disable no-console */

enum LOG_LEVELS {
    NO_LOGGING,
    ERRORS_AND_WARNINGS,
    ERRORS__WARNINGS_AND_GENERAL_LOGS,
    LOGS_AND_DEBUG_INFO,
    FULL_LOGS
}
abstract class Logger {

    private static _logLevel: LOG_LEVELS = LOG_LEVELS.FULL_LOGS;

    static log(from: string, message: string, data?: any) {
        if (Logger._logLevel >= LOG_LEVELS.ERRORS__WARNINGS_AND_GENERAL_LOGS) {
            const logString: string = Logger.logStringBuilder(
                'LOG',
                from,
                message
            );
            if (data) {
                console.log(logString, data);
            } else {
                console.log(logString);
            }
        }
    }

    static trace(from: string, message: string, data?: any) {
        if (Logger._logLevel >= LOG_LEVELS.FULL_LOGS) {
            const logString: string = Logger.logStringBuilder(
                'TRACE',
                from,
                message
            );
            if (data) {
                console.log(logString, data);
            } else {
                console.log(logString);
            }
        }
    }

    static debug(from: string, message: string, data?: any) {
        if (Logger._logLevel >= LOG_LEVELS.LOGS_AND_DEBUG_INFO) {
            const logString: string = Logger.logStringBuilder(
                'DEBUG',
                from,
                message
            );
            if (data) {
                console.log(logString, data);
            } else {
                console.log(logString);
            }
        }
    }

    static warn(from: string, message: string, data?: any) {
        if (Logger._logLevel >= LOG_LEVELS.ERRORS__WARNINGS_AND_GENERAL_LOGS) {
            const logString: string = Logger.logStringBuilder(
                'WARN',
                from,
                message
            );
            if (data) {
                console.warn(logString, data);
            } else {
                console.warn(logString);
            }
        }
    }

    static error(from: string, message: string, data?: any) {
        if (Logger._logLevel >= LOG_LEVELS.ERRORS__WARNINGS_AND_GENERAL_LOGS) {
            const logString: string = Logger.logStringBuilder(
                'ERROR',
                from,
                message
            );
            if (data) {
                console.error(logString, data);
            } else {
                console.error(logString);
            }
        }
    }

    private static logStringBuilder(
        severity: string,
        from: string,
        message: string
    ) {
        let logString: string;
        const _theTime = new Date();
        const _dateString = [];
        const _timeString = [];
        const _fromString = [];
        const _theArr = [];

        // Build Date
        _dateString.push(_theTime.getFullYear());
        _dateString.push(Logger.prettyPrintNumbers(_theTime.getMonth() + 1, 2));
        _dateString.push(Logger.prettyPrintNumbers(_theTime.getDate(), 2));

        // Build Time
        _timeString.push(Logger.prettyPrintNumbers(_theTime.getHours(), 2));
        _timeString.push(Logger.prettyPrintNumbers(_theTime.getMinutes(), 2));
        _timeString.push(Logger.prettyPrintNumbers(_theTime.getSeconds(), 2));

        _theArr.push(
            `${_dateString.join('-')} ${_timeString.join(
                ':'
            )}, ${Logger.prettyPrintNumbers(_theTime.getMilliseconds(), 3)}`
        );

        _theArr.push(Logger.prettyPrint(severity, 5));

        if (typeof message === 'undefined' || message === null) {
            // from was not filled, so we are presenting the message and leaving the from in blank
            message = from;
            from = '';
        }

        _fromString.push(Logger.prettyPrint(from, 20));

        _theArr.push(_fromString.join('').substr(0, 20));

        // Adding the Line to Log and Returning the Formatted String
        _theArr.push(`${message}`);
        // eslint-disable-next-line prefer-const
        logString = _theArr.join('|');

        return logString;
    }

    private static prettyPrintNumbers(numberToPrint: number, minSize: number) {
        let i: number;
        let result = `${numberToPrint}`;
        const size: number = result ? minSize - result.length : minSize;

        for (i = 0; i < size; i++) {
            result = `0${result}`;
        }

        return result;
    }

    private static prettyPrint(text: string, minSize: number) {
        let i: number;
        let result: string = text || '';
        const size: number = text ? minSize - text.length : minSize;

        for (i = 0; i < size; i++) {
            result += ' ';
        }

        return result;
    }
}

export default Logger;
