<template>
  <div v-if="roomcategory_id === select_roomcategory_id | select_roomcategory_id === ''" style="">
    <div class="cell" v-bind:style="{ backgroundColor: bgColor }">
      <div class="room">
        <div class="room_id">{{name}}</div>
        <div class="status">{{clean_status}}</div>
      </div>

      <div class="task">
        <div @click="check_out_or_daily_task" class="task_text">{{task_text}}</div>
      </div>
    </div>

    <span class="divider"></span>
  </div>
</template>

<script>
import { go } from '../../libs/router'

export default {
  data () {
    return {
    }
  },

  props: {
    id: Number,
    name: String,
    roomcategory_id: Number,
    select_roomcategory_id: '',
    check_in_status: {
      type: String,
      default: ''
    },
    is_clean: Boolean,
    is_checked: Boolean,
    is_return_check_out_result: Boolean
  },

  methods: {
    check_out_or_daily_task () {
      if (this.task_text === '退房' && this.is_return_check_out_result === false) {
        console.info('跳转到退房详情')
        go('/room_waiters/check_out_details/' + this.id, this.$router)
      } else if (this.task_text === '退房' && this.is_return_check_out_result === true) {
        alert("您已经退房完毕,等待前台结算!")
      } else if (this.task_text === '每日检查') {
          if (confirm("确认每日检查完毕吗?")) {
            this.daily_check ()
          }
      } else if (this.task_text === '每日打扫') {
        console.info('跳转到每日打扫')
        go('/room_waiters/daily_clean/' + this.id, this.$router)
      } else if (this.task_text === '待入住') {
        alert("等待客户入住!")
      }
    },

    daily_clean () {
      this.$http.post(this.$configs.api + 'rooms/daily_clean',
      {
        room_id: this.id,
      }).then((response) => {
        console.info("====打扫成功===")
        console.info(response.body)
        this.$emit('clean-success')
      }, (error) => {
        console.error(error)
      });
    },

    daily_check () {
      this.$http.post(this.$configs.api + 'rooms/daily_check',
      {
        room_id: this.id,
      }).then((response) => {
        console.info("====检查成功===")
        console.info(response.body)
        this.$emit('check-success')
      }, (error) => {
        console.error(error)
      });
    },

  },

  computed: {
    clean_status () {
      if (this.is_clean) {
        return '已打扫'
      } else {
        return '未打扫'
      }
    },
    task_text () {
      if (this.check_in_status === 'wei_ru_zhu') {
        if (this.is_clean === false) {
          return '每日打扫'
        } else if (this.is_clean === true && this.is_checked === false) {
          return '每日检查'
        } else if (this.is_clean === true && this.is_checked === true) {
          return '待入住'
        }
      } else if (this.check_in_status === 'yi_ru_zhu') {
        return '退房'
      }
    },
    bgColor () {
      if (this.check_in_status === 'wei_ru_zhu') {
        if (this.is_clean === false && this.is_checked === false) {
          return '#5F97FF'
        } else if (this.is_clean === true && this.is_checked === false) {
          return '#2FA4B5'
        } else if (this.is_clean === true && this.is_checked === true) {
          return '#42b983'
        }
      } else if (this.check_in_status === 'yi_ru_zhu') {
        return '#FF8A66'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/px2rem.scss";
@import "../../styles/variable.scss";

.cell {
  @include px2rem(width, 349px);
  @include px2rem(height, 123px);
  background-color: #FF8A66;
  margin: 0 auto;
  border-radius: 5px;
  display: block;
  position: relative;
}

.room {
  @include px2rem(width, 93px);
  @include px2rem(height, 93px);
  border-radius: 100px;
  background-color: white;
  position: relative;
  @include px2rem(top, 16px);
  @include px2rem(left, 30px);
}

.task {
  @include px2rem(width, 103px);
  @include px2rem(height, 34px);
  float: right;
  background-color: white;
  position: relative;
  @include px2rem(bottom, 28px);
  @include px2rem(right, 13px);
  border-radius: 3px;
}

.task_text {
  font-size: 16px;
  color: #4AA3FF;
  font-weight: bold;
  @include px2rem(line-height, 36px);
  vertical-align: middle;
}

.room_id {
  position: relative;
  @include px2rem(top, 24px);
  font-size: 17px;
  color: #4AA3FF;
  font-weight: bold;
}

.status{
  position: relative;
  @include px2rem(top, 24px);
  font-size: 14px;
  color: #4AA3FF;
}
</style>


