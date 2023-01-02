import React from 'react'
import List from './List.js'

const SearchBox = ({cities, selectCity, cityValue, changeCity, jobs, selectJob, changeJob, jobValue}) => {

  const focus = (e)=>{
    e.target.nextSibling.classList.add('appear')
  }

  const blur = (e)=>{
    setTimeout(()=>e.target.nextSibling.classList.remove('appear'),200)
  }

  return (
      <div className="container">
        <form autoComplete='off'>
            <div className='city'>
                <label htmlFor="city">Enter the city</label>
                <input type="search" name="city" id="city" onFocus={(e)=>focus(e)} onBlur={(e)=>blur(e)} value={cityValue} onInput={(e)=>changeCity(e)} required/>
                <ul className='showListCity'>
                  {cities?.map((city, i)=><List key={i} Item={city} select={selectCity}/>)}
                </ul>
            </div>
            <div className="job">
                <label htmlFor="job">Expertise/Profession</label>
                <input type="search" name='job' id='job' onFocus={(e)=>focus(e)} onBlur={(e)=>blur(e)} value={jobValue} onInput={(e)=>changeJob(e)} required/>
                <ul className="showListJobs">
                  {jobs?.map((job, i)=><List key={i} Item={job} select={selectJob}/>)}
                </ul>
            </div>
            <input type="submit" id='submit' value='Search' />
        </form>
      </div>
  )
}

export default SearchBox
