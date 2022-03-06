import React, { useEffect, useState } from "react";
import './styles.css'

interface IRangeAge {
  age: number
}

const RangeAge: React.FC<IRangeAge> = ({age}) => {
  
  const [avaliable, setAvalieble] = useState(0)
  useEffect(() => {
    setAvalieble(age)
  },[age])

  return (
    <div id="range-age-component">
      {
        avaliable < 10 && (
          <>
            <div style={{backgroundColor: 'green', paddingLeft: 4, paddingRight: 4 ,borderRadius: 2}}>
              <p>L</p>
            </div>
          </>
        )
      }
      {
        avaliable >= 10 && avaliable < 12 && (
          <>
            <div style={{backgroundColor: '#5FABD4', paddingLeft: 4, paddingRight: 4, borderRadius: 2}}>
              <p>10</p>
            </div>
          </>
        )
      }
      {
        avaliable >= 12 && avaliable < 14 && (
          <>
            <div style={{backgroundColor: '#F5EC47', paddingLeft: 4, paddingRight: 4, borderRadius: 2}}>
              <p>12</p>
            </div>
          </>
        )
      }
      {
        avaliable >= 14 && avaliable < 16 && (
          <>
            <div style={{backgroundColor: '#FA6E2E', paddingLeft: 4, paddingRight: 4, borderRadius: 2}}>
              <p>14</p>
            </div>
          </>
        )
      }
      {
        avaliable >= 16 && avaliable < 18 && (
          <>
            <div style={{backgroundColor: '#FA241B', paddingLeft: 4, paddingRight: 4, borderRadius: 2}}>
              <p>16</p>
            </div>
          </>
        )
      }
      {
        avaliable >= 18 && (
          <>
            <div style={{backgroundColor: 'black', paddingLeft: 4, paddingRight: 4, borderRadius: 2}}>
              <p>18</p>
            </div>
          </>
        )
      }
    </div>
  )
}

export default RangeAge