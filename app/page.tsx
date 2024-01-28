import Header from "./components/layout/Header";

export default function Home() {
  return (
    <div className="flex justify-center h-full w-full xl:h-screen max-w-screen">
      <div className="max-w-screen-xl flex flex-col w-full mt-5">
        <Header/>
        <main className="flex items-start justify-between pt-36 max-w-6xl w-full mx-auto">
          <div className="flex flex-col items-start gap-y-5">
            <h1 className="montserrat text-8xl font-extralight">Sam Nunn</h1>
            <p className="hind font-semibold text-base max-w-2xl">
            Hailing from the UK and now based in Ontario, Canada, I am a passionate front-end developer with over five years of experience. My expertise lies in UI/UX design, and I&#8217;ve contributed to a wide range of projects, from small business websites to innovative SaaS platforms in the mortgage industry. My work reflects a dedication to creating functional and aesthetically pleasing digital solutions.
            </p>
          </div>
          <div className="flex flex-col gap-y-5">
            <h2 className="montserrat text-3xl font-bold mt-12">Projects</h2>
            <ul>
              <li><a href="">DudeWheresMyBar</a></li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
