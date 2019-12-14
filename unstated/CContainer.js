import { PersistContainer } from 'unstated-persist';
import {_getPositionAsync} from '../components/GMapsAPIHandler';

export default class CContainer extends PersistContainer {
  state = {
    	data: [],
	  }

  deleteItem(id) {
    const newData = this.state.data.filter(item => item.pageid !== id);
    this.setState({ data: newData });
  }

  addItem = (item) => {
    item.pageid===0 ? null: this.setState({data: [{pageid: item.pageid, title: item.title, dist: item.dist , url: item.url}]})
  }

}
