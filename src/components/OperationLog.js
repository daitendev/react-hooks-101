import React from 'react';

const OperationLog = ({ operationLog }) => {
  return (
    <tr>
      <td>{operationLog.description}</td>
      <tc>{operationLog.operatedAt}</tc>
    </tr>
  );
};

export default OperationLog;
