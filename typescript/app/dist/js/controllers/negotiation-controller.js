var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorators/domInjector.js";
import { executionTimeLogin } from "../decorators/execution-time-login.js";
import { inspect } from "../decorators/inspect.js";
import { WeekDays } from "../enums/week-days.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationsView = new NegotiationsView('#negotiations-view');
        this.messageView = new MessageView('#message-view');
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
__decorate([
    domInjector('#data')
], NegotiationController.prototype, "dateInput", void 0);
__decorate([
    domInjector('#quantidade')
], NegotiationController.prototype, "quantityInput", void 0);
__decorate([
    domInjector('#valor')
], NegotiationController.prototype, "valueInput", void 0);
__decorate([
    inspect(),
    executionTimeLogin()
], NegotiationController.prototype, "add", null);
