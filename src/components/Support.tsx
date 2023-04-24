import supImg from "../assets/support.jpg";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { CpuChipIcon, LifebuoyIcon } from "@heroicons/react/24/solid";
import SupportCard from "./SupportCard";
const Support = () => {
  return (
    <div id="support" className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supImg}
          alt="/"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            support
          </h2>
          <h3 className="text-5xl font-bold text-white py-6 text-center">
            Finding the Right team
          </h3>
          <p className="py-4 text-3xl text-slate-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ad
            odio, dolorem quaerat in natus sapiente quo fuga? Quas id temporibus
          </p>
        </div>
        <div className="grid lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <SupportCard heading="Sales" Icon={PhoneIcon} />
          <SupportCard heading="Technical Support" Icon={LifebuoyIcon} />
          <SupportCard heading="Media Inquiries" Icon={CpuChipIcon} />
        </div>
      </div>
    </div>
  );
};

export default Support;
