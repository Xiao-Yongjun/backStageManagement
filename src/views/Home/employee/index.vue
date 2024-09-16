<template>
         <el-row>
            <el-col :span="6" >
                <el-input
            v-model="inputval"
            @input="namesearch"
            style="width: 100%"
            placeholder="输入员工姓名全局搜索"
            :prefix-icon="Search"
            />
               <div class="grid-content ep-bg-purple" />
               <el-tree 
               :data="data" 
               :props="defaultProps"
               :highlight-current="true"
               :default-expand-all="true"
               @node-click="handleNodeClick"
                style="margin-top: 10px;border-right: 4px solid #666; "/>

                
            </el-col>
                

                
            
            <el-col :span="18">

                <div class="toptitle" >
                    <div class="toptitleleft" >
                        <el-button plain @click="sendmessage" style="margin-left: 10px;">
                               发送消息
                            </el-button>

                            <el-dialog
                                v-model="senddialogVisible"
                                title="编辑信息"
                                width="500"
                                
                            >
                              <template #header>
                               <h1>编辑信息</h1>
                               <div class="Personneborder">
                                <div v-for="item in PersonnelList" :key="item">
                                 <span>@{{ item.name}}</span>
                                </div>
                               </div>
                               <div class="Messagelevel">
                                <span>消息等级</span>
                                <el-select
                                    v-model="value"
                                    clearable
                                    placeholder="Select"
                                    style="width: 240px"
                                >
                                    <el-option
                                    v-for="item in messagelevelTitle"
                                    :key="item"
                                    :label="item"
                                    :value="item"
                                    />
                                </el-select>
                            </div> 
                               <div class="Notificationcontent">
                                <span>消息内容</span>
                                <el-input
                                    v-model="textarea"
                                    style="width:350px; "
                                    :rows="2"
                                    type="textarea"
                                    placeholder="输入发送的内容"
                                />
                               </div>
                              </template>
                                <template #footer>
                                <div class="dialog-footer">
                                    <el-button @click="senddialogVisible = false">取消</el-button>
                                    <el-button type="primary" @click="Confirmsending">
                                    确认
                                    </el-button>
                                </div>
                                </template>
                            </el-dialog>
                    </div>
                    <div class="toptitleright" >
                        <el-button plain @click="dialogVisible = true">
                                添加人员
                    </el-button>

                    <el-dialog
                        v-model="dialogVisible"
                        title="Tips"
                        width="500"
                        :before-close="handleClose"
                    >
                        <template #header>
                           <span>添加人员</span>
                           <el-form v-model="form" :rules="rules" >
                                <el-form-item label="姓名" >
                                    <el-input v-model="form.name"/>
                                    </el-form-item>
                                    <el-form-item label="地址">
                                    <el-input v-model="form.adress"/>
                                    </el-form-item>
                                    <el-form-item label="电话号码">
                                    <el-input  v-model="form.phone"/>
                                    </el-form-item>
                                    <el-form-item label="工号">
                                    <el-input  v-model="form.jobnumber"/>
                                    </el-form-item>
                                    <el-form-item label="聘用形式">
                                            <el-select v-model="form.Employmentform" placeholder="选择聘用形式">
                                                <el-option label="零时" value="零时" />
                                                <el-option label="正式" value="正式" />
                                            </el-select>
                                            </el-form-item>
                                    <el-form-item label="部门">
                                    <el-input v-model="form.deparment"/>
                                    </el-form-item>
                                   
                                    </el-form>
                              
                          
                        </template>
                        <template #footer>
                        <div class="dialog-footer">
                            <el-button @click="dialogVisible = false">取消</el-button>
                            <el-button type="primary" @click='dialogclose'>
                            确认
                            </el-button>
                        </div>
                        </template>
                    </el-dialog>
                        <el-button plain style="margin-left: 10px;">excel导入</el-button>
                        <el-button plain>excel导出</el-button>
                    </div>

                </div>
                <div style="width: 100%; margin-top: 10px; display: flex; justify-content: center;">
                <el-card style="width:98%">
                    <el-table :data="newtableData" @select="selectsb" @select-all="selectall">
                <el-table-column type="selection" width="55" />
                <el-table-column label="日期" width="120">
                <template #default="scope">{{ scope.row.entrytime }}</template>
                </el-table-column>
                <el-table-column label="姓名" width="120" property="name" ></el-table-column>
                <el-table-column property="adress" label="住址" width="120" />
               
                <el-table-column label="手机号" width="120" property="phone"></el-table-column>
                <el-table-column label="工号" width="120" property="jobnumber"></el-table-column>
                <el-table-column label="聘用形式" width="120" property="Employmentform"></el-table-column>
                <el-table-column label="部门" width="120" property="deparment"></el-table-column>
                <el-table-column label="入职时间" width="120" property="entrytime"></el-table-column>
                <el-table-column label="选择" width="300" >
                    <template #default ="scope">
                        <el-button @click="revisedata(scope.row)">修改</el-button>
                             <el-button @click="deletedata(scope.row)">删除</el-button>
                       <el-button @click="detail(scope.row)">详情</el-button>
                       
                    </template>
                </el-table-column>

            </el-table>


                </el-card>
            </div>
                <div class="grid-content ep-bg-purple-light" /></el-col>
                <!-- 详情dialog  --> 
                <el-dialog
                                    v-model="detailsDialogVisible"
                                    title="Tips"
                                    width="500"
                                    :before-close="handleClose"
                                >
                                   <template #header>
                                    <h1>{{ sbdetail.name }}信息</h1>
                                    <ul>
                                        <li>姓名：{{ sbdetail.name  }}</li>
                                        <li>地址：{{ sbdetail.adress  }}</li>
                                        <li>电话：{{ sbdetail.phone  }}</li>
                                        <li>聘用形式：{{ sbdetail.Employmentform  }}</li>
                                        <li>工号：{{ sbdetail.jobnumber  }}</li>
                                        <li>部门：{{ sbdetail.deparment  }}</li>
                                        <li>入职事件：{{ sbdetail.entrytime  }}</li>
                                    </ul>
                                   </template>
                                    <template #footer>
                                    <div class="dialog-footer">
                                        
                                        <el-button type="primary" @click="detailsDialogVisible = false">
                                        关闭
                                        </el-button>
                                    </div>
                                    </template>
                                </el-dialog>
        </el-row>
