import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Add Experience");
    }

    async getHtml() {
        return `
     

    <div class="exprience__section">
       

    </div>
    <section class="exprience" id="exprience">
       <br>
       <h1>Add Experience</h1>
        <form action="" class="exprience__info">
            <div class="form__mainitems">
                <div>
                    <label for="employerName">Employer name: </label>
                    <input type="text" id="employerName" name="employerName">
                </div>
                <div>
                    <label for="jobTitle">Job title: </label>
                    <input type="text" id="jobTitle" name="jobTitle">
                </div>
            </div>
            
            <div class="form__mainitems">
                <div>
                    <label for="startDate">Start date: </label>
                    <input type="date" id="startDate" name="startDate">
                </div>
                <div>               
                    <label for="endtDate">End date: </label>
                    <input type="date" id="endtDate" name="endtDate">
                </div>
            </div>

            <div class="form__mainitems">
                <div>
                    <label for="tasksAndResponsibilities">Tasks and responsibilities: </label>
                    <input type="text" id="tasksAndResponsibilities" name="tasksAndResponsibilities">
                </div>
            </div>
            <div class="formClass__buttons">
            <button id="cancel" type="button"> X </button>
                <button type="submit">Save</button>
            </div>
        </form>
    </section>
`;
    }
}
