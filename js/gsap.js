gsap.registerPlugin(ScrollTrigger);

/* cnc page */
let tl = gsap.timeline({scrollTrigger:{
	trigger:".images-cnc",
	start:"top 50%",
	end:"bottom top",
	toggleActions:"restart none none reset"
}})
.from('.img-b', {duration: 1.2, y: '-200%', ease: 'bounce', stagger: 0.3})
.from('.img-a', {opacity: 0, duration: .5, delay: .2, scale: 50, ease: 'power2.In',}, "<1")


/* HAND-LARGE CNC PAGE */
ScrollTrigger.matchMedia({
  '(max-width: 600px)': function () {
    gsap.to("#hand-large", {
      scrollTrigger: {
        trigger: '#hand-large',
        start: 'top bottom',
        end: 'top 55%',
        scrub: true,

        toggleActions: "restart pause reverse pause"
      },

		ease: "power1.inOut",
      y: '60%',
      x: '-90%',
      duration: 3
    })
  },


  '(min-width: 601px) and (max-width: 899px)': function () {
    gsap.from("#hand-large", {
      scrollTrigger: {
        trigger: '#cnc-more-info',
        start: '20% bottom',
        end: '60% center',
        scrub: true,

        toggleActions: "restart pause reverse pause"
      },

ease: "power1.inOut",
      y: '120%',
      x: '-180%',
      duration: 3
    })
  },

  '(min-width:900px)': function () {
    gsap.from("#hand-large", {

      scrollTrigger: {
        trigger: '#cnc-more-info',
        start: '20% bottom',
        end: '80% center',
        scrub: true,

        toggleActions: "restart pause reverse pause"
      },

		ease: "power1.inOut",
      y: '100%',
      x: '-230%',
      duration: 3
    })
  }
});


/* DND-COLLAGE-02 DND PAGE */
ScrollTrigger.matchMedia({
  '(max-width: 900px)': function () {
    gsap.from("#dnd-overlay", {
      scrollTrigger: {
        trigger: '#dnd-overlay',
        scrub: true,
        start: 'top center',
        end: '50% center',
        toggleActions: "restart pause reverse pause"
      },
	
		ease: "power1.inOut",
      y: '-20%',
      x: '-150%',
      duration: 3
    })
  },


  '(min-width:901px)': function () {
    gsap.from('#dnd-overlay', {
      scrollTrigger: {
        trigger: '#dnd-overlay',
        scrub: true,
        start: 'top center',
        end: '100% center',
        toggleActions: "restart pause reverse pause"
      },
	ease: "power1.inOut",
      y: '-80%',
      x: '-10%',
      duration: 3
    })
  }
});


/* CNC PHILIPPINES PAGE */

ScrollTrigger.matchMedia({
  '(max-width: 700px)': function () {
    gsap.from("#con-wide-06", {
      scrollTrigger: {
        trigger: '#con-wide-06',
        start: '10% center',
        end: '45% 50%',

		  scrub: true
      },
	
		ease: "power1.inOut",
opacity: 0,
      duration: 2
    })
  }
});

/* SAFE SPACES ACT PAGE */

ScrollTrigger.matchMedia({
	 '(max-width: 700px)': function (){
    gsap.from("#arrow-01", {
      scrollTrigger: {
        trigger: '#ssa-marker-02',
        start: '90% 70%',
        end: '+=400',


		  scrub: true
      },
	
		ease: "power1.out",
opacity: 0,
				y: '-300%',
		x:'-2000%',
		scale: .1,
      duration: 2
    })
  },
	
	'(min-width: 701px) and (max-width: 899px)': function (){
    gsap.from("#arrow-01", {
      scrollTrigger: {
        trigger: '#ssa-marker-01',
        start: '90% 55%',
        end: '+=300',
		  scrub: true
      },
	
		ease: "power1.out",
opacity: 0,
				y: '-300%',
		x:'-300%',
		scale: .1,
      duration: 2
    })
  },
	
  '(min-width: 900px)': function () {
    gsap.from("#arrow-01", {
      scrollTrigger: {
        trigger: '#ssa-marker-01',
        start: '20% 70%',
        end: '+=300',
		  scrub: true
      },
	
		ease: "power1.out",
opacity: 0,
		y: '-140%',
		x:'-200%',
		scale: .7,
      duration: 2
    })
  }
});

ScrollTrigger.matchMedia({
	'(max-width: 700px)': function () {
		 gsap.from("#arrow-02", {
      scrollTrigger: {
        trigger: '#ssa-marker-02',
        start: '80% 40%',
        end: '90% top',


		  scrub: true
      },
	
		ease: "power1.out",
opacity: 0,
		y: '-140%',
		x:'500%',
		scale: .1,
      duration: 2
    })
  },
	'(min-width: 701px) and (max-width: 899px)':  function (){
    gsap.from("#arrow-02", {
      scrollTrigger: {
        trigger: '#ssa-marker-01',
        start: '80% 40%',
        end: '90% top',


		  scrub: true
      },
	
		ease: "power1.out",
opacity: 0,
		y: '-140%',
		x:'50%',
		scale: .1,
      duration: 2
    })
  },
	
  '(min-width: 900px)': function () {
    gsap.from("#arrow-02", {
      scrollTrigger: {
        trigger: '#ssa-marker-01',
        start: '80% center',
        end: '+=400',

		  scrub: true
      },
	
		ease: "power1.out",
opacity: 0,
		y: '-140%',
		x:'50%',
		scale: .5,
      duration: 2
    })
  }
});



