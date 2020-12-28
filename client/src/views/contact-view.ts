import { render, html, TemplateResult } from "lit-html";
import { styleMap } from "lit-html/directives/style-map";

const ID_MODAL = "feedback-modal";
const FORM_NAME = "form-name";
const FORM_EMAIL = "form-email";
const FORM_CONTENT = "form-content";

export default class ContactView extends HTMLElement {
  private validName = true;
  private validSender = true;
  private validContent = true;

  constructor() {
    super();
  }

  get name(): string {
    return (<HTMLInputElement>this.querySelector(`#${FORM_NAME}`)).value;
  }

  get sender(): string {
    return (<HTMLInputElement>this.querySelector(`#${FORM_EMAIL}`)).value;
  }

  get content(): string {
    return (<HTMLInputElement>this.querySelector(`#${FORM_CONTENT}`)).value;
  }

  get honeypot(): string {
    return (<HTMLInputElement>this.querySelector(`input[name="content"]`))
      .value;
  }

  private clickSubmit(e: MouseEvent): void {
    e.preventDefault();
    if (this.validateForm() && this.honeypot === "") {
      //@ts-ignore
      this.sendForm().then(() => UIkit.modal(`#${ID_MODAL}`).show());
    } else {
      this.render();
    }
  }

  private validateForm(): boolean {
    this.validName = this.name !== "";
    this.validSender = this.sender !== "";
    this.validContent = this.content !== "";
    return this.validName && this.validSender && this.validContent;
  }

  private sendForm(): Promise<void> {
    return new Promise((resolve, reject) => {
      const httpRequest = new XMLHttpRequest();
      httpRequest.open("POST", "/.netlify/functions/emailSubmit");
      httpRequest.setRequestHeader("Content-type", "application/json");
      httpRequest.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE) {
          if (this.status === 200) {
            resolve();
          } else {
            reject();
          }
        }
      };
      const payload = JSON.stringify({
        sender: this.sender,
        name: this.name,
        content: this.content,
      });
      httpRequest.send(payload);
    });
  }

  private onChange(event: Event): void {
    const htmlElement = <HTMLElement>event.target;
    htmlElement.classList.remove("uk-form-danger");
  }

  private renderModal(): TemplateResult {
    return html`
      <div id=${ID_MODAL} uk-modal>
        <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
          <h2 class="uk-modal-title">Nachricht erfolgreich versendet</h2>
          <p>
            Ihre Nachricht wurde erfolgreich versendet. Sie erhalten eine
            Bestätigung per Email und wir werden uns in Kürze bei Ihnen melden.
          </p>
          <p class="uk-text-right">
            <button
              class="uk-button uk-button-primary uk-modal-close"
              type="button"
            >
              OK
            </button>
          </p>
        </div>
      </div>
    `;
  }

  private renderNameInput(): TemplateResult {
    const classList = ["uk-input", "uk-form-width-large"];
    if (!this.validName) {
      classList.push("uk-form-danger");
    }
    return html`
      <div class="uk-margin">
        <label class="uk-form-label" for=${FORM_NAME}>Name*</label>
        <div class="uk-form-controls">
          <input
            id=${FORM_NAME}
            class=${classList.join(" ")}
            type="text"
            placeholder="Name"
            @input=${this.onChange}
          />
        </div>
      </div>
    `;
  }

  private renderEmailInput(): TemplateResult {
    const classList = ["uk-input", "uk-form-width-large"];
    if (!this.validSender) {
      classList.push("uk-form-danger");
    }
    return html`
      <div class="uk-margin">
        <label class="uk-form-label" for=${FORM_EMAIL}>Email*</label>
        <div class="uk-form-controls">
          <input
            id=${FORM_EMAIL}
            class=${classList.join(" ")}
            type="text"
            placeholder="Email"
            @input=${this.onChange}
          />
        </div>
      </div>
    `;
  }

  private renderContentInput(): TemplateResult {
    const classList = ["uk-textarea", "uk-form-width-large"];
    if (!this.validContent) {
      classList.push("uk-form-danger");
    }
    return html`
      <div class="uk-margin">
        <label class="uk-form-label" for=${FORM_CONTENT}>Nachricht*</label>
        <div class="uk-form-controls">
          <textarea
            id=${FORM_CONTENT}
            class=${classList.join(" ")}
            placeholder="Nachricht"
            @input=${this.onChange}
          ></textarea>
        </div>
      </div>
    `;
  }

  private renderForm(): TemplateResult {
    return html`
      <h2>Email</h2>
      <form>
        ${this.renderModal()}
        <!-- Name -->
        ${this.renderNameInput()}
        <!-- Email -->
        ${this.renderEmailInput()}
        <!-- Nachricht -->
        ${this.renderContentInput()}
        <!-- Honeypot -->
        <input type="text" name="content" class="form-content" />
        <!-- Button -->
        <div class="uk-margin">
          <button
            class="uk-button uk-button-default"
            @click=${(e) => this.clickSubmit(e)}
          >
            Abschicken
          </button>
        </div>
      </form>
    `;
  }

  private render(): void {
    const template = html`
      <h1>Kontakt</h1>
      <h2>Adresse</h2>
      <p>
        Römerstraße 365 A<br />
        47178 Duisburg
      </p>
      <h2>Öffnungszeiten</h2>
      <p>
        Montag - Donnerstag: 08:00 – 18:30
        <br />
        Freitag: 08:00 – 17:00
        <br />
        Samstag: geschlossen <br />
        Sonntag: geschlossen
      </p>
      <h2>Telefon</h2>
      <p>
        Telefon: +49 203/93451097
        <br />
        Telefax: +49 203/93451098
        <br />
        Mobil: +49 170/4917479 <br />
      </p>
      <h2>Social Media</h2>
      <div>
        <img
          alt="https://www.facebook.com/logopaediekraehahn/"
          src=${"assets/fb-logo.png"}
        />
      </div>
      ${this.renderForm()}
    `;
    render(template, this);
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("contact-view", ContactView);
