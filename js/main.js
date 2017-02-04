 $('#parallax').parallax({
     invertX: true,
     invertY: true,
     scalarX: 10,
     scalarY: 5,
     frictionX: 0.05,
     frictionY: 0.05

 });

 function pagetitleTransitionIn() {
     TweenMax.set("body, html", { overflow: "hidden" });
     var e = new TimelineMax;
     e.fromTo(".logo", 0.5, { opacity: 0 }, { opacity: 1, ease: Power4.easeOut }, "-=0")
         .fromTo(".line-1", .5, { opacity: 0, y: -50, x: 0 }, { opacity: 1, y: 0, ease: Power4.easeOut }, "-=0.25")
         .fromTo(".page-description", .25, { opacity: 0 }, { opacity: 1, ease: Power4.easeOut }, "-=0.25")
         .fromTo(".vertical-line", .25, { opacity: 0, height: 0 }, { opacity: 1, height: "40vh", ease: Power4.easeOut }, "-=0.5")
         .set("body, html", { overflow: "visible" })

 }

 function projectsHoverStates() {
     console.log($(window).width());
     if($(window).width()>845){
     $(".section").hover(function() {
         var e = new TimelineMax({});
         e.add(TweenMax.to($(this).find(".project-type"), .4, { y: 10, ease: Expo.easeOut }))
             .add(TweenMax.to($(this).find(".project-background-image"), .4, { y: -5, ease: Expo.easeOut }), "=-0.4")
             .add(TweenMax.to($(this).find(".project-description"), .4, { scale: 1.05, ease: Expo.easeOut }), "=-0.4")
             .add(TweenMax.to($(this).find(".project-title"), .4, { x: 10, ease: Expo.easeOut }), "=-0.4")
     }, function() {
         var e = new TimelineMax({});
         e.add(TweenMax.to($(this).find(".project-type"), .4, { y: 0, ease: Expo.easeOut }))
             .add(TweenMax.to($(this).find(".project-background-image"), .4, { y: 0, ease: Expo.easeOut }), "=-0.4")
             .add(TweenMax.to($(this).find(".project-description"), .4, { scale:1, ease: Expo.easeOut }), "=-0.4")
             .add(TweenMax.to($(this).find(".project-title"), .4, { x: 0, ease: Expo.easeOut }), "=-0.4")
     });
     }
 }


 function portfolioScrollMagic() {
     var e = new ScrollMagic.Controller;
     $(".section").each(function() {
         var t = new TimelineMax;
//         t.fromTo("#" + $(this).attr("id") + " .project-background-image", 1, { opacity: 0, y: -25 }, { opacity: 1, y: 0, ease: Power4.easeOut })
             t.fromTo("#" + $(this).attr("id") + " .project-title", 1, { opacity: 0 }, { opacity: 1, ease: Power4.easeOut })
//             .fromTo("#" + $(this).attr("id") + " .project-type", .75, { opacity: 0}, { opacity: 1, ease: Power4.easeOut }, "-=0.75")
             .fromTo("#" + $(this).attr("id") + " .project-description", .75, { opacity: 0, x: 50 }, { opacity: 1, x: 0, ease: Power4.easeOut });
         var o = new ScrollMagic.Scene({ triggerElement: "#" + $(this).attr("id"), duration: .3 * $(window).height(), offset: -100 }).addTo(e).setTween(t)
     });

     var t = new TimelineMax;
     t.to(".logo", .15, { opacity: 0, scale: .7, y: -50, ease: Power4.easeOut })
         .to(".glasses", .15, { opacity: 0, scale: .7, y: -50, ease: Power4.easeOut }, "-=0.15")
         .to(".line-1", .15, { opacity: 0, scale: .7, y: -50, ease: Power4.easeOut }, "-=0.15")
         .to(".page-description", .15, { opacity: 0, scale: .7, y: -25, ease: Power4.easeOut }, "-=0.15")
         .to(".vertical-line", .25, { opacity: 0, height: "0", ease: Power4.easeOut });

     var o = new ScrollMagic.Scene({ duration: $(window).height() }).setTween(t).addTo(e)
 }

function smoothScrollToAnchor() {
 $("#projects").click(function() {
  TweenMax.to(window, 2, { scrollTo: { y: $(window).height() }, ease: Power2.easeOut });
      var temp=$( "a[title='About and Contact']");
  TweenMax.set(temp, {className:"-=active"});
    var temp=$( "a[title='Works']");
  TweenMax.set(temp, {className:"+=active"});
 });
$("#contact").click(function() {
  TweenMax.to(window, 2, { scrollTo: { y: $('#about').position().top }, ease: Power2.easeOut });
   var temp=$( "a[title='About and Contact']");
  TweenMax.set(temp, {className:"+=active"});
    var temp=$( "a[title='Works']");
  TweenMax.set(temp, {className:"-=active"});
 $("#b-1").click(function() {
  TweenMax.to(window, 2, { scrollTo: { y: $('#project-culc').position().top }, ease: Power2.easeOut });
      var temp=$( "a[title='About and Contact']");
  TweenMax.set(temp, {className:"-=active"});
    var temp=$( "a[title='Works']");
  TweenMax.set(temp, {className:"+=active"});
 });
     $("#b-2").click(function() {
  TweenMax.to(window, 2, { scrollTo: { y: $('#project-consensus').position().top }, ease: Power2.easeOut });
      var temp=$( "a[title='About and Contact']");
  TweenMax.set(temp, {className:"-=active"});
    var temp=$( "a[title='Works']");
  TweenMax.set(temp, {className:"+=active"});
 });
     $("#b-3").click(function() {
  TweenMax.to(window, 2, { scrollTo: { y: $('#more').position().top }, ease: Power2.easeOut });
      var temp=$( "a[title='About and Contact']");
  TweenMax.set(temp, {className:"-=active"});
    var temp=$( "a[title='Works']");
  TweenMax.set(temp, {className:"+=active"});
 });


});
    
}

function scrollSpy(){
    
}


 $(document).ready(function() {
     pagetitleTransitionIn();
     portfolioScrollMagic();
     projectsHoverStates();
     smoothScrollToAnchor();
     scrollSpy();
 });



