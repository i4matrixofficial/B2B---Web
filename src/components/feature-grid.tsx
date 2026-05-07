import { type ReactNode } from 'react';
import { Reveal } from '@/components/reveal';

export type FeatureItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

type FeatureGridProps = {
  items: FeatureItem[];
  columnsClassName?: string;
  cardClassName?: string;
  delayStep?: number;
};

export function FeatureGrid({
  items,
  columnsClassName = 'grid gap-5 md:grid-cols-2 xl:grid-cols-3',
  cardClassName = 'rounded-3xl border border-slate-200 bg-white p-6 shadow-soft h-full flex flex-col',
  delayStep = 90
}: FeatureGridProps) {
  return (
    <div className={columnsClassName}>
      {items.map((item, index) => (
        <Reveal key={item.title} delay={index * delayStep}>
          <article className={cardClassName}>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-soft">
              {item.icon}
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-ink">{item.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{item.description}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
