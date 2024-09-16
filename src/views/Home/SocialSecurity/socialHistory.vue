<template>
        <el-card>
              <div class="socialhistory">
                <h3>所有数据</h3>
                <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择一个时间"
                :size="size"
              />
              </div>
         
        </el-card>


       



</template>
    
<script setup>
    import { Calendar, Search } from '@element-plus/icons-vue'
import { ref } from 'vue';

    const size = ref<'default' | 'large' | 'small'>('default')

const value1 = ref('')


const shortcuts = [
  {
    text: 'Today',
    value: new Date(),
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: 'A week ago',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]

const disabledDate = (time) => {
  return time.getTime() > Date.now()
}
</script>
    
<style scoped lang="scss">
    .socialhistory{
        display: flex;
        justify-content: space-between;
    }
</style>