
class Calculator {

    constructor(previousElementText,currentElementText){
        this.previousElementText=previousElementText;
        this.currentElementText = currentElementText;
        this.clear();
    }

    clear(){
        this.currentOperant = " "
        this.previousOperant = " "
        this.operation = undefined ;
    }

    appendNumber(number){
        this.currentOperant = this.currentOperant.toString() +  number.toString();
    }

    chooseoperation(operation){
        if(this.currentOperant === '') return 
        if(this.previousOperant !== '' ){
            this.compute()
        }
        this.operation = operation
        this.previousOperant = this.currentOperant
        this.currentOperant = ''
            
    }

 

    compute( ){
        let computation ;
        const prev = parseFloat(this.previousOperant)
        const curr = parseFloat(this.currentOperant)
        switch(this.operation){
            case '+' : computation = prev + curr;
            break;
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }


    updatetext(){
        this.currentElementText.innerText = this.currentOperant;
        if(this.operation != ''){
            this.previousElementText.innerText = `${this.previousOperand} ${this.operation}`
        }else {
            this.previousOperandTextElement.innerText = ''
          }
    }
}








const numberButtons = document.querySelectorAll('[data-number]')

const operantButtons = document.querySelectorAll('[data-operation]')

const clearButton = document.querySelector('[data-all-clear]')

const equalButton = document.querySelector('[data-equals]')

const deleteButton = document.querySelector('[data-delete]')

const previousElementText = document.querySelector('[data-previous-operand]')

const currentElementText = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousElementText,currentElementText)

numberButtons.forEach(button => {
    button.addEventListener('click' , () => {
       calculator.appendNumber(button.innerText)
       calculator.updatetext();
    })
})

operantButtons.forEach(button => {
    button.addEventListener('click',() => {
        calculator.chooseoperation(button.innerText)
        calculator.updatetext();
        
    })
})