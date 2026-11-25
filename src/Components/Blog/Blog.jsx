
import React, { useState } from 'react'
import BlogHome from './BlogHome'
import { NavLink, Outlet } from 'react-router-dom'

export default function Blog() {

  const [search, setSearch] = useState("")
  const [view, setView] = useState("row")

  return (
    <>
      <BlogHome />

      <section className="mx-auto relative min-h-screen overflow-hidden py-20 sm:py-28 lg:pb-45 px-4 sm:px-6 bg-[#000000]">

       
        <div
          className="w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
          dir="rtl"
        >

    
          <div className="flex items-center gap-3 w-full md:w-auto">

            {/* Search */}
            <form className="w-full md:w-87.5">
              <div className="relative">

                {/* Search Icon */}
                <div className="absolute left-5 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                  <i className="fa-solid fa-magnifying-glass text-slate-300 text-xl"></i>
                </div>

                {/* Search Input */}
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="ابحث في المقالات..."
                  className="w-full py-3 pl-14 pr-6 bg-white/5 border border-slate-600/50 text-white text-lg rounded-2xl shadow-lg placeholder:text-slate-400 text-right outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all duration-300"
                  dir="rtl"
                />

              </div>
            </form>

            
            <div className="flex items-center gap-2 shrink-0">

              {/* Row Button */}
              <button
                type="button"
                onClick={() => setView("row")}
                className={`p-3 rounded-xl border transition-all duration-300 ${
                  view === "row"
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white/5 text-slate-400 border-slate-600/50 hover:text-white"
                }`}
              >
                <i className="fa-solid fa-grip text-lg"></i>
              </button>

              {/* List Button */}
              <button
                type="button"
                onClick={() => setView("list")}
                className={`p-3 rounded-xl border transition-all duration-300 ${
                  view === "list"
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white/5 text-slate-400 border-slate-600/50 hover:text-white"
                }`}
              >
                <i className="fa-solid fa-list text-lg"></i>
              </button>

            </div>

          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 w-full md:w-auto">

            <NavLink
              to={""}
              end
              className={({ isActive }) =>
                isActive ? "nav-active" : "blog-btn"
              }
            >
              جميع المقالات
            </NavLink>

            <NavLink
              to={"lightArticles"}
              className={({ isActive }) =>
                isActive ? "nav-active" : "blog-btn"
              }
            >
              الاضاءه
            </NavLink>

            <NavLink
              to={"portrait"}
              className={({ isActive }) =>
                isActive ? "nav-active" : "blog-btn"
              }
            >
              بورتريه
            </NavLink>

            <NavLink
              to={"naturalAreas"}
              className={({ isActive }) =>
                isActive ? "nav-active" : "blog-btn"
              }
            >
              مناظر طبيعية
            </NavLink>

            <NavLink
              to={"tech"}
              className={({ isActive }) =>
                isActive ? "nav-active" : "blog-btn"
              }
            >
              تقنيات
            </NavLink>

            <NavLink
              to={"tools"}
              className={({ isActive }) =>
                isActive ? "nav-active" : "blog-btn"
              }
            >
              معدات
            </NavLink>

          </div>

        </div>

       
        <div className="min-h-3/4 mt-14">

          <Outlet context={{ search, view }} />

        </div>

      </section>
    </>
  )
}
