import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Toolbar, Inject} from '@syncfusion/ej2-react-grids';

import {employeesData, contextMenuItems, employeesGrid} from '../data/dummy';
import { Header } from '../components';
import { Grid } from '@syncfusion/ej2-react-grids';

const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Employees" />
      <GridComponent
        id="gridcomp"
        dataSource = {employeesData}
        toolbar={['Search']}
        allowPaging
        allowSorting
        width="auto">
        <ColumnsDirective>{employeesGrid.map((item, index) => {
          return(
              <ColumnDirective key={index} {...item}/>
          )
        })}</ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Employees