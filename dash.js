// profile menu

let user = document.querySelector('#user');
let profile_menu =  document.querySelector('#profile_menu');

user.addEventListener('click', () =>{
    profile_menu.classList.toggle('hide');
    // console.log("Hello")
    console.log(this)
})


//show side menu

let menu_bar = document.querySelector('#tog_menu');
let side_bar = document.querySelector('#side_menu');

menu_bar.addEventListener('click', function(){
    side_bar.classList.toggle('display');
})

side_bar.addEventListener('click',() =>{
    this.classList.remove('display');
})

