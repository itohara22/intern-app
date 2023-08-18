import { selfImportantList } from "@/data/data";
import { Libre_Barcode_128 } from "next/font/google";

const SelfImp = () => {
  return (
    <div className=" text-black px-28 my-20">
      <p>Lorem ipsum dolor sit amet.</p>
      <h2 className="text-4xl font-bold">Lorem ipsum dolor sit.</h2>
      <div className="h-[400px] mt-6 px-16 flex overflow-x-scroll p-10 hide-scroll-bar">
        <ul id="selfimp-list" className="h-full flex flex-col flex-nowrap ">
          {selfImportantList.map((data) => {
            return (
              <li className="pl-8 border-l-2 relative ">
                <h4 className="text-lg mb-2 mt-8">{data.headind}</h4>
                <p className="text-sm">{data.para}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SelfImp;
