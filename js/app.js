import { contacts } from "./dataArray";

const {createApp} = Vue;

createApp({
  data(){
    return {
      contacts
    }
  },
  mounted(){
    console.log("ciao");
  }

}).mount("#app");