let input = document.getElementById("calculatorinput")
function display(value){
    input.value +=value
}
function chardisplay(){
    input.value="";
}
function backspace(){
    input.value= input.value.slice(0,-1);
}
function solve() {
   try{
    input.value = eval(input.value);
   } catch (e){
    input.value = "Error";
   }
}