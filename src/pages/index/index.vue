<template>
  <view 
    class="index" 
  >
    <view 
      @tap="handleClick('tap')" 
      @click="handleClick('click')"
    >
      <text>{{ msg }}</text>
    </view>
    <Tag />
  </view>
</template>

<script>
import Tag from '../../components/tag'
export default {
  components: {
    Tag
  },
    data () {
    return {
      msg: 'Hello world'
    }
  },
    methods: {
      handleClick(eventName) {
        console.log(eventName)
      }
    }
    }
</script>
