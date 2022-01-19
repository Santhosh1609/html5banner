function startAnmi(){

    setTimeout(function(){
        document.getElementById("topline").style.width = '214px';
        document.getElementById("topline").style.transition = 'all 0.5s ease';

        document.getElementById("bottomline").style.width = '214px';
        document.getElementById("bottomline").style.transition = 'all 0.5s ease';
       },500);

       setTimeout(function(){
       document.getElementById("text1").style.transform = 'translateX(0px)';
       document.getElementById("text1").style.transition = 'all 0.3s ease-out';
       },1000);


       setTimeout(function(){
        document.getElementById("text2").style.transform = 'translateX(0px)';
        document.getElementById("text2").style.transition = 'all 0.3s ease-out';
        },1300);


        setTimeout(function(){
            document.getElementById("text3").style.transform = 'translateY(0px)';
            document.getElementById("text3").style.opacity = '1';
            document.getElementById("text3").style.transition = 'all 0.5s ease-out';
            },1600);


            setTimeout(function(){
                document.getElementById("cta").style.transform = 'translateY(0px)';
                document.getElementById("cta").style.opacity = '1';
                document.getElementById("cta").style.transition = 'all 0.5s ease-out';
                },2100);
 

                setTimeout(function(){
                    document.getElementById("url").style.transform = 'translateX(0px)';
                    document.getElementById("url").style.opacity = '1';
                    document.getElementById("url").style.transition = 'all 0.5s ease-out';
                    },2600);

   


}


window.onload = startAnmi();