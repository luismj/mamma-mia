import React from 'react';

export const ShowErrors = ({showErrors}) =>
  <div className='showErrors'>
    {Object.keys(showErrors).map((fieldName, i) => {
      if(showErrors[fieldName].length > 0){
        return (
          <p key={i}>{fieldName} {showErrors[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
  </div>
