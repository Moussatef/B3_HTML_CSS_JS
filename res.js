let carburant = ["Electrique", "Hybride", "Essence", "Diesel"];
let boite = ["Manuelle", "Automatique"];
// var type_V = document.querySelector(".vehicule").value;
let select_carbu = document.getElementById("carbur");
let select_boit = document.getElementById("boit");
let prix_pors = 0;


function check_type_v() {
    let choix = " <option >-Votre choix-</option>";
    var veh = document.getElementById("vehicule").value;
    switch (veh) {
        case "Motos":
            select_carbu.innerHTML = choix;
            select_carbu.innerHTML += `<option value="${carburant[0]}">${carburant[0]} </option> <option value="${carburant[2]}">${carburant[2]}</option>"`;
            select_boit.innerHTML = `<option value="None">None</option>`;
            
            break
        case "Citadine":
            select_carbu.innerHTML = choix;
            for (let i = 0; i < 4; i++) {
                select_carbu.innerHTML += `<option value="${carburant[i]}">${carburant[i]} </option>`;
            }
            select_boit.innerHTML = choix + `<option value="${boite[0]}">${boite[0]} </option>`;

            break;
        case "Compact":
            select_carbu.innerHTML = choix;
            for (let i = 1; i < 4; i++) {
                select_carbu.innerHTML += `<option value="${carburant[i]}">${carburant[i]} </option>`;
            }
            select_boit.innerHTML = choix + `<option value="${boite[0]}">${boite[0]} </option>`;
            break;
        case "Berline":
            select_carbu.innerHTML = choix;
            for (let i = 1; i < 4; i++) {
                select_carbu.innerHTML += `<option value="${carburant[i]}">${carburant[i]} </option>`;
            }
            select_boit.innerHTML = choix + `<option value="${boite[1]}">${boite[1]} </option>`;
            prix_pors = 20 + (20*0.19);
            break;
        case "Utilitare":

            select_carbu.innerHTML = choix + `<option value="${carburant[3]}">${carburant[3]} </option>`;

            select_boit.innerHTML = choix + `<option value="${boite[0]}">${boite[0]} </option>`;
            prix_pors = 16 + (16*0.19);
            break;
        case "Engin":
            select_carbu.innerHTML = choix;
            for (let i = 2; i < 4; i++) {
                select_carbu.innerHTML += `<option value="${carburant[i]}">${carburant[i]} </option>`;
            }
            select_boit.innerHTML = choix + `<option value="${boite[0]}">${boite[0]} </option>`;
            break;
        case "Camion":
            select_carbu.innerHTML = choix + `<option value="${carburant[3]}">${carburant[3]} </option>`;
            select_boit.innerHTML = choix + `<option value="${boite[1]}">${boite[1]} </option>`;
            prix_pors = 250 + (250*0.40);
            break;

        default:
            select_carbu.innerHTML = choix;

    }
}


check_type_v();

type_V.addEventListener("change", check_type_v);
