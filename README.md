# full-stack-weather-app

This is a simple weather application that allows users to get weather information for a specific location.

## Prerequisites

- Python 3.8 or higher
- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository to your local machine:
   - git clone https://github.com/Kiran1689/full-stack-weather-app.git
   
2. Change to the project directory:
   - cd full-stack-weather-app
 
3. Backend Setup:
- Create and activate a virtual environment (optional but recommended):
  - python -m venv env
  - source env/bin/activate  # for Linux/Mac
  - env\Scripts\activate     # for Windows

- Install the Python dependencies:
  - cd weather_backend
  - pip install -r requirements.txt

- Create a .env file in the weather_api directory and define the following environment variables:
  - API_KEY = your-api-key  
  
4. Frontend Setup:
- Install the required Node.js packages:
  - cd front-end
  - npm install
  
## Usage
1. Start the Django server:
  - cd weather_backend
  - python manage.py runserver

2. Start the React development server in a separate terminal:
  - cd front-end
  - npm start

3. Open your web browser and navigate to http://localhost:3000 to access the Weather Application.

4. Enter a location in the search box to get the weather information for that location.

## API Key
- The application requires an API key to fetch weather data. You can obtain a free API key by signing up on a weather data provider's website (e.g., Weatherstack, OpenWeatherMap).

- Create a .env file in the weather_api directory and define the API_KEY environment variable with your obtained API key

- Please make sure to replace `<your-api-key>` with the actual API key obtained from the weather data provider.



To visit live click here :point_right: : [Weather App](https://weather-app-nu-tan-46.vercel.app/)

***Make sure device location is turned ON***