</template>
    
<script setup>
import { ref,onMounted } from 'vue';
import { Search,Delete} from '@element-plus/icons-vue'
import { ElMessageBox,ElMessage} from 'element-plus'

//详情
let detailsDialogVisible=ref(false)//详情dialogkaiguan 
let sbdetail=ref()
const detail=(select)=>{
    sbdetail.value=select
    
    detailsDialogVisible.value=true
}
//确认发送消息
let senddialogVisible=ref(false)
const Confirmsending=()=>{
    if(textarea.value){
        senddialogVisible.value=false
    ElMessage({
    message: '恭喜你，发送成功',
    type: 'success',
  })
    }
    else{
        ElMessage({
    message: '发送内容不能为空',
    type: 'warning',
    })
}
   
}



let PersonnelList=ref([])//存储选中人员的列表
let textarea=ref('')//输入的内容
//消息等级
let messagelevelTitle=['重要','普通','紧急']
let value=ref('重要')
//选中某一个人员
const selectsb = (selection) => {
  
    PersonnelList.value=[]
    for (let row of selection) {
        // Push the name to the PersonnelList if it exists
        if (row.name) {
            PersonnelList.value.push(row);
            
        }else{
            
        }
    }
}
//选中所有的人员
const selectall=(select)=>{
    PersonnelList.value=[]
    for(let row of select){
        PersonnelList.value.push(row)
    }
    
}
//打开发送消息的盒子
const sendmessage=()=>{

    if(PersonnelList.value.length){
        senddialogVisible.value=true
    }
    else{
        ElMessageBox.alert('请先选择人员', '提示', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: '确认',
    
  })
    }
   
}


//添加人员

const dialogVisible = ref(false)
const form=ref({
        id:'',
        pid:new Date()+1,
        name:'',
        adress:'',
        phone:'',
        jobnumber:'',
        Employmentform:'',
        deparment:'',
        entrytime:formatDate(new Date()),

})

//表单校验
const handleClose=(done) => {
  ElMessageBox.confirm('你确定要关闭这个弹窗吗？')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}




