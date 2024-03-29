import { CountryProduct } from "../../../context/pricingContext";

const PricingTable = ({
  listingOffers,
}: {
  listingOffers: CountryProduct[];
}) => {
  return (
    <table className="flex w-full h-full">
      {listingOffers.map((item) => (
        <div className="w-20 h-full p-2 text-center bg-slate-400">
          <h1>{item.countryCode}</h1>
          {item.prices.map((price) => (
            <div>{price}</div>
          ))}
        </div>
      ))}
    </table>
  );
};

export default PricingTable;
