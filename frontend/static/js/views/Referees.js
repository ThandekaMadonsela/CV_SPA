import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Referees");
    }

    async getHtml() {
        return `
        <h1>Referees</h1>
            <section class="referee" id="referee">
            
            <table class="referee__table" id="refereeTable">
            <thead>
                <tr>
                <th>Name</th>
                <th>Institution</th>
                <th>Position</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
<br>
        <a href="/addReferee" class="add__referee" create-referee> Add referee </a>
            </section>
            
        `;
    }
}
