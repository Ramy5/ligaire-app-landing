import appleImg from "./assets/Apple.png";
import googleImg from "./assets/Google.png";

const MaintenanceScreen = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-center justify-center relative min-h-screen bg-[#1b1b1b] text-white">
        <h1 className="text-sm tracking-[.2rem] absolute top-12">
          CONNECTED VIP
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-1 tracking-widest">
          <span>Don’t worry </span>
          <span className="animate_from_top  animation_delay-11">
            WE’RE HERE
          </span>
        </h2>
        <p className="mt-8 tracking-widest flex items-center text-[#A0A0A1]">
          <span>Our website is just being </span>
          <span>
            <div className="wrap">
              <span className="space"></span>
              <span className="letter">m</span>
              <span className="letter">a</span>
              <span className="letter">i</span>
              <span className="letter">n</span>
              <span className="letter">t</span>
              <span className="letter">a</span>
              <span className="letter">i</span>
              <span className="letter">n</span>
              <span className="letter">e</span>
              <span className="letter">d</span>
            </div>
          </span>
        </p>
        <p className="text-xl font-bold mt-2 text-[#A0A0A1]">BUT</p>
        <p className="mt-2 text-[#A0A0A1]">You can reach us</p>

        <div className="mt-10">
          <p className="text-center text-[#A0A0A1]">On our app</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="">
              <img src={appleImg} alt="App Store" className="h-8" />
            </a>
            <a href="#" className="">
              <img src={googleImg} alt="Google Play" className="h-8" />
            </a>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-[#A0A0A1]">Or through our phone number</p>
          <p className="mt-2 text-xl font-semibold text-[#E2E3E4]">
            +20 100 979 9997
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceScreen;
