
   <template>
<el-card>
  <el-button>工资报表</el-button>
  <el-button>工资报表</el-button>
<el-input placeholder="输入名字搜索" v-model="inputval" @input="searchname" style="margin-top: 10px;"></el-input>
</el-card>
<el-card style="margin-top: 10px;">
  <el-table :data="newtableData" style="width: 100%">
    <el-table-column prop="date" label="日期" width="180" />
    <el-table-column prop="name" label="姓名" width="180" />
    <el-table-column prop="address" label="住址" />
    <el-table-column prop="basicsalay" label="基础工资" />
    <el-table-column prop="accountsalary" label="工资" sortable />
  </el-table>
</el-card>

</template>

    
<script setup >

import {ref,onMounted} from 'vue'
const inputval=ref('')
const newtableData=ref([])
const searchname=()=>{
 newtableData.value=tableData.value.filter((item)=>{
  return item.name.indexOf(inputval.value)!==-1
})
  
}
onMounted(()=>{
  newtableData.value=tableData.value
})
const tableData=ref([
  {
    name:'张三',
    address:'成都东软学院',
    date:new Date(),
    department:'事业部',
    basicsalay:10000,
    accountsalary:255555
  },
  {
    name:'李四',
    address:'成都东软学院',
    date:new Date(),
    department:'事业部',
    basicsalay:10000,
    accountsalary:25955
  },
  {
    name:'王五',
    address:'成都东软学院',
    date:new Date(),
    department:'事业部',
    basicsalay:10000,
    accountsalary:22555
  },
  {
    name:'肖永军',
    address:'成都市某个社区',
    date:new Date(),
    department:'事业部',
    basicsalay:10000,
    accountsalary:95855
  },
])
</script>
    
<style>
    
</style>