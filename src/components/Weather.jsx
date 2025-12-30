
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const Weather = ({ weather, loading, error }) => {
  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!weather) return null;

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 p-6 m-3 rounded-xl">

      {/* LOCATION */}
      <h2 className="text-3xl font-semibold text-white mb-8">
        {weather.location.name}, {weather.location.region}, {weather.location.country}
      </h2>

      {/* WEATHER CARD */}
      <div className="bg-gradient-to-r from-sky-900 via-blue-300 to-indigo-300 rounded-2xl p-6 w-auto shadow-xl">

        {/* TEMP + ICON */}
        <div className="flex items-center justify-between">
          <p className="text-4xl font-bold text-white">
            {weather.current.temp_c}°C
          </p>

          <img
            src={weather.current.condition.icon}
            alt="weather icon"
            className="w-16 h-16"
          />
        </div>

        {/* CONDITION */}
        <p className="text-white text-lg mt-2">
          {weather.current.condition.text}
        </p>

        {/* DIVIDER */}
        <div className="border-t border-white/30 my-4"></div>

        {/* EXTRA INFO */}
        <div className="grid grid-cols-3 text-center text-white">
          <div>
            <p className="text-sm opacity-80">Feels Like</p>
            <p className="font-semibold">{weather.current.feelslike_c}°C</p>
          </div>

          <div>
            <p className="text-sm opacity-80">Humidity</p>
            <p className="font-semibold">{weather.current.humidity}%</p>
          </div>

          <div>
            <p className="text-sm opacity-80">Wind</p>
            <p className="font-semibold">{weather.current.wind_kph} km/h</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Weather;
