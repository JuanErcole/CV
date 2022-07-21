(function(){
    
    const sliders = [...document.querySelectorAll('.certificados__body')],
          buttonNext = document.querySelector('#next'),
          buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>changePosition(1));

    buttonBefore.addEventListener('click', ()=>changePosition(-1));

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.certificados__body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;


        sliders[Number(currentTestimony)-1].classList.remove('certificados__body--show');
        
        if(value === sliders.length+1 || value === 0){

            value = value === 0 ? sliders.length  : 1;

        }

        sliders[value-1].classList.add('certificados__body--show');

    }

})();