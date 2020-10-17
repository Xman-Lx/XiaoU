import Vue from "vue";

import vHeader from "./header"
import vBack from "./back"
let obj = {
    vHeader,
    vBack
};

for (let i in obj) {
    Vue.component(i, obj[i]);
}