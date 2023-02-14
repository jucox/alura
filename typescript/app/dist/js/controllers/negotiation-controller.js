import { WeekDays } from "../enums/week-days.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationsView = new NegotiationsView('#negotiations-view', true);
        this.messageView = new MessageView('#message-view');
        this.dateInput = document.querySelector('#data');
        this.quantityInput = document.querySelector('#quantidade');
        this.valueInput = document.querySelector('#valor');
        this.negotiationsView.update(this.negotiations);
    }
    add() {
        const negotiation = Negotiation.createOf(this.dateInput.value, this.quantityInput.value, this.valueInput.value);
        if (!this.weekDayValidation(negotiation.date)) {
            this.messageView
                .update('Sua negociação só pode ser feita em dias úteis!');
            return;
        }
        this.negotiations.add(negotiation);
        this.updateView();
        this.cleanForm();
    }
    weekDayValidation(negotiationDate) {
        const negotiationDay = negotiationDate.getDay();
        return negotiationDay != WeekDays.SUNDAY
            && negotiationDay != WeekDays.SATURDAY;
    }
    cleanForm() {
        this.dateInput.value = '';
        this.quantityInput.value = '';
        this.valueInput.value = '';
        this.dateInput.focus();
    }
    updateView() {
        this.negotiationsView.update(this.negotiations);
        this.messageView.update('Negociação adicionada!');
    }
}
