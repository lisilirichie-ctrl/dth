"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

/* ── Section metadata ── */
const SECTIONS = [
  {
    key: "feast",
    label: "Sunday School Feast",
    description:
      "A joyful celebration dedicated to our children — a day filled with food, laughter, and love. Our Sunday School Feast brings together the youngest members of our congregation to experience the warmth of God's family firsthand.",
  },
  {
    key: "service",
    label: "Sunday Service",
    description:
      "Every Sunday we gather as one body to worship, hear the Word, and be strengthened in faith. Our services are Spirit-led, Word-centered, and open to everyone — come as you are.",
  },
  {
    key: "apostle",
    label: "Apostle Esther",
    description:
      "Led by Apostle Esther, Door to Heaven Church carries a bold vision — to see lives transformed by the power of God. Her ministry is marked by faith, fire, and a deep love for people.",
  },
];

const IMAGES = [
  // ── Sunday School Feast ──
  { src: "/dth/WhatsApp Image 2026-10-19 at 15.43.30.jpeg",     category: "feast", alt: "Sunday worship service" },
  { src: "/dth/WhatsApp Image 2026-10-19 at 15.43.30 (1).jpeg", category: "feast", alt: "Congregation in worship" },
  { src: "/dth/WhatsApp Image 2026-10-19 at 15.43.30 (2).jpeg", category: "feast", alt: "Sunday service at DTH" },
  { src: "/dth/WhatsApp Image 2026-10-19 at 15.43.31.jpeg",     category: "feast", alt: "Faithful gathered in prayer" },
  { src: "/dth/WhatsApp Image 2026-10-19 at 15.43.46.jpeg",     category: "feast", alt: "Sunday service moments" },
  { src: "/dth/WhatsApp Image 2026-10-19 at 15.43.46 (1).jpeg", category: "feast", alt: "The congregation worshipping" },
  { src: "/dth/WhatsApp Image 2026-10-19 at 15.43.46 (2).jpeg", category: "feast", alt: "Sunday morning service" },
  { src: "/dth/WhatsApp Image 2026-10-19 at 15.43.47.jpeg",     category: "feast", alt: "Believers in fellowship" },
  { src: "/dth/WhatsApp Image 2026-10-19 at 15.43.49.jpeg",     category: "feast", alt: "DTH Sunday service" },
  { src: "/dth/WhatsApp Image 2026-10-19 at 15.43.52.jpeg",     category: "feast", alt: "Sunday gathering" },
  // ── Sunday Service ──
  { src: "/dth/WhatsApp Image 2026-10-19 at 15.44.07.jpeg",     category: "service", alt: "Children at the Sunday School Feast" },
  { src: "/dth/WhatsApp Image 2026-10-19 at 15.44.07 (1).jpeg", category: "service", alt: "Kids enjoying the feast" },
  { src: "/dth/WhatsApp Image 2026-10-19 at 15.44.07 (2).jpeg", category: "service", alt: "Sunday School Feast celebration" },
  { src: "/dth/WhatsApp Image 2026-10-19 at 15.44.07 (3).jpeg", category: "service", alt: "Children seated at the feast" },
  { src: "/dth/WhatsApp Image 2026-10-19 at 15.44.08.jpeg",     category: "service", alt: "Joyful children at Sunday School" },
  { src: "/dth/WhatsApp Image 2026-10-19 at 15.44.08 (1).jpeg", category: "service", alt: "Sunday School Feast — serving food" },
  { src: "/dth/WhatsApp Image 2026-10-19 at 15.44.08 (2).jpeg", category: "service", alt: "Kids eating together" },
  { src: "/dth/WhatsApp Image 2026-10-19 at 15.44.08 (3).jpeg", category: "service", alt: "Children's celebration" },
  { src: "/dth/WhatsApp Image 2026-10-19 at 15.44.08 (4).jpeg", category: "service", alt: "Sunday School Feast moments" },
  // ── Apostle ──
  { src: "/dth/WhatsApp Image 2026-10-19 at 15.44.09.jpeg",     category: "apostle", alt: "Apostle Esther ministering" },
  { src: "/dth/WhatsApp Image 2026-10-19 at 15.44.09 (1).jpeg", category: "apostle", alt: "Apostle Esther preaching" },
  { src: "/dth/WhatsApp Image 2026-10-19 at 15.44.09 (2).jpeg", category: "apostle", alt: "Apostle Esther leading worship" },
  { src: "/dth/WhatsApp Image 2026-10-19 at 15.44.09 (3).jpeg", category: "apostle", alt: "Apostle Esther at the altar" },
  { src: "/dth/WhatsApp Image 2026-10-19 at 15.44.10.jpeg",     category: "apostle", alt: "Apostle Esther — Door to Heaven" },
  { src: "/dth/WhatsApp Image 2026-09-30 at 01.50.42.jpeg",     category: "apostle", alt: "Apostle Esther portrait" },
];

