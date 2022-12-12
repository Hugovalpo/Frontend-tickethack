
document.querySelector('#Search').addEventListener('click', function () {
	
        
       const departure= document.querySelector('#registerDeparture').value
       const arrival= document.querySelector('#registerArrival').value
       const date= document.querySelector('#registerDate').value


	fetch(`http://localhost:3000/?departure=${departure}&arrival=${arrival}&date=${date}`)	
	.then(response => response.json())
		.then(data => {
			  if (data.result){ 
						for( let i=0 ; i<data.voyages.length ; i++){ 
                			document.querySelector('#trips').innerHTML +=`
							<div class="trip">
                              <div class="info">${data.voyages[i].departure} > ${data.voyages[i].arrival}</div>
                              <div class="info" id="date">${data.voyages[i].date.slice(12,16)}</div>
                              <div class="info">${data.voyages[i].price}€</div>
                              <button class="info" id="book">Book</button>
                            </div>`
				
								}
					} else {
						console.log('rien')
					}
				})
			})


document.querySelector('#book').addEventListener('click',function() {

	const trip = document.querySelector('#date').value

		
		



})
	




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