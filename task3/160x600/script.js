function startAnim(){


    var startTime= 0;
    var TL = new TimelineMax();
    //image frame
    startTime += 0.5;
    TL.to("#bg1,#bg2",0.5,{ rotationY:0,ease:Power1.easeNone},startTime);
    //logo frame
    startTime += 0.5;
    TL.to("#logo",0.5,{scale:1.3,ease:Power1.easeOut},startTime);
    startTime += 0.4;
    TL.to("#logo",0.5,{scale:1,ease:Power1.easeOut},startTime);
    //text frame
    startTime += 0.5;
    TL.to("#text1",0.5,{ rotationX:0,ease:Power1.easeNone},startTime);
    startTime += 0.5;
    TL.to("#text2",0.5,{ x:0,opacity:1,ease:Power1.easeNone},startTime);
    startTime += 0.5;
    TL.to("#text3",0.5,{ x:0,opacity:1,ease:Power1.easeNone},startTime);
    startTime += 0.5;
    TL.to("#text4",0.5,{ y:0,opacity:1,ease:Power1.easeNone},startTime);
    //circle
    startTime += 0.5;
    TL.to("#circle",0.5,{ rotation:-720,opacity:1,ease:Power1.easeNone},startTime);

    //cta
    startTime += 0.5;
    TL.to("#cta",0.5,{scale:1.3,ease:Power1.easeOut},startTime);
    startTime += 0.4;
    TL.to("#cta",0.5,{scale:1,ease:Power1.easeOut},startTime);
    //btext frame
    startTime += 0.5;
    TL.to("#btext",0.5,{ y:0,opacity:1,ease:Power1.easeNone},startTime);




    console.log(TL.duration());
}
window.onload = startAnim();