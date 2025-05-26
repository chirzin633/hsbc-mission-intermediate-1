export default function ListBox(props) {
  const { name } = props;
  return (
    <select name={name} id={name} className="w-full p-2 border border-slate-200">
      <option value="pria">Pria</option>
      <option value="wanita">Wanita</option>
    </select>
  );
}
