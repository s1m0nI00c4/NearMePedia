import { AsyncStorage } from 'react-native';
import { PersistContainer } from 'unstated-persist';

let patch = {data: []}


export default class CContainer extends PersistContainer {


  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
   }


  deleteItem(id) {
    const newData = this.state.data.filter(item => item.pageid !== id);
    this.setState({ data: newData });
    patch = {data: newData}
  }

  addItem(item) {
      if (item.pageid !== 0) {
      var newData = this.state.data
      newData.push(item);
      this.setState({data: newData});
      patch = {data: newData}
      }
  }

  clear() {
    this.setState({data: []})
    patch = {data: []}
  }

  persist = {
        key: 'data',
        version: 1,
        storage: AsyncStorage,
    }

}
