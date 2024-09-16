<template>

   <router-view></router-view>

    <div class="socialsecurity">
      <el-card style="width: 100%;">
      <div class="top">
        <div class="topleft">
          <el-button @click="$router.push({path:'/home/socialhistory',params: { username:555 } })">
        <span >历史</span>
         
        </el-button>
        <el-button @click="$router.push({path:'/home/report',query: { username:555 } })">
         <span >2024报表</span>
        </el-button>
        </div>
        <div class="topright">
          <el-input
            v-model="key"
            style="width: 240px"
            placeholder="输入姓名搜索"
            :prefix-icon="Search"
            @input="searchInput"
          />
        </div>
      </div>
      </el-card>
      <el-card style="margin-top: 10px;">
        
        <div class="department">
          <span class="deparmenttext">部门：</span>
          <div class="department-right">
            <el-checkbox-group v-model="checkList" class="item">
            <el-checkbox :label="item.depart" :value="item.depart"  v-for="(item,index) in deparment" :key="index" @change="selectedDepartment" />  
          </el-checkbox-group> 
          </div>
        </div>

        <div class="city">
          <div class="citytext">城市</div>
          <div class="city-right">
        
            <el-checkbox-group v-model="checkList" class="item">
            <el-checkbox :label="item.cityname" :value="item.cityname"  v-for="(item,index) in cityarr" :key="index" @change="selectedCity" />  
            </el-checkbox-group>
         
          </div>
        </div>
      </el-card>
      <el-card style="width: 100%; margin-top: 10px;">
        <div class="title">
          <ul>
            <li>编号</li>
            <li>姓名</li>
            <li>手机</li>
            <li>工号</li>
            <li>部门</li>
            <li>入职时间</li>
            <li>离职时间</li>
            <li>社保城市</li>
            <li>公积金城市</li>
            <li>社保基数</li>
            <li>公积金基数</li>
          </ul>
          
        </div>
        <div class="content">
         <ul v-for="(item ,index) in newlist" :key="index">
          <li>{{ item.id}}</li>
          <li>{{ item.name}}</li>
          <li>{{ item.phone}}</li>
          <li>{{ item.jobNumber}}</li>
          <li>{{ item.deparment}}</li>
          <li>{{ item.entryTime}}</li>
          <li>{{ item.Resignationtime}}</li>
          <li>{{ item.SocialSecurityCity}}</li>
          <li>{{ item.HousingProvidentFundCity}}</li>
          <li>{{ item.Socialsecuritybase}}</li>
          <li>{{ item.HousingProvidentFundBase}}</li>
         </ul>
        </div>
      </el-card>
      <div class="demo-pagination-block">
    <div class="demonstration">All combined</div>
    <el-pagination
  v-model:current-page="currentPage4"
  v-model:page-size="pageSize4"
  :page-sizes="[8, 16, 24, 32]"
  :size="size"
  :disabled="disabled"
  :background="background"
  layout="total, sizes, prev, pager, next, jumper"
  :total="newlist.length"
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
/>

  </div>
    </div>


  
  </template>
  
  <script setup>

import { ref,computed,onMounted } from 'vue'
  import { useRouter,useRoute } from "vue-router";
  let $router=useRouter();
let $route=useRoute()


/*   分页器 */
const currentPage4 = ref(1)
const pageSize4 = ref(6)
const size = ref('default')
const background = ref(false)
const disabled = ref(false)
const handleCurrentChange = (val) => {
  console.log(val);
  const startIndex = (val - 1) * pageSize4.value;
  const endIndex = startIndex + pageSize4.value;
 
  newlist.value =itemarr.value.slice(startIndex, endIndex); 
 
};
  const newlist = ref([])
 
  const key=ref('')
  const searchInput=()=>{
    newlist.value=itemarr.value.filter((item)=>{
      
      
      return item.name.indexOf(key.value)!== -1;
    })
  }


  const checkList = ref([])
 

const selectedDepartment = () => {
  
  if(checkList.value.length!=0){
    let filteredList = []
  for (let i = 0; i < checkList.value.length; i++) {
    const tempList = itemarr.value.filter(item => item.deparment === checkList.value[i])
    filteredList.push(...tempList)
  }
  newlist.value = filteredList
  }
  else{
    newlist.value=itemarr.value
  }
}


const selectedCity = () => {

 if(checkList.value.length!=0){
  let choicelist = []
  for (let i = 0; i < checkList.value.length; i++) {
    choicelist = choicelist.concat(itemarr.value.filter(item => item.SocialSecurityCity === checkList.value[i]))
  }
  newlist.value = choicelist
}
else{
  newlist.value=itemarr.value
}
 }


