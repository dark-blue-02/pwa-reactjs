import { makeObservable, observable, action } from "mobx"

export default class NavbarStore {
    selectedIndex = 0

    constructor() {
        makeObservable(this, {
            selectedIndex: observable,
            setSelectedIndex: action,
        })
    }

    /**
     * @param {number} index
     */
    setSelectedIndex(index) {
        this.selectedIndex = index
    }

}