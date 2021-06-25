
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(ctx);
const background = new Image();
background.src = 'orange.jpg';

background.onload = function() {
    scaleToFill(this);
};

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    scaleToFill(background);
});

function scaleToFill(img){
    // get the scale
    var scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    // get the top left position of the image
    var x = (canvas.width / 2) - (img.width / 2) * scale;
    var y = (canvas.height / 2) - (img.height / 2) * scale;
    ctx.drawImage(background, x, y, img.width * scale, img.height * scale);
};


const navHome = document.getElementById('navHome')
const navProjects = document.getElementById('navProjects')
//navHome.classList.add('clicked');

navHome.addEventListener('click', () => {
    window.location="index.html";
});

navProjects.addEventListener('click', () => {
    window.location="projects.html";
});

windowLoc = document.location.href;
console.log(windowLoc);

let bodyId = document.body.id;
switch (bodyId) {
    case 'home':
        navHome.classList.add('clicked');
        navProjects.classList.remove('clicked');
        break;
    case 'projects':
        navHome.classList.remove('clicked');
        navProjects.classList.add('clicked');
        break;
}

