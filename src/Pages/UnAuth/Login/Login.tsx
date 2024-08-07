import LoginForm from "../../../components/unAuth/LoginForm";
import SidePart from "../../../components/unAuth/SidePart";

const Login = () => {
  return (
    <div className="w-full h-full flex">
      <SidePart />
      <div className="flex flex-col justify-center w-1/2 p-12 overflow-auto h-full">
        <div className="flex max-w-[200px] font-text text-[16px] gap-3 text-[#8591A2] border-b border-[#8591A2] border-solid pb-1 pl-2">
          <p className="text-primary font-bold">Login</p>
          <p className="w-[1px] h-[26px] border border-[#8591A2] border-solid"></p>
          <p>Sign up</p>
        </div>

        <div className="pt-9">
          <h1 className="text-primary font-bold text-[30px]">Welcome,</h1>
          <p className="font-text text-[#8591A2] text-[16px]">
            Please enter your details below to log in
          </p>
        </div>

        <div className="pt-8 w-full">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
