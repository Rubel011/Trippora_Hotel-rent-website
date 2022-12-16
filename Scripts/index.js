let container = document.getElementById("container");
// container
let asiaNames = [
  { name: "India", population: 3262 },
  { name: "Thailand", population: 1284 },
  { name: "Sri Lanka", population: 646 },
  { name: "Indonesia", population: 622 },
  { name: "Philippines", population: 378 },
  { name: "United Arab Emirates", population: 146 },
  { name: "Georgiad", population: 102 },
  { name: "Turkey", population: 70 },
  { name: "Israel", population: 53 },
  { name: "Malaysia", population: 102 },
  { name: "Japan", population: 46 },
  { name: "Vietnam", population: 37 },
  { name: "Cambodia", population: 26 },
  { name: "Nepal", population: 22 },
  { name: "Maldives", population: 19 },
  { name: "Taiwan, Province Of China", population: 17 },
  { name: "Hong Kong Special ", population: 16 },
  { name: "Republic Of Korea", population: 12 },
  { name: "Oman", population: 7 },
  { name: "Bangladesh", population: 5 },
];
let europeNames = [
  { name: "Croatia", population: 15594 },
  { name: "Denmark", population: 14285 },
  { name: "Italy", population: 9268 },
  { name: "Spain", population: 4737 },
  { name: "France", population: 3791 },
  { name: "Switzerland", population: 2770 },
  { name: "Finland", population: 2086 },
  { name: "Germany", population: 1910 },
  { name: "Hungary", population: 1260 },
  { name: "Austria", population: 1193 },
  { name: "Greece", population: 941 },
  {
    name: "United Kingdom Of Great Britain And Northern Ireland",
    population: 899,
  },
  { name: "Sweden", population: 677 },
  { name: "Cyprus", population: 593 },
  { name: "Czech Republi", population: 585 },
  { name: "Portugal", population: 566 },
  { name: "Norway", population: 513 },
  { name: "Netherlands", population: 491 },
  { name: "Poland", population: 304 },
  { name: "Belgium", population: 270 },
  { name: "Slovakia", population: 141 },
  { name: "Slovenia", population: 119 },
  { name: "Ireland", population: 68 },
  { name: "Malta", population: 64 },
  { name: "Bulgaria", population: 63 },
  { name: "Ukraine", population: 47 },
  { name: "Montenegro", population: 39 },
  { name: "Albania", population: 34 },
  { name: "Bosnia And Herzegovina", population: 25 },
  { name: "Romania", population: 17 },
  { name: "Luxembourg", population: 12 },
  { name: "Serbia", population: 7 },
  { name: "Iceland", population: 6 },
  { name: "Lithuania", population: 6 },
  { name: "The Former Yugoslav Republic Of Macedonia", population: 6 },
  { name: "Andorra", population: 5 },
];
let northANames = [
  { name: "United States Of America", population: 3017 },
  { name: "Mexico", population: 569 },
  { name: "Dominican Republic", population: 365 },
  { name: "Cuba", population: 257 },
  { name: "Canada", population: 164 },
  { name: "Costa Rica", population: 147 },
  { name: "Jamaica", population: 115 },
  { name: "Aruba", population: 37 },
  { name: "Puerto Rico", population: 37 },
  { name: "Saint Martin", population: 34 },
  { name: "Sint Maarten", population: 10 },
  { name: "Belize", population: 9 },
  { name: "Panama", population: 9 },
  { name: "Curacao", population: 6 },
];
let southANames = [
  { name: "Colombia", population: 198 },
  { name: "Chile", population: 44 },
  { name: "Brazil", population: 39 },
  { name: "Argentina", population: 28 },
  { name: "Peru", population: 15 },
  { name: "Ecuador", population: 7 },
];
let africaNames = [
  { name: "Kenya", population: 613 },
  { name: "South Africa", population: 277 },
  { name: "Morocco", population: 197 },
  { name: "Uganda", population: 194 },
  { name: "Mauritius", population: 71 },
  { name: "Tanzania", population: 70 },
  { name: "Rwanda", population: 21 },
  { name: "Burundi", population: 19 },
  { name: "Madagascar", population: 14 },
  { name: "Egypt", population: 12 },
  { name: "Tunisia", population: 7 },
  { name: "Seychelles", population: 5 },
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
let northA = document.getElementById("northA");
northA.addEventListener("click", () => {
  domUpdate(northANames);
});
let southA = document.getElementById("southA");
southA.addEventListener("click", () => {
  domUpdate(southANames);
});
let africa = document.getElementById("africa");
africa.addEventListener("click", () => {
  domUpdate(africaNames);
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
