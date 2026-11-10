import { Play } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type VideoTileProps = ComponentProps<"div"> & {
  src: string;
  /** Accessible label — only applies to the interactive toggle. */
  label?: string;
  /** Duration chip in the bottom corner. */
  duration?: string;
  /** `lg` = the 96px circle of the story reel, `md` = the 80px one of the project page. */
  playSize?: "lg" | "md";
  /** Provide a handler to render the poster as an `aria-pressed` toggle button (about story); omit it for a framed still (project). */
  onToggle?: () => void;
  /** Current toggle state when `onToggle` is set. */
  pressed?: boolean;
  /** Slightly mute the poster (`bg-navy` plates like the project hero tile). */
  dim?: boolean;
};

function TileArt({
  src,
  play,
  glyph,
  duration,
  dim,
}: {
  src: string;
  play: string;
  glyph: string;
  duration?: string;
  dim?: boolean;
}) {
  return (
    <>
      <img
        src={src}
        alt=""
        className={cn(
          "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
          dim && "opacity-80",
        )}
      />
      <span aria-hidden className="absolute inset-0 bg-navy/30" />
      <span
        aria-hidden
        className={cn(
          "absolute inset-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white text-white transition-transform group-hover:scale-110",
          play,
        )}
      >
        <Play className={cn("ml-1 fill-white", glyph)} />
      </span>
      {duration && (
        <span className="absolute bottom-4 right-4 rounded-md bg-navy/60 px-3 py-1 font-sans text-sm text-white">
          {duration}
        </span>
      )}
    </>
  );
}

/** Poster tile with the centered play circle + duration chip — the shared video affordance (about story reel, project hero). Interactive mode renders a real toggle `button`; otherwise it is a plain visual plate. */
function VideoTile({
  src,
  label,
  duration,
  playSize = "lg",
  onToggle,
  pressed,
  dim,
  className,
  ...props
}: VideoTileProps) {
  const plate = cn(
    "group relative block w-full overflow-hidden rounded-md",
    className,
  );
  const art = (
    <TileArt
      src={src}
      play={playSize === "lg" ? "size-24" : "size-20"}
      glyph={playSize === "lg" ? "size-8" : "size-7"}
      duration={duration}
      dim={dim}
    />
  );

  if (onToggle) {
    return (
      <button
        type="button"
        aria-label={label}
        aria-pressed={pressed}
        onClick={onToggle}
        className={cn(plate, "cursor-pointer")}
        // the interactive branch *is* a button — callers only pass className (merged into the plate above);
        // bridge via `unknown`: div-typed `ref`/handlers can't cast straight to the button variants
        {...(props as unknown as ComponentProps<"button">)}
      >
        {art}
      </button>
    );
  }

  return (
    <div className={plate} {...props}>
      {art}
    </div>
  );
}

export { VideoTile, type VideoTileProps };
