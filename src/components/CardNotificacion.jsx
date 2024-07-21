import { useState } from "react";

const CardNotificacion = ({
  notification,
  cantNotification,
  setCantNotification,
}) => {
  const [isTrue, setIsTrue] = useState(false);

  const markPost = () => {
    setCantNotification(cantNotification - 1);
    setIsTrue(true);
  };

  return (
    <div
      className={`rounded-lg flex gap-[13px] px-4 text-sm md:text-[1rem] cursor-pointer text-grayish-blue min-w-[280px] w-[100%] py-3 mx-auto ${notification.status=="no leida" ? "bg-very-light-grayish-blue" : ""}`}
      onClick={notification.status == "no leida" && !isTrue && cantNotification != 0 ? markPost : null}
    >
      <img src={notification.userImage} alt="" className={`w-[39px] h-[39px] ${notification.status == "no leida" ? "self-center" : ""}`} />
      <div
        className={
          notification.image ? "flex gap-5 justify-between w-[100%]" : ""
        }
      >
        <div>
          <p className="">
            <span className="font-bold text-very-dark-blue hover:text-color-blue">
              {notification.user}
            </span>
            <span className="ms-1">{notification.action}</span>
            <span
              className={
                notification.content == "Chess Club"
                  ? "ms-1 text-color-blue font-bold"
                  : "font-bold hover:text-color-blue ms-1"
              }
            >
              {notification.content}
            </span>
            {notification.status == "no leida" && (
              <span
                className={
                  cantNotification === 0 || isTrue
                    ? "hidden "
                    : "inline-block w-2 h-2 rounded-full ms-1 bg-color-red"
                }
              ></span>
            )}
          </p>
          <p className="md:mt-1">{notification.time}</p>
        </div>

        {notification.message != "" && (
          <div className="border rounded-[5px] border-light-grayish px-4 mt-3 hover:bg-light-grayish-blue-1 py-3 w-[90%]">
            <p>{notification.message}</p>
          </div>
        )}
        {notification.image && (
          <img
            src={notification.image}
            alt={notification.image}
            className="w-[39px] h-[39px] "
          />
        )}
      </div>
    </div>
  );
};

export default CardNotificacion;
