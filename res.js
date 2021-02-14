let carburant = ["Electrique","Hybride","Essence","Diesel"];
let boite = ["Manuelle","Automatique"];
// var type_V = document.querySelector(".vehicule").value;
let select_carbu = document.getElementById("carbur");
let select_boit = document.getElementById("boit");


function check_type_v(){
    var veh =document.getElementById("vehicule").value;
    switch(veh){
        case "Motos" : select_carbu.innerHTML += `<option value="${carburant[0]}">${carburant[0]} </option> <option value="${carburant[2]}">${carburant[2]}</option>"`;
                       
        break
        case "Citadine" : 
        for(let i=0;i<4;i++){
            select_carbu.innerHTML += `<option value="${carburant[i]}">${carburant[i]} </option>`;
        }
        
        select_boit .innerHTML = `<option value="${boite[0]}">${boite[0]} </option>`;
        break;

        default:
            select_carbu.innerHTML = " <option >-Votre choix-</option>";

    }
    
}


check_type_v();
type_V.addEventListener("change",check_type_v);
