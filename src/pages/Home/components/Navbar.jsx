import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerUi from "../../../ui/DrawerUi";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    console.log({ newOpen });
    setIsDrawerOpen(newOpen);
  };
  console.log({ isDrawerOpen });
  return (
    <div className="md:hidden flex justify-between items-center border-2 border-amber-50 p-2 rounded-2xl ">
      <div>VED</div>
      <div onClick={toggleDrawer(true)}>
        <MenuIcon />
      </div>
      <DrawerUi
        setIsDrawerOpen={setIsDrawerOpen}
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
      />
    </div>
  );
};

export default Navbar;
