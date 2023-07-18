let slideIndex = 1;
        showSlide(slideIndex);
        
        function openLightbox() {
          document.getElementById('Lightbox').style.display = 'flex';
        };
        
        function closeLightbox() {
          document.getElementById('Lightbox').style.display = 'none';
          pauseAll();
          // $("iframe").each(function() {
          //   var src= $(this).attr('src');
          //   $(this).attr('src',src);
          // });
        };
        
        function changeSlide(n) {
          showSlide(slideIndex += n);
          // $("iframe").api("pause");
          // $("iframe").each(function() {
          //   var src= $(this).attr('src');
          //   $(this).attr('src',src);
          // });
          pauseAll();
          console.log("next slide");
        };

        function pauseAll() {
          $('iframe').each(function () {
          let video = $(this);
          let player = new Vimeo.Player(video);
          player.pause();
          })}; // pauseAll()
        
        function toSlide(n) {
          showSlide(slideIndex = n);
        };
        
        function showSlide(n) {
          const slides = document.getElementsByClassName('slide');
        
          if (n > slides.length) {
            slideIndex = 1;	
          };
          
          if (n < 1) {
            slideIndex = slides.length;
          };
        
          for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          };
          
          slides[slideIndex - 1].style.display = 'block';
        };