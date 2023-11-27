import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';
import { asteroidsStore } from '@/stores/asteroids.store';
import PaginationButtons from './PaginationButtons';
import usePagination from '@/hooks/usePagination';

const PAGE_SIZE = 8;

const AsteroidsTable: React.FC = () => {

    const asteroids = asteroidsStore((state) => state.asteroids)
    const addToFavorites = asteroidsStore((state) => state.addToFavorites)

    const {
        selectedAsteroids,
        setCurrentPage,
        currentPage,
        totalPages
    } = usePagination(asteroids, PAGE_SIZE)

    return (
        <div className='container mx-auto'>
            <div className='ta-l mb-4'>
                <p>
                    Results found: {asteroids.length}
                </p>
            </div>
            <div className="overflow-x-auto border-slate-600 border-2 rounded-lg p-3">

                {asteroids.length > 0 ?
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
                            {selectedAsteroids.map((asteroid) => (
                                <tr key={asteroid.id}>
                                    <td>{asteroid.id}</td>
                                    <td>{asteroid.name}</td>
                                    <td>{asteroid.diameter}</td>
                                    <td>{new Date(asteroid.discovered).toLocaleDateString()}</td>
                                    <td>{asteroid.comment}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button
                                            onClick={() => addToFavorites(asteroid.id)}
                                            className="btn-primary"
                                        >
                                            <FontAwesomeIcon icon={faHeart} className='text-red-400' />
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
            {asteroids.length > 0 &&
                <PaginationButtons
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    totalPages={totalPages}
                />
            }

        </div>
    );
};

export default AsteroidsTable;