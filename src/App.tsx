import { useState } from 'react';
import { Check, ChevronDown, Mail, Smartphone, Monitor, Clock, Shield } from 'lucide-react';

const CHECKOUT_URL = 'https://pay.hotmart.com/L106208856N';

const EBOOK_COVER = '/ChatGPT_Image_8_de_jun._de_2026,_16_23_17.png';
const AUTHOR_PHOTO = '/ChatGPT_Image_8_de_jun._de_2026,_16_01_59.png';

// Pexels cake photos (reliable public URLs)
const CAKE_PHOTOS = {
  chocolate: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=600',
  banana: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=600',
  apple: 'https://images.pexels.com/photos/5718025/pexels-photo-5718025.jpeg?auto=compress&cs=tinysrgb&w=600',
  coconut: 'https://images.pexels.com/photos/1998635/pexels-photo-1998635.jpeg?auto=compress&cs=tinysrgb&w=600',
  lemon: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=600',
  hero: 'https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=1200',
  problem: 'https://images.pexels.com/photos/3992132/pexels-photo-3992132.jpeg?auto=compress&cs=tinysrgb&w=800',
  finalCta: 'https://images.pexels.com/photos/1587830/pexels-photo-1587830.jpeg?auto=compress&cs=tinysrgb&w=1400',
};


const FAQS = [
  {
    q: '¿Los ingredientes son caros?',
    a: 'No. Todas las recetas fueron diseñadas con ingredientes simples que puedes encontrar en cualquier supermercado de tu ciudad. No necesitas productos importados ni ingredientes difíciles de conseguir.',
  },
  {
    q: '¿Las tortas realmente quedan deliciosas?',
    a: 'Sí. El objetivo de estas recetas es demostrarte que se puede disfrutar algo dulce y rico sin renunciar al sabor. Más de 500 personas ya lo comprobaron. Muchas dicen que sus familias ni notaron la diferencia.',
  },
  {
    q: '¿Necesito experiencia en la cocina?',
    a: 'No necesitas ninguna experiencia previa. Cada receta incluye fotografías reales y un paso a paso muy detallado, pensado para que cualquier persona pueda prepararlas desde la primera vez.',
  },
  {
    q: '¿Cuándo recibiré el ebook?',
    a: 'De forma inmediata. En cuanto completes tu compra recibirás un correo con el acceso a tu libro digital. Puedes verlo desde tu celular, tablet o computadora al instante.',
  },
];

