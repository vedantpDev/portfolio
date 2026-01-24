import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerUi from "../../../ui/DrawerUi";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setIsDrawerOpen(newOpen);
  };
  return (
    <div className="md:hidden flex justify-end items-center p-2 h-12">
      <div onClick={toggleDrawer(true)}>
        <MenuIcon fontSize="large" />
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
