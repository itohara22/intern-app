import Image from "next/image";
const imgSrc = "/teddy.svg";

const Hero = () => {
  return (
    <div className=" text-black px-4 mt-20">
      <div className="bg-violet-100 mx-auto grid sm:grid-cols-2 place-items-center px-14 md:px-[10vw] xl:px-[15vw] my-2 rounded-2xl  min-w-full min-h-[80vh] gap-4 ">
        <div className=" pr-8">
          <p className="text-sm ">My App</p>
          <h1 className="text-5xl leading-[3.5rem] lg:text-6xl font-bold mt-2 mb-8">
            Welcome to Our Website
          </h1>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-50 my-auto">
            Explore Now
          </button>
        </div>
        <div className="grid place-items-center h-full w-full">
          <Image src={imgSrc} height={300} width={300} />
        </div>
      </div>
      <div className="grid grid-cols-3 py-16 gap-8 justify-items-center min-h-[300px]">
        <h3 className="text-2xl font-semibold">Placeholder</h3>
        <div className="min-h-full pr-4">
          <p className="text-sm leading-loose h-full">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut dolor
            corrupti odit, in incidunt iste dicta dolorem quam eos nisi labore
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatem, voluptatibus.
          </p>
        </div>
        <div className="min-h-full pr-4">
          <p className="text-sm leading-loose pr-4 h-full">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut dolor
            corrupti odit, in incidunt iste dicta dolorem quam eos nisi labore
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            illo reiciendis dolor pariatur saepe rerum qui iste nisi adipisci.
            Magnam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
