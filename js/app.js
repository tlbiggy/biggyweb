const navslide = () => 
{
    const menuicon = document.querySelector ('.menuicon');
    const nav = document.querySelector ('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');
    
    menuicon.addEventListener('click',()=>
    {
        //Toggle Nav
        nav.classList.toggle('nav-active');
        //Animation
    navlinks.forEach((link, index)=>
        {
        if(link.style.animation)
        {
            link.style.animation = '';
        } 
        else   {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.3}s`
               }
        });
        //menuanimation
        menuicon.classList.toggle('toggle');
    });
}
navslide();