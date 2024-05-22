import { isValidEmail, isValidPhoneNumber } from "6pp";

export const emailValidator = (email) => {
  if (!isValidEmail(email))
    return { isValid: false, errorMessage: "Email is Invalid" };
};

export const mobileValidator = (mobile) => {
  if (!isValidPhoneNumber(mobile))
    return { isValid: false, errorMessage: "Mobile No. is Invalid" };
};
