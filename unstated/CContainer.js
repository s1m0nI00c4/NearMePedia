import { AsyncStorage } from 'react-native';
import { PersistContainer } from 'unstated-persist';

let patch = {readinglist: []}


export default class CContainer extends PersistContainer {


  constructor(props) {
    super(props);
    this.state = {
      readinglist: [],
    }
   }


  deleteItem(id) {
    const newData = this.state.readinglist.filter(item => item.pageid !== id);
    this.setState({ readinglist: newData });
    patch = {readinglist: newData}
  }

  addItem(item) {
      if (item.pageid !== 0) {
      var newData = this.state.readinglist
      newData.push(item);
      this.setState({readinglist: newData});
      patch = {readinglist: newData}
      }
  }

  clear() {
    this.setState({readinglist: []})
    patch = {readinglist: []}
  }

  persist = {
        key: 'readinglist',
        version: 1,
        storage: AsyncStorage,
    }

}
