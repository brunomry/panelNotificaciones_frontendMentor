import React from "react";
import CardNotificacion from "./CardNotificacion";
import notifications from "../helpers/notifications";

const ListaNotificaciones = ({cantNotification, setCantNotification}) => {
  return (
    <div className="flex flex-col gap-2">
      {notifications.map((notification) => (
        <CardNotificacion
          key={notification.id}
          notification={notification}
          cantNotification={cantNotification}
          setCantNotification={setCantNotification}
        ></CardNotificacion>
      ))}
    </div>
  );
};

export default ListaNotificaciones;
