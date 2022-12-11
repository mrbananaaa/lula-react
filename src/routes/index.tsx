import { useNavigate } from "react-router-dom";
import heroImg from "../assets/hero-img.png";
import modelImg from "../assets/model-img.png";
import bcaLogo from "../assets/bca-logo.png";
import hsbcLogo from "../assets/hsbc-logo.png";
import disneyLogo from "../assets/disney-logo.png";
import teslaLogo from "../assets/tesla-logo.png";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      {/* hero */}
      <section className="px-4 lg:px-0 pt-32 md:pt-20 flex flex-col-reverse lg:flex-row items-center justify-center md:space-x-20">
        <div className="pt-20 md:pt-32 lg:pt-0 px-8 md:px-0 flex flex-col items-center md:max-w-xl">
          <h1 className="font-semibold text-3xl">LULA - Smart Glasses</h1>
          <p className="pt-6 text-our-gray">
            One of the best health smart glasses in the world. It is widely
            known for its quality, innovation and style. A wide range of eyewear
            and excellent distribution and worldwide shipping make buying
            eyewear profitable.
          </p>
          <div className="pt-12 flex flex-col md:flex-row w-full md:w-fit space-y-4 md:space-y-0 md:space-x-8 font-medium">
            <button
              className="button py-3 px-5"
              onClick={() => navigate("/shop")}
            >
              Read more
            </button>
            <button
              className="sec-button py-3 px-5"
              onClick={() => navigate("/shop")}
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="relative max-w-md w-full flex justify-center select-none">
          <img
            className="object-contain w-[350px] h-[350px] z-10"
            src={heroImg}
            alt="lula-glasses"
          />
          <div className="hidden md:block absolute top-8 left-4 w-[350px] h-[350px] bg-[#181818] -z-10" />
          <div className="hidden md:block absolute top-16 -left-4 w-[350px] h-[350px] bg-[#222222] -z-20" />
        </div>
      </section>

      {/* feature */}
      <section className="mt-52 flex flex-col space-y-10 lg:space-y-0 lg:flex-row items-center justify-center lg:space-x-20">
        <div>
          <img
            className="w-[300px] object-contain"
            src={modelImg}
            alt="lula-glasse-model"
          />
        </div>
        <div className="flex justify-center items-center space-y-10">
          <div className="space-y-12 font-medium">
            <div className="flex flex-col text-2xl md:text-3xl space-y-2">
              {(
                [
                  "World Class Designer",
                  "AI Camera system",
                  "Premium material",
                  "Longlast battery",
                  "Acupuncture",
                  "Waterproof",
                ] as const
              ).map((text) => (
                <span key={text}>{text},</span>
              ))}
              <span className="pt-5 text-xs text-our-gray max-w-xs md:max-w-sm">
                eventually we are free shipping in some Asian country. So what
                are you waiting for?
              </span>
            </div>
            <button
              className="button w-full lg:w-fit py-3 px-5 font-semibold"
              onClick={() => navigate("/shop")}
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* partner */}
      <section className="mt-52 flex flex-col space-y-10 lg:space-y-0 lg:flex-row items-center justify-center py-10 lg:space-x-52 bg-gradient-to-r from-white to-white/50">
        <div>
          <div className="flex flex-col text-our-dark">
            <span className="text-lg md:text-2xl font-medium">Our</span>
            <span className="text-4xl md:text-5xl font-semibold">Partner</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {([bcaLogo, hsbcLogo, disneyLogo, teslaLogo] as const).map((logo) => (
            <div className="py-8 md:py-0 px-4 md:px-8" key={logo}>
              <img
                className="max-w-[150px] max-h-[80px] object-contain "
                src={logo}
                alt={logo}
              />
            </div>
          ))}
        </div>
      </section>

      {/* testimonial */}
      <section className="mt-52 px-10">
        <h3 className="text-center text-xl font-medium">
          What they say about us?
        </h3>
        <div className="mt-20 flex flex-col lg:flex-row justify-center items-center lg:space-x-4 space-y-4 lg:space-y-0">
          {(
            [
              [
                "Rave Matth.",
                "what the hell is the battery! charge for 2H live in one week.",
                "https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              ],
              [
                "John Doe",
                "omg the AI so powerfull, I love this glasses so much!",
                "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
              ],
              [
                "Qeyra",
                "the acupunture feature is so helpfull!",
                "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              ],
            ] as const
          ).map(([name, comment, imgUrl]) => (
            <div
              key={imgUrl}
              className="flex flex-col justify-center items-center rounded-lg border-2 py-8 w-full bg-gradient-to-t from-white/20 to-transparent"
            >
              <div className="p-1 border-2 border-white rounded-full select-none">
                <img
                  className="h-24 w-24 object-cover rounded-full"
                  src={imgUrl}
                  alt={`${name}-profile-pict`}
                />
              </div>
              <h4 className="pt-5 font-semibold text-lg">{name}</h4>
              <p className="pt-2 max-w-[200px] text-xs text-center">
                {comment}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-20 flex flex-col md:flex-row justify-center items-center md:space-x-4 space-y-4 md:space-y-0">
          <button
            className="button px-6 py-3 font-semibold w-full md:w-fit"
            onClick={() => navigate("/shop")}
          >
            Shop Now
          </button>
          <button
            className="sec-button px-12 py-3 font-semibold w-full md:w-fit"
            onClick={() => navigate("/blog")}
          >
            Blog
          </button>
        </div>
      </section>

      {/* footer - TODO : move to layouts */}
      <footer className="mt-52 px-8 md:px-0 py-28 relative border-t border-white overflow-hidden">
        <div className="absolute top-10 w-screen md:text-start md:left-20">
          <span className="text-our-gray">Lula - Smart Glasses</span>
        </div>
        <div className="flex md:flex-row md:items-start justify-center space-x-14 md:space-x-32">
          <div>
            <h5 className="text-white">Company</h5>
            <div className="pt-8 space-y-5">
              <div className="text-our-gray">About Us</div>
              <div className="text-our-gray">Blog</div>
              <div className="text-our-gray">Career</div>
            </div>
          </div>
          <div>
            <h5 className="text-white">Partners</h5>
            <div className="pt-8 space-y-5">
              <div className="text-our-gray">Work with us</div>
              <div className="text-our-gray">Our partner</div>
              <div className="text-our-gray">Official reseller</div>
            </div>
          </div>
          <div>
            <h5 className="text-white">Contact</h5>
            <div className="pt-8 space-y-5">
              <div className="text-our-gray">Instagram</div>
              <div className="text-our-gray">Twitter</div>
              <div className="text-our-gray">Email</div>
              <div className="text-our-gray">Phone</div>
            </div>
          </div>
        </div>
        <div className="text-center text-xs font-light mt-20 text-our-gray">
          All right reserved - LULA 2022
        </div>
      </footer>
    </>
  );
}
