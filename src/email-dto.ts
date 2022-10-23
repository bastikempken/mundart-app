export class Email {
  public from: string;
  public to: string;
  public subject: string;
  public content: string;
  public replyTo: string;

  constructor(builder: Builder) {
    this.from = builder.fromValue;
    this.to = builder.toValue;
    this.subject = builder.subjectValue;
    this.content = builder.contentValue;
    this.replyTo = builder.replyToValue;
  }
  static get Builder() {
    return new Builder();
  }
}

export class Builder {
  public fromValue: string;
  public toValue: string;
  public subjectValue: string;
  public contentValue: string;
  public replyToValue: string;

  from(from: string) {
    this.fromValue = from;
    return this;
  }
  to(to: string) {
    this.toValue = to;
    return this;
  }
  subject(subject: string) {
    this.subjectValue = subject;
    return this;
  }
  content(content: string) {
    this.contentValue = content;
    return this;
  }
  replyTo(replyTo: string) {
    this.replyToValue = replyTo;
    return this;
  }
  build() {
    return new Email(this);
  }
}
