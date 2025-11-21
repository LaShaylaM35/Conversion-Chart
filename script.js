function conversionChart() {
    //let kilometers = document.getElementById("kilometers").value;
    //let distance = document.getElementById("distance").value;
    let miles = parseFloat(kilometers.value) / parseFloat(distance.value);

   // let miles= (kilometers/1.60934);

    //let result = document.getElementById("result");
    result.textContent = `Total Miles are: ${miles}`; 
}
