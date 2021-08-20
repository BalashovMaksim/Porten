const menuLink = document.querySelectorAll('.header__link[data-goto]');

if(menuLink.length > 0){
    menuLink.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick)
        
    })
    function onMenuLinkClick(e){
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top;
            const headerMenu = document.querySelector('.header__menu');
            const headerBurger = document.querySelector('.header__burger');
            const body = document.body

            window.scrollTo({
                top: gotoBlockValue,
                behavior:"smooth"
            });
            e.preventDefault();
            headerBurger.classList.remove('active');
            headerMenu.classList.remove('active');
            body.classList.remove('lock');
        }
    }
}

const search = document.querySelector('.header__input');

if(search){
    const logoSearch = document.querySelector('.fa-search')
    logoSearch.addEventListener('click', clickInput)
    function clickInput(e) {
        e.preventDefault();
        search.classList.toggle('active');
    }
}
AOS.init();