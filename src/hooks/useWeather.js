import { useEffect, useState } from "react"

const API_KEY = 'e3c9bf35e426c1789775f45994cc305c';

const useWeather = () => {
    const [weatherData, setWeatherData] = useState({
        location: '',
        climate: '',
        temperature: '',
        maxTemperature: '',
        minTemperature: '',
        humadity: '',
        cloudPercentage: '',
        wind: '',
        time: '',
        longitude: '',
        latitude: '',
    });

    const [loading, setLoading] = useState({
        state: false,
        message: ''
    });

    const [error, setError] = useState(null);

    const fetchWeatherData = async (latitude, longitude) => {
        try {
            setLoading({
                ...loading,
                state: true,
                message: 'Fetching weather data...'
            });

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
            if (!response.ok) {
                const errorMessage = `An error has occured: ${response.status}`;
                throw new Error(errorMessage);
            }

            const data = await response.json();

            setWeatherData({
                ...weatherData,
                location: data?.name,
                climate: data?.weather[0]?.description,
                temperature: data?.main?.temp,
                maxTemperature: data?.main?.temp_max,
                minTemperature: data?.main?.temp_min,
                humadity: data?.main?.humidity,
                cloudPercentage: data?.clouds?.all,
                wind: data?.wind?.speed,
                time: data?.dt,
                longitude: longitude,
                latitude: latitude,
            });

        } catch (error) {
            setError(error)
        } finally {
            setLoading({
                ...loading,
                state: false,
                message: ''
            });
        }
    };

    useEffect(() => {
        setLoading({
            state: true,
            message: 'Fetching location data...'
        });

        navigator.geolocation.getCurrentPosition((position) => {
            fetchWeatherData(position.coords.latitude, position.coords.longitude);
        });
    }, []);


    return { weatherData, loading, error };
}

export default useWeather;