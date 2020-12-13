// autobind decrator
function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
      },
    };
    return adjDescriptor;
  }

// ProjectInput Class
class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;

    // Inputの要素
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    mandayInputElement: HTMLInputElement;


    constructor() {

        // ! は指定された要素は必ず存在するとTypeScriptに教える
        // as ????　は　型は　???? という割り当てをすること
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        // importNode関数でtemplateのcontent　を取得する
        const importedNode = document.importNode(this.templateElement.content, true);

        this.element = importedNode.firstElementChild as HTMLFormElement;

        // ElementIDを割り当てる'user-input';
        this.element.id = 'user-input';

        // Inputの要素
        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.mandayInputElement = this.element.querySelector('#manday') as HTMLInputElement;

        // function を実行する
        this.configure();
        this.attach();
    }

    
    private gatherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredManday = this.mandayInputElement.value;
            if (
                enteredTitle.trim().length === 0 ||
                enteredDescription.trim().length === 0 ||
                enteredManday.trim().length === 0
            ) {
                alert('入力値が正しくありません。再度お試しください。');
                return;
            } else {
                return [enteredTitle, enteredDescription, +enteredManday];
            }
        }

    private clearInputs(){
        this.titleInputElement.value = ``;
        this.descriptionInputElement.value = ``;
        this.mandayInputElement.value = ``;
    }

    @autobind
    private submitHandler(event: Event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)){
           const [title, desc, manday] = userInput;
           console.log(title, desc, manday);
           this.clearInputs();
        }
    }

    private configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }

    // 要素を追加する
    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

const prjInput = new ProjectInput();