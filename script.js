'use strict';

const btnScrollTo =document.querySelector('.btn--scroll-to');
const section1 =document.querySelector('#section--1')

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e){
    e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


 btnScrollTo.addEventListener('click',function(e){
     const s1coords =section1.getBoundingClientRect();
     console.log(s1coords);

     console.log(e.target.getBoundingClientRect());

     console.log('current scroll (x/y)',window.
     pageXoffset,pageYOffset);



    //  page navigationb
    // document.querySelectorAll('.nav__link').forEach(function(el){
    //     el.addEventListener('click',function(e){
    //       e.preventDefault();
    //       const id = this.getAttribute('href')
    //         console.log(id)
    //         document.querySelector(id).scrollIntoView({behavior:'smooth'});
    //     })
    // })

    document.querySelector('.nav__links').addEventListener('click',function(e){
      console.log(e.target)
    }) 
    // matching strategy
    if(e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');

      console.log(id);
   document.querySelector(id).scrollIntoView({behavior:'smooth'})
 }
  })


// SELCTING ELEMEBS ARE UNTHE  THE CONDITION SIN THE 

// console.log(document.documentElement);
//  const header =document.querySelector('.header');
// document.querySelector('.section');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('#section--1')
// const  allButtons = document.getElementsByTagName('button')
// console.log(allButtons)

// // CREATING AND INSERTING ELEMENT S

// const message = document.createElement('div')
// message.classList.add('cookie-message');

// // message.textContent ='we use cookies for improved functionaliyty'
// message.innerHTML =
// 'we use cookies for improved functionaliyty. <button class ="btn btn--close-cookie"> Got it !</button>';

// header.append(message);
// // header.append(message);

// header.after(message);

// // delete elemts
// document.querySelector('.btn--close-cookie')?.addEventListener('click',function() {
//     //    message.remove()
//     message.parentElement.removeChild(message)

// })

// // styles
// message.style.backgroundColor ='#37383d';
// message.style.width ='20%'
// console.log(message.style.height)
// console.log(getComputedStyle(message).color)
// console.log(getComputedStyle(message).height);

// message.style.height = Number.parseFloat( getComputedStyle(message).height, 10) + 40 + 'px';

// document.documentElement.style.setProperty('--color-primary','orangered')


// // attributes
// const logo =document.querySelector('.nav__logo')
// console.log(logo.src)
// console.log(logo.alt)
// console.log(logo.designer)
// console.log(logo.className)

// logo.alt ='beautiful minimaliast logo'
// console.log(logo.designer)
// console.log(logo.getAttribute('designer'))

// console.log(logo.src)
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// // data attributes
// console.log(logo.dataset.versionNumber);

// // classes
// logo.classList.add()
// logo.classList.remove('c');
// logo.classList.contains('c')

// const btnScrollTo =document.querySelector('.btn--scroll-to');
// const section1 =document.querySelector('#section--1')

// btnScrollTo.addEventListener('click',function(e){
//     const s1coords =section1.getBoundingClientRect();
//     console.log(s1coords);

//     console.log(e.target.getBoundingClientRect());

//     console.log('current scroll (x/y)',window.
//     pageXoffset,pageYOffset);

//     console.log('height/width viewport', document.documentElement.clientHeight,
//     document.documentElement.clientWidth);

//     // scrolling
//     // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYoffset)


//     // window.scrollTo({
//     //  left:s1coords.left + window.pageXOffset,
//     //  top : s1coords.top + window.pageYoffset,
//     //  behaviour :'smoooth',
//     // })

//     section1.scrollIntoView({behavior:'smooth'})
// })

// const h1 =document.querySelector('h1')
// h1.addEventListener('mouseenter',function(e){
//     alert('addEventListner:Great ! you are in heading')
// })
// h1.onmouseenter =function(e){
//     alert('addEventListner:Greathyjy ! you are in heading')
// }

// setTimeout(()=>h1?.removeEventListener('mouseenter',alertH1),3000)

// const randomInt =(min,max) => Math.floor(Math.random() * (max - min +1)+ min);
// const randomColor =() => `rgb(${randomInt(0, 255)} , ${randomInt(0, 255)} ,${randomInt(0, 255)} )`
// console.log(randomColor(0,255))

// document.querySelector('.nav__link').addEventListener('click',function(e){
//     this.style.backgroundColor =randomColor()
//     console.log('LINK',e.currentTarget === this)

//     // stop propagation
//     // e.stopPropagation()
// })



// document.querySelector('.nav__links').addEventListener('click',function(e){
//     this.style.backgroundColor =randomColor();
//     console.log('container',e.target,e.currentTarget)
// })



// document.querySelector('.nav').addEventListener('click',function(e){
//     console.log('nav',e.target,e.currentTarget)
//     this.style.backgroundColor =randomColor();
// })

// dom traversing
const h1 = document.querySelector('h1')
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
h1.firstElementChild.style.color ='green'
h1.lastElementChild.style.color ='orangered'

// goig uoward 


// console.log(h1.parentNode)

// h1.closest('.header').style.background ='var(--gradient-primary)';

// tabbed component 

const  tabs = document.querySelectorAll('.operations__tab');
const tabsContainer =document.querySelector('.operations__tab-conatiner')
const tabsContent = document.querySelectorAll('.operations__content')

// tabs.forEach(t => t.addEventListener('click', ()=>console.log('tab')))


tabsContainer.addEventListener('click', function(e) {
   const clicked =  e.target.closest('.operations__tab');
   console.log(clicked);

   if (!clicked) return  ;

  //  acti ve atb
   tabs.forEach( t => t.classList.remove
    ('operations__tab--active'))
    clicked.classList.add('operations__tab--active')

  //  active contwnt area 
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
  tabsContent.forEach( c => c.classList.remove('.operations__content--active'))
});

// menu fade animation 
// const handleHover = function(e,opacity){

//   if(e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelector('.nav__link');
//     const logo =link.closest('.nav').querySelector('img');

//     siblings.forEach(el =>{
//       if(el ! == link ) el.style.opacity = opacity;
//     })
//     logo.style.opacity = 0.5; 


//   }

// });

// nav.addEventListner('mouseout', handleHover);

// sticky navigation
// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);
// })

// const obsCallback =function (entries,observer)r
//   entries.forEach(entry =>{
//     console.log(entry)
//   })

// }

// const obsOptions = {
//   root : null,
//   threshold : [0,0.2],
// }
// const observer = new IntersectionObserver();
// observer.observe(section1);


const header =document.querySelector('.header');

const stickyNav = function(entries){
    const [entry] = entries[0];
    console.log(entries)
    if (!entry.isIntersctiong) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
}
const headerObserver = new IntersectionObserver(stickyNav, {
  root:null,
  threshold :0
});
headerObserver.observe(header);


// reveal sections

const  allSections =document.querySelectorAll('.section')
const revealSection = function (entries,observer){
     
}
const  sectionObserver = new IntersectionObserver( revealSection,{
  root : null,
  threshold: 0.15
});
  allSections.forEach(function(section){


  
  section.classList.add('section--hidden')

})

const imgTargets =document.querySelectorAll('img [data-src]')
console.log(imgTargets);

// slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left')
const btnRight = document.querySelector('.slider__btn--right')
let curSlide = 0;
const slider =document.querySelector('.slider');
slider.style.transform ='scale(0.4) translateX (-800px)';
slider.style.overflow ='visible';

slides.forEach((s,i) => (s.style.transform = 
`translateX( ${ 100 * i}%)`));


// next slide 

btnRight?.addEventListener('click',function (){
  curSlide ++;
  slides.forEach((s, i) =>(s.style.transform = `translateX(${100 * i}%)`))
})

 const 

// document.addEventListener('DOMContentLoaded',
// function (e) {
  
// console.log('HTML parsed and dom tree built',e)

//   });

  // window.addEventListener('load', function(e) {
  //   console.log('page fully loaded', e );
  // });
  // window.addEventListener('beforeunload',function(e){
  //   e.preventDefault();
  //   console.log(e);
  //   e.returnValue =  '';

  // })



  const Person = function (firstName, birthYear) {
    console.log(this);
   };

  new Person('Jonas',1991);


















