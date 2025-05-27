import { Button } from "../Button/Button";
import Input from "../Input/Input";

export default function Hero(props) {
  const { children, bgImg } = props;
  return (
    <section className="container mx-auto text-center text-white my-6 px-4 xl:px-40">
      <div className={`${bgImg} bg-cover bg-center bg-black/80 bg-blend-overlay flex flex-col items-center justify-center gap-4 rounded-lg py-10 px-4 xl:px-28`}>{children}</div>
    </section>
  );
}

export function HeroTop() {
  return (
    <Hero bgImg="bg-[url(../public/img/hero1.jpeg)]">
      <h1 className="text-4xl font-extrabold">Revolusi Pembelajaran: Temukan Ilmu Baru Melalui Platform Video Interaktif!</h1>
      <p className="text-lg">
        Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
      </p>
      <Button labelText="Temukan Video Course untuk Dipelajari!" classname="p-2 bg-green-500 rounded-xl" />
    </Hero>
  );
}

export function HeroBottom() {
  return (
    <Hero bgImg="bg-[url(../public/img/hero2.jpg)]">
      <h5 className="uppercase">Newsletter</h5>
      <h1 className="text-3xl text-center font-extrabold">Mau Belajar Lebih Banyak?</h1>
      <p className="text-center font-semibold">Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id</p>
      <div className="flex flex-col gap-4 w-full max-w-md mt-10 lg:max-w-xl lg:flex-row lg:items-center lg:relative">
        <Input type="email" name="email" placeholder="email" classname="bg-white rounded-xl placeholder:text-center placeholder:text-slate-600 text-black lg:p-4 lg:w-full lg:placeholder:text-start outline-none" />
        <Button bgColor="bg-orange-400" labelText="Subscribe" classname="rounded-xl font-bold lg:absolute top-0 right-4 lg:translate-y-2 lg:w-1/4" />
      </div>
    </Hero>
  );
}
