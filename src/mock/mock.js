import Mock from "mockjs"
 var arr=Mock.mock({
    "list|40":[
        {
            "name":'@ctitle',
            "id|+1":1
        }
    ]
})
Mock.mock("/list","post",function(opations){
        
       let {page,pagesize}=JSON.parse(opations.body)
       console.log(page,pagesize,arr.list)
       let newarr=arr.list.slice((page-1)*pagesize,page*pagesize)
      
       return {
        "status":200,
        "page":page,
        "pageSize":pagesize,
        "total": arr.length,
        "list":newarr
       }
})