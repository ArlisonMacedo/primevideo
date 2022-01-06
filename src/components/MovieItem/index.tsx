import React from 'react'


import  './styles.css'


function onDetailData () {
    console.log('Clicou')
}

function MovieItem () {
    return (
        <div id='container-movie-item'>
            <div className='content'>
                <div className='data-content' onClick={onDetailData} >
                    <img 
                        className='thumbnail-content'
                        src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/1fb6799fa710b4bdeda90a30dc08930b54b553b77984d0f4d33ca3d6ec6d80b6._UR300,300_BL99_UR667,375_CLs%7C667,375%7C/1fb6799fa710b4bdeda90a30dc08930b54b553b77984d0f4d33ca3d6ec6d80b6.jpg%7C0,0,667,375+0,0,667,375_._SX356_FMwebp_.jpg" 
                        alt="prime video"
                    />
                </div>
            </div>
            <div className='content'>
                <div className='data-content'>
                    <img 
                        className='thumbnail-content'
                        src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/1fb6799fa710b4bdeda90a30dc08930b54b553b77984d0f4d33ca3d6ec6d80b6._UR300,300_BL99_UR667,375_CLs%7C667,375%7C/1fb6799fa710b4bdeda90a30dc08930b54b553b77984d0f4d33ca3d6ec6d80b6.jpg%7C0,0,667,375+0,0,667,375_._SX356_FMwebp_.jpg" 
                        alt="prime video"
                    />
                </div>
            </div>
            <div className='content'>
                <div className='data-content'>
                    <img 
                        className='thumbnail-content'
                        src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/1fb6799fa710b4bdeda90a30dc08930b54b553b77984d0f4d33ca3d6ec6d80b6._UR300,300_BL99_UR667,375_CLs%7C667,375%7C/1fb6799fa710b4bdeda90a30dc08930b54b553b77984d0f4d33ca3d6ec6d80b6.jpg%7C0,0,667,375+0,0,667,375_._SX356_FMwebp_.jpg" 
                        alt="prime video"
                    />
                </div>
            </div>
            <div className='content'>
                <div className='data-content'>
                    <img 
                        className='thumbnail-content'
                        src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/1fb6799fa710b4bdeda90a30dc08930b54b553b77984d0f4d33ca3d6ec6d80b6._UR300,300_BL99_UR667,375_CLs%7C667,375%7C/1fb6799fa710b4bdeda90a30dc08930b54b553b77984d0f4d33ca3d6ec6d80b6.jpg%7C0,0,667,375+0,0,667,375_._SX356_FMwebp_.jpg" 
                        alt="prime video"
                    />
                </div>
            </div>
            <div className='content'>
                <div className='data-content'>
                    <img 
                        className='thumbnail-content'
                        src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/1fb6799fa710b4bdeda90a30dc08930b54b553b77984d0f4d33ca3d6ec6d80b6._UR300,300_BL99_UR667,375_CLs%7C667,375%7C/1fb6799fa710b4bdeda90a30dc08930b54b553b77984d0f4d33ca3d6ec6d80b6.jpg%7C0,0,667,375+0,0,667,375_._SX356_FMwebp_.jpg" 
                        alt="prime video"
                    />
                </div>
            </div>
            <div className='content'>
                <div className='data-content'>
                    <img 
                        className='thumbnail-content'
                        src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/1fb6799fa710b4bdeda90a30dc08930b54b553b77984d0f4d33ca3d6ec6d80b6._UR300,300_BL99_UR667,375_CLs%7C667,375%7C/1fb6799fa710b4bdeda90a30dc08930b54b553b77984d0f4d33ca3d6ec6d80b6.jpg%7C0,0,667,375+0,0,667,375_._SX356_FMwebp_.jpg" 
                        alt="prime video"
                    />
                </div>
            </div>
        </div>
    )
}

export default MovieItem