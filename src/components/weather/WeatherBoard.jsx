import HeartIcon from '../../assets/heart.svg';
import CloudIcon from '../../assets/cloud.svg';
import PinIcon from '../../assets/pin.svg';
import MaxTempIcon from '../../assets/icons/temp-max.svg';
import MinTempIcon from '../../assets/icons/temp-min.svg';
import HumidityIcon from '../../assets/icons/humidity.svg';
import CloudyIcon from '../../assets/icons/cloud.svg';
import WindIcon from '../../assets/icons/wind.svg';

function WeatherBoard() {
    return (
        <div className="container">
            <div
                className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
                <div className="grid md:grid-cols-2 gap-10 md:gap-6">

                    <div className="md:col-span-2">
                        <div className="flex items-center justify-end space-x-6">
                            <button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
                                <span>Add to Favourite</span>
                                <img src={HeartIcon} alt="Add to Favourite" />
                            </button>

                        </div>
                    </div>

                    <div>
                        <div className="max-md:flex items-center justify-between md:-mt-10">
                            <img src={CloudIcon} alt="cloud" />
                            <div className="max-md:flex items-center max-md:space-x-4">
                                <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">16°</h1>
                                <div className="flex items-center space-x-4 md:mb-4">
                                    <img src={PinIcon} />
                                    <h2 className="text-2xl lg:text-[50px]">Dhaka</h2>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm lg:text-lg">06:09 - Sunday, 9 Dec ‘23</p>
                    </div>

                    <div>
                        <p className="text-sm lg:text-lg font-bold uppercase mb-8">thunderstorm with light drizzle</p>
                        <ul className="space-y-6 lg:space-y-6">
                            <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                                <span>Temp max</span>
                                <div className="inline-flex space-x-4">
                                    <p>19°</p>
                                    <img src={MaxTempIcon} alt="temp-max" />
                                </div>
                            </li>
                            <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                                <span>Temp min</span>
                                <div className="inline-flex space-x-4">
                                    <p>19°</p>
                                    <img src={MinTempIcon} alt="temp-min" />
                                </div>
                            </li>
                            <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                                <span>Humadity</span>
                                <div className="inline-flex space-x-4">
                                    <p>58%</p>
                                    <img src={HumidityIcon} alt="humidity" />
                                </div>
                            </li>
                            <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                                <span>Cloudy</span>
                                <div className="inline-flex space-x-4">
                                    <p>86%</p>
                                    <img src={CloudyIcon} alt="cloudy" />
                                </div>
                            </li>
                            <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                                <span>Wind</span>
                                <div className="inline-flex space-x-4">
                                    <p>5km/h</p>
                                    <img src={WindIcon} alt="wind" />
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default WeatherBoard
