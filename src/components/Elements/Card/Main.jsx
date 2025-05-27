import Card from "./Card";
import Menu from "./Menu";

export default function MainCard() {
  return (
    <section className="container mx-auto px-4 xl:px-40">
      <Menu />
      <Card />
    </section>
  );
}
