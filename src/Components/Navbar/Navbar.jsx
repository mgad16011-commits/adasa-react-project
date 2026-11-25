import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo-GdqARQRt.png'

export default function Navbar() {
  return (
    <>
     
<nav className="bg-black/85 py-0.5 fixed w-full z-20 top-0 inset-s-0" dir="rtl">

  <div className="max-w-6xl flex flex-wrap items-center justify-between mx-auto p-4">

    {/* Logo + Toggle */}
    <div className="flex items-center gap-2">

      <img
        src={logo}
        alt="Logo"
        className="w-16 hover:scale-110 transition-all duration-500"
      />

      <div>
        <span className="text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent">
          عدسة
        </span>

        <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
          عالم التصوير الفوتوغرافي
        </span>
      </div>

      {/* Toggle */}
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-base md:hidden"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>

        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M5 7h14M5 12h14M5 17h14"
          />
        </svg>
      </button>

    </div>

    {/* Links */}
    <div className="hidden w-full md:block md:w-auto mt-4 md:mt-0" id="navbar-default">

      <div className="border-2 border-slate-700 p-2 rounded-4xl flex flex-col md:flex-row  gap-4 flex-wrap justify-center " dir="rtl">

        <NavLink
          to=""
          className={({isActive}) =>
            isActive ? "nav-active" : "text-slate-500 font-medium text-sm px-6 py-2 rounded-2xl"
          }
        >
          الرئيسية
        </NavLink>

        <NavLink
          to="blog"
          className={({isActive}) =>
            isActive ? "nav-active" : "text-slate-500 font-medium text-sm px-6 py-2 rounded-2xl"
          }
        >
          المدونة
        </NavLink>

        <NavLink
          to="about"
          className={({isActive})=>isActive?"nav-active":"text-slate-500 font-medium text-sm px-6 py-2 rounded-2xl"}
        >
          من نحن
        </NavLink>

      </div>

    </div>

    {/* Buttons */}
    <div className="flex flex-wrap items-center gap-3" dir="ltr">

      <Link
        to="blog"
        className="text-white text-sm bg-amber-600 border border-transparent hover:-translate-y-1 transition-all duration-500 font-medium rounded-full px-8 py-4"
      >
        ابدأ القراءة
      </Link>

      <button
        type="button"
        className="group border border-transparent hover:border-slate-600 rounded-base text-sm px-4 py-2.5"
      >
        <span className="text-xl text-slate-600 group-hover:text-amber-600 transition-all duration-500">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
      </button>

    </div>

  </div>
</nav>

    </>
  )
}

  