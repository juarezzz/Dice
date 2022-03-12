class Dice {
    constructor(element, angles) {
        this.element = element;
        this.element.angles = angles; //Já que element é um objeto dá pra armazenar valores dentro dele.
        this.element.addEventListener('click', this.randomize);
        this.element.addEventListener('click', this.changeDice);
        this.element.addEventListener('animationend', this.resetAnimation);
    }

    //Como esses métodos vão ser chamados por um evento o 'this' se refere ao alvo do evento, 
    //nesse caso o element, e não à instância da classe.
    
    randomize() {
        if (this.classList.contains('miniature')) return;
        const randomAngle = this.angles[Math.floor(Math.random() * this.angles.length)];
        const [x, y] = randomAngle;
        this.style.animation = 'Roll 1.5s linear';
        this.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
    }

    changeDice() {
        if (!this.classList.contains('miniature')) return;
        const currentDice = container.firstElementChild; 
        if (currentDice) {
            currentDice.classList.add('miniature');
            currentDice.style.transform = '';
            currentDice.style.animation = '';
            showcase.append(currentDice);
        }
        this.classList.remove('miniature');
        container.append(this);
        this.style.animation = 'PopIn 0.5s linear';
    }

    resetAnimation() {
        this.style.animation = '';
    }
}

const showcase = document.getElementById('showcase');
const container = document.getElementById('container');

const d6 = document.getElementById('d6');
const d6Angles = [[0, 0], [0, 90], [90, 0], [270, 0], [0, 270], [0, 180]];
D6 = new Dice(d6, d6Angles);

const d4 = document.getElementById('d4');
const d4Angles = [[0, 0], [95, 180], [0, 120], [0, 240]];

D4 = new Dice(d4, d4Angles);