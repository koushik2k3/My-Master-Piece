var lst = document.querySelectorAll('.drum');
for (var i=0;i<lst.length;i++){
    lst[i].addEventListener('click',handleClick);
    }

function handleClick(){
    var btnInnerHTML = this.innerHTML;
    makeSound(btnInnerHTML);
    animate(btnInnerHTML);


}
function handlePress(e){
    makeSound(e.key);
    animate(e.key);

}

function makeSound(key){
    switch (key) {
        case 'w':
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log(key);
            break;
    }
}

document.addEventListener("keydown",function(e){makeSound(e.key),animate(e.key)});

function animate(key){
    document.querySelector(`.${key}`).classList.add('pressed');
    setTimeout(function(){
        document.querySelector(`.${key}`).classList.remove('pressed');
    },100)
}