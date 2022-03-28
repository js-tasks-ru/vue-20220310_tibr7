<template >
  <div class="toasts">
  <div v-for="item in arr" :class="`toast toast_${item.type}`">
    <ui-icon class="toast__icon" :icon="`${item.icon}-circle`" />
    <span>{{ item.title }}</span>
  </div>

  </div>

</template>

<script>
import UiIcon from './UiIcon';

export default {
  name: 'TheToaster',
  components: { UiIcon },
  data() {
    return {
    arr:[],

    };
  },


  methods: {
    success(m) {
      let obj={title:m,type:'success',icon:'check'};
      this.arr.push(obj);
      this.spliceArr(obj,5000);
    },

    error(m) {
      let obj={title:m,type:'error',icon:'alert'};
      this.arr.push(obj);
      this.spliceArr(obj,5000);
     },

    spliceArr(obj,time=5000){
      setTimeout(()=>{
        let i=this.arr.indexOf(obj);
        this.arr.splice(i,1);
      }, time);
    },


  },



};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
