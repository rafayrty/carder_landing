import gsap,{Elastic,Power4,Cubic,Expo} from 'gsap'

class Menu{

    constructor(){
        this.menuIcon = document.querySelector('.menu-icon');
        this.nav = document.querySelector('nav');
        this.overlay = document.querySelector('.menu-overlay');
        this.tl = gsap.timeline({paused:true});
        this.status = false;
        this.initialize();
    }

    initialize(){
        this.menuIcon.addEventListener('click',(e)=>{
                this.open()
        })
        this.overlay.addEventListener('click',()=>{
            this.close();
        })
    }

    open(){
        this.tl.set(this.overlay,{display:'block',ease:'elastic.easeInOut'})
        this.tl.set(this.nav,{display:'block'})
        this.tl.to(this.overlay,{duration:.3,autoAlpha:1,ease:Power4.easeInOut})
        this.tl.to(this.nav,{duration:.4,translateX:0,ease:Power4.easeInOut},'-=.3');
        this.tl.to('main',{duration:.4,translateX:'-250px',ease:Power4.easeInOut},'-=.4')

        if(this.status==false){
            this.tl.play();
            this.status = true;
            return;
        }
        if (this.tl.reversed()) {
            this.tl.play(0);
        } else {
            this.tl.reverse();
        }
        
    }

    close(){

        this.tl.reverse();

    }



}

const menu = new Menu();

let tl = gsap.timeline({delay:1});

// tl.to('.card-top img',{duration:.5,scale:1.45,ease:Expo.easeInOut});
// tl.to('.card-socials-bottom',{duration:.5,translateX:'-14%',ease:Expo.easeInOut},'-=.5')
// tl.to('.card-contact-address',{duration:.5,translateX:'14%',ease:Expo.easeInOut},'-=.5')
// tl.to('.card-personal',{duration:1,translateX:'0%',autoAlpha:1,ease:Expo.easeInOut})
// tl.to('.card-social',{duration:1,translateX:'0%',autoAlpha:1,ease:Expo.easeInOut})


class Slider{

    
    constructor(){
    
        this.slideCount = 5;
        this.currentSlide = 1;
        this.alreadyRan = false;
        this.slide_duration = 1500;
        this.tl = gsap.timeline();
        this.initialize();
    }

