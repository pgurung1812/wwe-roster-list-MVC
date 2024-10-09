const delBtnArr=document.querySelectorAll("li i")

const spanbtn=document.querySelectorAll("li span")

const unsuspendbtn=document.querySelectorAll(".strike")

unsuspendbtn.forEach((btn)=>{
 btn.addEventListener("click",unSuspend)
})



async function unSuspend(){
    const superstarId = this.parentNode.dataset.id
    try{
        const response = await fetch('roster/unSuspendRoster', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'superstarIdFromJSFile': superstarId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

spanbtn.forEach((btn)=>{
 btn.addEventListener("click",markSuspend)
})

delBtnArr.forEach((btn)=>{
 btn.addEventListener("click",deleteSuperstar)
})


async function markSuspend(){
   
    const superstarId = this.parentNode.dataset.id
    try{
        const response = await fetch('roster/updateRoster', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'superstarIdFromJSFile': superstarId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}



async function deleteSuperstar(){


    const superstarId = this.parentNode.dataset.id
    try{
        const response = await fetch('roster/deleteRoster', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'superstarIdFromJSFile': superstarId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }

}