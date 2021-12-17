"use strict";
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById("project-input");
        this.appElement = document.getElementById("app");
        // render
        const importNode = document.importNode(this.templateElement.content, true);
        this.formElement = importNode.firstElementChild;
        this.attach();
    }
    /**
     * render form element
     */
    attach() {
        this.appElement.insertAdjacentElement("afterbegin", this.formElement);
    }
}
const prjInput = new ProjectInput();
