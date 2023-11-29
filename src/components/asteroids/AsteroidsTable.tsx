import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';
import { asteroidsStore } from '@/stores/asteroids.store';
import PaginationButtons from './PaginationButtons';
import usePagination from '@/hooks/usePagination';
import TableBody from './TableBody';

const PAGE_SIZE = 8;

const AsteroidsTable: React.FC = () => {

    const [isLoading, setIsLoading] = useState(false)
    const asteroidsState = asteroidsStore((state) => state)
    const asteroids = asteroidsState.asteroids
    const addToFavorites = asteroidsState.addToFavorites
    const removeFavorite = asteroidsState.removeFavorite
    const userFavorites = asteroidsState.userFavorites

    const {
        selectedAsteroids,
        setCurrentPage,
        currentPage,
        totalPages
    } = usePagination(asteroids, PAGE_SIZE)

    function toggleFavorite(id: number, isFavorite: boolean) {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)

        return isFavorite ? removeFavorite(id) : addToFavorites(id)
    }

    return (
        <div className='container mx-auto flex'>
            <div className='w-1/2'>
                <div className='ta-l mb-4 flex'>
                    <div className='w-1/2'>
                        <p>
                            Results found: {asteroids.length}
                        </p>
                    </div>
                    <div className='w-1/2 ta-r'>
                        <p>
                            Total favorites: {userFavorites.length} <FontAwesomeIcon icon={faHeart} className={'text-red-400 ml-2'} />
                        </p>
                    </div>
                </div>
                <TableBody
                    selectedAsteroids={selectedAsteroids}
                    isLoading={isLoading}
                    toggleFavorite={toggleFavorite}

                />

                {asteroids.length > 0 &&
                    <PaginationButtons
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        totalPages={totalPages}
                    />
                }
            </div>
            <div className='w-1/2'>

            </div>


        </div>
    );
};

export default AsteroidsTable;