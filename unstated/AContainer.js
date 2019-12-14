import { PersistContainer } from 'unstated-persist';
import {getData} from '../components/WikiAPIHandler'

export default class AContainer extends PersistContainer {

  state = {
    	data: [],
	  }

  saveData = async (coords) => {
    const data = await getData(coords)
    this.setState({data: data})
	}

}
