let userHeight = document.getElementById("height")
let userWeight = document.getElementById("weight")
let btnCalculate = document.getElementById("btn-calc")
let btnReset = document.getElementById("btn-reset")

btnReset.addEventListener("click", () => {
    location.reload()
})

btnCalculate.addEventListener('click', () => {
    let height = parseInt(userHeight.value);
    let weight = parseInt(userWeight.value);

    let isHeight = checkInputHeight(height)
    let isWeight = checkInputWeight(weight)    

    if (isHeight && isWeight) {
        let bmiCalc = calculateBMI(weight, height)
        let output = document.getElementById("output")
        
        let statusBmi = ""
        if (bmiCalc < 18.5) {
            statusBmi += "Underweight"
            output.style.color = "#2DCCFF"
            output.innerText = `${bmiCalc} (${statusBmi})`    
        } else if (bmiCalc >= 18.5 && bmiCalc <= 24.9) {
            statusBmi += "Normal"
            output.style.color = "#56F000"
            output.innerText = `${bmiCalc} (${statusBmi})`
        } else if (bmiCalc >= 25.0) {
            statusBmi += "Overweight"
            output.style.color = "#FF3838"
            output.innerText = `${bmiCalc} (${statusBmi})`
        }
    }

})

function calculateBMI(weight, height) {
    let heightMeter = Math.pow(height/100, 2)
    let calc = (weight / heightMeter).toFixed(1)
    return calc
}

function checkInputHeight(inputHeight) {
    let heightErr = document.getElementById("height-err")
    
    let isHeight = false;
    if (inputHeight <= 0 || !inputHeight) {
        heightErr.style.opacity = 1
        heightErr.innerHTML = "*harap masukkan Tinggi Badan dengan benar."
    } else {
        isHeight = true
        heightErr.innerHTML = ""
    }
    return isHeight
}

function checkInputWeight(inputWeight) {
    let weightErr = document.getElementById("weight-err")
    
    let isWeight = false;
    if (inputWeight <= 0 || !inputWeight) {
        weightErr.style.opacity = 1
        weightErr.innerHTML = "*harap masukkan Berat Badan dengan benar."
    } else {
        isWeight = true
        weightErr.innerHTML = ""
    }
    return isWeight
}