<template>
  <div class="content">
        <h3>后台管理项目</h3>
        <img src="../../assets/ikun.png" alt=""> 
        <div v-if="!name">
          <el-dropdown>
    <span class="el-dropdown-link">
    请先登录
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="gologin">登录</el-dropdown-item>
       
      </el-dropdown-menu>
    </template>
  </el-dropdown>
                       



        </div>
        <el-dropdown size="large" v-else>
    <span class="el-dropdown-link">
      {{ name }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="outlogin">退出登录</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
          
          </el-dropdown-menu>
        </template>
      </el-dropdown>
  </div>


</template>
    
<script setup >
import { ref,onMounted } from 'vue';
    import useloginstore from '../../store/index'
import { useRouter } from 'vue-router';
let $router=useRouter()
    let userinfo=useloginstore()
    let name=ref(userinfo.user.name)
   
  
    const outlogin=()=>{
      localStorage.removeItem('userinfo')
      name.value=null
    }
    

    //去登录
    const gologin=()=>{
      $router.push({path:'/login'})
    }
   
</script>
    
<style lang="scss" scoped>
   .content{
        margin: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #f6f6f6;
        width: 100%;
        height: 100%;
        img{
        width: 55px;
        height: 55px;
        border-radius: 50%;
        }
        h1, h3 {  
        margin: 0; /* 移除默认的margin */  
        color: #333; /* 设置字体颜色 */  
        font-size: 24px; /* 设置字体大小，根据您的需求调整 */  
        /* 其他您想要的样式 */  
    }

   }
</style>