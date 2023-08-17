const Hero = () => {
  return (
    <div className=" text-black px-4 mt-20 ">
      <div className="bg-violet-100 mx-auto grid sm:grid-cols-2 place-items-center p-20 my-2 rounded-2xl  min-w-full min-h-[80vh] ">
        <div className=" pr-8">
          <p className="text-sm ">My App</p>
          <h1 className="text-4xl font-bold mt-2 mb-8">
            Welcome to Our Website
          </h1>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-50">
            Explore Now
          </button>
        </div>
        <div className="grid place-items-center h-full w-full">Hero img</div>
      </div>
      <div className="grid grid-cols-3 py-16 gap-8 justify-items-center">
        <h2 className="text-2xl font-semibold">Placeholder</h2>
        <div className="text-sm leading-loose">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut dolor
          corrupti odit, in incidunt iste dicta dolorem quam eos nisi labore
        </div>
        <div className="text-sm leading-loose">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut dolor
          corrupti odit, in incidunt iste dicta dolorem quam eos nisi labore
        </div>
      </div>
    </div>
  );
};

export default Hero;
