import RoundedBorder from "./RoundedBorder";
import SearchIcon from "../icons/SearchIcon";
import CommandKeyIcon from "../icons/CommandKeyIcon";
import SwapIcon from "../icons/SwapIcon";
import DarkModeIcon from "../icons/DarkModeIcon";
import LightModeIcon from "../icons/LightModeIcon";
import NotificationsIcon from "../icons/NotificationsIcon";
import ProfileIcon from "../icons/ProfileIcon";
const Navbar = () => {
  const buttonClass = "w-9 h-9 flex justify-center items-center";

  return (
    <header className="w-full p-2 flex flex-row justify-between border-b border-gray-700">
      <img src="/imgs/mirrulo-logo-white.png" width={112} height={37} />
      <div className="flex flex-row gap-2">
        <RoundedBorder>
          <button className={buttonClass}>
            <SearchIcon />
          </button>
          <input
            type="text"
            className="bg-[#141414] border-none outline-none focus:outline-none focus:border-none"
          />
          <button className={buttonClass}>
            <CommandKeyIcon />
          </button>
        </RoundedBorder>
        <RoundedBorder>
          <button className={buttonClass}>
            <SearchIcon />
          </button>
        </RoundedBorder>
        <RoundedBorder>
          <button className={buttonClass}>
            <SwapIcon />
          </button>
        </RoundedBorder>
      </div>
      <div className="flex flex-row gap-2">
        <RoundedBorder>
          <button aria-label="Toggle Dark Mode" className={buttonClass}>
            <DarkModeIcon />
          </button>
        </RoundedBorder>
        <RoundedBorder>
          <button aria-label="Notifications" className={buttonClass}>
            <NotificationsIcon />
          </button>
        </RoundedBorder>
        <RoundedBorder>
          <button className={buttonClass}>
            <ProfileIcon />
          </button>
        </RoundedBorder>
      </div>
    </header>
  );
};

export default Navbar;
