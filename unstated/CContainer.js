import { PersistContainer } from 'unstated-persist'
import {_getPositionAsync} from '../components/GMapsAPIHandler';

let patch = {data: []}


export default class CContainer extends PersistContainer {

  constructor(props) {
    super(props);
    console.log("initial state of Container is: " + JSON.stringify(patch))
    this.state = patch;
   }

  deleteItem(id) {
    console.log("before deletion")
    const newData = this.state.data.filter(item => item.pageid !== id);
    console.log("New data is: " + JSON.stringify(newData))
    this.setState({ data: newData });
    patch = {data: newData}
  }

  addItem(item) {
      if (item.pageid !== 0) {
      var newData = this.state.data
      console.log("adding " + JSON.stringify(item) + " to " + JSON.stringify(newData))
      newData.push(item);
      this.setState({data: newData});
      patch = {data: newData}
      }
  }

  clear() {
    this.setState({data: []})
    patch = {data: []}
  }

}
