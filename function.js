var tbbg=document.getElementById("table");
var bodyicon=document.getElementById("bodyicon");
var bodyicon1=document.getElementById("bodyicon1");
var bodyicon2=document.getElementById("bodyicon2");
var head=document.getElementById("head");
var nav=document.getElementById("nav");
var sectwo=document.getElementById("sectwo");

// sidebar
var item3=document.getElementById("item3");
var item5=document.getElementById("item5");
var item2=document.getElementById("item2");
var quick=document.getElementById("quick");
var thispc=document.getElementById("thispc");
var subpc=document.getElementById("subpc");

var onestatus=document.getElementById("onestatus");


function myfunction1(){
    document.getElementById("computer").addEventListener("click",function(){
        tbbg.style.backgroundColor="#333";
        bodyicon.style.backgroundColor="black";
        bodyicon1.style.backgroundColor="black";
        bodyicon2.style.backgroundColor="black";
    });
}
function myfunction2(){
    document.getElementById("view").addEventListener("click",function(){
        tbbg.style.backgroundColor="#222";
        bodyicon.style.backgroundColor="black";
        bodyicon1.style.backgroundColor="black";
        bodyicon2.style.backgroundColor="black";
    });
}
function myfunction3(){
    document.getElementById("minimize").addEventListener("click",function(){
        nav.style.display="flex";
        table.style.display="flex";
        sectwo.style.display="flex";
    });
}
function myfunction4(){
    document.getElementById("close").addEventListener("click",function(){
        // head.style.display="none";
        nav.style.display="none";
        table.style.display="none";
        sectwo.style.display="none";
    });
}

function myfunction5(){
    document.getElementById("quick").addEventListener("click",function(){
        item5.style.display="block";
        item3.style.display="none";
        item5.innerText="This folder is empty";
        item2.style.borderRight="1px solid #333";
        onestatus.innerText="Quick access";
    });
}

function myfunction6(){
    document.getElementById("thispc").addEventListener("click",function (){
        item5.style.display="default";
        item3.style.display="block";
        item2.style.borderRight="1px solid #333";
        subpc.style.display="block";
    });
}
function myfunction7(){
    document.getElementById("thispc").addEventListener("click",function (){
        item5.style.display="none";
        item2.style.borderRight="1px solid #333";
        subpc.style.display="none";
        item5.innerHTML="This folder is empty";
        onestatus.innerText="This PC";
    });
}
