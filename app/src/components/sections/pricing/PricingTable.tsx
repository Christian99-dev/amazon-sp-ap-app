import { useCredentialsContext } from "../../../context/credentlalsContext";
import { ProductsInMarketplace } from "../../../context/pricingContext";
import { useHorizontalScroll } from "../../../hooks/useHorizontalScroll";
import getFlag from "../../../lib/getFlag";
import getRatingColor from "../../../lib/getRatingColor";
const PricingTable = ({
  currentProducts,
}: {
  currentProducts: ProductsInMarketplace[];
}) => {
  const scrollRef = useHorizontalScroll();
  const { credentialsLabel } = useCredentialsContext();

  return (
    <div
      ref={scrollRef}
      className="flex w-full h-full overflow-x-scroll overflow-y-hidden"
    >
      {currentProducts.map((item, index) => (
        <div
          key={index}
          className="flex-1 h-full text-center even:bg-slate-100 min-w-[250px] max-w-[425px] px-1"
        >
          {/** Flagge */}
          <img
            className="object-fill h-20 p-3 m-auto"
            src={getFlag(item.countryCode)}
          ></img>

          {/** Tabellen-Kopf */}
          <div key={index} className="py-1 text-[12px] flex">
            <div className="w-1/6 text-left text-[12px] font-bold text-violet-800">
              LAND
            </div>
            <div className="w-1/6 text-left text-[12px] font-bold text-violet-800">
              LIST
            </div>
            <div className="w-1/6 text-left text-[12px] font-bold text-violet-800">
              SHIP
            </div>
            <div className="w-1/6 text-left text-[12px] font-bold text-violet-800">
              CURR
            </div>
            <div className="w-1/6 text-left text-[12px] font-bold text-violet-800">
              FROM
            </div>
            <div className="w-1/6 text-left text-[12px] font-bold text-violet-800">
              RATE
            </div>
          </div>

          {/** Preise */}
          {item.products.map(
            (
              {
                listingPrice,
                landedPrice,
                shippingPrice,
                currencyCode,
                rating,
                shipsFrom,
                sellerID,
              },
              index
            ) => (
              <div
                key={index}
                className={`py-1 text-[12px] flex ${
                  sellerID === credentialsLabel.seller_id && "bg-green-200"
                }`}
              >
                <div className="w-1/6 text-left text-[11px]">{landedPrice}</div>
                <div className="w-1/6 text-left text-[11px]">
                  {listingPrice}
                </div>
                <div className="w-1/6 text-left text-[11px]">
                  {shippingPrice}
                </div>
                <div className="w-1/6 text-left text-[11px]">
                  {currencyCode}
                </div>
                <div className="w-1/6 text-left text-[11px]">{shipsFrom}</div>
                <div
                  className={`w-1/6 text-center text-[12px] font-bold ${getRatingColor(
                    rating
                  )}`}
                >
                  {rating}
                </div>
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default PricingTable;
