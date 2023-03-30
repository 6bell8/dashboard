/* eslint-disable */

import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="고객명단" />
      {/* 1. 프로퍼티들을 import 2. 파라미터를 maping하는 컴포넌트에 전달, 3.그리고 Inject에서 파라미터를 추가 */}

      {/*dataSource를 통해서 dummy data 전달  allow(Paging, Sorting) 프로퍼티를 통해서 paging 개수 제한 */}

      {/* inject를 통해서 필요한 syncfusion 속성 추가 */}
      {/* Search, toolbar는 항상 같이 */}
      <GridComponent
        id="gridcomp"
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
