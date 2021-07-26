const present = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const investigators = [
    {
        name: "Dingus",
        source: "./dingus.png",
        birthMonth: 7,
        birthDay: 3,
        birthYear: 1991,
        age: Math.floor(dateDistance(new Date(1991,7,3),present)/365.25),
        standard: [3,3,3,3],
        sanity: [1,1,1,1,1,1,1,4],
        speed: [1,1,1,1,1,1,1,4],
        might: [1,1,1,1,1,1,1,4],
        knowledge: [1,1,1,1,1,1,1,4]
    },
    {
        name: "VeeGeee",
        source: "./Bard.png",
        birthMonth: 7,
        birthDay: 24,
        birthYear: 1991,
        age: Math.floor(dateDistance(new Date(1991,7,24),present)/365.25),
        standard: [3, 3, 3, 3],
        sanity: [1,1,1,1,1,1,1,4],
        speed: [1,1,1,1,1,1,1,4],
        might: [1,1,1,1,1,1,1,4],
        knowledge: [1,1,1,1,1,1,1,4]
    },
    {
        name: "Lexie",
        source: "./Lexie.png",
        birthMonth: 7,
        birthDay: 26,
        birthYear: 1991,
        age: Math.floor(dateDistance(new Date(1996,7,26),present)/365.25),
        standard: [3, 3, 3, 3],
        sanity: [1,1,1,1,1,1,1,4],
        speed: [1,1,1,1,1,1,1,4],
        might: [1,1,1,1,1,1,1,4],
        knowledge: [1,1,1,1,1,1,1,4]
    },
    {
        name: "Brandon Jaspers",
        source: "",
        birthDay: 21,
        birthMonth: 4,
        age: 12,
        standard: [3, 4, 4, 3],
        speed: [3,4,4,4,5,6,7,8],
        might: [1,1,1,1,1,1,1,4],
        sanity: [1,1,1,1,1,1,1,4],
        knowledge: [1,1,1,1,1,1,1,4]
    }
];
const statList = ["speed","might","sanity","knowledge"];
let currentStat = {
}
function daysToBirthday(investigator){
    return -dateDistance(new Date(present.getFullYear()+1,investigator.birthMonth,investigator.birthDay),present)%365
}
function dateDistance(date1,date2){
    return Math.floor((date2 - date1) / (1000*60*60*24))
}
function BuildTable(){
    const stats =  document.getElementById("stats");
    for(i = 8; i >0;i--){
        let row = document.createElement("tr");
        for(j = 0; j<4;j++){
            let elm = document.createElement("td");
            elm.id = statList[j] + "-" +i;
            elm.innerHTML = i;
            elm.className = "not"
            elm.style.textAlign = "center";
            row.appendChild(elm);
        }
        stats.appendChild(row);
    }
    let deathRow = document.createElement("tr");
    let buttonRow = document.createElement("tr");
    statList.forEach(function (value){
        currentStat[value] = 0;
        let elm = document.createElement("td");
        let plus = document.createElement("button");

        elm.style.textAlign = "center";
        plus.onclick = function (){increase(value)};
        plus.innerHTML = "+";
        let minus = document.createElement("button");
        minus.onclick = function (){reduce(value)};
        minus.innerHTML = "-";
        elm.appendChild(plus);
        elm.appendChild(minus);
        buttonRow.appendChild(elm);
        let skull = document.createElement("td");
        skull.innerHTML = "&#128128;";
        skull.style.textAlign = "center";
        deathRow.appendChild(skull);
    })
    stats.appendChild(deathRow);
    stats.appendChild(buttonRow);
}

function increase(value){
    currentStat[value] = Math.min(currentStat[value]+1,8);
    updateAbilities();
}
function reduce(value){
    currentStat[value] = Math.max(currentStat[value]-1,1);
    updateAbilities();
}
function AddToSelect(item, num) {
    const list =  document.getElementById("invest");
    let inv = document.createElement("option");
    inv.value = num;
    inv.innerHTML = item.name;
    list.appendChild(inv);
}
function updateInfobox(){
    const list =  document.getElementById("invest");
    const chosen = investigators[list.selectedIndex];
    document.getElementById("inv-image").src = chosen.source;
    document.getElementById("inv-bday").innerHTML = "Born: " + chosen.birthDay +" "+ monthNames[chosen.birthMonth] + " (" +daysToBirthday(chosen) +")";
    document.getElementById("inv-name").innerHTML = chosen.name;
    document.getElementById("inv-age").innerHTML = "Age: " + chosen.age;
    statList.forEach(function (value,index){
        chosen[value].forEach(function (valtwo, undex){
            document.getElementById(value+"-"+(undex+1)).innerHTML = valtwo;
        })
        currentStat[value] = chosen.standard[index];
    })
    updateAbilities()
}
function updateAbilities(){
    Array.from(document.getElementsByClassName("chosen")).forEach(function (value){
        value.className="not";
    })
    statList.forEach(function (value){
        document.getElementById(value+"-"+currentStat[value]).className = "chosen";
    });

}
function hideInfobox(){
    document.getElementById("papa").removeChild(document.getElementById("infobox"));
}
