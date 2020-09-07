// Write your JavaScript code here!

window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
      let pilotName = document.getElementById("pilotName");
      let copilotname = document.getElementById("copilotName");
      let fuelLevel = document.getElementById("fuelLevel");
      let cargoMass = document.getElementById("cargoMass");
      
      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus")
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");

      if(!pilotName.value || !copilotname.value || !fuelLevel.value || !cargoMass.value){
         alert("All fields are required");
         event.preventDefault();
      }else if(isNaN(pilotName.value)===false|| isNaN(copilotname.value) === false){
         alert("Make sure to enter valid information for each field");
         event.preventDefault();
      }else if(isNaN(fuelLevel.value)){
            alert("Make sure to enter valid information for each field");
            event.preventDefault();
      }else if(isNaN(cargoMass.value)){
         alert("Make sure to enter valid information for each field");
         event.preventDefault();
      } else {

         if(fuelLevel.value<10000 && cargoMass.value > 10000){
            faultyItems.style.visibility = 'visible';
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilotname.value} is ready for launch`;
            fuelStatus.innerHTML = `Fuel level is too low to launch`
            cargoStatus.innerHTML = `Cargo mass is too large to launch`
            // event.preventDefault();
         }
         else if(cargoMass.value>10000){
            faultyItems.style.visibility = 'visible';
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilotname.value} is ready for launch`;
            fuelStatus.innerHTML = `Fuel level is ready to launch`
            cargoStatus.innerHTML = `Cargo mass is too large to launch`
            // event.preventDefault();
         }
         else if(fuelLevel.value<10000){
            faultyItems.style.visibility = 'visible';
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilotname.value} is ready for launch`;
            fuelStatus.innerHTML = `Fuel level is too low to launch`
            cargoStatus.innerHTML = `Cargo mass is ready to launch`
            // event.preventDefault();

         } else{
            launchStatus.innerHTML = "Shuttle ready for launch";
            launchStatus.style.color = "green";
         }
      }

   })

   let json = [];
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         let missionTarget = document.getElementById("missionTarget");
         let index = Math.floor(Math.random()*json.length);
         let launchLocation = json[index];

         missionTarget.innerHTML =`
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${launchLocation.name}</li>
            <li>Diameter: ${launchLocation.diameter}</li>
            <li>Star: ${launchLocation.star}</li>
            <li>Distance from Earth: ${launchLocation.distance}</li>
            <li>Number of Moons: ${launchLocation.moon}</li>
         </ol>
         <img src="${launchLocation.image}">`

      })
   })

})

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
