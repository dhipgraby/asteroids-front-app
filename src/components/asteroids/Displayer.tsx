import { Asteroid } from "@/dto/asteroids.dto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import AsteroidImg from "../../../public/assets/images/asteroid.png"
import Image from "next/image";

interface DisplayerProps {
    asteroid: Asteroid | undefined;
    toggleFavorite: (id: number, favorite: boolean) => void;
    isLoading: boolean;
}

export default function Displayer({
    asteroid,
    toggleFavorite,
    isLoading,
}: DisplayerProps) {

    return (
        <>
            {(asteroid) ?
                <div>
                    <h1 className='text-3xl mb-5'>
                        {asteroid.name}
                        <button
                            onClick={() => toggleFavorite(asteroid.id, asteroid.favorite)}
                            disabled={isLoading}
                        >
                            <FontAwesomeIcon

                                icon={faHeart}
                                className={`${asteroid.favorite ? 'text-red-400' : 'text-white'} ml-3 absolute top-10 right-10 cursor-pointer`} />
                        </button>
                    </h1>
                    <Image className='mb-10 swing' src={AsteroidImg} width={180} height={180} sizes='100%' alt="asteroid.image" />
                    <div className='my-5'>
                        <p className='text-xl text-gray-400'>
                            Discoverd:{new Date(asteroid.discovered).toLocaleDateString()}
                        </p>
                        <p className='text-lg text-gray-300'>
                            Diameter: {asteroid.diameter}</p>
                    </div>
                </div>
                :
                <h1> Selected an asteroid</h1>
            }
        </>
    )
}