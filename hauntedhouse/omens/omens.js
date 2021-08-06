omens = [
    {
        name: "Bite",
        origin: "basic",
        Abandoned_Room: 17,
        Balcony: 24,
        Catacombs: 4,
        Charred_Room: 24,
        Dining_Room: 24,
        Furnace_Room: 4,
        Gallery: 17,
        Gymnasium: 35,
        Junk_Room: 4 ,
        Kitchen: 17,
        Master_Bedroom: 35,
        Pentagram_Chamber: 26,
        Servants_Quarters: 35
    },
    {
        name: "Book",
        origin: "basic",
        Abandoned_Room: 7,
        Balcony: 7,
        Catacombs: 7,
        Charred_Room: 18,
        Dining_Room: 3,
        Furnace_Room: 18,
        Gallery: 3,
        Gymnasium: 29,
        Junk_Room: 18,
        Kitchen: 3,
        Master_Bedroom: 29,
        Pentagram_Chamber: 43,
        Servants_Quarters: 29,
    },
    {
        name: "Crystal Ball",
        origin: "basic",
        Abandoned_Room: 12,
        Balcony: 32,
        Catacombs: 23,
        Charred_Room: 23,
        Dining_Room: 27,
        Furnace_Room: 32,
        Gallery: 12,
        Gymnasium: 12,
        Junk_Room: 27,
        Kitchen: 23,
        Master_Bedroom: 27,
        Pentagram_Chamber: 32,
        Servants_Quarters: 12,
    },
    {
        name: "Dog",
        origin: "basic",
        Abandoned_Room: 38,
        Balcony: 5,
        Catacombs: 46,
        Charred_Room: 38,
        Dining_Room: 5,
        Furnace_Room: 38,
        Gallery: 38,
        Gymnasium: 46,
        Junk_Room: 46,
        Kitchen: 46,
        Master_Bedroom: 5,
        Pentagram_Chamber: 43,
        Servants_Quarters: 5,
    },
    {
        name: "Girl",
        origin: "basic",
        Abandoned_Room: 1,
        Balcony: 16,
        Catacombs: 1,
        Charred_Room: 30,
        Dining_Room: 5,
        Furnace_Room: 30,
        Gallery: 38,
        Gymnasium: 33,
        Junk_Room: 1,
        Kitchen: 33,
        Master_Bedroom: 16,
        Pentagram_Chamber: 26,
        Servants_Quarters: 30,
    },
    {
        name: "Holy Symbol",
        origin: "basic",
        Abandoned_Room: 9,
        Balcony: 6,
        Catacombs: 13,
        Charred_Room: 13,
        Dining_Room: 6,
        Furnace_Room: 13,
        Gallery: 22,
        Gymnasium: 22,
        Junk_Room: 9,
        Kitchen: 22,
        Master_Bedroom: 6,
        Pentagram_Chamber: 26,
        Servants_Quarters: 9,
    },
    {
        name: "Madman",
        origin: "basic",
        Abandoned_Room: 45,
        Balcony: 11,
        Catacombs: 10,
        Charred_Room: 34,
        Dining_Room: 45,
        Furnace_Room: 10,
        Gallery: 10,
        Gymnasium: 11,
        Junk_Room: 11,
        Kitchen: 34,
        Master_Bedroom: 10,
        Pentagram_Chamber: 45,
        Servants_Quarters: 34,
    },
    {
        name: "Mask",
        origin: "basic",
        Abandoned_Room: 42,
        Balcony: 25,
        Catacombs: 25,
        Charred_Room: 48,
        Dining_Room: 42,
        Furnace_Room: 42,
        Gallery: 25,
        Gymnasium: 22,
        Junk_Room: 25,
        Kitchen: 32,
        Master_Bedroom: 35,
        Pentagram_Chamber: 14,
        Servants_Quarters: 42,
    },
    {
        name: "Medallion",
        origin: "basic",
        Abandoned_Room: 49,
        Balcony: 49,
        Catacombs: 49,
        Charred_Room: 44,
        Dining_Room: 21,
        Furnace_Room: 36,
        Gallery: 36,
        Gymnasium: 21,
        Junk_Room: 44,
        Kitchen: 36,
        Master_Bedroom: 44,
        Pentagram_Chamber: 14,
        Servants_Quarters: 21,
    },
    {
        name: "Ring",
        origin: "basic",
        Abandoned_Room: 28,
        Balcony: 20,
        Catacombs: 41,
        Charred_Room: 20,
        Dining_Room: 20,
        Furnace_Room: 28,
        Gallery: 41,
        Gymnasium: 41,
        Junk_Room: 28,
        Kitchen: 41,
        Master_Bedroom: 20,
        Pentagram_Chamber: 26,
        Servants_Quarters: 28,
    },
    {
        name: "Skull",
        origin: "basic",
        Abandoned_Room: 50,
        Balcony: 47,
        Catacombs: 37,
        Charred_Room: 47,
        Dining_Room: 37,
        Furnace_Room: 50,
        Gallery: 37,
        Gymnasium: 47,
        Junk_Room: 50,
        Kitchen: 37,
        Master_Bedroom: 47,
        Pentagram_Chamber: 14,
        Servants_Quarters: 31,
    },
    {
        name: "Spear",
        origin: "basic",
        Abandoned_Room: 31,
        Balcony: 39,
        Catacombs: 19,
        Charred_Room: 15,
        Dining_Room: 39,
        Furnace_Room: 15,
        Gallery: 15,
        Gymnasium: 19,
        Junk_Room: 31 ,
        Kitchen: 39,
        Master_Bedroom: 19,
        Pentagram_Chamber: 43,
        Servants_Quarters: 31,
    },
    {
        name: "Spirit Board",
        origin: "basic",
        Abandoned_Room: 48,
        Balcony: 2,
        Catacombs: 48,
        Charred_Room: 8,
        Dining_Room: 40,
        Furnace_Room: 2,
        Gallery: 8,
        Gymnasium: 48,
        Junk_Room: 40,
        Kitchen: 2,
        Master_Bedroom: 2,
        Pentagram_Chamber: 40,
        Servants_Quarters: 8,
    },
    {
        name: "Canvas",
        origin: "canvas",
    },
];
let current_omen = null;
let revealed_omens = 0;
function getOmen() {
    return omens.splice(Math.floor(Math.random()*omens.length), 1)[0];
}

function setSrc(name){
    const expl =  document.getElementById("expl");
    expl.src = name + ".html";
}

function addOmen() {
    if(revealed_omens>12)
        return;
    const stats =  document.getElementById("omens");
    let omen = document.createElement("div");
    let chosen = getOmen();
    current_omen = chosen;
    omen.innerHTML = chosen.name;
    omen.onclick = function () {setSrc(chosen.origin)};
    stats.appendChild(omen);
    revealed_omens++;
    const omenCount =  document.getElementById("omenCount");
    omenCount.innerHTML = revealed_omens.toString();
}

function getHaunt() {
    const haunt =  document.getElementById("haunt");
    if(current_omen == null)
        haunt.innerHTML = "No omen drawn yet.";
    const room =  document.getElementById("room");
    val = current_omen[room.item( room.selectedIndex).value]
    if(typeof val === "number")
        haunt.innerHTML = (val);
    else {

    }
}
