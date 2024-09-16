<template>

        <el-row>
                <el-col :span="12">
                        <el-card style="max-width: 98%">
                                <template #header>
                                <div class="card-header">
                                        <img src="../../../assets/ikun.png" alt="">
                                        <div class="right">
                                                <h1>成都东软学院</h1>
                                                <div class="right_bottom">
                                                        <span>管理员</span>
                                                        <span>超级学习者</span>
                                                </div>
                                        </div>
                                      
                                        
                                </div>
                                </template>
                                <div class="content">
                                                <div class="item" v-for="(item ,index) in projectitem" :key="index">
                                                        <span>{{ item.name }}</span>
                                                        <h1>{{ item.count }}</h1>
                                                </div>
                                        </div>
                        </el-card>
                        <el-card style="max-width: 98% ;margin-top: 5px">
                                <div class="inport">
                                        <h3>快捷入口</h3>
                                        <div class="bottom">
                                        <div class="item" v-for="(item,index) in QuickEntrance" :key="index">
                                                <img :src="item.icon" alt="">
                                                <span>{{item.name}}</span>
                                        </div>
                                </div>
                                </div>
                        </el-card>
                        <!-- 社保数据 -->
                        <countData :SocialSecurity="SocialSecurity" />
                        <!-- 公积金数据 -->
                        <countData :housingProvidentFund="housingProvidentFund"/>
                       
                </el-col>
                <el-col :span="12">
                        <div class="left_content">
                                <div class="right_content_left">
                                        <h1>帮助连接</h1>
                                        <el-card style="margin-top: 10px;" v-for="item in 3" :key="item">
                                                <div class="right_content_left_card" >
                                                        <img src="../../../assets/社保管理.svg" alt="">
                                                         <h2>友情链接</h2>
                                                </div>
                                                
                                        </el-card>
                                </div>
                                <div class="right_content_right">
                                        <el-calendar v-model="value" />                                      
                                </div>
                        </div>
                        <div class="bottomitem">
                                                <h1>通知公告</h1>
                                                <div class="items" style="display: flex;" v-for="item in 4" :key="item">
                                                        <img src="../../../assets/社保管理.svg" alt="" >
                                                        <div class="item">
                                                                <h6>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</h6>
                                                                <span>2022-13-14 15-16</span>
                                                        </div>
                                                </div>
                                        </div>
                   
                </el-col>
        </el-row>

</template>
    
<script setup >


import countData from '../../../components/CountData/index.vue'
    import {getdata} from '../../../api/home/index'
    import { onMounted ,ref} from 'vue';

    const value = ref(new Date())
    const projectitem = ref([])//组织数据

        let QuickEntrance=ref([])//快捷入口
        let SocialSecurity=ref({})//社保数据
        let housingProvidentFund=ref({})
       
    const getdatalist=async()=>{
        const res=await getdata()
       
                
                projectitem.value=res.data.data.project_item
              
                QuickEntrance.value=res.data.data.QuickEntrance
               
                SocialSecurity.value=res.data.data.Social_security//获取社保数据
              
              
              
               
                housingProvidentFund.value=res.data.data.housing_provident_fund//获取公积金数据
                
            
             
        
       
        
    }
    onMounted(()=>{
        getdatalist();
    }
       
    
    
    )
</script>
    
<style scoped lang="scss">
    .card-header{
        display: inline-flex;
        align-items: center;
        img{
                width: 60px;
                height: 60px;
        }
        .right{
               margin-left: 30px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                span{
                        margin-left: 10px;
                        font-size: 13px;
                }
        }
    }
    .content{
        width: 100%;
        display: flex;
        
       
        flex-wrap: wrap;
        flex: 1;
        .item{
                width: 80px;
                height: 60px;
                text-align: center;
                margin-top: 5px;
                margin-left: 60px;
        }
    }
.inport{
        display: flex;
       flex-direction: column;
        .bottom{
                display: flex;
                justify-content: space-around;
                .item{
                        img{
                        width: 40px;
                        height: 40px;
                }
                span{
                        width: 15px;
                        height: 15px;
                }
                }
        }
}
.left_content{
        display: flex;
        justify-content: space-around;
        .right_content_left{
                width: 50%;
                height: 340px;
                
                .right_content_left_card{
                        display:inline-flex;
                        width: 100%;
                        align-items: center;
                        img{
                                width: 25px;
                                height: 25px;
                        }
                        h2{
                                margin-left: 10px;
                        }
                }
                
                
        }
        .right_content_right{
                width: 50%;
                height: 340px;
                
                ::v-deep .el-calendar-day {
                height: 35px;
                }
                        
               
                
        }
        
}
.bottomitem{
                width: 100%;
                height: 600px;
                
                .items{
                        display:inline-flex;
                        align-items: center;
                        width: 100%;
                        margin-top: 10px;
                        height: 80px;
                        border-bottom: 1px dashed rgba($color: #453939, $alpha: 0.5);
                        .item{

                        }
                      img{
                        width: 30px;
                        height: 30px;
                        margin-right: 10px;
                      }

                }
        }

</style>


