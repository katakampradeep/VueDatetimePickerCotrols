<template>
    <div class='input-group date'>
        <input type='text' :value="datetime" class="form-control" />
        <span class="input-group-addon">
            <span class="glyphicon glyphicon-calendar"></span>
        </span>
    </div>
</template>

<script>
  import 'eonasdan-bootstrap-datetimepicker'
  var $ = window.jQuery = require('jquery')
  export default {
    name: 'vue-datetimepicker',
    data () {
      return {
        value: this.datetime
      }
    },
    watch: {
      options: function (options) {
        // update options
        $(this.$el).datetimepicker({ data: options })
      }
    },
    mounted: function () {
      var vm = this
      vm.value = this.date
      var mycomp = $(this.$el).datetimepicker({
        format: 'YYYY-MM-DD HH:mm',
        showClose: true
      })
      mycomp.on('dp.change', function (e) {
        vm.value = e.date.format('YYYY-MM-DD HH:mm')
        vm.$emit('change', vm.value)
      })
    },
    destroyed: function () {
      $(this.$el).off().datetimepicker('destroy')
    },
    props: ['datetime']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>