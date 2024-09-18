import appleImg from "./assets/Apple.png";
import googleImg from "./assets/Google.png";
import MaintenanceScreen from "./MaintenanceScreen";

function App() {
  return (
    <header className="relative h-screen text-white w-full">
      <div className="header-bg w-full h-screen absolute top-0 z-10 left-0"></div>
      <h1 className="uppercase absolute tracking-[.2rem] px-10 lg:px-0 lg:left-1/2 Lg:-translate-x-1/2 top-20 z-[15]">
        connected vip
      </h1>
      <div className="container flex flex-wrap h-screen items-end absolute left-0 bottom-0 px-10  z-[15] lg:px-[247px] justify-between lg:mb-20">
        <div className="flex flex-col gap-8 w-[390px]">
          <p className="text-lg">
            Join the largest luxury community <br />
            worldwide and find a variety of
          </p>
          <h4 className="wordCarousel">
            <span>Luxury</span>
            <div>
              <ul className="flip5">
                <li>Cars</li>
                <li>Watches</li>
                <li>Bags</li>
                <li>Yachts</li>
                <li>Real Estate</li>
                <li>Jets</li>
              </ul>
            </div>
          </h4>
          <div className="space-y-5 mt-6">
            <p>You can reach us on our app</p>
            <div className="flex items-center gap-4">
              <a href="/">
                <img src={appleImg} alt="apple" />
              </a>

              <a href="/">
                <img src={googleImg} alt="Google" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center mb-8 gap-8">
          <div>
            <p className="text-xl">560,000+</p>
            <p className="text-sm">Listings</p>
          </div>
          <div>
            <p className="text-xl">21,000+</p>
            <p className="text-sm">Trusted sellers</p>
          </div>
        </div>
      </div>
    </header>
    // <MaintenanceScreen />
  );
}

export default App;
