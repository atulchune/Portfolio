import Image from "next/image";
import Header from "@/components/header";
import About from "@/components/about"
import Resume from "@/components/resume";
export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className=" h-screen relative  overflow-hidden scroll-smooth ">

        <div className="">

          <Image className="" src={'/Exclude.png'} layout="fill" />
          <Header />
          <div className="">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
            >
              <source src="/bgvedio.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className=" md:absolute md:top-1/2 md:left-12 md:text-[#afafaf] md:text-xl md:font-normal md:font-montserrat md:tracking-[4px]">
              <p className=" md:py-1">CRAFTING <span className="md:text-[#afafaf] md:text-xl md:font-bold md:font-montserrat md:tracking-[4px]">DREAMS</span></p>
              <p className="md:px-16  md:py-1"><span className="md:text-[#afafaf] md:text-xl md:font-bold md:font-montserrat md:tracking-[4px]">DESIGNING</span> FUTURES</p>
            </div>

            <div className=" md:left-44 md:text-white ">
              <p className="md:absolute md:top-[27%] md:right-[44%] md:text-center md:text-[40px] md:font-normal md:font-montserrat md:leading-[51.66px]">
                Hi,
              </p>
              <p className="md:absolute md:top-[28%] md:right-[12.7%] md:text-center md:text-[160px] md:font-extrabold md:font-montserrat md:leading-[206.63px]">
                ANKIT
              </p>
              <p className="md:absolute md:top-[55%] md:-right-[2.9%]  md:text-center md:text-[160px] md:font-extrabold font-montserrat md:leading-[51.66px]">
                KUMAR
              </p>
              <p className="md:absolute md:top-[68%] md:right-[2%]  md:text-center md:text-[30px] md:font-normal md:font-montserrat md:leading-[51.66px]">
                UI/UX Designer
              </p>
            </div>
            {/* <div className="absolute md:top-1/2 md:right-[25%]" >

            <Image src={'/ANKIT.png'} width={600}height={600}/>
            </div> */}
          </div>

          <div>
            <a href="#about" className="absolute scrollDown scroll-smooth hidden md:block z-[20]">
              {" "}
              <span className=""></span> <span className=""></span> <span></span>
            </a>
          </div>
        </div>
      </div>

      <About />
      <Resume />
    </div>
  );
}
