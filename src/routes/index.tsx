import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import logo from "@/assets/logo-amarf.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Société AMARF ET FILS — Partenaire officiel SOBEBRA au Bénin" },
      { name: "description", content: "Boissons fraîches SOBEBRA en gros et au détail : bières, sucreries et eaux. Livraison rapide pour bars, maquis, événements et particuliers. Aita, après l'Université de Sakété." },
      { property: "og:title", content: "Société AMARF ET FILS — Partenaire officiel SOBEBRA" },
      { property: "og:description", content: "Vos boissons SOBEBRA toujours fraîches, au meilleur prix, livrées chez vous." },
    ],
  }),
  component: Index,
});

const PHONE = "+229 01 51 74 95 05";
const WA = "https://wa.me/2290151749505";

const products = [
  { name: "La Béninoise", cat: "Bière", note: "La fierté nationale" },
  { name: "Castel Beer", cat: "Bière", note: "Douce et rafraîchissante" },
  { name: "Flag", cat: "Bière", note: "Le goût puissant" },
  { name: "Coca-Cola & Fanta", cat: "Sucreries", note: "Pour toute la famille" },
  { name: "Possotomè", cat: "Eau minérale", note: "L'eau pure du Bénin" },
  { name: "Et bien plus", cat: "Gamme complète", note: "Demandez-nous" },
];

const services = [
  { t: "Vente en gros", d: "Prix dépôt pour bars, maquis, boutiques et revendeurs." },
  { t: "Livraison rapide", d: "Nous livrons vos casiers où vous voulez, à l'heure." },
  { t: "Événements", d: "Mariages, baptêmes, fêtes : quantités et conseils adaptés." },
  { t: "Toujours frais", d: "Produits authentiques, directement de SOBEBRA." },
];

