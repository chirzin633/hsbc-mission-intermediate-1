import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Input(props) {
  const { type, name, placeholder, classname } = props;
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="w-full relative">
      <input type={showPassword ? "text" : type} name={name} placeholder={`Masukkan ${placeholder}`} id={name} className={`w-full p-2 border rounded border-slate-200 ${classname}`} />

      {isPassword && (
        <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
  );
}
