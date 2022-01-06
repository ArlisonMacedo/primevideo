import React from 'react'
import Header from '../../components/Header'
import MovieItem from '../../components/MovieItem'

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
        </div>
    )
}

export default Home