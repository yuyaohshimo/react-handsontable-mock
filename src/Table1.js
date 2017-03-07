import React, {Component} from 'react';
import numbro from 'numbro';
import moment from 'moment';
import pikaday from 'pikaday';
import Zeroclipboard from 'zeroclipboard';
import Handsontable from 'handsontable';

class Table1 extends Component {
  componentDidMount() {
    if (!this.hot) {
      this.hot = new Handsontable(this._hotWrapper, {
        data: [
          ['', 'Kia', 'Nissan', 'Toyota', 'Honda', 'Mazda', 'Ford'],
          ['2012', 10, 11, 12, 13, 15, 16],
          ['2013', 10, 11, 12, 13, 15, 16],
          ['2014', 10, 11, 12, 13, 15, 16],
          ['2015', 10, 11, 12, 13, 15, 16],
          ['2016', 10, 11, 12, 13, 15, 16]
        ],
        width: 400,
        height: 400,
      });
    }
  }

  render() {
    return <div>
    <div>Handsontable</div>
    <div ref={(c) => this._hotWrapper = c}></div>
    </div>;
  }
}

export default Table1;
