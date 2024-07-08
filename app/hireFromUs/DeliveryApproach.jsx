import React from "react";
import "./HirefromusLanding.scss";
import Image from "next/image";
const DeliveryApproach = () => {
  return (
    <>
      <section className="deliverybg mobile:hidden">
        <Image
          src='/Process.svg'
          height={700}
          width={1280}
        />
        {/* <img className="w-full" src="../../Process.svg" /> */}
      </section>
      <section className="deliverybg hidden mobile:block">
        <img className="w-full" src="../../deliveryApproachMobView.svg" />
      </section>
    </>
  );
};

export default DeliveryApproach;
