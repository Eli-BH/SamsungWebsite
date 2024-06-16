import { navLists } from "../constants";
import { appleImg, bagImg, searchImg, samsungLogoImg } from "../utils";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center screen-max-width">
      <nav className="flex w-full screen-ma">
        <img src={samsungLogoImg} alt="Apple logo" width={80} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((item, index) => (
            <div
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
              key={index}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
