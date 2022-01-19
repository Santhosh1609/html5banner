function startAnim(){

    var startTime = 0;
    var TL = new TimelineMax();
    //bg frame
    startTime += 0.5;
    TL.to("#bg1,#bg2",1,{ rotationY:0, ease:Power1.easeNone},startTime);
    //logo frame
    startTime += 0.5;
    TL.to("#logo",0.5,{ scale:1.3, ease:Power1.easeOut},startTime);
    startTime += 0.4;
    TL.to("#logo",0.5,{ scale:1, ease:Power1.easeOut},startTime);
    //text frames
    startTime += 0.5;
    TL.to("#text1",0.5,{ scale:1, ease:Power1.easeNone},startTime);
    startTime += 0.5;
    TL.to("#text2",0.5,{ x:1, opacity:1, ease:Power1.easeNone},startTime);
    startTime += 0.5;
    TL.to("#text3",0.5,{ x:1, opacity:1, ease:Power1.easeNone},startTime);
    //circle frame
    startTime += 0.5;
    TL.to("#circle",0.5,{ rotation:-720,opacity:1, ease:Power1.easeNone},startTime);



    console.log(TL.duration());
}
window.onload = startAnim();