!function(){function t(){return Math.floor(11*Math.random())}var e=t();document.getElementById("guess-button-js").addEventListener("click",(function(){var n=document.getElementById("guess-js").value,o=document.getElementById("result-guess");n>=0&&n<=10?""===n?(o.style.color="red",o.textContent="Введіть число!"):n===e?(o.textContent="Вітаю, ви вгадали число!  ".concat(e,"."),o.style.color="green",e=t()):(o.textContent="Ви програли, комп’ютер загадав  ".concat(e,"."),o.style.color="red",e=t()):(o.textContent="Введіть рік в діапазоні від 0 до 10",o.style.color="red")}))}();
//# sourceMappingURL=index.f06a3508.js.map
