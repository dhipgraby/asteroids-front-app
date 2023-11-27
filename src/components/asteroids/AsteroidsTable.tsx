import React, { useState } from 'react';
import { addFavorite } from '@/helpers/favoritesApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';

interface Asteroid {
    id: number;
    name: string;
    diameter: string;
    discovered: string;
    comment: string;
}

interface AsteroidsState {
    asteroids: Asteroid[];
}

const PAGE_SIZE = 5;

const AsteroidsTable: React.FC<AsteroidsState> = ({ asteroids }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(asteroids.length / PAGE_SIZE);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const selectedAsteroids = asteroids.slice(startIndex, startIndex + PAGE_SIZE);

    const addToFavorites = async (id: number) => {
        const res = await addFavorite(id);
        return res;
    };


    return (
        <div className='container mx-auto'>
            <div className="overflow-x-auto border-slate-600 border-2 rounded-lg">
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
            </div>
            <div className="flex justify-between items-center my-4">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AsteroidsTable;