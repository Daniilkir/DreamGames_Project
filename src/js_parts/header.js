document.addEventListener("DOMContentLoaded", function () {
    const x = document.getElementsByClassName("custom-select");
    const l = x.length;

    for (let i = 0; i < l; i++) {
        const selElmnt = x[i].getElementsByTagName("select")[0];
        const ll = selElmnt.length;

        const a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);

        const b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");

        for (let j = 1; j < ll; j++) {
            const c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;

            c.addEventListener("click", function (e) {
                const y = this.parentNode.parentNode.getElementsByTagName("select")[0];
                const sl = y.length;
                const h = this.parentNode.previousSibling;

                for (let k = 0; k < sl; k++) {
                    if (y.options[k].innerHTML == this.innerHTML) {
                        y.selectedIndex = k;
                        h.innerHTML = this.innerHTML;

                        const sameAsSelected = this.parentNode.getElementsByClassName("same-as-selected");
                        const yl = sameAsSelected.length;

                        for (let m = 0; m < yl; m++) {
                            sameAsSelected[m].removeAttribute("class");
                        }

                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });

            b.appendChild(c);
        }

        x[i].appendChild(b);

        a.addEventListener("click", function (e) {
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }

    function closeAllSelect(elmnt) {
        const allSelectItems = document.getElementsByClassName("select-items");
        const allSelected = document.getElementsByClassName("select-selected");
        const xl = allSelectItems.length;
        const yl = allSelected.length;
        const arrNo = [];

        for (let i = 0; i < yl; i++) {
            if (elmnt == allSelected[i]) {
                arrNo.push(i);
            } else {
                allSelected[i].classList.remove("select-arrow-active");
            }
        }

        for (let i = 0; i < xl; i++) {
            if (arrNo.indexOf(i) === -1) {
                allSelectItems[i].classList.add("select-hide");
            }
        }
    }

    document.addEventListener("click", closeAllSelect);
});
