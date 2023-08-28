import { DUMMY_LIST_LENGTH } from './Constants';

abstract class Utils {
    static generateLargeList = (): string [] => {
        const list = [];
        for (let i = 0; i < DUMMY_LIST_LENGTH; i++) {
            list.push('_');
        }
        return list;
    };
}

export default Utils;