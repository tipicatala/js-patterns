let observers = [];

export const Observable = Object.freeze({
  subscribe: (observer) => observers.push(observer),
  unsubscribe: (observer) => {
    observers = observers.filter((el) => el !== observer);
  },
  notify: (data) => {
    observers.forEach((observer) => observer(data));
  },
});