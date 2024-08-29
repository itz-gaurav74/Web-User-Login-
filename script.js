const hamburger = document.querySelector('.hamburger');
const navLists = document.querySelector('.lists')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLists.classList.toggle('active');
});


const navItem = document.querySelectorAll('.lists li a');

navItem.forEach(item => {
    item.addEventListener('click', () => {
        setTimeout(() => {
            hamburger.click();
        },1000)
    })
})



const logBtn = document.querySelector('.login-btn')

logBtn.addEventListener('click', () => {
    document.body.classList.toggle('show-popup')
})




const links = document.querySelectorAll('.bottom-link a');
const popup = document.querySelector('.popup')

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(link.id);
        if (link.id === 'signup-link') {
            popup.classList.add('show-signup')
            console.log('add');
        } else {
            popup.classList.remove('show-signup')
            console.log('remove');
        }
    })
   

    // popup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");

})



const clsBtn = document.querySelector('#cls-btn');

clsBtn.addEventListener('click', () => {
    logBtn.click();
})
