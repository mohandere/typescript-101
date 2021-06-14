import * as React from "react";
import * as ReactDOM from "react-dom";


interface HeaderProps {
  title: string
  dsd: string
}

function Header = ({ title }: HeaderProps): JSX.Element => {
  return (
    <header>
      {title}
    </header>
  )
}


function get(): Promise<number>  {
  returm new Promise((resolve, reject) => {
    resolve(1)
  })
}
