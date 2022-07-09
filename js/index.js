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

tl.to('.card-top img',{duration:.5,scale:1.45,ease:Expo.easeInOut});
tl.to('.card-socials-bottom',{duration:.5,translateX:'-20%',ease:Expo.easeInOut},'-=.5')
tl.to('.card-contact-address',{duration:.5,translateX:'20%',ease:Expo.easeInOut},'-=.5')