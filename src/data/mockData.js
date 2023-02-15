import { tokens } from "../theme";



export const mockDataInvoices = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    cost: "21.24",
    phone: "(665)121-5454",
    date: "03/12/2022",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    cost: "1.24",
    phone: "(421)314-2288",
    date: "06/15/2021",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    cost: "11.24",
    phone: "(422)982-6739",
    date: "05/02/2022",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    cost: "80.55",
    phone: "(921)425-6742",
    date: "03/21/2022",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    cost: "1.24",
    phone: "(421)445-1189",
    date: "01/12/2021",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    cost: "63.12",
    phone: "(232)545-6483",
    date: "11/02/2022",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    cost: "52.42",
    phone: "(543)124-0123",
    date: "02/11/2022",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    cost: "21.24",
    phone: "(222)444-5555",
    date: "05/02/2021",
  },
];

export const mockTransactions = [
  {
    txId: "01e4dsa",
    user: "johndoe",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "51034szv",
    user: "goodmanave",
    date: "2022-11-05",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "stevebower",
    date: "2022-11-02",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "120s51a",
    user: "wootzifer",
    date: "2019-04-15",
    cost: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
];


export const mockLineData = [
  {
    id: "Beneficiaries1",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "Flood",
        y: 101,
      },
      {
        x: "LandSlide",
        y: 80,
      },
      {
        x: "Earthquake",
        y: 36,
      },
      {
        x: "Orphanage",
        y: 216,
      },
      {
        x: "Others",
        y: 35,
      },
      
    ],
  },
  {
    id: "Beneficiaries2",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "Flood",
        y: 212,
      },
      {
        x: "Landslide",
        y: 190,
      },
      {
        x: "Earthquake",
        y: 270,
      },
      {
        x: "Orphanage",
        y: 9,
      },
      {
        x: "Others",
        y: 75,
      },
      
    ],
  },
  {
    id: "Beneficiaries3",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "Flood",
        y: 191,
      },
      {
        x: "Landslide",
        y: 130,
      },
      {
        x: "Earthquake",
        y: 91,
      },
      {
        x: "Orphanage",
        y: 190,
      },
      {
        x: "Others",
        y: 211,
      },
      
    ],
  },
];

