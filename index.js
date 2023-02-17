const navbar = document.querySelector('.navbar')
// console.log(navbar);

const bottomContainer = document.querySelector('.bottom-container');
console.log(bottomContainer);

window.addEventListener('scroll', () => {  //targetting scrolling , can be done in window/document

    // console.log('scrolled');

    //need to record the scrolling point so that at that stipulated point we can make sure that the navbar should be white.

    console.log(window.scrollY) //scrolling in y direction

    if (window.scrollY > bottomContainer.offsetTop - navbar.offsetHeight - 50) {

        //50 is the margin-top of very first para and scrolly - neglecting navbar - top margin of text


        //at that time we are adding active class in the classlist of navbar which has property in css file

        navbar.classList.add('active');
    }
    else{

        navbar.classList.remove('active');
    }
})