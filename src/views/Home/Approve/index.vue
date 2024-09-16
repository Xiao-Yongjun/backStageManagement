<template>
        <el-card>
                <div class="toptitle">
                        <div class="item" v-for="it in 3" :key="it">
                                <h3>当前审批中</h3>
                                <h1>3</h1>
                        </div>
                </div>
        </el-card>

        <el-card style="margin-top: 10px;">
                <el-table :data="newtableData" border style="width: 200%;height: 400px;overflow: scroll; " class="eltable" >
                <el-table-column prop="SerialNumber" label="序号" width="100" sortable/>
                <el-table-column prop="Approvaltype" label="审批类型" />
                <el-table-column prop="applicant" label="申请人" />
                <el-table-column prop="Currentapprover" label="当前审批人"  />
                <el-table-column prop="Approvaltime" label="审批时间"  />
                <el-table-column prop="ApprovalStatus" label="审批状态" />
                <el-table-column label="操作"  align="center" >  
                        <template #default>  
                            <div>  
                                <el-button @click="$router.push({path:'/home/approvalDetails'})">查看</el-button>  
                            </div>  
                        </template>  
                    </el-table-column>
                </el-table>
                <div style="display: flex; justify-content: center; margin-top: 10px;">  
                    <el-pagination size="small" layout="prev, pager, next" :total="50" />  
                    </div>
        </el-card>
</template>
    
<script setup>
import { ref ,onMounted} from 'vue';
import { useRouter } from 'vue-router';
let $router=useRouter()
    const tableData=ref([
   {
        SerialNumber:1,
        Approvaltype:'请假',
        applicant:'蔡徐坤',
        Currentapprover:'苏珊',
        Approvaltime:'2022-3-4',
        ApprovalStatus:'通过',
        operate:'查看'
    },
    {
        SerialNumber:1,
        Approvaltype:'请假',
        applicant:'蔡徐坤',
        Currentapprover:'苏珊',
        Approvaltime:'2022-3-4',
        ApprovalStatus:'通过',
        operate:'查看'
    },
    {
        SerialNumber:1,
        Approvaltype:'请假',
        applicant:'蔡徐坤',
        Currentapprover:'苏珊',
        Approvaltime:'2022-3-4',
        ApprovalStatus:'通过',
        operate:'查看'
    },
    {
        SerialNumber:1,
        Approvaltype:'请假',
        applicant:'蔡徐坤',
        Currentapprover:'苏珊',
        Approvaltime:'2022-3-4',
        ApprovalStatus:'通过',
        operate:'查看'
    },
    {
        SerialNumber:1,
        Approvaltype:'请假',
        applicant:'蔡徐坤',
        Currentapprover:'苏珊',
        Approvaltime:'2022-3-4',
        ApprovalStatus:'通过',
        operate:'查看'
    },
    {
        SerialNumber:1,
        Approvaltype:'请假',
        applicant:'蔡徐坤',
        Currentapprover:'苏珊',
        Approvaltime:'2022-3-4',
        ApprovalStatus:'通过',
        operate:'查看'
    },
    ])
const newtableData=ref([])
onMounted(()=>{
    newtableData.value=tableData.value
})
</script>
    
<style scoped lang="scss">
    .toptitle{
        display: flex;
        .item{
                width: 150px;
                height: 60px;
              text-align: center;
        }
    }

    
</style>