import React from "react"
import Image from "./image"

export default function InfoSection() {
  return (
    <>
      <div className="col-12 pb-4">
        <h2 className="text-center">Food</h2>
      </div>
      <div className="row">
        <div className="col-md-6 m-auto">
          <Image alt="first image" filename="1 (2).jpg" />
        </div>
        <div className="col-md-6 text-justify">
          <p>
            We are having 3000 or more food products and are still counting. We
            deal with all top brands and distributors. We always ensure the
            quality, quantity and the availability of products{" "}
          </p>
          <p>
            Canned &amp; Preserved, Grains &amp; Cereals, Specialty Products,
            Sweets, Snacks &amp; Bakery, Coffee, Infusions, Canned Foods,
            Mustards &amp; Relishes, Concentrates &amp; Marinades, Conserves,
            Honey &amp; Jams, Dressings, Sauces, Dips &amp; Pastes, Finished
            products, Oil &amp; Vinegar, Preserves &amp; Spreads, Spices,
            Seasonings &amp; Salts, Breakfast Cereals, Corn, Flour &amp; Starch,
            Pasta &amp; Noodles, Seeds, Beans &amp; Pulses, Rice &amp; Rice
            Products, Diet Products, Biscuits &amp; Cookies, Cakes, Puddings
            &amp; Mixes, Candy, Gum, Lollipops &amp; Mints, Chocolate, Cocoa,
            Toffee, Crisps &amp; Crackers, Healthy Snacks, Nuts, Dried Fruits,
            Popcorn, Olives &amp; Pickled Snacks
          </p>
        </div>
      </div>
    </>
  )
}
