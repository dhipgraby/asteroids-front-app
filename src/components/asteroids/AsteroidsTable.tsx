import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import PaginationButtons from './PaginationButtons';
import TableBody from './TableBody';
import Displayer from './Displayer';
import useTable from '@/hooks/useTable';


const AsteroidsTable = ({ AsteroidType }: { AsteroidType: 'system' | 'user' }) => {

    const {
        isLoading,
        toggleFavorite,
        asteroids,
        userFavorites,
        selectedAsteroid,
        setSelectedAsteroid,
        selectedAsteroids,
        setCurrentPage,
        currentPage,
        totalPages
    } = useTable(AsteroidType)

    return (
        <div className='container mx-auto lg:flex lg:flex-row md:block'>
            <div className='lg:w-1/2 sm:w-full mb-10'>
                <div className='ta-l mb-4 flex'>
                    <div className='w-1/2 md:w-1/1'>
                        {AsteroidType == 'system' &&
                            <p>
                                Results found: {asteroids.length}
                            </p>
                        }

                    </div>
                    <div className='w-1/2 md:w-1/1 ta-r'>
                        <p>
                            Total favorites: {userFavorites.length} <FontAwesomeIcon icon={faHeart} className={'text-red-400 ml-2'} />
                        </p>
                    </div>
                </div>
                <TableBody
                    setSelectedAsteroid={setSelectedAsteroid}
                    selectedAsteroids={selectedAsteroids}
                    isLoading={isLoading}
                    toggleFavorite={toggleFavorite}

                />

                {AsteroidType == 'system' ?
                    asteroids.length > 0 &&
                    <PaginationButtons
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        totalPages={totalPages}
                    /> :
                    userFavorites.length > 0 &&
                    <PaginationButtons
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        totalPages={totalPages}
                    />
                }

            </div>
            <div className='lg:w-1/2 sm:w-full ta-c valign-middle relative'>
                <Displayer asteroid={selectedAsteroid} isLoading={isLoading} toggleFavorite={toggleFavorite} />
            </div>
        </div>
    );
};

export default AsteroidsTable;