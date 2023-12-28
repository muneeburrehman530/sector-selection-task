export const nodes = [
  {
    id: "1",
    key: "1",
    label: "Manufacturing",
    expanded: true,
    data: { id: "1", key: "1", value: "Manufacturing", type: "parent" },
    children: [
      {
        id: "1.1",
        key: "1.1",
        label: "Construction materials",
        data: {
          id: "1.1",
          key: "1.1",
          value: "Construction materials",
          type: "child",
        },
      },
      {
        id: "1.2",
        key: "1.2",
        label: "Electronics and Optics",
        data: {
          id: "1.2",
          key: "1.2",
          value: "Electronics and Optics",
          type: "child",
        },
      },
      {
        id: "1.3",
        key: "1.3",
        label: "Food and Beverage",
        data: { id: "1.3", key: "1.3", value: "Food and Beverage" },
        children: [
          {
            id: "1.3.1",
            key: "1.3.1",
            label: "Bakery & confectionery products",
            data: {
              id: "1.3.1",
              key: "1.3.1",
              value: "Bakery & confectionery products",
            },
          },
          {
            id: "1.3.2",
            key: "1.3.2",
            label: "Fish & fish products",
            data: { id: "1.3.2", key: "1.3.2", value: "Fish & fish products" },
          },
          {
            id: "1.3.3",
            key: "1.3.3",
            label: "Meat & meat products",
            data: { id: "1.3.3", key: "1.3.3", value: "Meat & meat products" },
          },
          {
            id: "1.3.4",
            key: "1.3.4",
            label: "Other",
            data: { id: "1.3.4", key: "1.3.4", value: "Other" },
          },
          {
            id: "1.3.5",
            key: "1.3.5",
            label: "Sweets & snack food",
            data: { id: "1.3.5", key: "1.3.5", value: "Sweets & snack food" },
          },
        ],
      },

      // 4th one
      //   {
      //     id: "1.4",
      //     key: "1.4",
      //     label: "Furniture",
      //     data: { id: "1.4", key: "1.4", value: "Furniture" },
      //     children: [
      //       {
      //         id: "1.4.1",
      //         key: "1.4.1",
      //         label: "Bathroom/sauna",
      //         data: { id: "1.4.1", key: "1.4.1", value: "Bathroom/sauna" },
      //       },
      //       {
      //         id: "1.4.2",
      //         key: "1.4.2",
      //         label: "Bedroom",
      //         data: { id: "1.4.2", key: "1.4.2", value: "Bedroom" },
      //       },
      //       {
      //         id: "1.4.3",
      //         key: "1.4.3",
      //         label: "Bedroom",
      //         data: { id: "1.4.3", key: "1.4.3", value: "Bedroom" },
      //       },
      //       {
      //         id: "1.4.4",
      //         key: "1.4.4",
      //         label: "Children’s room ",
      //         data: { id: "1.4.4", key: "1.4.4", value: "Children’s room " },
      //       },
      //     ],
      //   },
      {
        id: "1.4",
        key: "1.4",
        label: "Furniture",
        expanded: true,
        data: { id: "1.4", key: "1.4", value: "Furniture", type: "parent" },
        children: [
          {
            id: "1.4.1",
            key: "1.4.1",
            label: "Bathroom",
            data: {
              id: "1.4.1",
              key: "1.4.1",
              value: "Bathroom",
              type: "child",
            },
          },
          {
            id: "1.4.2",
            key: "1.4.2",
            label: "Bedroom",
            data: {
              id: "1.4.2",
              key: "1.4.2",
              value: "Bedroom",
              type: "child",
            },
          },
          {
            id: "1.4.3",
            key: "1.4.3",
            label: "Kitchen",
            data: {
              id: "1.4.3",
              key: "1.4.3",
              value: "Kitchen",
              type: "child",
            },
          },
          {
            id: "1.4.4",
            key: "1.4.4",
            label: "Living room",
            data: {
              id: "1.4.4",
              key: "1.4.4",
              value: "Living room",
              type: "child",
            },
          },
          {
            id: "1.4.5",
            key: "1.4.5",
            label: "Office",
            data: { id: "1.4.5", key: "1.4.5", value: "Office", type: "child" },
          },
          {
            id: "1.4.6",
            key: "1.4.6",
            label: "Other (Furniture)",
            data: {
              id: "1.4.6",
              key: "1.4.6",
              value: "Other (Furniture)",
              type: "child",
            },
          },
          {
            id: "1.4.7",
            key: "1.4.7",
            label: "Outdoor",
            data: {
              id: "1.4.7",
              key: "1.4.7",
              value: "Outdoor",
              type: "child",
            },
          },
          {
            id: "1.4.8",
            key: "1.4.8",
            label: "Project furniture",
            data: {
              id: "1.4.8",
              key: "1.4.8",
              value: "Project furniture",
              type: "child",
            },
          },
        ],
      },
      {
        id: "1.5",
        key: "1.5",
        label: "Machinery",
        expanded: true,
        data: { id: "1.5", key: "1.5", value: "Machinery", type: "parent" },
        children: [
          {
            id: "1.5.1",
            key: "1.5.1",
            label: "Machinery components",
            data: {
              id: "1.5.1",
              key: "1.5.1",
              value: "Machinery components",
              type: "child",
            },
          },
          {
            id: "1.5.2",
            key: "1.5.2",
            label: "Machinery equipment/tools",
            data: {
              id: "1.5.2",
              key: "1.5.2",
              value: "Machinery equipment/tools",
              type: "child",
            },
          },
          {
            id: "1.5.3",
            key: "1.5.3",
            label: "Manufacture of Machinery",
            data: {
              id: "1.5.3",
              key: "1.5.3",
              value: "Manufacture of Machinery",
              type: "child",
            },
          },
          {
            id: "1.5.4",
            key: "1.5.4",
            label: "Maritime",
            expanded: true,
            data: {
              id: "1.5.4",
              key: "1.5.4",
              value: "Maritime",
              type: "child",
            },
            children: [
              {
                id: "1.5.4.1",
                key: "1.5.4.1",
                label: "Aluminium and steel workboats",
                data: {
                  id: "1.5.4.1",
                  key: "1.5.4.1",
                  value: "Aluminium and steel workboats",
                  type: "child",
                },
              },
              {
                id: "1.5.4.2",
                key: "1.5.4.2",
                label: "Boat/Yacht building",
                data: {
                  id: "1.5.4.2",
                  key: "1.5.4.2",
                  value: "Boat/Yacht building",
                  type: "child",
                },
              },
              {
                id: "1.5.4.3",
                key: "1.5.4.3",
                label: "Ship repair and conversion",
                data: {
                  id: "1.5.4.3",
                  key: "1.5.4.3",
                  value: "Ship repair and conversion",
                  type: "child",
                },
              },
            ],
          },
          {
            id: "1.5.7",
            key: "1.5.7",
            label: "Metal Structures",
            data: {
              id: "1.5.7",
              key: "1.5.7",
              value: "Metal Structures",
              type: "child",
            },
          },
          {
            id: "1.5.5",
            key: "1.5.5",
            label: "Other",
            data: {
              id: "1.5.5",
              key: "1.5.5",
              value: "Other",
              type: "child",
            },
          },
          {
            id: "1.5.6",
            key: "1.5.6",
            label: "Repair and maintenance service",
            data: {
              id: "1.5.6",
              key: "1.5.6",
              value: "Repair and maintenance service",
              type: "child",
            },
          },
          {
            id: "1.6",
            key: "1.6",
            label: "Metal working",
            expanded: true,
            data: {
              id: "1.6",
              key: "1.6",
              value: "Metal working",
              type: "parent",
            },
            children: [
              {
                id: "1.6.1",
                key: "1.6.1",
                label: "Construction of metal structures",
                data: {
                  id: "1.6.1",
                  key: "1.6.1",
                  value: "Construction of metal structures",
                  type: "child",
                },
              },
              {
                id: "1.6.2",
                key: "1.6.2",
                label: "Houses and buildings",
                data: {
                  id: "1.6.2",
                  key: "1.6.2",
                  value: "Houses and buildings",
                  type: "child",
                },
              },
              {
                id: "1.6.3",
                key: "1.6.3",
                label: "Metal products",
                data: {
                  id: "1.6.3",
                  key: "1.6.3",
                  value: "Metal products",
                  type: "child",
                },
              },
              {
                id: "1.6.4",
                key: "1.6.4",
                label: "Metal works",
                expanded: true,
                data: {
                  id: "1.6.4",
                  key: "1.6.4",
                  value: "Metal works",
                  type: "child",
                },
                children: [
                  {
                    id: "1.6.4.1",
                    key: "1.6.4.1",
                    label: "CNC-machining",
                    data: {
                      id: "1.6.4.1",
                      key: "1.6.4.1",
                      value: "CNC-machining",
                      type: "child",
                    },
                  },
                  {
                    id: "1.6.4.2",
                    key: "1.6.4.2",
                    label: "Forgings, Fasteners",
                    data: {
                      id: "1.6.4.2",
                      key: "1.6.4.2",
                      value: "Forgings, Fasteners",
                      type: "child",
                    },
                  },
                  {
                    id: "1.6.4.3",
                    key: "1.6.4.3",
                    label: "Gas, Plasma, Laser cutting",
                    data: {
                      id: "1.6.4.3",
                      key: "1.6.4.3",
                      value: "Gas, Plasma, Laser cutting",
                      type: "child",
                    },
                  },
                  {
                    id: "1.6.4.4",
                    key: "1.6.4.4",
                    label: "MIG, TIG, Aluminum welding",
                    data: {
                      id: "1.6.4.4",
                      key: "1.6.4.4",
                      value: "MIG, TIG, Aluminum welding",
                      type: "child",
                    },
                  },
                ],
              },
            ],
          },
          {
            id: "1.7",
            key: "1.7",
            label: "Plastic and Rubber",
            expanded: true,
            data: {
              id: "1.7",
              key: "1.7",
              value: "Plastic and Rubber",
              type: "parent",
            },
            children: [
              {
                id: "1.7.1",
                key: "1.7.1",
                label: "Packaging",
                data: {
                  id: "1.7.1",
                  key: "1.7.1",
                  value: "Packaging",
                  type: "child",
                },
              },
              {
                id: "1.7.2",
                key: "1.7.2",
                label: "Plastic goods",
                data: {
                  id: "1.7.2",
                  key: "1.7.2",
                  value: "Plastic goods",
                  type: "child",
                },
              },
              {
                id: "1.7.3",
                key: "1.7.3",
                label: "Plastic processing technology",
                expanded: true,
                data: {
                  id: "1.7.3",
                  key: "1.7.3",
                  value: "Plastic processing technology",
                  type: "child",
                },
                children: [
                  {
                    id: "1.7.3.1",
                    key: "1.7.3.1",
                    label: "Blowing",
                    data: {
                      id: "1.7.3.1",
                      key: "1.7.3.1",
                      value: "Blowing",
                      type: "child",
                    },
                  },
                  {
                    id: "1.7.3.2",
                    key: "1.7.3.2",
                    label: "Moulding",
                    data: {
                      id: "1.7.3.2",
                      key: "1.7.3.2",
                      value: "Moulding",
                      type: "child",
                    },
                  },
                  {
                    id: "1.7.3.3",
                    key: "1.7.3.3",
                    label: "Plastics welding and processing",
                    data: {
                      id: "1.7.3.3",
                      key: "1.7.3.3",
                      value: "Plastics welding and processing",
                      type: "child",
                    },
                  },
                ],
              },
              {
                id: "1.7.4",
                key: "1.7.4",
                label: "Plastic profiles",
                data: {
                  id: "1.7.4",
                  key: "1.7.4",
                  value: "Plastic profiles",
                  type: "child",
                },
              },
            ],
          },
          {
            id: "1.8",
            key: "1.8",
            label: "Printing",
            expanded: true,
            data: { id: "1.8", key: "1.8", value: "Printing", type: "parent" },
            children: [
              {
                id: "1.8.1",
                key: "1.8.1",
                label: "Advertising",
                data: {
                  id: "1.8.1",
                  key: "1.8.1",
                  value: "Advertising",
                  type: "child",
                },
              },
              {
                id: "1.8.2",
                key: "1.8.2",
                label: "Book/Periodicals printing",
                data: {
                  id: "1.8.2",
                  key: "1.8.2",
                  value: "Book/Periodicals printing",
                  type: "child",
                },
              },
              {
                id: "1.8.3",
                key: "1.8.3",
                label: "Labelling and packaging printing",
                data: {
                  id: "1.8.3",
                  key: "1.8.3",
                  value: "Labelling and packaging printing",
                  type: "child",
                },
              },
            ],
          },
          {
            id: "1.9",
            key: "1.9",
            label: "Textile and Clothing",
            expanded: true,
            data: {
              id: "1.9",
              key: "1.9",
              value: "Textile and Clothing",
              type: "parent",
            },
            children: [
              {
                id: "1.9.1",
                key: "1.9.1",
                label: "Clothing",
                data: {
                  id: "1.9.1",
                  key: "1.9.1",
                  value: "Clothing",
                  type: "child",
                },
              },
              {
                id: "1.9.2",
                key: "1.9.2",
                label: "Textile",
                data: {
                  id: "1.9.2",
                  key: "1.9.2",
                  value: "Textile",
                  type: "child",
                },
              },
            ],
          },
          {
            id: "1.10",
            key: "1.10",
            label: "Wood",
            expanded: true,
            data: { id: "1.10", key: "1.10", value: "Wood", type: "parent" },
            children: [
              {
                id: "1.10.1",
                key: "1.10.1",
                label: "Other (Wood)",
                data: {
                  id: "1.10.1",
                  key: "1.10.1",
                  value: "Other (Wood)",
                  type: "child",
                },
              },
              {
                id: "1.10.2",
                key: "1.10.2",
                label: "Wooden building materials",
                data: {
                  id: "1.10.2",
                  key: "1.10.2",
                  value: "Wooden building materials",
                  type: "child",
                },
              },
              {
                id: "1.10.3",
                key: "1.10.3",
                label: "Wooden houses",
                data: {
                  id: "1.10.3",
                  key: "1.10.3",
                  value: "Wooden houses",
                  type: "child",
                },
              },
            ],
          },
        ],
      },
    ],
  },

  //   2nd node
  {
    id: "2",
    key: "2",
    label: "Other",
    expanded: true,
    data: { id: "2", key: "2", value: "Other", type: "parent" },
    children: [
      {
        id: "2.1",
        key: "2.1",
        label: "Creative industries",
        data: {
          id: "2.1",
          key: "2.1",
          value: "Creative industries",
          type: "child",
        },
      },
      {
        id: "2.2",
        key: "2.2",
        label: "Energy technology",
        data: {
          id: "2.2",
          key: "2.2",
          value: "Energy technology",
          type: "child",
        },
      },
      {
        id: "2.3",
        key: "2.3",
        label: "Environment",
        data: { id: "2.3", key: "2.3", value: "Environment", type: "child" },
      },
    ],
  },
  // 3rd node

  {
    id: "3",
    key: "3",
    label: "Service",
    expanded: true,
    data: { id: "3", key: "3", value: "Service", type: "parent" },
    children: [
      {
        id: "3.1",
        key: "3.1",
        label: "Business services",
        data: {
          id: "3.1",
          key: "3.1",
          value: "Business services",
          type: "child",
        },
      },
      {
        id: "3.2",
        key: "3.2",
        label: "Engineering",
        data: { id: "3.2", key: "3.2", value: "Engineering", type: "child" },
      },
      {
        id: "3.3",
        key: "3.3",
        label: "Information Technology and Telecommunications",
        expanded: true,
        data: {
          id: "3.3",
          key: "3.3",
          value: "Information Technology and Telecommunications",
          type: "child",
        },
        children: [
          {
            id: "3.3.1",
            key: "3.3.1",
            label: "Data processing, Web portals, E-marketing",
            data: {
              id: "3.3.1",
              key: "3.3.1",
              value: "Data processing, Web portals, E-marketing",
              type: "child",
            },
          },
          {
            id: "3.3.2",
            key: "3.3.2",
            label: "Programming, Consultancy",
            data: {
              id: "3.3.2",
              key: "3.3.2",
              value: "Programming, Consultancy",
              type: "child",
            },
          },
          {
            id: "3.3.3",
            key: "3.3.3",
            label: "Software, Hardware",
            data: {
              id: "3.3.3",
              key: "3.3.3",
              value: "Software, Hardware",
              type: "child",
            },
          },
          {
            id: "3.3.4",
            key: "3.3.4",
            label: "Telecommunications",
            data: {
              id: "3.3.4",
              key: "3.3.4",
              value: "Telecommunications",
              type: "child",
            },
          },
        ],
      },
      {
        id: "3.4",
        key: "3.4",
        label: "Tourism",
        data: { id: "3.4", key: "3.4", value: "Tourism", type: "parent" },
      },

      {
        id: "3.5",
        key: "3.5",
        label: "Translation services",
        data: {
          id: "3.5",
          key: "3.5",
          value: "Translation services",
          type: "parent",
        },
      },

      {
        id: "3.6",
        key: "3.6",
        label: "Transport and Logistics",
        expanded: true,
        data: {
          id: "3.6",
          key: "3.6",
          value: "Transport and Logistics",
          type: "parent",
        },
        children: [
          {
            id: "3.6.1",
            key: "3.6.1",
            label: "Air",
            data: { id: "3.6.1", key: "3.6.1", value: "Air", type: "child" },
          },
          {
            id: "3.6.2",
            key: "3.6.2",
            label: "Rail",
            data: { id: "3.6.2", key: "3.6.2", value: "Rail", type: "child" },
          },
          {
            id: "3.6.3",
            key: "3.6.3",
            label: "Road",
            data: { id: "3.6.3", key: "3.6.3", value: "Road", type: "child" },
          },
          {
            id: "3.6.4",
            key: "3.6.4",
            label: "Water",
            data: { id: "3.6.4", key: "3.6.4", value: "Water", type: "child" },
          },
        ],
      },
    ],
  },
];

console.log(nodes, "api");
