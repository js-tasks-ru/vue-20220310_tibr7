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
      load:true,
    };
  },

  methods: {
    GetMeetup() {
      fetchMeetupById(this.meetupId).then((meetup) => {
          this.load=false;
           this.meetup = meetup;

      },
       ()=>{
         this.load=false;
         this.meetup = null;
        });
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
    <ui-container v-if="load">
      <ui-alert>Загрузка...</ui-alert>
    </ui-container>

      <meetup-view   v-if="meetup" :meetup="meetup"></meetup-view>
      <ui-container v-else>
         <ui-alert>Not fond</ui-alert>
      </ui-container>



    </div>`,
});
