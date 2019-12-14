import { PersistContainer } from 'unstated-persist';
import {_getPositionAsync} from '../components/GMapsAPIHandler';

export default class BContainer extends PersistContainer {
  state = {
      gscoord: []
    };

  onSubmit = async coords => {
    try {
      //get the address
      const addr = await _getPositionAsync(coords)
      //add the address to the existing coordinates
      coords.address = addr
      //check if the address is already in the array of coordinates
      var newGscoord = this.state.gscoord;
      var test = newGscoord.filter(item => item.latitude === coords.latitude)
      if (test.length === 0) {
      newGscoord.push(coords);
      this.setState({gscoord: newGscoord});
      } 
    } catch(error) {
      console.log(error.message)
    }
   }

  deletePosition = address => {
    const newGscoord = this.state.gscoord.filter( item => item.address !== address)
    this.setState({gscoord: newGscoord})
   }
}
