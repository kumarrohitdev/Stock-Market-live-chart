'use client'
import React, { useContext, useEffect, useRef, useState, memo } from 'react';
import { GlobalContext } from '../context/Globalcontext';

export const metadata = {
  title: "Rohit kumar",
  description: "Stock market is not a Game learn Then earn",
};

function TradingViewWidget() {
  const { CompSymbol, CompName } = useContext(GlobalContext);
  const containerRef = useRef();
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!scriptLoaded) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "${CompName}",
              "${CompSymbol}|1D"
            ]
          ],
          "chartOnly": true,
          "width": "100%",
          "locale": "en",
          "colorTheme": "dark",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ]
        }`;
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(script);
      setScriptLoaded(true);
    }
  }, [CompSymbol, CompName, scriptLoaded]);

  useEffect(() => {
    if (scriptLoaded) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "${CompName}",
              "${CompSymbol}|1D"
            ]
          ]
        }`;
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(script);
    }
  }, [CompSymbol, CompName, scriptLoaded]);

  return (
    <div className="tradingview-widget-container min-w-full min-h-full" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
