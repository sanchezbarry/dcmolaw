import React from "react";

const Map = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-[600px] aspect-[4/3]">
        <iframe
          className="w-full h-full"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDeqX1AQ9oLUuBk_aY3P4TtxTpjtv-RdRs&q=133+New+Bridge+Rd,+#14-10,+Singapore+059413"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;