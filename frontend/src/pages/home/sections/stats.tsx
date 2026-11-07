import { Container } from "@/components/layout";
import { STATS } from "@/constants/home";

function Stats() {
  return (
    <section aria-label="أرقامنا" className="bg-background pb-16 md:pb-24">
      <Container>
        <dl className="grid divide-y divide-border border border-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {STATS.map((stat) => (
            /* dt before dd for valid markup; flex-col-reverse shows the
               big number first, label under it. */
            <div
              key={stat.label}
              className="flex flex-col-reverse gap-2 px-8 py-8 md:py-10"
            >
              <dt className="text-muted">{stat.label}</dt>
              <dd
                dir="ltr"
                className="text-right font-display text-5xl font-extrabold text-foreground"
              >
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export { Stats };
