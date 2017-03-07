import React from 'react';
import ReactDOM from 'react-dom';

// ... Handsontable with its main dependencies...
import moment from 'moment';
import numbro from 'numbro';
import pikaday from 'pikaday';
import Zeroclipboard from 'zeroclipboard';
import Handsontable from 'handsontable';

// ... and HotTable
import HotTable from 'react-handsontable';

export default class Table2 extends React.Component {
  constructor(props) {
    super(props);
    this.handsontableData = [
      ['', '', '', ''],
      [],
      []
    ];
    this.colHeaders = ['Last Name', 'First Name', 'Email', 'Role']
    this.handsontableColumns = [
      {},
      {},
      {},
      {
        editor: 'select',
        selectOptions: ['Administrator', 'General Staff', 'Developer']
      }
    ]
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log(this.refs)
    const exportPlugin = this.refs.table2.hotInstance.getPlugin('exportFile');
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
      <div id="example-component">
        <HotTable ref="table2" root="table2" settings={{
          data: this.handsontableData,
          colHeaders: this.colHeaders,
          columns: this.handsontableColumns,
          rowHeaders: true,
          currentRowClassName: 'currentRow',
          currentColClassName: 'currentCol',
          width: 600,
          height: 300,
          stretchH: 'all'
        }} />
        <p>*Export feature works on Pro edition</p>
        <button onClick={this.onClick}>export</button>
      </div>
    );
  }
}
