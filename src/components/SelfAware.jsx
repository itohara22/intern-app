import Image from "next/image";

const sunImg = "./sun.svg";

const SelfAware = () => {
  return (
    <div className=" text-black px-4">
      <div className="bg-violet-100 mx-auto grid sm:grid-rows-3 place-items-center px-14 md:px-[10vw] xl:px-[15vw] py-8 my-2 rounded-2xl  min-w-full min-h-[85vh] gap-4 ">
        <div>
          <p className="text-sm lg:text-md font-semibold text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
            iste.
          </p>
          <h2 className="text-4xl md:text-[2.5rem] lg:text-5xl font-bold text-center">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
        </div>
        <div
          id="self-aware-div"
          className=" relative grid grid-cols-3 place-content-center w-full "
        >
          <div className="grid grid-rows-2 place-items-center">
            <div className="relative ">
              <Image src={sunImg} width={60} height={60} />
              <span className="absolute z-10 top-[19px] left-[26px] text-black">
                1
              </span>
            </div>
            <p className="text-center text-xs md:text-sm">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="grid grid-rows-2 place-items-center">
            <div className="relative ">
              <Image src={sunImg} width={60} height={60} />
              <span className="absolute z-10 top-[19px] left-[26px] text-black">
                2
              </span>
            </div>
            <p className="text-center text-xs md:text-sm">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="grid grid-rows-2 place-items-center">
            <div className="relative ">
              <Image src={sunImg} width={60} height={60} />
              <span className="absolute z-10 top-[19px] left-[26px] text-black">
                3
              </span>
            </div>
            <p className="text-center text-xs md:text-sm">
              Lorem ipsum dolor sit amet
            </p>
          </div>
        </div>
        <div
          id="bubble-container"
          className="w-[80%] max-w-[60vw] mx-auto bg-white h-full  rounded-xl drop-shadow-sm p-3 relative"
        >
          <div className="p-2 text-white bg-violet-600 rounded-md absolute -left-[10%] top-4">
            <span
              id="bubbles"
              className="relative after:-right-2 after:-bottom-10"
            >
              Lorem, ipsum
            </span>
          </div>
          <div className="p-2 text-white bg-violet-600 rounded-md absolute left-[30%] bottom-4">
            <span id="bubbles" className="relative after:-left-2 after:-top-12">
              Lorem, ipsum
            </span>
          </div>
          <div className="p-2 text-white bg-violet-600 rounded-md absolute right-[30%] top-4">
            <span
              id="bubbles"
              className="relative after:-bottom-10 after:-left-2"
            >
              Lorem, ipsum
            </span>
          </div>
          <div className="p-2 text-white bg-violet-600 rounded-md absolute bottom-4 -right-[10%] ">
            <span id="bubbles" className="relative after:-left-2 after:-top-12">
              Lorem, ipsum
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfAware;