    initialize(){
        console.log("called");

        // Slide 1 Animation

        let tl1 = gsap.timeline();
        if(this.currentSlide==1){
        tl1.seek(0);
        if(this.alreadyRan){


            tl1.to(`.text-content-${this.slideCount}-h1`,{duration:.5,autoAlpha:0,translateY:-100,ease:Power4.easeOut,onComplete:()=>{
                document.querySelector('.slide-5').classList.add('slide-out')
                document.querySelector('.slide-1').classList.add('slide-active')
    
                gsap.to('.card-main-top',{duration:.5,translateX:'0',autoAlpha:1,ease:Power4.easeInOut})
                gsap.to('.card-top img',{duration:.5,scale:1.45,ease:Power4.easeInOut});
                gsap.to('.card-socials-bottom',{duration:.5,translateX:'-14%',autoAlpha:1,ease:Power4.easeInOut})
                gsap.to('.card-contact-address',{duration:.5,translateX:'14%',autoAlpha:1,ease:Power4.easeInOut});
                gsap.to('.card-cover',{duration:.5,autoAlpha:1,ease:Power4.easeInOut});
                gsap.to('.card-bg',{duration:.5,autoAlpha:1,ease:Power4.easeInOut});
                gsap.to('.card-share',{duration:.5,translateX:'-100%',autoAlpha:0,ease:Power4.easeInOut});

        }});
            tl1.from(`.text-content-${this.currentSlide}-h1`,{duration:.5,autoAlpha:0,translateY:100,ease:Power4.easeOut})
            tl1.to(`.text-content-${this.slideCount}-p`,{duration:.5,autoAlpha:0,translateY:-40,ease:Power4.easeOut},'-=.5')
            tl1.from(`.text-content-${this.currentSlide}-p`,{duration:.5,autoAlpha:0,translateY:40,ease:Power4.easeOut},'-=.5')
            tl1.to(`.text-content-${this.slideCount}-btn`,{duration:.5,autoAlpha:0,translateY:-20,ease:Power4.easeOut,onComplete:()=>{
                document.querySelector('.slide-5').classList.remove('slide-out')
                document.querySelector('.slide-5').classList.remove('slide-active')
                setTimeout(() => {
                    this.currentSlide = 2;
                    this.initialize();
                }, this.slide_duration);

            }},'-=.5')
           




        }else{

        tl1.from(`.text-content-${this.currentSlide}-h1`,{duration:.5,autoAlpha:0,translateY:100,ease:Power4.easeInOut})
        tl1.from(`.text-content-${this.currentSlide}-p`,{duration:.5,autoAlpha:0,translateY:40,ease:Power4.easeInOut})
        tl1.from(`.text-content-${this.currentSlide}-btn`,{duration:.5,autoAlpha:0,ease:Power4.easeInOut,onComplete:()=>{
            gsap.to('.card-top img',{duration:.5,scale:1.45,ease:Power4.easeInOut});
            gsap.to('.card-socials-bottom',{duration:.5,translateX:'-14%',ease:Power4.easeInOut})
            gsap.to('.card-contact-address',{duration:.5,translateX:'14%',ease:Power4.easeInOut,onComplete:()=>{
    
                setTimeout(() => {
                    this.currentSlide = 2;
                    this.initialize();
                }, this.slide_duration);
            }});
        }})
    }


    }
        // Slide 2 Animation

    if(this.currentSlide==2){
        
        tl1.to(`.text-content-${this.currentSlide - 1}-h1`,{duration:.5,autoAlpha:0,translateY:-100,ease:Power4.easeOut,onComplete:()=>{
            document.querySelector('.slide-1').classList.add('slide-out')
            document.querySelector('.slide-2').classList.add('slide-active')

                gsap.to('.card-top img',{duration:.5,scale:1,ease:Power4.easeInOut});
                gsap.to('.card-socials-bottom',{duration:.5,translateX:'0',ease:Power4.easeInOut})
                gsap.to('.card-contact-address',{duration:.5,translateX:'0',ease:Power4.easeInOut});
                gsap.to('.card-personal',{duration:1,translateX:'0%',autoAlpha:1,ease:Expo.easeInOut})


        }})
        tl1.from(`.text-content-${this.currentSlide}-h1`,{duration:.5,autoAlpha:0,translateY:100,ease:Power4.easeOut})
        tl1.to(`.text-content-${this.currentSlide- 1}-p`,{duration:.5,autoAlpha:0,translateY:-40,ease:Power4.easeOut},'-=.5')
        tl1.from(`.text-content-${this.currentSlide}-p`,{duration:.5,autoAlpha:0,translateY:40,ease:Power4.easeOut},'-=.5')
        tl1.to(`.text-content-${this.currentSlide - 1}-btn`,{duration:.5,autoAlpha:0,translateY:-20,ease:Power4.easeOut},'-=.5')
       
       
        tl1.from(`.text-content-${this.currentSlide}-btn`,{duration:.5,autoAlpha:0,translateY:20,ease:Power4.easeOut,onComplete:()=>{
            document.querySelector('.slide-1').classList.remove('slide-out')
            document.querySelector('.slide-1').classList.remove('slide-active')
            setTimeout(() => {
                this.currentSlide = 3;
                this.initialize();
            }, this.slide_duration);
        }},'-=.5')

    }

    // Slide 3 Animation
    if(this.currentSlide==3){


        tl1.to(`.text-content-${this.currentSlide - 1}-h1`,{duration:.5,autoAlpha:0,translateY:-100,ease:Power4.easeOut,onComplete:()=>{
            document.querySelector('.slide-2').classList.add('slide-out')
            document.querySelector('.slide-3').classList.add('slide-active')

                gsap.to('.card-top img',{duration:.5,scale:1,ease:Power4.easeInOut});
                gsap.to('.card-socials-bottom',{duration:.5,translateX:'-14%',ease:Power4.easeInOut})
                gsap.to('.card-contact-address',{duration:.5,translateX:'0',autoAlpha:0.3,ease:Power4.easeInOut});
                gsap.to('.card-personal',{duration:1,translateX:'-100%',autoAlpha:0,ease:Expo.easeInOut})
                gsap.to('.card-bg',{duration:1,autoAlpha:0.3,ease:Expo.easeInOut})
                gsap.to('.card-cover',{duration:1,autoAlpha:0.3,ease:Expo.easeInOut})
                gsap.to('.card-main-top',{duration:1,autoAlpha:0.3,ease:Expo.easeInOut})

                gsap.to('.card-social',{duration:1,translateX:'0',autoAlpha:1,ease:Expo.easeInOut})


        }})
        tl1.from(`.text-content-${this.currentSlide}-h1`,{duration:.5,autoAlpha:0,translateY:100,ease:Power4.easeOut})
        tl1.to(`.text-content-${this.currentSlide- 1}-p`,{duration:.5,autoAlpha:0,translateY:-40,ease:Power4.easeOut},'-=.5')
        tl1.from(`.text-content-${this.currentSlide}-p`,{duration:.5,autoAlpha:0,translateY:40,ease:Power4.easeOut},'-=.5')
        tl1.to(`.text-content-${this.currentSlide - 1}-btn`,{duration:.5,autoAlpha:0,translateY:-20,ease:Power4.easeOut},'-=.5')
       
       
        tl1.from(`.text-content-${this.currentSlide}-btn`,{duration:.5,autoAlpha:0,translateY:20,ease:Power4.easeOut,onComplete:()=>{
            document.querySelector('.slide-2').classList.remove('slide-out')
            document.querySelector('.slide-2').classList.remove('slide-active')
            setTimeout(() => {
                this.currentSlide = 4;
                this.initialize();
            }, this.slide_duration);
        }},'-=.5')



    }

        // Slide 4 Animation
        if(this.currentSlide==4){


            tl1.to(`.text-content-${this.currentSlide - 1}-h1`,{duration:.5,autoAlpha:0,translateY:-100,ease:Power4.easeOut,onComplete:()=>{
                document.querySelector('.slide-3').classList.add('slide-out')
                document.querySelector('.slide-4').classList.add('slide-active')
    
                    gsap.to('.card-top img',{duration:.5,scale:1,ease:Power4.easeInOut});
                    gsap.to('.card-socials-bottom',{duration:.5,translateX:'0',ease:Power4.easeInOut})
                    gsap.to('.card-contact-address',{duration:.5,autoAlpha:1,ease:Power4.easeInOut});
                    gsap.to('.card-personal',{duration:1,translateX:'-100%',autoAlpha:0,ease:Power4.easeInOut})
                    gsap.to('.card-main-top',{duration:1,autoAlpha:1,ease:Power4.easeInOut})

                    gsap.to('.card-social',{duration:1,translateX:'-100%',autoAlpha:0,ease:Power4.easeInOut})
                    gsap.to('.card-style',{delay:.5,duration:1,translateX:'0%',autoAlpha:1,ease:Power4.easeInOut})
                    gsap.to('.card',{delay:.5,"--card-color":"#E43A31",duration:1,ease:Power4.easeInOut})

    
            }})

            tl1.from(`.text-content-${this.currentSlide}-h1`,{duration:.5,autoAlpha:0,translateY:100,ease:Power4.easeOut})
            tl1.to(`.text-content-${this.currentSlide- 1}-p`,{duration:.5,autoAlpha:0,translateY:-40,ease:Power4.easeOut},'-=.5')
            tl1.from(`.text-content-${this.currentSlide}-p`,{duration:.5,autoAlpha:0,translateY:40,ease:Power4.easeOut},'-=.5')
            tl1.to(`.text-content-${this.currentSlide - 1}-btn`,{duration:.5,autoAlpha:0,translateY:-20,ease:Power4.easeOut},'-=.5')


       
        tl1.from(`.text-content-${this.currentSlide}-btn`,{duration:.5,autoAlpha:0,translateY:20,ease:Power4.easeOut,onComplete:()=>{
            document.querySelector('.slide-3').classList.remove('slide-out')
            document.querySelector('.slide-3').classList.remove('slide-active')
            setTimeout(() => {
                this.currentSlide = 5;
                this.initialize();
            }, this.slide_duration);
        }},'-=.5')



        }


                // Slide 4 Animation
                if(this.currentSlide==5){


                    tl1.to(`.text-content-${this.currentSlide - 1}-h1`,{duration:.5,autoAlpha:0,translateY:-100,ease:Power4.easeOut,onComplete:()=>{
                        document.querySelector('.slide-4').classList.add('slide-out')
                        document.querySelector('.slide-5').classList.add('slide-active')
            
                            gsap.to('.card-top img',{duration:.5,scale:1,ease:Power4.easeInOut});
                            gsap.to('.card-socials-bottom',{duration:.5,translateX:'0',autoAlpha:0.3,ease:Power4.easeInOut})
                            gsap.to('.card-contact-address',{duration:.5,autoAlpha:0.3,ease:Power4.easeInOut});
                            gsap.to('.card-main-top',{duration:1,translateX:"-20%",ease:Power4.easeInOut})
                            gsap.to('.card-style',{delay:.5,duration:1,translateX:'-100%',autoAlpha:0,ease:Power4.easeInOut})
                            gsap.to('.card',{delay:.5,"--card-color":"#2C29BA",duration:1,ease:Power4.easeInOut})
                            gsap.to('.card-share',{delay:.5,duration:1,translateX:'0%',autoAlpha:1,ease:Power4.easeInOut})

            
                    }})
        
                    tl1.from(`.text-content-${this.currentSlide}-h1`,{duration:.5,autoAlpha:0,translateY:100,ease:Power4.easeOut})
                    tl1.to(`.text-content-${this.currentSlide- 1}-p`,{duration:.5,autoAlpha:0,translateY:-40,ease:Power4.easeOut},'-=.5')
                    tl1.from(`.text-content-${this.currentSlide}-p`,{duration:.5,autoAlpha:0,translateY:40,ease:Power4.easeOut},'-=.5')
                    tl1.to(`.text-content-${this.currentSlide - 1}-btn`,{duration:.5,autoAlpha:0,translateY:-20,ease:Power4.easeOut},'-=.5')
        
        
               
                tl1.from(`.text-content-${this.currentSlide}-btn`,{duration:.5,autoAlpha:0,translateY:20,ease:Power4.easeOut,onComplete:()=>{
                    document.querySelector('.slide-4').classList.remove('slide-out')
                    document.querySelector('.slide-4').classList.remove('slide-active')
                    setTimeout(() => {
                        this.currentSlide = 1;
                        this.initialize();
                        this.alreadyRan = true;

                    }, this.slide_duration);
                }},'-=.5')
        
        
        
                }








        // this.tl.to('.card-personal',{duration:1,translateX:'0%',autoAlpha:1,ease:Expo.easeInOut},'-=.5')
    }



}

const slider = new Slider();