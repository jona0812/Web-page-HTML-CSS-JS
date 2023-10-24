(function() {
    
    const openButton=document.querySelector('.nav_menu');
    const menu= document.querySelector('.nav_link');
    const cerrarMenu= document.querySelector('.nav_close');


    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav_link-show');
        // alert('Uated me acabó de dar click');
    });

    cerrarMenu.addEventListener('click', () => {
        // alert('Uated me acabó de dar click');
        
        menu.classList.remove('nav_link-show');

    });
    // menu.classlist.toogle podría funcionar pero solo es para agregar si no la tiene y para quitar la clase si la tiene

})();