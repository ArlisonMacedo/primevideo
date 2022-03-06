import axios from 'axios'
import React, { useEffect, useState, useRef} from 'react'
import { BiPlay, BiPlus } from 'react-icons/bi'
import { BsChevronLeft, BsChevronRight, BsInfo } from 'react-icons/bs'
import Header from '../../components/Header'
import MovieItem, { Movie } from '../../components/MovieItem'
import RecomendationItem, { Similar } from '../../components/RecomendationItem'
import { apiBaseUrl, apiKey, imgOriginal, language } from '../../util/api'


import './styles.css'
import { useNavigate } from 'react-router-dom'

interface Tops {
    id: number;
    poster_path: string;
    backdrop_path: string;
    title: string
}

interface SelectedMovie {
    id: number;
    poster_path: string;
    backdrop_path: string;
    title: string
    genres: [
        {
            id: number
            name: string
        }
    ]
    
}


function Home () {

    const navigate = useNavigate()
    const [movies, setMovies] = useState([])
    const [moreMovies, setMoreMovies] = useState([])
    const [similars, setSimilars] = useState([])
    const [similars2, setSimilars2] = useState([])
    const [tops, setTops] = useState<Tops[]>([])
    const [selected, setSelected] = useState<SelectedMovie>({
        id: 0,
        poster_path: '',
        title: '',
        backdrop_path: '',
        genres: [
            {id: 0, name: ''}
        ]
    })
    const [idSelected, setIdSelected] = useState(Number)
    const [isSelected,setIsSelected] = useState<Boolean>(false)
    
    const ref = useRef()

    useEffect(() => {
        axios.get(`${apiBaseUrl}movie/popular?${apiKey}&${language}&page=6`)
            .then(response => {
                setMovies(response.data.results)
            })
    },[])

    useEffect(() => {
        axios.get(`${apiBaseUrl}movie/popular?${apiKey}&${language}&page=3`)
            .then(response => {
                setMoreMovies(response.data.results)
            })
    },[])
    
    useEffect(() => {
        axios.get(`${apiBaseUrl}movie/popular?${apiKey}&${language}&page=1`)
            .then(response => {
                setSimilars(response.data.results)
                
            })
    },[])

    useEffect(() => {
        axios.get(`${apiBaseUrl}movie/popular?${apiKey}&${language}&page=2`)
            .then(response => {
                setSimilars2(response.data.results)
                
            })
    },[])

    useEffect(() => {
        axios.get(`${apiBaseUrl}movie/popular?${apiKey}&${language}&page=8`)
            .then(response => {
                setTops(response.data.results)
                const obj = {...tops[0]}
                setIdSelected(obj.id)
                
            }) 
            
    },[idSelected !== 0])

    useEffect(() => {
        axios.get(`${apiBaseUrl}movie/${idSelected}?${apiKey}&${language}`)
            .then(response => {
                setSelected(response.data)
            })
    },[idSelected])
    


    function selectedMovie (id: number) {
        
        
        axios.get(`${apiBaseUrl}movie/${id}?${apiKey}&${language}`)
            .then(response => {
                setSelected(response.data)
                setIsSelected(!isSelected)
                
            })  
    }


    function handleGoDetail (id: number) {
        navigate(`/movie/${id}`)
    }

    return (
        <div className='home-page'>
            
            <Header />
            <div className='content'></div>
            <div className='info-category'>
                <img 
                    className='prime-img-cat'
                    src="https://m.media-amazon.com/images/G/01/digital/video/global/prime-logo-large-v4.png" 
                    alt="prime video"
                />
                <p className='text-info'>Amazon Originals e exclusivos</p>
            </div>

            <div className='movie-item-component' id='movie-item-component'>
                <div className='left-button-container'>
                    <button id='left-button-action'>
                        <BsChevronLeft  size={40} color='#f2f2f2' />
                    </button>
                </div>
                <div className='right-button-container'>
                    <button id='right-button-action'>
                        <BsChevronRight  size={40} color='#f2f2f2' />
                    </button>
                </div>
            {
                movies.map((movie: Movie) => {
                    return (
                        <MovieItem 
                            key={movie.id}
                            movie={movie}
                        />
                    )
                })
            }
            </div>

            <div className='info-category'>
                <img 
                    className='prime-img-cat'
                    src="https://m.media-amazon.com/images/G/01/digital/video/global/prime-logo-large-v4.png" 
                    alt="prime video"
                />
                <p className='text-info'>Filmes recomendados</p>
            </div>
            <div className='movie-item-component-recomendation'>
                <div className='more-item-row'>
                {similars.map((similar: Similar) => {
                        return (
                            <RecomendationItem
                                key={similar.id}
                                similar={similar}
                            />
                         )
                    })
                    
                } 
                </div>

                <div className='more-item-row'>
                    {similars2.map((similar: Similar) => {
                            return (
                                <RecomendationItem
                                    key={similar.id}
                                    similar={similar}
                                />
                            )
                        })
                        
                    } 
                </div>
            </div>
                
                
            <div className='info-category'>
                <p className='text-info'>Prime video channels</p>
            </div>
            <div className='prime-video-channels'>
                <div className='prime-video-ch-content'>
                        <img 
                            className='prime-video-ch-thumbnail'
                            src="https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/m-r/premierefcbr/heroes/web_featured-offer-tile_920x400._CB645447009_UR920,400_SX1840_FMwebp_.jpg" 
                            alt="prime video channel"
                        />
                </div>
                <div className='prime-video-ch-content'>
                        <img 
                            className='prime-video-ch-thumbnail'
                            src="https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/s-z/starzplaybr/heroes/web_featured-offer-tile_920x400._CB409090275_UR920,400_SX1840_FMwebp_.jpg" 
                            alt="prime video channel"
                        />
                </div>
                <div className='prime-video-ch-content'>
                        <img 
                            className='prime-video-ch-thumbnail'
                            src="https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/m-r/paramountplusbr/heroes/web_featured-offer-tile_920x400._CB656576242_UR920,400_SX1840_FMwebp_.jpg" 
                            alt="prime video channel"
                        />
                </div>
                <div className='prime-video-ch-content'>
                        <img 
                            className='prime-video-ch-thumbnail'
                            src="https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/m-r/mgmbr/heroes/web_featured-offer-tile_920x400._CB408353128_UR920,400_SX1840_FMwebp_.jpg" 
                            alt="prime video channel"
                        />
                </div>
                <div className='prime-video-ch-content'>
                        <img 
                            className='prime-video-ch-thumbnail'
                            src="https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/g-l/lookebr/heroes/web_featured-offer-tile_920x400._CB406831712_UR920,400_SX1840_FMwebp_.jpg" 
                            alt="prime video channel"
                        />
                </div>
                <div className='prime-video-ch-content'>
                        <img 
                            className='prime-video-ch-thumbnail'
                            src="https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/m-r/nogginbr/heroes/web_featured-offer-tile_920x400._CB427950055_UR920,400_SX1840_FMwebp_.jpg" 
                            alt="prime video channel"
                        />
                </div>
                <div className='prime-video-ch-content'>
                        <img 
                            className='prime-video-ch-thumbnail'
                            src="https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/g-l/lovenaturebr/heroes/web_featured-offer-tile_920x400._CB657099696_UR920,400_SX1840_FMwebp_.jpg" 
                            alt="prime video channel"
                        />
                </div>
                <div className='prime-video-ch-content'>
                        <img 
                            className='prime-video-ch-thumbnail'
                            src="https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/s-z/stingraybr/heroes/web_featured-offer-tile_920x400._CB663195016_UR920,400_SX1840_FMwebp_.jpg" 
                            alt="prime video channel"
                        />
                </div>
            </div>


            <div className='top-10-brasil'>
            <div className='info-category'>
                <img 
                    className='prime-img-cat'
                    src="https://m.media-amazon.com/images/G/01/digital/video/global/prime-logo-large-v4.png" 
                    alt="prime video"
                /> {"\n"}
            <p className='text-info'>Top 10 no Brasil</p>
            </div>
                    {!isSelected &&(
                        <>
                        <div className='top-10-brasil-text-container'>
                            <p className='top-10-brasil-text-content'>{selected.title}</p>
                            <div className='genres'>
                        {
                            selected.genres.map(sele => {
                                return (
                                    
                                        <p className='text-genre'>{sele.name}</p>
                                        )
                                    })
                                }
                                </div>
                            
                        </div>

                        <img  
                            className='top-10-brasil-backdrop-path'
                            src={imgOriginal+selected.backdrop_path} 
                            alt=""
                        />
                        </>
                    )}
                    
                {isSelected && (
                    <>
                    <div className='top-10-brasil-text-container'>
                        <p className='top-10-brasil-text-content'>{selected.title}</p>

                        <div className='genres'>
                        {
                            selected.genres.map(sele => {
                                return (
                                    
                                        <p className='text-genre'>{sele.name}</p>
                                        )
                                    })
                                }
                                </div>
                        
                    </div>

                    <img  
                        className='top-10-brasil-backdrop-path'
                        src={imgOriginal+selected.backdrop_path} 
                        alt=""
                    />
                </>
                
                )}
                
                
                <div className='footer-container'>
                    <div className='footer-content'>
                        <button className='button-play'>
                            <BiPlay size={40}/>
                            Reproduzir
                        </button>
                        <button className='button-plus'>
                            <BiPlus size={30} />
                        </button>
                        <button className='button-info' onClick={ () => handleGoDetail(selected.id)}>
                            <BsInfo size={30} />
                        </button>
                    </div>
                </div>
                <div className='more-top-10-container'>
                        {
                            
                           tops?.map(top => {
                               
                               
                               
                               return (
                                   
                                   <div className='more-top-10-content' key={top.id}
                                    onClick={() => {selectedMovie(top.id)}}
                                    
                                   >

                                        <h1 className='more-top-10-text'>
                                            1
                                        </h1>
                                       
                                               
                                   
                                        <img  className='prime-include'
                                        src="https://m.media-amazon.com/images/G/01/digital/video/web/cues/v3/prime.svg" 
                                        alt="prime video" 
                                        />
                                            
                                            <img 
                                            
                                            className='more-top-10-thumbnail'
                                            src={imgOriginal+top.poster_path} 
                                            alt="" 
                                            />
                                        
                                       
                                </div>
                            
                               )
                              
                           }) 
                           
                        }
                </div>
            </div>

            

            <div className='more-movies'>
            <div className='info-category'>
                <img 
                    className='prime-img-cat'
                    src="https://m.media-amazon.com/images/G/01/digital/video/global/prime-logo-large-v4.png" 
                    alt="prime video"
                />
                <p className='text-info'>Amazon Mais Filmes</p>
            </div>
            <div className='movie-item-component'>
                {
                    moreMovies.map((movie: Movie) => {
                        return (
                            <MovieItem 
                                key={movie.id}
                                movie={movie}
                            />
                        )
                    })
                }
            </div>
            </div>

        </div>
    )
}


export default Home