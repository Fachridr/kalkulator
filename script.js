function Solve(value) {
    console.log(value+" ini adalah function log solve penjumlahan")
    document.getElementById('res').value += value;
    
 }

 function Result() {
    var num1 = document.getElementById('res').value;
    var num2 = eval(num1);
    document.getElementById('res').value = num2;
    console.log(num1+" log ini adalah hasil dari penjumlahan");
    console.log(num2+" log ini adalah hasil dari penjumlahan");
 }

 function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
 }
 
 function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0,-1);
 }
 