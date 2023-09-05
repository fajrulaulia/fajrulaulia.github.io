import React from "react";
import { Link } from "react-router-dom";

interface NavbarIface {
    active?: string,

}

function NavBar(props: NavbarIface) {

    const [navbarToggle, setNavbarToggle] = React.useState(false)

    React.useEffect(() => {
        switch (props.active) {
            case "home":
                document.getElementsByClassName("navbarItem")[0]?.classList.add("border-white");
                break;

            case "project":
                document.getElementsByClassName("navbarItem")[1]?.classList.add("border-white");
                break;

            case "about":
                document.getElementsByClassName("navbarItem")[2]?.classList.add("border-white");
                break;
        }
    },[props.active])
    
    const navbarToggleChange = () => {
        setNavbarToggle(!navbarToggle)
        if (!navbarToggle) {
            document.getElementById("navbar")?.classList.remove("hidden");
        } else {
            document.getElementById("navbar")?.classList.add("hidden");
        }
    }

    return (
        <nav className="bg-gray-900 fixed w-full">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
                <Link to="./" className="flex items-center">
                    <span className="self-center text-2xl font-semibold text-white">Fajrul Aulia</span>
                </Link>
                <div className="flex items-center md:order-2">
                    <Link to="/login" className="text-white hover:text-gray-300 font-medium rounded-lg text-sm px-4 py-2">Login</Link>
                    <Link to="/register" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2">Sign up</Link>
                    <button onClick={navbarToggleChange} type="button" className="inline-flex items-center  p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div id="navbar" className="items-center justify-between hidden w-full md:flex md:w-auto">
                    <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                        <li>
                            <Link to="/" className="navbarItem block py-2 pl-3 pr-4 text-white border-b border-transparent hover:border-white">Home</Link>
                        </li>
                        <li>
                            <Link to="/project" className="navbarItem block py-2 pl-3 pr-4 text-white border-b border-transparent hover:border-white">Project</Link>
                        </li>
                        <li>
                            <Link to="/about" className="navbarItem block py-2 pl-3 pr-4 text-white border-b border-transparent hover:border-white">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
