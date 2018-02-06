;(function(window) {

	'use strict';

	function init() {
		[].slice.call(document.querySelectorAll('.sidebar-nav')).forEach(function(nav) {
			var navItems = [].slice.call(nav.querySelectorAll('.nav__item')),
				itemsTotal = navItems.length,
				setCurrent = function(item) {
					// return if already current
					if( item.classList.contains('nav__item--current') ) {
						return false;
					}
					// remove current
					var currentItem = nav.querySelector('.nav__item--current');
					currentItem.classList.remove('nav__item--current');
					
					// set current
					item.classList.add('nav__item--current');
                    
                    
				};
			
			navItems.forEach(function(item) {
				item.addEventListener('click', function() { setCurrent(item); });
			});
		});

	}
    function scrollTo(){
        
        $("#Item_1").click(function() {
        TweenMax.to(window, 2, { scrollTo: { y: $('#Content_1').position().top }, ease: Power2.easeOut });
 });
        $("#Item_2").click(function() {
        TweenMax.to(window, 2, { scrollTo: { y: $('#Content_2').position().top }, ease: Power2.easeOut });
 });
        $("#Item_3").click(function() {
        TweenMax.to(window, 2, { scrollTo: { y: $('#Content_3').position().top }, ease: Power2.easeOut });
 });
        $("#Item_4").click(function() {
        TweenMax.to(window, 2, { scrollTo: { y: $('#Content_4').position().top }, ease: Power2.easeOut });
 });
        $("#Item_5").click(function() {
        TweenMax.to(window, 2, { scrollTo: { y: $('#Content_5').position().top }, ease: Power2.easeOut });
 });
        $("#Item_6").click(function() {
        TweenMax.to(window, 2, { scrollTo: { y: $('#Content_6').position().top }, ease: Power2.easeOut });
 });
        $("#Item_7").click(function() {
        TweenMax.to(window, 2, { scrollTo: { y: $('#Content_7').position().top }, ease: Power2.easeOut });
 });
        
    }
    
    function scrollSpy(){
    var e = new ScrollMagic.Controller;
    var x = new TimelineMax;
    
    var temp=$( ".nav__item");
    x.set(temp, {className:"-=nav__item--current"});
    var temp=$( "#Item_1");
    x.set(temp, {className:"+=nav__item--current"});
    

     var scene = new ScrollMagic.Scene({
         triggerElement:"#Content_1"
     })
     .setTween(x).addTo(e);
        
    x = new TimelineMax;
    var temp=$( ".nav__item");
    x.set(temp, {className:"-=nav__item--current"});
    var temp=$( "#Item_2");
    x.set(temp, {className:"+=nav__item--current"});
    var scene = new ScrollMagic.Scene({
         triggerElement:"#Content_2"
     })
     .setTween(x).addTo(e);
    
    x = new TimelineMax;
    var temp=$( ".nav__item");
    x.set(temp, {className:"-=nav__item--current"});
    var temp=$( "#Item_3");
    x.set(temp, {className:"+=nav__item--current"});
    var scene = new ScrollMagic.Scene({
         triggerElement:"#Content_3"
     })
     .setTween(x).addTo(e);
   
    x = new TimelineMax;
    var temp=$( ".nav__item");
    x.set(temp, {className:"-=nav__item--current"});
    var temp=$( "#Item_4");
    x.set(temp, {className:"+=nav__item--current"});
    var scene = new ScrollMagic.Scene({
         triggerElement:"#Content_4"
     })
     .setTween(x).addTo(e);
        
    x = new TimelineMax;
    var temp=$( ".nav__item");
    x.set(temp, {className:"-=nav__item--current"});
    var temp=$( "#Item_5");
    x.set(temp, {className:"+=nav__item--current"});
    var scene = new ScrollMagic.Scene({
         triggerElement:"#Content_5"
     })
     .setTween(x).addTo(e);
        
    x = new TimelineMax;
    var temp=$( ".nav__item");
    x.set(temp, {className:"-=nav__item--current"});
    var temp=$( "#Item_6");
    x.set(temp, {className:"+=nav__item--current"});
    var scene = new ScrollMagic.Scene({
         triggerElement:"#Content_6"
     })
     .setTween(x).addTo(e);
        
        x = new TimelineMax;
    var temp=$( ".nav__item");
    x.set(temp, {className:"-=nav__item--current"});
    var temp=$( "#Item_7");
    x.set(temp, {className:"+=nav__item--current"});
    var scene = new ScrollMagic.Scene({
         triggerElement:"#Content_7"
     })
     .setTween(x).addTo(e);
    
}

	init();
    scrollTo();
    scrollSpy();

})(window);