window.addEventListener('DOMContentLoaded', function() {
    'use strict'
    let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(start) {
        for(let i = start; i < tabContent.length; ++i){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);
    
    function showTabContent(index) {
        if(tabContent[index].classList.contains('hide')){
            tabContent[index].classList.remove('hide');
            tabContent[index].classList.add('show');
        }
    }

    info.addEventListener('click', function(e){
        if(e.target?.matches('.info-header-tab')){
            for(let i = 0; i < tab.length; ++i){
                if(tab[i] == e.target){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });



    const deadline = '2022-07-31';

    function getRemain(endTime) {
        const total = Date.parse(endTime) - Date.parse(new Date());
        const seconds = Math.floor(total / 1000) % 60;
        const minutes = Math.floor(total / 1000 / 60) % 60;
        const hours = Math.floor(total / 1000 / 60 / 60) % 24;
        return {
            total,
            seconds,
            minutes,
            hours,
        }
    }

    function updateClock(id, endTime){
        const timerElement = document.querySelector('#'+id);
        const seconds = timerElement.querySelector('.seconds'),
              minutes = timerElement.querySelector('.minutes'),
              hours = timerElement.querySelector('.hours');
        const timer = setInterval(setTime, 1000);

        function setTime () {
            const remains = getRemain(endTime);
            function addZero(num) {
                return num <= 9 ? '0'+num : num;
            };
            hours.textContent = addZero(remains.hours);
            minutes.textContent = addZero(remains.minutes);
            seconds.textContent = addZero(remains.seconds);
            if (remains.total <= 0) {
                clearInterval(timer);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    updateClock('timer', deadline);


    const more = document.querySelector('.more'),
          close = document.querySelector('.popup-close'),
          modal = document.querySelector('.overlay');

    function showModal() {
        modal.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }

    more.addEventListener('click', showModal);

    close.addEventListener('click', function() {
        modal.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    tabContent.forEach(tab => {
        const moreBtn = tab.querySelector('.description-btn');
        moreBtn.addEventListener('click', showModal)
    })
})