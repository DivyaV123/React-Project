import React from "react";
import "./HirefromusLanding.scss";
const DeliveryApproach = () => {
  return (
    <>
    <section className="deliverybg mobile:hidden">
      <img className="w-full" src="../../Process.svg" />
    </section>
    <section className="deliverybg hidden mobile:block">
      <img className="w-full" src="../../deliveryApproachMobView.svg" />
    </section>
    </>
  );
};

export default DeliveryApproach;
