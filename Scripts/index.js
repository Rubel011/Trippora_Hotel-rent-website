let container=document.getElementById("container");
// container
let asiaNames=[
    {name:'India',population:3262},
    {name:'Thailand',population:1284},
    {name:'Sri Lanka',population:646},
    {name:'Indonesia',population:622},
    {name:'Philippines',population:378},
    {name:'United Arab Emirates',population:146},
    {name:'Georgiad',population:1284},
    {name:'Turkey',population:1284},
    {name:'Malaysia',population:1284},
    {name:'Japan',population:1284},
    {name:'Viet Naml',population:1284},
    {name:'Cambodia',population:1284},
    {name:'Nepal',population:1284},
    {name:'Maldives',population:1284},
    {name:'Taiwan, Province Of China',population:1284},
    {name:'Hong Kong Special ',population:1284},
    {name:'Republic Of Korea',population:1284},
    {name:'Oman',population:1284},
    {name:'Bangladesh',population:1284},

     
]
let europeNames=[
    {name:'Croatia',population:1284},
    {name:'Denmark',population:1284},
    {name:'Italy',population:1284},
    {name:'Spain',population:1284},
    {name:'France',population:1284},
    {name:'Switzerland',population:1284},
    {name:'Finland',population:1284},
    {name:'Germany',population:1284},
    {name:'Bangladesh',population:1284},
    {name:'Bangladesh',population:1284},
    {name:'Bangladesh',population:1284},
    {name:'Bangladesh',population:1284},
    {name:'Bangladesh',population:1284},
    {name:'Bangladesh',population:1284},
    {name:'Bangladesh',population:1284},
    {name:'Bangladesh',population:1284},
    {name:'Bangladesh',population:1284},
    {name:'Bangladesh',population:1284},
];
let countryName=document.getElementById("cities");
let asia=document.getElementById("asia");
asia.addEventListener('click',()=>{
    domUpdate(asiaNames)
})
let europe=document.getElementById("europe");
europe.addEventListener('click',()=>{
    domUpdate(europeNames)
})
let northA=document.getElementById("northA");
europe.addEventListener('click',()=>{
    domUpdate(europeNames)
})
let southA=document.getElementById("southA");
europe.addEventListener('click',()=>{
    domUpdate(europeNames)
})
domUpdate(asiaNames);

function domUpdate(mydata){
    countryName.innerText=null;
    mydata.forEach((element)=>{
        let div1=document.createElement("div")
        let div3=document.createElement("div")
        div1.setAttribute("class","name")
        div1.innerText=element.name;
        let div2=document.createElement("div")
        let p1=document.createElement("p")
        p1.innerText=element.population;
        let p2=document.createElement("p")
        p2.innerText=" holiday homes"
        div2.append(p1,p2)
        div3.append(div1,div2);
        countryName.append(div3)
    })
    

}