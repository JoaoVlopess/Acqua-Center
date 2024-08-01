document.querySelectorAll('.pointer').forEach((point) =>{
    point.addEventListener('click', nextBanner);
})

function nextBanner(clickedPoint){
    let pointData = parseInt(clickedPoint.target.getAttribute('data-item'))
    let sliders = document.querySelector('.sliders')


    console.log(clickedPoint)
    console.log(pointData)
    console.log(sliders)

    switch(pointData){
        case 0:
            sliders.style.marginLeft = '0vw'
            break
        case 1:
            sliders.style.marginLeft = '-107vw'
            break
        case 2:
            sliders.style.marginLeft = '-213vw'
            break;
    }
    for(let i = 0; i<3;i++){
        let point = document.querySelector(`.pointer[data-item="${i}"]`)
        console.log(point)
        if(i === pointData){
            point.classList.add('active')
        }else if(i !== pointData){
            point.classList.remove('active')
        }     
    }

}