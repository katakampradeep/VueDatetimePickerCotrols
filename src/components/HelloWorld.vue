<template>
  <div class="hello">
    <form id="demo" style="width: 800px;">
      <div class="form-group">
        <input type="text" v-model="msg1" class="form-control" >
      </div>
      <div class="form-group">
        <vue-datetimepicker  name="starttime" :datetime="msg2" ></vue-datetimepicker>
      </div>
      <div class="form-group">
        <vue-datetimepicker  name="endtime" :datetime="msg3"  v-on:change="value => {msg3 = value}" ></vue-datetimepicker>
      </div>
    </form>
    <div id="demo" class="container">
        <video-player  class="vjs-custom-skin"
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"
                 customEventName="customstatechangedeventname"
                 :markers="markers"
                 @play="onPlayerPlay($event)"
                 @pause="onPlayerPause($event)"
                 @ended="onPlayerEnded($event)"
                 @waiting="onPlayerWaiting($event)"
                 @playing="onPlayerPlaying($event)"
                 @loadeddata="onPlayerLoadeddata($event)"
                 @timeupdate="onPlayerTimeupdate($event)"
                 @canplay="onPlayerCanplay($event)"
                 @canplaythrough="onPlayerCanplaythrough($event)"
                  
                 @statechanged="playerStateChanged($event)"
                 @ready="playerReadied">
        </video-player>
    </div>
  </div>
</template>

<script>
import vuedatetimepicker from './DatePicker.vue'
// require styles
import '../assets/custom-theme.css'
import videojs from 'video.js'
import { videoPlayer } from 'vue-video-player'
export default {
  name: 'HelloWorld',
  components: {
    'vue-datetimepicker': vuedatetimepicker,
    videoPlayer
  },
  data () {
    return {
      msg1: 'Enter DatePicker control',
      msg2: '2018-01-07 08:20',
      msg3: '2018-01-10 16:20',
      playerOptions: {
        // videojs options
        width: '100%',
        height: '360',
        muted: false,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        markers: [
          {time: 0.5, text: 'this', overlayText: '1'},
          {time: 2.6, text: 'is', overlayText: '2'}
        ],
        sources: [{
          type: 'video/mp4',
          src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4'
        }],
        poster: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg'
      },
      markers: [
          {time: 0.5, text: 'this', overlayText: '1'},
          {time: 2.6, text: 'is', overlayText: '2'}
      ]
    }
  },
  mounted () {
    console.log('this is current player instance object', this.player)
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    // listen event
    onPlayerPlay (player) {
      // console.log('player play!', player)
    },
    onPlayerPause (player) {
      // console.log('player pause!', player)
    },
    onPlayerEnded (player) {
      // console.log('player ended!', player)
    },
    onPlayerLoadeddata (player) {
      // console.log('player Loadeddata!', player)
    },
    onPlayerWaiting (player) {
      // console.log('player Waiting!', player)
    },
    onPlayerPlaying (player) {
      // console.log('player Playing!', player)
    },
    onPlayerTimeupdate (player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay (player) {
      // console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough (player) {
        // console.log('player Canplaythrough!', player)
    },
    // or listen state event
    playerStateChanged (playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied (player) {
      // seek to 10s
      console.log('example player 1 readied', player)
      player.currentTime(10)
      // console.log('example 01: the player is readied', player)
    }
  },
  created () {
    var player = videojs('demo')
    var $
    player.markers({
      breakOverlay: {
        display: true
      },
      onMarkerClick (marker) {
        $('.dynamic-demo-events').append('<li class="list-group-item">Marker click: ' + marker.time + '</li>')
      },
      onMarkerReached (marker) {
        $('.dynamic-demo-events').append('<li class="list-group-item">Marker reached: ' + marker.time + '</li>')
      },
      markers: [
        {time: 1.5, text: 'this', overlayText: '1'},
        {time: 2.6, text: 'is', overlayText: '2'}
      ]
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/markers/videojs-markers.css'

  .form-control {
      display: block;
      width: 100%;
  	  height: 33px;
      padding: 0px 0px 1px 0px;
      font-size: 14px;
      line-height: 1.42857143;
      color: #555;
      background-color: #fff;
      background-image: none;
      border-bottom: 1px solid #bbb;
      border-radius: 0px;
      box-shadow: none;
      transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  }
  .form-group {
      margin-bottom: 17px;
      text-align: left;
  }
  .form-control:focus {
      border-color:#274e93;
      outline: 0;
      -webkit-box-shadow: none;
      box-shadow:none;
  }
  .vjs-marker {
  position: absolute;
  left: 0;
  bottom: 0em;
  opacity: 1;
  height: 100%;
  transition: opacity .2s ease;
  -webkit-transition: opacity .2s ease;
  -moz-transition: opacity .2s ease;
  z-index: 100;
}
.vjs-marker:hover {
  cursor: pointer;
  -webkit-transform: scale(1.3, 1.3);
  -moz-transform: scale(1.3, 1.3);
  -o-transform: scale(1.3, 1.3);
  -ms-transform: scale(1.3, 1.3);
  transform: scale(1.3, 1.3);
}
.vjs-tip {
  visibility: hidden;
  display: block;
  opacity: 0.8;
  padding: 5px;
  font-size: 10px;
  position: absolute;
  bottom: 14px;
  z-index: 100000;
}
.vjs-tip .vjs-tip-arrow {
  background: url(data:image/gif;base64,R0lGODlhCQAJAIABAAAAAAAAACH5BAEAAAEALAAAAAAJAAkAAAIRjAOnwIrcDJxvwkplPtchVQAAOw==) no-repeat top left;
  bottom: 0;
  left: 50%;
  margin-left: -4px;
  background-position: bottom left;
  position: absolute;
  width: 9px;
  height: 5px;
}
.vjs-tip .vjs-tip-inner {
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  padding: 5px 8px 4px 8px;
  background-color: black;
  color: white;
  max-width: 200px;
  text-align: center;
}
.vjs-break-overlay {
  visibility: hidden;
  position: absolute;
  z-index: 100000;
  top: 0;
}
.vjs-break-overlay .vjs-break-overlay-text {
  padding: 9px;
  text-align: center;
}
</style>
