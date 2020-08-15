SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
  SC.stream('/tracks/846120766', function(sound) {

    //play button
    $('#start1').click(function(e) {
      e.preventDefault();
      sound.start();
    });

    //pause button
    $('#pause1').click(function(e) {
      e.preventDefault();
      sound.pause();
    });

    //stop button
    $('#stop1').click(function(e) {
      e.preventDefault();
      sound.stop();
    });

  });
});


$(document).ready(function() {
  SC.stream('/tracks/66329568', function(sound) {

    //play button
    $('#start2').click(function(e) {
      e.preventDefault();
      sound.start();
    });

    //pause button
    $('#pause2').click(function(e) {
      e.preventDefault();
      sound.pause();
    });

    //stop button
    $('#stop2').click(function(e) {
      e.preventDefault();
      sound.stop();
    });

  });
});

$(document).ready(function() {
  SC.stream('/tracks/66329568', function(sound) {

    //play button
    $('#start3').click(function(e) {
      e.preventDefault();
      sound.start();
    });

    //pause button
    $('#pause3').click(function(e) {
      e.preventDefault();
      sound.pause();
    });

    //stop button
    $('#stop3').click(function(e) {
      e.preventDefault();
      sound.stop();
    });

  });
});

$(document).ready(function() {
  SC.stream('/tracks/66329568', function(sound) {

    //play button
    $('#start4').click(function(e) {
      e.preventDefault();
      sound.start();
    });

    //pause button
    $('#pause4').click(function(e) {
      e.preventDefault();
      sound.pause();
    });

    //stop button
    $('#stop4').click(function(e) {
      e.preventDefault();
      sound.stop();
    });

  });
});

$(document).ready(function() {
  SC.stream('/tracks/66329568', function(sound) {

    //play button
    $('#start5').click(function(e) {
      e.preventDefault();
      sound.start();
    });

    //pause button
    $('#pause5').click(function(e) {
      e.preventDefault();
      sound.pause();
    });

    //stop button
    $('#stop5').click(function(e) {
      e.preventDefault();
      sound.stop();
    });

  });
});

$(document).ready(function() {
  SC.stream('/tracks/66329568', function(sound) {

    //play button
    $('#start6').click(function(e) {
      e.preventDefault();
      sound.start();
    });

    //pause button
    $('#pause6').click(function(e) {
      e.preventDefault();
      sound.pause();
    });

    //stop button
    $('#stop6').click(function(e) {
      e.preventDefault();
      sound.stop();
    });

  });
});

$(document).ready(function() {
  SC.stream('/tracks/66329568', function(sound) {

    //play button
    $('#start7').click(function(e) {
      e.preventDefault();
      sound.start();
    });

    //pause button
    $('#pause7').click(function(e) {
      e.preventDefault();
      sound.pause();
    });

    //stop button
    $('#stop7').click(function(e) {
      e.preventDefault();
      sound.stop();
    });

  });
});

$(document).ready(function() {
  SC.stream('/tracks/66329568', function(sound) {

    //play button
    $('#start8').click(function(e) {
      e.preventDefault();
      sound.start();
    });

    //pause button
    $('#pause8').click(function(e) {
      e.preventDefault();
      sound.pause();
    });

    //stop button
    $('#stop8').click(function(e) {
      e.preventDefault();
      sound.stop();
    });

  });
});





$(document).ready(function() {
  $('#recipeCarousel').carousel({
    interval: 4000
  })

  $('.carousel .carousel-item').each(function() {
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
      next = next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }

      next.children(':first-child').clone().appendTo($(this));
    }
  });
});
