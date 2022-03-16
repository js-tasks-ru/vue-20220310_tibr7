import { createApp } from './vendor/vue.esm-browser.js';

// From https://jsonplaceholder.typicode.com/comments
const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

// Требуется создать Vue приложение


const vm = createApp({
  data() {
    return {

      searsh:'',
     };
  },

  computed:{
    emails_result(){
      return this.SearshEmail(this.searsh);

    },

  },
  methods: {
    SearshEmail(searsh){

      let sStr=function(str, searsh) {
        if(!searsh.length) return 0;
        let reg = new RegExp(searsh, "ig");
        return reg.test(str);

      }
      return emails.map(function(name) {
        return {'email':name,'class':(sStr(name,searsh.trim())?'marked':'')};
      });

    }

  },


}).mount('#app');

//window.vm=vm;

// Создайте Vue приложение
