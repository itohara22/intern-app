import Image from "next/image";
const tedSrc = "./teddy.svg";
const sunSrc = "./sun.svg";
const Manifesto = () => {
  return (
    <div id="manifesto" className=" text-black px-4 mt-20 ">
      <div className="bg-orange-100 mx-auto grid sm:grid-cols-2 place-items-center p-8 md:px-[10vw] lg:px-[5vw] my-2 rounded-2xl  min-w-full min-h-[85vh] ">
        <div className="flex flex-col min-h-full gap-2">
          <p className="text-xs font-bold">Lorem, ipsum dolor.</p>
          <h2 className="text-3xl lg:text-3xl font-bold mb-8">
            Lorem ipsum dolor sit.
          </h2>
          <div className="flex flex-col my-auto gap-14">
            <div>
              <Image src={sunSrc} width={50} height={50} />
            </div>
            <div className="self-center ">
              <Image src={tedSrc} width={200} height={200} />
            </div>
          </div>
        </div>
        <div>
          <p className="leading-8 pr-[3vw]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            perspiciatis, voluptates magni perferendis esse ipsum nulla ut
            labore, iusto, fugit expedita. Incidunt, rem? Quo deserunt corrupti,
            atque id vero fuga!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Manifesto;
