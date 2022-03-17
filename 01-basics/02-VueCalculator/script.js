import { createApp,defineComponent } from './vendor/vue.esm-browser.js';

const vm = createApp({
  data() {
    return {
      n1:'',
      n2:'',
      operator:'sum',


    };
  },
  watch: {
    'n1'(){this.Result();},
    'n2'(){this.Result();},
    'operator'(){this.Result();}
  },
  computed:{
    res(){
      return this.Result();

    },

  },



  methods:{
    Result() {
      if (this.operator === 'sum') {
      return  (parseFloat(this.n1) || 0) + (parseFloat(this.n2) || 0);
      }
      if (this.operator === 'subtract') {
        return (parseFloat(this.n1) || 0) - (parseFloat(this.n2) || 0);
      }
      if (this.operator === 'multiply') {
        return (parseFloat(this.n1) || 0) * (parseFloat(this.n2) || 0);
      }
      if (this.operator === 'divide') {
        return (parseFloat(this.n1) || 0) / (parseFloat(this.n2) || 0);
      }
    }
  }

}).mount('#app');

//window.vm=vm;

// Создайте Vue приложение


