$(document).ready(function () {
    /* for sticky navigation */
    $('.section-features').waypoint(function(direction) {
        (direction === 'down') ? $('nav').addClass('sticky') : $('nav').removeClass('sticky');
    }, {
        offset: '8%'
    });
    
    /* scroll on buttons */
    $('#scroll-to-top').click(function() {
       $('html, body').animate({scrollTop: $('body').offset().top}, 1000); 
    });
    
    $('#scroll-to-plan').click(function() {
       $('html, body').animate({scrollTop: $('.section-pricing').offset().top}, 1000); 
    });
    
    $('#scroll-to-start').click(function() {
       $('html, body').animate({scrollTop: $('.section-features').offset().top}, 1000); 
    });
    
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /* Animation on scroll */
    $('.section-features').waypoint(function(direction) {
        $('.js--wp-1').css('opacity', 1);
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '10%'
    });
    
    $('.section-steps').waypoint(function(direction) {
        $('.js--wp-2').css('opacity', 1);
        $('.js--wp-2').addClass('animated bounceInUp');
    }, {
        offset: '25%'
    });
    
    $('.section-cities').waypoint(function(direction) {
        $('.js--wp-3').css('opacity', 1);
        $('.js--wp-3').addClass('animated pulse');
    }, {
        offset: '25%'
    });
    
    $('.section-pricing').waypoint(function(direction) {
        $('.js--wp-4').css('opacity', 1);
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '25%'
    });
    
    
    /* Mobile Navigation */
    $('.mobile-nav').click(function () {
        let nav = $('.main-nav');
        let icon = $('.mobile-nav i');        
        icon[0].className = `ion-${icon.hasClass('ion-navicon-round') ? 'close' : 'navicon'}-round`; 
//        icon.hasClass('ion-navicon-round') ? 'ion-close-round' : 'ion-navicon-round'
        nav.slideToggle(200);
    });
});


