class ProjectInput {
  templateElement: HTMLTemplateElement;
  appElement: HTMLDivElement;
  formElement: HTMLFormElement;
  titleElement: HTMLInputElement;
  descriptionElement: HTMLTextAreaElement;
  peopleElement:HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;

    this.appElement = <HTMLDivElement>document.getElementById("app")!;

    // render
    const importNode = document.importNode(this.templateElement.content, true);

    this.formElement = importNode.firstElementChild as HTMLFormElement;
    this.formElement.id = "user-input";

    this.titleElement = this.formElement.querySelector("#title") as HTMLInputElement;
    this.descriptionElement = this.formElement.querySelector("#description") as HTMLTextAreaElement;
    this.peopleElement = this.formElement.querySelector("#people") as HTMLInputElement;

    this.attach();
    this.configure();
  }

  /**
   * render form element
   */
  private attach() {
    this.appElement.insertAdjacentElement("afterbegin", this.formElement);
  }

  private submitHandler(event: Event){
      event.preventDefault();
      const title = this.titleElement.value;
      console.log(title);
      

  }
  private configure(){
      this.formElement.addEventListener("submit",this.submitHandler.bind(this))
  }
}

const prjInput = new ProjectInput();
