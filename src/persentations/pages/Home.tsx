import React from "react";

import Navigation from '../components/Navbar'
import { Link } from "react-router-dom";
import UserImage from '../../assets/photos.jpg'
function Home() {
  return (
    <React.Fragment>
      <Navigation active="home" />
      <section className="flex items-center min-h-screen md:h-1/6 justify-center" >
        <div className="mx-auto max-w-[43rem] md:p-4" style={{backgroundImage: UserImage}}>
          <div className="text-center">
            {/* <div className="flex flex-wrap justify-center">
                <img className="w-1/3 shadow rounded-full" src={UserImage} alt="..." />
            </div> */}
            <h1 className="mt-3 text-[2.5rem] font-bold leading-[4rem] tracking-tight">I'm Fajrul Aulia.</h1>
            <p className="mt-3 text-lg">
              I'm a Experienced full-time software engineer with
              expertise in software development,
              data, and cloud technology, ready
              to assist companies in achieving
              their goals.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <Link to="https://t.me/fajrulaulia" className="rounded-md px-5 py-3 text-white bg-indigo-600 font-medium hover:bg-indigo-700">Contact Me</Link>
            <Link to="/about" className="rounded-md px-5 py-3 border border-slate-200font-medium hover:bg-slate-500"> About Me</Link>
          </div>
        </div>
      </section>

      <section className="flex items-center  min-h-screen  justify-center" >
        <div className="mx-auto max-w-[43rem] md:p-4">
          <div className="text-center">
            <h1 className="mt-3 text-[2.5rem] font-bold leading-[4rem] tracking-tight">Our Service</h1>
            <p className="mt-3 text-lg text-blue-700">
            I also contribute to various businesses, with my knowledge and experience for more than 4 years in software development, data and cloud.
            </p>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="grid md:grid-cols-3 bg-slate-400 p-10 m-2 w-3/4 h-48 grid-rows-3">
              A

            </div>
            <div className="grid md:grid-cols-3 bg-slate-400 p-10 m-2 w-3/4 h-48 grid-rows-3">
              B

            </div>
            <div className="grid md:grid-cols-3 bg-slate-400 p-10 m-2 w-3/4 h-48 grid-rows-3">
              C

            </div>
          </div>
        </div>
      </section>


    </React.Fragment >
  );
}

export default Home;
