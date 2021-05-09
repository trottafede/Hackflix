import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";
function IsOnline() {
  const [condition, setCondition] = useState(navigator.onLine ? true : false);

  useEffect(() => {
    window.addEventListener("load", function () {
      function updateOnlineStatus(event) {
        setCondition(navigator.onLine ? true : false);
      }

      window.addEventListener("online", updateOnlineStatus);
      window.addEventListener("offline", updateOnlineStatus);
    });
  }, [condition]);

  return (
    <>
      {condition ? (
        <div className="online ">
          <p>Online</p>
        </div>
      ) : (
        <div className="offline ">
          <p>Ofline</p>
        </div>
      )}
    </>
  );
}
export default IsOnline;
