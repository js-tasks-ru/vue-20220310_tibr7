import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from "../06-MeetupView/MeetupView.js";

import { fetchMeetupById } from './meetupService.js';




export default defineComponent({
  name: 'PageMeetup',
  fetchMeetupById,
  components: {
    UiAlert,
    UiContainer,
    MeetupView,

  },
  props: {
    meetupId: {
      type:Number,
      required: true,
    },
  },

  data() {
    return {
      meetup: {type: Object,},
      isLoading:1,
      err:'Test Error',
    };
  },

  methods: {
    GetMeetup() {
      fetchMeetupById(this.meetupId).then((meetup) => {
          this.isLoading=2;
           this.meetup = meetup;

      },
        (err) => {this.err=err.message;this.isLoading=3;this.meetup=null;}
       ) ;
    },
  },
  watch: {
    meetupId(){this.isLoading=1;this.GetMeetup();}
  },
  created() {
    this.GetMeetup();
  },



  template: `
    <div class="page-meetup">
    <!-- meetup view -->

     <ui-container v-if="isLoading===1">
       <ui-alert>Загрузка...</ui-alert>
     </ui-container>

    <meetup-view   v-if="isLoading===2" :meetup="meetup" />

    <ui-container v-if="isLoading===3">
        <ui-alert>{{ err }}</ui-alert>
     </ui-container>








    </div>`,
});
