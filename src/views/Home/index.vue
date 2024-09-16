<script setup>
import HomeLeft from '../../components/HomeLeft/index.vue'
import Top from '../../components/Top/index.vue'

</script>


<template>
  <div class="common-layout" >
     <el-container>
       <el-header class="no-padding">
         <Top/>
       </el-header>
       <el-container>
         <el-aside width="200px" style="height: 100vh;">
          
             <HomeLeft/>
         </el-aside>
         <el-main style="height: 100vh; overflow-y: scroll;">
             <router-view/>
         </el-main>
       </el-container>
     </el-container>
   </div>
 </template>
 
 

<style scoped lang="scss">
.no-padding {  
  padding: 0 !important; /* 使用 !important 确保覆盖Element Plus的默认样式 */  
}  
</style>
