import React, { useState, useEffect, useRef } from 'react';
import './Programs.css';

const Programs = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const [accuracy, setAccuracy] = useState(null);

  const chartRef = useRef(null); // Reference for the TradingView chart

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      if (selectedDate) {
        try {
          const response = await fetch('http://localhost:5000/predict', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ date: selectedDate }),
          });
          const data = await response.json();
          if (response.ok) {
            setBitcoinPrice(data.usd); // Set the USD price
            setAccuracy(data.accuracy); // Set the accuracy
          } else {
            console.error(data.error); // Log any errors
            setBitcoinPrice(null); // Clear price on error
            setAccuracy(null); // Clear accuracy on error
          }
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchBitcoinPrice();
  }, [selectedDate]);

  useEffect(() => {
    const chartWidth = window.innerWidth < 768 ? 400 : 580; // Adjust width based on screen size
    const chartHeight = window.innerWidth < 768 ? 400 : 380; // Adjust height based on screen size

    if (chartRef.current) {
      const script = document.createElement('script');
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;
      script.onload = () => {
        new window.TradingView.widget({
          width: chartWidth, // Dynamically set the width
          height: chartHeight, // Dynamically set the height
          symbol: "BITSTAMP:BTCUSD",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          hide_top_toolbar: true,
          save_image: false,
          container_id: "tradingview-chart"
        });
      };
      chartRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className='bitcoin-predict'>
      <div className='text-section'>
        <h1>Predict the Future of Bitcoin</h1>
        <p>
          Our AI-driven prediction engine analyzes market trends to deliver precise forecasts and insights tailored to your Bitcoin investments. By leveraging advanced algorithms, we provide you with actionable data to enhance your investment strategies. Stay ahead in the dynamic cryptocurrency market with our accurate predictions.
        </p>
        <div className='buttons'>
          <div className="date-container">
            <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
          </div>

          <div className="accuracy-container">
            <div className="prediction-container">
              {bitcoinPrice && (
                <p className="prediction">Prediction: ${bitcoinPrice.toFixed(6)}</p> // Show the prediction with 6 digits after the decimal point
              )}
            </div>
            {accuracy && (
              <p className="accuracy">Accuracy: {accuracy}%</p> // Show accuracy on the right
            )}
          </div>
        </div>
      </div>

      <div className='program'>
        {/* Container for the TradingView chart */}
        <div id="tradingview-chart" ref={chartRef}></div>
      </div>
    </div>
  );
};

export default Programs;
