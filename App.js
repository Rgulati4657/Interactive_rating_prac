let sel = document.querySelectorAll(".num");
let parentsel = document.querySelectorAll('.rating');
let val;
let checkerbool = true;
let setval = document.querySelector(".selectedrate");
sel.forEach((item) => {
  if (checkerbool){
    item.addEventListener("click", () => {
      checkerbool = false;
      val = item.innerText;
      item.style.backgroundColor = "hsl(217, 12%, 63%)";
      item.style.color = "white";

      setval.innerText = `You selected ${val} out of 5`;
      console.log(val);
      sel.forEach((otherItem) => {
        if (otherItem !== item) {
            otherItem.style.backgroundColor = "";
          otherItem.style.color = "";
            // otherItem.disabled= true;
        }});
    });
  }
});

// submit button
let but = document.querySelector(".sub");
let ratecont = document.querySelector(".container-rating1");
let thankcont = document.querySelector(".container-rating2");
console.log(thankcont);
but.addEventListener("click", () => {
    if(checkerbool == false){
        but.style.cursor = "pointer";
        thankcont.classList.remove("thankyou");
        ratecont.classList.add("rate");
    }
  console.log("hi");
  but.style.cursor = "not-allowed";

});
