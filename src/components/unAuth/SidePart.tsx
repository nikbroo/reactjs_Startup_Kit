import ShipBG from "../../assets/images/shipBG.png";

const SidePart = () => {
  return (
    <div
      className="w-1/2 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${ShipBG})` }}
    >
      <div className="max-w-[500px] text-center text-primary px-6 font-bold flex gap-8 items-center justify-center flex-col">
        <p
          className="text-[30px] backdrop-blur-md bg-[#E9E9E936] px-4 rounded-md leading-none"
          style={{ boxShadow: "0px 4px 7px 0px #00000012" }}
        >
          Shiper
        </p>
        <h2
          className="text-[40px] backdrop-blur-md bg-[#E9E9E936] px-2 rounded-md"
          style={{ boxShadow: "0px 4px 7px 0px #00000012" }}
        >
          Unlock Shipment Portal. Your Journey Begins Here!
        </h2>
      </div>
    </div>
  );
};

export default SidePart;
