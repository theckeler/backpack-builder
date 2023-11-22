"use client";
import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

import sprinterVan from "@/data/sprinterVan";
import transitVan from "@/data/transitVan";
import { priceFormatter } from "@/components/Helpers/priceFormatter";

import Controls from "@/components/Controls";
import ViewOutput from "@/components/ViewOutput";
import SelectVan from "@/components/Controls/SelectVan";
import ImagesBackground from "@/images/Background";

export default function VanBuilder() {
  const [vanBuild, setVanBuild] = useState({
    sprinterVan: { ...sprinterVan },
    transitVan: { ...transitVan },
    promasterVan: { ...sprinterVan },
    vanView: {
      rear: { active: true, title: "Rear" },
      rearDriver: { active: false, title: "Rear Driver" },
      rearPassenger: { active: false, title: "Rear Passenger" },
    },
    windowMode: { dark: false, light: true },
    currVan: "sprinterVan",
  });

  useEffect(() => {
    console.log("vanBuild useEffect:", vanBuild);
  }, [vanBuild]);

  const [vanSelect, setVanSelect] = useState(false);
  const vanChange = (e) => {
    const val = e.currentTarget.value;

    if (val) {
      setVanBuild((prevVanBuild) => ({
        ...prevVanBuild,
        currVan: val,
      }));
      setVanSelect(false);
    } else {
      console.error("Invalid event or missing value property");
    }
  };

  const radioChange = (e) => {
    const eName = e.currentTarget.name;
    const currentRadio = e.currentTarget;
    let updatedVan = { ...vanBuild[eName] };
    Object.keys(vanBuild[eName]).forEach((key) => {
      console.log(key);
      updatedVan[key] = {
        ...vanBuild[eName][key],
        active: key === currentRadio.value ? true : false,
      };
    });
    setVanBuild((prevVanBuild) => ({
      ...prevVanBuild,
      [eName]: updatedVan,
    }));
  };

  const checkboxChange = (e) => {
    let accessoriesTotal = 0;
    const updatedVan = {
      ...vanBuild,
      [vanBuild.currVan]: {
        ...vanBuild[vanBuild.currVan],
        Accessories: vanBuild[vanBuild.currVan].Accessories.map((accessory) => {
          if (accessory.value === e.currentTarget.value) {
            return { ...accessory, active: e.currentTarget.checked };
          } else {
            return accessory;
          }
        }),
      },
    };

    updatedVan[vanBuild.currVan].Accessories.forEach((accessory) => {
      if (accessory.active) {
        accessoriesTotal += accessory.price;
      }
    });

    updatedVan[vanBuild.currVan].price = {
      base: vanBuild[vanBuild.currVan].price.base,
      accessories: accessoriesTotal,
      total: vanBuild[vanBuild.currVan].price.base + accessoriesTotal,
    };

    setVanBuild(updatedVan);
  };

  return (
    <main
      className={`relative flex min-h-screen select-none flex-col items-center justify-between`}
    >
      {vanSelect && (
        <div
          className="fixed left-0 top-0 z-50 flex min-h-screen w-screen items-center justify-center bg-neutral-900/90 backdrop-blur-sm"
          id="change-van"
        >
          <SelectVan vanChange={vanChange} />
        </div>
      )}

      <div
        className="fixed left-0 top-0 z-30 min-h-screen w-screen"
        id="controls"
      >
        <Controls
          accessories={vanBuild[vanBuild.currVan].Accessories}
          priceFormatter={priceFormatter}
          setVanSelect={setVanSelect}
          {...{ vanBuild, setVanBuild, radioChange, checkboxChange }}
        />
      </div>

      <ViewOutput
        accessories={vanBuild[vanBuild.currVan].Accessories}
        vanView={vanBuild.vanView}
        vanBase={vanBuild[vanBuild.currVan].base}
      />
      <ImagesBackground className="fill-neutral-950 opacity-10" />
    </main>
  );
}

// SHIT BELOW:

// useEffect(() => {
//   const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
//   document.querySelector("html").classList.remove("light", "dark");
//   if (matchMedia.matches) {
//     document.querySelector("html").classList.add("dark");
//     setVanBuild((prevVanBuild) => ({
//       ...prevVanBuild,
//       windowMode: { ...prevVanBuild.windowMode, dark: true, light: false },
//     }));
//   }
// }, []);

// useEffect(() => {
//   // document.querySelector("html").classList.remove("light", "dark");
//   // document
//   //   .querySelector("html")
//   //   .classList.add(vanBuild.windowMode.dark ? "dark" : "light");

//   // vanBuild[vanBuild.currVan].Accessories.map(function ({ active, price }, i) {
//   //   active && console.log(price);

//   //   setVanBuild((prevVanBuild) => ({
//   //     ...prevVanBuild,
//   //     sprinterVan: {
//   //       ...vanBuild[vanBuild.currVan],
//   //       Accessories: vanBuild[vanBuild.currVan].Accessories.map((accessory) =>
//   //         accessory.value === e.currentTarget.value
//   //           ? { ...accessory, active: e.currentTarget.checked }
//   //           : accessory
//   //       ),
//   //     },
//   //   }));
//   // });
// }, [vanBuild]);
