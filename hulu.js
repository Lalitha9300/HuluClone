let x=document.getElementsByClassName("hulu_btn")
let y=document.getElementsByClassName("disney_btn")
let z=document.getElementsByClassName("plan_btn")


let xbtn=Array.from(x)
let ybtn=Array.from(y)
let zbtn=Array.from(z)
xbtn.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        ele.style.background="white"
        ele.style.color="black"
        y[0].style.background="none"
        z[0].style.background="none"
        y[0].style.color="white"
        z[0].style.color="white"
    })
})
ybtn.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        ele.style.background="white"
        ele.style.color="black"
        x[0].style.background="none"
        z[0].style.background="none"
        x[0].style.color="white"
        z[0].style.color="white"
    })
})
zbtn.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        ele.style.background="white"
        ele.style.color="black"
        x[0].style.background="none"
        y[0].style.background="none"
        x[0].style.color="white"
        y[0].style.color="white"
    })
})