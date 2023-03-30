/* eslint-disable */

import React from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";

import { scheduleData } from "../data/dummy";
import { Header } from "../components";

const Calendar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="달력" />
      {/* selectedDate new Date를 통해서 시작일을 지정해서 보여줄 수 있음 */}
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject
          services={[
            Day,
            Week,
            WorkWeek,
            Month,
            Resize,
            Resize,
            Agenda,
            DragAndDrop,
          ]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
