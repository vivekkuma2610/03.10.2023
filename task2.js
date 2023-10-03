class UberPriceCalculator {
    constructor(baseFare, costPerMile, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerKM = costPerKM;
        this.costPerMinute = costPerMinute;
    }
    calculatePrice(distanceKM, timeMinutes) {
        const totalFare = this.baseFare + (distanceKM * this.costPerKM) + (timeMinutes * this.costPerMinute);
        return totalFare;
    }
}
const baseFare = 15.0; 
const costPerKM = 10.00; 
const costPerMinute = 5.50; 
const calculator = new UberPriceCalculator(baseFare, costPerKM, costPerMinute);
const distance = 30; 
const time = 15; 
const totalPrice = calculator.calculatePrice(distance, time);
console.log("total amount: Rs", totalPrice);
