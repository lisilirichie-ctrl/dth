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

// Swap these placeholders for the client's real details.
const CHURCH = {
  name: "Door to Heaven Church",
  motto: "Jesus · People · Purpose",
  location: "Mtwapa, Kenya",
  phone: "+254 700 123 456",
  email: "info@doortoheaven.co.ke",
};

// Placeholder photos from Unsplash (free to use). Swap for the client's own photos later:
// put files in /public/images and replace these URLs with "/images/your-file.jpg".
const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

const PHOTOS = {
  hero: u("1608569569089-5d2e3e644ea6", 1800),
  about: u("1477281765962-ef34e8bb0967"),
  event1: u("1507692049790-de58290a4334", 800),
  event2: u("1497621122273-f5cfb6065c56", 800),
  event3: u("1550096141-7263640aa48c", 800),
  sermon1: u("1438232992991-995b7058bbb3", 800),
  sermon2: u("1622598453695-4fbaf151aadc", 800),
  sermon3: u("1580243152089-98da42694285", 800),
  impact: u("1630553229660-df21d9aaea7a", 1600),
  gallery: [
    u("1522158637959-30385a09e0da", 600),
    u("1509021436665-8f07dbf5bf1d", 600),
    u("1569292567777-e5d61a759322", 600),
    u("1592647683756-4998f9869e2f", 600),
    u("1695938746747-ec185ea81325", 600),
  ],
};

const NAV = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Sermons", href: "#sermons" },
  { label: "Events", href: "#events" },
  { label: "Ministries", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const VALUES = [
  { icon: Cross, title: "Christ Centered", text: "Everything we do points to Jesus." },
  { icon: Users, title: "Family Focused", text: "We grow together in love and faith." },
  { icon: Heart, title: "Community Driven", text: "We serve, support and reach our neighbors." },
];

const SERVICES = [
  { icon: Church, title: "Sunday Worship", time: "9:00 AM – 11:30 AM", place: "Main Sanctuary" },
  { icon: BookOpen, title: "Bible Study", time: "Wed. 6:30 PM – 8:00 PM", place: "Church Hall" },
  { icon: Users, title: "Youth Ministry", time: "Sat. 4:00 PM – 6:00 PM", place: "Youth Center" },
  { icon: Heart, title: "Prayer Meeting", time: "Fri. 6:00 PM – 7:00 PM", place: "Main Sanctuary" },
];

const EVENTS = [
  { month: "Oct", day: "12", title: "Sunday Worship Service", time: "9:00 AM – 11:30 AM", place: "Main Sanctuary", image: PHOTOS.event1 },
  { month: "Oct", day: "18", title: "Leadership Seminar", time: "10:00 AM – 1:00 PM", place: "Church Hall", image: PHOTOS.event2 },
  { month: "Oct", day: "25", title: "Community Outreach", time: "9:00 AM – 3:00 PM", place: "Mtwapa Community", image: PHOTOS.event3 },
];

const SERMONS = [
  { month: "Sep", day: "28", title: "Walking in Faith, Not Fear", speaker: "Pastor James Mwangi", image: PHOTOS.sermon1 },
  { month: "Sep", day: "21", title: "The Power of Prayer", speaker: "Pastor James Mwangi", image: PHOTOS.sermon2 },
  { month: "Sep", day: "14", title: "Serving with Joy", speaker: "Pastor Grace Achieng", image: PHOTOS.sermon3 },
];

const STATS = [
  { icon: Users, value: "500+", label: "Weekly Attendees" },
  { icon: Heart, value: "120+", label: "Active Volunteers" },
  { icon: Church, value: "15+", label: "Ministries" },
  { icon: Globe, value: "10+", label: "Outreach Programs" },
];

const GALLERY = PHOTOS.gallery;

const RED = "bg-[#B3161C]";
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B3161C]";
const img = (src: string) => ({ backgroundImage: `url('${src}')` });

