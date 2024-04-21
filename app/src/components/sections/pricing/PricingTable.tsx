import { useCredentialsContext } from "../../../context/credentlalsContext";
import { useHorizontalScroll } from "../../../hooks/useHorizontalScroll";
import getFlag from "../../../lib/getFlag";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

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
          <TableHead items={["LAND", "LIST", "SHIP", "CURR", "FROM", "RATE"]} />

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
              <TableRow
                key={index}
                items={[
                  landedPrice,
                  listingPrice,
                  shippingPrice,
                  currencyCode,
                  shipsFrom,
                  rating,
                ]}
                highlight={
                  sellerID === credentialsLabel.seller_id_eu ||
                  sellerID === credentialsLabel.seller_id_na
                }
              />
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default PricingTable;
