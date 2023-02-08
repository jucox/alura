export class Negotiation {
    constructor(
        private _date: Date,
        public readonly quantity: number,
        public readonly value: number
    ) {}

    get volume(): number {
        return this.quantity * this.value;
    }

    get date(): Date {
        const date = new Date(this._date.getTime());
        return date;
    }

    public static createOf(dateString: string, quantityString: string, valueString: string): Negotiation {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','));
        const quantity = parseInt(quantityString);
        const value = parseFloat(valueString);
    
        return new Negotiation(date, quantity, value);
    }
}