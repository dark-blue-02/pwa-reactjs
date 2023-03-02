export default class DateTime {
    static #hour = 3600 * 1000
    static #day = this.#hour * 24

    static now() { return new Date() }

    /**
     * @returns today in milliseconds (epoch time).
     */
    static rightNow() { return Date.now() }

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
}