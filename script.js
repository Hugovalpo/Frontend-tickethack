
document.querySelector('#Search').addEventListener('click', function () {
	const trip = {
        
        Departure: document.querySelector('#registerDeparture').value,
        Arrival: document.querySelector('#registerArrival').value,
        Date: document.querySelector('#registerDate').value,
    };

	fetch('http://localhost:3000/trips', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ Departure }),
	}).then(response => response.json())
		.then(data => {
			if (data.result) {
                //si le voyage exist, ils s'affichent tous dans la card droite
                document.querySelector('#triplist').innerHTML += 



            }