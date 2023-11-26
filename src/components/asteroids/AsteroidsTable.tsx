import React, { useState } from 'react';
import { addFavorite } from '@/helpers/favoritesApi';

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

    const addToFavorites = async ( id: number ) => {
        const res = await addFavorite(id);
        console.log("Added to favorites:", id, res);
        return res;
    };


    return (
        <div className='container mx-auto'>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 bg-white text-sm dark:divide-gray-700 dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-gray-100 dark:bg-gray-800">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Diameter</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Discovered</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Comment</th>
                            <th className="px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                        {selectedAsteroids.map((asteroid) => (
                            <tr key={asteroid.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{asteroid.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{asteroid.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{asteroid.diameter}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{new Date(asteroid.discovered).toLocaleDateString()}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{asteroid.comment}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button
                                        onClick={() => addToFavorites(asteroid.id)}
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-xs font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Add to Favorites
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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
        </div>
    );
};

export default AsteroidsTable;