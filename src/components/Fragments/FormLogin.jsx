import { useNavigate } from "react-router";
import FooterForm from "../Elements/Button/Button";
import ForgotPassword from "../Elements/ForgotPassword/ForgotPassword";
import Input from "../Elements/Input/Input";
import Label from "../Elements/Input/Label";

export default function FormLogin() {
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    navigate("/beranda");
  }
  return (
    <>
      <h1 className="font-bold text-2xl text-center">Masuk ke Akun</h1>
      <p className="text-slate-500 mb-4 text-center">Yuk, Lanjutin belajarmu di videobelajar</p>
      <form action="#" method="post" className="flex flex-col gap-2" onSubmit={handleLogin}>
        <Label htmlFor="email" place>
          Email{" "}
        </Label>
        <Input type="email" name="email" placeholder="email" />
        <Label htmlFor="password">Password </Label>
        <Input type="password" name="password" placeholder="password" />
        <ForgotPassword />
        <FooterForm />
      </form>
    </>
  );
}
