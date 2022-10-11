import { isValidEmail, isAllLetters } from './helpers.js';

const user = {
  firstName: 'John',
  lastName: 'Doe',
  username: 'johndoe',
  age: 42,
  email: 'john@doe.com',
};

const userProxy = new Proxy(user, {
  get: (target, property) => {
    return `${new Date()} | The value of ${property} is ${target[property]}`;
  },
  set: (target, property, value) => {
    if (property === 'username') {
      if (typeof value !== 'string') { console.log('value should be a string'); return true};
      if (isAllLetters(value)) { console.log('should contain only letters'); return true}
      if (!(value.length >= 3)) { console.log('value should be at least 3 characters long'); return true}
    }

    if (property === 'email' && !isValidEmail(value)) {
      console.log('not valid email')
      return true;
    };
    if (property === 'age') {
      if (typeof value !== 'number') { console.log('age should be a number'); return true}
      if (value < 18) { console.log('age should more than 18'); return true }
    }

    console.log(`${property} is set to ${value}`);
    return Reflect.set(target, property, value);
  },
});

userProxy.email = "daf@gmail.com"
userProxy.age = 21
userProxy.username = "8fsfs"
console.log(userProxy.age)
