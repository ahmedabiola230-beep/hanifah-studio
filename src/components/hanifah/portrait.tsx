import Image from "next/image";
import hanifahPhoto from "../../../public/hanifah-photo.png";

export { hanifahPhoto };

/**
 * Hanifah's portrait, rendered with next/image for automatic sizing.
 *
 * To update the photo later, replace public/hanifah-photo.png (a
 * 4:5 portrait crop works best) and every spot on the site updates.
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
