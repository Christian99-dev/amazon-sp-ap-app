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
          <img
            className="object-fill h-20 p-3 m-auto"
            src={`/flags/${item.countryCode}.svg`}
          ></img>

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
