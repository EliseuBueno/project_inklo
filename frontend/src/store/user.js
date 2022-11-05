import { defineStore } from "pinia"

export const userStore = defineStore('user',{
    state: () => {
        return {
            listUsers: ['wallysonn', 'diego3g', 'filipedeschamps', 'rmanguinho'],
            infoUsers: []
        }
    }
})