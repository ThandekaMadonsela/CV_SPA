import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Qualifications");
    }

    async getHtml() {
        return `
        
        <h1>Qualifications</h1>
        
    <div class="education__section">
    <table class="education__table" id="educationTable">
    <thead>
        <tr>
        <th>Institution</th>
        <th>Start date</th>
        <th>End date</th>
        <th>Qualification name</th>
        <th></th>
        </tr>
    </thead>
    <tbody>
        
    </tbody>
</table>
<br>
<a href="/addQualification" class="add__education" create-education> Add education </a>
   
    </section>
    
    
`;
    }
}
