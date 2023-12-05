
function skills() {
    const skill = document.querySelector(".slider_skills");
    const list = document.querySelectorAll(".slider_skills img")
    const images = Array.from(list).map(element => element.getAttribute("src"));
    let count = 0;
    let html = `<img src="${images [count]}" alt="hard skill">`;
    skill.innerHTML = html;
    const prev = document.querySelector('.btn_prev');
    const next = document.querySelector('.btn_next');
    prev.addEventListener('click', () => {
        clearInterval(interval);
        if (0 < count) {
            count--;
        } else {
            count = images.length-1
        }
        html = `<img src="${images [count]}" alt="hard skill">`;
        skill.innerHTML = html;
    });
    next.addEventListener('click', () => {
        clearInterval(interval);
        if (count < images.length-1){
            count++;
        } else {
            count = 0;
        }
        html = `<img src="${images [count]}" alt="hard skill">`;
        skill.innerHTML = html;
    });
    const interval = setInterval(() => {
        if (count < images.length-1){
            count++;
        } else {
            count = 0;
        }
        html = `<img src="${images [count]}" alt="hard skill">`;
        skill.innerHTML = html;
    }, 2000);
}
function mode() {
    const body = document.querySelector('body')
    const btn = document.querySelector('.icon_mode');
    const icon = document.querySelector('.icon_mode ion-icon');
    const iframe = document.querySelector('.header iframe');
    const link = iframe.contentDocument.querySelector('link');
    btn.addEventListener('click', () => {
        body.classList.toggle('dark')
        if (icon.name==='sunny-sharp') {
            icon.name = 'moon-sharp';
        }
        else {
            icon.name = 'sunny-sharp';
        }
        if (link.getAttribute('href')==='./css/dark.css') {
            link.href = './css/sunny.css';
        } else {
            link.href = './css/dark.css';
        }
    });
}
function sound() {
    const btn = document.querySelector('.icon_volume');
    const icon = document.querySelector('.icon_volume ion-icon');
    const audio = document.querySelector('.icon_volume audio');
    btn.addEventListener('click', () => {
        if (icon.name==='volume-mute-sharp') {
            icon.name = 'volume-high-sharp'
        } else {
            icon.name = 'volume-mute-sharp'
        }
        if (audio.paused) {
            audio.play(); 
        } else {
            audio.pause();
        }
    })
}
function main () {
    skills();
    mode();
    sound();
}
main();