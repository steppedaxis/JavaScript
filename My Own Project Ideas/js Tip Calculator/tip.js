document.querySelector('.calc_btn').addEventListener('click',()=>{
    var bill=Number(document.querySelector('#bill_value').value)
    let precent;
    if (document.getElementById("great").checked) {
        precent=Number(document.getElementById("great").value)
    }
    else if (document.getElementById("good").checked)  {
        precent=Number(document.getElementById("good").value)
    }
    else if(document.getElementById("bad").checked) {
        precent=Number(document.getElementById("bad").checked*0) 
    }

    let people=Number(document.getElementById("people_val").value)
    
    let tip;
    tip=((bill*precent)/100)/people;
    alert(tip);
})