const FILTERS = [{ key: "all", label: "All Photos" }, ...SECTIONS.map((s) => ({ key: s.key, label: s.label }))];

export default function GalleryPage() {
  const router = useRouter();
  const [active, setActive]     = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "all" ? IMAGES : IMAGES.filter((i) => i.category === active);
  const currentSection = SECTIONS.find((s) => s.key === active);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightbox((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightbox((i) => (i !== null ? (i + 1) % filtered.length : null));
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">

      {/* ── Back Button ── */}
      <div className="px-4 pt-6 md:px-8">
        <button
          onClick={() => router.back()}
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 backdrop-blur-md transition-all duration-300 hover:border-[#D4A017]/40 hover:text-[#D4A017]"
        >
          <ArrowLeft size={15} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
          Back
        </button>
      </div>

      {/* ── Hero Header ── */}
      <section className="relative overflow-hidden py-16 text-center md:py-24">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-72 w-72 rounded-full bg-[#D4A017]/20 blur-[100px] md:h-96 md:w-96 md:blur-[120px]" />
        </div>
        <div className="relative z-10 px-4">
          <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest text-[#D4A017]">
            <span className="h-px w-6 bg-[#D4A017] md:w-8" />
            OUR MOMENTS
            <span className="h-px w-6 bg-[#D4A017] md:w-8" />
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl">Gallery</h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/50">
            Glimpses of faith, love, and community at Door to Heaven Church —
            every image a testimony of God's goodness among us.
          </p>
        </div>
      </section>

      {/* ── Filter Pills ── */}
      <div className="flex flex-wrap justify-center gap-2 px-4 pb-8 md:gap-3">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 md:px-5 md:text-sm ${
              active === f.key
                ? "bg-[#D4A017] text-black shadow-[0_0_20px_rgba(212,160,23,.4)]"
                : "border border-white/10 bg-white/5 text-white/60 backdrop-blur-md hover:border-[#D4A017]/40 hover:text-white"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* ── Section Description ── */}
      {currentSection && (
        <div className="mx-auto mb-10 max-w-2xl px-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl md:px-6 md:py-5">
            <p className="text-base font-semibold text-[#D4A017] md:text-lg">{currentSection.label}</p>
            <p className="mt-2 text-xs leading-relaxed text-white/60 md:text-sm">{currentSection.description}</p>
          </div>
        </div>
      )}

      {/* ── Masonry Grid ── */}
      <div className="mx-auto max-w-7xl px-3 pb-24 md:px-4">
        <div className="columns-2 gap-2 md:columns-3 md:gap-3 lg:columns-4">
          {filtered.map((img, i) => (
            <div
              key={img.src}
              onClick={() => setLightbox(i)}
              className="group relative mb-2 break-inside-avoid cursor-zoom-in overflow-hidden rounded-xl md:mb-3 md:rounded-2xl"
              style={{
                animation: `fadeUp 0.5s ease both`,
                animationDelay: `${i * 35}ms`,
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
          onClick={() => setLightbox(null)}
        >
          {/* image card */}
          <div
            className="relative mx-3 w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              width={1200}
              height={800}
              className="max-h-[85vh] w-full rounded-2xl object-contain"
            />
            {/* counter */}
            <p className="mt-3 text-center text-xs text-white/30">
              {lightbox + 1} / {filtered.length}
            </p>
          </div>

          {/* close */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-3 top-3 rounded-full border border-white/10 bg-white/10 p-2 backdrop-blur-md transition-colors hover:bg-white/20 md:right-5 md:top-5"
          >
            <X size={18} />
          </button>

          {/* prev */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/10 p-2.5 backdrop-blur-md transition-all hover:bg-[#D4A017]/20 hover:border-[#D4A017]/40 md:left-5 md:p-3"
          >
            <ChevronLeft size={22} />
          </button>

          {/* next */}
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/10 p-2.5 backdrop-blur-md transition-all hover:bg-[#D4A017]/20 hover:border-[#D4A017]/40 md:right-5 md:p-3"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>
    </main>
  );
}