import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props ) => {
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValue);
    return (
    <div className='chart'>
        <div className='chart-stick-container'>
            {props.dataPoints.map((dataPoint) => 
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            )}                      
        </div>
    </div>
  )
}

export default Chart