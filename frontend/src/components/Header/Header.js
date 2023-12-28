import React, { Fragment } from "react";
import "./header.css";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navigation = [
  { name: "Home", to: "/", current: true },
  { name: "Our Work", to: "/work", current: false },
  { name: "About Us", to: "/about", current: false },
  { name: "Our Progress", to: "/progress", current: false },
  { name: "Blog", to: "/blogs", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Disclosure as="nav" className="bg-black pt-3 pb-3 z-10 relative">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className="flex flex-shrink-0 items-center header-logo">
                  <h1 className="text-white" onClick={() => navigate("/")}>
                    InfraDev
                  </h1>
                  {/* <img
                    className="h-10 w-[3.5rem] rounded-md"
                    src="/icon.png"
                    alt="Your Company"
                   
                  /> */}
                </div>
                <div className="hidden md:ml-6  md:block">
                  <div className="flex space-x-4 nav-btns">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          location.pathname === item.to
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-md font-medium "
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* ----- */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      padding: ".3rem .7rem",
                      cursor: "pointer",
                      fontSize: "1rem",
                      fontWeight: "500",
                      background: "#fff",
                      color: "000",
                      borderRadius: "2rem",
                    }}
                  >
                    Contact Us
                  </button>
                </Link>
              </div>

              {/*  */}
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.to}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
