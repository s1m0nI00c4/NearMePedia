import { AsyncStorage } from 'react-native';
import { PersistContainer } from 'unstated-persist';

/*let patch = {readinglist: []}*/


export default class CContainer extends PersistContainer {

    state = {readinglist: []}

  deleteItem(id) {
    const newData = this.state.readinglist.filter(item => item.pageid !== id);
    this.setState({ readinglist: newData });
    /*patch = {readinglist: newData}*/
  }

  addItem = async (item) => {
      if (item.pageid !== 0) {
      var newData = this.state.readinglist;
      console.log(JSON.stringify(newData))
      newData.push(item);
      console.log(JSON.stringify(newData))
      await this.setState({readinglist: newData});
      console.log(JSON.stringify(this.state.readinglist))
      //patch = {readinglist: newData}
      }
  }

  clear() {
    this.setState({readinglist: []})
    //patch = {readinglist: []}
  }

  persist = {
        key: 'readinglist',
        version: 1,
        storage: AsyncStorage,
    }

}
