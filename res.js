let carburant = ["Electrique","Hybride","Essence","Diesel"];
let boite = ["Manuelle","Automatique"];
let type_V = document.getElementById("vehicule");
let select_carbu = document.getElementById("carbur");


function check_type_v(type_Vh){
    switch(type_Vh){
        case "Motos" : select_carbu.innerHTML = 
        `
        <option value="`+carburant[0]+`">`+carburant[0]+`</option>
        <option value="`+carburant[2]+`">`+carburant[2]+`</option>
        `
    }
}
check_type_v(type_V.value);
type_V.addEventListener("change",check_type_v)
