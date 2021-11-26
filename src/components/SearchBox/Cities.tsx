import React from 'react'

const Cities: React.FC = (): JSX.Element => {
    const cities = ["Turku", "Helsinki", "Oulu"]
    return (
        <div className='list_container'>
            <ul className="cities_ul">
                {cities.map(city => (
                    <li key={city}>
                        <p>{city}</p>
                        <button>Add +</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Cities