let swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  loop: true,
  autoplay: true,

});

let tl = gsap.timeline();

tl.from(".content h1", {
  y: 100,
  duration: 2,
  delay: 1,
  opacity: 0,
  ease:"bounce.out"
});

tl.from(
  "#try",
  {
    y: 100,
    duration: 0.8,
    opacity: 0,
  },
  "same"
);

tl.from(
  ".content p",
  {
    y: 100,
    duration: 0.8,
    delay: 0.4,
    opacity: 0,
  },
  "same"
);

tl.from(
  ".content h4",
  {
    y: 100,
    duration: 0.8,
    delay: 0.6,
    opacity: 0,
  },
  "same"
);

tl.from(
    "#big-text",
    {
      y: 100,
      duration: 0.8,
      opacity: 0,
    },"same2"
  );

  tl.from(
    "#para",
    {
      y: 100,
      duration: 0.8,
      delay:0.2,
      opacity: 0,
    },"same2"
  );

 gsap.from(".second-div i",{
    y:100,
    duration:0.8,
    delay:1,
    opacity:0,
    stagger:0.2,
    scale:0.2,
    rotate:360,
    scrollTrigger:{
    trigger:".second-div"
    }
  },"same3")

   gsap.from(".left-image",{
        x:250,
        duration:1.5,
        delay:1,
        opacity:0,
        scrollTrigger:{
          trigger:".second-div",
        
        }
    
      })
    
       gsap.from(".third-div .box1",{
            scale:0.2,
            duration:2.8,
            ease: "elastic.out(1,0.4)",
            opacity:0,
            scrollTrigger:".third-div .box1"

        })

        
       gsap.from(".third-div .box2",{
          scale:0.2,
          duration:2.8,
          ease: "elastic.out(1,0.4)",
          delay:1,
          opacity:0,
          scrollTrigger:".third-div .box2"

      })

     gsap.from(".third-div .box3",{
        scale:0.2,
        duration:2.8,
        ease: "elastic.out(1,0.4)",
        delay:1.5,
        opacity:0,
        scrollTrigger:".third-div .box3"
       

    })

   gsap.from(".fourth-div h1",{
      duration:1,
      scale:0,
      delay:2,
      opacity:0,
      scrollTrigger:".fourth-div"
     

  })

 gsap.from(".sixth1",{
    x:-200,
    duration:1.5,
    delay:1.5,
    opacity:0,
    scrollTrigger:{
      trigger:".sixth-div",
    
    }

  })

 gsap.from(".sixth2",{
    x:200,
    duration:1.5,
    delay:1.5,
    opacity:0,
    scrollTrigger:{
      trigger:".sixth-div",
    
    }

  })

 gsap.from(".aero-content",{
    y: 150,
    duration: 0.8,
    delay:1,
    opacity: 0,
    scrollTrigger:".aero-content"
    

  })

 gsap.from(".seventh-div h1",{
    y: 150,
    duration: 0.8,
    delay:1.2,
    opacity: 0,
    scrollTrigger:".seventh-div"

  })

 gsap.from(".seventh-div h4",{
    y: 150,
    duration: 0.8,
    delay:1.4,
    opacity: 0,
    scrollTrigger:".seventh-div"

  })

 gsap.from(".seventh-div p",{
    y: 150,
    duration: 0.8,
    delay:1.6,
    opacity: 0,
    scrollTrigger:".seventh-div"

  })
