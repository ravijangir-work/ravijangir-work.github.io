// Activating Menus on scroll
const sections = document.querySelectorAll('section');
const index_menu = document.querySelectorAll('main .index-menu .menu a');

console.log('test -----',location);

let hash = location.hash;
if(hash){
    if(document.querySelector(hash)){
        scrollToHash(hash);
    }
}

window.addEventListener('scroll',()=>{
    let current ='';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight/5 )) {
            current = section.getAttribute('id');
        }
    })

    index_menu.forEach(a => {
        a.classList.remove('active');
        if(a.classList.contains(current)){
            a.classList.add('active');
        }
    })
})


// Smooth Scroll
$('#nav-bar a, #index-menu a').on('click', function (e){
    if(document.querySelector(this.hash)){
    if(this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

   
            scrollToHash(hash);
        

    }
}
});


function scrollToHash(hash) {
    $('html, body').animate(
        {
            scrollTop: $(hash).offset().top - 64,
        },
        800
    );
}