// Two doves logo (custom SVG, no icon library needed).
const doves = (
  <span className="flex items-center" aria-hidden>
    <svg viewBox="0 0 32 28" className="h-7 w-8 fill-[#B3161C]">
      <path d="M17 13C14 8 10 4.5 3 2.5c1.5 6 5 11.5 11.5 13.5z" />
      <path d="M14 15c2.5-2 5-3.5 8-3.5 1.4 0 2.5-1 3-2.5.4-1.2 1.3-1.9 2.5-1.9l3 1.4-2.6 1.1c-.1 3.3-2 6.3-5.2 8-2.7 1.4-6 1.7-9 .6L7 26l2.5-6.5c1.5-.5 3-2 4.5-4.5z" />
    </svg>
    <svg viewBox="0 0 32 28" className="-ml-1 h-7 w-8 -scale-x-100 fill-[#B3161C]">
      <path d="M17 13C14 8 10 4.5 3 2.5c1.5 6 5 11.5 11.5 13.5z" />
      <path d="M14 15c2.5-2 5-3.5 8-3.5 1.4 0 2.5-1 3-2.5.4-1.2 1.3-1.9 2.5-1.9l3 1.4-2.6 1.1c-.1 3.3-2 6.3-5.2 8-2.7 1.4-6 1.7-9 .6L7 26l2.5-6.5c1.5-.5 3-2 4.5-4.5z" />
    </svg>
  </span>
);

