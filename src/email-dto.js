class Email {
  constructor(build) {
    this.from = build.from;
    this.to = build.to;
    this.subject = build.subject;
    this.content = build.content;
    this.replyTo = build.replyTo;
  }
  static get Builder() {
    class Builder {
      from(from) {
        this.from = from;
        return this;
      }
      to(to) {
        this.to = to;
        return this;
      }
      subject(subject) {
        this.subject = subject;
        return this;
      }
      content(content) {
        this.content = content;
        return this;
      }
      replyTo(replyTo) {
        this.replyTo = replyTo;
        return this;
      }
      build() {
        return new Email(this);
      }
    }
    return Builder;
  }
}

module.exports.Email = Email;