onMounted(() => {
 newlist.value=itemarr.value

})
  

  const itemarr=ref([
    {
      id:1,
      name:'张三',
      phone:17311772297,
      jobNumber:'#ff6898',
      deparment:'行政部',
      entryTime:'2022-1-2',
      Resignationtime:'2024-5-6',
      SocialSecurityCity:'北京',
      HousingProvidentFundCity:'北京',
      Socialsecuritybase:'666',
      HousingProvidentFundBase:'666',
      

    },
    {
      id:2,
      name:'李四',
      phone:1681772297,
      jobNumber:'MO45',
      deparment:'销售部',
      entryTime:'2082-1-2',
      Resignationtime:'2094-5-6',
      SocialSecurityCity:'成都',
      HousingProvidentFundCity:'成都',
      Socialsecuritybase:'15',
      HousingProvidentFundBase:'657',
    },
    {
      id:3,
      name:'王五',
      phone:16987564256,
      jobNumber:'#HHGH65',
      deparment:'市场部',
      entryTime:'2082-1-2',
      Resignationtime:'2084-5-6',
      SocialSecurityCity:'重庆',
      HousingProvidentFundCity:'重庆',
      Socialsecuritybase:'986',
      HousingProvidentFundBase:'658',
      

    },
    {
      id:4,
      name:'朱八戒',
      phone:123456789,
      jobNumber:'#ff6898',
      deparment:'研发部',
      entryTime:'2022-1-9',
      Resignationtime:'2094-5-6',
      SocialSecurityCity:'广州',
      HousingProvidentFundCity:'广州',
      Socialsecuritybase:'89',
      HousingProvidentFundBase:'123',
    },
    {
      id:5,
      name:'张伟',
      phone:1698756459,
      jobNumber:'#H991',
      deparment:'人力资源部',
      entryTime:'2082-1-2',
      Resignationtime:'2084-5-6',
      SocialSecurityCity:'上海',
      HousingProvidentFundCity:'上海',
      Socialsecuritybase:'986',
      HousingProvidentFundBase:'58',
    },
    {
      id:6,
      name:'李娜',
      phone:16987896,
      jobNumber:'#HHGH65',
      deparment:'人力资源',
      entryTime:'2082-1-2',
      Resignationtime:'2084-5-6',
      SocialSecurityCity:'成都',
      HousingProvidentFundCity:'成都',
      Socialsecuritybase:'986',
      HousingProvidentFundBase:'658',
      

    },
    {
      id:7,
      name:'肖永军',
      phone:1887564256,
      jobNumber:'#HRGH65',
      deparment:'法务部',
      entryTime:'2082-1-2',
      Resignationtime:'2084-5-6',
      SocialSecurityCity:'重庆',
      HousingProvidentFundCity:'重庆',
      Socialsecuritybase:'986',
      HousingProvidentFundBase:'658',
      

    },
    {
      id:8,
      name:'孙悟空',
      phone:1887564256,
      jobNumber:'#HHGH65',
      deparment:'采购部',
      entryTime:'2082-1-2',
      Resignationtime:'2084-5-6',
      SocialSecurityCity:'攀枝花',
      HousingProvidentFundCity:'攀枝花',
      Socialsecuritybase:'986',
      HousingProvidentFundBase:'658',
      

    },
    {
      id:9,
      name:'刘飞',
      phone:1698759,
      jobNumber:'#HHGH65',
      deparment:'保卫部',
      entryTime:'2082-1-2',
      Resignationtime:'2084-5-6',
      SocialSecurityCity:'乐山',
      HousingProvidentFundCity:'乐山',
      Socialsecuritybase:'986',
      HousingProvidentFundBase:'656',
      

    },
  ])


  const deparment=ref([
    {
      depart:'行政部',
    },
    {
      depart:'人力资源部',
    },
    {
      depart:'销售部',
    },
    {
      depart:'市场部',
    },
    {
      depart:'研发部',
    },
    {
      depart:'生产部',
    },
    {
      depart:'法务部',
    },
    {
      depart:'总经理办公室',
    },
    {
      depart:'财务部',
    },
    {
      depart:'总经理办公室',
    },
     {
      depart:'企划部',
    },
    {
      depart:'产品部',
    },
    {
      depart:'监察部',
    },
    {
      depart:'采购部',
    },
    {
      depart:'总经理办公室',
    }, {
      depart:'保卫部',
    },
  ])

  const cityarr=ref([
    {
      cityname:'成都'
    },
    {
      cityname:'上海'
    },
    {
      cityname:'北京'
    },
    {
      cityname:'西昌'
    },
    {
      cityname:'乐山'
    },
    {
      cityname:'攀枝花'
    },
    {
      cityname:'重庆'
    },
    
    {
      cityname:'深圳'
    },
  ])

  
  </script>

<style lang="scss" scoped>
.top{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.department{
  display: inline-flex;
  .deparmenttext{
   width: 5%;
  }
  .department-right{
    width: 95%;
    
    display: flex;
     flex-wrap: wrap;
     align-items: center;
    
  }

}
.city{
  display: flex;
  .citytext{
    width: 5%;
  }
  .city-right{
    width: 95%;
    
    display: flex;
     flex-wrap: wrap;
     align-items: center;
   
  }
}
   
.title{

 width: 100%;
 height: 70px;
ul{
 background-color:rgb(240, 250, 250);

 height: 70px;
display: flex;
align-items: center;
width: 100%;
  li{
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    
  }

}

}


.content{
height: 300px;
overflow-y: scroll;
width: 100%;
ul{
  width: 100%;
 height: 40px;
display: flex;
align-items: center;
border-bottom: 1px solid #c8d4e0;
  li{
    width: 150px;
    height: 40px;
    text-align: center;
    line-height: 40px;
   
  }
}
}
</style>