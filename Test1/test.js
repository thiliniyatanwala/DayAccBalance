
const myArray =[1,2,3,4,5];

const trans= {
            balance: 100
}

const savings ={
    balance:150
}

const result = myArray.reduce((runningTotal,value)=>{
   return runningTotal + value;
},0);

const accoountsArray =[trans,savings];
console.log(accoountsArray[0]);
console.log(accoountsArray[1]);


const arrayResults = accoountsArray.reduce((accumilatedSum,accoountsArray)=>{
    return accoountsArray.balance + accumilatedSum;
},0)
console.log("result of the Array-->", arrayResults);



for(let i=0 ; i< numberOfdays ;i++){
    if(i===0){
      currentBalance = accounts.reduce((runningTotal,account)=>{
         return account.balance + runningTotal;
     },0);
    }

    else{
      pastDate = subtractDays(pastDate,1);
     let extractedDate = pastDate.get;
   // get the transaction amounts for particular day
     let transRecords = accounts[1].transactions.filter(ele=>{
         return ele.date.split("-")[0] === extractedDate.toString();
     })
     
     if(transRecords.length>0){
         let perDayTransactionAmount = transRecords.reduce((total,trs)=>{
             return total + trs.amount;
         },0);   

         accounts[1].balance = tempBalance 
     }

    }

     tempBalance = currentBalance
    result.push(currentBalance);
  }


