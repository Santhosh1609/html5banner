function startAnim(){


    setTimeout(function(){
        document.getElementById("bg2").style.transform = 'translateX(0px)';
        document.getElementById("bg2").style.transition = 'all 0.5s ease-out';
    },500);

    setTimeout(function(){
        document.getElementById("bg1").style.transform = 'translateX(0px)';
        document.getElementById("bg1").style.transition = 'all 0.5s ease-out';
    },700);

    setTimeout(function(){
        document.getElementById("bg3").style.transform = 'translateX(0px)';
        document.getElementById("bg3").style.transition = 'all 0.5s ease-out';
    },900);

    setTimeout(function(){
        document.getElementById("logo").style.transform = 'scale(1)';
        document.getElementById("logo").style.transition = 'all 0.5s ease-out';
    },1400);

    setTimeout(function(){
        document.getElementById("text1").style.transform = 'translateY(0px)';
        document.getElementById("text1").style.transition = 'all 0.6s ease-out';
    },1500);

    setTimeout(function(){
        document.getElementById("text2").style.opacity = '1';
        document.getElementById("text2").style.transition = 'all 0.5s ease-out';
    },1900); 

    setTimeout(function(){
        document.getElementById("text3-1").style.opacity = '1';
        document.getElementById("text3-1").style.transition = 'all 0.5s ease-out';
    },2200); 

    setTimeout(function(){
        document.getElementById("text3-2").style.opacity = '1';
        document.getElementById("text3-2").style.transition = 'all 0.5s ease-out';
    },2500);
    
    setTimeout(function(){
        document.getElementById("cta").style.transform = 'scale(1)';
        document.getElementById("cta").style.opacity = '1';
        document.getElementById("cta").style.transition = 'all 0.5s ease-out';
    },2800);



}

window.onload = startAnim();