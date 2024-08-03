import React from 'react';


const CustomTable = ({ columns, items }) => {
  return (
    <table style={{height:'100%',width:'100%' ,padding:'0 10px'}} key={items}>
      <thead>
        <tr style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
          {columns.map((column) => (
            <th key={column.label}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody key={JSON.stringify(items)}>
        {items.map((item,index) => (
          <tr key={item?.id} style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>{column.renderCell(item)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;