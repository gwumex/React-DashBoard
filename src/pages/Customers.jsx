import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Sort, Page, ExcelExport, PdfExport, Edit, Inject, Selection, Toolbar, Filter} from '@syncfusion/ej2-react-grids'

import {customersData, customersGrid} from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource = {customersData}
        allowPaging
        allowSorting
        width="auto"
        toolbar={['Delete']}
        editSettings = {{ allowDeleting: true, allowEditing: true}}>
        <ColumnsDirective>{customersGrid.map((item, index) => {
          return(
              <ColumnDirective key={index} {...item}/>
          )
        })}</ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]}/>
      </GridComponent>
    </div>
  )
}

export default Customers