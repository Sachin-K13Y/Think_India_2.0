import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ThinkIndialogo = 'https://pbs.twimg.com/profile_images/1377154269086814209/fnxLite1_400x400.jpg';
const NITPLogo = 'https://avatars.githubusercontent.com/u/60884679?s=280&v=4';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <header>
        <nav className="h-[100px] bg-[#222831] shadow-white shadow-lg flex items-center justify-between px-4 fixed w-full top-0 z-10">
          <div className="flex items-center">
            <img className="rounded-full" src={ThinkIndialogo} alt="Think India Logo" width="50px" />
            <img className="rounded-full ml-2" src={NITPLogo} alt="NITP Logo" width="50px" />
            <span className="text-[#F96D00] font-semibold pl-3 text-md">
              THINK INDIA NIT PATNA
              <br />
              थिंक इंडिया एनआईटी पटना
            </span>
          </div>

          <div className="hidden md:flex justify-center">
            <ul className="flex space-x-24 text-white text-md font-semibold">
              <li>
                <NavLink
                  to="/"
                  exact
                  className={({ isActive }) => (isActive ? 'text-[#F96D00] font-semibold' : '')}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? 'text-[#F96D00] font-semibold' : '')}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/teams"
                  className={({ isActive }) => (isActive ? 'text-[#F96D00] font-semibold' : '')}
                >
                  Teams
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events"
                  className={({ isActive }) => (isActive ? 'text-[#F96D00] font-semibold' : '')}
                >
                  Events
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="hidden md:flex items-center">
            <NavLink to="/login">
              <button className="bg-[#F96D00] text-white font-semibold py-2 px-4 rounded-2xl">
                Admin
              </button>
            </NavLink>
          </div>

          <div className="md:hidden flex items-center text-[35px] text-[#F96D00]">
            <button onClick={toggleMenu} className="focus:outline-none">
              &#9776;
            </button>
          </div>

          {menu && (
            <>
              {/* Overlay */}
              <div
                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
                onClick={toggleMenu}
              ></div>

              {/* Mobile Menu */}
              <div className="fixed top-0 right-0 w-3/4 h-full bg-[#222831] z-20 shadow-lg p-4">
                <button
                  onClick={toggleMenu}
                  className="text-[30px] text-[#F96D00] focus:outline-none mb-4"
                >
                  &times;
                </button>
                <ul className="flex flex-col space-y-6 text-white text-lg font-semibold">
                  <li>
                    <NavLink
                      to="/"
                      exact
                      onClick={toggleMenu}
                      className={({ isActive }) =>
                        isActive ? 'text-[#F96D00] font-semibold' : ''
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      onClick={toggleMenu}
                      className={({ isActive }) =>
                        isActive ? 'text-[#F96D00] font-semibold' : ''
                      }
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/teams"
                      onClick={toggleMenu}
                      className={({ isActive }) =>
                        isActive ? 'text-[#F96D00] font-semibold' : ''
                      }
                    >
                      Teams
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/events"
                      onClick={toggleMenu}
                      className={({ isActive }) =>
                        isActive ? 'text-[#F96D00] font-semibold' : ''
                      }
                    >
                      Events
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" onClick={toggleMenu}>
                      <button className="bg-[#F96D00] text-white font-semibold py-2 px-4 rounded-2xl">
                        Admin
                      </button>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
