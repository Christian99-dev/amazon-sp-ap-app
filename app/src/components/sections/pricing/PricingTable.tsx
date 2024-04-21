import { useEffect, useRef, useState } from "react";
import { useCredentialsContext } from "../../../context/credentlalsContext";
import getFlag from "../../../lib/getFlag";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

const PricingTable = ({
  currentProducts,
}: {
  currentProducts: ProductsInMarketplace[];
}) => {
  const { credentialsLabel } = useCredentialsContext();

  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 bottom-0 left-0 right-0 grid grid-cols-5 grid-rows-3">
        {currentProducts.map((item, index) => (
          <div
            key={index}
            className={`px-1 even:bg-slate-100 flex flex-col`}
            // style={{ height: columnHeight }}
          >
            {/** Flagge */}
            <img
              className="object-fill h-12 p-3 m-auto"
              src={getFlag(item.countryCode)}
            ></img>

            {/** Tabellen-Kopf */}
            <TableHead
              items={["LAND", "LIST", "SHIP", "CURR", "FROM", "RATE"]}
            />

            {/** Preise Rows */}
            <div className="flex-1 overflow-y-scroll">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
