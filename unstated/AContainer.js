import { Container } from 'unstated';
import {getData} from '../components/WikiAPIHandler';
import { AsyncStorage } from 'react-native';

export default class AContainer extends Container {

  state = {
    	data: [],
	  }

  saveData = async (coords) => {
    const data = await getData(coords)
    this.setState({data: data})
	}

  /*persist = {
    key: 'data',
    version: 1,
    storage: AsyncStorage,
  }*/

}
