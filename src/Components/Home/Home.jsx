import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    
<section className="
  relative min-h-screen overflow-hidden py-20 sm:py-30 lg:py-40 px-4 sm:px-6
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
  <div className="relative z-10  mx-auto flex flex-col items-center gap-4 ">
<div className='flex py-2 mx-auto my-0 items-center gap-3 border border-amber-600 justify-center px-4 rounded-4xl'>
<h1 className='text-white m-0 '>مرحباً بك في عدسة</h1>
<div className='flex gap-4 items-center'>
  <span class="loader"></span>
<span class="loadertwo"></span>
</div>
</div>

<div className=' text-center'>
<h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[72px] leading-tight mb-5">
  اكتشف <span className="text-amber-500">فن</span>
  <br />
  التصوير الفوتوغرافي
</h1>
<p className='text-slate-500  text-sm sm:text-lg md:text-xl lg:text-[25px] leading-relaxed px-2'>انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في <br/>التصوير</p>


</div>
<div className='flex items-center gap-6 my-8' dir='rtl'>
    <Link to="blog" className='btn text-[18px] font-bold  flex items-center gap-3 hover:-translate-y-0.5 transition-all duration-500 group' dir='rtl'>استكشف المقالات
      <span className='text-[15px] group-hover:-translate-x-1  transition-all duration-500'><i className="fa-solid fa-arrow-left-long "></i></span></Link>
 <button className='px-6 py-2.5 rounded-full  bg-transparent text-[18px] font-bold  flex items-center gap-3 hover:border-amber-600 hover:text-amber-600 transition-all duration-500 group text-white border border-slate-600' dir='rtl'>أعرف المزيد
      <span className='text-[20px] group-hover:text-amber-600 transition-all duration-500'><i class="fa-regular fa-circle-question"></i></span></button>
</div>


{/* Statistics Cards */}
<div
  className="w-full max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 my-8"
  dir="rtl"
>
  {/* Card 1 */}
  <div className="w-full">
    <div className="inner w-full bg-black/60 border border-slate-900 rounded-3xl px-5 sm:px-5 py-3 flex flex-col justify-center items-center hover:scale-105 transition-all duration-300">
      <span className="text-amber-600 text-[30px]">
        <i className="fa-solid fa-book"></i>
      </span>
      <h3 className="text-amber-600 text-3xl sm:text-4xl font-bold">+50</h3>
      <p className="text-slate-500">مقالة</p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="w-full">
    <div className="inner w-full bg-black/60 border border-slate-900 rounded-3xl px-3 sm:px-5 py-3 flex flex-col justify-center items-center hover:scale-105 transition-all duration-300">
      <span className="text-amber-600 text-[30px]">
        <i className="fa-solid fa-users"></i>
      </span>
      <h3 className="text-amber-600 text-2xl sm:text-3xl font-bold">+10ألف</h3>
      <p className="text-slate-500 mt-0.5">قارئ</p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="w-full">
    <div className="inner w-full bg-black/60 border border-slate-900 rounded-3xl px-3 sm:px-5 py-3 flex flex-col justify-center items-center hover:scale-105 transition-all duration-300">
      <span className="text-amber-600 text-[30px]">
        <i className="fa-solid fa-folder-open"></i>
      </span>
      <h3 className="text-amber-600 text-3xl sm:text-4xl font-bold">4</h3>
      <p className="text-slate-500">تصنيفات</p>
    </div>
  </div>

  {/* Card 4 */}
  <div className="w-full">
    <div className="inner w-full bg-black/60 border border-slate-900 rounded-3xl px-3 sm:px-5 py-3 flex flex-col justify-center items-center hover:scale-105 transition-all duration-300">
      <span className="text-amber-600 text-[30px]">
        <i className="fa-solid fa-pen-nib"></i>
      </span>
      <h3 className="text-amber-600 text-3xl sm:text-4xl font-bold">6</h3>
      <p className="text-slate-500">كاتب</p>
    </div>
  </div>
</div>
    
  </div>

</section>

    
    
    </>
  )
}
