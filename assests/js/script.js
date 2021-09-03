let totalSlide = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;
let sliderWidth = document.querySelector('.slider--width');
sliderWidth.style.width = `calc(100vw * ${totalSlide})`;
document.querySelector('.slider--controls').style.height = `
${document.querySelector('.slider').clientHeight}px
`;

const upadateMargin = () => {
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;

    let newMargin = (currentSlide * sliderItemWidth);
    sliderWidth.style.marginLeft = -newMargin + 'px';

}


let btn = document.querySelectorAll('.slider--control');
let fucnBtn = {
    voltar() {
        clearInterval(stopInterval);
        stopInterval = setInterval(fucnBtn.avancar, 5000);
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = totalSlide - 1;
        }
        upadateMargin();
    },
    avancar() {
        clearInterval(stopInterval);
        stopInterval = setInterval(fucnBtn.avancar, 5000);

        currentSlide++;
        if (currentSlide > (totalSlide - 1)) {
            currentSlide = 0;
        }
        upadateMargin();
    }

}
btn.forEach(item => {

    item.addEventListener('click', e => {
        let event = e.target.innerText;
        let marginMove = fucnBtn[event];
        console.log(marginMove);
        marginMove();
    })
});

let stopInterval = setInterval(fucnBtn.avancar, 5000);