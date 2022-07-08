const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = [
  "`",
  "¬",
  "!",
  "'",
  "£",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  '"',
  ":",
  ";",
  "@",
  "#",
  "~",
  ".",
  ">",
  ",",
  ">",
  "/",
  "?",
  "|",
  "\\",
];

const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//validating username, firstname, lastname, and otheranem;
const normalValidate = (data, username, usernameData) => {
  username = username ?? "";
  usernameData = usernameData ?? [];
  let Err = "";
  if (data == "" || data == undefined) {
    Err = "This field cannot be left empty!";
  } else if (data.length < 3) {
    Err = "Minimum required length is 3";
  } else if (data.length > 30) {
    Err = "Input is too long";
  } else if (containesOne(data, symbols)) {
    Err = "This input field cannot contain symbols";
  } else if (containesOne(data, numbers) && !username) {
    Err = "This input field cannot contain numbers";
  } else if (username) {
    containesOne(data, usernameData) ? (Err = "Username already exist") : "";
  }
  return Err;
};

//date validation method
const dateValidate = (date) => {
  let Err = "";
  const nowDate = new Date();
  const birthDate = new Date(date);
  if (date == undefined || date == "") {
    Err = "This field connot be left empty!";
  } else if (nowDate.getFullYear() < birthDate.getFullYear()) {
    Err = "Invalide date";
  }
  return Err;
};

//validate email
const emailValidate = (email) => {
  let Err = "";
  if (email == undefined || email == "") {
    Err = "";
  } else if (!emailPattern.test(email)) {
    Err = "Invalid email pattern";
  }
  return Err;
};

//validate fullname
const fullNameValidate = (fullname) => {
  let Err = "";
  if (fullname == undefined || fullname == "") {
    Err = "This input field cannot be left empty";
  } else if (fullname.length < 3) {
    Err = "The input is too small!";
  } else if (fullname > 50) {
    Err = "The input is too long!";
  } else if (containesOne(fullname, symbols)) {
    Err = "This input filled cannot contain symbols";
  } else if (containesOne(fullname, numbers)) {
    Err = "This input field cannot contain numerals";
  } else {
    Err = "";
  }
  return Err;
};

//radioValidate
const radioValidate = (data) => {
  let Err = "";
  if (data == "" || data == undefined) {
    Err = "This field cannot be left empty!";
  }
  return Err;
};

//contains on of the items
const containesOne = (value, items) => {
  let response = false;
  for (let i = 0; i < items.length; i++) {
    if (value.indexOf(items[i]) != -1) {
      response = true;
      break;
    }
  }
  return response;
};

export {
  normalValidate,
  dateValidate,
  emailValidate,
  fullNameValidate,
  radioValidate,
};
