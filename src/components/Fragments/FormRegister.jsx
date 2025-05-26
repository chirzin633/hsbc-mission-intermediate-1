import FooterForm from "../Elements/Button/Button";
import ForgotPassword from "../Elements/ForgotPassword/ForgotPassword";
import Input from "../Elements/Input/Input";
import InputPhone from "../Elements/Input/InputPhone";
import Label from "../Elements/Input/Label";
import ListBox from "../Elements/Input/ListBox";

export default function FormRegister() {
  return (
    <>
      <h1 className="font-bold text-2xl text-center">Pendaftaran Akun</h1>
      <p className="text-slate-500 mb-4 text-center">Yuk, Daftarkan akunmu sekarang</p>
      <form action="#" method="post" className="flex flex-col gap-3">
        <Label htmlFor="name">Nama Lengkap </Label>
        <Input type="text" name="name" placeholder="nama lengkap" />
        <Label htmlFor="email">Email </Label>
        <Input type="email" name="email" placeholder="email" />
        <Label htmlFor="jk">Jenis Kelamin </Label>
        <ListBox name="name" />
        <Label htmlFor="phone">No. Hp </Label>
        <InputPhone />
        <Label htmlFor="password">Kata Sandi </Label>
        <Input type="password" name="password" placeholder="password" />
        <Label htmlFor="confirmPassword">Konfirmasi Kata Sandi </Label>
        <Input type="password" name="confirmPassword" placeholder=" konfirmasi password" />
      </form>
      <ForgotPassword />
      <FooterForm />
    </>
  );
}
