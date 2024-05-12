import React from 'react';
import ComCard from "./components/Company";
import TradingViewWidget from '@/app/components/LiveChar'; 
export default function Page() { 
  return (
    <div className="max-w-6xl mx-auto mt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
    <div className="tradingview-widget-container col-span-2">
        <TradingViewWidget />
    </div>
    <div className="com-card-container col-span-1">
        <ComCard />
    </div>
</div>

  
  );
}
