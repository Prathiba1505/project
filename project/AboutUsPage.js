// AboutUsPage.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'; 
import './AboutUsPage.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AboutUs = ({ onBackToHome }) => {
  const weeklyData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Sales ($)',
        data: [200, 400, 300, 500, 600, 700, 800], 
        fill: false,
        backgroundColor: 'rgba(41, 128, 185, 0.2)',
        borderColor: 'rgba(41, 128, 185, 1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Weekly Sales Data',
      },
    },
  };

  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <div className="about-us-content">
        <h2>Welcome to Our Supermarket!</h2>
        <p>
          At Supermarket, we believe that fresh groceries should be accessible to everyone. 
          Our mission is to provide high-quality products at affordable prices. 
          We source our fruits and vegetables from local farms to ensure freshness and support our community.
        </p>
        <p>
          Our team is dedicated to delivering exceptional customer service and making your shopping experience enjoyable. 
          Thank you for choosing us as your grocery partner!
        </p>
        <div className="about-us-mission">
          <h3>Our Mission</h3>
          <p>
            To enrich the lives of our customers by providing the finest selection of groceries 
            and a friendly shopping experience that fosters community connection.
          </p>
        </div>
        <div className="about-us-values">
          <h3>Our Values</h3>
          <ul>
            <li>Freshness: We prioritize quality and freshness in every product.</li>
            <li>Community: Supporting local farmers and businesses is at our core.</li>
            <li>Service: Our team is always ready to assist you with a smile.</li>
            <li>Affordability: We believe in fair pricing for all our customers.</li>
          </ul>
        </div>
        <div className="chart-container">
          <Line data={weeklyData} options={options} />
        </div>
        <button onClick={onBackToHome} className="back-to-home-button">Back to Home</button>
      </div>
    </div>
  );
};

export default AboutUs;
