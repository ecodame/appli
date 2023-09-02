window.onload = () =>{
    const tabs = document.querySelectorAll('.tab');
    const contenues = document.querySelectorAll('.contenue');
    let active = document.querySelector('.active');
    let target = active.dataset.target;

    affiche();
    document.querySelector(target).classList.add('show')
    function affiche(){
        for(let tab of tabs){
            if( tab !== active){
              tab.addEventListener("click",tabclic) 
              tab.classList.remove('active');
            }

            for(let contenue  of contenues){
                contenue.classList.remove('show')

            }
        }


    }

    function tabclic(){
        target = this.dataset.target;
        active = this;
        this.classList.add('active')
        this.removeEventListener('click',tabclic)

        affiche()
        document.querySelector(target).classList.add('show')

       
    }a
}


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
