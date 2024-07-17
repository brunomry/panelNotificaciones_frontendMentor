import React from "react";
import perfil from "../assets/images/avatar-mark-webber.webp"

const CardNotificacion = () => {
  return (
    <div className="bg-very-light-grayish-blue rounded-lg flex gap-[13px] px-4 text-sm cursor-pointer text-grayish-blue min-w-[280px] py-3 mx-auto">
      <img src={perfil} alt="" className="w-[39px] h-[39px]"/>
      <div>
        <p className="">
          <span className="font-bold text-very-dark-blue hover:text-color-blue">Mark Weeber</span>
          <span className="ms-1">reacted to your recent post</span >
          <span className="font-bold hover:text-color-blue ms-1">My First Tournament today!</span>
          <span className="inline-block w-2 h-2 rounded-full ms-1 bg-color-red"></span>
        </p>
        <p>1m ago</p>
        <div className="border rounded-[5px] border-light-grayish px-4 mt-3 hover:bg-light-grayish-blue-1">
          <p>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
          I'm already having lots of fun and improving my game.</p>
        </div>       
        <img src="" alt="" className="w-[39px] h-[39px] "/>
      </div>
    </div>
  );
};

export default CardNotificacion;
