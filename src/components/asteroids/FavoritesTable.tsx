import React from 'react';
import { removeFavorite } from '../../helpers/favoritesApi'

interface Asteroid {
  id: number;
  name: string;
  diameter: string;
  discovered: string;
  comment: string;
}

interface FavoritesTableProps {
  favorites: Asteroid[];

}

const FavoritesTable: React.FC<FavoritesTableProps> = ({ favorites }) => {

  const handleRemoveFromFavorites = async (id: number) => {
    const res = await removeFavorite(id);
    console.log(`Removed the id: ${id}, from your favorites.`);
    return res;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 bg-white text-sm dark:divide-gray-700 dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Diameter</th>
            <th>Discovered</th>
            <th>Comment</th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {favorites.length > 0 ? (
            favorites.map((asteroid, index) => (
              <tr key={asteroid.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{asteroid.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{asteroid.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{asteroid.diameter}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{new Date(asteroid.discovered).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{asteroid.comment}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => (handleRemoveFromFavorites(index))}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-xs font-medium rounded text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Remove from Favorites
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center py-4">
                No favorites added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FavoritesTable;
