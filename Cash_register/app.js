let billAmount=0;
let receivedAmount=0;
function Onload(){
    document.getElementsByClassName('amount')[0].style.display = "none"
    document.getElementById("bill-amount").disabled = false;
    document.getElementById("bill-amount").value=null;
    document.getElementById("received-input").value=null;
    billAmount=receivedAmount=0;
    fillTable(0);
}

document.getElementById("bill-amount-btn").addEventListener("click",()=>{
    const billAmountInput= document.getElementById("bill-amount");
    if(!billAmountInput.value){
        alert("Provide a bill amount")
        return;
    }
    document.getElementsByClassName('amount')[0].style.display = "inline";
    billAmountInput.disabled = true;
    billAmount= parseInt(billAmountInput.value);
})

document.getElementById("Check").addEventListener("click",()=>{
    const receivedAmountInput= document.getElementById("received-input");
    if(!receivedAmountInput.value){
        alert("Provide the amount received from the customer")
        return;
    }
    receivedAmount= parseInt(receivedAmountInput.value);
    if(receivedAmount >= billAmount){
        fillTable(receivedAmount-billAmount);
    }else{
        alert("You have to pay more. The received amount is less than the bill amount.")
    }
})

function fillTable(amount){
    let notes = getListOfNotes(amount);
    let table = document.getElementsByTagName("tr");
    for (let i=1; i<table.length;i++){
        table[i].children[1].innerHTML=notes[i-1]
    }
}

document.getElementById('Reset').addEventListener('click',()=>{
    onload()
})

function getListOfNotes(amt){
    let arr = Array(7);
    let notes = [2000,500,100,20,10,5,1];
    for(let i=0;i<7; i++){
        arr[i]= Math.floor(amt/notes[i]);
        amt -=  notes[i]*arr[i];
    }
    return arr;
}

