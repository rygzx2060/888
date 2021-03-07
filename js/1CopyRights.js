window.onload = function(){
    //屏蔽键盘事件
    document.onkeydown = function (){
    var e = window.event || arguments[0];
    //F12
    if(e.keyCode == 123){
    return false;
    //Ctrl+Shift+I
    }else if((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)){
    return false;
    //Shift+F10
    }else if((e.shiftKey) && (e.keyCode == 121)){
    return false;
	//Shift+S
    }else if((e.ctrlKey) && (e.keyCode == 83)){
    return false;
    //Shift+P
    }else if((e.ctrlKey) && (e.keyCode == 80)){
    return false;
    //Shift+C
    }else if((e.ctrlKey) && (e.keyCode == 67)){
    return false;
    //Shift+X
    }else if((e.ctrlKey) && (e.keyCode == 88)){
    return false;
    //Ctrl+U
    }else if((e.ctrlKey) && (e.keyCode == 85)){
    return false;
    }
    };
    //屏蔽鼠标右键
    document.oncontextmenu = function (){
    return false;
    }
    };

//禁止鼠标拖动图片
function imgdragstart(){return false;}  
//禁止鼠标选择网页元素
document.onselectstart=mylock1;
function mylock1(){
event.returnValue=false;
};