function Index() {
  return (
    <main className="overflow-x-hidden">
      {/* Nav */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <span className="flex items-center gap-3">
            <img src={logo} alt="Logo Société AMARF et Fils" className="h-12 w-12 rounded-full shadow-glow" width={1024} height={1024} loading="lazy" />
            <span className="font-display text-2xl font-black text-ink-foreground">
              AMARF <span className="text-primary">& FILS</span>
            </span>
          </span>
          <nav className="hidden gap-8 text-sm font-medium text-ink-foreground/85 md:flex">
            <a href="#produits" className="hover:text-primary">Produits</a>
            <a href="#services" className="hover:text-primary">Services</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
          <a href={WA} className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-glow transition hover:scale-105">
            Commander
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-end">
        <img src={hero} alt="Casiers de boissons fraîches au dépôt" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-grad" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-40">
          <p className="animate-rise mb-6 inline-block rounded-full border border-primary/60 bg-ink/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary backdrop-blur">
            Partenaire officiel SOBEBRA
          </p>
          <h1 className="animate-rise max-w-4xl text-5xl font-black leading-[0.95] text-ink-foreground md:text-8xl" style={{ animationDelay: ".1s" }}>
            La fraîcheur du Bénin, <em className="bg-amber-grad bg-clip-text text-transparent">livrée chez vous.</em>
          </h1>
          <p className="animate-rise mt-8 max-w-xl text-lg text-ink-foreground/80" style={{ animationDelay: ".2s" }}>
            Bières, sucreries et eaux minérales en gros et au détail. Des prix justes, des produits authentiques, un service qui ne vous lâche jamais.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: ".3s" }}>
            <a href={WA} className="rounded-full bg-amber-grad px-8 py-4 font-bold text-primary-foreground shadow-glow transition hover:scale-105">
              Commander sur WhatsApp
            </a>
            <a href="#produits" className="rounded-full border border-ink-foreground/40 px-8 py-4 font-bold text-ink-foreground backdrop-blur transition hover:bg-ink-foreground/10">
              Voir nos produits
            </a>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden bg-primary py-5">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap font-display text-2xl font-bold text-primary-foreground">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["La Béninoise", "★", "Castel", "★", "Flag", "★", "Coca-Cola", "★", "Fanta", "★", "Possotomè", "★"].map((w, i) => <span key={`${k}-${i}`}>{w}</span>),
          )}
        </div>
      </div>

      {/* Stats */}
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-24 md:grid-cols-3">
        {[["100%", "Produits authentiques SOBEBRA"], ["7j/7", "Ouvert pour vous servir"], ["24h", "Livraison de vos commandes"]].map(([n, l]) => (
          <div key={l} className="border-l-4 border-primary pl-6">
            <div className="font-display text-6xl font-black text-secondary">{n}</div>
            <div className="mt-2 text-muted-foreground">{l}</div>
          </div>
        ))}
      </section>

      {/* Produits */}
      <section id="produits" className="bg-ink py-28 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Notre gamme</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-black md:text-6xl">Toutes vos boissons préférées, au même endroit.</h2>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <div key={p.name} className="group relative overflow-hidden rounded-2xl border border-ink-foreground/10 bg-ink-foreground/5 p-8 transition duration-500 hover:-translate-y-2 hover:border-primary">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-grad opacity-20 blur-2xl transition group-hover:opacity-60" />
                <span className="font-display text-5xl font-black text-primary/30">0{i + 1}</span>
                <p className="mt-6 text-xs font-bold uppercase tracking-widest text-primary">{p.cat}</p>
                <h3 className="mt-2 text-3xl font-bold">{p.name}</h3>
                <p className="mt-2 text-ink-foreground/65">{p.note}</p>
                <a
                  href={`https://wa.me/2290151749505?text=${encodeURIComponent(`Bonjour, je veux commander : ${p.name}`)}`}
                  className="mt-5 inline-block rounded-full border border-primary/50 px-5 py-2 text-sm font-bold text-primary transition hover:bg-primary hover:text-primary-foreground"
                >
                  Commander →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Pourquoi nous choisir</p>
            <h2 className="mt-4 text-4xl font-black text-secondary md:text-6xl">Un partenaire de confiance, près de chez vous.</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Grâce à notre partenariat avec SOBEBRA, nous vous garantissons des boissons authentiques, bien stockées et disponibles en permanence.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((s) => (
              <div key={s.t} className="rounded-2xl bg-card p-7 shadow-sm ring-1 ring-border transition hover:shadow-glow">
                <div className="mb-5 h-2 w-12 rounded-full bg-amber-grad" />
                <h3 className="text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment commander */}
      <section id="commander" className="bg-secondary py-24 text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Commander en 3 étapes</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-black md:text-5xl">Simple, rapide, et livré chez vous.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { n: "1", t: "Vous nous écrivez", d: "Un message WhatsApp ou un appel, et on vous répond tout de suite." },
              { n: "2", t: "On confirme ensemble", d: "Les quantités, le prix dépôt et l'heure de livraison, sans surprise." },
              { n: "3", t: "On livre à l'heure", d: "Vos casiers arrivent frais, où que vous soyez, 7 jours sur 7." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl bg-secondary-foreground/5 p-8 ring-1 ring-secondary-foreground/15">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-grad font-display text-2xl font-black text-primary-foreground">{s.n}</div>
                <h3 className="mt-5 text-2xl font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-secondary-foreground/80">{s.d}</p>
              </div>
            ))}
          </div>
          <a href={WA} className="mt-10 inline-block rounded-full bg-amber-grad px-8 py-4 font-bold text-primary-foreground shadow-glow transition hover:scale-105">
            Commander maintenant sur WhatsApp
          </a>
        </div>
      </section>

      {/* Galerie — photos à venir */}
      <section id="galerie" className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Notre dépôt</p>
        <h2 className="mt-4 text-4xl font-black text-secondary md:text-5xl">Un dépôt bien garni, bientôt en photos.</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Le dépôt et ses casiers", "L'équipe au travail", "La livraison chez un client"].map((label) => (
            <div key={label} className="flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-primary/40 bg-primary/5 text-center">
              <span className="text-4xl" aria-hidden>📷</span>
              <p className="px-6 text-sm font-semibold text-muted-foreground">{label}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-primary/70">Photo à venir</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-amber-grad p-10 md:p-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-4xl font-black text-primary-foreground md:text-6xl">Une commande ? Appelez-nous.</h2>
              <p className="mt-4 text-lg text-primary-foreground/80">Réponse rapide, livraison dans toute la ville.</p>
            </div>
            <div className="space-y-4 rounded-2xl bg-ink p-8 text-ink-foreground">
              <p><span className="text-primary">Téléphone / WhatsApp :</span> {PHONE}</p>
              <p><span className="text-primary">Adresse :</span> Aita, après l'Université de Sakété, Bénin</p>
              <p><span className="text-primary">Horaires :</span> Lun – Dim, 7h – 22h</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <a href={WA} className="rounded-full bg-primary py-4 text-center font-bold text-primary-foreground transition hover:scale-[1.02]">
                  WhatsApp
                </a>
                <a href={`tel:+2290151749505`} className="rounded-full border border-primary py-4 text-center font-bold text-primary transition hover:scale-[1.02]">
                  Appeler
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Société AMARF ET FILS · Partenaire SOBEBRA · L'abus d'alcool est dangereux pour la santé.
      </footer>

      {/* Bouton WhatsApp flottant */}
      <a
        href={WA}
        aria-label="Commander sur WhatsApp"
        className="animate-pulse-ring fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-amber-grad text-primary-foreground shadow-glow transition hover:scale-110"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </main>
  );
}
