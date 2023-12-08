// front: "",
// frontDriver: "",
// driver: "",
// rearDriver: "",
// rear: "",
// rearPassenger: "",
// Passenger: "",
// frontPassenger: "",

const sprinterVan = {
  price: { base: 80000.0, accessories: 0, total: 80000.0 },
  base: {
    name: "Sprinter",
    price: 80000.0,
    className: "object-cover z-0",
    images: {
      front:
        "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter-front.webp",
      frontDriver:
        "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter-frontDriver.webp",
      sideDriver:
        "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter-sideDriver.webp",
      rearDriver:
        "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter-rearDriver.webp",
      rear: "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter-rear.webp",
      rearPassenger:
        "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter-rearPassenger.webp",
      sidePassenger:
        "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter-sidePassenger.webp",
      frontPassenger:
        "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter-frontPassenger.webp",
    },
  },
  Accessories: [
    {
      name: "Rear Panel Rack",
      value: "PanelRack",
      id: "PanelRack",
      active: false,
      title: "Rover Vans Panel Rack for Sprinter",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat malesuada eros nec dapibus. Ut et justo in sem maximus sodales nec ac erat. Phasellus vitae pulvinar dolor. Donec at sapien sit amet felis accumsan ornare. Sed commodo est nec.",
      href: "https://rovervans.com/products/",
      price: 999.0,
      images: {
        rearDriver:
          "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter-baseRack-rearDriver.webp",
        rear: "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter-baseRack-rear.webp",
        rearPassenger:
          "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter-baseRack-rearPassenger.webp",
        sidePassenger:
          "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter-baseRack-sidePassenger.webp",
      },
      layers: {
        sidePassenger: "z-10",
      },
      group: [
        {
          name: "Rear Panel A",
          value: "PanelRackA",
          id: "PanelRackA",
          dependant: "PanelRack",
          active: false,
          title: "Rover Vans Panel Rack for Sprinter",
          href: "https://rovervans.com/products/",
          price: 300.0,
          images: {
            rearDriver:
              "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter-panelA-rearDriver.webp",
            rear: "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter-panelA-rear.webp",
            rearPassenger:
              "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter-panelA-rearPassenger.webp",
            sidePassenger:
              "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter-panelA-sidePassenger.webp",
          },
          layers: { sidePassenger: "z-0" },
        },
        {
          name: "Rear Panel B",
          value: "PanelRackB",
          id: "PanelRackB",
          dependant: "PanelRack",
          active: false,
          title: "Rover Vans Panel Rack for Sprinter",
          href: "https://rovervans.com/products/",
          price: 300.0,
          images: {
            rearDriver:
              "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter-panelB-rearDriver.webp",
            rear: "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter-panelB-rear.webp",
            rearPassenger:
              "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter-panelB-rearPassenger.webp",
            sidePassenger:
              "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter-panelB-sidePassenger.webp",
          },
          layers: { sidePassenger: "z-0" },
        },
        {
          name: "Rear Panel C",
          value: "PanelRackC",
          id: "PanelRackC",
          dependant: "PanelRack",
          active: false,
          title: "Rover Vans Panel Rack for Sprinter",
          href: "https://rovervans.com/products/",
          price: 300.0,
          images: {
            rearDriver:
              "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter-panelC-rearDriver.webp",
            rear: "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter-panelC-rear.webp",
            rearPassenger:
              "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter-panelC-rearPassenger.webp",
            sidePassenger:
              "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter-panelC-sidePassenger.webp",
          },
          layers: { sidePassenger: "z-0" },
        },
        {
          name: "Rear Panel D",
          value: "PanelRackD",
          id: "PanelRackD",
          dependant: "PanelRack",
          active: false,
          title: "Rover Vans Panel Rack for Sprinter",
          href: "https://rovervans.com/products/",
          price: 300.0,
          images: {
            rearDriver:
              "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter-panelD-rearDriver.webp",
            rear: "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter-panelD-rear.webp",
            rearPassenger:
              "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter-panelD-rearPassenger.webp",
            sidePassenger:
              "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter-panelD-sidePassenger.webp",
          },
          layers: { sidePassenger: "z-0" },
        },
      ],
    },
  ],
};

export default sprinterVan;
