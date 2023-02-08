import { domInjector } from "../decorators/domInjector.js";
import { executionTimeLogin } from "../decorators/execution-time-login.js";
import { inspect } from "../decorators/inspect.js";
import { WeekDays } from "../enums/week-days.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";

export class NegotiationController {
    @domInjector('#data')
    private dateInput: HTMLInputElement;

    @domInjector('#quantidade')
    private quantityInput: HTMLInputElement;

    @domInjector('#valor')
    private valueInput: HTMLInputElement;
    private negotiations = new Negotiations();
    private negotiationsView = new NegotiationsView('#negotiations-view');
    private messageView = new MessageView('#message-view');

    constructor() {
        this.negotiationsView.update(this.negotiations);
    }

    @inspect()
    @executionTimeLogin()

    public add(): void {
        const negotiation = Negotiation.createOf(
            this.dateInput.value,
            this.quantityInput.value,
            this.valueInput.value
        );

        if (!this.weekDayValidation(negotiation.date)) {
            this.messageView
                .update('Sua negociação só pode ser feita em dias úteis!');
            return;
        }

        this.negotiations.add(negotiation);
        this.updateView();
        this.cleanForm();
    }

    private weekDayValidation(negotiationDate: Date) {
        const negotiationDay = negotiationDate.getDay();

        return negotiationDay != WeekDays.SUNDAY
            && negotiationDay != WeekDays.SATURDAY;
    }

    private cleanForm(): void {
        this.dateInput.value = '';
        this.quantityInput.value = '';
        this.valueInput.value = '';
        this.dateInput.focus();
    }

    private updateView(): void {
        this.negotiationsView.update(this.negotiations);
        this.messageView.update('Negociação adicionada!');
    }
}
