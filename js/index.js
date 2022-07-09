import gsap from 'gsap'

class Menu{

    constructor(){
        this.menuIcon = document.querySelector('.menu-icon');
        this.nav = document.querySelector('nav');
        this.overlay = document.querySelector('.menu-overlay');
        this.tl = gsap.timeline({paused:true});

        this.initialize();
    }

    initialize(){
        let self = this;
        this.menuIcon.addEventListener('click',(e)=>{
            this.open()
        })
    }

    open(){
        gsap.set(this.overlay,{duration:1000,display:'block',ease:'power3.easeInOut'})
        gsap.to(this.nav,{duration:300,autoAlpha:1})
        console.log("opened")
        // gsap.to('body',{duration:1000,autoAlpha:0})
        console.log(this.tl)
        this.tl.play();

        
    }

    close(){

    }



}

const menu = new Menu();