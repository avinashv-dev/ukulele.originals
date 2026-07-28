import { createFileRoute } from "@tanstack/react-router";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const logo = "/images/logo.png";
const chindhu = "/images/chindhu.jpg";
const avinash = "/images/avinash.jpg";
const pratheesh = "/images/pratheesh.jpg";
const sreehari = "/images/sreehari.jpg";
import { Instagram, Mail, MapPin, ArrowUpRight, ArrowRight, Film, Sparkles, Clapperboard, Megaphone, Users, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ukulele Originals" },
      { name: "description", content: "We craft scroll-stopping ads, micro dramas and brand stories for Kerala's most curious brands. Stories that stay with you." },
      { name: "keywords", content: "ad film production Kerala, micro drama studio, Thrissur ad agency, brand films Kerala, Instagram reels production, Ukulele Originals" },
      { property: "og:title", content: "Ukulele Originals — Stories that stay with you" },
      { property: "og:description", content: "Ads, micro dramas, reels and brand films from the team behind @ukulele.originals." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:site_name", content: "Ukulele Originals" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ukulele Originals — Stories that stay with you" },
      { name: "twitter:description", content: "Ads, micro dramas, reels and brand films from the team behind @ukulele.originals." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Ukulele Originals",
          description:
            "Thrissur-based creative studio crafting ads, micro dramas and brand films.",
          url: "/",
          sameAs: ["https://www.instagram.com/ukulele.originals/"],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Thrissur",
            addressRegion: "Kerala",
            addressCountry: "IN",
          },
          founder: [
            { "@type": "Person", name: "Chindhu Prasad" },
            { "@type": "Person", name: "Sreehari P K" },
            { "@type": "Person", name: "Avinash Vijayan" },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const INSTA = "https://www.instagram.com/ukulele.originals/";

const SERVICES = [
  { icon: Megaphone, title: "Brand Ads & Commercials", desc: "Punchy, story-driven ads engineered for reels and YouTube pre-rolls." },
  { icon: Clapperboard, title: "Micro Dramas", desc: "60–90 second episodic dramas that turn your product into the hero of a story people finish." },
  { icon: Film, title: "Short Films & Brand Films", desc: "Cinematic long-form content that builds your brand's mythology, not just its awareness." },
  { icon: Sparkles, title: "Reels & Social Stories", desc: "Hook-first vertical content built for the algorithm and calibrated to your tone." },
  { icon: Users, title: "Casting & Talent", desc: "In-house ensemble of trained actors — and if a story calls for a face we don't have, we cast accordingly. No last-minute scrambling." },
  { icon: Zap, title: "End-to-End Production", desc: "Concept, script, direction, shoot, edit, sound, colour. One team. One phone call." },
];

type OwnerSection = { title: string; items: string[] };
type Owner = {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  image: string;
  insta: string;
  sections: OwnerSection[];
};

const OWNERS: Owner[] = [
  {
    name: "Chindhu Prasad",
    role: "Co-Founder · Actor · Creative Lead",
    tagline: "The face on screen — and the eye behind the frame.",
    bio: "Actor across film, television and web. Currently lead on Surya Comedy's 'Karyam Nisaram Presnam Gurutharam'. A performer who reads scripts like a director and directs like a performer.",
    image: chindhu,
    insta: "https://www.instagram.com/chindhu_prasad_sathya",
    sections: [
      { title: "Television", items: ["Surya Comedy — Lead, 'Karyam Nisaram Presnam Gurutharam'"] },
      { title: "Film & Web", items: ["Featured across film and web projects", "Ongoing brand campaigns with Ukulele Originals"] },
      { title: "Training", items: ["Sajeev Raman's Actlab", "Abu Valayamkulam's Acting Workshop", "Under mentor Kannan Unni"] },
      { title: "Skills", items: ["Acting (Film · TV · Digital)", "Improvisation", "Malayalam · Tamil · English"] },
    ],
  },
  {
    name: "Sreehari P K",
    role: "Co-Founder · Director · Writer",
    tagline: "Writes it. Shoots it. Cuts it. Wins for it.",
    bio: "Writer-director building tight, feeling-first stories. Award-winning at the College Short Film Festival for both direction and technical craft. Also acts when the role earns it.",
    image: sreehari,
    insta: "https://www.instagram.com/_sreehari_p_k__",
    sections: [
      { title: "Direction", items: ["Writer & Director — 3 short films", "Writer & Director — 2 commercial advertisements"] },
      { title: "Acting", items: ["Acted in 1 feature film"] },
      { title: "Recognition", items: ["Best Director Award — College Short Film Festival", "Technical Support Award — College Short Film Festival"] },
      { title: "Toolkit", items: ["Concept · Script · Screenplay", "Direction & Storyboarding", "Edit supervision & post"] },
    ],
  },
  {
    name: "Avinash Vijayan",
    role: "Co-Founder · Actor · Story-driven Performer",
    tagline: "Story-driven performer. Thrissur-based. Ready to travel.",
    bio: "Trained actor with credits across OTT, film, short-form and brand — from Disney+ Hotstar's 1000 Babies to Jos Alukkas and Torc. Multilingual, movement-trained, and built for characters that carry a story.",
    image: avinash,
    insta: "https://www.instagram.com/actor.avinaash_vijayan",
    sections: [
      { title: "Web Series", items: ["Amazon Micro Series", "1000 Babies — Disney+ Hotstar", "Blindfold — SonyLIV (Upcoming)", "Padavett (Upcoming)"] },
      { title: "Films", items: ["Barabas (Upcoming)", "Izha", "The Waiting List"] },
      { title: "Short Films", items: ["Antharaalam (Upcoming)", "Kottikalaasham (Upcoming)", "Padayani", "Father", "The Human Expiry", "Liberation"] },
      { title: "Other Work", items: ["Surya Comedy Sitcom", "RU-Vlog YouTube Channel", "Ponmutta YouTube Channel"] },
      { title: "Brand Work", items: ["Jos Alukkas — Advertisement", "Nambisan Ghee — Advertisement", "Torc — Advertisement"] },
      { title: "Skills", items: ["Acting (Film & Digital)", "Dance", "Shaolin Kung Fu", "Malayalam · Tamil · Hindi · English"] },
      { title: "Training", items: ["Sajeev Raman's Actlab", "Tharun Moorthy's PUPA", "Abu Valayamkulam's Acting Workshop"] },
    ],
  },
];

const ACTORS = [
  {
    name: "Pratheesh Prakash",
    role: "Actor",
    credits: ["Surya Comedy — Artist", "Family Circus — Lead Role"],
    image: pratheesh,
    insta: "https://www.instagram.com/pratheesh__prakash",
  },
  {
    name: "Chindhu Prasad",
    role: "Actor/Director/Writer",
    credits: ["Innocent", "Kottikalaasham", "Surya Comedy — Hero"],
    image: chindhu,
    insta: "https://www.instagram.com/chindhu_prasad_sathya",
  },
  {
    name: "Sreehari P K",
    role: "Actor/Director/Writer",
    credits: ["3 Short Films", "2 Commercial Ads", "Feature Film"],
    image: sreehari,
    insta: "https://www.instagram.com/_sreehari_p_k__",
  },
  {
    name: "Avinash Vijayan",
    role: "Actor/Director/Writer",
    credits: ["1000 Babies (Disney+ Hotstar)", "Izha", "Jos Alukkas · Torc Ads"],
    image: avinash,
    insta: "https://www.instagram.com/actor.avinaash_vijayan",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Owners />
      <Talent />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-3 inset-x-3 md:inset-x-6 z-50 rounded-full glass glass-hi">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Ukulele Originals" className="h-10 w-10 object-contain drop-shadow-[0_4px_12px_oklch(0.78_0.14_82/0.5)]" />
          <span className="font-display text-xl">Ukulele<span className="text-gradient">.originals</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#work" className="nav-link hover:text-foreground">Studio</a>
          <a href="#services" className="nav-link hover:text-foreground">Services</a>
          <a href="#owners" className="nav-link hover:text-foreground">Founders</a>
          <a href="#talent" className="nav-link hover:text-foreground">Talent</a>
          <a href="#contact" className="nav-link hover:text-foreground">Contact</a>
        </nav>
        <a
          href="#contact"
          className="btn-neu hidden sm:inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-medium text-primary-foreground transition"
        >
          Start a project <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function HeroWordmark() {
  const stats = [
    { n: "1K+", l: "Followers & growing" },
    { n: "30+", l: "Films shipped" },
    { n: "4", l: "In-house actors" },
  ];
  return (
    <div className="mt-10 flex flex-col items-center text-center lg:mt-0 lg:items-end lg:justify-self-end lg:text-right">
      <div className="flex flex-col leading-[0.9]">
        <span className="text-[22px] font-black text-[#3a4568] lg:text-[38px]">UKU</span>
        <span className="text-[26px] font-black text-[#4a5580] lg:text-[44px]">LELE</span>
        <span className="text-[30px] font-black text-[#7a642f] lg:text-[44px] xl:text-[50px]">ORIGIN</span>
        <span className="text-[34px] font-black text-[#d4a94a] lg:text-[46px] xl:text-[58px]">ALS</span>
      </div>
      <div className="mt-6 h-px w-full bg-[#1c2338]" />
      <div className="mt-4 flex gap-6 lg:gap-8">
        {stats.map((s) => (
          <div key={s.l}>
            <div className="font-display text-[22px] leading-none text-[#d4a94a]">{s.n}</div>
            <div className="mt-1 text-[9px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero noise pt-32 pb-12 md:pt-40 md:pb-16">
      <div className="aurora" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Thrissur, Kerala
          </div>
          <h1 className="font-display mt-6 text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[0.95] tracking-tight md:whitespace-nowrap">
            Stories that <span className="text-gradient">stay with you</span> — built for the scroll.
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-xl text-muted-foreground leading-relaxed">
            Ukulele Originals is a Thrissur-based creative studio turning products into
            characters and brands into worlds. Ads, micro dramas and short films
            engineered to make people stop, watch, and remember.
          </p>
          <div className="mt-8 md:mt-10 flex flex-wrap gap-3">
            <a href="#contact" className="btn-neu inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-primary-foreground transition">
              Pitch us your brand <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={INSTA} target="_blank" rel="noreferrer" className="btn-neu inline-flex items-center gap-2 rounded-full bg-card/60 px-6 py-3 text-sm font-medium hover:bg-card transition">
              <Instagram className="h-4 w-4" /> Watch on Instagram
            </a>
          </div>
        </div>

        <HeroWordmark />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="work" className="relative py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-12 md:items-center">
        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">The studio</div>
          <h2 className="font-display mt-4 text-4xl md:text-5xl leading-tight">
            A little studio with a cinematic obsession.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 text-lg text-muted-foreground leading-relaxed space-y-5">
          <p>
            We started as three friends — an actor, a director, and a performer — posting reels
            under <a href={INSTA} target="_blank" rel="noreferrer" className="text-foreground underline decoration-primary/40 underline-offset-4">@ukulele.originals</a>.
            One thousand followers later, we're now open for brand work: crafting ads and micro
            dramas with the same care we bring to our own stories.
          </p>
          <p>
            No stock templates. No cookie-cutter reels. Every frame is written, cast, shot and
            edited by the same team that will read your brief — so nothing gets lost in the handoff.
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-10 md:py-14 bg-card/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-6">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary">What we make</div>
            <h2 className="font-display mt-4 text-4xl md:text-6xl leading-tight max-w-2xl">
              Six ways we can make your brand <span className="text-gradient">unmissable.</span>
            </h2>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <Card
              key={title}
              className="group border-border/60 bg-card/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <CardHeader>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <CardTitle className="pt-2 font-display text-2xl font-normal">{title}</CardTitle>
                <CardDescription className="leading-relaxed">{desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function InitialAvatar({ name }: { name: string }) {
  const initials = name.split(" ").map(w => w[0]).slice(0, 2).join("");
  return (
    <div className="w-full h-full bg-brand flex items-center justify-center">
      <span className="font-display text-7xl text-primary-foreground">{initials}</span>
    </div>
  );
}

function Owners() {
  return (
    <section id="owners" className="relative py-10 md:py-14 overflow-hidden">
      <div className="aurora opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-xs uppercase tracking-[0.3em] text-primary">The founders</div>
        <h2 className="font-display mt-4 text-4xl md:text-6xl leading-tight max-w-3xl">
          Three obsessions. One studio.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Scroll each card for the full portfolio — credits, training and every reel that got us here.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-7">
          {OWNERS.map((o) => (
            <OwnerCard key={o.name} owner={o} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OwnerCard({ owner: o }: { owner: Owner }) {
  return (
    <article className="group relative rounded-3xl glass glass-hi card-rise overflow-hidden">
      <div className="relative aspect-[4/5] overflow-hidden">
        {o.image ? (
          <img
            src={o.image}
            alt={o.name}
            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
          />
        ) : (
          <InitialAvatar name={o.name} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute left-5 right-5 bottom-5">
          <div className="text-[10px] uppercase tracking-[0.28em] text-primary">{o.role}</div>
          <h3 className="font-display text-3xl leading-tight mt-1">{o.name}</h3>
          <div className="mt-1 text-sm text-muted-foreground italic">{o.tagline}</div>
        </div>
      </div>
      <div className="p-6 pt-5">
        <p className="text-sm text-muted-foreground leading-relaxed">{o.bio}</p>

        <div className="mt-5 max-h-80 overflow-y-auto scroll-thin pr-2 space-y-4">
          {o.sections.map((s) => (
            <div key={s.title}>
              <div className="text-[10px] uppercase tracking-[0.28em] text-primary/90">{s.title}</div>
              <ul className="mt-2 space-y-1.5">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-2 text-sm text-foreground/90">
                    <span className="text-primary shrink-0">◆</span>
                    <span className="leading-snug">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <a
          href={o.insta}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full glass-strong px-4 py-2 text-sm hover:text-primary transition"
        >
          <Instagram className="h-4 w-4" /> Instagram <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}

function Talent() {
  return (
    <section id="talent" className="relative py-10 md:py-14 bg-card/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-6">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary">The ensemble</div>
            <h2 className="font-display mt-4 text-4xl md:text-6xl leading-tight max-w-2xl">
              Faces your audience will remember.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A trained in-house cast — trained across Actlab, PUPA, Kannan Unni and more —
            ready to carry your story.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ACTORS.map((a) => (
            <a key={a.name} href={a.insta} target="_blank" rel="noreferrer" className="group block rounded-2xl overflow-hidden border border-border bg-card shadow-card hover:border-primary/60 transition-colors">
              <div className="relative aspect-[4/5] overflow-hidden">
                {a.image ? (
                  <img src={a.image} alt={a.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <InitialAvatar name={a.name} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/10 to-transparent" />
                <div className="absolute left-4 right-4 bottom-4">
                  <div className="text-xs uppercase tracking-widest text-primary">{a.role}</div>
                  <div className="font-display text-2xl mt-1">{a.name}</div>
                </div>
                <div className="absolute right-4 top-4 h-9 w-9 rounded-full bg-background/60 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Instagram className="h-4 w-4" />
                </div>
              </div>
              <ul className="p-5 space-y-1.5 text-sm text-muted-foreground">
                {a.credits.map(c => <li key={c} className="flex gap-2"><span className="text-primary">·</span>{c}</li>)}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Brief & Brainstorm", d: "You send a rough idea. We come back with a concept and a mood, right away.", icon: Sparkles },
    { n: "02", t: "Script & Storyboard", d: "Written, cast and storyboarded in-house. You approve every frame before we roll.", icon: Clapperboard },
    { n: "03", t: "Shoot", d: "One tight crew, wherever your story lives. On-schedule, on-budget.", icon: Film },
    { n: "04", t: "Edit & Deliver", d: "Colour, sound, motion — final cuts optimised for reels and YouTube. Ready to post.", icon: Zap },
  ];
  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-xs uppercase tracking-[0.3em] text-primary">How we work</div>
        <h2 className="font-display mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight lg:whitespace-nowrap">From WhatsApp to wrap in weeks, not quarters.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.n} className="relative">
                <Card className="group relative overflow-hidden border-border/60 bg-card/60 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                  <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-primary/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                  <CardHeader className="relative">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <CardTitle className="pt-3 font-display text-xl font-normal">{s.t}</CardTitle>
                    <CardDescription className="leading-relaxed">{s.d}</CardDescription>
                  </CardHeader>
                </Card>
                {i < steps.length - 1 && (
                  <div className="absolute right-[-14px] top-1/2 z-10 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-primary shadow-card lg:flex">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative py-10 md:py-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-brand p-6 sm:p-10 md:p-14 shadow-glow noise">
          <div className="relative max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-primary-foreground/80">Let's make something</div>
            <h2 className="font-display mt-4 text-3xl sm:text-4xl md:text-5xl leading-tight text-primary-foreground">
              Got a product? We'll build a world around it.
            </h2>
            <p className="mt-4 text-primary-foreground/90 text-base sm:text-lg">
              Tell us about your brand and the reaction you want on screen. Email us or ping us on WhatsApp — we'll take it from there.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:ukulele.originals@gmail.com" className="btn-neu inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition">
                <Mail className="h-4 w-4" /> ukulele.originals@gmail.com
              </a>
              <a href={INSTA} target="_blank" rel="noreferrer" className="btn-neu inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary-foreground/15 transition">
                <Instagram className="h-4 w-4" /> @ukulele.originals
              </a>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 text-primary-foreground/80 text-sm">
              <MapPin className="h-4 w-4" /> Thrissur, Kerala · Available across India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="h-7 w-7 object-contain" />
          <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} Ukulele Originals. Stories that stay with you.</span>
        </div>
        <div className="flex items-center gap-5 text-sm text-muted-foreground">
          <a href={INSTA} target="_blank" rel="noreferrer" className="hover:text-foreground transition inline-flex items-center gap-1.5"><Instagram className="h-4 w-4" /> Instagram</a>
          <a href="mailto:ukulele.originals@gmail.com" className="hover:text-foreground transition">Email</a>
          <a href="#top" className="hover:text-foreground transition">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
