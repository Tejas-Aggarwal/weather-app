import { Box, Typography, styled } from "@mui/material";
import {LocationOn, SettingsBrightness, Opacity, Brightness5, Brightness6,Dehaze, Cloud} from "@mui/icons-material"


const Row = styled(Typography)({
    padding:10,
    fontSize:20,
    letterSpacing:2,
    '& > svg':{
        marginRight:10
    },
    "@media (max-width: 600px)": {
        fontSize:15,
        padding:2
      },
})

const Error = styled(Typography)({
    color:'blue',
    padding:20,
    margin:50
})

const Information = ({result}) => {
    return(
        result && Object.keys(result).length > 0 ?
        <Box style={{margin:'30px 60px'}}>
            <Row><LocationOn/>Location: {result.name}, {result.sys.country}</Row>
            <Row><SettingsBrightness/>Temperature: {result.main.temp}C</Row>
            <Row><Opacity/>Humidity: {result.main.humidity}</Row>
            <Row><Brightness5/>Sunrise: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}</Row>
            <Row><Brightness6/>Sunset: {new Date(result.sys.sunset * 1000).toLocaleTimeString()}</Row>
            <Row><Dehaze/>Humidity: {result.weather[0].main}</Row>
            <Row><Cloud/>Clouds: {result.clouds.all}%</Row>
        </Box>
        :
        <Error>Please enter the values.</Error>
    )
}

export default Information;