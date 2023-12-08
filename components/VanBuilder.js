"use client";
import { useEffect, useMemo, useState } from "react";

import ControlsIndex from "@/components/Controls";
import Select from "@/components/Inputs/Select";
import InputSlider from "@/components/Inputs/Slider";
import ScreensAccessories from "@/components/Screens/Accessories";
import AccessoryDetail from "@/components/Screens/AccessoryDetail";
import VanDetails from "@/components/Screens/VanDetails";
import ViewOutput from "@/components/Screens/ViewOutput";
import WrapperButton from "@/components/Wrappers/Button";
import WrapperFullScreen from "@/components/Wrappers/FullScreen";
import WrapperMenu from "@/components/Wrappers/Menu";
import promasterVan from "@/data/promasterVan";
import sprinterVan from "@/data/sprinterVan";
import transitVan from "@/data/transitVan";
import ImagesBackground from "@/images/Background";
import { Icons } from "@/images/Icons";
import Logo from "@/images/logo";

export default function VanBuilder() {
  const [vanBuild, setVanBuild] = useState({
    sprinterVan: { ...sprinterVan },
    transitVan: { ...transitVan },
    promasterVan: { ...promasterVan },
    vanView: [
      { key: "rear", title: "Rear", active: false },
      { key: "rearPassenger", title: "Rear Passenger", active: false },
      { key: "sidePassenger", title: "Side Passenger", active: false },
      { key: "frontPassenger", title: "Front Passenger", active: true },
      { key: "front", title: "Front", active: false },
      { key: "frontDriver", title: "Front Driver", active: false },
      { key: "sideDriver", title: "Side Driver", active: false },
      { key: "rearDriver", title: "Rear Driver", active: false },
    ],
    currVan: "sprinterVan",
    fullscreen: false,
    options: {
      onChange: (e) => {
        vanChange(e);
      },
      blocks: [
        {
          title: "Sprinter",
          value: "sprinterVan",
        },
        {
          title: "Transit",
          value: "transitVan",
        },
        {
          title: "Promaster",
          value: "promasterVan",
        },
      ],
    },
  });

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
    const eValue = e.currentTarget.value;

    if (eValue) {
      setVanBuild((prevVanBuild) => ({
        ...prevVanBuild,
        currVan: eValue,
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
    rotate: { value: 3, open: false },
    zoom: { level: 1, open: false },
  });

  const showAccessory = (accessory) => {
    setAccessoryDetail((prevAccessoryDetail) => {
      if (accessory)
        return {
          ...prevAccessoryDetail,
          active: !accessoryDetail.active,
          accessory: { ...accessory },
        };
      else return { active: false };
    });
  };
  // useEffect(() => {
  //   console.log("accessoryDetail useEffect:", accessoryDetail);
  // }, [accessoryDetail]);

  const allBaseToPreloadObject = [
    ...Object.values(vanBuild.sprinterVan.base.images),
    ...Object.values(vanBuild.transitVan.base.images),
    ...Object.values(vanBuild.promasterVan.base.images),
  ];
  useEffect(() => {
    allBaseToPreloadObject.forEach((imageUrl) => {
      const linkElement = document.createElement("link");
      linkElement.rel = "prefetch";
      linkElement.href = imageUrl;
      linkElement.as = "image";
      document.head.appendChild(linkElement);
    });
  }, []);

  const sliderMove = () => {
    setSliderActive(true);
  };

  const sliderStop = () => {
    setSliderActive(false);
  };

  const [loading, setLoading] = useState(true);
  const [sliderActive, setSliderActive] = useState(false);
  const [vanSelect, setVanSelect] = useState(true);
  const [accessoryDetail, setAccessoryDetail] = useState({ active: false });

  // useEffect(() => {
  //   console.log("sliderActive useEffect:", sliderActive);
  // }, [sliderActive]);

  return (
    <>
      <link rel="preconnect" href="https://cdn.shopify.com" />
      <link rel="dns-prefetch" href="https://cdn.shopify.com" />

      <div
        className={`relative flex select-none flex-col items-center justify-between overflow-hidden ${
          vanBuild.fullscreen
            ? "max-h-screen min-h-[100dvh]"
            : "min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] 2xl:min-h-[900px]"
        }`}
      >
        {(loading || vanSelect) && (
          <WrapperFullScreen
            className="absolute left-0 top-0 z-50 flex h-full w-screen items-center justify-center"
            id="loading"
          >
            <div className="grid min-w-[260px] place-content-center justify-items-center rounded bg-white/80 p-4 shadow-base shadow-white">
              <Logo className="mx-auto h-36 w-36 fill-sky-700" />

              <div className="mt-4 text-center text-4xl font-extralight text-sky-900">
                {loading ? "Loading" : "Select your van:"}
              </div>

              {loading ? (
                <Icons
                  icon="progressactivity"
                  className="mt-4 h-16 w-16 animate-spin rounded-full bg-amber-500 fill-neutral-800 p-2 "
                />
              ) : (
                <Select
                  onChange={vanBuild.options.onChange}
                  className="mt-6 w-full appearance-none rounded bg-amber-400 p-3 font-bold shadow-inner"
                  aria-label="Select your van."
                  options={vanBuild.options}
                  activeVan="Select Your Van"
                />
              )}
            </div>
          </WrapperFullScreen>
        )}

        {accessoryDetail.active && accessoryDetail.accessory && (
          <WrapperFullScreen
            id="accessoryDetail"
            className="absolute left-0 top-0 z-50 flex h-full w-screen items-center justify-center"
            onClick={(e) => {
              e.currentTarget === e.target && showAccessory();
            }}
          >
            <AccessoryDetail
              accessory={accessoryDetail.accessory}
              showAccessory={showAccessory}
            />
          </WrapperFullScreen>
        )}

        <div
          className="absolute left-0 top-0 z-20 grid h-full w-screen auto-cols-max grid-flow-col items-end justify-end"
          id="vanControls"
        >
          <WrapperMenu className="absolute left-0 top-0 z-30 h-full w-full max-w-max">
            {menu.vanDetails.open && (
              <VanDetails
                currVan={vanBuild[vanBuild.currVan]}
                options={vanBuild.options}
                activeVan={vanBuild[vanBuild.currVan].base.name}
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

          {(menu.zoom.open || menu.rotate.open) && (
            <WrapperMenu className="absolute bottom-0 left-0 z-20 flex w-full justify-end bg-neutral-100/90 p-6 pb-20 backdrop-blur-xl">
              <InputSlider
                min={menu.zoom.open ? 0.5 : 0}
                max={menu.zoom.open ? 1.5 : vanBuild.vanView.length - 1}
                step={menu.zoom.open ? 0.2 : 1}
                value={menu.zoom.open ? menu.zoom.level : menu.rotate.value}
                onMouseDown={sliderMove}
                onMouseUp={sliderStop}
                onChange={(e) => {
                  menu.zoom.open
                    ? menuChange({
                        value: e.currentTarget.value,
                        zoomLevel: true,
                      })
                    : viewChangeSlider({ value: e.currentTarget.value });
                }}
              />
            </WrapperMenu>
          )}

          <div
            className="z-30 grid auto-cols-min grid-flow-col items-end justify-end gap-3 p-3"
            id="vanControls"
          >
            <ControlsIndex menu={menu} menuChange={menuChange} />
          </div>

          <WrapperMenu
            className={`absolute right-0 top-0 z-10 h-full max-w-fit overflow-y-auto pb-10 sm:relative lg:pb-0 xl:min-w-[24vw] 2xl:min-w-[30vw] ${
              menu.accessories.open ? "" : " hidden xl:block "
            }`}
          >
            <ScreensAccessories
              accessories={vanBuild[vanBuild.currVan].Accessories}
              // menuChange={menuChange}
              checkboxChange={checkboxChange}
              showAccessory={showAccessory}
            />
          </WrapperMenu>

          <WrapperFullScreen
            className="absolute bottom-0 left-0 z-0 h-full w-full"
            bgColor={false}
            blur={false}
            onClick={(e) => {
              e.currentTarget === e.target && menuChange({ default: "force" });
            }}
          />
        </div>

        <div
          className={`absolute z-0 flex h-full w-full flex-col ${
            sliderActive ? "brightness-0" : ""
          }`}
          id="VanOutput"
        >
          <ViewOutput
            accessories={vanBuild[vanBuild.currVan].Accessories}
            vanView={vanBuild.vanView}
            vanBase={vanBuild[vanBuild.currVan].base}
            zoomLevel={menu.zoom.level}
            setLoading={setLoading}
            hideAccessories={sliderActive}
            sliderActive={sliderActive}
          />
        </div>

        <ImagesBackground
          className="fill-sky-100 opacity-50"
          id="logoBackground"
        />
      </div>
    </>
  );
}
