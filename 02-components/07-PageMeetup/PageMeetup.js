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
      meetup: null,
      state: 'loading',
      err:'',
    };
  },

  methods: {
    GetMeetup() {
      this.state='loading';
      fetchMeetupById(this.meetupId).then((meetup) => {
          this.state='uploaded';
           this.meetup = meetup;

      },
        (err) => {this.err=err.message;this.state='error';this.meetup=null;}
       ) ;
    },
  },
  watch: {
    meetupId(){this.GetMeetup();}
  },
  created() {
    this.GetMeetup();
  },



  template: `
    <div class="page-meetup">
    <!-- meetup view -->

     <ui-container v-if="state==='loading'">
       <ui-alert>Загрузка...</ui-alert>
     </ui-container>

    <meetup-view   v-if="state==='uploaded'" :meetup="meetup" />

    <ui-container v-if="state==='error'">
        <ui-alert>{{ err }}</ui-alert>
     </ui-container>








    </div>`,
});
