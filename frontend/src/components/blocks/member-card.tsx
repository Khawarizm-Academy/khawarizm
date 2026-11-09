import { cn } from "@/lib/utils";

type MemberCardProps = {
  /** Artwork container image — bottom-aligned portrait cut-outs. */
  image: string;
  name: string;
  role: string;
  className?: string;
};

/** Navy-band team card: `navy-surface` portrait well (cut-outs bottom-aligned), name + role under it. Gold borders per the inverse palette. */
export function MemberCard({
  image,
  name,
  role,
  className,
}: MemberCardProps) {
  return (
    <article
      className={cn(
        "relative rounded-md border border-navy-border p-6",
        className,
      )}
    >
      <div className="flex h-64 items-end justify-center overflow-hidden rounded-md bg-navy-surface">
        <img src={image} alt="" className="h-full w-full object-contain object-bottom" />
      </div>
      <h3 className="mt-6 font-heading text-xl font-bold text-white">{name}</h3>
      <p className="mt-1 text-base text-navy-muted">{role}</p>
    </article>
  );
}

export type { MemberCardProps };
