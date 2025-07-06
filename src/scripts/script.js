//Animação do scroll do mouse - direita
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach ( (entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else{
            entry.target.classList.remove('show')
        }
    })
})
let cards = document.querySelectorAll('.hidden')
cards.forEach((element) => myObserver.observe(element) )

//Animação do scroll do mouse - esquerda
const myObserver2 = new IntersectionObserver((ent) => {
    ent.forEach ( (en) =>{
        if(en.isIntersecting){
            en.target.classList.add('show2')
        }
        else{
            en.target.classList.remove('show2')
        }
    })
})
let cards2 = document.querySelectorAll('.hidden2')
cards2.forEach((element) => myObserver2.observe(element) )

//Animação do scroll do mouse - opacidade
const myObserver3 = new IntersectionObserver((entt) => {
    entt.forEach ( (enn) =>{
        if(enn.isIntersecting){
            enn.target.classList.add('show3')
        }
        else{
            enn.target.classList.remove('show3')
        }
    })
})
let cards3 = document.querySelectorAll('.hidden3')
cards3.forEach((element) => myObserver3.observe(element) )


//Animação mouse - baixo 
const myObserver4 = new IntersectionObserver((enter) => {
    enter.forEach ( (ente) =>{
        if(ente.isIntersecting){
            ente.target.classList.add('show4')
        }
        else{
            ente.target.classList.remove('show4')
        }
    })
})
let cards4 = document.querySelectorAll('.hidden4')
cards4.forEach((element) => myObserver4.observe(element) )



//Nav
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const id = entry.target.id;

        const navLink = document.querySelector(`.navbar a[href="#${id}"]`);

        if(entry.isIntersecting){
            navLink.classList.add("active");
        } else{
            navLink.classList.remove("active");
        }
    });
}, {
    threshold: 0.4,
});

sections.forEach((section) => {
    observer.observe(section);
})



//ROLAGEM SUAVE 
const menuLinks = document.querySelectorAll('.navbar a[href^="#"]');

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

// function nativeScroll(distanceFromTheTop) {
//   window.scroll({
//     top: distanceFromTheTop,
//     behavior: "smooth",
//   });
// }

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
  smoothScrollTo(0, distanceFromTheTop);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 300;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}


function lazyLoadComponent() {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;

       
        target.classList.add('visible');

       
        observer.unobserve(target);
      }
    });
  }, {
    root: null,
    rootMargin: '90px',
    threshold: 0.1 
  });

  // Selecione todos os elementos a serem observados
  const elements = document.querySelectorAll('.lazy-component');
  elements.forEach(element => observer.observe(element));
}

document.addEventListener('DOMContentLoaded', () => {
  lazyLoadComponent();
});
