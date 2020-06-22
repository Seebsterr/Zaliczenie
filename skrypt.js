let sortDirection=false;
let miasta = [
  { nazwa: "Słupsk", wojewodztwo: "Pomorskie", populacja:90681, powierzchnia:43.50, gestosc:1354.27 },
  { nazwa: "Kraków", wojewodztwo: "Małopolskie", populacja:779115, powierzchnia:326.85, gestosc:2383.71 },
  { nazwa: "Poznań", wojewodztwo: "Wielkopolskie", populacja:534813, powierzchnia:261.91, gestosc:2041.97 },
  { nazwa: "Katowice", wojewodztwo: "Śląskie", populacja:293636, powierzchnia:164.64, gestosc:1783.50 },
  { nazwa: "Szczecin", wojewodztwo: "Zachodniopomorskie", populacja:402100, powierzchnia:300.55 , gestosc:1337.88 },
  { nazwa: "Warszawa", wojewodztwo: "Mazowieckie", populacja:1777972, powierzchnia:517.2, gestosc:3437.69 }, 
  { nazwa: "Gdańsk", wojewodztwo: "Pomorskie", populacja:470907, powierzchnia:263.44, gestosc:1787.53 },
  { nazwa: "Gdynia", wojewodztwo: "Pomorskie", populacja:246348, powierzchnia:135.14, gestosc:1822.91 },
  { nazwa: "Sopot", wojewodztwo: "Pomorskie", populacja:33500, powierzchnia:17.28, gestosc:1938.66 }
];

var sumPop= 0;
var sumPow= 0;
var sumGes= 0;
var avgPop= 0;
var avgPow= 0;
var avgGes= 0;

for (var i in miasta){
   var obj = miasta[i].populacja;
   var obj1 = miasta[i].powierzchnia;
   var obj2 = miasta[i].gestosc;
   sumPop+=obj;
   sumPow+=obj1;
   sumGes+=obj2;
  console.log(sumPop)
}



console.log(sumPop);
avgPop = sumPop/miasta.length;
avgPow = sumPow/miasta.length;
avgGes = sumGes/miasta.length;

window.onload = ()=>{
  loadTableData(miasta);
  loadTableZbiorcze(avgPop,sumPop);
};


function loadTableData(miasta){
  const tableBody= document.getElementById('miasta');
  let dataHtml = '';

  for(let data of miasta){
    dataHtml+= `<tr><td class=mias>${data.nazwa}</td><td>${data.wojewodztwo}</td><td class=pop>${data.populacja}</td><td class=pow>${data.powierzchnia}</td><td class=ges>${(data.populacja/data.powierzchnia).toFixed(2)}</td></tr>`;
  }


 tableBody.innerHTML=dataHtml;
}
function loadTableZbiorcze(avgPop,sumPop){
  const tableFoot=document.getElementById('suma');
  const tableFoot2=document.getElementById('srednia');
  const tableFoot3=document.getElementById('sumaPow');
  const tableFoot4=document.getElementById('sumaGes');
  const tableFoot5=document.getElementById('sredniaPow');
  const tableFoot6=document.getElementById('sredniaGes');
  let dataHtml= '';
  let dataHtml2='';
  let dataHtml3='';
  let dataHtml4='';
  let dataHtml5='';
  let dataHtml6='';

    dataHtml+=`${sumPop}`
    dataHtml2+=`${avgPop.toFixed(2)}`
    dataHtml3+=`${sumPow.toFixed(2)}`
    dataHtml4+=`${sumGes.toFixed(2)}`
    dataHtml5+=`${avgPow.toFixed(2)}`
    dataHtml6+=`${avgGes.toFixed(2)}`

  tableFoot.innerHTML=dataHtml;
  tableFoot2.innerHTML=dataHtml2;
  tableFoot3.innerHTML=dataHtml3;
  tableFoot4.innerHTML=dataHtml4;
  tableFoot5.innerHTML=dataHtml5;
  tableFoot6.innerHTML=dataHtml6;
}
function sortColumn(columnName){
  const dataType=typeof miasta[0][columnName];
  sortDirection = !sortDirection;

  switch (dataType) {
    case 'number':
    sortNumberColumn(sortDirection,columnName);
      break;
    case 'string':
      sortAlpha(sortDirection,columnName);
        break;
    default:

  }
  loadTableData(miasta);
}
function wojewodztwa(woj,miasta){
  const tableBody= document.getElementById('miasta');
  let dataHtml = '';

  var x = document.getElementById("mySelect").value;
  console.log(x);
    for(let data of miasta){
        if(x===data.wojewodztwo){
          console.log(data.wojewodztwo);
          dataHtml+= `<tr><td class=mias>${data.nazwa}</td><td>${data.wojewodztwo}</td><td class=pop>${data.populacja}</td><td class=pow>${data.powierzchnia}</td><td class=ges>${(data.populacja/data.powierzchnia).toFixed(2)}</td></tr>`;
        }
        if(x==="Wszystko"){
            dataHtml+= `<tr><td class=mias>${data.nazwa}</td><td>${data.wojewodztwo}</td><td class=pop>${data.populacja}</td><td class=pow>${data.powierzchnia}</td><td class=ges>${(data.populacja/data.powierzchnia).toFixed(2)}</td></tr>`;
        }
}
tableBody.innerHTML=dataHtml;
}

function sortAlpha(sort,columnName)
  {
    miasta=miasta.sort((p1,p2)=>{
        return p1[columnName].localeCompare(p2[columnName])
    });
  }

function sortNumberColumn(sort,columnName)
  {
    miasta=miasta.sort((p1,p2)=>{
        return sort ? p1[columnName] - p2[columnName] : p2[columnName] - p1[columnName]
    });
  }
  function colorpop(x) {
  y = document.querySelectorAll('.pop,.mias')
  for (i = 0; i < y.length; i++) {
    y[i].style.backgroundColor = "#ffb74d ";
  }
}
function colorpow(x) {
y = document.querySelectorAll('.pow,.mias')
for (i = 0; i < y.length; i++) {
  y[i].style.backgroundColor = "#ffb74d ";
}
}
function colorges(x) {
y = document.querySelectorAll('.ges,.mias')
for (i = 0; i < y.length; i++) {
  y[i].style.backgroundColor = "#ffb74d ";
}
}

function normalges(x) {
  y = document.querySelectorAll('.ges,.mias')
  for (i = 0; i < y.length;  i+=2) {
    y[i].style.backgroundColor = "#fafafa";
  }
  for (i = 1; i < y.length;  i+=2) {
    y[i].style.backgroundColor = "#e0e0e0";
  }
}

function normalpop(x) {
  y = document.querySelectorAll('.pop,.mias')
  for (i = 0; i < y.length;  i+=2) {
    y[i].style.backgroundColor = "#fafafa";
  }
  for (i = 1; i < y.length;  i+=2) {
    y[i].style.backgroundColor = "#e0e0e0";
  }
}
function normalpow(x) {
  y = document.querySelectorAll('.pow,.mias')
  for (i = 0; i < y.length;  i+=2) {
    y[i].style.backgroundColor = "#fafafa";
  }
  for (i = 1; i < y.length;  i+=2) {
    y[i].style.backgroundColor = "#e0e0e0";
  }
}
