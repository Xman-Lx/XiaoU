import Vue from "vue"

import filterprice from "./filterprice"

let obj = {
    filterprice
}

for (let i in obj) {
    Vue.filter(i, obj[i])
}