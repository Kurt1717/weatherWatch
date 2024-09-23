import { Router } from 'express';
import weatherService from '../../service/weatherService';
import historyService from '../../service/historyService';
const router = Router();

// import HistoryService from '../../service/historyService.js';
// import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', (req, res) => {
  // TODO: GET weather data from city name
  // TODO: save city to search history
  const {city} = req.body;
  if(!city) {
    return res.sttaus(400).json({ error: `City name is required`});
  }
  const weatherData = await weatherService.getWeather(city);

  await historyService.addCityToHistory(city);


});

// TODO: GET search history
router.get('/history', async (req, res) => {
try{
  const history = await historyService.getHistory();
  return resizeBy.json(history);
} catch(error){
    return resizeBy.status(500).json({error: `Error fetching search history`});
  }
}
);

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req, res) => {});

export default router;
