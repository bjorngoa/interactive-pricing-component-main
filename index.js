const priceValue = document.getElementById("priceValue");
const inputSlider = document.querySelector("input");

const priceOption = document.getElementById("priceOption");

inputSlider.oninput = (() => {
    let value = inputSlider.value;
    priceValue.textContent = value;
})

const changePriceOption = document.querySelector("#changePriceOption");


let checkBox = document.querySelector(".switch input"),
        duration = document.querySelector(".priceOption"),
        price = document.querySelector(".priceValue .pricevalue"),
        switcher = document.querySelector(".switch"),
        range = document.querySelector(".myrange");

// create price on switch

switcher.onclick = function() {

    if (checkBox.checked == true) {
        let priceInt = parseInt(price.textContent);
        price.textContent = `${(priceInt - (priceInt * .25)) * 12}`;
        duration.textContent = `/year`
    } else {

        updatePrice()

        duration.textContent = `/month`
    }
}
    // Selector for page-views
   let pageViews = document.querySelector(".page-views span");
   
    //add event listener to input
    range.addEventListener ("input", updatePrice);


function updatePrice() {
    if(range.value == 1) {
        if (checkBox.checked == true) {
            price.textContent = `${(8 - (8 * .25)) * 12}`;
        } else {
            price.textContent = 8;
        }
       pageViews.textContent = "10K" 
    }
    if(range.value == 2) {
        if (checkBox.checked == true) {
            price.textContent = 108;
        }else {
            price.textContent = 12;
        }

        pageViews.textContent = "50K";
    }
    
    if(range.value == 3) {
        if (checkBox.checked == true) {
            price.textContent = 144;
        }else {
            price.textContent = 16;
        }

        pageViews.textContent = "100K";
    } 

    if(range.value == 4) {
        if (checkBox.checked == true) {
            price.textContent = 216;
        }else {
            price.textContent = 24;
        }

        pageViews.textContent = "500K";
    } 
    if(range.value == 5) {
        if (checkBox.checked == true) {
            price.textContent = 324;
        }else {
            price.textContent = 36;
        }

        pageViews.textContent = "1M";
    } 
}


// for the price slider

for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
  }