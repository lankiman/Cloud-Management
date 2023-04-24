import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
interface Props {
  heading: string;
  items: string[];
}
const FooterItems = ({ heading, items }: Props) => {
  return (
    <div>
      <h6 className="uppercase font-bold pt-2">
        {heading}
      </h6>
      <ul>
        {items.map(item =>
          <li
            className="py-1 transition duration-300 ease-in-out transform hover:scale-110"
            key={item}
          >
            {item === "Pricing"
              ? <Link to="pricing" smooth={true} offset={-100} duration={500}>
                  {item}
                </Link>
              : item === "About"
                ? <Link to="about" smooth={true} offset={-100} duration={500}>
                    {item}
                  </Link>
                : item}
          </li>
        )}
      </ul>
    </div>
  );
};

export default FooterItems;
