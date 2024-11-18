import * as Yup from "yup";

export const accountCreationSchema = Yup.object({
  partyType: Yup.string().required(),
  party_name: Yup.string().required(),
  date: Yup.date().required(),
  email: Yup.string().email("Please enter valid email"),
});

export const addUserSchema = Yup.object({
  name: Yup.string().required(),
  password: Yup.string()
    // .matches(
    //   /^(?=.*[!@#$%^&*()_\-+={}[\]:";'<>?,./\\])(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_\-+={}[\]:";'<>?,./\\]{8,}$/,
    //   "The password should be at least 8 characters long and must include at least one uppercase letter, one lowercase letter, one number, and one special character."
    // )
    .required("Please enter your new password"),
  cPassword: Yup.string()
    // .min(6)
    .required()
    .oneOf(
      [Yup.ref("password")],
      "password do not match! Please Check and enter again."
    ),
  phone: Yup.string().min(10).required(),
  designation: Yup.string().required(),
  type: Yup.string().required(),
});

export const addCompanySchema = Yup.object({
  name: Yup.string().required(),
  pan: Yup.string(),
  mobile: Yup.string().min(10).required(),
  email: Yup.string().email("Please enter valid email").required(),
});

export const addMetalItemSchema = Yup.object({
  name: Yup.string().required(),
  tunch: Yup.number().min(0).max(100).required(),
  badla: Yup.number().required(),
  metal: Yup.string().required(),
});

export const addCategorySchema = Yup.object({
  category: Yup.string().required(),
  metal: Yup.string().required(),
});

export const addBranchSchema = Yup.object({
  branch_id: Yup.string().required(),
  branchCode: Yup.number().required(),
  name: Yup.string().required(),
  address: Yup.string().required(),
  mobile: Yup.string().min(10).required(),
  city: Yup.string().required(),
});
