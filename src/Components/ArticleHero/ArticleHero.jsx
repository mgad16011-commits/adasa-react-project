
import React from "react";

export default function ArticleHero({ article }) {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${article.image})`,
        }}
      />

      <div className="absolute inset-0 bg-black/75" />

     
      <div className="relative z-10 mx-auto min-h-162.5 max-w-7xl px-5 py-10 sm:px-8 sm:py-14">

        <div className="mb-12 flex flex-wrap items-center gap-3 text-sm text-slate-300 sm:mb-16">
          <span className="text-orange-400">
            {article.category}
          </span>
        </div>

        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm font-medium text-white">

          <span className="rounded-full bg-orange-500 px-5 py-2 font-bold">
            {article.category}
          </span>

          <span>
            <i className="fa-regular fa-calendar ml-2" />
            {new Date(article.date).toLocaleDateString("ar-EG", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>

          <span>
            <i className="fa-regular fa-clock ml-2" />
            {article.readTime}
          </span>

        </div>

        <h1 className="mb-10 max-w-3xl text-3xl font-bold leading-relaxed text-white sm:text-4xl md:text-5xl">
          {article.title}
        </h1>

        <div className="inline-flex max-w-full items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur-sm sm:p-4">

          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="h-12 w-12 shrink-0 rounded-full border-2 border-white object-cover sm:h-14 sm:w-14"
          />

          <div>
            <h3 className="font-bold text-white">
              {article.author.name}
            </h3>

            <p className="mt-1 text-xs text-slate-300 sm:text-sm">
              {article.author.role}
            </p>
          </div>

        </div>
      </div>

     <div
  dir="rtl"
  className="relative z-10 mx-auto max-w-7xl border-t border-white/10 px-5 py-10 sm:px-8"
>
  <div className="grid grid-cols-1 gap-7 md:grid-cols-4">
    
    <div className="flex flex-col gap-6 md:col-span-3">
      
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-5 backdrop-blur-md sm:flex-row sm:px-6 sm:py-4">
        <h3 className="flex items-center gap-3 font-bold text-white">
          <i className="fa-solid fa-share-nodes text-orange-500" />
          شارك المقال
        </h3>

       <div className="flex gap-3">
  <button
    type="button"
    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-orange-500 sm:h-12 sm:w-12"
  >
    <i className="fa-solid fa-link" />
  </button>

  <button
    type="button"
    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-orange-500 sm:h-12 sm:w-12"
  >
    <i className="fa-brands fa-whatsapp" />
  </button>

  <button
    type="button"
    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-orange-500 sm:h-12 sm:w-12"
  >
    <i className="fa-brands fa-linkedin-in" />
  </button>

  <button
    type="button"
    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-orange-500 sm:h-12 sm:w-12"
  >
    <i className="fa-brands fa-x-twitter" />
  </button>
</div>
      </div>

     
      <div className="flex flex-1 flex-col items-center justify-between gap-6 rounded-3xl border border-white/15 bg-slate-950/35 p-6 backdrop-blur-md sm:flex-row sm:items-start sm:p-7" dir="ltr">
        <div className="min-w-0 flex-1  sm:text-right">
          <span className="text-xs font-bold text-orange-400">
            كاتب المقال
          </span>

          <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
            {article.author.name}
          </h3>

          <p className="mt-1 text-xs text-slate-400 sm:text-sm">
            {article.author.role}
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-200">
            مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.
          </p>
        </div>

        <img
          src={article.author.avatar}
          alt={article.author.name}
          className="h-20 w-20 shrink-0 rounded-2xl border-2 border-orange-400/30 object-cover sm:h-24 sm:w-24"
        />
      </div>
    </div>

  
    <div className="flex flex-col items-center justify-center rounded-3xl border border-white/20 bg-slate-950/50 p-6 text-center backdrop-blur-md md:col-span-1 lg:p-7">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/20 text-2xl text-orange-400">
        <i className="fa-solid fa-envelope" />
      </div>

      <h3 className="mb-2 text-lg font-bold text-white lg:text-xl">
        لا تفوت جديدنا
      </h3>

      <p className="mb-6 text-sm leading-7 text-slate-300">
        اشترك للحصول على أحدث المقالات
      </p>

      <button
        type="button"
        className="w-full rounded-xl bg-linear-to-r from-orange-500 to-yellow-400 px-4 py-3 font-bold text-white transition hover:scale-105 lg:py-3.5"
      >
        تصفح المزيد
      </button>
    </div>
  </div>
</div>
    </section>
  );
}
