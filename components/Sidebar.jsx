import { HomeIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";

const Sidebar = () => {
  return (
    <div>
      {/* Twitter Logo */}
      <div className="">
        <Image
          width={50}
          height={50}
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
        ></Image>
      </div>

      {/* Menu */}
      <div className="">
        <SidebarMenuItem text="Home" Icon={HomeIcon} />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmark" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
      </div>

      {/* Button */}

      <button>Tweet</button>

      {/* Mini Profile */}
      <div className="">
        <img
          src="https://mediate.co.id/wp-content/uploads/2021/01/user-icon-600x600.jpg"
          height={50}
          width={50}
          alt="user-img"
        />
        <div className="">
          <h4>Muhammad Iqbal Muhtadin</h4>
          <p>@tes</p>
        </div>
        <DotsHorizontalIcon className="h-5" />
      </div>
    </div>
  );
};

export default Sidebar;
