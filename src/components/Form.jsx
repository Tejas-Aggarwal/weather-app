import {Box, InputBase, Button, styled} from '@mui/material'
import {useState} from 'react'
import { getWeather } from '../services/api'

const Container = styled(Box)({
    backgroundImage: 'linear-gradient( 111.4deg,  rgba(7,7,9,1) 6.5%, rgba(27,24,113,1) 93.2% )',
    padding:10
})

const Input = styled(InputBase)({
    marginRight:20,
    fontSize:18
})



const Form = ({setResult}) => {

    const [data,setData] = useState({city:'', country:''});

    const handleChange = (e) =>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const getWeatherInfo = async () => {
       let response = await getWeather(data.city,data.country);
       setResult(response);
    }
    return(
        <Container>
            <Input style={{color:'white'}} placeholder="City" onChange={(e)=>handleChange(e)} name="city"/>
            <Input style={{color:'white'}} placeholder="Country" onChange={(e)=>handleChange(e)} name="country"/>
            <Button variant="contained" onClick={()=>getWeatherInfo()}>Get Weather</Button>
        </Container>
    )
}

export default Form;