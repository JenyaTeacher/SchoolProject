function calculate() {
    let food = document.getElementById("food").value.split(",")
    let weight = parseFloat(document.getElementById("weight").value)
    if ( weight <= 0) {
        document.getElementById("result").innerHTML = "Будь ласка, введіть коректну вагу.";
        return
    }
    let kcal = (food[0] * weight) / 100
    let protein = (food[1] * weight) / 100
    let fat = (food[2] * weight) / 100
    let carbs = (food[3] * weight) / 100
    document.getElementById("result").innerHTML = `Калорії: ${kcal.toFixed(2)} ккал<br>Білки: ${protein.toFixed(2)} г<br>Жири: ${fat.toFixed(2)} г<br>Вуглеводи: ${carbs.toFixed(2)} г`;
}

function updateImage() {
    let food = document.getElementById("food").value.split(",");
    document.getElementById("foodImage").src = food[4];
    document.getElementById("foodImage").style.width="350px"
     document.getElementById("foodImage").style.height="300px"
}
