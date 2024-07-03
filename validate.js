export const validName = (name) => {
  name = name.toLowerCase();
  const regex = /^[a-z]{3,}(?: [a-z]{3,}){0,2}$/;
  return regex.test(name);
};

export const validEmail = (email) => {
  email = email.toLowerCase();
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};