//删除人员
const deletedata=(row)=>{
    ElMessageBox.confirm('你要删除这组数据吗？',
    'Warning',
    {
      type: 'warning',
    
    }
    ).then(()=>{
        const index = tableData.value.findIndex(item => item.id === row.id);
        if(index!==-1){
            tableData.value.splice(index,1)
        }
   
        ElMessage({
        type: 'success',
        message: '删除成功',
        icon: markRaw(Delete),
      })
    }).catch(()=>{
        ElMessage({
        type: 'info',
        message: '删除成功',
      })
    })
    
}

//关闭并且提交
const revisedata = (row) => {
  if (!row) {
    console.error('Invalid row parameter:', row);
    return;
  }

  // Set the form values to the row data
  form.value = Object.assign({}, row);

  // Open the dialog for editing
  dialogVisible.value = true;
};

// 更新数据
const updateRow = () => {
  // Find the index of the row that needs to be updated
  const index = tableData.value.findIndex((item) => item.id === form.value.id);

  if (index !== -1) {
    // Update the existing row with the new form values
    tableData.value[index] = Object.assign({}, form.value);
    form.value={
        id:'',
        pid:new Date()+1,
        name:'',
        adress:'',
        phone:'',
        jobnumber:'',
        Employmentform:'',
        deparment:'',
        entrytime:formatDate(new Date()),       
        }
  }

  // Close the dialog
  dialogVisible.value = false;
};



function generateUniqueId(existingIds) {
  let id = '';
  do {
    id = '_' + Math.random().toString(36).substr(2, 9);
  } while (existingIds.includes(id));
  return id;
}
//添加人员
const dialogclose = () => {
  // Check if this is a new record or an update
  if (!form.value.id) { // Check if the ID is empty or undefined
    // Add a new record
    // Generate a unique ID for the new record
    form.value.id = generateUniqueId(tableData.value.map(item => item.id));

    tableData.value.unshift(form.value);
    form.value={
        id:'',
        pid:new Date()+1,
        name:'',
        adress:'',
        phone:'',
        jobnumber:'',
        Employmentform:'',
        deparment:'',
        entrytime:formatDate(new Date()),       
        }
  } else {
    // Update an existing record
    updateRow();
  }

  dialogVisible.value = false;
};


//树状图的数据
    const data = [  
        
    {  
        label: '肖永军公司',  
        children: [  
           {
            label:'行政部',
            children:[
                {
                    label:'人事管理',
                    
                },
                {
                    label:'办公室管理'
                },
                {
                    label:'行政管理'
                }
            ]
           },
           {
            label:'财务部',
            children:[
                {
                   
                    label:'会计核算',
                },
                {
                   
                   label:'财务管理',
               },
               {
                   
                   label:'税务策划',
               }
            ]
           },
           {
            label:'人力资源部',
            children:[
                {
                    label:'招聘配置',
                    
                },
                {
                    label:'培训发展',
                    
                }
            ]
           },
           {
            label:'IT部',
            children:[
                {
                   
                    label:'网络管理',
                }
            ]
           },
           {
            label:'销售部'
           },
           {
            label:'市场部'
           }

        ]  
    },  
   
];
    const defaultProps = {  
    children: 'children',  
    label: 'label'  
};

//输入搜索的值
const inputval=ref('')
//输入名字搜索的方法
const namesearch=()=>{
newtableData.value=tableData.value.filter((item)=>{
    return item.name.indexOf(inputval.value)!==-1
})


}


