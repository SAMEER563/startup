import React from 'react'
import ProgressButton from './ProgressButton'
import SuccessProgressButton from './SuccessProgressButton'
import CircularSpinnerButton from './CircularSpinnerButton'
import IndeterminateProgressButton from './IndeterminateProgressButton'
import ResettableProgressButton from './ResettableProgressButton'



const Progress = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 gap-5">
    <ProgressButton />
    <SuccessProgressButton />
   <CircularSpinnerButton />
   <IndeterminateProgressButton />
 
  
  </div>
  
  )
}

export default Progress