// Return endDay balance with the date type new Date(2021, 5, 30)

const trans = {
    "type": "TRANSACTION",
    "balance": 100.00,
    "date": new Date(2021, 5, 30),
    "transactions": [
        {
            "amount": -10.00,
            "date": new Date(2021, 5, 30),
            "description": "Coffee Shop"
        },
        {
            "amount": -12.00,
            "date": new Date(2021, 5, 28),
            "description": "Coffee Shop"
        },
        {
            "amount": -10.00,
            "date": new Date(2021, 5, 27),
            "description": "Coffee Shop"
        },
        {
            "amount": -10.00,
            "date": new Date(2021, 5, 26),
            "description": "Coffee Shop"
        },
        {
            "amount": 140.00,
            "date": new Date(2021, 5, 26),
            "description": "Coffee Shop"
        },
    ]
}
const savings = {
    "type": "save",
    "balance": 100.00,
    "date": new Date(2021, 5, 30),
    "transactions": [
        {
            "amount": 20,
            "date": new Date(2021, 5, 28),
            "description": "Coffee Shop"
        },
        {
            "amount": 30.00,
            "date": new Date(2021, 5, 27),
            "description": "Coffee Shop"
        },
        
    ]
}

const TODAY = new Date(2021, 5, 30)// 30-05-2021
function getBalanceHistory(accounts, numberOfdays) {

    const result = [];
    let runningDate;
    let currentBalance = 0;

    for (let i = 0; i < numberOfdays; i++) {

        currentBalance = accounts.reduce((runningTotal, account) => {
            return account.balance + runningTotal;
        }, 0);

        result.push(currentBalance);

        runningDate = subtractDays(TODAY, i);

        let totalTransAmountPerDay = extractTransactionAmountsforDay(accounts, runningDate);

        accounts[0].balance = accounts[0].balance - totalTransAmountPerDay[0];
        accounts[1].balance = accounts[1].balance - totalTransAmountPerDay[1];
    }
    console.log("Array of Results-->", result);
    return result;
}

function extractTransactionAmountsforDay(accounts, runningDate) {
    
    let totalAmount = [];
    for (const acc of accounts) {
        let total = 0;
        let transactions = acc.transactions.filter(ele => {
           return ele.date.toString() === runningDate.toString()
        })

        if (transactions.length > 0) {
            total = transactions.reduce((accumulate, trans) => {
                return accumulate + trans.amount;
            }, 0)
        }
        totalAmount.push(total);
    }

    console.log("total :", totalAmount);
    return totalAmount;
}


function subtractDays(date, days) {
    return addDays(date, days * -1);
}
function addDays(date, days) {
    return new Date(date.getTime() + ((3600 * 1000 * 24) * days));

}


let resultArray = getBalanceHistory([savings, trans], 6);
console.log(resultArray.join(','))

