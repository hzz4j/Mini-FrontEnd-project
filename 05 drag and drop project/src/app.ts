// Validatable
interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

// function to validate
function validate(validatableInput: Validatable) {
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
function AutoBind(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log(methodName);
  console.log(descriptor.value);
  const originalMethod = descriptor.value;
  const newDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };

  return newDescriptor;
}

// Project List class
class ProjectList {
  templateElement: HTMLTemplateElement;
  appElement: HTMLDivElement;
  element: HTMLElement;

  constructor(private type: "active" | "finished") {
    this.templateElement = document.getElementById(
      "project-list"
    )! as HTMLTemplateElement;

    this.appElement = <HTMLDivElement>document.getElementById("app")!;
    const importNode = document.importNode(this.templateElement.content, true);
    this.element = importNode.firstElementChild as HTMLElement;
    this.element.id = this.type + "-projects";

    this.attach();
    this.renderContainer();
  }

  private attach() {
    this.appElement.insertAdjacentElement("beforeend", this.element);
  }

  private renderContainer() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;

    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + "-PROJECTS";
  }
}

// ProjectInput class
class ProjectInput {
  templateElement: HTMLTemplateElement;
  appElement: HTMLDivElement;
  formElement: HTMLFormElement;
  titleElement: HTMLInputElement;
  descriptionElement: HTMLTextAreaElement;
  peopleElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.appElement = <HTMLDivElement>document.getElementById("app")!;

    // render
    const importNode: DocumentFragment = document.importNode(
      this.templateElement.content,
      true
    );

    this.formElement = importNode.firstElementChild as HTMLFormElement;
    this.formElement.id = "user-input";

    this.titleElement = this.formElement.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionElement = this.formElement.querySelector(
      "#description"
    ) as HTMLTextAreaElement;
    this.peopleElement = this.formElement.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.attach();
    this.configure();
  }

  /**
   * render form element
   */
  private attach() {
    this.appElement.insertAdjacentElement("afterbegin", this.formElement);
  }

  private gatherUserInputs(): [string, string, number] | void {
    const enteredTitle = this.titleElement.value;
    const enteredDescription = this.descriptionElement.value;
    const enterPeople = this.peopleElement.value;

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
    };
    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
    };
    const peopleValidatable: Validatable = {
      value: +enterPeople,
      required: true,
      min: 1,
      max: 5,
    };

    // valid
    if (
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
    ) {
      alert("Invalid input.Please try again!");
      return;
    }
    return [enteredTitle, enteredDescription, +enterPeople];
  }

  private clearInputs() {
    this.titleElement.value = "";
    this.descriptionElement.value = "";
    this.peopleElement.value = "";
  }

  @AutoBind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInputs = this.gatherUserInputs();
    if (Array.isArray(userInputs)) {
      const [title, description, people] = userInputs;
      console.log(title, description, people);
      this.clearInputs();
    }
  }

  private configure() {
    // this.formElement.addEventListener("submit", this.submitHandler.bind(this));
    this.formElement.addEventListener("submit", this.submitHandler);
  }
}

const prjInput = new ProjectInput();
const activePrjList = new ProjectList("active");
const finishedPrjList = new ProjectList("finished");
