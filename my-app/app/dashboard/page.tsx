'use client '

import React from 'react'
import { useAppSelector } from '@/Redux/store'; 


// function page() {
//     const userName=useAppSelector((state)=>state.authReducer.value.userName)
//   return (
//     <div>
//             <h1>UserName:{userName}</h1>
//     </div>
//   )
// }

// export default page

export default function dashboard(){
        const userName=useAppSelector((state)=>state.authReducer.value.userName)
  return (
    <div>
            <h1>UserName:{userName}</h1>
    </div>
  )
}
