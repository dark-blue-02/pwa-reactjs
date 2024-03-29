import TwoDigits from "./two_digit"

export default class DateTime {
    static #hour = 3600 * 1000
    static #day = this.#hour * 24

    static now() { return new Date() }

    /**
     * @returns today in milliseconds (epoch time).
     */
    static rightNow() { return Date.now() }

    static fromString(text) {
        return new Date(Date.parse(text))
    }

    /**
     * @param {Date} date
     */
    static getMonthAsString(date) {
        const getMonth = date.getMonth() + 1
        return TwoDigits.numToTwoDigits(getMonth)
    }

    /**
     * @param {{date: Date, days: number}} obj
     */
    static addDays({ date, days }) {
        return new Date(date.getTime() + this.#day * days)
    }

    /**
     * @param {{date: Date, days: number}} obj
     */
    static subtractDays({ date, days }) {
        return new Date(date.getTime() - this.#day * days)
    }

    /**
     * @param {{date: Date, hours: number}} obj
     */
    static addHours({ date, hours }) {
        return new Date(date.getTime() + this.#hour * hours)
    }

    /**
     * @param {{date: Date, hours: number}} obj
     */
    static subtractHours({ date, hours }) {
        return new Date(date.getTime() - this.#hour * hours)
    }

    static get firstDayOfWeek() {
        const today = new Date();
        const todayDayOfWeek = today.getDay();
        const first = this.subtractDays({ date: today, days: todayDayOfWeek - 1 })
        return `${first.getFullYear()}-${this.getMonthAsString(first)}-` +
            `${TwoDigits.numToTwoDigits(first.getDate())}`
    }

    static get lastDayOfWeek() {
        const today = new Date();
        const todayDayOfWeek = today.getDay();
        const last = this.addDays({ date: today, days: 7 - todayDayOfWeek })
        return `${last.getFullYear()}-${this.getMonthAsString(last)}-` +
            `${TwoDigits.numToTwoDigits(last.getDate())}`
    }

    /**
     * @returns dates of current week.
     */
    static get currentWeek() {
        const today = new Date();
        const todayDayOfWeek = today.getDay();
        const prevDates = []
        const nextDates = []

        for (let i = todayDayOfWeek - 1; i >= 1; i--) {
            prevDates.push(this.subtractDays({ date: today, days: i }).getDate())
        }

        for (let i = 1; i <= 7 - todayDayOfWeek; i++) {
            nextDates.push(this.addDays({ date: today, days: i }).getDate())
        }

        return [...prevDates, today.getDate(), ...nextDates]
    }

    /**
    * @param {Date} date
    */
    static getTimeOfDay(date) {
        const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
        const minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
        return `${hour}:${minute}`
    }

    /**
     * @param {Date} date
     * @param {string} separator
     * @return dd-MM-yyyy or yyyy-MM-dd (reverse)
     */
    static formatDate(date, separator, reverse = false) {
        const day = TwoDigits.numToTwoDigits(date.getDate())
        const month = TwoDigits.numToTwoDigits(date.getMonth() + 1)
        const year = date.getFullYear()
        return reverse
            ? `${year}${separator}${month}${separator}${day}`
            : `${day}${separator}${month}${separator}${year}`
    }

    static toString(textDate, separator, reverse = false) {
        const date = DateTime.fromString(textDate)
        return this.formatDate(date, separator, reverse)
    }

    /**
     * @param {Date} date1
     * @param {Date} date2
     * @returns 1 if date1 is after date2, -1 if date1 is before date2, 0 if equals
     */
    static compare(date1, date2) {
        const time1 = date1.getTime()
        const time2 = date2.getTime()
        return time1 > time2 ? 1 : time1 < time2 ? -1 : 0
    }

}
