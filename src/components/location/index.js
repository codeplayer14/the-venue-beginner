import React from "react";

const index = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62214.50621454739!2d77.63020238818343!3d12.945811353107798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcf63d72a2619ec7b!2sBrooks+and+Bonds+Brewery!5e0!3m2!1sen!2sin!4v1545990588510"
        width="100%"
        height="500px"
        frameBorder="0"
        title="Location"
        allowFullScreen
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default index;
