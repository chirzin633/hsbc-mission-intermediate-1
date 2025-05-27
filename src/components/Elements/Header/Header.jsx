export default function Header(props) {
  const { children } = props;
  return <header className="bg-white shadow-lg xl:shadow-sm sticky">{children}</header>;
}

export function HeaderForm() {
  return (
    <Header>
      <nav className="flex justify-between items-center px-5">
        <img src="../public/img/Frame 3.svg" alt="logo video belajar" />
      </nav>
    </Header>
  );
}

export function HeaderBeranda() {
  return (
    <nav className="px-5 flex justify-between items-center md:w-[80%] md:mx-auto md:px-0">
      <img src="../public/img/Frame 3.svg" alt="logo video belajar" />
      <div className="hidden text-slate-500 sm:flex items-center gap-4">
        <h1>Kategori</h1>
        <img src="./assets/img/Avatar.svg" alt="Avatar" />
      </div>
      <div className="sm:hidden">
        <span className="block w-[30px] h-[2px] bg-black my-2"></span>
        <span className="block w-[30px] h-[2px] bg-black my-2"></span>
        <span className="block w-[30px] h-[2px] bg-black my-2"></span>
      </div>
    </nav>
  );
}
