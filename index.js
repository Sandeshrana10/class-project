// console.log("Hello World");
// setTimeout()
// alert("Hey Ram");
// for(let i = 0; i < 100; i++) {
//     console.log(i);
// }

// console.log("I Love JavaScript");

//callback

function Sum(a, b, cb){
    let ans = a+b;
    cb(ans);
}

function DisplaySum(result){
    const h1 = document.createElement("h1");
    h1.innerHTML = `The Sum of number is:$(result)`;
    document.body.append(h1);
}

Sum(8, 9, DisplaySum);
