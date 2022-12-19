import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Sort, Filter, Page, ExcelExport, PdfExport, Edit, Inject} from '@syncfusion/ej2-react-grids'

import {customersData, customersGrid} from '../data/dummy';
import { Header } from '../components';
import { Toolbar } from '@syncfusion/ej2/navigations';

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource = {customersData}
        allowPaging
        allowSorting
        width="auto"
        toolbar={['Search']}>
        <ColumnsDirective>{customersGrid.map((item, index) => {
          return(
              <ColumnDirective key={index} {...item}/>
          )
        })}</ColumnsDirective>
        <Inject services={[Page, Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Customers