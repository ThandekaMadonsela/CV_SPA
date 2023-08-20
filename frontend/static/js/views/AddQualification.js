import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Add Qualification");
    }

    async getHtml() {
        return `
    <div class="education__section">
    
    <br>
    <h1>Add Qualification</h1>
        <form action="" class="education__info">
            <div class="form__mainitems">
                <div>
                    <label for="institutionName">Institution: </label>
                    <input type="text" id="institutionName" name="institutionName">
                </div>
                <div>
                    <label for="qualificationName">Qualification name: </label>
                    <input type="text" id="qualificationName" name="qualificationName">
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
                    <label for="subjects">Subjects: </label>
                    <input type="text" id="subjects" name="subjects">
                </div>
                <div>  
                    <label for="majors">Majors: </label>
                    <input type="text" id="majors" name="majors">
                </div>
            </div>
            <div class="form__mainitems">
                <div>
                    <label for="subMajors">Sub majors: </label>
                    <input type="text" id="subMajors" name="subMajors">
                </div>
                <div>  
                    <label for="research">Research: </label>
                    <input type="text" id="research" name="research">
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
