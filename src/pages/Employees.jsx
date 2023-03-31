/* eslint-disable */

import React from "react";

import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Sort,
  Search,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";

const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="직원명단" />
      {/*dataSource를 통해서 dummy data 전달  allow(Paging, Sorting) 프로퍼티를 통해서 paging 개수 제한 */}

      {/* inject를 통해서 필요한 syncfusion 속성 추가 */}
      {/* Search, toolbar는 항상 같이 */}
      {/* ts에서 찾아서 페이지 프로퍼티 삽입 */}
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
        pageSettings={{ pageSize: 10 }}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
