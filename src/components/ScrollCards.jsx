import Image from "next/image";

const ScrollCard = () => {
  return (
    <>
      <h2 className="text-4xl mt-4 mb-10 px-8 font-bold">
        Lorem ipsum dolor sit.
      </h2>
      <div className=" flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap">
          <div className="inline-block px-3">
            <div className="bg-orange-200 p-10 w-[40ch] rounded-3xl m-2">
              <Image
                src={"/emoji.svg"}
                width={50}
                height={50}
                className="mb-6"
              />
              <h4 className="font-bold mb-4 text-lg">Lorem, ipsum dolor.</h4>
              <p className="text-sm leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam dicta ipsam est rerum aliquid a? Lorem ipsum dolor
                sit amet.
              </p>
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="bg-orange-200 p-10 w-[40ch] rounded-3xl m-2">
              <Image
                src={"/emoji.svg"}
                width={50}
                height={50}
                className="mb-6"
              />
              <h4 className="font-bold mb-4 text-lg">Lorem, ipsum dolor.</h4>
              <p className="text-sm leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam dicta ipsam est rerum aliquid a? Lorem ipsum dolor
                sit amet.
              </p>
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="bg-orange-200 p-10 w-[40ch] rounded-3xl m-2">
              <Image
                src={"/emoji.svg"}
                width={50}
                height={50}
                className="mb-6"
              />
              <h4 className="font-bold mb-4 text-lg">Lorem, ipsum dolor.</h4>
              <p className="text-sm leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam dicta ipsam est rerum aliquid a? Lorem ipsum dolor
                sit amet.
              </p>
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="bg-orange-200 p-10 w-[40ch] rounded-3xl m-2">
              <Image
                src={"/emoji.svg"}
                width={50}
                height={50}
                className="mb-6"
              />
              <h4 className="font-bold mb-4 text-lg">Lorem, ipsum dolor.</h4>
              <p className="text-sm leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam dicta ipsam est rerum aliquid a? Lorem ipsum dolor
                sit amet.
              </p>
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="bg-orange-200 p-10 w-[40ch] rounded-3xl m-2">
              <Image
                src={"/emoji.svg"}
                width={50}
                height={50}
                className="mb-6"
              />
              <h4 className="font-bold mb-4 text-lg">Lorem, ipsum dolor.</h4>
              <p className="text-sm leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam dicta ipsam est rerum aliquid a? Lorem ipsum dolor
                sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollCard;
