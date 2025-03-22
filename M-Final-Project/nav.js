const menubar =document.getElementById('menubar');
const navMid =document.getElementById('navList')

navMid.style.left= '-500px'
menubar.addEventListener('click',showandHidden)

function showandHidden() {
    if(navMid.style.left == '-500px'){
     
        
        navMid.style.left = '0px'
    }else{
        navMid.style.left = '-500px'
        
        
    }

}