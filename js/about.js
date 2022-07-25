(function(){
    const titleAbouts = [...document.querySelectorAll('.about__title')];
    console.log(titleAbouts)

    titleAbouts.forEach(about =>{
            about.addEventListener('click', ()=>{
            let height = 0;
            let answer = about.nextElementSibling;
            let addPadding = about.parentElement.parentElement;

            addPadding.classList.toggle('about__padding--add');
            about.children[0].classList.toggle('about__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();