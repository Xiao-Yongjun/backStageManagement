<template>
        <el-card>
               <div class="top">
                <h1>社保报表</h1>
                <el-input
                        v-model="inputval"
                        style="width: 240px"
                        placeholder="输入姓名"
                        :prefix-icon="Search"
                        @input="searchinput"
                        />
               </div>
                <el-divider />
            <div class="toptitle">
                <ul class="titleleft">
                        <li><span></span>已入职</li>
                        <li>已离职</li>
                        <li>公司合计</li>
                        <li>一级部门</li>
                        <li>二级部门</li>
                </ul>
                        <el-button class="titleright" type="primary" size="large">导出</el-button>
            </div>
            <el-table :data="newtableData" border style="width: 200% " class="eltable">
                <el-table-column prop="id" label="序号" width="100" />
                <el-table-column prop="name" label="姓名"  width="150"/>
                <el-table-column prop="phone" label="手机号" width="150" />
                <el-table-column prop="idnumber" label="身份证号" width="150" />
                <el-table-column prop="inporttime" label="入职时间" width="150"  />
                <el-table-column prop="education" label="学历"  width="150"/>
                <el-table-column prop="back" label="开户行" width="150" />
                <el-table-column prop="workCity" label="工作城市" width="150" />
                <el-table-column prop="socialSecurityNumber" label="社保号" width="150" />
                <el-table-column prop="HousingProvidentFundAccount" label="公积金账号" width="150" />
                <el-table-column prop="department" label="部门" width="150"  />
             
                </el-table>
        </el-card>
</template>
    
<script setup>
import { ref ,onMounted} from 'vue';
   const tableData=ref([
        {
                id:4,
                name:'张三',
                phone:17311772297,
                idnumber:5134256985675978,
                inporttime:'2024-15-26',
                education:'本科',
                back:'中国人民银行',
                workCity:'会理',
                socialSecurityNumber:159875658,
                HousingProvidentFundAccount:12345678955,
                department:'设计部'
        },
        {
                id:4,
                name:'李四',
                phone:17311772297,
                idnumber:5134256985675978,
                inporttime:'2024-15-26',
                education:'本科',
                back:'中国人民银行',
                workCity:'会理',
                socialSecurityNumber:159875658,
                HousingProvidentFundAccount:12345678955,
                department:'设计部'
        },  {
                id:4,
                name:'张三',
                phone:17311772297,
                idnumber:5134256985675978,
                inporttime:'2024-15-26',
                education:'本科',
                back:'中国人民银行',
                workCity:'会理',
                socialSecurityNumber:159875658,
                HousingProvidentFundAccount:12345678955,
                department:'设计部'
        },
        {
                id:4,
                name:'王二狗',
                phone:17311772297,
                idnumber:5134256985675978,
                inporttime:'2024-15-26',
                education:'本科',
                back:'中国人民银行',
                workCity:'会理',
                socialSecurityNumber:159875658,
                HousingProvidentFundAccount:12345678955,
                department:'设计部'
        }
        ,  {
                id:4,
                name:'赵二炮',
                phone:17311772297,
                idnumber:5134256985675978,
                inporttime:'2024-15-26',
                education:'本科',
                back:'中国人民银行',
                workCity:'会理',
                socialSecurityNumber:159875658,
                HousingProvidentFundAccount:12345678955,
                department:'设计部'
        }
        ,  {
                id:4,
                name:'牛大胆',
                phone:17311772297,
                idnumber:5134256985675978,
                inporttime:'2024-15-26',
                education:'本科',
                back:'中国人民银行',
                workCity:'会理',
                socialSecurityNumber:159875658,
                HousingProvidentFundAccount:12345678955,
                department:'设计部'
        }
   ] )

   const newtableData=ref([])
   const inputval=ref('')
const searchinput=()=>{
       newtableData.value= tableData.value.filter((item)=>{
                return item.name.indexOf(inputval.value)!==-1;
        })
        return newtableData.value
        
}
   onMounted(()=>{
        newtableData.value=tableData.value
   })
</script>
    
<style lang="scss" scoped>
.top{
        display: inline-flex;
        justify-content: space-between;
        width: 100%;
}
    .toptitle{
        width: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        .titleleft{
                display: inline-flex;
                width: 600px;
             
                li{
                        width: 100px;
                        align-items: center;
                      
                      
                }
        }
       
    }
    .eltable{
        height: 400px;
    }
</style>