import React from "react";
import ListaNotificaciones from "./ListaNotificaciones";

const Notificaciones = () => {
  return (
    <section className="container mx-auto px-3 ">
      <div className="notifications flex justify-between my-8">
        <h3 className="text-very-dark-blue font-extrabold text-xl">
          Notifications
          <span className="ms-2 bg-color-blue text-color-white w-[32px] h-[25px] inline-block text-center rounded-[6px]">
            3
          </span>
        </h3>
        <p className="text-dark-grayish-blue text-sm font-medium cursor-pointer hover:text-color-blue">
          Mark all as read
        </p>
      </div>
      <ListaNotificaciones></ListaNotificaciones>
    </section>
  );
};

export default Notificaciones;
