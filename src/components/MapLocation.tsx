
const MapLocation = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.11186693492!2d37.243880771969296!3d-0.7201899595256408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182801dd14e1ab7d%3A0xe75f1ab3d8792099!2sMwea%2C%20Kenya!5e0!3m2!1sen!2sus!4v1617187259696!5m2!1sen!2sus" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy"
          className="w-full h-full"
          title="Shannix Pishori Rice Location"
        ></iframe>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-pishori-earth text-lg mb-2">Shannix Rice Mill & Processing Plant</h3>
        <p className="text-pishori-brown">Located in the heart of Kenya's rice-growing region, our state-of-the-art processing facility ensures only the highest quality Pishori rice reaches your table.</p>
      </div>
    </div>
  );
};

export default MapLocation;
