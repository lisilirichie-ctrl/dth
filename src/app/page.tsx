"use client";

import {
  ArrowRight,
  BookOpen,
  Church,
  Clock,
  Cross,
  Globe,
  Heart,
  MapPin,
  Mail,
  Phone,
  Play,
  Users,
} from "lucide-react";

/* ─────────────────────────── DATA ─────────────────────────── */
const CHURCH = {
  name: "Door to Heaven Church",
  motto: "Jesus · People · Purpose",
  location: "Mtwapa, Kenya",
  phone: "+254 700 123 456",
  email: "info@doortoheaven.co.ke",
};

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

const PHOTOS = {
  hero:    u("1608569569089-5d2e3e644ea6", 1800),
  about:   u("1477281765962-ef34e8bb0967"),
  event1:  u("1507692049790-de58290a4334", 800),
  event2:  u("1497621122273-f5cfb6065c56", 800),
  event3:  u("1550096141-7263640aa48c", 800),
  sermon1: u("1438232992991-995b7058bbb3", 800),
  sermon2: u("1622598453695-4fbaf151aadc", 800),
  sermon3: u("1580243152089-98da42694285", 800),
  impact:  u("1630553229660-df21d9aaea7a", 1600),
  gallery: [
    u("1522158637959-30385a09e0da", 600),
    u("1509021436665-8f07dbf5bf1d", 600),
    u("1569292567777-e5d61a759322", 600),
    u("1592647683756-4998f9869e2f", 600),
    u("1695938746747-ec185ea81325", 600),
  ],
};

const NAV = [
  { label: "Home",       href: "#top"      },
  { label: "About",      href: "#about"    },
  { label: "Sermons",    href: "#sermons"  },
  { label: "Events",     href: "#events"   },
  { label: "Ministries", href: "#services" },
  { label: "Gallery",    href: "#gallery"  },
  { label: "Contact",    href: "#contact"  },
];

const VALUES = [
  { icon: Cross, title: "Christ Centered",  text: "Everything we do points to Jesus."              },
  { icon: Users, title: "Family Focused",   text: "We grow together in love and faith."            },
  { icon: Heart, title: "Community Driven", text: "We serve, support and reach our neighbors."    },
];

const SERVICES = [
  { icon: Church,   title: "Sunday Worship",  time: "9:00 AM – 11:30 AM",     place: "Main Sanctuary" },
  { icon: BookOpen, title: "Bible Study",      time: "Wed. 6:30 PM – 8:00 PM", place: "Church Hall"    },
  { icon: Users,    title: "Youth Ministry",   time: "Sat. 4:00 PM – 6:00 PM", place: "Youth Center"   },
  { icon: Heart,    title: "Prayer Meeting",   time: "Fri. 6:00 PM – 7:00 PM", place: "Main Sanctuary" },
];

const EVENTS = [
  { month: "Oct", day: "12", title: "Sunday Worship Service", time: "9:00 AM – 11:30 AM", place: "Main Sanctuary",   image: PHOTOS.event1 },
  { month: "Oct", day: "18", title: "Leadership Seminar",     time: "10:00 AM – 1:00 PM", place: "Church Hall",      image: PHOTOS.event2 },
  { month: "Oct", day: "25", title: "Community Outreach",     time: "9:00 AM – 3:00 PM",  place: "Mtwapa Community", image: PHOTOS.event3 },
];

const SERMONS = [
  { month: "Sep", day: "28", title: "Walking in Faith, Not Fear", speaker: "Pastor James Mwangi",  image: PHOTOS.sermon1 },
  { month: "Sep", day: "21", title: "The Power of Prayer",        speaker: "Pastor James Mwangi",  image: PHOTOS.sermon2 },
  { month: "Sep", day: "14", title: "Serving with Joy",           speaker: "Pastor Grace Achieng", image: PHOTOS.sermon3 },
];

const STATS = [
  { icon: Users,  value: "500+", label: "Weekly Attendees"  },
  { icon: Heart,  value: "120+", label: "Active Volunteers" },
  { icon: Church, value: "15+",  label: "Ministries"        },
  { icon: Globe,  value: "10+",  label: "Outreach Programs" },
];

