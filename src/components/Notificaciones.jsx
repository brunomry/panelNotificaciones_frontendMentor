import React, { useState } from "react";
import ListaNotificaciones from "./ListaNotificaciones";

const Notificaciones = () => {

  const [cantNotification, setCantNotification] = useState(3);

  return (
    <section className="container md:w-[730px] bg-color-white rounded-lg px-4 pt-[4px] pb-[8px] mx-auto">
      <div className="flex justify-between my-8 notifications">
        <h3 className="text-xl font-extrabold text-very-dark-blue">
          Notifications
          <span className="ms-2 bg-color-blue text-color-white w-[32px] h-[25px] inline-block text-center rounded-[6px]">
            {cantNotification}
          </span>
        </h3>
        <p className="text-sm font-medium cursor-pointer text-dark-grayish-blue hover:text-color-blue" onClick={()=> setCantNotification(0)}>
          Mark all as read
        </p>
      </div>
      <ListaNotificaciones cantNotification={cantNotification} setCantNotification={setCantNotification}></ListaNotificaciones>
    </section>
  );
};

export default Notificaciones;
