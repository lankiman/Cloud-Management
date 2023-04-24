import { CheckIcon } from "@heroicons/react/24/outline";

const AllInoneCard = () => {
  return (
    <div className="flex">
      <div>
        <CheckIcon className="w-7 mr-4 text-green-600" />
      </div>
      <div>
        <h3 className="font-bold text-lg">Notifications</h3>
        <p className="text-lg pt-2 pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          totam enim minima fugit. Corporis, natus?
        </p>
      </div>
    </div>
  );
};

export default AllInoneCard;
