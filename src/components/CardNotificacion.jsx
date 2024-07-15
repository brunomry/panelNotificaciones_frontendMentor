import React from "react";
import perfil from "../assets/images/avatar-mark-webber.webp"

const CardNotificacion = () => {
  return (
    <div className="bg-very-light-grayish-blue rounded-lg flex gap-[13px] px-4 text-sm cursor-pointer text-grayish-blue">
      <img src={perfil} alt="" className="w-[39px] h-[39px]"/>
      <div>
        <p className="">
          <span className="font-bold text-very-dark-blue hover:text-color-blue">Mark Weeber</span>
          <span className="ms-1">reacted to your recent post</span >
          <span className="hover:text-color-blue font-bold ms-1">My First Tournament today!</span>
          <span className="ms-1 inline-block w-2 h-2 bg-color-red rounded-full"></span>
        </p>
        <p>1m ago</p>
      </div>
    </div>
  );
};

export default CardNotificacion;
