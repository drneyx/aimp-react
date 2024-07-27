import React from 'react';

interface DataIterationProps<T> {
  datas: T[];
  startLength: number;
  endLength: number;
  children: (props: { datas: T }) => React.ReactNode;
}

function DataIteration<T>({ datas = [], startLength, endLength, children }: DataIterationProps<T>): JSX.Element {
  return (
    <>
      {datas &&
        datas.length >= endLength &&
        datas.slice(startLength, endLength).map((value, index) => children({ datas: value }))}
    </>
  );
}

export default DataIteration;
