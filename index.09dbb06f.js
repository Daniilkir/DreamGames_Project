var e=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherin",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}];const n=document.querySelectorAll(".ul-scien .li-scien"),t=document.querySelector(".ul-scien");n.forEach(((n,t)=>{const r=n.querySelector(".item-name"),a=n.querySelector(".item-year");r.textContent=`${e[t].name} ${e[t].surname}`,a.textContent=`${e[t].born} - ${e[t].dead}`}));const r=document.querySelector(".ask-19"),a=document.querySelector(".alphabet"),c=document.querySelector(".liveYears"),o=document.querySelector(".later"),i=document.querySelector(".yearAlbert"),l=document.querySelector(".start-c"),s=document.querySelector(".delete-a"),d=document.querySelector(".oppositeLive"),m=document.querySelector(".firstLetters");r.addEventListener("click",(function(){t.innerHTML="";const n=[];e.forEach((e=>{e.born>1800&&n.push(e)}));for(let e=0;e<n.length;e+=1){const e=document.createElement("li");e.classList.add("li-scien"),e.innerHTML='<div><p class="item-name"></p><p class="item-year"></p></div>',t.append(e)}document.querySelectorAll(".li-scien").forEach(((e,t)=>{const r=e.querySelector(".item-name"),a=e.querySelector(".item-year");r.textContent=`${n[t].name} ${n[t].surname}`,a.textContent=`${n[t].born} - ${n[t].dead}`}))})),a.addEventListener("click",(function(){t.innerHTML="",e.sort(((e,n)=>e.name.localeCompare(n.name)));for(let n=0;n<e.length;n+=1){const e=document.createElement("li");e.classList.add("li-scien"),e.innerHTML='<div><p class="item-name"></p><p class="item-year"></p></div>',t.append(e)}document.querySelectorAll(".li-scien").forEach(((n,t)=>{const r=n.querySelector(".item-name"),a=n.querySelector(".item-year");r.textContent=`${e[t].name} ${e[t].surname}`,a.textContent=`${e[t].born} - ${e[t].dead}`}))})),c.addEventListener("click",(function(){t.innerHTML="";const n=e;n.sort(((e,n)=>n.dead-n.born-(e.dead-e.born)));for(let e=0;e<n.length;e+=1){const e=document.createElement("li");e.classList.add("li-scien"),e.innerHTML='<div><p class="item-name"></p><p class="item-year"></p></div>',t.append(e)}document.querySelectorAll(".li-scien").forEach(((e,t)=>{const r=e.querySelector(".item-name"),a=e.querySelector(".item-year");r.textContent=`${n[t].name} ${n[t].surname}`,a.textContent=`${n[t].born} - ${n[t].dead}`}))})),o.addEventListener("click",(function(){t.innerHTML="";let n=e[0].born;for(let t=0;t<e.length;t+=1)n<e[t].born&&(n=e[t]);const r=document.createElement("li");r.classList.add("li-scien"),r.innerHTML='<div><p class="item-name"></p><p class="item-year"></p></div>',t.append(r);document.querySelectorAll(".li-scien").forEach((e=>{const t=e.querySelector(".item-name"),r=e.querySelector(".item-year");t.textContent=`${n.name} ${n.surname}`,r.textContent=`${n.born} - ${n.dead}`}))})),i.addEventListener("click",(function(){t.innerHTML="";const n=e.find((e=>"Albert"===e.name)),r=document.createElement("li");r.classList.add("li-scien"),r.innerHTML='<div><p class="item-name"></p><p class="item-year"></p></div>',t.append(r);document.querySelectorAll(".li-scien").forEach((e=>{const t=e.querySelector(".item-name"),r=e.querySelector(".item-year");t.textContent=`${n.name} ${n.surname}`,r.textContent=`${n.born} - ${n.dead}`}))})),l.addEventListener("click",(function(){t.innerHTML="";const n=e.filter((e=>!0===e.surname.startsWith("C")));for(let e=0;e<n.length;e+=1){const e=document.createElement("li");e.classList.add("li-scien"),e.innerHTML='<div><p class="item-name"></p><p class="item-year"></p></div>',t.append(e)}document.querySelectorAll(".li-scien").forEach(((e,t)=>{const r=e.querySelector(".item-name"),a=e.querySelector(".item-year");r.textContent=`${n[t].name} ${n[t].surname}`,a.textContent=`${n[t].born} - ${n[t].dead}`}))})),s.addEventListener("click",(function(){t.innerHTML="";const n=e.filter((e=>!0!==e.name.startsWith("A")));for(let e=0;e<n.length;e+=1){const e=document.createElement("li");e.classList.add("li-scien"),e.innerHTML='<div><p class="item-name"></p><p class="item-year"></p></div>',t.append(e)}document.querySelectorAll(".li-scien").forEach(((e,t)=>{const r=e.querySelector(".item-name"),a=e.querySelector(".item-year");r.textContent=`${n[t].name} ${n[t].surname}`,a.textContent=`${n[t].born} - ${n[t].dead}`}))})),d.addEventListener("click",(function(){t.innerHTML="";const n=[];let r={},a=0;for(let n=0;n<e.length;n+=1)a<e[n].dead-e[n].born&&(a=e[n].dead-e[n].born,r=e[n]);let c={},o=300;for(let n=0;n<e.length;n+=1)o>e[n].dead-e[n].born&&(o=e[n].dead-e[n].born,c=e[n]);n.push(r,c);for(let e=0;e<n.length;e+=1){const e=document.createElement("li");e.classList.add("li-scien"),e.innerHTML='<div><p class="item-name"></p><p class="item-year"></p></div>',t.append(e)}document.querySelectorAll(".li-scien").forEach(((e,t)=>{const r=e.querySelector(".item-name"),a=e.querySelector(".item-year");r.textContent=`${n[t].name} ${n[t].surname}`,a.textContent=`${n[t].born} - ${n[t].dead}`}))})),m.addEventListener("click",(function(){t.innerHTML="";const n=[];for(let t=0;t<e.length;t+=1)e[t].name[0]===e[t].surname[0]&&n.push(e[t]);for(let e=0;e<n.length;e+=1){const e=document.createElement("li");e.classList.add("li-scien"),e.innerHTML='<div><p class="item-name"></p><p class="item-year"></p></div>',t.append(e)}document.querySelectorAll(".li-scien").forEach(((e,t)=>{const r=e.querySelector(".item-name"),a=e.querySelector(".item-year");r.textContent=`${n[t].name} ${n[t].surname}`,a.textContent=`${n[t].born} - ${n[t].dead}`}))}));
//# sourceMappingURL=index.09dbb06f.js.map
