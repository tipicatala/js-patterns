class CreateUser {
  constructor({ firstName, lastName, email }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.fullName = `${firstName} ${lastName}`;
  }

  checkLastOnline() {
    console.log(`${this.fullName} was last online at ${Date.now()}`);
  }
  sendEmail() {
    console.log(`Email sent to ${email}`);
  }
  delete() {
    console.log("User removed");
  }
}

const user = new CreateUser({
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.com",
});

const user2 = new CreateUser({
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@doe.com",
});

console.log(user.delete === user2.delete);
user.checkLastOnline();
