document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementsByClassName("custom-select"),t=e.length;for(let n=0;n<t;n++){const t=e[n].getElementsByTagName("select")[0],l=t.length,c=document.createElement("DIV");c.setAttribute("class","select-selected"),c.innerHTML=t.options[t.selectedIndex].innerHTML,e[n].appendChild(c);const i=document.createElement("DIV");i.setAttribute("class","select-items select-hide");for(let e=1;e<l;e++){const s=document.createElement("DIV");s.innerHTML=t.options[e].innerHTML,s.addEventListener("click",(function(e){const t=this.parentNode.parentNode.getElementsByTagName("select")[0],s=t.length,n=this.parentNode.previousSibling;for(let e=0;e<s;e++)if(t.options[e].innerHTML==this.innerHTML){t.selectedIndex=e,n.innerHTML=this.innerHTML;const s=this.parentNode.getElementsByClassName("same-as-selected"),l=s.length;for(let e=0;e<l;e++)s[e].removeAttribute("class");this.setAttribute("class","same-as-selected");break}n.click()})),i.appendChild(s)}e[n].appendChild(i),c.addEventListener("click",(function(e){e.stopPropagation(),s(this),this.nextSibling.classList.toggle("select-hide"),this.classList.toggle("select-arrow-active")}))}function s(e){const t=document.getElementsByClassName("select-items"),s=document.getElementsByClassName("select-selected"),n=t.length,l=s.length,c=[];for(let t=0;t<l;t++)e==s[t]?c.push(t):s[t].classList.remove("select-arrow-active");for(let e=0;e<n;e++)-1===c.indexOf(e)&&t[e].classList.add("select-hide")}document.addEventListener("click",s)}));
//# sourceMappingURL=index.689258c6.js.map
