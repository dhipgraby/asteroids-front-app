export default function SolarSystem() {
    return (
        <div className="solar_system">
            <div className="sun"></div>
            <div className="orbit orbit_mercury">
                <div className="planet mercury"></div>
            </div>
            <div className="orbit orbit_venus">
                <div className="planet venus"></div>
            </div>

            <div className="orbit orbit_earth">
                <div className="planet earth"></div>
                <div className="orbit orbit_moon">
                    <div className="moon"></div>
                </div>
            </div>

            <div className="orbit orbit_mars">
                <div className="planet mars"></div>
            </div>
            <div className="orbit orbit_jupiter">
                <div className="planet jupiter"></div>
            </div>
            <div className="orbit orbit_saturn">
                <div className="planet saturn"></div>
            </div>
            <div className="orbit orbit_uranus">
                <div className="planet uranus"></div>
            </div>
            <div className="orbit orbit_neptune">
                <div className="planet neptune"></div>
            </div>
        </div>
    )
}