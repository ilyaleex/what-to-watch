export enum ErrorMessage {
  SignInValidate = 'We can’t recognize this email \n and password combination. Please try again.',
  IncorrectEmail = 'Please enter a valid email address',
  ServerError = 'Unknown server error'
}

export const signInValidator = (email: string, password: string): string | void => {
  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  const isPasswordValid = /^[a-zA-Z0-9]+/.test(password);

  if (!email || !isPasswordValid) {
    return ErrorMessage.SignInValidate;
  }

  if (!isEmailValid) {
    return ErrorMessage.IncorrectEmail;
  }
};