const handleNodeClick = (data, node, component) => {    
    // 初始化一个空数组来存储所有相关的部门名称  
    const relatedDepartments = [];  
  
    // 递归函数，用于收集所有相关的部门名称  
    const collectDepartments = (nodeData) => {  
        if (nodeData.children) {  
            nodeData.children.forEach(child => {  
                relatedDepartments.push(child.label);  
                collectDepartments(child);  
            });  
        } else {  
            relatedDepartments.push(nodeData.label);  
        }  
    };  
  
    // 从当前点击的节点开始收集  
    collectDepartments(data);  
  
    // 过滤出属于这些部门的员工信息  
    const filteredData = tableData.value.filter(item => relatedDepartments.includes(item.deparment));  
  
    // 更新显示的数据  
    newtableData.value = filteredData;  
};
const newtableData=ref([])
const tableData=ref([
    {   id:new Date(),
        pid:new Date()+1,
        name:'张三',
        adress:'会理市',
        phone:17311775598,
        jobnumber:'#123467',
        Employmentform:'正式工',
        deparment:'人事管理',
        entrytime:formatDate(new Date()),
    },
    {   id:new Date(),
        pid:new Date()+1,
        name:'李四',
        adress:'成都',
        phone:17311775598,
        jobnumber:'#123467',
        Employmentform:'正式工',
        deparment:'办公室管理',
        entrytime:formatDate(new Date()),
    },
    {   id:new Date(),
        pid:new Date()+1,
        name:'王五',
        adress:'西昌市',
        phone:17311775598,
        jobnumber:'#123467',
        Employmentform:'合同工',
        deparment:'行政管理',
        entrytime:formatDate(new Date()),
    },
    {   id:new Date(),
        pid:new Date()+1,
        name:'肖二狗',
        adress:'会东',
        phone:17311775598,
        jobnumber:'#123467',
        Employmentform:'合同工',
        deparment:'会计核算',
        entrytime:formatDate(new Date()),
    },
    {   id:new Date(),
        pid:new Date()+1,
        name:'刘大炮',
        adress:'会东',
        phone:17311775598,
        jobnumber:'#123467',
        Employmentform:'合同工',
        deparment:'招聘配置',
        entrytime:formatDate(new Date()),
    },
    {   id:new Date(),
        pid:new Date()+1,
        name:'孙悟空',
        adress:'会东',
        phone:17311775598,
        jobnumber:'#123467',
        Employmentform:'合同工',
        deparment:'培训发展',
        entrytime:formatDate(new Date()),
    },
    {   id:new Date(),
        pid:new Date()+1,
        name:'熊大',
        adress:'会东',
        phone:17311775598,
        jobnumber:'#123467',
        Employmentform:'合同工',
        deparment:'网络管理',
        entrytime:formatDate(new Date()),
    },
    {   id:new Date(),
        pid:new Date()+1,
        name:'罗成',
        adress:'会东',
        phone:17311775598,
        jobnumber:'#123467',
        Employmentform:'合同工',
        deparment:'税务策划',
        entrytime:formatDate(new Date()),
    },
    {   id:new Date(),
        pid:new Date()+1,
        name:'猪八戒',
        adress:'会东',
        phone:17311775598,
        jobnumber:'#123467',
        Employmentform:'合同工',
        deparment:'财务管理',
        entrytime:formatDate(new Date()),
    },
    {   id:new Date(),
        pid:new Date()+1,
        name:'孙儿狗',
        adress:'会东',
        phone:17311775598,
        jobnumber:'#123467',
        Employmentform:'合同工',
        deparment:'税务策划',
        entrytime:formatDate(new Date()),
    },
    {   id:new Date(),
        pid:new Date()+1,
        name:'周二孙',
        adress:'会东',
        phone:17311775598,
        jobnumber:'#123467',
        Employmentform:'合同工',
        deparment:'会计核算',
        entrytime:formatDate(new Date()),
    },
])

function formatDate(date) {
  var year = date.getFullYear();
  var month = addZero(date.getMonth() + 1);
  var day = addZero(date.getDate());
  return year + '-' + month + '-' + day;
}
 
function addZero(num) {
  return num < 10 ? '0' + num : num;
}
 

onMounted(()=>{
newtableData.value=tableData.value
})
</script>
    
<style scoped lang="scss">
    .toptitle{
        width: 100%;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
    }
    .Personneborder{
        width:96%;
        height:80px;
        border: 1px solid rgb(230, 213, 218);
        margin: 0 auto;
        border-radius: 10px;
        display: flex;
        flex-wrap: wrap;
        span{
            width: 60px;
            height: 30px;
            border: 1px solid rgb(190, 171, 174);
            text-align: center;
            font-size: 12px;
            border-radius:10px;
            line-height: 30px;
            margin: 3px;
            display:block;
            background-color: rgb(228, 232, 228);
        }
    }
    .Messagelevel{
        margin-top: 10px;
        height: 30px;
        align-items: center;
        span{
            margin-right: 10px;
        }
    }
    .Notificationcontent{
        width: 96%;
        margin-top: 10px;
        span{
            margin-right: 10px;
        }
       
       
      
    }
</style>