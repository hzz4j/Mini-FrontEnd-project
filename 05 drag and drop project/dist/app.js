"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// function to validate
function validate(validatableInput) {
    const value = validatableInput.value;
    let isValid = true;
    // required check
    if (validatableInput.required) {
        isValid = isValid && value.toString().trim().length !== 0;
    }
    // check minLength
    if (validatableInput.minLength != null && typeof value === "string") {
        isValid = isValid && value.length >= validatableInput.minLength;
    }
    // check maxLength
    if (validatableInput.maxLength != null && typeof value === "string") {
        isValid = isValid && value.length <= validatableInput.maxLength;
    }
    // check min
    if (validatableInput.min != null && typeof value === "number") {
        isValid = isValid && value >= validatableInput.min;
    }
    // check max
    if (validatableInput.max != null && typeof value === "number") {
        isValid = isValid && value <= validatableInput.max;
    }
    return isValid;
}
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
// enum ProjectStatus
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
})(ProjectStatus || (ProjectStatus = {}));
// Project class
class Project {
    constructor(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
}
class State {
    constructor() {
        this.listeners = [];
    }
    addListen(fn) {
        this.listeners.push(fn);
    }
}
// Project Statement Management
class ProjectState extends State {
    constructor() {
        super();
        this.projects = [];
    }
    addProject(title, description, numPeople) {
        const project = new Project(Math.random().toString(), title, description, numPeople, ProjectStatus.Active);
        this.projects.push(project);
        for (const listenFn of this.listeners) {
            listenFn(this.projects.slice());
        }
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }
}
// Global Project statement
const projectState = ProjectState.getInstance();
class Component {
    constructor(templateId, appId, isBeforeEnd, newElementId) {
        this.templateElement = document.getElementById(templateId);
        this.hostElement = document.getElementById(appId);
        const importNode = document.importNode(this.templateElement.content, true);
        this.element = importNode.firstElementChild;
        if (newElementId) {
            this.element.id = newElementId;
        }
        this.attach(isBeforeEnd);
    }
    attach(beforeEnd) {
        this.hostElement.insertAdjacentElement(beforeEnd ? "beforeend" : "afterbegin", this.element);
    }
}
// Project List class
class ProjectList extends Component {
    constructor(type) {
        super("project-list", "app", true, type + "-projects");
        this.type = type;
        this.assignedProjects = [];
        // add listen
        projectState.addListen((projects) => {
            const relvantProjects = projects.filter((prj) => {
                if (this.type === "active") {
                    return prj.status === ProjectStatus.Active;
                }
                return prj.status === ProjectStatus.Finished;
            });
            this.assignedProjects = relvantProjects;
            this.renderProjects();
        });
        this.renderContent();
    }
    configure() { }
    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector("ul").id = listId;
        this.element.querySelector("h2").textContent =
            this.type.toUpperCase() + "-PROJECTS";
    }
    renderProjects() {
        const listId = `${this.type}-projects-list`;
        const ulEl = document.getElementById(listId);
        ulEl.innerHTML = "";
        for (const project of this.assignedProjects) {
            const li = document.createElement("li");
            li.textContent = project.title;
            ulEl.appendChild(li);
        }
    }
}
// ProjectInput class
class ProjectInput extends Component {
    constructor() {
        super("project-input", "app", false, "user-input");
        this.titleElement = this.element.querySelector("#title");
        this.descriptionElement = this.element.querySelector("#description");
        this.peopleElement = this.element.querySelector("#people");
        this.configure();
    }
    configure() {
        // this.formElement.addEventListener("submit", this.submitHandler.bind(this));
        this.element.addEventListener("submit", this.submitHandler);
    }
    renderContent() { }
    gatherUserInputs() {
        const enteredTitle = this.titleElement.value;
        const enteredDescription = this.descriptionElement.value;
        const enterPeople = this.peopleElement.value;
        const titleValidatable = {
            value: enteredTitle,
            required: true,
        };
        const descriptionValidatable = {
            value: enteredDescription,
            required: true,
        };
        const peopleValidatable = {
            value: +enterPeople,
            required: true,
            min: 1,
            max: 5,
        };
        // valid
        if (!validate(titleValidatable) ||
            !validate(descriptionValidatable) ||
            !validate(peopleValidatable)) {
            alert("Invalid input.Please try again!");
            return;
        }
        return [enteredTitle, enteredDescription, +enterPeople];
    }
    clearInputs() {
        this.titleElement.value = "";
        this.descriptionElement.value = "";
        this.peopleElement.value = "";
    }
    submitHandler(event) {
        event.preventDefault();
        const userInputs = this.gatherUserInputs();
        if (Array.isArray(userInputs)) {
            const [title, description, people] = userInputs;
            console.log(title, description, people);
            projectState.addProject(title, description, people);
            this.clearInputs();
        }
    }
}
__decorate([
    AutoBind
], ProjectInput.prototype, "submitHandler", null);
const prjInput = new ProjectInput();
const activePrjList = new ProjectList("active");
const finishedPrjList = new ProjectList("finished");
