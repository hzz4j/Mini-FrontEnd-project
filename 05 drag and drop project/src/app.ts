class ProjectInput {
  templateElement: HTMLTemplateElement;
  appElement: HTMLDivElement;
  formElement: HTMLFormElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;

    this.appElement = <HTMLDivElement>document.getElementById("app")!;

    // render
    const importNode = document.importNode(this.templateElement.content, true);

    this.formElement = importNode.firstElementChild as HTMLFormElement;

    this.attach();
  }

  /**
   * render form element
   */
  private attach() {
    this.appElement.insertAdjacentElement("afterbegin", this.formElement);
  }
}

const prjInput = new ProjectInput();
