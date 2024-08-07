import { Form, Formik } from "formik";
import InputField from "../FormFields/InputField";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [remember, setRemember] = useState(false);

  return (
    <Formik
      initialValues={initialValues}
      //   validationSchema={}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
      }}
    >
      {({ values, errors, touched }) => (
        <Form className="w-full flex flex-col gap-6">
          <InputField
            labelName="Email"
            type="email"
            name="email"
            placeholder="Enter email id"
            value={values.email}
            touched={touched}
            errors={errors?.email}
          />

          <InputField
            labelName="Password"
            type="password"
            name="password"
            placeholder="Enter password"
            value={values.password}
            touched={touched}
            errors={errors?.password}
          />

          <div className="flex flex-row gap-2 pt-6">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              value={String(remember)}
              onChange={(e) => setRemember(Boolean(e.target.value))}
            />
            <label
              className="w-full text-primary text-[12px] font-medium"
              htmlFor="remember"
            >
              Remember me for 30 days
            </label>
          </div>

          <div className="flex flex-col justify-center items-center gap-5">
            <button
              className="w-[100%] h-[32px] flex justify-center items-center font-medium text-[14px] rounded-[6px] bg-secondary text-[white]"
              type="submit"
              //   disabled={loading}
            >
              {/* {loading ? <Loader /> : "Log In"} */}
              Login
            </button>

            <button
              className="w-[100%] h-[32px] flex gap-2 justify-center items-center font-medium text-[14px] rounded-[6px] border-primary border-solid border text-[#101319]"
              type="submit"
              //   disabled={loading}
            >
              <FcGoogle /> Sign up with Google
            </button>
          </div>

          <p className="text-primary text-[12px] font-medium">
            Need help?
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
