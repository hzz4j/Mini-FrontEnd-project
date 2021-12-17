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
    const importNode = document.importNode(this.templateElement.content, true);

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
    const title = this.titleElement.value;
    const description = this.descriptionElement.value;
    const people = this.peopleElement.value;

    // valid
    if (
      title.trim().length === 0 ||
      description.trim().length === 0 ||
      people.trim().length === 0
    ) {
      alert("Invalid input.Please try again!");
      return;
    }
    return [title, description, +people];
  }

  @AutoBind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInputs = this.gatherUserInputs();
    if (Array.isArray(userInputs)) {
      const [title, description, people] = userInputs;
      console.log(title, description, people);
    }
  }

  private configure() {
    // this.formElement.addEventListener("submit", this.submitHandler.bind(this));
    this.formElement.addEventListener("submit", this.submitHandler);
  }
}

const prjInput = new ProjectInput();
