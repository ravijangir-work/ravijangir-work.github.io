// Activating Menus on scroll
const sections = document.querySelectorAll('section');
const index_menu = document.querySelectorAll('main .index-menu .menu a');

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
    if(this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 64,
            },
            800
        );
    }
});














