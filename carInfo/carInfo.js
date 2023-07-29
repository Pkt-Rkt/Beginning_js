document.addEventListener("DOMContentLoaded", function () {
    fetch('carInfo.json')
        .then(response => response.json())
        .then(data => {
            const carList = document.getElementById('carList');
            const sportsCars = data.sports_cars;
            let carItems = '<ul>';
            sportsCars.forEach(car => {
                carItems += `<li>${car.make} ${car.model} - ${car.year}</li>`;
            });
            carItems += '</ul>';
            carList.innerHTML = carItems;
        })
        .catch(error => {
            console.error('Error fetching JSON data:', error);
        });
});
