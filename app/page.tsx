import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Link from "./components/navigation/Link"

const links = [
  { href: "https://dudewheresmybar.netlify.app/", text: "DudeWhere'sMyBar" },
  { href: "https://www.koziwarm.com/", text: "Koziwarm" },
  // Add more links as needed
];

export default function Home() {
  return (
    <div className="flex justify-center w-full h-screen max-w-screen">
      <div className="max-w-screen-xl flex flex-col w-full mt-5">
        <Header/>
        <main className="flex items-center justify-center custom-height">
          <div className="flex flex-col lg:flex-row items-start justify-between xl:max-w-6xl w-full mx-auto">
            <div className="flex flex-col items-start gap-y-5">
              <h1 className="montserrat text-5xl md:text-8xl font-extralight">Sam Nunn</h1>
              <p className="hind font-semibold text-base max-w-2xl lg:ms-8 relative lg:before:w-0.5 before:bg-gradient-to-b from-blue-500 to-amber-200 before:absolute before:top-0 before:bottom-0 before:-left-8">
              Hailing from the UK and now based in Ontario, Canada, I am a passionate front-end developer with over five years of experience. My expertise lies in UI/UX design, and I&#8217;ve contributed to a wide range of projects, from small business websites to innovative SaaS platforms in the mortgage industry. My work reflects a dedication to creating functional and aesthetically pleasing digital solutions.
              </p>
            </div>
            <div className="flex flex-col gap-y-5">
              <h2 className="montserrat text-3xl font-bold mt-14">Portfolio</h2>
              <ul className="flex flex-col gap-y-2 items-start hind font-semibold text-base">
                {links.map((link, index) => (
                  <li key={index} className="relative w-fit block after:block after:content-[''] after:bg-blue-500 after:absolute after:h-[3px] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                    <Link href={link.href} text={link.text} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  );
}
