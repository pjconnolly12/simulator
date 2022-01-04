import React, {useState} from 'react';
import { NavButton } from './navbar/button';
import { Link } from 'react-router-dom'
import logo from '../images/golf-logo.png'
import name from '../images/golf-name.png'

export const NavBar = (): JSX.Element => {

  const [navbarOpen, setNavbarOpen] = useState<boolean>(false)

  const calendar = {
    redirect: "/calendar",
    pageTitle: "Calendar" 
  }
  const standings = {
    redirect: "/standings",
    pageTitle: "Standings" 
  }
  const teams = {
    redirect: "/teams",
    pageTitle: "Teams" 
  }
  const schedule = {
    redirect: "/schedule",
    pageTitle: "Schedule" 
  }
  const rules = {
    redirect: "/rules",
    pageTitle: "Rules" 
  }
  const winners = {
    redirect: "/winners",
    pageTitle: "Winners"
  }

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 border-b-2 border-lightCyan bg-darkBlue">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex items-end justify-between pt-2 md:w-auto md:static md:block md:justify-start">
          <div className="text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase text-babyBlue">
          <Link className='flex' to="/">
          <img className="h-10" src={logo} alt="logo"/>
          <img className="hidden object-contain h-8 ml-2 md:block" src={name} alt="name"/>
          </Link>
          </div>
            <svg className=" text-babyBlue h-10 cursor-pointer leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div
            className={
              "md:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col md:flex-row list-none md:ml-auto">
              <li className="nav-item">
                <NavButton {...calendar} />
              </li>
              <li className="nav-item">
                <NavButton {...standings} />
              </li>
              <li className="nav-item">
                <NavButton {...teams} />
              </li>
              <li className="nav-item">
                <NavButton {...schedule} />
              </li>
              <li className="nav-item">
                <NavButton {...winners} />
              </li>
              <li className="nav-item">
                <NavButton {...rules} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}