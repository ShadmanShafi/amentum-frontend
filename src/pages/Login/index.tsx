import LoginGraphic from "@/assets/LoginGraphic.svg";

const Login = () => {
  return (
    <div className={`h-full bg-[url${LoginGraphic}] bg-cover bg-center`}>
      <div>{/* <img src={LoginGraphic} />{" "} */}</div>
    </div>
  );
};

export default Login;
