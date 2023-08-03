import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
  const sideList = ["Home", "Shorts", "Subscription", "Library", "History", "Your Videos", "Watch Later" ]

  if(!isMenuOpen){return null}
  else{
  return(
  <>
    <div className="flex flex-col ml-4">
      {sideList.map((el)=><span className="m-1 p-1">{el}</span>)}
    </div>
  </>
)}};

export default Sidebar;
