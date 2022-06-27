submit=document.getElementById('submit')
input=document.getElementById('number')
answer=document.getElementById('answer')

function binaryGap(number){
    // Converting Number to Binary and Performing Operation to calculate maximum number of zero sequence before 1
    return number.toString(2) .replace(/[0]*$/, '').split('1').reduce((acc, a) =>a.length > acc ? a.length : acc, 0);
}

submit.onclick=(()=>{
    number=input.value
    number=parseInt(number)
    // checking if number is not negative
    if(number<0){
        alert("Number should be Positive Integer")
        input.value=0
    }else{
        sol=binaryGap(number)
        answer.textContent="Binary Gap of "+number+" is : "+sol
    }


})