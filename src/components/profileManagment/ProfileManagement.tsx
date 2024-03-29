import { NavLink } from "react-router-dom";
import { media } from "../../assets";
import { AdminRoutes } from "../../routes/AppRoute";
import { useState } from "react";

export const ProfileManagement = () => { 
  const [ activeLink, setActiveLink ] = useState<string | null>("")

  const handleClick = (path: string) => {
    setActiveLink(path);
  }


  return (
    <div className="w-[100%] flex overflow-x-clip">
      <div className="absolute top-[49px] right-[67.4px] flex space-x-6">
        <div className="flex">
          <img
            src={media.upload}
            alt=""
            className="w-[50px] h-[50px] mr-[12px] relative -top-1"
          />
          <p className="text-[15px] leading-[18.5px] flex flex-col">
            Ken Boehm
            <span className="text-[10px] leading-[12.1px] font-bold">
              Admin
            </span>
          </p>
        </div>
        <img src={media.data_upload} alt="" className="w-[28px] h-[28px]" />
        <img src={media.notification} alt="" className="w-[30px] h-[27.27px]" />
      </div>
      <div className="relative top-24 left-14 flex">
        <div className="relative flex flex-col space-y-5 mr-[40px]">
          <div className="flex font-extrabold text-[20px] leading-[21.78px]">
            <img
              src={media.admin_icon}
              alt=""
              className="w-[25.93px] h-[25.93px]"
            />
            <p className="text-[#E30000] p-1">Admin Panel</p>
          </div>
          <nav className="border border-red-400 admin-primary-gradient w-[308px] h-[378px] rounded-[23px] mt-[17.5px] flex flex-col space-y-2 text-primary">
            <NavLink
              to=""
              className={`flex ${activeLink === '' ? 'bg-menu-focus': ' '}  pt-[8px] pb-[3.14px] mt-[40px]`}
              onClick={() => handleClick('')}
            >
              <img
                src={media.home}
                alt="home icon"
                className="pl-[46px] pr-3"
              />
              Home
            </NavLink>
            <NavLink
              to="notification"
              className={`flex space-x-[13px] focus:filter ${activeLink === 'notification' ? 'bg-menu-focus': ''} pt-[12px] pb-[3.14px]`}
              onClick={() => handleClick('notification')}
            >
              <img
                src={media.menu_notification}
                alt=""
                className="pl-[46px] pr-3"
              />
              Notification
            </NavLink>
            <NavLink
              to="networks"
              className={`flex space-x-[13px] focus:filter ${activeLink === 'networks' ? 'bg-menu-focus': ''} pt-[12px] pb-[3.14px]`}
              onClick={() => handleClick('networks')}
            >
              <img src={media.networks} alt="" className="pl-[46px] pr-3" />
              Networks
            </NavLink>
            <NavLink
              to="events"
              className={`flex space-x-[13px] focus:filter ${activeLink === 'events' ? 'bg-menu-focus': ''} pt-[12px] pb-[3.14px]`}
              onClick={() => handleClick('events')}
            >
              <img src={media.menu_events} alt="" className="pl-[46px] pr-3" />
              Events
            </NavLink>
            <NavLink
              to="giving"
              className={`flex space-x-[13px] focus:filter ${activeLink === 'giving' ? 'bg-menu-focus': ''} pt-[12px] pb-[3.14px]`}
              onClick={() => handleClick('giving')}
            >
              <img src={media.giving} alt="" className="pl-[46px] pr-3" />
              Giving
            </NavLink>
            <NavLink
              to="volunteers"
              className={`flex space-x-[13px] focus:filter ${activeLink === 'volunteers' ? 'bg-menu-focus': ''} pt-[12px] pb-[3.14px]`}
              onClick={() => handleClick('volunteers')}
            >
              <img src={media.volunteers} alt="" className="pl-[46px] pr-3" />
              Volunteers
            </NavLink>
            <NavLink
              to="programs"
              className={`flex space-x-[13px] focus:filter ${activeLink === 'programs' ? 'bg-menu-focus': ''} pt-[12px] pb-[3.14px]`}
              onClick={() => handleClick('programs')}
            >
              <img
                src={media.menu_programs}
                alt=""
                className="pl-[46px] pr-3"
              />
              Programs
            </NavLink>
          </nav>
          <nav className="border border-red-400 admin-secondary-gradient w-[308px] h-[488px] rounded-[23px] flex flex-col space-y-2 text-primary">
            <NavLink
              to="admins"
              className={`flex space-x-[13px] focus:filter ${activeLink === 'admins' ? 'bg-menu-focus': ''} pt-[12px] pb-[3.14px] mt-[50px]`}
              onClick={() => handleClick('admins')}
            >
              <img src={media.admins} alt="" className="pl-[46px] pr-3" />
              Admins
            </NavLink>
            <NavLink
              to="profile"
              className={`flex space-x-[13px] focus:filter ${activeLink === 'profile' ? 'bg-menu-focus': ''} pt-[12px] pb-[3.14px]`}
              onClick={() => handleClick('profile')}
            >
              <img src={media.profile} alt="" className="pl-[46px] pr-3" />
              Profile
            </NavLink>
            <NavLink
              to="support"
              className={`flex space-x-[13px] focus:filter ${activeLink === 'support' ? 'bg-menu-focus': ''} pt-[12px] pb-[3.14px]`}
              onClick={() => handleClick('support')}
            >
              <img src={media.support} alt="" className="pl-[46px] pr-3" />
              Support
            </NavLink>
            <NavLink
              to="settings"
              className={`flex space-x-[13px] focus:filter ${activeLink === 'settings' ? 'bg-menu-focus': ''} pt-[12px] pb-[3.14px]`}
              onClick={() => handleClick('settings')}
            >
              <img src={media.settings} alt="" className="pl-[46px] pr-3" />
              Settings
            </NavLink>
            <NavLink
              to="integrations"
              className={`flex space-x-[13px] focus:filter ${activeLink === 'integrations' ? 'bg-menu-focus': ''} pt-[12px] pb-[3.14px]`}
              onClick={() => handleClick('integrations')}
              
            >
              <img src={media.integrations} alt="" className="pl-[46px] pr-3" />
              Integrations
            </NavLink>
            <div className="w-[308px] h-[97px] bg-menu-focus flex items-center space-x-3 item top-margin">
              <img
                src={media.upload}
                alt=""
                className="w-[60px] h-[60px] mt-[5px] ml-[40px]"
              />
              <div className="flex flex-col">
                <p>Ken Boehm</p>
                <span className="text-[10px] leading-[12.1px]">
                  boehm.samuel.sb@gmail.com
                </span>
                <span className="text-[10px] leading-[12.1px]">Admin</span>
              </div>
            </div>
          </nav>
        </div>
        <div>
          <AdminRoutes />
        </div>
      </div>
    </div>
  );
};
