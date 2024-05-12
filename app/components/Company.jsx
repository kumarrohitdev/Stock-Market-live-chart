"use client";
import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { GlobalContext } from "../context/Globalcontext";
import axios from "axios";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const nseStocks = [
  { name: "META", symbol: "META" },
  { name: "Coinbase Global, Inc", symbol: "COIN" },
  { name: "Google", symbol: "GOOGL" },
  { name: "Infosys Limited", symbol: "INFY" },
  { name: "Indian Bank", symbol: "BSE:INDIANB" },
  { name: "INDIA CEMENTS LTD.", symbol: "BSE:INDIACEM" },
  { name: "Zomato ", symbol: "BSE:ZOMATO" },
];

export default function ComCard() {
  const { setCompSymbol, setCompName } = useContext(GlobalContext);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3001/api/data");
      setResults(response.data);
    };

    fetchData();
  }, []);

  console.log(results);

  const handleSelectStock = (stock) => {
    setCompSymbol(stock.symbol);
    setCompName(stock.name);
  };

  return (
    <Card sx={{ minWidth: 275, maxWidth: 400 }}>
      <CardContent>
        <h1 className="text-center font-semibold">Select Stocks</h1>
        <div className="flex flex-col overflow-y-auto">
          {nseStocks.map((stock, index) => (
            <div key={index} className="flex justify-between gap-20 w-full">
            <Button className="w-full"  onClick={() => handleSelectStock(stock)}>
              {stock.name} {bull}
              <h1 className="text-green-400 p-1 rounded-md ">
                {results.length > 0 && results[index] && results[index].data[0]}
              </h1>
            </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
