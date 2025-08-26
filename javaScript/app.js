



// let a = 12

// a = "shahabz"

// function abc(){
//     let b= 13
//     return b
   
// }

// //console.log(b)



// console.log(abc())



//&& ||



// var userName = prompt("Enter Your Name")

// var userAge = prompt("Enter Your Age")

// var userCnic = prompt("please tell your cnic?")

// if((userName == "Shahbaz") || (userAge>18 && userCnic == "yes")){
//     alert("Congratulation You can Drive")
// }
// else{
//     alert("Sorry you can not Drive")
// }

// var arr = ["Shahbaz","Hamza","Zubair","Moiz"]
// var isSeacrhUser = false



// for(var i=0; i<arr.length; i++){
//     // console.log(arr[i])

//     if(arr[i] == "anas"){
//        isSeacrhUser=true
//        break
//     }
   
// }

// if(isSeacrhUser){
//     console.log("found")
// }
// else{
//     console.log("notFound")
// }


// var name = "MoM"

// var reverseText = ""

// for(var i=name.length -1; i>=0; i--){
//     console.log(name[i])

//     reverseText +=name[i]
// }

// if(reverseText == name){
//     console.log("Yes Palindrome")
// }

// else{
//     console.log("Not Palindrome")
// }

// console.log("reverseText======>",reverseText)



// let getFood = new Promise((res,rej)=>{

//     let pakistanWorldCup = true

//     if(pakistanWorldCup){
//         res("WOw Good News")
//     }
//     else{
//         rej("Ohh team Change kro")
//     }
// })

// getFood
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))

const getuserData = async()=>{
    const user = document.getElementById("user").value
    const card = document.getElementById('cardContainer')
    console.log("user====>",user)

    try {
        
        const res = await fetch(`https://api.github.com/us`+ers/${user}`)
        const data = await res.json()
        console.log("data=====>",data)
        card.innerHTML = `
        <div class="card" style="width: 18rem;">
  <img src="${data.avatar_url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    <p class="card-text">${data.bio ? data.bio :"Bhai bio tw add krlo "}</p>
    <a href="${data.html_url}" target="_blank" class="btn btn-primary">Go Github Profile</a>
  </div>
</div>`
    } catch (error) {

        console.log(error)
        
    }

}



document.getElementById("getUserDat").addEventListener("click",getuserData)

// const getData = async()=>{

//     try {
        
//         const res = await fetch("https://api.github.com/users/Shahbaz-Sheikh")
//         const data = await res.json()
//         console.log("data=====>",data)
//     } catch (error) {

//         console.log(error)
        
//     }
// }

// getData()