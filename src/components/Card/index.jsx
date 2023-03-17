import React from "react";
import "./Card.css";

export const Card = ({data}) => {
  // return  <div style={{background:data.color}} className="card">
  //   {data.title}
  // </div>;

  // if(data.color){
  //   return  <div style={{background:data.color}} className="card">
  //     {data.title}
  //   </div>
  // }else{
  //   return <div style={{background:`url(${data.img})`}} className="card">
  //     {data.title}

  //   </div>
  // }
  //-----------------------------------------------------------------------------------------------------------------------------------------
  //  2-case
//   switch (data.color){
//     case null:
//       return( <div style={{background:`url(${data.img})`}} className="card">
//         {data.title}
//       </div> 
//   )

// default:
//   return(
//    <div style={{background:data.color}} className="card">
//   {data.title}
//     </div>
//   )
//   };
//-----------------------------------------------------------------------------------------------------------------------------------
// 3-case
// return
// (
//   <>
//   {data.color ?
//   <div style={{background:data.color}} className="card">
//   {data.title}
//   </div>
//   :
//   <div style={{background:`url(${data.img})`}} className="card">
//     {data.title}
//   </div>
// }
// </>
// );
// }

return (
  <>
    {data.color && <div style={{ background: data.color }} className="card">
        {data.title}
      </div>
    }
    {data.color === null &&  <div style={{ backgroundImage: `url(${data.img})` }} className="card">
        {data.title}
        <p>Бул жерде сурот коюш керек</p>
      </div>
    }
  </>
);
  }


