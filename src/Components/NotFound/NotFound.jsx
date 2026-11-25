import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
   <section className="
     relative min-h-screen overflow-hidden py-20 sm:py-28 lg:pt-20 lg:pb-30 px-4 sm:px-6
     bg-[#000000]
     bg-[radial-gradient(ellipse_at_50%_50%,rgba(249,115,22,0.13),transparent_65%)]
   ">
   
     {/* Grid Background */}
     <div className="
       absolute inset-0
       bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)]
       bg-size-[50px_50px]
       pointer-events-none
     "></div>
     <div className="relative z-10 mx-auto flex flex-col items-center gap-4">

  <div className="flex flex-col py-2 mx-auto my-0 items-center gap-3 justify-center px-4 rounded-4xl">
    <h1 className="text-[150px] font-bold text-amber-600 text-center">
      404
    </h1>

    <span className="loader-three"></span>
  </div>

  <div className="text-center">
    <h1 className="text-white font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[72px] leading-tight mb-5">
      عفواً! الصفحة غير موجودة
    </h1>

    <p className="text-slate-500 text-sm sm:text-lg md:text-xl lg:text-[25px] leading-relaxed px-2">
      الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك
      <br />
      إلى المسار الصحيح
    </p>
  </div>

  <div
    className="flex w-full items-center justify-center gap-6 my-8 text-center flex-col sm:flex-row"
    dir="rtl"
  >
    <Link
      to="/"
      className="btn text-[18px] font-bold flex items-center gap-3 hover:-translate-y-0.5 transition-all duration-500 group"
      dir="ltr"
    >
     الذهاب للرئيسية

      <span className="text-[15px] ">
        <i class="fa-solid fa-house"></i>
      </span>
    </Link>

    <Link
      to="/blog"
      className="px-6 py-2.5 rounded-full bg-transparent text-[18px] font-bold flex items-center gap-3 hover:border-amber-600 hover:text-amber-600 transition-all duration-500 group text-white border border-slate-600"
      dir="ltr"
    >
      تصفح المقالات

      <span className="text-[20px] group-hover:text-amber-600 transition-all duration-500">
    <i class="fa-solid fa-book"></i>
      </span>
    </Link>
  </div>
  <div>
    <ul className="text-slate-300 font-medium text-sm sm:text-base flex gap-9" dir='rtl'>
    
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

</div>
   
 
       
     
   
   </section>
   
    
 </>
  )
}
