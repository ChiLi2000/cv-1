let html = document.querySelector("#html");
let style = document.querySelector("#style");

let str = `
/*大家好，我是chili
*接下来我将展示我的前端功底
*我要加的样式是
**/
body{
    color:blue
} 
/*我准备画一个八卦图
*首先，我会准备一个盒子
**/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*把盒子变成一个圆*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
} 
/*将圆分为黑白两部分*/ 
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加上两球球*/
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
/*你以为就结束了嘛，看好了*/
#div1{
  animation: rotate 3s infinite linear reverse; 
}
@keyframes rotate{
  from{
    transform: translateX(-50%) rotate(0deg)
  }
  to{
    transform: translateX(-50%) rotate(360deg)
  }
}
`;
let n = 0;
// 存放显示的字符
let str1 = "";
let run = () => {
  setTimeout(() => {
    //   放在前面判断的原因是第一个字符是回车 不想被下面代码进行转化为换行
    if (n < str.length - 1) {
      run();
      n++;
    } else {
    }
    // html会将回车、多空格认定为一个空格，因此需要识别转换
    // 如果不是回车、空格就照搬
    // 如果是就替换
    if (str[n] === "\n") {
      str1 += "<br>";
    } else if (str[n] === " ") {
      str1 += "&nbsp";
    } else {
      str1 += str[n];
    }

    html.innerHTML = str1;
    // css则不需要转换
    style.innerHTML = str.substring(0, n);
    // 考虑到用户体验
    // pc、移动端设置滚动到文档底部。
    window.scrollTo(0, 9999);
    html.scrollTo(0, 9999);
  }, 50);
};
run();
