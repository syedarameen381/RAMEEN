//Background Main
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",function(){
    let main = document.getElementsByClassName("main")[0];
    let text1 = document.getElementById("text1");
    main.style.backgroundColor = text1.value
})
//Text Align
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click",function(){
    let para = document.getElementsByTagName("p")[0];
    let text2 = document.getElementById("text2");
    para.style.textAlign = text2.value
})
//height text
let btn3 = document.getElementById("btn3");
btn3.addEventListener("click",function(){
    let textH = document.getElementsByClassName("text")[0];
    let text3 = document.getElementById("text3");
    textH.style.height = text3.value

})
//width text
let btn4 = document.getElementById("btn4");
btn4.addEventListener("click",function(){
    let textW = document.getElementsByClassName("text")[0];
    let text4 = document.getElementById("text4");
    textW.style.width = text4.value
})
// text color
let btn9 = document.getElementById("btn9");
btn9.addEventListener("click",function(){
    let colorT = document.getElementsByTagName("p")[0];
    let text9 = document.getElementById("text9");
    colorT.style.color = text9.value
})
//flex direction:column
let btn5 = document.getElementById("btn5");
btn5.addEventListener("click",function(){
    let flex = document.getElementsByClassName("boxes")[0];
    let text5 = document.getElementById("text5");
    flex.style.flexDirection = text5.value
})
// gap b/w boxes
let btn6 = document.getElementById("btn6");
btn6.addEventListener("click",function(){
    let gap = document.getElementsByClassName("boxes")[0];
    let text6 = document.getElementById("text6");
    gap.style.gap = text6.value
})
// align items (box)
let btn7 = document.getElementById("btn7");
btn7.addEventListener("click",function(){
    let boxai = document.getElementsByClassName("boxes")[0];
    let text7 = document.getElementById("text7");
    boxai.style.alignItems = text7.value;
})
// justify content (box)
let btn8 = document.getElementById("btn8");
btn8.addEventListener("click",function(){
    let boxjc = document.getElementsByClassName("boxes")[0];
    let text8 = document.getElementById("text8");
    boxjc.style.justifyContent = text8.value;
})







