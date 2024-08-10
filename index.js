// console.log("Hello World");
// setTimeout()
// alert("Hey Ram");
// for(let i = 0; i < 100; i++) {
//     console.log(i);
// }

// console.log("I Love JavaScript");

//callback

// function Sum(a, b, cb){
//     let ans = a+b;
//     cb(ans);
// }

// function DisplaySum(result){
//     const h1 = document.createElement("h1");
//     h1.innerHTML = `The Sum of number is:$(result)`;
//     document.body.append(h1);
// }

// Sum(8, 9, DisplaySum);

// callback

// function Sum(a,b,cb){
//     let ans=a+b;
//     cb(ans);
// }

// function DisplaySum(result){
//     const h1=document.createElement("h1");
//     h1.innerHTML=`The sum of number is:$(result)`;
//     document.body.append(h1);
// }

// Sum(8,9,DisplaySum);

// Promise

// const res=new Promise((resolve,rejected)=>{
//     let success=true;
//     if(success){
//         resolve("Data Fetched");
//     } else{
//         rejected("Server Error");
//     }
// });
// res.then((data)=>console.log(data)).catch((error)=>console.lof(error));

// CatFact
// const fetchedData=()=>{
//     fetch(https://catfact.ninja/fact)
//     .then((res)=>res.json())
//     .then((data)=>{
//      const h1=document.createElement("h1");
//      h1.innerHTML=data.fact;
//      document.body.append(h1);
//     })
//     .catch((error)=>console.log(error));
// };

// fetchedData();

// Async and Await
// const fetchedData=async()=>{
//     try{
//     const res=await fetch(https://catfact.ninja/fact);
//     const data=await res.json();
//     const h1=document.createElement("h1");
//     h1.innerHTML=data.fact;
//     document.body.append(h1);
// } catch (error){
//     console.log(error);
// }
// };

// fetchedData();

// console.log("Hello World!");

const temperatureField=document.querySelector(".weather1");
const cityField=document.querySelector(".weather2 p");
const dateField=document.querySelector(".weather2 span");
const emojiField=document.querySelector(".weather3 img");
const weatherField=document.querySelector(".weather3 span");
const form=document.querySelector("form");
const input=document.querySelector(".searchField");
let target="Kathmandu";
const fetchedData=async()=>{
    const res=await fetch(
        https://api.weatherapi.com/v1/current.json?key=75d949d65efa4e23a5e21917240908&q=${target}
    );
    const data=await res.json();

    console.log(data);
    const {
        current:{
            temp_c,
            condition:{text,icon}},
        location:{name,localtime},
    }=data;
    
    temperatureField.innerHTML=`${temp_c}&degC`;
    cityField.innerHTML=name;
    emojiField.src=icon;
    weatherField.innerHTML=text;

    const currentTime=localtime.split(" ")[1];
    const currentDate=localtime.split(" ")[0];

    dateField.innerHTML=`${currentTime} ${currentDate}`;
};

fetchedData();


console.log("Hello World");