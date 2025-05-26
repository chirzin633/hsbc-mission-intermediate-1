export default function Label(props) {
  const { htmlFor, children } = props;
  return (
    <label htmlFor={htmlFor} className="after:content-['*'] after:text-red-500 -mb-2">
      {children}
    </label>
  );
}
