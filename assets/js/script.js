document.querySelectorAll('.pointer').forEach((point) =>{
    point.addEventListener('click', nextBanner);
})


function nextBanner(clickedPoint){
    let pointData = parseInt(clickedPoint.target.getAttribute('data-item'));
    let sliders = document.querySelector('.sliders');

    switch(pointData){
        case 0:
            sliders.style.marginLeft = '0vw';
            break
        case 1:
            sliders.style.marginLeft = '-100vw';
            break
        case 2:
            sliders.style.marginLeft = '-200vw';
            break;
    }
    for(let i = 0; i<3;i++){
        let point = document.querySelector(`.pointer[data-item="${i}"]`);
        console.log(point);
        if(i === pointData){
            point.classList.add('active');
        }else if(i !== pointData){
            point.classList.remove('active');
        }     
    }

}


const carousel = document.querySelector(".carousel");
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;


let isDragging = false, startX, startScrollLeft;


function dragging(e){
    if(!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX)
}

function dragStart(e){
    isDragging = true;
    carousel.classList.add("dragging")

    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;

}

function dragStop(){
    isDragging = false;
    carousel.classList.remove("dragging")
}


arrowBtns.forEach(btn =>{
    btn.addEventListener("click", () =>{
        carousel.scrollLeft += btn.id === "left" ? - firstCardWidth : firstCardWidth;
    })
})
const menuImg = document.querySelector(".img_menu")
const menuBar = document.querySelector(".header_menu")
menuImg.addEventListener('click', OCBar);
var barOn = 0;

function OCBar(){
    if(barOn == 0){
        menuBar.style.display = 'block'
        barOn = 1
    }else{
        menuBar.style.display = 'none'
        barOn = 0
    }
}

