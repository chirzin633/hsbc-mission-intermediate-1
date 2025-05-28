import { useNavigate } from "react-router";

export default function FooterForm() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col gap-3">
      <Button type="submit" textColor="text-white" bgColor="bg-green-500" labelText="Masuk" onClick={() => navigate("/login")} />
      <Button type="button" textColor="text-[#3ECF4C]" bgColor="bg-[#E2FCD9CC]" labelText="Daftar" onClick={() => navigate("/register")} />
      <div className="flex items-center">
        <span className="h-[2px] w-1/2 bg-slate-200"></span>
        <p className="text-center mx-2 text-slate-600">atau</p>
        <span className="h-[2px] w-1/2 bg-slate-200"></span>
      </div>
      <ButtonSSO>Masuk dengan Google</ButtonSSO>
    </div>
  );
}

export function Button(props) {
  const { textColor, bgColor, labelText, classname, onClick, type } = props;
  return (
    <button type={type} onClick={onClick} className={`py-2 ${bgColor} ${textColor} rounded-xl cursor-pointer font-semibold ${classname}`}>
      {labelText}
    </button>
  );
}

export function ButtonSSO(props) {
  const { children } = props;
  return (
    <button className="flex justify-center py-2 bg-white border border-slate-200 text-slate-500 rounded-xl font-bold" type="submit">
      <img src="../public/img/google.svg" alt="logo google" width="25px" height="25px" className="mr-1" />
      {children}
    </button>
  );
}
