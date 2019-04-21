import React from 'react';
import plan from './data/plan';
import GetGoal from './GetGoal';

export default function () {
  return(
    <GetGoal rawData={plan} />
  )
}
