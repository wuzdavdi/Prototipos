function myFunction() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = Number(num1) + Number(num2);
    document.getElementById("resultado").innerHTML = "La suma es: " + sum;
  }