import React, { useEffect, useState } from "react";

const CustomerProfile = ({ id }) => {
  const [customerInfo, setcustomerInfo] = useState(null);
  useEffect(() => {
    if (id > 0) {
      fetch(`https://cyf-react.glitch.me/customers/${id}`)
        .then(response => response.json())
        .then(data => setcustomerInfo(data));
    }
  }, [id]);

  return (
    <div>
      {id && customerInfo
        ? `Customer Profile ${customerInfo.id} ${
            customerInfo.email
          } is the customer vip: ${customerInfo.vip} ${
            customerInfo.phoneNumber
          }`
        : "loading"}
    </div>
  );
};

export default CustomerProfile;
