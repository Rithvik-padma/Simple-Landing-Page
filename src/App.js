import './App.css';
import Header from './components/Header.js'
import Design from './components/Design.js'
import SearchBox from './components/SearchBox.js'
import {useState, useEffect} from 'react'

function App() {
  const professionData =
  {professions : [
    'Corporate Finance',
    'Financial Planning',
    'Banking',
    'Accounting',
    'Investment',
    'Insurance',
    'Marketing',
    'Product Management',
    'Operations',
    'Strategy',
    'IT',
    'Software Development',
    'Business Doctors',
  ]}
  const [cities, setCity] = useState()
  const [cityValue, setCityValue] = useState('')
  const [cityList, setCityList] = useState('')
  const expertise =  useState(professionData.professions)
  const [jobValue, setJobValue] = useState('')
  
  useEffect(()=>{api()},[])
  
    const api = async ()=>{
      await fetch('https://countriesnow.space/api/v0.1/countries').then((response)=>response.json()).then((countriesData)=>{var countData = countriesData.data.filter((countryData)=>countryData.country === "India"); setCityList(countData[0].cities);  setCity(countData[0].cities)})
    }

    const selectCity = (e)=>{
      setCityValue(e.target.textContent)
    }

    const changeCity = (e)=>{
      setCity(cityList?.filter((city)=>city.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1))
      setCityValue(e.target.value)
    }

    const selectJob = (e)=>{
      setJobValue(e.target.textContent)
    }

    const changeJob = (e)=>{
      setJobValue(e.target.value)
    }

  return (
    <>
    <Header/>
    <Design/>
    <SearchBox cities = {cities} selectCity={selectCity} cityValue={cityValue} changeCity={changeCity} jobs = {expertise} selectJob = {selectJob} jobValue={jobValue} changeJob={changeJob}/>
    </>
  );
}

export default App;
