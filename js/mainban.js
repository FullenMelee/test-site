;(function ($) {
  'use strict';

  // Mainvisual
  $(function () {
    var $mv = $('#main .mv');

    var init = function () {
      var $txt01 = $mv.find('.txt01 img');
      var $txt02 = $mv.find('.txt02 img');
      var $goal = $mv.find('.goal a');
      var $concept = $mv.find('.concept');

      var txt01w = $txt01.width();
      var txt02w = $txt02.width();
      var goalw = $goal.width();

      var ua = window.navigator.userAgent.toLowerCase();
      var appv = window.navigator.appVersion.toLowerCase();
      var isIE8 = ( ua.indexOf("msie") !== -1 ) && ( appv.indexOf("msie 8.") !== -1 );


      // SAGAWA縺ｪ繧峨
      setTimeout(function () {
        $txt01
          .css({ display: 'block', opacity: isIE8 ? 1 : 0, top: 10, left: 20, width: txt01w * 2 })
          .animate({ opacity: 1, top: 0, left: 0, width: txt01w }, 720, 'easeOutExpo');
      }, 0);

      // 縺ｧ縺阪ｋ縲
      setTimeout(function () {
        $txt02.css({ display: 'block', opacity: isIE8 ? 1 : 0, top: -100, left: 20, width: txt02w * 1.6 })
        $txt02.animate({ opacity: 1, top: 0, left: 0, width: txt02w }, 720, 'easeOutExpo');
      }, 1000);

      // (GOAL)
      setTimeout(function () {
        $goal.css({ display: 'block', opacity: isIE8 ? 1 : 0, top: 30 })
        $goal.animate({ opacity: 1, top: 0 }, 800, 'easeOutExpo');
      }, 1900);

      // CM蛻ｶ菴懊さ繝ｳ繧ｻ繝励ヨ
      setTimeout(function () {
        $concept.css({ display: 'block', opacity: 0, marginTop: 10 })
        $concept.animate({ opacity: 1, marginTop: 0 }, 800, 'easeOutExpo');
      }, 2300);

    };

    $mv.find('img').imagesLoaded(function () {
      setTimeout(function () {
        init();
      }, 500);
    });

  });

  // PR Area
  $(function () {
    $('#main .mv .prArea ul').bxSlider({
      auto: true,
      mode: 'fade',
      useCSS: false,
      controls: false
    });
  });

  // Panel
  $(function () {
    var $track = $('#main .mv .panel .track');
    $track.bind('mouseenter mouseleave', function ( e ) {
      e.preventDefault();
      if ( e.type === 'mouseenter' ) {
        $track.addClass('is-open');
      } else {
        $track.removeClass('is-open');
      }
    });
    $track.find('a.close').bind('click', function ( e ) {
      e.preventDefault();
      $track.removeClass('is-open');
    });
  });

}(jQuery));
