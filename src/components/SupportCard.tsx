import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

interface Props {
  Icon: React.ElementType;
  heading: string;
}

const SupportCard = ({ Icon, heading }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-2xl">
      <div className="p-8">
        <Icon className="w-16 p-4 text-white bg-indigo-600 rounded-lg mt-[-4rem]" />
        <h3 className="font-bold text-2xl py-6">
          {heading}
        </h3>
        <p className="text-grey-600 text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ad
          odio, dolorem quaerat in natus sapiente quo fuga? Quas id temporibus
        </p>
        <div className="bg-slate-100 py-4 mt-4 w-full">
          <p className="flex text-indigo-600">
            Contact Us <ArrowSmallRightIcon className="w-5 ml-2" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportCard;
