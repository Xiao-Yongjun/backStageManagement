<template>
      <div>
     <el-col :span="24">
      
      <el-menu
        active-text-color="#ffd04b"
        background-color="#edede9"
        class="el-menu-vertical-demo"
        default-active="1"
        text-color="#9d9d9d"
        
      >
      <el-menu-item index="1"  @click="$router.push({path:'homepage'})">
        <el-icon><Grape /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="2" @click="$router.push({path:'socialsecurity'})">
            <el-icon><Bowl /></el-icon>
          <span>社保</span>
        </el-menu-item>
        <el-menu-item index="3" @click="$router.push({path:'wages'})" >
            <el-icon><Money /></el-icon>
          <span>工资</span>
        </el-menu-item>
        <el-menu-item index="4" @click="$router.push({path:'approve'})">
            <el-icon><Discount /></el-icon>
          <span>审批</span>
        </el-menu-item>
        <el-menu-item index="5" @click="$router.push({path:'emplotee'})">
            <el-icon><Discount /></el-icon>
          <span>员工</span>
        </el-menu-item>

       
      </el-menu>
    </el-col>
    </div>
</template>
    
<script setup>
   import { useRouter, useRoute } from "vue-router";
   let $router = useRouter();

</script>
    
<style lang="scss">
   .el-menu-vertical-demo{
    height: 100vh;
   }
</style>