const jokeContent=document.querySelector('.joke')
const btn=document.querySelector('.btn')
btn.addEventListener('click',()=>{
    generateJoke()
})

generateJoke()
//using async and await it enables asynchronous 
 async function generateJoke(){
    const config={
        
            headers:{
                Accept:'application/json'
            }
        
    }
   const res=await fetch("https://icanhazdadjoke.com/",config)
   const data=await res.json()
   jokeContent.innerHTML=data.joke
}



//using .then()
// function generateJoke(){
//     const config={
        
//             headers:{
//                 Accept:'application/json'
//             }
        
//     }
//     fetch("https://icanhazdadjoke.com/",config).then(res => res.json()).then(data =>{jokeContent.innerHTML=data.joke})
// }
