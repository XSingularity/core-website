var typed = new Typed('.typed', {
    strings: ['<span class="light">We Create &amp; Optimize</span>'],
    typeSpeed: 90,
    backSpeed: 90,
    loop:false,
    startDelay: 1000,
    cursorChar: '_',


});

var icon = document.getElementById("icon");
    icon.onclick = function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            icon.src = "./img/sun.png";
        }else {
            icon.src="./img/moon.png";
        }
          if (document.body.classList.contains("dark-theme")) {
    icon2.src = "./img/logo_dark.png";
  } else {
    icon2.src = "./img/logo.png";
  }
};
    
 

