"use client";
import NextImage from "next/image";
import { useEffect, useState } from "react";
import Controls from "@/components/Controls";
import ViewOutput from "@/components/ViewOutput";

export default function VanBuilder() {
  // IMAGES:
  // front: "image",
  // frontDriver: "image",
  // driver: "image",
  // rearDriver: "image",
  // rear: "image",
  // rearPassenger: "image",
  // Passenger: "image",
  // frontPassenger: "image",

  const sprinterVan = {
    base: {
      className: "object-cover z-0",
      images: {
        front: "",
        frontDriver: "",
        driver: "",
        rearDriver:
          "https://cdn.shopify.com/s/files/1/0616/3405/2352/files/sprinter-r-d.png?v=1700163309",
        rear: "https://cdn.shopify.com/s/files/1/0616/3405/2352/files/sprinter-r.png?v=1700163309",
        rearPassenger:
          "https://cdn.shopify.com/s/files/1/0616/3405/2352/files/sprinter-r-p.png?v=1700163309",
        Passenger: "",
        frontPassenger:
          "https://cdn.shopify.com/s/files/1/0616/3405/2352/files/sprinter-r-p.png?v=1700163309",
      },
    },
    Accessories: [
      {
        name: "Accessory Rack",
        value: "AccessoryRack",
        id: "AccessoryRack",
        active: false,
        title: "Rover Vans Tire Carrier & Ladder Combo for Sprinter",
        href: "https://rovervans.com/products/rover-vans-tire-carrier-ladder-combo",
        price: 999.0,
        images: {
          front: "",
          frontDriver: "",
          driver: "",
          rearDriver:
            "https://cdn.shopify.com/s/files/1/0616/3405/2352/files/sprinter-r-d-AccessoryRack.png?v=1700163309",
          rear: "https://cdn.shopify.com/s/files/1/0616/3405/2352/files/sprinter-r-AccessoryRack.png?v=1700163309",
          rearPassenger:
            "https://cdn.shopify.com/s/files/1/0616/3405/2352/files/sprinter-r-p-AccessoryRack.png?v=1700163309",
          Passenger:
            "https://cdn.shopify.com/s/files/1/0616/3405/2352/files/sprinter-r-p-AccessoryRack.png?v=1700163309",
          frontPassenger: "",
        },
      },
      {
        name: "Accessory Rack2",
        value: "AccessoryRack2",
        id: "AccessoryRack2",
        active: false,
        title: "Rover Vans Tire Carrier & Ladder Combo for Sprinter",
        href: "https://rovervans.com/products/rover-vans-tire-carrier-ladder-combo",
        price: 999.0,
        images: {
          front: "",
          frontDriver: "",
          driver: "",
          rearDriver:
            "https://cdn.shopify.com/s/files/1/0616/3405/2352/files/sprinter-r-d-AccessoryRack.png?v=1700163309",
          rear: "https://cdn.shopify.com/s/files/1/0616/3405/2352/files/sprinter-r-AccessoryRack.png?v=1700163309",
          rearPassenger:
            "https://cdn.shopify.com/s/files/1/0616/3405/2352/files/sprinter-r-p-AccessoryRack.png?v=1700163309",
          Passenger:
            "https://cdn.shopify.com/s/files/1/0616/3405/2352/files/sprinter-r-p-AccessoryRack.png?v=1700163309",
          frontPassenger: "",
        },
      },
    ],
  };

  const [vanBuild, setVanBuild] = useState({
    sprinterVan: { ...sprinterVan },
    transitVan: { ...sprinterVan },
    promasterVan: { ...sprinterVan },
    vanView: {
      rear: { active: true },
      rearDriver: { active: false },
      rearPassenger: { active: false },
    },
    windowMode: { dark: false, light: true },
    currVan: "sprinterVan",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    document.querySelector("html").classList.remove("light", "dark");
    if (matchMedia.matches) {
      document.querySelector("html").classList.add("dark");
      setVanBuild((prevVanBuild) => ({
        ...prevVanBuild,
        windowMode: { ...prevVanBuild.windowMode, dark: true, light: false },
      }));
    }
  }, []);

  useEffect(() => {
    console.log("vanBuild useEffect:", vanBuild);
    document.querySelector("html").classList.remove("light", "dark");
    document
      .querySelector("html")
      .classList.add(vanBuild.windowMode.dark ? "dark" : "light");
  }, [vanBuild]);

  const radioChange = (e) => {
    const eName = e.currentTarget.name;
    const currentRadio = e.currentTarget;
    let updatedVan = { ...vanBuild[eName] };
    Object.keys(vanBuild[eName]).forEach((key) => {
      updatedVan[key] = { active: key === currentRadio.value ? true : false };
    });
    setVanBuild((prevVanBuild) => ({
      ...prevVanBuild,
      [eName]: updatedVan,
    }));
  };

  const checkboxChange = (e) => {
    const updatedVan = {
      ...vanBuild,
      sprinterVan: {
        ...vanBuild[vanBuild.currVan],
        Accessories: vanBuild[vanBuild.currVan].Accessories.map((accessory) =>
          accessory.value === e.currentTarget.value
            ? { ...accessory, active: e.currentTarget.checked }
            : accessory
        ),
      },
    };

    setVanBuild(updatedVan);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between relative select-none`}
    >
      {loading && (
        <div className="fixed top-0 left-0 w-screen min-h-screen bg-white/80 z-50">
          loading
        </div>
      )}

      <div
        className="fixed z-30 left-0 top-0 w-screen min-h-screen"
        id="controls"
      >
        <Controls
          accessories={vanBuild.sprinterVan.Accessories}
          {...{ vanBuild, setVanBuild, radioChange, checkboxChange }}
        />
      </div>

      <ViewOutput
        accessories={vanBuild.sprinterVan.Accessories}
        vanView={vanBuild.vanView}
        vanBase={vanBuild.sprinterVan.base}
      />
    </main>
  );
}
