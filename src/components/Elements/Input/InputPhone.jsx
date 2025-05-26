import Input from "./Input";

export default function InputPhone() {
  return (
    <div className="flex gap-4 mt-1">
      <div className="flex items-center border rounded border-slate-200">
        <span className="bg-slate-200 p-2 border-r border-r-slate-200">🇮🇩</span>
        <select name="country" id="country" className="w-16 md:w-32 px-1">
          <option value="ind">+62</option>
        </select>
      </div>
      <Input type="number" name="phone" placeholder="phone" />
    </div>
  );
}
