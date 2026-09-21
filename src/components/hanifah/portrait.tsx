import Image from "next/image";
import hanifahPhoto from "../../../public/hanifah-photo.png";

export { hanifahPhoto };

/**
 * Hanifah's portrait, rendered with next/image for automatic sizing.
 *
 * TODO(Hanifah): the current source file public/hanifah-photo.png was
 * enhanced from a very small original photo. When you have a higher
 * resolution photo, simply overwrite public/hanifah-photo.png with it
 * (a square crop works best) and every spot on the site updates.
 */
export function PortraitImage({
  sizes,
  className,
}: {
  sizes: string;
  className?: string;
}) {
  return (
    <Image
      src={hanifahPhoto}
      alt="Hanifah, founder and website designer at Hanifah Studio"
      fill
      sizes={sizes}
      placeholder="blur"
      className={className}
    />
  );
}
