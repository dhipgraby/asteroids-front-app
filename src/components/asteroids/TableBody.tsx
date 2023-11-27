import { Asteroid } from "@/dto/asteroids.dto"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface TableProps {
    selectedAsteroids: Asteroid[];
    isLoading: boolean;
    toggleFavorite: (id: number, favorite: boolean) => void
}

export default function TableBody({
    selectedAsteroids,
    isLoading,
    toggleFavorite
}: TableProps) {

    return (
        <div className="overflow-x-auto border-slate-600 border-2 rounded-lg p-3">

            {selectedAsteroids.length > 0 ?
                <table className="bg-main-300 asteroidTable">
                    <thead className="bg-main p-3 dark:bg-gray-800">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Diameter</th>
                            <th>Discovered</th>
                            <th>Comment</th>
                            <th className="px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody className='bg-main'>
                        {selectedAsteroids.map((asteroid: any) => (
                            <tr key={asteroid.id}>
                                <td>{asteroid.id}</td>
                                <td>{asteroid.name}</td>
                                <td>{asteroid.diameter}</td>
                                <td>{new Date(asteroid.discovered).toLocaleDateString()}</td>
                                <td>{asteroid.comment}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button
                                        disabled={isLoading}
                                        onClick={() => toggleFavorite(asteroid.id, asteroid.favorite)}
                                        className={`${!isLoading ? "btn-primary" : "btn-secondary"} `}
                                    >
                                        <FontAwesomeIcon icon={faHeart} className={`${asteroid.favorite ? 'text-red-400' : 'text-white'}`} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                :
                <h1> No asteroids found!</h1>
            }
        </div>
    )

}