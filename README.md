# Bitcoin Price Prediction Using Random Forest

This repository contains a web-based application that predicts Bitcoin prices using a Random Forest model. The application is built using **Python** for the machine learning model and **React** for the front-end interface, creating an interactive platform for users to predict Bitcoin prices based on historical data.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)

## Features

- **Bitcoin Price Prediction**: Predict future Bitcoin prices using a trained Random Forest model.
- **Live Price Chart**: Visualize Bitcoin trends with dynamic, interactive charts.
- **AI Chatbot**: Solve any queries related to bitcoin or this website.
- **Blog Section**: Read and contribute to blogs about Bitcoin price trends and market analysis.
- **Responsive UI**: Seamless experience across desktop and mobile platforms.

## Technologies Used

- **Python**: Backend language for building and training the Random Forest model.
- **Scikit-learn**: Machine learning library used for building the prediction model.
- **React**: Front-end framework for building the user interface.
- **Flask** (optional): API used for interaction between the Python model and the React front-end.
- **Pandas**: For handling and processing Bitcoin data.
- **Matplotlib/Plotly**: Data visualization libraries used for plotting charts.

## Installation

### Prerequisites

- Python 3.8 or higher
- Node.js and npm
- Git

### Backend (Python)

1. Clone the repository:
   ```bash
   git clone https://github.com/Rabbitooth/bitcoin-price-prediction.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd bitcoin-price-prediction/backend
   ```
3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the Python server:
   ```bash
   python app.py
   ```

### Frontend (React)

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

Open your browser and go to `http://localhost:3000`. (make sure to run python file first)
