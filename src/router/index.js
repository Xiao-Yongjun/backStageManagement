import { createWebHistory , createRouter } from 'vue-router'

import Login from '../views/Login/index.vue'

import Home from '../views/Home/index.vue'
import HomePage from '../views/Home/HomePage/index.vue'
import Approve from '../views/Home/Approve/index.vue'
import ApprovalDetails from '../views/Home/Approve/ApprovalDetails.vue'
import SocialSecurity from '../views/Home/SocialSecurity/index.vue'
import Wages from '../views/Home/wages/index.vue'
import report from '../views/Home/SocialSecurity/report.vue'
import socialHistory from '../views/Home/SocialSecurity/socialHistory.vue'
import emplotee from '../views/Home/employee/index.vue'
const router = createRouter({
    history: createWebHistory (),
    routes:[
        { path: '/login', component: Login },
        { 
            path: '/home', 
            component: Home,
            children:[
                {
                    path:'homepage',
                    component:HomePage,
                },
                {
                    path:'approve',
                    component:Approve,
                },
                {
                        path:'approvalDetails',
                        component:ApprovalDetails
                },
                {
                    path:'socialsecurity',
                    component:SocialSecurity,
                    
                },
                {
                    path:'emplotee',
                    component:emplotee

                },
                {
                    path:'socialhistory',
                    component:socialHistory,
                    
                },
                
                {
                    path:'report',
                    component:report
                },
                {
                    path:'wages',
                    component:Wages,
                }
            ]

        },
       
        {path:'/',redirect:'/login'}
       
    ]
    
})
export default router