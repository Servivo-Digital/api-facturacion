import User from "../models/User";

export const isEmail = (email) => {
  const mailValidator =
    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

  const EmailEvaluation = mailValidator.test(email);
  let isMail = false;

  if (EmailEvaluation) isMail = true;
  consoleMessage("MailValidaror says the mail is", isMail);
  return isMail;
};

export const isRegistered = async (email) => {
  const mail = isEmail(email);

  if (!mail) return;

  const userFound = await User.findOne({ email });

  let isRegistered;
  if (userFound === null) {
    isRegistered = false;
  } else {
    isRegistered = true;
  }

  consoleMessage("isRegistered", isRegistered);

  return isRegistered;
};


export const uniqueUsername = async (username) => {
  
  const unique = await User.findOne({ username });

  let isUnique;
  if (unique === null) 
  {isUnique = false;} 
  else {isUnique = true;}

  consoleMessage("uniqueUsername",isUnique);

  return isUnique;
};


export const consoleMessage = (NameFunction, message) => {
  console.log("  ");
  console.group(`-- ${NameFunction} --`);
  console.log(`--> ${message}`);
  console.groupEnd();
  console.log("  ");
};

