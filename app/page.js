"use client";
import { useEffect, useState } from "react";

import ButtonWrapper from "@/components/ButtonWrapper";
import ControlsIndex from "@/components/Controls";
import getActiveViewIndex from "@/components/Helpers/getActiveViewIndex";
import ControlsAccessories from "@/components/Screens/Accessories";
import Loading from "@/components/Screens/Loading";
import SelectVan from "@/components/Screens/SelectVan";
import VanDetails from "@/components/Screens/VanDetails";
import ViewOutput from "@/components/ViewOutput";
import sprinterVan from "@/data/sprinterVan";
import transitVan from "@/data/transitVan";
import ImagesBackground from "@/images/Background";
import { Icons } from "@/images/Icons";

export default function VanBuilder() {
  const [vanBuild, setVanBuild] = useState({
    sprinterVan: { ...sprinterVan },
    transitVan: { ...transitVan },
    promasterVan: { ...sprinterVan },
    vanView: [
      { key: "front", title: "Front", active: false },
      { key: "frontDriver", title: "Front Driver", active: false },
      { key: "rearDriver", title: "Rear Driver", active: true },
      { key: "rear", title: "Rear", active: false },
      { key: "rearPassenger", title: "Rear Passenger", active: false },
      { key: "frontPassenger", title: "Front Passenger", active: false },
    ],
    windowMode: { dark: false, light: true },
    currVan: "sprinterVan",
  });

  // useEffect(() => {
  //   console.log("vanBuild useEffect:", vanBuild);
  // }, [vanBuild]);

  const [vanSelect, setVanSelect] = useState(false);
  // const [vanSelect, setVanSelect] = useState(true);
  const vanChange = (e) => {
    const val = e.currentTarget.value;
    if (val) {
      setVanBuild((prevVanBuild) => ({
        ...prevVanBuild,
        currVan: val,
      }));
      setVanSelect(false);
    } else {
      console.error("vanChange: Invalid event or missing value property");
    }
  };

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
    console.log(document.body.scrollWidth);

    document.body.scrollWidth > 1024 && menuChange({ vanDetails: "force" });
    setLoading(false);
  }, []);

  const menuChange = (e) => {
    const defaultState = {
      accessories: { open: false },
      vanDetails: { open: false },
      zoom: { open: false, level: 1 },
    };

    setMenu((prevMenu) => {
      if (e.zoom)
        return {
          ...defaultState,
          zoom: { ...prevMenu.zoom, open: !prevMenu.zoom.open },
        };
      if (e.accessories)
        return {
          ...defaultState,
          accessories: { open: !prevMenu.accessories.open },
        };
      if (e.vanDetails === "force")
        return {
          ...defaultState,
          vanDetails: { open: true },
        };
      else if (e.vanDetails)
        return {
          ...defaultState,
          vanDetails: { open: !prevMenu.vanDetails.open },
        };
      if (e.zoomLevel)
        return { ...defaultState, zoom: { ...prevMenu.zoom, level: e.value } };
      return defaultState;
    });
  };

  const [menu, setMenu] = useState({
    accessories: { open: false },
    vanDetails: { open: false },
    zoom: { level: 1, open: false },
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
          : "min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] 2xl:min-h-[900px]"
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
        className="absolute left-0 top-0 z-20 grid h-full w-full items-end  xl:grid-cols-[1fr_300px]"
        id="controls"
      >
        <div className="absolute left-0 top-0 z-20 h-full w-full  max-w-max bg-neutral-100/20 shadow-inner backdrop-blur-sm">
          {menu.vanDetails.open && (
            <VanDetails
              currVan={vanBuild[vanBuild.currVan]}
              setVanSelect={setVanSelect}
              showVanDetails={menu.vanDetails.open}
            />
          )}
          <ButtonWrapper
            className="absolute bottom-3 left-full z-20 hidden h-12 w-12 min-w-[3em] rounded-l-none bg-neutral-200 shadow-inner lg:block"
            onClick={() => {
              console.log("menuChange");
              menuChange({ vanDetails: true });
            }}
          >
            <Icons
              icon={menu.vanDetails.open ? "chevronleft" : "chevronright"}
              className="fill-black"
            />
          </ButtonWrapper>
        </div>

        {menu.zoom.open && (
          <div className="absolute bottom-0 left-0 z-20 flex h-full w-full items-end  bg-neutral-100/10 pt-10">
            <div className="backdrop-blur-s4 w-full bg-white/50 p-6 pb-20 shadow-inner">
              <input
                className="w-full"
                type="range"
                id="zoom"
                name="zoom"
                min={0.5}
                max={2}
                step={0.1}
                value={menu.zoom.level}
                onChange={(e) => {
                  menuChange({ value: e.currentTarget.value, zoomLevel: true });
                }}
              />
            </div>{" "}
          </div>
        )}

        <div className="z-20 grid auto-cols-max grid-flow-col items-end justify-end gap-3 bg-neutral-100/60 p-3 shadow-inner lg:bg-transparent lg:shadow-none">
          <ControlsIndex
            menu={menu}
            views={{
              whichViewID: whichViewID,
              previousView: previousView,
              nextView: nextView,
            }}
            viewChange={viewChange}
            menuChange={menuChange}
          />
        </div>

        <div
          className={`absolute right-0 top-0 z-10 h-full w-full overflow-y-auto bg-neutral-200/75 pb-4 shadow-inner backdrop-blur-sm xl:relative ${
            menu.accessories.open ? "" : " hidden xl:block "
          }`}
        >
          <ControlsAccessories
            accessories={vanBuild[vanBuild.currVan].Accessories}
            menuChange={menuChange}
            checkboxChange={checkboxChange}
          />
        </div>
      </div>

      <div className="absolute z-0 flex h-full w-full flex-col">
        <ViewOutput
          accessories={vanBuild[vanBuild.currVan].Accessories}
          vanView={vanBuild.vanView}
          vanBase={vanBuild[vanBuild.currVan].base}
          zoomLevel={menu.zoom.level}
        />
      </div>

      <ImagesBackground className="fill-neutral-950 opacity-10" />
    </div>
  );
}
