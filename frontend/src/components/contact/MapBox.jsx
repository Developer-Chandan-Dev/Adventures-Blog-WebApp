const MapBox = () => {
  return (
    <div className="mx-auto h-80 md:96 lg:h-[450px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d693.7412179874287!2d82.12686502758628!3d25.582166073447684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399aafb6b1f7ac83%3A0x3ab6eb9b62e29125!2sTICA%20Computer%20Center!5e0!3m2!1sen!2sin!4v1724297440554!5m2!1sen!2sin"
        width="600"
        className="w-full h-full"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapBox;
