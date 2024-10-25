document.addEventListener('DOMContentLoaded', () => {
    const element1 = document.getElementById('services-1');
        const element2 = document.getElementById('services-2');
        const element3 = document.getElementById('services-3');
        const divToShow1 = document.getElementById('divToShow1');
        const divToShow2 = document.getElementById('divToShow2');
        const divToShow3 = document.getElementById('divToShow3');

    element1.addEventListener('click', () => {
        divToShow1.classList.add('flex');
        divToShow1.classList.remove('hidden')
        divToShow2.classList.remove('flex');
        divToShow2.classList.add('hidden')
        divToShow3.classList.remove('flex');
        divToShow3.classList.add('hidden')

});

    element2.addEventListener('click', () => {
        divToShow1.classList.remove('flex');
        divToShow1.classList.add('hidden')
        divToShow2.classList.add('flex');
        divToShow2.classList.remove('hidden')
        divToShow3.classList.remove('flex');
        divToShow3.classList.add('hidden')
});

    element3.addEventListener('click', () => {
        divToShow1.classList.remove('flex');
        divToShow1.classList.add('hidden');
        divToShow2.classList.add('hidden');
        divToShow2.classList.remove('flex');
        divToShow3.classList.remove('hidden');
        divToShow3.classList.add('flex')
});
    
});

