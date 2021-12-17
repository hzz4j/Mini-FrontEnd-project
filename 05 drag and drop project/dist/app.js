"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// autobind decorator
function AutoBind(target, methodName, descriptor) {
    console.log(methodName);
    console.log(descriptor.value);
    const originalMethod = descriptor.value;
    const newDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return newDescriptor;
}
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById("project-input");
        this.appElement = document.getElementById("app");
        // render
        const importNode = document.importNode(this.templateElement.content, true);
        this.formElement = importNode.firstElementChild;
        this.formElement.id = "user-input";
        this.titleElement = this.formElement.querySelector("#title");
        this.descriptionElement = this.formElement.querySelector("#description");
        this.peopleElement = this.formElement.querySelector("#people");
        this.attach();
        this.configure();
    }
    /**
     * render form element
     */
    attach() {
        this.appElement.insertAdjacentElement("afterbegin", this.formElement);
    }
    gatherUserInputs() {
        const title = this.titleElement.value;
        const description = this.descriptionElement.value;
        const people = this.peopleElement.value;
        // valid
        if (title.trim().length === 0 ||
            description.trim().length === 0 ||
            people.trim().length === 0) {
            alert("Invalid input.Please try again!");
            return;
        }
        return [title, description, +people];
    }
    submitHandler(event) {
        event.preventDefault();
        const userInputs = this.gatherUserInputs();
        if (Array.isArray(userInputs)) {
            const [title, description, people] = userInputs;
            console.log(title, description, people);
        }
    }
    configure() {
        // this.formElement.addEventListener("submit", this.submitHandler.bind(this));
        this.formElement.addEventListener("submit", this.submitHandler);
    }
}
__decorate([
    AutoBind
], ProjectInput.prototype, "submitHandler", null);
const prjInput = new ProjectInput();
