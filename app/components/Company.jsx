'use client'
import React, { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { GlobalContext } from "../context/Globalcontext";

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
  { name: "INDIAN ENERGY EXCHANGE LIMITED", symbol: "BSE:IEX" }
 
];

export default function ComCard() {
  const { setCompSymbol, setCompName } =useContext(GlobalContext);
  
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
            <Button key={index} onClick={() => handleSelectStock(stock)}>
              {stock.name}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
