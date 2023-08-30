abstract class Utils {
    static generateLargeList = (length: number): string [] => {
        const list = [];
        for (let i = 0; i < length; i++) {
            list.push('_');
        }
        return list;
    };
}

export default Utils;