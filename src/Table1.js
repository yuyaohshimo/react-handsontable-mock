import React, {Component} from 'react';
import numbro from 'numbro';
import moment from 'moment';
import pikaday from 'pikaday';
import Zeroclipboard from 'zeroclipboard';
import Handsontable from 'handsontable';

class Table1 extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

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

  onClick() {
    const exportPlugin = this.hot.getPlugin('exportFile');
    // Export as a string:
    exportPlugin.exportAsString('csv');

    // Export as a Blob object:
    exportPlugin.exportAsBlob('csv');

    // Export to downloadable file (MyFile.csv):
    exportPlugin.downloadFile('csv', {filename: 'MyFile'});

    // Export as a string (specified data range):
    exportPlugin.exportAsString('csv', {
      exportHiddenRows: true,     // default false
      exportHiddenColumns: true,  // default false
      columnHeaders: true,        // default false
      rowHeaders: true,           // default false
      columnDelimiter: ';',       // default ','
      range: [1, 1, 6, 6]         // [startRow, endRow, startColumn, endColumn]
    });
  }

  render() {
    return (
      <div>
        <div>Handsontable</div>
        <div ref={(c) => this._hotWrapper = c}></div>
        <p>*Export feature works on Pro edition</p>
        <button onClick={this.onClick}>export</button>
      </div>
    )
  }

}

export default Table1;
