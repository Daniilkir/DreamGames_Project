document.getElementById("check-button-js").addEventListener("click",(function(){const e=parseInt(document.getElementById("year4-js").value),t=document.querySelector(".result-year4");if(e>=1900&&e<=2023){const t=e%4==0,n=document.querySelector(".result-year4");t?(n.textContent="Ваш рік народження є високосним.",n.style.color="green"):(n.textContent="Ваш рік народження не є високосним.",n.style.color="red")}else t.textContent="Введіть рік в діапазоні від 1900 до 2023",t.style.color="red"}));
//# sourceMappingURL=index.dbe40dbc.js.map
