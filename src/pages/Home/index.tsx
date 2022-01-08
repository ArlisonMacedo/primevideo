import React from 'react'
import Header from '../../components/Header'
import MovieItem from '../../components/MovieItem'
import RecomendationItem from '../../components/RecomendationItem'


import {BiPlay, BiPlus} from 'react-icons/bi'
import {BsInfo} from 'react-icons/bs'

import './styles.css'

function Home () {
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
            <MovieItem />
            <div className='info-category'>
                <img 
                    className='prime-img-cat'
                    src="https://m.media-amazon.com/images/G/01/digital/video/global/prime-logo-large-v4.png" 
                    alt="prime video"
                />
                <p className='text-info'>Filmes recomendados</p>
            </div>
            <RecomendationItem />
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
                <div className='top-10-brasil-text-container'>
                    <p className='top-10-brasil-text-content'>A Roda do Tempo - Temporada 1</p>
                    <p className='text-genre'>Drama, Fantasia, Aventura</p>
                    <span className='age-range'>16</span>
                </div>
                <img  
                    className='top-10-brasil-backdrop-path'
                    src="https://seriemaniacos.tv/wp-content/uploads/2021/10/capa-a-roda-do-tempo.jpg" 
                    alt=""
                />
                <div className='footer-container'>
                    <div className='footer-content'>
                        <button className='button-play'>
                            <BiPlay size={40}/>
                            Reproduzir
                        </button>
                        <button className='button-plus'>
                            <BiPlus size={30} />
                        </button>
                        <button className='button-info'>
                            <BsInfo size={30} />
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home