let asiaNames = [
  { name: "Candolim", population: 62 },
  { name: "Calanguted", population: 35 },
  { name: "Arpora", population: 32 },
  { name: "Baga", population: 13 },
  { name: "Benaulim", population: 12 },
  { name: "Varca", population: 11 },
  { name: "Morjim", population: 10 },
  { name: "Anjuna", population: 9 },
  { name: "Colva", population: 9 },
  { name: "Sinquerim", population: 9 },
  { name: "Siolim", population: 9 },
  { name: "Saligao", population: 8 },
  { name: "Bardez", population: 8 },
  { name: "Canacona", population: 6 },
  { name: "Chapora", population: 6 },
  { name: "Assagao", population: 5 },
];
let europeNames = [
  { name: "AC", population: 266 },
  { name: "Swimming Pool  ", population: 197 },
  { name: "Wifi/Internet  ", population: 162 },
  { name: "Apartment  ", population: 91 },
  { name: "Villa", population: 83 },
  { name: "Room  ", population: 74 },
  { name: "2BHK", population: 56 },
  { name: "1BHK", population: 46 },
  { name: "3BHK", population: 46 },
  { name: "Spa  ", population: 31 },
  { name: "Resort", population: 28 },
  { name: "4BHK", population: 24 },
  { name: "Homestay", population: 10 },
  { name: "5BHK", population: 9 },
  { name: "Cottage", population: 5 },
];

let countryName = document.getElementById("cities");
let asia = document.getElementById("asia");
asia.addEventListener("click", () => {
  domUpdate(asiaNames);
});
let europe = document.getElementById("europe");
europe.addEventListener("click", () => {
  domUpdate(europeNames);
});

domUpdate(asiaNames);

function domUpdate(mydata) {
  countryName.innerText = null;
  mydata.forEach((element) => {
    let div1 = document.createElement("div");
    let div3 = document.createElement("div");
    div1.setAttribute("class", "name");
    div1.innerText = element.name;
    let div2 = document.createElement("div");
    let p1 = document.createElement("p");
    p1.innerText = element.population;
    let p2 = document.createElement("p");
    p2.innerText = " holiday homes";
    div2.append(p1, p2);
    div3.append(div1, div2);
    countryName.append(div3);
  });
}
