import Image from "next/image";

const imgSrc = "./teddy.svg";

const Footer = () => {
  return (
    <footer className="grid place-items-center min-h-[300px] border-t-2">
      <div className="grid place-items-center gap-2">
        <Image alt="app logo" src={imgSrc} height={50} width={50} />
        <p className="text-violet-500 font-bold">App</p>
        <button className="my-4 bg-black text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
          Download
        </button>
      </div>
    </footer>
  );
};

export default Footer;
