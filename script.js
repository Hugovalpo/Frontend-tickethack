
document.querySelector('#Search').addEventListener('click', function () {
	const trip = {
        
        Departure: document.querySelector('#registerDeparture').value,
        Arrival: document.querySelector('#registerArrival').value,
        Date: document.querySelector('#registerDate').value,
    };

	fetch('http://localhost:3000/index', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ trip }),
	}).then(response => response.json())
		.then(data => {
			if (data.result) {
                //si le voyage exist, ils s'affichent tous dans la card droite
				for( let i=0 ; i<data.length; i++){ 
                document.querySelector('#trips').innerHTML +=`
							<div class="trip">
                              <div class="info">${data.departure} > ${data.arrival}</div>
                              <div class="info">${data.time}</div>
                              <div class="info">${data.price}</div>
                              <button class="info" id="book">Book</button>
                            </div>`
				
						}

            }})




			// document.querySelector("#Search").addEventListener("click", function () {
			// 	const trip = {
			// 	  departure: document.querySelector("#registerDeparture").value,
			// 	  arrival: document.querySelector("#registerArrival").value,
			// 	  date: document.querySelector("#registerDate").value,
			// 	};
			  
			// 	fetch("http://localhost:3000/index", {
			// 	  method: "POST",
			// 	  headers: { "Content-Type": "application/json" },
			// 	  body: JSON.stringify(trip),
			// 	})
			// 	  .then((response) => response.json())
			// 	  .then((data) => {
			// 		//si le voyage existe, ils s'affichent tous dans la card droite
			// 		if (data.result) {
			// 		  for (let i = 0; i < data.voyages.length; i++) {
			// 			document.querySelector("#tripList").innerHTML += tripList.style.background = 'none'
			// 			  <div class="tripContainer">
			// 			  <p class="name">${data.voyages[i].departure}</p>
			// 			  <p class="description">${data.voyages[i].arrival}</p>
			// 			  <button class="deleteTrip" id="${data.voyages[i].departure}">Delete</button>
			// 		  </div>;
			// 		  }