import { CountryProduct } from "../../../context/pricingContext";

const PricingTable = ({
  listingOffers,
}: {
  listingOffers: CountryProduct[];
}) => {
  return (
    <div className="flex w-full h-full">
      {listingOffers.map((item, index) => (
        <div key={index} className="flex-1 h-full text-center even:bg-slate-100">
          <img
            className="object-fill h-20 p-3 m-auto"
            src={`/flags/${item.countryCode}.svg`}
          ></img>

          {item.prices.map((price, index) => (
            <div key={index} className="py-4 text-xs">
              {price} <span className="text-[10px]"> {item.CurrencyCode}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PricingTable;
