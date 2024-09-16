<template>  
        <div class="login">  
          <div class="leftLogin">  
            <img src="../../assets/loginbg.jpg" alt="">  
          </div>  
          <div class="rightLogin">  
            <el-card style="width: 80%; height: 600px; border-radius: 10px;">  
               
              <div v-if="change === 0">  
                <div class="passwordLogin" style=" height: 400px;">  
                  <h1>账号登录</h1>  
                  <el-form
                ref="ruleFormRef"
                :model="ruleForm"
                status-icon
                :rules="rules"
                label-width="auto"
               
              >
                    <el-form-item label="账号" prop="name">  
                      <el-input v-model="ruleForm.name" placeholder="输入你的中文姓名"></el-input>  
                    </el-form-item>  
                    <el-form-item label="密码" prop="password">  
                      <el-input v-model="ruleForm.password" placeholder="输入密码" type="password"></el-input>  
                    </el-form-item>  
                    <el-form-item>
                      <el-button @click="submitForm" style="width: 100%;" type="info" round>提交</el-button>
                    </el-form-item>
                  </el-form>  
                  <img src="../../assets/loginbackground.png" alt="" style="width: 100%; height: 260px;" >
                </div>  
              </div>  
              <div v-if="change === 1">  
                <div class="QRcodelogin" style="height: 400px;">  
                  <h1>二维码登录</h1>  
                  <img src="../../assets/erweima.jpg" alt="" style="width: 100%; height: 400px;">  
                </div>  
              </div> 
              <div class="LoginMethod">  
                <el-button @click="changeLoginMethod(0)">账号登录</el-button>  
                <el-button @click="changeLoginMethod(1)">二维码登录</el-button>  
              </div>  
            </el-card>  
          </div>  
        </div>  
      </template>  
        
        <script setup>
        import { reactive, ref } from 'vue'
        import { ElMessage } from 'element-plus' // 引入消息提示，用于展示验证错误信息
      import { useRouter } from 'vue-router';
      import useloginstore from '../../store/index'
      let userstore=useloginstore()

      const $router=useRouter()
        
        // 表单数据
        const ruleFormRef = ref(null) // 使用 ref 创建对表单的引用
        const ruleForm = reactive({
          name: '肖永军',
          password: '@123456789Aa'
        })
        
        let change = ref(0)

        //校验姓名
        const validname=(rule,value,callback)=>{
          const reg=/^[\u4e00-\u9fa5\s]{1,5}$/
          if(reg.test(value)){
            callback()
          }else{
           callback( new Error('名字的格式错误'))
          }
        }
        //校验密码
        const validpassword=(rule,value,callback)=>{

          const reg=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/
          if(reg.test(value)){
            callback()
          }else{
            callback(new Error('密码必须为八位数并且包含特殊字符'))
          }
        }
        // 校验规则
        const rules =reactive({
          name: [
            { trigger: 'change',validator: validname,required:true},
           
          ],
          password: [
           
            { required:true,trigger: 'blur',validator:validpassword, }
          ]
        })
        
        // 切换登录方式
        const changeLoginMethod = (method) => {
          change.value = method
        }
        
        // 提交表单
        const submitForm = () => {
  ruleFormRef.value.validate((valid) => {
    if (valid) {

      userstore.getlogin(ruleForm)
      $router.push({ path: '/home/homepage', query: { id: 55555 } })
    } else {
      console.log('Error submit!')
      return false
    }
  })
}
        </script>
        
   
<style scoped lang="scss">
    .login{
        width: 100%;
        display: flex;
        height: 100vh;
        .leftLogin{
                width: 60%;
                display: flex;
                justify-content: center;
                align-items: center;
                
                img{
                        width: 98%;
                        height: 98%;
                     
                        border-radius: 15px;
                }
                
        }
        .rightLogin{
                width: 40%;
                display: flex;
                justify-content: center;
                align-items: center;
                

                .LoginMethod{
                        width: 80%;
                        display: flex;
                        justify-content: space-around;
                }
        }
    }
</style>