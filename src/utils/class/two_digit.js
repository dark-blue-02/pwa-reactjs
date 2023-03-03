export default class TwoDigits {
    /**
     * @param {number} num
     */
    static numToTwoDigits(num) {
        return `${num < 10 ? "0" : ""}${num}`
    }
}