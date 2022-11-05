import { defineStore } from "pinia"
import api from "../services/api.js"
import axios from 'axios'

export const userStore = defineStore('user',{
    state: () => {
        return {
            listUsers: ['wallysonn', 'diego3g', 'filipedeschamps', 'rmanguinho'],
            infoUsers: []
        }
    },
    actions: {

    }
})