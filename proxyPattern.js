import { isValidEmail, isAllLetters } from './validator.js';

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
  set: (target, propery, value) => {
    if (propery === 'username') {
      if (typeof value !== 'string') {
        return 'value should be a string';
      }

      if (isAllLetters(value)) {
        return 'should contain only letters';
      }

      if (!(value.length >= 3)) {
        return 'value should be at least 3 characters long';
      }
    }

    if (propery === 'email' && !isValidEmail(value)) return 'not valid email';
    if (propery === 'age') {
      if (typeof value !== 'number') return 'age should be a number';
      if (typeof value < 18) return 'age should more than 18';
    }

    target[propery] = value;
    return `${propery} is set to ${value}`;
  },
});

console.log(userProxy.firstName);