function CtaButton({ label = 'QUIERO MI COPIA', size = 'normal', className = '' }: { label?: string; size?: 'normal' | 'lg'; className?: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      className={`btn-primary${size === 'lg' ? ' btn-primary-lg' : ''} ${className}`}
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
}

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-secondary rounded-2xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-warm transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-sans font-600 text-ink text-[0.95rem] md:text-base pr-4">{q}</span>
        <ChevronDown
          size={20}
          className={`text-primary flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`accordion-content ${open ? 'open' : ''}`}>
        <div className="px-6 pb-5 pt-1 bg-white">
          <p className="text-ink-light text-sm md:text-base leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}


export default function App() {
  return (
    <div className="bg-cream min-h-screen">

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blush via-cream to-secondary/40 pt-12 pb-16 md:pt-20 md:pb-24">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary rounded-full blur-2xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-5 md:px-8">
          {/* Brand */}
          <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in">
            <span className="text-primary-light text-xs md:text-sm font-semibold uppercase tracking-widest border border-primary-light/40 rounded-full px-4 py-1.5">
              Cocina Ligera con Valentina
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            {/* Left — copy */}
            <div className="order-2 md:order-1 text-center md:text-left">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-tight mb-5 animate-fade-in-up">
                Recetas de Tortas para{' '}
                <em className="text-primary not-italic">Disfrutar Sin Culpa</em>
              </h1>
              <p className="text-ink-light text-lg md:text-xl leading-relaxed mb-7 animate-fade-in-up delay-200">
                Ahora toda la familia puede disfrutar del postre sin sentirse pesada después.
              </p>

              {/* Trust icons */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8 animate-fade-in-up delay-300">
                {['Más ligeras', 'Deliciosas', 'Ingredientes simples'].map((item) => (
                  <span key={item} className="flex items-center gap-1.5 bg-white/80 border border-secondary rounded-full px-4 py-1.5 text-sm font-medium text-ink shadow-card">
                    <Check size={14} className="text-success" />
                    {item}
                  </span>
                ))}
              </div>

              {/* Author row */}
              <div className="flex items-center gap-3 justify-center md:justify-start mb-8 animate-fade-in-up delay-400">
                <img
                  src={AUTHOR_PHOTO}
                  alt="Valentina Rojas"
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary-light shadow-soft"
                />
                <div className="text-left">
                  <p className="text-ink font-semibold text-sm">Valentina Rojas</p>
                  <p className="text-ink-light text-xs">Autora & Creadora de Recetas</p>
                </div>
              </div>

              <div className="animate-fade-in-up delay-500">
                <CtaButton size="lg" className="w-full md:w-auto" />
                <p className="text-ink-light text-xs mt-3">Acceso inmediato · 100% digital · Garantía 7 días</p>
              </div>
            </div>

            {/* Right — ebook mockup */}
            <div className="order-1 md:order-2 flex justify-center animate-float">
              <div className="relative">
                <img
                  src={EBOOK_COVER}
                  alt="Tortas para Sentirte Menos Inflamada – Ebook"
                  className="w-72 md:w-80 lg:w-96 rounded-2xl shadow-badge object-contain"
                />
                {/* floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-success text-white text-xs font-bold rounded-full px-4 py-2 shadow-soft">
                  +500 clientas felices
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM + MECHANISM ────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <div className="inline-block bg-blush text-primary text-xs font-semibold uppercase tracking-widest rounded-full px-4 py-1.5 mb-5">
                El secreto que nadie te dijo
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight mb-6">
                El problema nunca fue <em className="text-primary not-italic">la torta.</em>
              </h2>
              <div className="space-y-4 text-ink-light text-base md:text-lg leading-relaxed">
                <p>
                  Durante años muchas mujeres intentaron <strong className="text-ink">eliminar el postre</strong> para sentirse mejor.
                </p>
                <p>
                  Pero descubrieron algo diferente.
                </p>
                <p>
                  Al cambiar ciertos ingredientes y la forma de preparar sus recetas favoritas, pudieron seguir disfrutando algo dulce sin esa <strong className="text-ink">sensación de pesadez</strong> después.
                </p>
                <p>
                  Por eso estas recetas fueron creadas para ayudarte a disfrutar tu merienda de una forma más ligera.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={CAKE_PHOTOS.problem}
                alt="Torta casera deliciosa"
                className="rounded-3xl shadow-card-hover w-full object-cover h-72 md:h-96"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT PRESENTATION ───────────────────────────────── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <div className="inline-block bg-blush text-primary text-xs font-semibold uppercase tracking-widest rounded-full px-4 py-1.5 mb-4">
            El libro de recetas
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight mb-3">
            Te Presento el Libro de Recetas
          </h2>
          <p className="font-serif text-xl md:text-2xl text-primary italic mb-8">
            Tortas para Sentirte Menos Inflamada
          </p>
          <p className="text-ink-light text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Recibirás <strong className="text-ink">10 recetas exclusivas</strong> con fotografías reales y un paso a paso fácil de seguir.
          </p>

          {/* Feature grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {[
              { icon: '🌿', text: 'Más ligeras' },
              { icon: '🚫', text: 'Sin conservantes' },
              { icon: '🍬', text: 'Con o sin azúcar' },
              { icon: '🥛', text: 'Opciones sin lácteos' },
              { icon: '🛒', text: 'Ingredientes simples' },
              { icon: '👩‍🍳', text: 'Fáciles de preparar' },
            ].map((f) => (
              <div key={f.text} className="recipe-card bg-white rounded-2xl p-4 shadow-card flex items-center gap-3 text-left">
                <span className="text-2xl">{f.icon}</span>
                <span className="text-ink font-medium text-sm md:text-base">{f.text}</span>
              </div>
            ))}
          </div>

          <CtaButton size="lg" />
        </div>
      </section>

      {/* ── WHAT'S INSIDE ──────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blush text-primary text-xs font-semibold uppercase tracking-widest rounded-full px-4 py-1.5 mb-4">
              Recetas incluidas
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
              Lo que encontrarás adentro
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            {[
              { emoji: '🍫', name: 'Torta de Chocolate', img: CAKE_PHOTOS.chocolate },
              { emoji: '🍌', name: 'Torta de Banana', img: CAKE_PHOTOS.banana },
              { emoji: '🍎', name: 'Torta de Manzana', img: CAKE_PHOTOS.apple },
              { emoji: '🥥', name: 'Torta de Coco', img: CAKE_PHOTOS.coconut },
              { emoji: '🍋', name: 'Torta de Limón', img: CAKE_PHOTOS.lemon },
            ].map((r) => (
              <div key={r.name} className="recipe-card bg-white rounded-2xl overflow-hidden shadow-card border border-secondary/50 group">
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={r.img}
                    alt={r.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute bottom-2 left-2 text-2xl">{r.emoji}</span>
                </div>
                <div className="p-3">
                  <p className="text-ink font-semibold text-sm text-center">{r.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-warm rounded-3xl p-6 text-center border border-secondary">
            <p className="text-primary font-serif text-xl font-semibold mb-1">Y más recetas sorpresa...</p>
            <p className="text-ink-light text-sm">Cada receta incluye foto real, ingredientes y paso a paso detallado.</p>
          </div>
        </div>
      </section>

      {/* ── AUTHOR ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blush via-cream to-secondary/30">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative">
              <img
                src={AUTHOR_PHOTO}
                alt="Valentina Rojas en su cocina"
                className="rounded-3xl shadow-card-hover w-full object-cover object-top h-80 md:h-[460px]"
              />
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-6 py-3 shadow-soft text-center min-w-[180px]">
                <p className="font-serif text-primary font-semibold text-base">Valentina Rojas</p>
                <p className="text-ink-light text-xs">Cocina Ligera con Valentina</p>
              </div>
            </div>

            <div className="mt-8 md:mt-0">
              <div className="inline-block bg-blush text-primary text-xs font-semibold uppercase tracking-widest rounded-full px-4 py-1.5 mb-5">
                La autora
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight mb-6">
                Conoce a Valentina Rojas
              </h2>
              <div className="space-y-4 text-ink-light text-base md:text-lg leading-relaxed">
                <p>
                  Siempre amé preparar postres para mi familia.
                </p>
                <p>
                  Pero también sabía cómo me sentía después de muchas recetas tradicionales: <strong className="text-ink">pesada, inflamada y sin energía.</strong>
                </p>
                <p>
                  Por eso comencé a probar nuevas combinaciones de ingredientes hasta crear versiones más ligeras sin renunciar al sabor.
                </p>
                <p>
                  Hoy esas mismas recetas están reunidas en este libro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ───────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-5 md:px-8">
          <div className="text-center mb-10">
            <div className="inline-block bg-blush text-primary text-xs font-semibold uppercase tracking-widest rounded-full px-4 py-1.5 mb-4">
              Lo que dicen nuestras clientas
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight mb-3">
              Más de 500 mujeres ya lo disfrutan
            </h2>
          </div>

          <img
            src="/ChatGPT_Image_8_de_jun._de_2026,_17_30_34.png"
            alt="Testimonios reales de clientas"
            className="w-full rounded-2xl shadow-card"
          />

          <div className="text-center mt-10">
            <CtaButton size="lg" />
          </div>
        </div>
      </section>

      {/* ── HOW YOU RECEIVE IT ─────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <div className="inline-block bg-blush text-primary text-xs font-semibold uppercase tracking-widest rounded-full px-4 py-1.5 mb-4">
            Entrega
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight mb-12">
            ¿Cómo recibiré mi libro?
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: <Mail size={28} className="text-primary" />, title: 'Acceso inmediato por correo', desc: 'Llega directo a tu email al instante.' },
              { icon: <Smartphone size={28} className="text-primary" />, title: 'Acceso desde tu celular', desc: 'Léelo cómodamente desde tu teléfono.' },
              { icon: <Monitor size={28} className="text-primary" />, title: 'Compatible con cualquier dispositivo', desc: 'Tablet, laptop o computadora.' },
              { icon: <Clock size={28} className="text-primary" />, title: 'Entrega automática en minutos', desc: 'Sin esperas, sin complicaciones.' },
            ].map((card) => (
              <div key={card.title} className="recipe-card bg-white rounded-2xl p-5 shadow-card flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 bg-blush rounded-2xl flex items-center justify-center">
                  {card.icon}
                </div>
                <p className="text-ink font-semibold text-sm leading-snug">{card.title}</p>
                <p className="text-ink-light text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-5 md:px-8">
          <div className="text-center mb-10">
            <div className="inline-block bg-blush text-primary text-xs font-semibold uppercase tracking-widest rounded-full px-4 py-1.5 mb-4">
              Preguntas frecuentes
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
              Resolvemos tus dudas
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <AccordionItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEE ──────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-badge p-10 md:p-14 flex flex-col md:flex-row items-center gap-8 border border-success/20">
            <div className="flex-shrink-0">
              <div className="guarantee-badge">
                <Shield size={32} className="text-success mb-2" />
                <p className="font-serif text-success font-bold text-xl leading-none">7</p>
                <p className="text-success text-xs font-semibold">días</p>
                <p className="text-success text-[10px] font-semibold uppercase tracking-wider">garantía</p>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-serif text-2xl md:text-3xl text-ink mb-3">
                Pruébalo Sin Riesgo
              </h2>
              <p className="text-ink-light text-base md:text-lg leading-relaxed">
                Si por cualquier motivo no quedas satisfecha con las recetas, puedes solicitar el reembolso dentro de los primeros <strong className="text-ink">7 días</strong>. Sin preguntas, sin complicaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────── */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={CAKE_PHOTOS.finalCta}
            alt="Torta casera con café"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/65" />
        </div>
        <div className="relative max-w-2xl mx-auto px-5 md:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-4">
            Tortas Suaves, Deliciosas y Más Ligeras
          </h2>
          <p className="text-white/85 text-lg md:text-xl mb-10 leading-relaxed">
            Porque cuidarte no significa renunciar al postre.
          </p>
          <CtaButton size="lg" className="shadow-badge" />
          <p className="text-white/60 text-xs mt-4">Acceso inmediato · Garantía de 7 días</p>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer className="bg-ink py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <p className="font-serif text-white/90 text-lg mb-1">Cocina Ligera con Valentina</p>
          <p className="text-white/50 text-xs mb-6">© {new Date().getFullYear()} Valentina Rojas. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center justify-center gap-5 mb-6">
            <a href="#" className="text-white/50 hover:text-white/80 text-xs transition-colors">Política de Privacidad</a>
            <span className="text-white/20">·</span>
            <a href="#" className="text-white/50 hover:text-white/80 text-xs transition-colors">Términos y Condiciones</a>
            <span className="text-white/20">·</span>
            <a href="mailto:hola@cocinaligera.com" className="text-white/50 hover:text-white/80 text-xs transition-colors">Contacto</a>
          </div>
          <p className="text-white/30 text-xs max-w-xl mx-auto leading-relaxed">
            Los resultados pueden variar según cada persona. Este producto es un libro digital con recetas. No es un sustituto de asesoramiento médico o nutricional profesional.
          </p>
        </div>
      </footer>

      {/* ── STICKY CTA (mobile) ────────────────────────────────── */}
      <div className="sticky-cta md:hidden">
        <div className="flex-1 min-w-0">
          <p className="text-ink text-xs font-semibold leading-tight truncate">Tortas para Sentirte Menos Inflamada</p>
          <p className="text-ink-light text-[10px]">Acceso inmediato · Garantía 7 días</p>
        </div>
        <a
          href={CHECKOUT_URL}
          className="btn-primary text-xs px-5 py-3 flex-shrink-0"
          rel="noopener noreferrer"
        >
          QUIERO MI COPIA
        </a>
      </div>

      {/* Bottom padding for mobile sticky bar */}
      <div className="h-20 md:hidden" />
    </div>
  );
}
