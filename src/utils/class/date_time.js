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

    static get firstDayOfWeek() {
        const today = new Date();
        const todayDayOfWeek = today.getDay();
        const first = this.subtractDays({ date: today, days: todayDayOfWeek - 1 })
        const getMonth = first.getMonth() + 1
        const date = first.getDate() < 10 ? `0${first.getDate()}` : first.getDate()
        const month = getMonth < 10 ? `0${getMonth}` : getMonth
        return `${first.getFullYear()}-${month}-${date}`
    }

    static get lastDayOfWeek() {
        const today = new Date();
        const todayDayOfWeek = today.getDay();
        const last = this.addDays({ date: today, days: 7 - todayDayOfWeek })
        const getMonth = last.getMonth() + 1
        const date = last.getDate() < 10 ? `0${last.getDate()}` : last.getDate()
        const month = getMonth < 10 ? `0${getMonth}` : getMonth
        return `${last.getFullYear()}-${month}-${date}`
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
    * @param {{date: Date}} obj
    */
    static getTimeOfDay({ date }) {
        const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
        const minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
        return `${hour}:${minute}`
    }

}