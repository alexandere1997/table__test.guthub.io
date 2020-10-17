import knockout, {applyBindings} from "knockout";

let viewModel ={
  phones:  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
};
applyBindings(viewModel);

const arrSquare = document.querySelectorAll(".schedule__square td"),
      btnClear = document.querySelector(".schedule__clear"),
      btnAdd = document.querySelector(".schedule__add"),
      schedule__start = document.querySelector(".schedule__start"),
      schedule__end = document.querySelector(".schedule__end"),
      schedule__inner = document.querySelector(".schedule__inner"),
      table__inner = document.querySelector(".schedule__inner table");

let tableAdd = () => {
  arrSquare.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("act")
    })
    btnAdd.addEventListener("click", () => {
      item.classList.add("act");
    });
    btnClear.addEventListener("click", () => {
      item.classList.remove("act");
    })
    schedule__start.addEventListener("blur", () => {
        let widthBlock = ((schedule__end.value - schedule__start.value) * 27) + 27;
        schedule__inner.style.width = `${widthBlock}px`;
        table__inner.style.transform = `translateX(${-schedule__start.value * 27}px)`;
      
    });
    schedule__end.addEventListener("blur", () => {
        let widthBlock = ((schedule__end.value - schedule__start.value) * 27) + 27;
        schedule__inner.style.width = `${widthBlock}px`
    });
  });
} 
tableAdd();

function mask1(event) {
    let matrix = "__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });

    console.log(schedule__start.value)
    let end = 24
    if(+schedule__end.value >= end) {
      schedule__end.value = " "
    }
};




schedule__start.addEventListener("input", mask1, false);
schedule__start.addEventListener("focus", mask1, false);
schedule__start.addEventListener("blur", mask1, false);
schedule__end.addEventListener("input", mask1, false);
schedule__end.addEventListener("focus", mask1, false);
schedule__end.addEventListener("blur", mask1, false);




