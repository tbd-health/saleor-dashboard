import Decorator from "@saleor/storybook/Decorator";
import { storiesOf } from "@storybook/react";
import React from "react";

import Datagrid, { DatagridProps } from "./Datagrid";

const data = [
  {
    id: "1",
    uuid: "627bd0e7476cd1000ecef6b4",
    balance: "3067.88",
    age: "40",
    eyeColor: "green",
    name: "Melba Keller",
    loan: {
      active: true,
      amount: "10.00",
      currency: "USD"
    }
  },
  {
    id: "2",
    uuid: "627bd0e763eb9e68f3800b9f",
    balance: "3523.57",
    age: "39",
    eyeColor: "green",
    name: "Dixie Rivera",
    loan: {
      active: true,
      amount: "151.00",
      currency: "USD"
    }
  },
  {
    id: "3",
    uuid: "627bd0e785b17c7a9b406c62",
    balance: "3240.22",
    age: "38",
    eyeColor: "brown",
    name: "Lamb Clayton",
    loan: {
      active: true,
      amount: "21.00",
      currency: "USD"
    }
  },
  {
    id: "4",
    uuid: "627bd0e7c6460044c736e00a",
    balance: "3450.59",
    age: "30",
    eyeColor: "blue",
    name: "Charity Mcgee",
    loan: {
      active: true,
      amount: "52.00",
      currency: "USD"
    }
  },
  {
    id: "5",
    uuid: "627bd0e77792e92a1b00d09c",
    balance: "3196.74",
    age: "39",
    eyeColor: "brown",
    name: "Ward Hayden",
    loan: {
      active: true,
      amount: "991.00",
      currency: "USD"
    }
  },
  {
    id: "6",
    uuid: "627bd0e78ff0fc7e94570ecd",
    balance: "2222.02",
    age: "30",
    eyeColor: "blue",
    name: "Emily Parrish",
    loan: {
      active: true,
      amount: "82.00",
      currency: "USD"
    }
  },
  {
    id: "7",
    uuid: "627bd0e7d0b1a0050a83619b",
    balance: "3558.55",
    age: "37",
    eyeColor: "blue",
    name: "Wood Hensley",
    loan: {
      active: false,
      amount: "58.23",
      currency: "USD"
    }
  },
  {
    id: "8",
    uuid: "627bd0e7138637a41c457158",
    balance: "1955.85",
    age: "29",
    eyeColor: "green",
    name: "Karin Cote",
    loan: {
      active: true,
      amount: "1.10",
      currency: "USD"
    }
  },
  {
    id: "9",
    uuid: "627bd0e7c3502435bc459efe",
    balance: "2358.54",
    age: "37",
    eyeColor: "green",
    name: "Roberta Rollins",
    loan: {
      active: true,
      amount: "1000.00",
      currency: "USD"
    }
  },
  {
    id: "10",
    uuid: "627bd0e7da2e10b6154b85cf",
    balance: "2048.10",
    age: "26",
    eyeColor: "green",
    name: "Francis Talley",
    loan: {
      active: false,
      amount: null,
      currency: "USD"
    }
  }
];

const props: DatagridProps<typeof data[0]> = {
  availableColumns: [
    { label: "ID", value: "uuid", type: "string" },
    { label: "Loaned", value: "loan", type: "moneyToggle" },
    { label: "Name", value: "name", type: "string" },
    { label: "Balance", value: "balance", type: "money" },
    { label: "Eye color", value: "eyeColor", type: "string" },
    { label: "Age", value: "age", type: "string" }
  ],
  data,
  getData: (data, column) =>
    column === "balance"
      ? {
          currency: "USD",
          id: data.id,
          value: data[column]?.toString(),
          column,
          type: "money"
        }
      : column === "loan"
      ? {
          id: data.id,
          value: data[column].amount,
          currency: data.loan.currency,
          toggled: data.loan.active,
          type: "moneyToggle",
          column
        }
      : {
          id: data.id,
          value: data[column],
          type: "string",
          column
        },
  menuItems: id => [
    {
      label: "Do something",
      // eslint-disable-next-line no-console
      onSelect: () => console.log("context", id)
    }
  ],
  // eslint-disable-next-line no-console
  onChange: data => console.log("change", data)
};

storiesOf("Generics / Datagrid", module)
  .addDecorator(Decorator)
  .add("default", () => (
    <div style={{ width: 800, margin: "auto" }}>
      <Datagrid {...props} />
    </div>
  ));
