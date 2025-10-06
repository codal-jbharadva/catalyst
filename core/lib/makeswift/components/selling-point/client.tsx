
interface SellingCard {
  icon: string;
  altText: string;
  title: any;
  description: any;
}

interface SellingPointProps {
  sellingGroup?: SellingCard[];
}

export function SellingPoint({ sellingGroup }:SellingPointProps){
    return(
        <div>
      {sellingGroup?.map((card, index) => (
        <div key={index}>
          <img src={card.icon} alt={card.altText} />
          <div>{card.title}</div>
          <div>{card.description}</div>
        </div>
      ))}
    </div>
    )
}