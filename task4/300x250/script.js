function startAnim(){

    var startTime = 0;
    var TL = new TimelineMax();
    //bgc
    startTime+=0.5;
    TL.to("#bgc",0.5,{ opacity:1, ease:Power3.easeOut},startTime);
    //bg
    startTime+=0.3;
    TL.to("#bg1",0.5,{ x:0,y:0, ease:Power3.easeOut},startTime);
    startTime+=0.3;
    TL.to("#bg2",0.5,{ x:0,y:0, ease:Power3.easeOut},startTime);
    //text
    startTime+=0.3;
    TL.to("#text1",0.5,{ x:0, ease:Power3.easeOut},startTime);
    startTime+=0.3;
    TL.to("#text2",0.5,{ x:0, ease:Power3.easeOut},startTime);
    startTime+=0.1;
    TL.to("#text3",0.5,{ x:0, ease:Power3.easeOut},startTime);
    //line
    startTime+=0.2;
    TL.to("#line",0.5,{ width:130, ease:Power3.easeOut},startTime);
    startTime+=0.2;
    TL.to("#line",0.5,{ width:27, ease:Power3.easeOut},startTime);
    //logo
    startTime+=0.3;
    TL.to("#logo",0.5,{ y:0, ease:Power3.easeOut},startTime);
    //text4
    startTime+=0.2;
    TL.to("#text4",0.5,{ opacity:1, ease:Power3.easeOut},startTime);
    //bg5
    startTime+=0.2;
    TL.to("#bg5",0.2,{ x:0,y:0, ease:Power3.easeOut},startTime);
    //bgtext1
    startTime+=0;
    TL.to("#bgtext1",0.5,{ x:0,y:0,rotation:-20, ease:Power3.easeOut},startTime);
    //cta and btext 
    startTime+=0.5;
    TL.to("#cta,#btext",0.5,{ x:0, ease:Power3.easeOut},startTime);
    //bgtext1 opacity
    startTime+=0.5;
    TL.to("#bgtext1",0.5,{ opacity:0, ease:Power1.easeOut},startTime);

    //bg3
    startTime+=0.5;
    TL.to("#bg3",0.5,{ opacity:1, ease:Power1.easeNone},startTime);
    //bgtext2
    startTime+=0;
    TL.to("#bgtext2",0.5,{ opacity:1,rotation:-20, ease:Power1.easeNone},startTime);

    //bgtext2 opacity
    startTime+=0.5;
    TL.to("#bgtext2",0.5,{ opacity:0, ease:Power1.easeNone},startTime);

    //bg4
    startTime+=0.5;
    TL.to("#bg4",0.5,{ opacity:1, ease:Power1.easeOut},startTime);
    //bgtext2
    startTime+=0,4;
    TL.to("#bgtext3",0.5,{ opacity:1,rotation:-20, ease:Power1.easeOut},startTime);




    
    

    


    console.log(TL.duration());
}
window.onload = startAnim();