const GALLERY = PHOTOS.gallery;

/* ─────────────────────────── HELPERS ─────────────────────────── */
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A017]";

const img = (src: string) => ({ backgroundImage: `url('${src}')` });

// Two doves SVG logo
const doves = (
  <span className="flex items-center" aria-hidden>
    <svg viewBox="0 0 32 28" className="h-7 w-8 fill-[#D4A017]">
      <path d="M17 13C14 8 10 4.5 3 2.5c1.5 6 5 11.5 11.5 13.5z" />
      <path d="M14 15c2.5-2 5-3.5 8-3.5 1.4 0 2.5-1 3-2.5.4-1.2 1.3-1.9 2.5-1.9l3 1.4-2.6 1.1c-.1 3.3-2 6.3-5.2 8-2.7 1.4-6 1.7-9 .6L7 26l2.5-6.5c1.5-.5 3-2 4.5-4.5z" />
    </svg>
    <svg viewBox="0 0 32 28" className="-ml-1 h-7 w-8 -scale-x-100 fill-[#D4A017]">
      <path d="M17 13C14 8 10 4.5 3 2.5c1.5 6 5 11.5 11.5 13.5z" />
      <path d="M14 15c2.5-2 5-3.5 8-3.5 1.4 0 2.5-1 3-2.5.4-1.2 1.3-1.9 2.5-1.9l3 1.4-2.6 1.1c-.1 3.3-2 6.3-5.2 8-2.7 1.4-6 1.7-9 .6L7 26l2.5-6.5c1.5-.5 3-2 4.5-4.5z" />
    </svg>
  </span>
);

/* ─────────────────── ANIMATED BUTTON COMPONENT ─────────────────── */
type BtnVariant = "gold" | "outline";

function Btn({
  href,
  variant = "gold",
  children,
  className = "",
}: {
  href: string;
  variant?: BtnVariant;
  children: React.ReactNode;
  className?: string;
}) {
  const base = [
    "group relative inline-flex items-center gap-2 overflow-hidden rounded-full",
    "px-6 py-3 text-sm font-semibold no-underline",
    // lift on hover, press-down on active
    "transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(.34,1.56,.64,1)]",
    "hover:-translate-y-[3px] active:translate-y-0 active:scale-[.97]",
    focus,
  ].join(" ");

  const variants: Record<BtnVariant, string> = {
    gold:
      "bg-[#D4A017] text-[#0A0A0A] shadow-[0_4px_18px_rgba(212,160,23,.35)] hover:shadow-[0_10px_30px_rgba(212,160,23,.55)]",
    outline:
      "border border-[#D4A017] bg-transparent text-[#D4A017] hover:bg-[#D4A017]/10",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {/* shimmer sweep */}
      <span
        className="pointer-events-none absolute inset-0 -skew-x-12 -translate-x-full bg-white/25 transition-transform duration-[350ms] ease-out group-hover:translate-x-full"
        aria-hidden
      />
      {children}
    </a>
  );
}

