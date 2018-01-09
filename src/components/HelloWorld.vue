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
  </div>
</template>

<script>
import vuedatetimepicker from './DatePicker.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg1: 'Enter DatePicker control',
      msg2: '2018-01-07 08:20',
      msg3: '2018-01-10 16:20'
    }
  },
  components: {
    'vue-datetimepicker': vuedatetimepicker
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
