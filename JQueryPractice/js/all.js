$(document).ready(function (){

    //loading動畫
    setTimeout(function(){
      $(".loading-wrap").fadeOut(1000);
      $(".wrap").fadeIn(1000);
    }, 2000);

   
    //下滑
    $('.contactus').click(function (e) { 
      e.preventDefault();
      const anchor = $(this).attr('href');
      const linkScroll = $(anchor).offset().top;
      $('html,body').stop().animate({ 
        scrollTop: linkScroll 
      },2000)
    });
    //top滑動
    $('.top').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0 },2000);
    });
    //下拉選單
    $('.dropdown').click(function (e) { 
        e.preventDefault();
        $('.dropdown-open').slideToggle();
        $('.dropdown').toggleClass('lock');
    });
    //swiper
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        speed:2000,
        autoplay: { delay: 3000,},
        effect: 'fade',
        fadeEffect: {crossFade: true,},
        allowTouchMove:false,
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
    //lightbox效果
    lightbox.option({
        'resizeDuration': 1000,
        'wrapAround': true,
        'imageFadeDuration':2000,
        'showImageNumberLabel':false,
        
    });
    //AOS啟動
    AOS.init({
      'once':true,
    });

    //乾杯-左
    $('.s1-btn').hover(function () {
        // over
        $('.left-cheers').addClass('left-active');
      }, function () {
        // out
        $('.left-cheers').removeClass('left-active');
      });

    //乾杯-右
    $('.s1-btn').hover(function () {
      // over
      $('.right-cheers').addClass('right-active');
    }, function () {
      // out
      $('.right-cheers').removeClass('right-active');
    });  

    //CARD click
    $('.s4-card').click(function (e) { 
      $('.s4-card').toggleClass('animate__animated animate__swing');
      
    });
});