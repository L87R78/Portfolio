//Select Dom Items 
const menuBtn = $('.menu_btn');
const menu = $('.menu');
const menuBranding = $('.menu_branding');
const menuNav = $('.menu_nav');
const navItems = $('.nav_item');

//Set Initial State Of Menu
let showMenu = false;
menuBtn.on('click', toggleMenu)

function toggleMenu(){
    if(!showMenu){
        menuBtn.addClass('close')
        menu.addClass('show')
        menuBranding.addClass('show')
        menuNav.addClass('show')
        navItems.addClass('show')
        showMenu = true;
    }else{
        menuBtn.removeClass('close')
        menu.removeClass('show')
        menuBranding.removeClass('show')
        menuNav.removeClass('show')
        navItems.removeClass('show')
        showMenu = false;
    }
}