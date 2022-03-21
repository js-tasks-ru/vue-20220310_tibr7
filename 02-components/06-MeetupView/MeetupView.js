import { defineComponent } from './vendor/vue.esm-browser.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';
import MeetupAgenda from "../05-MeetupAgenda/MeetupAgenda.js";
import MeetupAgendaItem from "../05-MeetupAgenda/MeetupAgendaItem.js";
import MeetupInfo from "../04-MeetupInfo/MeetupInfo.js";
import MeetupCover from "../03-MeetupCover/MeetupCover.js";
import MeetupDescription from "../02-MeetupDescription/MeetupDescription.js";

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupAgenda,
    MeetupAgendaItem,
    MeetupInfo,
    MeetupCover,
    MeetupDescription,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div  v-if="meetup">
      <!-- meetup cover-->
      <meetup-cover :title="meetup.title" :image="meetup.image"></meetup-cover>
      <ui-container>
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <!-- meetup description -->
            <meetup-description :description="meetup.description"></meetup-description>
            <h3>Программа</h3>
            <!-- meetup agenda -->
            <meetup-agenda :agenda="meetup.agenda"></meetup-agenda>
            <ui-alert v-if="!meetup.agenda">Программа пока пуста...</ui-alert>
          </div>
          <div class="meetup__aside">
            <!-- meetup info -->
            <meetup-info
              :organizer="meetup.organizer"
              :place="meetup.place"
              :date="meetup.date"
            ></meetup-info>
          </div>
        </div>
      </ui-container>
    </div>`,
});
