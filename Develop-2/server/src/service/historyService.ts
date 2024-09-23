import {cities as fs} from 'fs';
import path from 'path';

// TODO: Define a City class with name and id properties
class City {
  constructor(public id: string, public name: string) {}
}
// TODO: Complete the HistoryService class
class HistoryService {
  // TODO: Define a read method that reads from the searchHistory.json file
constructor () {
  this.filePath = path.join(__dirname, 'searchHistory.json');
}
private async read() {}
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
private async write(cities: City[]) {
try {
  const data = await FileSystem.writeFile(this.filePath, JSON.stringify(cities, null, 2), 'utf-8');
  return JSON.parse(data);
} catch(error){
    return [];
  }
}
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  async getCities() {
    return this.read();
  }
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  async addCity(city: string) {
    const cities = await this.getCities(); 
    const newCity = new City(Date.now().toString(), name);
    cities = cities.filter(city => city.id !== id);
    await this.write(cities);
  }
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  async removeCity(id: string) {
    let cities = await this.getCities();
    cities = cities.filter(city => city.id !==id);
    await this.write(cities);
  }
}

export default new HistoryService();
