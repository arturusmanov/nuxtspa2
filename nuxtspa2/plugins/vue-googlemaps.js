import Vue from 'vue';
import 'vue-googlemaps/dist/vue-googlemaps.css';
import VueGoogleMaps from 'vue-googlemaps';

Vue.use(VueGoogleMaps, {
  load: {
    apiKey: 'AIzaSyCVi9VH40Wkpcv2nlTZ-g6O8jRb3ZgDHU4',
    // libraries: [],
  },
});
