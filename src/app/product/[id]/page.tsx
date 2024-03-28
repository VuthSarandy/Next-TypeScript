import React from 'react'
export type ParamProps = {
    id: string | number
}
const page = (params: ParamProps) => {
  const id = params.id;
  return (
    <div>
      Detail page {id}
    </div>
  )
}

export default page
