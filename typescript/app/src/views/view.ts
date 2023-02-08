import { inspect } from "../decorators/inspect.js";
import { executionTimeLogin } from "../decorators/execution-time-login.js";

export abstract class View<T> {
    protected element: HTMLElement;
    
    constructor(selector: string) {
        const element = document.querySelector(selector);

        if (element) {
            this.element = element as HTMLElement;
        } else {
            throw Error(`Seletor  ${selector} não existe no DOM!`);
        }
    }

    public update(model: T): void {
        let template = this.template(model);

        this.element.innerHTML = template;
    }

    protected abstract template(model: T): string;
}