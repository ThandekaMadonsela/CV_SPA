import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Add Referee");
    }

    async getHtml() {
        return `
        <div class="referee__section">

               
            </div>
            <section class="referee" id="referee">
            <br>
            <h1>Add Referee</h1>
                <form action="" class="referee__info">
                    <div class="form__mainitems">
                        <div>
                            <label for="name">Refree name: </label>
                            <input type="text" id="name" name="name">
                        </div>
                        <div>
                            <label for="jobTitle">Job title: </label>
                            <input type="text" id="jobTitle" name="jobTitle">
                        </div>
                    </div>

                    <div class="form__mainitems">
                        <div>
                            <label for="email">Email: </label>
                            <input type="email" id="email" name="email">
                        </div>
                        <div>               
                            <label for="cell">Contact number: </label>
                            <input type="tel" id="cell" name="cell">
                        </div>
                    </div>
                    <div class="form__mainitems">
                        <div>
                            <label for="insitution">Insitution: </label>
                            <input type="text" id="insitution" name="insitution">
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