export default function Home() {
  return (
    <div className="bg-white text-[#222]">
      {/* Navbar */}
      <header className="sticky top-0 z-30 border-b border-black/5 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#top" className={`flex items-center gap-3 ${focus}`}>
            {doves}
            <span className="leading-tight">
              <span className="block font-[family-name:var(--font-heading)] text-lg font-bold">
                {CHURCH.name}
              </span>
              <span className="block text-[10px] text-black/50">{CHURCH.motto}</span>
            </span>
          </a>

          <ul className="hidden items-center gap-7 text-sm lg:flex">
            {NAV.map((n, i) => (
              <li key={n.label}>
                <a
                  href={n.href}
                  className={`pb-1 hover:text-[#B3161C] ${focus} ${
                    i === 0 ? "border-b-2 border-[#B3161C] text-[#B3161C]" : ""
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className={`hidden items-center gap-2 rounded-full ${RED} px-5 py-2.5 text-sm font-semibold text-white sm:inline-flex ${focus}`}
            >
              <MapPin className="h-4 w-4" aria-hidden /> Visit Us
            </a>
            <details className="relative lg:hidden">
              <summary
                className={`cursor-pointer list-none rounded-full border border-black/20 px-4 py-2 text-sm ${focus}`}
              >
                Menu
              </summary>
              <ul className="absolute right-0 mt-2 w-48 rounded-lg bg-white p-2 shadow-lg ring-1 ring-black/5">
                {NAV.map((n) => (
                  <li key={n.label}>
                    <a href={n.href} className="block rounded px-3 py-2 hover:bg-[#FBEFEF]">
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
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#EDE3DC]">
          {/* Hero photo: PHOTOS.hero */}
          <div
            className="absolute inset-0 bg-cover bg-right"
            style={img(PHOTOS.hero)}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent md:via-white/70"
            aria-hidden
          />
          <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="max-w-xl">
              <p className="flex items-center gap-3 text-xs font-semibold text-[#B3161C]">
                <span className="h-0.5 w-8 bg-[#B3161C]" aria-hidden />
                WELCOME TO {CHURCH.name.toUpperCase()}
              </p>
              <h1 className="mt-5 font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight md:text-6xl">
                A Place to Belong,
                <br />
                <span className="text-[#B3161C]">Grow and Serve</span>
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-black/75">
                We are a community of believers, united by the love of Christ,
                growing in faith, and reaching the world with His hope.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className={`inline-flex items-center gap-2 rounded-full ${RED} px-6 py-3 text-sm font-semibold text-white ${focus}`}
                >
                  Join Us This Sunday <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
                <a
                  href="#sermons"
                  className={`inline-flex items-center gap-2 rounded-full border border-[#B3161C] bg-white/70 px-6 py-3 text-sm font-semibold text-[#B3161C] ${focus}`}
                >
                  <Play className="h-4 w-4" aria-hidden /> Watch Live
                </a>
              </div>
              <div className="mt-10 flex items-start gap-3 text-sm text-black/70">
                <BookOpen className="mt-0.5 h-6 w-6 shrink-0 text-[#B3161C]" aria-hidden />
                <p>
                  “For where two or three gather in my name, there am I with them.”
                  <span className="mt-1 block text-black/50">Matthew 18:20</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1fr_1.1fr_0.8fr]">
            <div>
              <p className="flex items-center gap-3 text-xs font-semibold text-[#B3161C]">
                <span className="h-0.5 w-8 bg-[#B3161C]" aria-hidden />
                ABOUT US
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold">
                Who We Are
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-black/75">
                {CHURCH.name} is a Christ-centered family where people from all
                walks of life come together to worship, learn, and make a
                difference. We exist to glorify God, encourage one another, and
                share the love of Jesus in our communities and beyond.
              </p>
              <a
                href="#"
                className={`mt-7 inline-flex items-center gap-2 rounded-full ${RED} px-6 py-3 text-sm font-semibold text-white ${focus}`}
              >
                Our Story <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>

            {/* About photo: PHOTOS.about */}
            <div
              role="img"
              aria-label="Congregation worshipping"
              className="aspect-[4/3] rounded-2xl bg-[#3a2a2a]/20 bg-cover bg-center"
              style={img(PHOTOS.about)}
            />

            <ul className="space-y-4">
              {VALUES.map((v) => (
                <li key={v.title} className="flex items-center gap-4">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#FBEFEF]">
                    <v.icon className="h-7 w-7 text-[#B3161C]" aria-hidden />
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

        {/* Services */}
        <section id="services" className="bg-[#F8F6F5] py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.8fr_2fr]">
            <div>
              <p className="flex items-center gap-3 text-xs font-semibold text-[#B3161C]">
                <span className="h-0.5 w-8 bg-[#B3161C]" aria-hidden />
                WHAT WE OFFER
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold">
                Our Services
              </h2>
              <p className="mt-4 max-w-xs text-black/70">
                Find a place to connect, be encouraged, and grow in your walk
                with God.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {SERVICES.map((s) => (
                <li
                  key={s.title}
                  className="rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-black/5"
                >
                  <s.icon className="mx-auto h-8 w-8 text-[#B3161C]" aria-hidden />
                  <h3 className="mt-3 font-semibold">{s.title}</h3>
                  <p className="mt-2 text-xs text-black/60">{s.time}</p>
                  <p className="text-xs text-black/50">{s.place}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Events */}
        <section id="events" className="bg-[#FBF1F1] py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.9fr_2fr]">
            <div>
              <p className="flex items-center gap-3 text-xs font-semibold text-[#B3161C]">
                <span className="h-0.5 w-8 bg-[#B3161C]" aria-hidden />
                UPCOMING EVENTS
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold">
                Be Part of What’s Next
              </h2>
              <p className="mt-4 max-w-sm leading-relaxed text-black/70">
                From powerful worship nights to community outreach, there’s
                always something happening at {CHURCH.name}. Check out our
                upcoming events and plan to be there!
              </p>
              <a
                href="#"
                className={`mt-6 inline-flex items-center gap-2 rounded-full ${RED} px-6 py-3 text-sm font-semibold text-white ${focus}`}
              >
                View All Events <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
            <ul className="grid gap-5 md:grid-cols-3">
              {EVENTS.map((e) => (
                <li key={e.title} className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5">
                  <div
                    className="relative h-36 bg-[#2b2323] bg-cover bg-center"
                    style={img(e.image)}
                  >
                    <div className={`absolute left-3 top-3 rounded-md ${RED} px-2.5 py-1 text-center text-white`}>
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

        {/* Latest sermons */}
        <section id="sermons" className="bg-white py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.9fr_2fr]">
            <div>
              <p className="flex items-center gap-3 text-xs font-semibold text-[#B3161C]">
                <span className="h-0.5 w-8 bg-[#B3161C]" aria-hidden />
                LATEST SERMON
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold">
                {SERMONS[0].title}
              </h2>
              <p className="mt-2 text-sm text-black/60">
                {SERMONS[0].speaker} · September 28, 2026
              </p>
              <p className="mt-4 max-w-sm leading-relaxed text-black/70">
                Even in the midst of trials, God calls us to trust Him. Learn
                how to walk in confidence, even when the path ahead is unclear.
              </p>
              <a
                href="#"
                className={`mt-6 inline-flex items-center gap-2 rounded-full ${RED} px-6 py-3 text-sm font-semibold text-white ${focus}`}
              >
                Watch Sermon <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
            <ul className="grid gap-5 md:grid-cols-3">
              {SERMONS.map((s) => (
                <li key={s.title} className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5">
                  <a href="#" className={`block ${focus}`}>
                    <div
                      className="relative flex h-36 items-center justify-center bg-[#2b2323] bg-cover bg-center"
                      style={img(s.image)}
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#B3161C]">
                        <Play className="h-5 w-5 fill-[#B3161C]" aria-hidden />
                      </span>
                      <div className={`absolute left-3 top-3 rounded-md ${RED} px-2.5 py-1 text-center text-white`}>
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

        {/* Impact */}
        <section className="relative overflow-hidden bg-[#F2ECE8] py-16">
          {/* Soft background photo: PHOTOS.impact */}
          <div
            className="absolute inset-0 bg-cover bg-left opacity-40"
            style={img(PHOTOS.impact)}
            aria-hidden
          />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="flex items-center gap-3 text-xs font-semibold text-[#B3161C]">
                <span className="h-0.5 w-8 bg-[#B3161C]" aria-hidden />
                OUR IMPACT
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold">
                Together We Make a Difference
              </h2>
              <p className="mt-4 max-w-md text-black/70">
                Lives changed. Families strengthened. Communities transformed.
              </p>
              <a
                href="#"
                className={`mt-6 inline-flex items-center gap-2 rounded-full ${RED} px-6 py-3 text-sm font-semibold text-white ${focus}`}
              >
                View Our Impact <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
            <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {STATS.map((s) => (
                <li key={s.label} className="text-center">
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#FBEFEF]">
                    <s.icon className="h-5 w-5 text-[#B3161C]" aria-hidden />
                  </span>
                  <p className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold">
                    {s.value}
                  </p>
                  <p className="text-xs text-black/60">{s.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="flex items-center gap-3 text-xs font-semibold text-[#B3161C]">
                  <span className="h-0.5 w-8 bg-[#B3161C]" aria-hidden />
                  GALLERY
                </p>
                <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold">
                  Moments from Our Church
                </h2>
                <p className="mt-1 text-sm text-black/60">
                  Worship, fellowship, and life together.
                </p>
              </div>
              <a
                href="#"
                className={`inline-flex items-center gap-2 text-sm font-semibold text-[#B3161C] ${focus}`}
              >
                View Gallery <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-5">
              {GALLERY.map((src, i) => (
                <li
                  key={src}
                  role="img"
                  aria-label={`Church gallery photo ${i + 1}`}
                  className="aspect-[4/3] rounded-lg bg-[#3a2a2a]/15 bg-cover bg-center"
                  style={img(src)}
                />
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-[#1C1C1C] py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.2fr_1.2fr_1.2fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              {doves}
              <div className="leading-tight">
                <p className="font-[family-name:var(--font-heading)] text-lg font-bold">
                  {CHURCH.name}
                </p>
                <p className="text-[10px] text-white/50">{CHURCH.motto}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold">Quick Links</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/70">
              {NAV.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className={`hover:text-white ${focus}`}>
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold">Get In Touch</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4" aria-hidden /> {CHURCH.location}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4" aria-hidden /> {CHURCH.phone}
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4" aria-hidden /> {CHURCH.email}
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold">Follow Us</h2>
            <ul className="mt-4 flex gap-3">
              {[
                { label: "Facebook", short: "f" },
                { label: "Instagram", short: "ig" },
                { label: "YouTube", short: "yt" },
                { label: "X", short: "X" },
              ].map((s) => (
                <li key={s.label}>
                  <a
                    href="#"
                    aria-label={s.label}
                    className={`flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-bold text-[#1C1C1C] ${focus}`}
                  >
                    {s.short}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-white/40">
              © {new Date().getFullYear()} {CHURCH.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}