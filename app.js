const showcase = document.getElementById('showcase');
const container = document.getElementById('container');

const d6 = document.getElementById('d6');
const d6Angles = [[0, 0], [0, 90], [90, 0], [270, 0], [0, 270], [0, 180]]


const randomize = function () {
    const randomAngle = d6Angles[Math.floor(Math.random() * 6)];
    const [x, y] = randomAngle;
    d6.style.animation = 'Roll 1.5s linear';
    d6.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
}

const shrink = function (element) {
    element.classList.add('miniature');
    showcase.append(element);
    element.style.transform = '';
    element.removeEventListener('click', randomize);
    element.addEventListener('click', () => grow(element));
}

const grow = function (element) {
    element.classList.remove('miniature');
    container.append(element);
    element.addEventListener('click', randomize);
    element.style.animation = 'PopIn 0.5s linear';
}


d6.addEventListener('click', randomize);

d6.addEventListener('animationend', () => {
    d6.style.animation = '';
})

shrink(d6);