export default function Card() {
  return (
    <div className="w-full grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:[direction:rtl]">
      <SectionCard classname="bg-[url(../public/img/card/card1.jpeg)]" img="../public/img/card/ava1.svg" />
      <SectionCard classname="bg-[url(../public/img/card/card2.jpeg)]" img="../public/img/card/ava2.svg" />
      <SectionCard classname="bg-[url(../public/img/card/card3.jpeg)]" img="../public/img/card/ava3.svg" />
      <SectionCard classname="bg-[url(../public/img/card/card4.jpeg)]" img="../public/img/card/ava4.svg" />
      <SectionCard classname="bg-[url(../public/img/card/card5.jpeg)]" img="../public/img/card/ava5.svg" />
      <SectionCard classname="bg-[url(../public/img/card/card6.jpeg)]" img="../public/img/card/ava6.svg" />
      <SectionCard classname="bg-[url(../public/img/card/card7.jpeg)]" img="../public/img/card/ava7.svg" />
      <SectionCard classname="bg-[url(../public/img/card/card8.jpeg)]" img="../public/img/card/ava8.svg" />
      <SectionCard classname="bg-[url(../public/img/card/card9.jpeg)]" img="../public/img/card/ava9.svg" />
    </div>
  );
}

export function SectionCard(props) {
  const { classname, img } = props;
  return (
    <div className="bg-white rounded-xl p-4 mb-1 lg:mb-5 border-2 border-slate-200 max-w-md mx-auto xl:[direction:ltr]">
      <div className="flex items-center justify-start xl:block">
        <div className={`${classname} h-[100px] w-[100px] bg-cover bg-center rounded-lg mr-4 xl:w-full xl:h-36`}></div>

        <p className="hidden xl:block xl:my-2 xl:text-slate-400 xl:text-sm ">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik</p>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold xl:text-lg">Big 4 Auditor Financial Analyst</h2>
          <div className="flex">
            <img src={img} alt="avatar mentor" className="w-11 xl:w-8" />
            <div className="ml-2">
              <h3 className="font-semibold text-lg xl:text-base">Jenna Ortega</h3>
              <p className="text-sm text-slate-500 xl:text-xs">
                Senior Accountant{" "}
                <span className="hidden xl:inline-block">
                  di <span className="font-bold">Gojek</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center xl:text-xs">
          <span>
            <img src="./assets/img/card/star-full.svg" alt="" />
          </span>
          <span>
            <img src="./assets/img/card/star-full.svg" alt="" />
          </span>
          <span>
            <img src="./assets/img/card/start-stgh.svg" alt="" />
          </span>
          <span>
            <img src="./assets/img/card/start-empty.svg" alt="" />
          </span>
          <span>
            <img src="./assets/img/card/start-empty.svg" alt="" />
          </span>
          <div className="ml-5 text-slate-500 font-semibold xl:ml-2">
            <p className="underline underline-offset-[3px]">3.5 (86)</p>
          </div>
        </div>
        <div>
          <p className="text-4xl font-bold text-green-500 xl:text-lg">Rp 300K</p>
        </div>
      </div>
    </div>
  );
}
