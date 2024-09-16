<template>
    <div v-if="SocialSecurity">
    <el-card class="content" style="width: 98%; ">
         <div class="contentbox">
            <div class="left">
                <h1>{{ SocialSecurity.name }}</h1>
                <h3>申请人数</h3> 
                <h2>{{ SocialSecurity.personcount }}</h2>
                <el-card style="background-color: antiquewhite;">
                    <div  class="boxitem">
                    <div class="item" v-for="(item,index) in SocialSecurity.countitem" :key="index">
                        <h4>{{ item.name }}</h4>
                        <h3>{{ item.count }}</h3>
                    </div>
                </div>
                </el-card>
            </div>
            <div class="right">
                <div id="SocialSecurityEchart" style="width: 100%; height: 100%;"></div>
            </div>
         </div>
         </el-card>
    </div>
    <div v-if="housingProvidentFund">
    <el-card class="content" style="width: 98%; ">
      
         <div class="contentbox">
            <div class="left">
                <h1>{{ housingProvidentFund.name }}</h1>
                <h3>申请人数</h3> 
                <h2>{{ housingProvidentFund.personcount }}</h2>
                <el-card style="background-color: antiquewhite;">
                    <div  class="boxitem">
                    <div class="item" v-for="(item,index) in housingProvidentFund.countitem" :key="index">
                        <h4>{{ item.name }}</h4>
                        <h3>{{ item.count }}</h3>
                      
                    </div>
                   
                </div>
                </el-card>
            </div>
            <div class="right">
              <div id="housingProvidentFundechart" style="width: 100%; height: 100%;"></div>
            </div>
         </div>
         </el-card>
    </div>

  
</template>
<script setup>
import { defineProps, onMounted } from 'vue'
let props = defineProps(['SocialSecurity', 'housingProvidentFund'])
import { ref } from 'vue'

import * as echarts from 'echarts'
  

onMounted(()=>{

var SocialSecurityEchart = document.getElementById('SocialSecurityEchart');
var SocialSecurityEchart1 = echarts.init(SocialSecurityEchart);
var option1;
option1 = {
  title: {
    text: ''
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#ccc'
      }
    }
  },
  legend: {
    data: ['Email']
  },
  toolbox: {
    feature: {
     
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
       backgroundColor: '#ccc',
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
   
    
 
  
  ]
};
option1 && SocialSecurityEchart1.setOption(option1);







let housingProvidentFundechart=document.getElementById('housingProvidentFundechart')
var myChart2 = echarts.init(housingProvidentFundechart);
var option2;

option2 = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};

option2&& myChart2.setOption(option2);


}

)
   






</script>
<style lang="scss" scoped>
.content{
    margin-top: 5px;
    .contentbox{
    display: flex;
    justify-content: space-around;
    .left{
        width: 49%;
        height: 300px;
       
        .boxitem{
            display: flex;
            flex-wrap: wrap;
            width: 90%;
            .item{
                margin-top: 10px;
                width: 50%;
                height: 50px;
                h3{
                    color: aqua;
                }
            }
        }
        h2{
            color: aqua;
            margin-left: 5px;
        }
    }
    .right{
        width: 49%;
      
        height: 300px;
    }
}}
</style>
