import React from 'react'

const Widget: React.FC = (): JSX.Element => {
    const cities = ["Turku", "Helsinki", "Oulu"]
    return (
        <div className="grid">
            {cities.map(city => {
                <div className="card">
                    <p>cities</p>
                </div>
            })}
        </div>
    )
}
export default Widget