 import { createApp } from './vendor/vue.esm-browser.js';



 // Создайте Vue приложение
 const vm = createApp({
   data() {
     return {
       co:0,
     };
   },
   methods:{
     sum(){
      this.co++;
     }
   },


 }).mount('#app');

