"use client";
import { useEffect, useState } from "react";

import getActiveViewIndex from "@/components/Helpers/getActiveViewIndex";
import sprinterVan from "@/data/sprinterVan";
import transitVan from "@/data/transitVan";

import ControlsIndex from "@/components/Controls";
import Loading from "@/components/Screens/Loading";
import SelectVan from "@/components/Screens/SelectVan";
import ViewOutput from "@/components/ViewOutput";
import ImagesBackground from "@/images/Background";

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
    zoomLevel: 1,
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

  const [appSettings, setAppSettings] = useState({
    fullscreen: false,
  });

  return (
    <div
      className={`relative flex select-none flex-col items-center justify-between overflow-hidden ${
        appSettings.fullscreen
          ? "max-h-screen min-h-[100dvh]"
          : "min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[900px] 2xl:min-h-[1000px]"
      }`}
    >
      {vanSelect && (
        <div
          className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-neutral-900/90 backdrop-blur-sm"
          id="change-van"
        >
          {loading ? <Loading /> : <SelectVan vanChange={vanChange} />}
        </div>
      )}

      <div
        className="absolute left-0 top-0 z-20 grid h-full w-full items-end  lg:grid-cols-[1fr_300px]"
        id="controls"
      >
        <ControlsIndex
          setControlOptions={setControlOptions}
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
          accessories={vanBuild[vanBuild.currVan].Accessories}
          checkboxChange={checkboxChange}
        />
      </div>

      <div className="absolute z-10 flex h-full w-full flex-col">
        <ViewOutput
          accessories={vanBuild[vanBuild.currVan].Accessories}
          vanView={vanBuild.vanView}
          vanBase={vanBuild[vanBuild.currVan].base}
          zoomLevel={menu.zoomLevel}
        />
      </div>

      <ImagesBackground className="fill-neutral-950 opacity-10" />
    </div>
  );
}
