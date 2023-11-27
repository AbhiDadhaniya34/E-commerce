import React, { useState } from "react";

function AlertNotification({setclosed}) {
  const [showAlert, setShowAlert] = useState(true);
  const delay = 1000;
  setTimeout(function () {
    setShowAlert(false);
    setclosed(false);
  }, delay);

  return (
    showAlert && (
      <div className="flex justify-center">
        <div className=" bg-green-500 text-white p-4 rounded-lg shadow-md fixed top-1.5 w-auto z-50">
          {/* <p>Success</p> */}
          <p>your Request Has Been Completed</p>
        </div>
      </div>
    )
  );
}

export default AlertNotification;
