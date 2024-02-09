import { Currency } from "./types";

// fetch(https://baseUrl/api/v1/currencies)
export const mockCurrencies: Currency[] = [
  {
    id: 1,
    name: "RUB",
    hint: "лимит 200 000",
  },
  {
    id: 2,
    name: "USDT",
    hint: null,
  },
  {
    id: 3,
    name: "DOGE",
    hint: null,
  },
];
