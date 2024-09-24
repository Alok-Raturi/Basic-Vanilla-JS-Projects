document.getElementById("Check").addEventListener("click",(e)=>{
    let dob = document.getElementById("DOB").value;
    let luckyNumber = parseInt(document.getElementById("LuckyNumber").value);
    if(!(dob&& luckyNumber)){
    document.getElementById("Result").innerHTML= "Please fill both the input fields";
        return;
    }
    let num=0;
    for (let i in dob){
        if(dob[i]>='0' && dob[i]<='9'){
            num+= (dob[i]-'0');
        }
    }
    document.getElementById("Result").innerHTML= (num%luckyNumber==0)?`${luckyNumber} is your lucky number.`:`${luckyNumber} is not your lucky number.`;
    document.getElementById("LuckyNumber").value=document.getElementById("DOB").value=""
})
