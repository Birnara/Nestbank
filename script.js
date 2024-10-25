function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
    const loanTerm = parseInt(document.getElementById("loanTerm").value) * 12;

    const monthlyPayment = loanAmount * interestRate / (1 - (Math.pow(1 / (1 + interestRate), loanTerm)));
    const totalPayment = monthlyPayment * loanTerm;
    const totalInterest = totalPayment - loanAmount;

    document.getElementById("monthlyPayment").textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
    document.getElementById("totalPayment").textContent = `Total Payment: $${totalPayment.toFixed(2)}`;
    document.getElementById("totalInterest").textContent = `Total Interest: $${totalInterest.toFixed(2)}`;
}