import { Negotiations } from "../models/negotiations.js";
import { View } from "./view.js";

export class NegotiationsView extends View<Negotiations> {

    protected template(model: Negotiations): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.list().map(negotiation => {
            return `
                            <tr>
                                <td>${this.format(negotiation.date)}
                                </td>
                                <td>${negotiation.quantity}</td>
                                <td>${negotiation.value}</td>
                            </tr>
                        `;
        }).join('')}
                </tbody>
            </table>
        `;
    }

    private format(date: Date): string {
        return new Intl.DateTimeFormat().format(date);
    }

}