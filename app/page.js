"use client";
import { useEffect, useState } from "react";

import sprinterVan from "@/data/sprinterVan";
import transitVan from "@/data/transitVan";
import getActiveViewIndex from "@/components/Helpers/getActiveViewIndex";

import ControlsAccessories from "@/components/Controls/ControlsAccessories";
import ViewOutput from "@/components/ViewOutput";
import SelectVan from "@/components/Screens/SelectVan";
import ImagesBackground from "@/images/Background";
import Loading from "@/components/Screens/Loading";
// import MenuButton from "@/components/Controls/MenuButton";
// import ControlsRotate from "@/components/Controls/ControlsRotate";
// import ControlsPosition from "@/components/Controls/ControlsPosition";
// import VanDetails from "@/components/Screens/VanDetails";
// import ImagesVan from "@/images/van";
import ControlsIndex from "@/components/Controls";

export default function VanBuilder() {
  const [vanBuild, setVanBuild] = useState({
    sprinterVan: { ...sprinterVan },
    transitVan: { ...transitVan },
    promasterVan: { ...sprinterVan },
    vanView: [
      { key: "rear", title: "Rear", active: false },
      { key: "rearDriver", title: "Rear Driver", active: true },
      { key: "rearPassenger", title: "Rear Passenger", active: false },
    ],
    windowMode: { dark: false, light: true },
    currVan: "sprinterVan",
  });

  useEffect(() => {
    console.log("vanBuild useEffect:", vanBuild);
  }, [vanBuild]);

  const [vanSelect, setVanSelect] = useState(true);
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

  const [controlOptions, setControlOptions] = useState({
    position: {
      left: false,
      top: false,
      right: true,
      bottom: true,
    },
  });

  const viewChange = (e) => {
    const eName = e.currentTarget.name;
    const currentRadio = e.currentTarget;
    let updatedVan = [];
    vanBuild[eName].forEach((block, i) => {
      updatedVan[i] = {
        ...block,
        active: currentRadio.value == i ? true : false,
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

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const menuChange = (e) => {
    if (e.position) {
      setMenu((prevMenu) => ({
        ...prevMenu,
        position: {
          ...e.position,
        },
      }));
    } else if (e.zoom) {
      setMenu((prevMenu) => ({
        ...prevMenu,
        zoom: e.zoom,
      }));
    } else {
      setMenu((prevMenu) => ({
        ...prevMenu,
        open: !menu.open,
      }));
    }
  };

  const changeZoom = (value) => {
    setMenu((prevMenu) => ({
      ...prevMenu,
      zoomLevel: value,
    }));
  };

  const [menu, setMenu] = useState({
    open: false,
    zoomLevel: 50,
    position: {
      left: false,
      top: false,
      right: true,
      bottom: true,
    },
  });

  

  const whichViewID = getActiveViewIndex(vanBuild.vanView);
  const previousView =
    whichViewID == 0 ? vanBuild.vanView.length - 1 : whichViewID - 1;
  const nextView =
    whichViewID == vanBuild.vanView.length - 1 ? 0 : whichViewID + 1;

  return (
    <main
      className={`relative flex min-h-screen select-none flex-col items-center justify-between`}
    >
      {vanSelect && (
        <div
          className="fixed left-0 top-0 z-50 flex min-h-screen w-screen items-center justify-center bg-neutral-900/90 p-10 backdrop-blur-sm"
          id="change-van"
        >
          {loading ? <Loading /> : <SelectVan vanChange={vanChange} />}
        </div>
      )}

      <div
        className={`fixed left-0 top-0 z-20  grid h-[calc(100vh-114px)] max-h-screen min-h-[100dvh] w-full auto-cols-max grid-flow-col flex-col gap-3 p-2 ${
          menu.position.bottom && "items-end"
        } ${menu.position.right && "justify-end"} ${
          menu.position.top && "lg:items-start"
        } ${menu.position.left && "lg:justify-start"}`}
        id="controls"
      >
        <ControlsIndex
          menu={menu}
          currVan={vanBuild[vanBuild.currVan]}
          views={{
            whichViewID: whichViewID,
            previousView: previousView,
            nextView: nextView,
          }}
          viewChange={viewChange}
          menuChange={menuChange}
          setVanSelect={setVanSelect}
          changeZoom={changeZoom}
          zoomLevel={menu.zoomLevel}
        />

        <div
          className={`fixed right-0 top-0 h-screen w-screen overflow-y-auto bg-neutral-200/80 shadow-inner lg:h-max lg:w-max ${
            menu.open ? "" : " hidden lg:block "
          }`}
        >
          <ControlsAccessories
            setControlOptions={setControlOptions}
            // css={{ ...css, liClassName: "gap-3 items-center group" }}
            accessories={vanBuild[vanBuild.currVan].Accessories}
            menuChange={menuChange}
            checkboxChange={checkboxChange}
          />
        </div>
      </div>

      <div className="fixed z-10 flex h-[calc(100vh-114px)] max-h-screen min-h-[100dvh] w-full flex-col">
        <ViewOutput
          accessories={vanBuild[vanBuild.currVan].Accessories}
          vanView={vanBuild.vanView}
          vanBase={vanBuild[vanBuild.currVan].base}
          zoomLevel={menu.zoomLevel}
        />
      </div>

      <ImagesBackground className="fill-neutral-950 opacity-10" />
    </main>
  );
}
