import { CountryProduct } from "../../../context/pricingContext";

const PricingTable = ({
  listingOffers,
}: {
  listingOffers: CountryProduct[];
}) => {
  return (
    <table className="flex w-full h-full">
      {listingOffers.map((item) => (
        <div className="flex-1 h-full text-center even:bg-slate-100">
          <h1 className="py-3 border-b-2 border-b-slate-400">
            {item.countryCode}
          </h1>
          {item.prices.map((price) => (
            <div className="py-4 text-xs">
              {price} <span className="text-[10px]"> {item.CurrencyCode}</span>
            </div>
          ))}
        </div>
      ))}
    </table>
  );
};

export default PricingTable;
