import React from "react";
import Drawer from "@mui/material/Drawer";
import { Divider } from "@mui/material";

const DrawerUi = ({ toggleDrawer, isDrawerOpen }) => {
  let list = ["About Me", "Skills", "Contact Me"];
  return (
    <Drawer
      anchor={"bottom"}
      open={isDrawerOpen}
      onClose={toggleDrawer(false)}
      className="w-full"
    >
      <div className=" p-3 bg-[#161211]!">
        {list.map((ele, i) => (
          <div
            key={`${ele + i}`}
            className={`text-white flex items-center bg-[#161211]! justify-center  ${i > 0 ? "mt-3" : ""
              } h-10  `}
            onClick={toggleDrawer(false)}
          >
            {ele}
            <Divider sx={{ backgroundColor: "red" }} className="text-white" />
          </div>
        ))}
      </div>
    </Drawer>
  );
};

export default DrawerUi;
