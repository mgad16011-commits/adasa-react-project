
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
   
<footer
  className="relative overflow-hidden bg-[#000000]
  bg-[radial-gradient(ellipse_at_50%_50%,rgba(249,115,22,0.13),transparent_65%)]
  text-white"
  dir="rtl"
>
  <div className="mx-auto w-full max-w-7xl">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
      gap-x-8 gap-y-10 sm:gap-y-12
      px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">

      
      <div className="min-w-0">

        <div className="flex items-center gap-3 sm:gap-4 mb-6">

          <h2 className="bg-amber-600 font-bold w-fit py-1.5 shadow-amber-700 shadow-lg px-4 text-2xl text-white rounded-xl hover:scale-110 transition-all duration-300">
            ع
          </h2>

          <h2 className="text-white font-bold text-2xl">
            عدسة
          </h2>

        </div>

        <p className="font-mono text-sm text-slate-300 leading-7">
          مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
        </p>

      
        <div className="flex items-center gap-3 flex-wrap py-6">

          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-slate-300 bg-slate-800 py-1.5 px-2 rounded-xl border border-slate-300 hover:bg-amber-700 hover:text-white hover:scale-110 transition-all duration-300"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-slate-300 bg-slate-800 py-1.5 px-2 rounded-xl border border-slate-300 hover:bg-amber-700 hover:text-white hover:scale-110 transition-all duration-300"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-slate-300 bg-slate-800 py-1.5 px-2 rounded-xl border border-slate-300 hover:bg-amber-700 hover:text-white hover:scale-110 transition-all duration-300"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-slate-300 bg-slate-800 py-1.5 px-2 rounded-xl border border-slate-300 hover:bg-amber-700 hover:text-white hover:scale-110 transition-all duration-300"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>

        </div>
      </div>

     
      <div className="flex flex-col min-w-0">

        <h2 className="relative mb-6 text-sm font-semibold text-white
          after:content-[''] after:absolute after:top-1/2
          after:-translate-y-1/2 after:-inset-s-10
          after:h-0.5 after:w-7 after:bg-amber-600">
          استكشف
        </h2>

        <ul className="text-slate-300 font-medium text-sm sm:text-base">

          <li className="mb-4">
            <Link to="/" className="hover:text-amber-600 transition-all duration-200">
              الرئيسية
            </Link>
          </li>

          <li className="mb-4">
            <Link to="/blog" className="hover:text-amber-600 transition-all duration-200">
              المدونة
            </Link>
          </li>

          <li className="mb-4">
            <Link to="/about" className="hover:text-amber-600 transition-all duration-200">
              من نحن
            </Link>
          </li>

        </ul>
      </div>

     
      <div className="flex flex-col min-w-0">

        <h2 className="relative mb-6 text-sm font-semibold text-white
          after:content-[''] after:absolute after:top-1/2
          after:-translate-y-1/2 after:-inset-s-10
          after:h-0.5 after:w-7 after:bg-amber-600">
          التصنيفات
        </h2>

        <ul className="text-slate-300 font-medium text-sm sm:text-base">

          <li className="mb-3">
            <Link to="/blog/lightArticles" className="hover:text-amber-600 transition-all duration-200">
              الإضاءة
            </Link>
          </li>

          <li className="mb-3">
            <Link to="/blog/portrait" className="hover:text-amber-600 transition-all duration-200">
              بورتريه
            </Link>
          </li>

          <li className="mb-3">
            <Link to="/blog/naturalAreas" className="hover:text-amber-600 transition-all duration-200">
              المناظر الطبيعية
            </Link>
          </li>

          <li className="mb-3">
            <Link to="/blog/tech" className="hover:text-amber-600 transition-all duration-200">
              تقنيات
            </Link>
          </li>

          <li className="mb-3">
            <Link to="/blog/tools" className="hover:text-amber-600 transition-all duration-200">
              معدات
            </Link>
          </li>

        </ul>
      </div>

    
      <div className="flex flex-col min-w-0">

        <h2 className="relative mb-6 text-sm font-semibold text-white
          after:content-[''] after:absolute after:top-1/2
          after:-translate-y-1/2 after:-inset-s-10
          after:h-0.5 after:w-7 after:bg-amber-600">
          ابقى على اطلاع
        </h2>

        <p className="text-slate-400 text-sm leading-7 mb-4">
          اشترك للحصول على أحدث المقالات والتحديثات.
        </p>

        <input
          type="email"
          placeholder="أدخل بريدك الإلكتروني"
          className="w-full min-w-0 px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-600 transition-all duration-300"
        />

        <button
          type="button"
          className="w-full mt-3 px-4 py-3 rounded-full
          bg-linear-to-r from-amber-600 to-orange-600
          text-white text-sm font-semibold
          hover:from-amber-700 hover:to-orange-700
          hover:scale-[1.02]
          transition-all duration-300 shadow-lg shadow-amber-900/20"
        >
          اشترك 
        </button>

      </div>

    </div>
  </div>
</footer>

  );
}
