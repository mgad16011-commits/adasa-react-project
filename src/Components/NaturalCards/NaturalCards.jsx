import React from 'react'
import { Link } from "react-router-dom";

export default function ArticleCard({natural}) {
  return (
    <Link
      to={`/blog/${natural.slug}`}
      dir="rtl"
      className="group flex h-full flex-col overflow-hidden
      rounded-[28px] border border-white/10
      bg-slate-950/60
      shadow-lg transition-all duration-300
      hover:-translate-y-1 hover:border-orange-400/40"
    > 
      <div className="relative w-full overflow-hidden">

        <img
          src={natural.image}
          alt={natural.title}
          className="h-full w-full object-cover
          transition-transform duration-500
          group-hover:scale-105"
        />

        
        <span className="absolute right-4 top-4
        rounded-full bg-slate-950/90
        px-4 py-2 text-sm font-bold text-white">
          {natural.category}
        </span>

      </div>

    
      <div className="flex flex-1 flex-col p-5 sm:p-6">

        <div className="mb-5 flex flex-wrap items-center
        gap-2 text-sm text-slate-300">

          <span>◷ {natural.readTime}</span>

          <span>•</span>

          <span>
            {new Date(natural.date).toLocaleDateString("ar-EG", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>

        </div>

  
        <h2 className="mb-4 text-xl font-bold leading-relaxed
        text-white transition-colors
        group-hover:text-orange-400">
          {natural.title}
        </h2>

       
        <p className="mb-6 line-clamp-2 text-sm
        leading-8 text-slate-300">
          {natural.excerpt}
        </p>

        <div className="mb-4 mt-auto border-t border-white/10" />

      
        <div className="flex items-center justify-between gap-3">

          <div className="flex min-w-0 items-center gap-3">

            <img
              src={natural.author.avatar}
              alt={natural.author.name}
              className="h-11 w-11 shrink-0 rounded-full
              border border-white/20 object-cover"
            />

            <div className="min-w-0">

              <h3 className="truncate text-sm font-bold text-white">
                {natural.author.name}
              </h3>

              <p className="text-xs text-slate-400">
                {natural.author.role}
              </p>

            </div>

          </div>
          <span className="flex h-10 w-10 shrink-0
          items-center justify-center rounded-full
          border border-orange-400/30 bg-orange-500/10
          text-xl text-orange-400 transition-all
          group-hover:bg-orange-500 group-hover:text-white">
            ←
          </span>

        </div>

      </div>

    </Link>
  );}