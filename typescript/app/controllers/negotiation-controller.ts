import { Negotiation } from "../models/negotiation.js";

export class NegotiationController {
    private dateInput: HTMLInputElement;
    private quantityInput: HTMLInputElement;
    private valueInput: HTMLInputElement;

    constructor() {
        this.dateInput = document.querySelector('#data');
        this.quantityInput = document.querySelector('#quantidade');
        this.valueInput = document.querySelector('#valor');
    }

    add(): void {
        const negotiation = this.createNegotiation();
        console.log(negotiation);
        this.cleanForm();
    }
    
    createNegotiation(): Negotiation {
        const exp = /-/g;
        const date = new Date(this.dateInput.value.replace(exp, ','));
        const quantity = parseInt(this.quantityInput.value);
        const value = parseFloat(this.valueInput.value);
    
        return new Negotiation(date, quantity, value);
    }

    cleanForm(): void {
        this.dateInput.value = '';
        this.quantityInput.value = '';
        this.valueInput.value = '';
        this.dateInput.focus();
    }
}
