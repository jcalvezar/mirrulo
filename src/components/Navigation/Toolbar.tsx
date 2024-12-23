import HomeIcon from "../icons/homeIcon";
import TrendingIcon from "../icons/TrendingIcon";
import ScheduleIcon from "../icons/ScheduleIcon";
import HistoryIcon from "../icons/HistoryIcon";
import ProfileIcon from "../icons/ProfileIcon";
import SettingsIcon from "../icons/SettingsIcon";
import { useState } from "react";

const buttons = [
  {
    text: "Home",
    link: "",
    selected: true,
    icon: <HomeIcon />,
  },
  {
    text: "Trending",
    link: "",
    selected: false,
    icon: <TrendingIcon />,
  },
  {
    text: "Schedule",
    link: "",
    selected: false,
    icon: <ScheduleIcon />,
  },
  {
    text: "History",
    link: "",
    selected: false,
    icon: <HistoryIcon />,
  },
  {
    text: "Profile",
    link: "",
    selected: false,
    icon: <ProfileIcon />,
  },
  {
    text: "Settings",
    link: "",
    selected: false,
    icon: <SettingsIcon />,
  },
];

const Toolbar = () => {
  const [toolbasButtons, setToolbarButtons] = useState(buttons);

  const buttonClass =
    "flex flex-col gap-2 w-[74px] h-[70px] items-center justify-center cursor-pointer odd:bg-gray-800 even:bg-gray-900";

  const handleClick = (idx: number) => {
    const newButtons = [...toolbasButtons];
    newButtons.forEach((button, index) => {
      if (index === idx) {
        button.selected = true;
      } else {
        button.selected = false;
      }
    });
    setToolbarButtons(newButtons);
  };

  return (
    <div className="flex flex-col">
      {toolbasButtons.map((myButton, idx) => {
        return (
          <div
            onClick={() => handleClick(idx)}
            className={`${buttonClass} ${
              myButton.selected
                ? "border-r border-blue-500 text-blue-500"
                : "text-white"
            }`}
            key={idx}
          >
            {myButton.icon}

            <p className="text-xs">{myButton.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Toolbar;
