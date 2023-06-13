from django.shortcuts import render
import requests
from django.http import JsonResponse
import os
from dotenv import load_dotenv
import os

load_dotenv()

def get_weather(request):
    location = request.GET.get('location', '')
    lat = request.GET.get('lat')
    lon = request.GET.get('lon')

    if lat and lon:
        # Use latitude and longitude to fetch weather data
        access_key = os.environ.get('API_KEY')
        url = f'http://api.weatherstack.com/current?access_key={access_key}&query={lat},{lon}'
    
    else:
        # Use location name to fetch weather data
        access_key = os.environ.get('API_KEY')
        url = f'http://api.weatherstack.com/current?access_key={access_key}&query={location}'

    response = requests.get(url)
    data = response.json()
    
    if 'current' in data:
        current_data = data['current']
        weather_data = {
            'conditions': current_data.get('weather_descriptions'),
            'temperature': current_data.get('temperature'),
            'humidity': current_data.get('humidity'),
            'wind_speed': current_data.get('wind_speed'),
            'pressure': current_data.get('pressure'),
            'precip': current_data.get('precip'),
            'cloudcover': current_data.get('cloudcover'),
            'uv_index': current_data.get('uv_index'),
            'visibility': current_data.get('visibility'),
        }
    else:
        weather_data = {
            'conditions': '',
            'temperature': '',
            'humidity': '',
            'wind_speed': '',
            'pressure': '',
            'precip': '',
            'cloudcover': '',
            'uv_index': '',
            'visibility': '',
        }

    return JsonResponse(weather_data)
