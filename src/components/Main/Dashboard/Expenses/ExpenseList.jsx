let expenseList = [
    {
        id: 1,
        expenseName: "Lunch Money",
        payer: "Anuj",
        payerAmount: "100",
        share: "-50",
        dateMonth: "OCT",
        dateDate: "5"
    },
    {
        id: 2,
        expenseName: "Maggi",
        payer: "You",
        payerAmount: "40",
        share: "20",
        dateMonth: "OCT",
        dateDate: "2"
    },
    {
        id: 3,
        expenseName: "Cold Drink",
        payer: "Divyansh",
        payerAmount: "20",
        share: "-10",
        dateMonth: "SEP",
        dateDate: "30"
    },
    {
        id: 4,
        expenseName: "Pizza",
        payer: "You",
        payerAmount: "250",
        share: "-50",
        dateMonth: "OCT",
        dateDate: "02"
    }
]
function newExpense(obj) {
    console.log("before addition")
    console.log(expenseList)
    expenseList.push(obj);
    console.log("after addition")
    console.log(expenseList)
    
}
export {newExpense};
export default expenseList;