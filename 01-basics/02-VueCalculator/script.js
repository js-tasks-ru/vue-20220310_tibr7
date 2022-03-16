import { createApp,defineComponent } from './vendor/vue.esm-browser.js';

const vm = createApp({
  data() {
    return {
      n1:'',
      n2:'',
      res:'0',
      operator:'sum',


    };
  },
  watch: {
    'n1'(){this.Result();},
    'n2'(){this.Result();},
    'operator'(){this.Result();}
  },
  methods:{
    Result(){
      if(this.operator==='sum')
        this.res=(parseFloat(this.n1)||0) + (parseFloat(this.n2)||0);
      if(this.operator==='subtract')
        this.res=(parseFloat(this.n1)||0) - (parseFloat(this.n2)||0);
      if(this.operator==='multiply')
        this.res=(parseFloat(this.n1)||0) * (parseFloat(this.n2)||0);
      if(this.operator==='divide')
        this.res=(parseFloat(this.n1)||0) / (parseFloat(this.n2)||0);

    }


  }

}).mount('#app');

//window.vm=vm;

// Создайте Vue приложение


