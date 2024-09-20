// --------------------Add Money----------------------
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoneyAmount = document.getElementById('add-money-input').value ;
    const pinNumberInput = document.getElementById('pin-input').value ;

    if(pinNumberInput === '1234'){
        const currentBalance = document.getElementById('current-balance').innerText ; 
         
        const addMoneyAmountNumber = parseFloat(addMoneyAmount) ;
        const currentBalanceNumber = parseFloat(currentBalance) ;

        let updatedBalance = addMoneyAmountNumber + currentBalanceNumber ;
        
        document.getElementById('current-balance').innerText = updatedBalance ;


         
    }else{alert('wrong pin');}
    
} )


