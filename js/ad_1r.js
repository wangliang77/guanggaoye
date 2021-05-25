/**
 * 189000324 汪亮
 */

//左侧广告
leftimg();
function leftimg(){
    //在ad_lr.js中编写代码实现对联广告，先定义几个广告参数，便于灵活使用，比如广告的宽、高、图片等。
    let ad_width = "100px";
    let ad_height = "250px";
    let ad_img = "img/ad1.jpg";
    let close_img = "img/close.png";
    let ad_left = document.createElement("div");
	
    //创建广告容器div
    ad_left.style.width = ad_width;
    ad_left.style.height = ad_height;
    ad_left.style.padding = "0px";
    ad_left.style.position = "absolute";
    ad_left.style.left = "30px";
    ad_left.style.top = "20px";
	
    //创建img元素，并加入到ad_left中，作为广告图片
    let adimg = document.createElement("img");
    adimg.src = ad_img;
    ad_left.appendChild(adimg);
	
    //创建关闭按钮，并加入到ad_left中
    let closeimg = document.createElement("img");
    closeimg.src = close_img;
    closeimg.style.width = "50px";
    closeimg.style.position = "relative";
    closeimg.style.left = "50px";
    closeimg.style.top = "-20px";
    closeimg.style.cursor = "pointer";
    ad_left.appendChild(closeimg);

    //将ad_left添加到html中
    document.documentElement.appendChild(ad_left);
	
    //注册事件，实现关闭广告功能
    closeimg.addEventListener("click",function(){
        this.style.display = "none";
        ad_left.style.display = "none";
    });
	
    //编写代码，实现对联广告随滚动条移动
    window.addEventListener("scroll",function(){
        let st1 = this.document.documentElement.scrollTop || this.document.body.scrollTop;
        ad_left.style.top = (st1 + 20) + "px";
    });
}

//右侧广告
rightimg();
function rightimg(){
    //在ad_lr.js中编写代码实现对联广告，先定义几个广告参数，便于灵活使用，比如广告的宽、高、图片等。
    let ad_width = "100px";
    let ad_height = "250px";
    let ad_img = "img/ad1.jpg";
    let close_img = "img/close.png";
    let ad_left = document.createElement("div");
    //创建广告容器div
    ad_left.style.width = ad_width;
    ad_left.style.height = ad_height;
    ad_left.style.padding = "0px";
    ad_left.style.position = "absolute";
    ad_left.style.right = "30px";
    ad_left.style.top = "20px";
    //创建img元素，并加入到ad_left中，作为广告图片
    let adimg = document.createElement("img");
    adimg.src = ad_img;
    ad_left.appendChild(adimg);
    //创建关闭按钮，并加入到ad_left中
    let closeimg = document.createElement("img");
    closeimg.src = close_img;
    closeimg.style.width = "50px";
    closeimg.style.position = "relative";
    closeimg.style.right = "-50px";
    closeimg.style.top = "-20px";
    closeimg.style.cursor = "pointer";
    ad_left.appendChild(closeimg);

    //将ad_left添加到html中
    document.documentElement.appendChild(ad_left);
    //注册事件，实现关闭广告功能
    closeimg.addEventListener("click",function(){
        this.style.display = "none";
        ad_left.style.display = "none";
    });
    //编写代码，实现对联广告随滚动条移动
    window.addEventListener("scroll",function(){
        let st1 = this.document.documentElement.scrollTop || this.document.body.scrollTop;
        ad_left.style.top = (st1 + 20) + "px";
    });
}

//右下角广告
leftButtomImg();
function leftButtomImg(){
    //在ad_lr.js中编写代码实现对联广告，先定义几个广告参数，便于灵活使用，比如广告的宽、高、图片等。
    let lb_width = "150px";
    let lb_height = "250px";
    let lb_img = "img/ad2.jpg";
    let close_img = "img/close.png";
    let ad_lb = document.createElement("div");
    let Wheight = window.innerHeight;
    let Wwidth = window.innerWidth;

    //创建广告容器div
    ad_lb.style.width = lb_width;
    ad_lb.style.height = lb_height;
    ad_lb.style.position = "absolute";
    ad_lb.style.left = Wwidth-320+"px";
    ad_lb.style.top = Wheight-250+"px";
    ad_lb.style.cursor = "pointer";
	
    //创建img元素，并加入到ad_left中，作为广告图片
    let adimg = document.createElement("img");
    adimg.src = lb_img;
    ad_lb.appendChild(adimg);
	
//创建关闭按钮，并加入到ad_lb中
    let closeimg = document.createElement("img");
    closeimg.src = close_img;
    closeimg.style.width = "50px";
    closeimg.style.position = "relative";
    closeimg.style.left = "250px";
    closeimg.style.top = "-256px";
    closeimg.style.cursor = "pointer";
    ad_lb.appendChild(closeimg);

     //将ad_lb添加到html中
     document.documentElement.appendChild(ad_lb);
	 
     //注册事件，实现关闭广告功能
     closeimg.addEventListener("click",function(){
         this.style.display = "none";
         ad_lb.style.display = "none";
     });
	 
     //编写代码，实现对联广告随滚动条移动
     window.addEventListener("scroll",function(){
         let st1 = this.document.documentElement.scrollTop || this.document.body.scrollTop;
         ad_lb.style.top = (st1 + Wheight-250) + "px";
     });
    console.log(Wheight);
    console.log(Wwidth);
}


