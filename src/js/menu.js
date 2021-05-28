let header = document.querySelector('.header');
let menu = document.getElementById('menuh');
let barramenu = document.getElementById('menu_lateral');
let ppal = document.querySelector('.main__container__ppal');
let main = document.querySelector('#ppal')

const ocultaSideBar = () =>{
    if (screen.width>=1280){
        barramenu.classList.remove('active')
        document.body.classList.remove('opacity')
        header.classList.toggle('active_header')
        barramenu.classList.toggle('minimizar_sidebar')
        ppal.classList.toggle('main__max')
        main.classList.toggle('padding_main')
    }
    else{
        barramenu.classList.toggle('active')
        document.body.classList.toggle('opacity')
    }

}

const begin = () => {
    if(screen.width >= 1280){
        barramenu.classList.remove('active');
        document.body.classList.remove('opacity');
        header.classList.remove('active_header')
    }
}


menu.addEventListener('click',ocultaSideBar);

begin();

