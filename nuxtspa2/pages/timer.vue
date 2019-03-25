<template>


  <div id="timer">
    <div class="margTop container myContStyle ">
      <div class="loadCont">

        <div class="mt-3 mb-3">Вы находитесь на сайте: <div class="timerDiv">
          <span v-if="days > 0">{{ days }} дн.</span>
          <span v-if="hours > 0">{{ hours }} час.</span>
          <span v-if="minutes > 0">{{ minutes }} мин.</span>
          <span>{{ sec }} сек.</span>

        </div></div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {

    data(){
      return {
        timer: 0,
        seconds: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        sec: 0
      }
    },
    methods: {
      getSecondsForTimer(){
        setInterval(() => {
          this.seconds = ((new Date()).getTime()/1000).toFixed(0);
          // this.getTimeForTimer;
          console.log('getSecondsForTimer');
        }, 1000);

      },
      getTimeForTimer(){
        setInterval(() => {
          this.timer = this.seconds - (this.$cookie.get('timer')/1000).toFixed(0);
          this.minutes = Math.floor(this.timer / 60);
          this.hours = Math.floor(this.minutes / 60);
          this.minutes = this.minutes % 60;
          this.days = Math.floor(this.hours / 24);
          this.sec = this.timer % 60;
          console.log('getTimeForTimer');
        }, 1000);
      }
    },
    beforeMount(){
      console.log('beforeMount')
      this.getSecondsForTimer()
    },
    mounted(){
      console.log('mounted')
      this.getTimeForTimer()
    },
  }

</script>

<style scoped>

</style>
