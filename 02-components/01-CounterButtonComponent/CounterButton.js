import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  // Компонент должен иметь входной параметр
  props: {
    count: {
      type: Number,
      required: true,
      default:0,
    },
   },

  /*
  methods:{
    up(value){
      this.$emit('update',value);
    },
 },
 */

 emits:["update:count"],

  // Шаблон лучше держать максимально простым, а логику выносить в методы

  // Шаблон потребуется отредактировать
  template: `<button type="button"  @click="$emit('update:count',count+1)">{{ count }}</button>`,
});
