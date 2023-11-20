import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Alert, Badge, Calendar, Modal } from 'antd';
import Button from '../helples/button';
const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event.',
        },
        {
          type: 'success',
          content: 'This is usual event.',
        },
      ];
      break;
    case 10:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event.',
        },
        {
          type: 'success',
          content: 'This is usual event.',
        },
        {
          type: 'error',
          content: 'This is error event.',
        },
      ];
      break;
    case 15:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event',
        },
        {
          type: 'success',
          content: 'This is very long usual event......',
        },
        {
          type: 'error',
          content: 'This is error event 1.',
        },
        {
          type: 'error',
          content: 'This is error event 2.',
        },
        {
          type: 'error',
          content: 'This is error event 3.',
        },
        {
          type: 'error',
          content: 'This is error event 4.',
        },
      ];
      break;
    default:
  }
  return listData || [];
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};

export default function CalendarContainer() {
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };
  const [value, setValue] = useState(() => dayjs('2017-01-25'));
  const [open, setOpen] = useState();
  const [selectedValue, setSelectedValue] = useState(() => dayjs('2017-01-25'));
  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
    setOpen(true);
  };
  const onPanelChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div class='' style={{ padding: '5% 10% 5% 10%' }}>
      <h1 class='py-20 text-6xl  text-black' >Lịch làm việc</h1>
      <div class="w-8 h-1 mt-5 bg-transparent border-b-2 border-btnprimary"></div>
      <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} />
      <Calendar cellRender={cellRender} value={value} onSelect={onSelect} onPanelChange={onPanelChange} />;

      <Modal
        title={`Lịch làm việc  ${selectedValue?.format('YYYY-MM-DD')}`}
        centered
        open={open}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <p>Chụp chân dung...</p>
        <p>Chụp Phong Cảnh...</p>
        <p>Chụp Studio...</p>
      </Modal>
    </div>
  );
}
