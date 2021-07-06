import User from "../models/User";

export const mailValidation = async (email) => {
  const mailValidator =
    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

  let isRegistered = false;

  const isMail = mailValidator.test(email);

  if (isMail == true) {

    const userFound = await User.findOne({ email });
    if (userFound === null) {
      isRegistered = false;
    } else {
      isRegistered = true;
    }
    return isRegistered;
  } else {
    console.log('email no valido')
    return "Email not validate";
  }
};
