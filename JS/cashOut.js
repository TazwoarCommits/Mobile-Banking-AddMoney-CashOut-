// ---------------------Cash Out------------------------

document.getElementById('btn-cash-out').addEventListener('click', function(event){
     event.preventDefault();

  const cashOutAmount = document.getElementById('cashout-input').value ;
  const cashOutPin = document.getElementById('cash-out-pin-input').value ; 
  
  if(cashOutPin === '1234'){
    const currentBalance = document.getElementById('current-balance').innerText ; 
     
    const cashOutAmountNumber = parseFloat(cashOutAmount) ; 
    const currentBalanceNumber = parseFloat(currentBalance) ;

    let updatedBalance = currentBalanceNumber - cashOutAmountNumber ; 
 
    document.getElementById('current-balance').innerText = updatedBalance ;
  }else{alert('Wrong Pin');}
  
     
})