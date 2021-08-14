class Counter{
    constructor(run5times){
        this.counter=0;
        this.callback=run5times;
    }
    increase(){
        this.counter++;
        console.log(this.counter);
        if(this.counter%5===0){
            this.callback&&this.callback(this.counter);
        }
    }
}
function printSomthing(num){
    console.log(`yo! ${num}`);
}
function alertNum(num){
    alert(`wow ${num}`);
}
const printCounter=new Counter(printSomthing);
const alertCounter=new Counter(alertNum);

printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();

alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();



