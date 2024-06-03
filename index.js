class cashMachine {
  constructor(acctNum, pinNum, balance) {
    this.acctNum = acctNum;
    this.pinNum = pinNum;
    this.balance = balance;
  }
  pinVerify(enteredPin) {
    return enteredPin === this.pinNum ? true : "Incorrect PIN";
  }

  balanceVerify(withdrawn) {
    return this.balance >= withdrawn ? true : "Insufficient balance";
  }

  dispenseMoney(enteredPin, withdrawn) {
    const pinCheck = this.pinVerify(enteredPin);
    if (pinCheck !== true) {
      return pinCheck;
    }

    const balanceCheck = this.balanceVerify(withdrawn);
    if (balanceCheck !== true) {
      return balanceCheck;
    }

    this.balance -= withdrawn;
    return `Your transaction has been successful. You have withdrawn ${withdrawn}. Your new balance is ${this.balance}.`;
  }
}

const myCashMachine = new cashMachine(353535, 1234, 100);

const result = myCashMachine.dispenseMoney(1234, 10);
console.log(result);
