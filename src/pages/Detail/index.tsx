import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiDownload, BiPlay, BiPlus, BiShareAlt } from 'react-icons/bi'
import { useNavigate, useParams, NavigateProps } from 'react-router-dom'
import Header from '../../components/Header'
import RangeAge from '../../components/RangeAge'
import { apiBaseUrl, apiKey, language, imgOriginal } from '../../util/api'
import MovieItem, {Movie} from '../../components/MovieItem'

import './styles.css'

interface IMovie {
  id: number
  backdrop_path: string
  title: string
  overview: string
  genres: [
    {
      id: number
      name: string
    }
  ]
}

interface ISimilar {
  backdrop_path: string
  id: number
  title: string
  poster_path: string
  overview: string
}

function Detail () {
  const params = useParams()
  

  const [movie, setMovie] = useState<IMovie>({
    id: 0,
    backdrop_path: '',
    overview: '',
    title: '',
    genres: [{id: 0, name: ''}]
  })
  const [random, setRandom] = useState(0)
  

  useEffect(() => {
    axios.get(`${apiBaseUrl}/movie/${params.id}?${apiKey}&${language}`)
      .then(response => {
        setMovie(response.data)
      })
      setRandom(1 + Math.random() * (22 - 1))
  },[])

  

 
  return (
    <div id="detail-home-page">
      <Header />
      <div id='content-detail'>
        

        <img src={imgOriginal+movie.backdrop_path} alt={movie.title} />
        <p className='title-movie'>{movie.title}</p>

       <div id='bottom-gradient'>
         <h1 style={{color: 'transparent'}}>.</h1>
       </div>

        <div className="genres">
          {movie.genres.map(genre => {
            return (
              <span>{genre.name}</span>
              )
          })}
          <p className='quality-screen'>Utra HD 4K</p>
          <RangeAge 
            age={random}
          />
        </div>
        <div id='include-prime'>
        <img 
          className='prime-img-cat'
          src="https://m.media-amazon.com/images/G/01/digital/video/global/prime-logo-large-v4.png" 
          alt="prime video"
        />
        <p className='prime-include-text'>incluido no prime</p>

        </div>
        <button id='button-play'>
          <BiPlay size={40} />
          Assistir
        </button>
        
        <div id="actions-buttons">
          <button className='button-act'>
            <BiPlus size={35} style={{marginTop: 3}} />
            <p className='text-button'>Lista</p>
          </button>
          <button className='button-act'>
            <BiDownload size={35} style={{marginTop: 3}}/>
            <p className='text-button'>Download</p>
          </button>
          <button className='button-act'>
            <BiShareAlt size={35} style={{marginTop: 3}} />
            <p className='text-button'>Compartilhar</p>
          </button>
        </div>
        <div id='overview'>
          <p>{movie.overview}</p>
        </div>
        
      </div>
      {/* <div id='footer'>
          <div id='relation'>
            <h3>Relacionados</h3>
          </div>
          <div id='content'>

          {
            similars.map((similar: Movie) => {
              return (
                <div onClick={() => handleGoDetail(similar.id)}>

                <MovieItem 
                movie={similar}
                key={similar.id}
                />
                </div>
                )
              })
            }
          </div>
      </div> */}
    </div>
  )
}

export default Detail