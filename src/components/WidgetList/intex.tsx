import React from 'react'

const WidgetList: React.FC = (): JSX.Element => {
    const cities = ["Turku", "Helsinki", "Oulu", "Kathmandu"]
    return (
        <ul className="grid">
            {cities.map(city => (
                <li className="card">
                    <button>
                        <p>x</p>
                    </button>
                    <div>
                        <p>0C</p>                       
                        <div>
                            <p>{city}</p>
                            <p>{new Date().getHours()}:{new Date().getMinutes()}</p>
                        </div>
                    </div>
                    <p>Thunderstorm</p>
                    
                </li>
            ))}
        </ul>
    )
}

export default WidgetList