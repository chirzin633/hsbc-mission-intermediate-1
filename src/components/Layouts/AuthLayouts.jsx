export default function AuthLayouts(props) {
  const { children } = props;
  return (
    <section className="flex justify-center items-center px-3 pt-10 pb-5 lg:pt-32 lg:pb-10">
      <div className="bg-white p-8 w-full max-w-lg rounded-md border border-slate-100 flex flex-col gap-2">{children}</div>
    </section>
  );
}
