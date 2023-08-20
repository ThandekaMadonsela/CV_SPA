import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Experiences");
    }

    async getHtml() {
        return `
        <h1>Experiences</h1>
    <section class="exprience" id="exprience">
      
       <table class="exprience__table" id="exprienceTable">
       <thead>
           <tr>
           <th>Employer name</th>
           <th>Start date</th>
           <th>End date</th>
           <th>Job title</th>
           <th></th>
           </tr>
       </thead>
       <tbody>
           
       </tbody>
   </table>
<br>
   <a href="addExperience" class="add__exprience" create-exprience> Add exprience </a>

    </section>
`;
    }
}
