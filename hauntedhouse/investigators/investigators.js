const present = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const investigators = [
    {
        name: "Dingus",
        source: "dingus.png",
        birthMonth: 7,
        birthDay: 3,
        age: Math.floor(dateDistance(new Date(1991,7,3),present)/365.25),
        weight: "149 kg",
        height: "189 cm",
        hobbies: "Games, Computers",
        figure: "red.jpg",
        standard: [3,4,4,3],
        sanity: [2, 4, 5, 5, 5, 5, 6, 7],
        speed: [1, 2, 2, 3, 4, 5, 6, 6],
        might: [2, 3, 3, 4, 6, 6, 7, 8],
        knowledge: [3, 3, 4, 5, 5, 7, 8, 8]
    },
    {
        name: "VanGold",
        source: "Bard.png",
        birthMonth: 7,
        birthDay: 24,
        age: Math.floor(dateDistance(new Date(1991,7,24),present)/365.25),
        height: "16<u><b>1</b></u> cm",
        weight: "55 kg",
        hobbies: "Drawing, Shipping, Books",
        figure: "green.jpg",
        standard: [3, 4, 3, 4],
        sanity: [3, 4, 4, 5, 6, 7, 7, 8],
        speed: [2, 4, 4, 5, 6, 6, 6, 8],
        might: [1, 1, 3, 3, 4, 4, 5, 7],
        knowledge: [2, 3, 3, 4, 6, 6, 6, 7]
    },
    {
        name: "Lexie",
        source: "Lexie.png",
        birthMonth: 7,
        birthDay: 26,
        age: Math.floor(dateDistance(new Date(1996,7,26),present)/365.25),
        height: "173 cm",
        weight: "61",
        hobbies: "Sewing, Reading, Baking",
        figure: "purple.jpg",
        standard: [3, 3, 4, 4],
        sanity: [3, 4, 5, 5, 6, 7, 8, 8],
        speed: [2, 3, 3, 4, 5, 5, 7, 7],
        might: [1, 3, 3, 3, 4, 4, 6, 6],
        knowledge: [2, 3, 3, 4, 5, 6, 7, 8]
    },
    {
        name: "Brandon Jaspers",
        source: "Brandon.jpg",
        birthDay: 21,
        birthMonth: 4,
        age: 12,
        height: "5'1''",
        weight: "109 lbs",
        hobbies: "Computers, Camping, Hockey",
        figure: "green.jpg",
        standard: [3, 4, 4, 3],
        speed: [3,4,4,4,5,6,7,8],
        might: [2,3,3,4,5,6,6,7],
        sanity: [3,3,3,4,5,6,7,8],
        knowledge: [1,3,3,5,5,6,6,7]
    },
    {
        name: "Peter Akimoto",
        source: "Peter.jpg",
        birthDay: 3,
        birthMonth: 8,
        age: 13,
        height: "4'11''",
        weight: "98 lbs.",
        hobbies: "Bugs, Basketball",
        figure: "green.jpg",
        standard: [4, 3, 4, 3],
        speed: [3,3,3,4,6,6,7,7],
        might: [2,3,3,4,5,5,6,8],
        sanity: [3,4,4,4,5,6,6,7],
        knowledge: [3,4,4,5,6,7,7,8]
    },
    {
        name: "Missy Dubourde",
        source: "Missy.jpg",
        birthDay: 14,
        birthMonth: 1,
        age: 9,
        height: "4'2''",
        weight: "62 lbs.",
        hobbies: "Swimming, Medicine",
        figure: "yellow.jpg",
        standard: [3, 4, 3, 4],
        speed: [3,4,5,6,6,6,7,7],
        might: [2,3,3,3,4,5,6,7],
        sanity: [1,2,3,4,5,5,6,7],
        knowledge: [2,3,4,4,5,6,6,6]
    },
    {
        name: "Zoe Ingstrom",
        source: "Zoe.jpg",
        birthDay: 5,
        birthMonth: 10,
        age: 8,
        height: "3'9''",
        weight: "49 lbs.",
        hobbies: "Dolls, Music",
        figure: "yellow.jpg",
        standard: [4, 4, 3, 3],
        speed: [4,4,4,4,5,6,8,8],
        might: [2,2,3,3,4,4,6,7],
        sanity: [3,4,5,5,6,6,7,8],
        knowledge: [1,2,3,4,4,5,5,5]
    },
    {
        name: "Heather Granville",
        source: "Heather.jpg",
        birthDay: 2,
        birthMonth: 7,
        age: 18,
        height: "5'2''",
        weight: "120 lbs.",
        hobbies: "Television, Shopping",
        figure: "purple.jpg",
        standard: [3, 3, 3, 5],
        speed: [3,3,4,5,6,6,7,8],
        might: [3,3,3,4,5,6,7,8],
        sanity: [3,3,3,4,5,6,6,6],
        knowledge: [2,3,3,4,5,6,7,8]
    },
    {
        name: "Jenny LeClerc",
        source: "Jenny.jpg",
        birthDay: 4,
        birthMonth: 2,
        age: 21,
        height: "5'7''",
        weight: "142 lbs.",
        hobbies: "Reading, Soccer",
        figure: "purple.jpg",
        standard: [4, 3, 5, 3],
        speed: [2,3,4,4,4,5,6,8],
        might: [3,4,4,4,4,5,6,8],
        sanity: [1,1,2,4,4,4,5,6],
        knowledge: [2,3,3,4,4,5,6,8]
    },
    {
        name: "Darrin \"Flash\" Williams",
        source: "Darrin.jpg",
        birthDay: 6,
        birthMonth: 5,
        age: 20,
        height: "5'11''",
        weight: "188 lbs.",
        hobbies: "Track, Music, Shakespearean Literature",
        figure: "red.jpg",
        standard: [5, 3, 3, 3],
        speed: [4,4,4,5,6,7,7,8],
        might: [2,3,3,4,5,6,6,7],
        sanity: [1,2,3,4,5,5,5,7],
        knowledge: [2,3,3,4,5,5,5,7]
    },
    {
        name: "Ox Bellows",
        source: "Ox.jpg",
        birthDay: 18,
        birthMonth: 9,
        age: 23,
        height: "6'4''",
        weight: "288 lbs.",
        hobbies: "Football, Shiny Objects",
        figure: "red.jpg",
        standard: [5, 3, 3, 3],
        speed: [2,2,2,3,4,5,5,6],
        might: [4,5,5,6,6,7,8,8],
        sanity: [2,2,3,4,5,5,6,7],
        knowledge: [2,2,3,3,5,5,6,6]
    },
    {
        name: "Madame Zostra",
        source: "Zostra.jpg",
        birthDay: 10,
        birthMonth: 11,
        age: 37,
        height: "5'0''",
        weight: "150 lbs.",
        hobbies: "Astrology, Cooking, Baseball",
        figure: "blue.jpg",
        standard: [3, 4, 3, 4],
        speed: [2,3,3,5,5,6,6,7],
        might: [2,3,3,4,5,5,5,6],
        sanity: [4,4,4,5,6,7,8,8],
        knowledge: [1,3,4,4,4,5,6,6]
    },
    {
        name: "Vivian Lopez",
        source: "Vivian.jpg",
        birthDay: 11,
        birthMonth: 0,
        age: 42,
        height: "5'5''",
        weight: "142 lbs.",
        hobbies: "Old Movies, Horses",
        figure: "blue.jpg",
        standard: [4, 3, 3, 4],
        speed: [3,4,4,4,4,6,7,8],
        might: [2,2,2,4,4,5,6,6],
        sanity: [4,4,4,5,6,7,8,8],
        knowledge: [4,5,5,5,5,6,6,7]
    },
    {
        name: "Father Rhinehardt",
        source: "Rhinehardt.jpg",
        birthDay: 29,
        birthMonth: 3,
        age: 62,
        height: "5'9''",
        weight: "185 lbs.",
        hobbies: "Fencing, Gardening",
        figure: "white.jpg",
        standard: [3, 3, 5, 4],
        speed: [2,3,3,4,5,6,7,7],
        might: [1,2,2,4,4,5,5,7],
        sanity: [3,4,5,5,6,7,7,8],
        knowledge: [1,3,3,4,5,6,6,8]
    },
    {
        name: "Professor Longfellow",
        source: "Longfellow.jpg",
        birthDay: 27,
        birthMonth: 6,
        age: 57,
        height: "5'11''",
        weight: "153 lbs.",
        hobbies: "Gaelic Music, Drama, Fine Wines",
        figure: "white.jpg",
        standard: [4, 3, 3, 5],
        speed: [2,2,4,4,5,5,6,6],
        might: [1,2,3,4,5,5,6,6],
        sanity: [1,3,3,4,5,5,6,7],
        knowledge: [4,5,5,5,5,6,7,8]
    },
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
        plus.style.width = "40%"
        let minus = document.createElement("button");
        minus.onclick = function (){reduce(value)};
        minus.innerHTML = "-";
        minus.style.width = "40%"
        elm.appendChild(minus);
        elm.appendChild(plus);
        buttonRow.appendChild(elm);
        let skull = document.createElement("td");
        skull.innerHTML = "&#128128;";
        skull.style.textAlign = "center";
        deathRow.appendChild(skull);
    })
    stats.appendChild(deathRow);
    stats.appendChild(buttonRow);
    if(sessionStorage.getItem("playing"))
		hideInfobox();
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
    console.log(sessionStorage.getItem("playing"));
    const chosen = !sessionStorage.getItem("playing")? investigators[list.selectedIndex]: investigators[sessionStorage.getItem("playing")];
    document.getElementById("inv-image").src = "../pictures/"+chosen.source;
    document.getElementById("inv-bday").innerHTML = "Born: " + chosen.birthDay +" "+ monthNames[chosen.birthMonth] + " (" +daysToBirthday(chosen) +")";
    document.getElementById("inv-name").innerHTML = chosen.name;
    document.getElementById("inv-age").innerHTML = "Age: " + chosen.age;
    document.getElementById("inv-height").innerHTML = "Height: " + chosen.height;
    document.getElementById("inv-weight").innerHTML = "Weight: " + chosen.weight;
    document.getElementById("inv-hobbies").innerHTML = "Hobbies:<br>" + chosen.hobbies;
    document.getElementById("inv-figure").src = "../pictures/" + chosen.figure;
    let total = 0;
    statList.forEach(function (value,index){
        chosen[value].forEach(function (valtwo, undex){
            document.getElementById(value+"-"+(undex+1)).innerHTML = valtwo;
            total += valtwo;
        })
        currentStat[value] = sessionStorage.getItem("playing")? Number.parseInt(sessionStorage.getItem(value)) :chosen.standard[index];
    })
    updateAbilities()
}
function updateAbilities(){
    Array.from(document.getElementsByClassName("chosen")).forEach(function (value){
        value.className="not";
    })
    statList.forEach(function (value){
        document.getElementById(value+"-"+currentStat[value]).className = "chosen";
		sessionStorage.setItem(value,`${currentStat[value]}`);
	});

}
function hideInfobox(){
	sessionStorage.setItem("playing",`${document.getElementById("invest").selectedIndex}`)
    document.getElementById("infobox").removeChild(document.getElementById("invest"));
    document.getElementById("infobox").removeChild(document.getElementById("hidebox"));
}
