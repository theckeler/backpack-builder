"use client";
import { useEffect, useMemo, useState } from "react";

import ControlsIndex from "@/components/Controls";
import ControlsAccessories from "@/components/Screens/Accessories";
import Loading from "@/components/Screens/Loading";
import SelectVan from "@/components/Screens/SelectVan";
import VanDetails from "@/components/Screens/VanDetails";
import ViewOutput from "@/components/Screens/ViewOutput";
import WrapperButton from "@/components/Wappers/Button";
import WrapperFullScreen from "@/components/Wappers/FullScreen";
import WrapperMenu from "@/components/Wappers/Menu";
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
      { key: "frontPassenger", title: "Front Passenger", active: true },
      { key: "front", title: "Front", active: false },
      { key: "frontDriver", title: "Front Driver", active: false },
      { key: "rearDriver", title: "Rear Driver", active: false },
      { key: "rear", title: "Rear", active: false },
      { key: "rearPassenger", title: "Rear Passenger", active: false },
    ],
    currVan: "sprinterVan",
    fullscreen: false,
  });

  const [vanSelect, setVanSelect] = useState(true);

  const scrollWidth = useMemo(() => {
    if (typeof window !== "undefined") {
      return document.body.scrollWidth;
    }
    return 0;
  }, []);
  const scrollWidthThreshold = 1024;
  useEffect(() => {
    if (scrollWidth > scrollWidthThreshold) {
      menuChange({ vanDetails: "force" });
    }
    setLoading(false);
  }, []);

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

  const viewChangeSlider = (e) => {
    setMenu((prevMenu) => ({
      ...prevMenu,
      rotate: { ...prevMenu.rotate, value: e.value },
    }));

    let updatedVan = [];
    vanBuild.vanView.forEach((block, i) => {
      updatedVan[i] = {
        ...block,
        active: e.value == i ? true : false,
      };
    });
    setVanBuild((prevVanBuild) => ({
      ...prevVanBuild,
      vanView: updatedVan,
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
          } else if (accessory.group && accessory.group.length > 0) {
            return {
              ...accessory,
              group: accessory.group.map((groupAccessory) => {
                if (groupAccessory.value === e.currentTarget.value) {
                  return { ...groupAccessory, active: e.currentTarget.checked };
                } else {
                  return { ...groupAccessory };
                }
              }),
            };
          }
          return accessory;
        }),
      },
    };

    const activeMainAccessories = updatedVan[
      vanBuild.currVan
    ].Accessories.filter((accessory) => accessory.active);

    const activeGroupAccessories = activeMainAccessories
      .flatMap((mainAccessory) => mainAccessory.group || [])
      .filter((groupAccessory) => groupAccessory.active);

    const combinedAccessories = [
      ...activeMainAccessories,
      ...activeGroupAccessories,
    ];

    combinedAccessories.forEach((accessory) => {
      accessoriesTotal += accessory.price;
    });

    updatedVan[vanBuild.currVan].price = {
      base: vanBuild[vanBuild.currVan].price.base,
      accessories: accessoriesTotal,
      total: vanBuild[vanBuild.currVan].price.base + accessoriesTotal,
    };

    setVanBuild(updatedVan);
  };

  const menuChange = (e) => {
    const defaultState = {
      accessories: { ...menu.accessories, open: false },
      vanDetails: { ...menu.vanDetails, open: false },
      rotate: { ...menu.rotate, open: false },
      zoom: { ...menu.zoom, open: false },
    };

    setMenu((prevMenu) => {
      if (e.zoom)
        return {
          ...defaultState,
          zoom: { ...prevMenu.zoom, open: !prevMenu.zoom.open },
        };
      if (e.rotate)
        return {
          ...defaultState,
          rotate: { ...prevMenu.rotate, open: !prevMenu.rotate.open },
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
    rotate: { value: 0, open: false },
    zoom: { level: 1, open: false },
  });

  // useEffect(() => {
  //   console.log("vanBuild useEffect:", vanBuild);
  // }, [vanBuild]);

  // useEffect(() => {
  //   console.log("menu useEffect:", menu);
  // }, [menu]);

  const [loading, setLoading] = useState(true);
  // const [vanSelect, setVanSelect] = useState(false);

  return (
    <div
      className={`relative flex select-none flex-col items-center justify-between overflow-hidden ${
        vanBuild.fullscreen
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
        className="absolute left-0 top-0 z-20 grid h-full w-screen auto-cols-max grid-flow-col items-end justify-end"
        id="controls"
      >
        <WrapperMenu className="absolute left-0 top-0 z-30 h-full w-full max-w-max">
          {menu.vanDetails.open && (
            <VanDetails
              currVan={vanBuild[vanBuild.currVan]}
              setVanSelect={setVanSelect}
              showVanDetails={menu.vanDetails.open}
            />
          )}
          <WrapperButton
            className="absolute bottom-3 left-full z-20 hidden h-12 w-12 min-w-[3em] rounded-l-none bg-neutral-200 shadow-inner lg:block"
            onClick={() => {
              menuChange({ vanDetails: true });
            }}
          >
            <Icons
              icon={menu.vanDetails.open ? "chevronleft" : "chevronright"}
              className="fill-black"
            />
          </WrapperButton>
        </WrapperMenu>

        {menu.zoom.open && (
          <WrapperFullScreen
            className="flex items-end"
            id="ZoomOpen"
            onClick={(e) => {
              e.currentTarget === e.target && menuChange({ default: "force" });
            }}
          >
            <WrapperMenu className="p-6 pb-20">
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
            </WrapperMenu>
          </WrapperFullScreen>
        )}

        {menu.rotate.open && (
          <WrapperFullScreen
            className="flex items-end"
            id="RotateOpen"
            onClick={(e) => {
              e.currentTarget === e.target && menuChange({ default: "force" });
            }}
          >
            <WrapperMenu className="p-6 pb-20">
              <input
                className="w-full"
                type="range"
                id="rotate"
                name="rotate"
                min={0}
                max={vanBuild.vanView.length - 1}
                step={1}
                value={menu.rotate.value}
                onChange={(e) => {
                  viewChangeSlider({ value: e.currentTarget.value });
                }}
              />
            </WrapperMenu>
          </WrapperFullScreen>
        )}

        <div className="z-30 grid auto-cols-max grid-flow-col items-end justify-end gap-3 p-3">
          <ControlsIndex menu={menu} menuChange={menuChange} />
        </div>

        <WrapperMenu
          className={`absolute right-0 top-0 z-10 h-full max-w-xs overflow-y-auto pb-4 sm:relative ${
            menu.accessories.open ? "" : " hidden xl:block "
          }`}
        >
          <ControlsAccessories
            accessories={vanBuild[vanBuild.currVan].Accessories}
            menuChange={menuChange}
            checkboxChange={checkboxChange}
          />
        </WrapperMenu>
      </div>

      <div className="absolute z-0 flex h-full w-full flex-col">
        <ViewOutput
          accessories={vanBuild[vanBuild.currVan].Accessories}
          vanView={vanBuild.vanView}
          vanBase={vanBuild[vanBuild.currVan].base}
          zoomLevel={menu.zoom.level}
          setLoading={setLoading}
          loading={loading}
        />
      </div>

      <ImagesBackground className="fill-sky-100 opacity-50" />
    </div>
  );
}
