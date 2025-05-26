export default function Header(props) {
  const { children } = props;
  return (
    <header className="bg-white shadow-lg xl:shadow-sm sticky">
      <nav className="flex justify-between items-center px-5">{children}</nav>
    </header>
  );
}

export function HeaderForm() {
  return (
    <Header>
      <img src="../public/img/Frame 3.svg" alt="logo video belajar" />;
    </Header>
  );
}
