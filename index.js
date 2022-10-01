function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)}

    function myFunction() {
    var x = document.getElementById("myText").value;

    if (x > 20){
        document.getElementById("error").style.visibility = "visible"
        navigator.vibrate(200)
    }else{
        document.getElementById("error").style.visibility = "hidden"


    let zeroString = "0"
    let zeroStringData = zeroString.repeat(x-1)+"1" 
    document.getElementById("minValue").innerHTML = zeroStringData

    let nineString = "9"
    let nineStringData = nineString.repeat(x)
    document.getElementById("maxValue").innerHTML =  nineStringData

    const rndInt = randomIntFromInterval(zeroStringData * 1, nineStringData * 1).toString(10)
    document.getElementById("mainValue").innerHTML = (rndInt.padStart(x,"0"))}}