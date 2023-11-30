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
  price: { base: 80000.0, accessories: 0, total: 80000.0 },
  base: {
    name: "Sprinter 144",
    price: 80000.0,
    className: "object-cover z-0",
    images: {
      front:
        "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter.Front.webp?v=1701195174",
      frontDriver:
        "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter.FrontL.webp?v=1701195174",
      rearDriver:
        "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter.Rear_L.webp?v=1701195175",
      rear: "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter.Rear.webp?v=1701195174",
      rearPassenger:
        "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter.Rear_R.webp?v=1701195175",
      frontPassenger:
        "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/sprinter.Front_R.webp?v=1701195174",
    },
  },
  Accessories: [
    {
      name: "Rear Panel Rack",
      value: "PanelRack",
      id: "PanelRack",
      active: false,
      title: "Rover Vans Panel Rack for Sprinter",
      href: "https://rovervans.com/products/rover-vans-tire-carrier-ladder-combo",
      price: 999.0,
      images: {
        rearDriver:
          "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/rack_noPanels.Rear_L.png?v=1701196356",
        rear: "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/rack_noPanels.Rear.png?v=1701196356",
        rearPassenger:
          "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/rack_noPanels.Rear_R.png?v=1701196356",
      },
      group: [
        {
          name: "Rear Panel A",
          value: "PanelRackA",
          id: "PanelRackA",
          dependant: "PanelRack",
          active: false,
          title: "Rover Vans Panel Rack for Sprinter",
          href: "https://rovervans.com/products/rover-vans-tire-carrier-ladder-combo",
          price: 300.0,
          images: {
            rearDriver:
              "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/a_panel.Rear_L.webp?v=1701198941",
            rear: "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/a_panel.Rear.webp?v=1701198941",
            rearPassenger:
              "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/a_panel.Rear_R.webp?v=1701198941",
          },
        },
        {
          name: "Rear Panel B",
          value: "PanelRackB",
          id: "PanelRackB",
          dependant: "PanelRack",
          active: false,
          title: "Rover Vans Panel Rack for Sprinter",
          href: "https://rovervans.com/products/rover-vans-tire-carrier-ladder-combo",
          price: 300.0,
          images: {
            rearDriver:
              "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/b_panel.Rear_L.webp?v=1701198941",
            rear: "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/b_panel.Rear.webp?v=1701198941",
            rearPassenger:
              "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/b_panel.Rear_R.webp?v=1701198941",
          },
        },
        {
          name: "Rear Panel C",
          value: "PanelRackC",
          id: "PanelRackC",
          dependant: "PanelRack",
          active: false,
          title: "Rover Vans Panel Rack for Sprinter",
          href: "https://rovervans.com/products/rover-vans-tire-carrier-ladder-combo",
          price: 300.0,
          images: {
            rearDriver:
              "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/c_panel.Rear_L.webp?v=1701198941",
            rear: "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/c_panel.Rear.webp?v=1701198941",
            rearPassenger:
              "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/c_panel.Rear_R.webp?v=1701198941",
          },
        },
        {
          name: "Rear Panel D",
          value: "PanelRackD",
          id: "PanelRackD",
          dependant: "PanelRack",
          active: false,
          title: "Rover Vans Panel Rack for Sprinter",
          href: "https://rovervans.com/products/rover-vans-tire-carrier-ladder-combo",
          price: 300.0,
          images: {
            rearDriver:
              "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/d_panel.Rear_L.webp?v=1701198941",
            rear: "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/d_panel.Rear.webp?v=1701198941",
            rearPassenger:
              "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/d_panel.Rear_R.webp?v=1701198941",
          },
        },
      ],
    },
    // {
    //   name: "Rear Panel A",
    //   value: "PanelRackA",
    //   id: "PanelRackA",
    //   dependant: "PanelRack",
    //   active: false,
    //   title: "Rover Vans Panel Rack for Sprinter",
    //   href: "https://rovervans.com/products/rover-vans-tire-carrier-ladder-combo",
    //   price: 300.0,
    //   images: {
    //     rearDriver:
    //       "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/a_panel.Rear_L.webp?v=1701198941",
    //     rear: "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/a_panel.Rear.webp?v=1701198941",
    //     rearPassenger:
    //       "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/a_panel.Rear_R.webp?v=1701198941",
    //   },
    // },
    // {
    //   name: "Rear Panel B",
    //   value: "PanelRackB",
    //   id: "PanelRackB",
    //   dependant: "PanelRack",
    //   active: false,
    //   title: "Rover Vans Panel Rack for Sprinter",
    //   href: "https://rovervans.com/products/rover-vans-tire-carrier-ladder-combo",
    //   price: 300.0,
    //   images: {
    //     rearDriver:
    //       "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/b_panel.Rear_L.webp?v=1701198941",
    //     rear: "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/b_panel.Rear.webp?v=1701198941",
    //     rearPassenger:
    //       "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/b_panel.Rear_R.webp?v=1701198941",
    //   },
    // },
    // {
    //   name: "Rear Panel C",
    //   value: "PanelRackC",
    //   id: "PanelRackC",
    //   dependant: "PanelRack",
    //   active: false,
    //   title: "Rover Vans Panel Rack for Sprinter",
    //   href: "https://rovervans.com/products/rover-vans-tire-carrier-ladder-combo",
    //   price: 300.0,
    //   images: {
    //     rearDriver:
    //       "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/c_panel.Rear_L.webp?v=1701198941",
    //     rear: "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/c_panel.Rear.webp?v=1701198941",
    //     rearPassenger:
    //       "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/c_panel.Rear_R.webp?v=1701198941",
    //   },
    // },
    // {
    //   name: "Rear Panel D",
    //   value: "PanelRackD",
    //   id: "PanelRackD",
    //   dependant: "PanelRack",
    //   active: false,
    //   title: "Rover Vans Panel Rack for Sprinter",
    //   href: "https://rovervans.com/products/rover-vans-tire-carrier-ladder-combo",
    //   price: 300.0,
    //   images: {
    //     rearDriver:
    //       "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/d_panel.Rear_L.webp?v=1701198941",
    //     rear: "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/d_panel.Rear.webp?v=1701198941",
    //     rearPassenger:
    //       "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/d_panel.Rear_R.webp?v=1701198941",
    //   },
    // },
    {
      name: "Testing Selection",
      value: "TestingSelection",
      id: "TestingSelection",
      dependant: null,
      active: false,
      title: "Rover Vans Panel Rack for Sprinter",
      href: "https://rovervans.com/products/rover-vans-tire-carrier-ladder-combo",
      price: 300.0,
      images: {
        rearDriver:
          "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/d_panel.Rear_L.webp?v=1701198941",
        rear: "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/d_panel.Rear.webp?v=1701198941",
        rearPassenger:
          "https://cdn.shopify.com/s/files/1/0806/5735/0946/files/d_panel.Rear_R.webp?v=1701198941",
      },
    },
  ],
};

export default sprinterVan;