/* ─────────────────────────── PAGE ─────────────────────────── */
export default function Home() {
  return (
    <div className="bg-white text-[#222]">

      {/* Keyframes injected once */}
      <style>{`
        @keyframes shimmer {
          from { transform: skewX(-12deg) translateX(-100%); }
          to   { transform: skewX(-12deg) translateX(200%);  }
        }
      `}</style>

      {/* ── NAVBAR — glassmorphism ── */}
      <header className="sticky top-0 z-30 border-b border-[#D4A017]/20 bg-[#0A0A0A]/60 backdrop-blur-xl backdrop-saturate-150">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#top" className={`flex items-center gap-3 ${focus}`}>
            {doves}
            <span className="leading-tight">
              <span className="block font-[family-name:var(--font-heading)] text-lg font-bold text-white">
                {CHURCH.name}
              </span>
              <span className="block text-[10px] text-[#D4A017]/80">{CHURCH.motto}</span>
            </span>
          </a>

          <ul className="hidden items-center gap-7 text-sm lg:flex">
            {NAV.map((n, i) => (
              <li key={n.label}>
                <a
                  href={n.href}
                  className={`pb-1 text-white/70 transition-colors hover:text-[#D4A017] ${focus} ${
                    i === 0 ? "border-b-2 border-[#D4A017] text-[#D4A017]" : ""
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Btn href="#contact" className="!hidden sm:!inline-flex !px-5 !py-2.5">
              <MapPin className="h-4 w-4" aria-hidden /> Visit Us
            </Btn>

            {/* Mobile menu — glassmorphism dropdown */}
            <details className="relative lg:hidden">
              <summary
                className={`cursor-pointer list-none rounded-full border border-[#D4A017]/40 px-4 py-2 text-sm text-white ${focus}`}
              >
                Menu
              </summary>
              <ul className="absolute right-0 mt-2 w-48 rounded-2xl border border-[#D4A017]/20 bg-[#0A0A0A]/70 p-2 shadow-2xl backdrop-blur-xl backdrop-saturate-150 ring-1 ring-white/5">
                {NAV.map((n) => (
                  <li key={n.label}>
                    <a
                      href={n.href}
                      className="block rounded-lg px-3 py-2 text-white/70 transition-colors hover:bg-[#D4A017]/15 hover:text-[#D4A017]"
                    >
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </nav>
      </header>

      <main id="top">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-[#0A0A0A]">
          <div className="absolute inset-0 bg-cover bg-right opacity-30" style={img(PHOTOS.hero)} aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-transparent" aria-hidden />

          <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="max-w-xl">
              <p className="flex items-center gap-3 text-xs font-semibold text-[#D4A017]">
                <span className="h-0.5 w-8 bg-[#D4A017]" aria-hidden />
                WELCOME TO {CHURCH.name.toUpperCase()}
              </p>
              <h1 className="mt-5 font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight text-white md:text-6xl">
                A Place to Belong,<br />
                <span className="text-[#D4A017]">Grow and Serve</span>
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">
                We are a community of believers, united by the love of Christ,
                growing in faith, and reaching the world with His hope.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Btn href="#services">
                  Join Us This Sunday <ArrowRight className="h-4 w-4" aria-hidden />
                </Btn>
                <Btn href="#sermons" variant="outline">
                  <Play className="h-4 w-4" aria-hidden /> Watch Live
                </Btn>
              </div>
              <div className="mt-10 flex items-start gap-3 text-sm text-white/60">
                <BookOpen className="mt-0.5 h-6 w-6 shrink-0 text-[#D4A017]" aria-hidden />
                <p>
                  "For where two or three gather in my name, there am I with them."
                  <span className="mt-1 block text-white/40">Matthew 18:20</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1fr_1.1fr_0.8fr]">
            <div>
              <p className="flex items-center gap-3 text-xs font-semibold text-[#D4A017]">
                <span className="h-0.5 w-8 bg-[#D4A017]" aria-hidden />
                ABOUT US
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold">Who We Are</h2>
              <p className="mt-5 max-w-md leading-relaxed text-black/75">
                {CHURCH.name} is a Christ-centered family where people from all walks of life
                come together to worship, learn, and make a difference. We exist to glorify God,
                encourage one another, and share the love of Jesus in our communities and beyond.
              </p>
              <Btn href="#" className="mt-7">
                Our Story <ArrowRight className="h-4 w-4" aria-hidden />
              </Btn>
            </div>

            <div
              role="img"
              aria-label="Congregation worshipping"
              className="aspect-[4/3] rounded-2xl bg-cover bg-center"
              style={img(PHOTOS.about)}
            />

            {/* Values — glassmorphism cards */}
            <ul className="space-y-4">
              {VALUES.map((v) => (
                <li
                  key={v.title}
                  className="flex items-center gap-4 rounded-2xl border border-[#D4A017]/15 bg-white/60 p-4 shadow-sm backdrop-blur-md transition-[border-color,box-shadow] hover:border-[#D4A017]/40 hover:shadow-[0_4px_20px_rgba(212,160,23,.12)]"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#FDF8EC]">
                    <v.icon className="h-7 w-7 text-[#D4A017]" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold">{v.title}</h3>
                    <p className="text-sm text-black/60">{v.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── SERVICES — glassmorphism cards on dark ── */}
        <section id="services" className="bg-[#0A0A0A] py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.8fr_2fr]">
            <div>
              <p className="flex items-center gap-3 text-xs font-semibold text-[#D4A017]">
                <span className="h-0.5 w-8 bg-[#D4A017]" aria-hidden />
                WHAT WE OFFER
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold text-white">Our Services</h2>
              <p className="mt-4 max-w-xs text-white/60">
                Find a place to connect, be encouraged, and grow in your walk with God.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {SERVICES.map((s) => (
                <li
                  key={s.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transition-[border-color,background,transform] duration-200 hover:-translate-y-1 hover:border-[#D4A017]/40 hover:bg-[#D4A017]/10"
                >
                  <s.icon className="mx-auto h-8 w-8 text-[#D4A017]" aria-hidden />
                  <h3 className="mt-3 font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-xs text-white/50">{s.time}</p>
                  <p className="text-xs text-white/40">{s.place}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── EVENTS ── */}
        <section id="events" className="bg-[#F8F5E6] py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.9fr_2fr]">
            <div>
              <p className="flex items-center gap-3 text-xs font-semibold text-[#D4A017]">
                <span className="h-0.5 w-8 bg-[#D4A017]" aria-hidden />
                UPCOMING EVENTS
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold">
                Be Part of What&apos;s Next
              </h2>
              <p className="mt-4 max-w-sm leading-relaxed text-black/70">
                From powerful worship nights to community outreach, there&apos;s always
                something happening at {CHURCH.name}.
              </p>
              <Btn href="#" className="mt-6">
                View All Events <ArrowRight className="h-4 w-4" aria-hidden />
              </Btn>
            </div>
            <ul className="grid gap-5 md:grid-cols-3">
              {EVENTS.map((e) => (
                <li
                  key={e.title}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative h-36 bg-cover bg-center" style={img(e.image)}>
                    {/* glassmorphism date badge */}
                    <div className="absolute left-3 top-3 rounded-xl border border-white/20 bg-[#0A0A0A]/50 px-2.5 py-1.5 text-center text-white backdrop-blur-md">
                      <div className="text-[10px] font-semibold leading-none">{e.month.toUpperCase()}</div>
                      <div className="text-lg font-bold leading-tight">{e.day}</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{e.title}</h3>
                    <p className="mt-2 flex items-center gap-2 text-xs text-black/60">
                      <Clock className="h-3.5 w-3.5" aria-hidden /> {e.time}
                    </p>
                    <p className="mt-1 flex items-center gap-2 text-xs text-black/60">
                      <MapPin className="h-3.5 w-3.5" aria-hidden /> {e.place}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── SERMONS ── */}
        <section id="sermons" className="bg-white py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.9fr_2fr]">
            <div>
              <p className="flex items-center gap-3 text-xs font-semibold text-[#D4A017]">
                <span className="h-0.5 w-8 bg-[#D4A017]" aria-hidden />
                LATEST SERMON
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold">
                {SERMONS[0].title}
              </h2>
              <p className="mt-2 text-sm text-black/60">
                {SERMONS[0].speaker} · September 28, 2026
              </p>
              <p className="mt-4 max-w-sm leading-relaxed text-black/70">
                Even in the midst of trials, God calls us to trust Him. Learn how to walk
                in confidence, even when the path ahead is unclear.
              </p>
              <Btn href="#" className="mt-6">
                Watch Sermon <ArrowRight className="h-4 w-4" aria-hidden />
              </Btn>
            </div>
            <ul className="grid gap-5 md:grid-cols-3">
              {SERMONS.map((s) => (
                <li
                  key={s.title}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <a href="#" className={`block ${focus}`}>
                    <div
                      className="relative flex h-36 items-center justify-center bg-cover bg-center"
                      style={img(s.image)}
                    >
                      {/* glassmorphism play button */}
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md transition-transform duration-200 hover:scale-110">
                        <Play className="h-5 w-5 fill-white" aria-hidden />
                      </span>
                      {/* glassmorphism date badge */}
                      <div className="absolute left-3 top-3 rounded-xl border border-white/20 bg-[#0A0A0A]/50 px-2.5 py-1.5 text-center text-white backdrop-blur-md">
                        <div className="text-[10px] font-semibold leading-none">{s.month.toUpperCase()}</div>
                        <div className="text-lg font-bold leading-tight">{s.day}</div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">{s.title}</h3>
                      <p className="mt-1 text-xs text-black/60">{s.speaker}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── IMPACT — glassmorphism stat cards on dark ── */}
        <section className="relative overflow-hidden bg-[#0A0A0A] py-16">
          <div className="absolute inset-0 bg-cover bg-left opacity-20" style={img(PHOTOS.impact)} aria-hidden />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="flex items-center gap-3 text-xs font-semibold text-[#D4A017]">
                <span className="h-0.5 w-8 bg-[#D4A017]" aria-hidden />
                OUR IMPACT
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold text-white">
                Together We Make a Difference
              </h2>
              <p className="mt-4 max-w-md text-white/60">
                Lives changed. Families strengthened. Communities transformed.
              </p>
              <Btn href="#" className="mt-6">
                View Our Impact <ArrowRight className="h-4 w-4" aria-hidden />
              </Btn>
            </div>
            <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {STATS.map((s) => (
                <li
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/5 py-6 text-center backdrop-blur-md transition-[border-color,background,transform] duration-200 hover:-translate-y-1 hover:border-[#D4A017]/30 hover:bg-white/10"
                >
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 backdrop-blur-md">
                    <s.icon className="h-5 w-5 text-[#D4A017]" aria-hidden />
                  </span>
                  <p className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-white">
                    {s.value}
                  </p>
                  <p className="text-xs text-white/50">{s.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── GALLERY ── */}
        <section id="gallery" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="flex items-center gap-3 text-xs font-semibold text-[#D4A017]">
                  <span className="h-0.5 w-8 bg-[#D4A017]" aria-hidden />
                  GALLERY
                </p>
                <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold">
                  Moments from Our Church
                </h2>
                <p className="mt-1 text-sm text-black/60">Worship, fellowship, and life together.</p>
              </div>
              <a href="#" className={`inline-flex items-center gap-2 text-sm font-semibold text-[#D4A017] ${focus}`}>
                View Gallery <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-5">
              {GALLERY.map((src, i) => (
                <li
                  key={src}
                  role="img"
                  aria-label={`Church gallery photo ${i + 1}`}
                  className="aspect-[4/3] overflow-hidden rounded-2xl bg-cover bg-center transition-transform duration-300 hover:scale-[1.03]"
                  style={img(src)}
                />
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer id="contact" className="bg-[#0A0A0A] py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.2fr_1.2fr_1.2fr_1fr]">

          <div>
            <div className="flex items-center gap-3">
              {doves}
              <div className="leading-tight">
                <p className="font-[family-name:var(--font-heading)] text-lg font-bold">{CHURCH.name}</p>
                <p className="text-[10px] text-[#D4A017]/70">{CHURCH.motto}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-[#D4A017]">Quick Links</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/60">
              {NAV.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className={`transition-colors hover:text-[#D4A017] ${focus}`}>{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-[#D4A017]">Get In Touch</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#D4A017]" aria-hidden /> {CHURCH.location}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#D4A017]" aria-hidden /> {CHURCH.phone}
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#D4A017]" aria-hidden /> {CHURCH.email}
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-[#D4A017]">Follow Us</h2>
            {/* Social icons — glassmorphism */}
            <ul className="mt-4 flex gap-3">
              {[
                { label: "Facebook",  short: "f"  },
                { label: "Instagram", short: "ig" },
                { label: "YouTube",   short: "yt" },
                { label: "X",         short: "X"  },
              ].map((s) => (
                <li key={s.label}>
                  <a
                    href="#"
                    aria-label={s.label}
                    className={[
                      "flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold",
                      "border border-[#D4A017]/30 bg-[#D4A017]/10 text-[#D4A017] backdrop-blur-md",
                      "transition-[background,border-color,transform] duration-200",
                      "hover:-translate-y-[2px] hover:border-[#D4A017]/70 hover:bg-[#D4A017]/25",
                      focus,
                    ].join(" ")}
                  >
                    {s.short}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-white/30">
              © {new Date().getFullYear()} {CHURCH.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}