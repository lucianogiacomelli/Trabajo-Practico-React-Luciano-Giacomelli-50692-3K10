import { FC } from "react"



interface IPropsMiPrimerComonent{
    text:string
    color: string
}

export const MiPrimerComponent : FC <IPropsMiPrimerComonent> = ({text,color}) => {
  return (
    <div style={{color: `${color}`}}>
      <p> {text} </p> 
    </div>
  )
}

