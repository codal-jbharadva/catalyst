import Image from "next/image";
import { ReactNode } from "react";
import clsx from "clsx";
import "./image-grid.scss";

type imageCard = {
  image?: string;
  imageAltText: string;
  ctaText?: string;
  ctaLink: {
    href: string;
    target?: "_blank" | "_self";
  };
};

interface ImageGridProps {
  showHeaderButton: boolean;
  headerTitle: ReactNode;
  slot: ReactNode;
  backgroundColor?: string;
  imageCards: imageCard[];
}

export const ImageGrid = ({
  showHeaderButton,
  headerTitle,
  slot,
  backgroundColor,
  imageCards,
}: ImageGridProps) => {
  return (
    <section
      className="image-grid"
      style={{ backgroundColor }}
    >
      <div className="image-grid__header">
        <div className="image-grid__title">{headerTitle}</div>
        {showHeaderButton && (
          <div className="image-grid__header-btn image-grid__header-btn--desktop">
            {slot}
          </div>
        )}
      </div>

      <div className="image-grid__cards">
        {imageCards.slice(0, 6).map((imagecard, idx) => (
          <div
            key={idx}
            className={clsx("image-grid__card", !imagecard.image && "border")}
          >
            {imagecard.image && (
              <Image
                src={imagecard.image || ""}
                alt={imagecard.imageAltText}
                fill
                className="image-grid__image"
              />
            )}
          </div>
        ))}
      </div>

      {showHeaderButton && (
        <div className="image-grid__header-btn image-grid__header-btn--mobile">
          {slot}
        </div>
      )}
    </section>
  );
};
