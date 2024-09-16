import Mock from 'mockjs'


/* let arr=[]
for(let i=0;i<8;i++){
    arr.push(
        Mock.mock({
            张三:Math.random.float(0,100,0),
            张三:Math.random.float(0,100,0),
            张三:Math.random.float(0,100,0),
            张三:Math.random.float(0,100,0),
            张三:Math.random.float(0,100,0),
            张三:Math.random.float(0,100,0),
        })
    )
} */
export default {
    getlistdata: () => {
        return {
            code: 2000,
            data: {
                project_item: [
                    {
                        name: '组织总人数',
                        count: 16
                    },
                    {
                        name: '正式员工',
                        count: 1999
                    },
                    {
                        name: '待入职',
                        count: 99
                    },
                    {
                        name: '已经入职',
                        count: 89
                    },
                    {
                        name: '离职',
                        count: 16
                    },
                    {
                        name: '本月接待',
                        count: 198
                    },
                    {
                        name: '本月访客',
                        count: 16598
                    },
                ],
                QuickEntrance: [
                    {
                        name:'假期审批',
                        icon: 'https://gd-hbimg.huaban.com/e84d3564157646ebc19aed6b7ae20efcee978057151f4-Tksx7j'
                    },
                    {
                        name:'社保管理',
                        icon:'https://gd-hbimg.huaban.com/00f4d275629a35a14aa852d9ed1bea8fb75d85235e89e-f65ciC_fw658webp'
                    },
                    {
                        name:'角色管理',
                        icon:'https://gd-hbimg.huaban.com/abaf5d588b6999004a654d8561a74406eeb6ac6d85631-QnptMW'
                    },
                    {
                        name:'添加员工',
                        icon:'https://gd-hbimg.huaban.com/82356db851eaa71d8c150c93d42a20d97ae62a6a1659-cT5EgY'
                    },
                    {
                        name:'添加权限',
                        icon:'https://gd-hbimg.huaban.com/caac479651de50d7d27a2ad8ae0be943cfb323e1fbf-OZacl5'
                    }
                ],
                Social_security:{
                    name:'社保',
                    personcount:6666,
                    countitem:[
                        {name:'待申人',count:12},
                        {name:'申报中',count:45},
                        {name:'已申报',count:78}
                    ],
                    Social_security_data:{
                        title: {
                            text: 'ECharts 入门示例'
                        },
                        tooltip: {},
                        xAxis: {
                            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                        },
                        yAxis: {},
                        series: [
                            {
                                name: '销量',
                                type: 'bar',
                                data: [5, 20, 36, 10, 10, 20]
                            }
                        ]
                    }
                },
                housing_provident_fund:{
                    name:'公积金申报数据',
                    personcount:123,
                    countitem:[
                        {name:'待申人',count:5},
                        {name:'申报中',count:65},
                        {name:'已申报',count:78}
                    ]
                },

            }
        }
    }
}