import { Scissors, Sparkles, Heart } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Cut & Style',
    desc: 'Precision cuts with consultation tailored to your face shape and lifestyle.',
  },
  {
    icon: Sparkles,
    title: 'Color Lab',
    desc: 'Balayage, gloss, vivid hues—custom formulas crafted with care.',
  },
  {
    icon: Heart,
    title: 'Care Rituals',
    desc: 'Deep treatments and scalp spa experiences for healthy, radiant hair.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-black to-[#0b0b12] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Signature Services</h2>
          <p className="mt-3 text-white/70 max-w-2xl">Refined techniques meet futuristic flair. Choose from our most-loved experiences.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-tr from-fuchsia-500 to-cyan-400 text-black shadow">
                <Icon size={22} />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
