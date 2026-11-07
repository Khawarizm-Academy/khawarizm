import { Container } from "@/components/layout";
import { STATS } from "@/constants/home";

/** Three flush stat cards (176px tall in the Figma grid), separated by
 * hairline gold borders. */
function Stats() {
  return (
    <section aria-label="أرقامنا" className="bg-background pb-16 md:pb-24">
      <Container>
        <dl className="grid overflow-hidden rounded-md border border-border divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {STATS.map((stat) => (
            /* dt before dd for valid markup; flex-col-reverse shows the
               big number first, label under it. */
            <div
              key={stat.label}
              className="flex flex-col-reverse gap-1.5 px-8 py-10 md:px-10 md:py-11"
            >
              <dt className="text-xl leading-9 text-foreground">
                {stat.label}
              </dt>
              <dd
                dir="ltr"
                className="text-right font-display text-[36px] font-extrabold leading-[50px] text-foreground md:text-[40px] md:leading-[56px]"
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
