import React from "react";
import { Link } from "react-router-dom";

import sidebar_items from "../assets/jsondata/sidebar_route.json";

const Sidebar = (props) => {
  return (
    <div className="flex z-0 flex-col text-white h-screen px-7 pt-10 gap-7 items-start bg-black-200">
      {sidebar_items.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItems title={item.display_name} />
        </Link>
      ))}
    </div>
  );
};

function SidebarItems({ title }) {
  return (
    <>
      <button className="focus:text-astra-100 focus:bg-astra-100 focus:bg-opacity-10 focus:ring-1 outline-none px-7 rounded-md py-1 focus:ring-astra-100">
        {title}
      </button>
    </>
  );
}

export default Sidebar;
