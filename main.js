SC.initialize({
    client_id: '340f063c670272fac27cfa67bffcafc4'
  });

  $(document).ready(function() { 
    SC.stream('/tracks/66329568',function(sound){

        //play button
        $('#start').click(function(e) {
            e.preventDefault();
            sound.start();
          });


        //stop button
        $('#stop').click(function(e) {
            e.preventDefault();
            sound.stop();
          });
 
 

     });
   }); 