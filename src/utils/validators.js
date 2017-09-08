const validEmail = (email) => {
  return email && email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
}

const validPassword = (password) => {
  return password && password.length >= 8 && password.length <= 52;
}

const validText = (text) => {
  return text && text.match(/^[a-zA-Z]+$/i);
}

export {validEmail, validPassword, validText}
