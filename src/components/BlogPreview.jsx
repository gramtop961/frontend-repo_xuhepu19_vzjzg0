import { useEffect, useState } from 'react';

export default function BlogPreview() {
  const [posts] = useState([
    {
      id: 1,
      title: 'Cyber Glam: Trending Hair Colors of the Season',
      excerpt: 'Explore iridescent hues, oil-slick blacks, and soft neon pastels taking over the scene.',
      tag: 'Trends',
    },
    {
      id: 2,
      title: 'Scalp Health 101: Why Treatments Matter',
      excerpt: 'A healthy scalp equals healthy hair. Here’s how we approach scalp care rituals.',
      tag: 'Care',
    },
    {
      id: 3,
      title: 'Behind the Scenes: Our Color Lab Workflow',
      excerpt: 'From consultation to formulation—how we craft shades that suit you perfectly.',
      tag: 'Inside',
    },
  ]);

  return (
    <section id="blog" className="py-20 bg-[#0b0b12] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">From the Journal</h2>
          <p className="mt-3 text-white/70 max-w-2xl">Insights, rituals, and stories from our team of stylists and color specialists.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.id} className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="mb-3 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">{p.tag}</div>
              <h3 className="text-xl font-semibold group-hover:text-white">{p.title}</h3>
              <p className="mt-2 text-white/70">{p.excerpt}</p>
              <button className="mt-4 text-sm text-cyan-300 hover:text-cyan-200">Read more →</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
