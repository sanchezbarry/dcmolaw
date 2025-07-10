import React from "react";

const Map = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <iframe
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDeqX1AQ9oLUuBk_aY3P4TtxTpjtv-RdRs&q=133+New+Bridge+Rd,+#14-10,+Singapore+059413"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default Map;