let btn = document.getElementById("btn")
const dList = document.querySelectorAll(".dDown")
let updateFlag = document.getElementsByClassName("updateFlag")
let dDown = document.getElementById("dDown")
let fromFlag = document.getElementById("fromFlag")
let dUp = document.getElementById("dUp")
let toFlag = document.getElementById("toFlag")
let exchange = document.getElementById("exchange")

// Eamount.addEventListener("click",()=>{
//     console.log(Eamount)
// })
btn.addEventListener("click", (evt) => {
    evt.preventDefault()
    let Eamount = document.getElementById("amount");
    window.location = `http://127.0.0.1:5500/currencyConverter.html?to=${dDown.value}&from=${dUp.value}&amount=${Eamount.value}`;
    // const URL =`https://www.frankfurter.app/latest/?to=${dDown.value},${dUp.value}`
    // async function Erate(){
    //     let val =dUp.value
    //     let result = await fetch(URL)
    //     let data = await result.json()
    //     let rate = data.rates[val]
    //     console.log(data)
    // }
    //  Erate()

})
for (let selects of dList) {

    for (let code in countryList) {
        let newOption = document.createElement("option")
        newOption.innerText = code
        newOption.value = code
        selects.appendChild(newOption)
    }

}
dDown.addEventListener("change", function (eve) {
    updateflag(eve)
})
dUp.addEventListener("change", function (eve) {
    updateflag2(eve)
})
function updateflag(event) {
    let cflag = countryList[event.target.value]
    let nUrl = `https://flagsapi.com/${cflag}/flat/64.png`
    fromFlag.src = nUrl

}

function updateflag2(event) {
    let cflag = countryList[event.target.value]
    let nUrl = `https://flagsapi.com/${cflag}/flat/64.png`
    toFlag.src = nUrl

}