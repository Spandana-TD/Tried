import React from 'react'

export default function SpreadOperator() {
 let arrayOne=[1,2,3,4];
 let arrayTwo=[6,7,8,9] ;
 let combonearray=[...arrayOne,...arrayTwo];
 console.log(combonearray);
 console.log(arrayOne);
 console.log(arrayTwo);
 let BasicInfo={
    name:"adya",
    age:20,
    place:"koppa"
 };
 let additionalinfo={
    company:"amazon",
    department:"it",
    designation:"software developer"
    //,place:"ujire"
 };
 console.log(BasicInfo);
 console.log(additionalinfo);
 let completeinfo={...BasicInfo,...additionalinfo

 };
 console.log(completeinfo);

 return (
    <div>spreadoperator</div>
  )
}
