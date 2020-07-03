import { View } from '@tarojs/components'
export default {
  name: 'Tag',
  methods: {
    handleClick(eventName) {
      console.log(eventName)
    }
  },
  render() {
    return (
      <View 
        onClick={this.handleClick.bind(this, 'onClick')} 
        onTap={this.handleClick.bind(this, 'onTap')}>
        hello
      </View>
    )
  }
}