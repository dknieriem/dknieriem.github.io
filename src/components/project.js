import React from "react"

export default function Project(props) {
  return <div className={'project'}>
  			<h2 className={'project--title'}>{props.title}</h2>
  			<div className={'project--description'}>
	  			<img className={'project--image'} src={props.image} />
	  			{props.children}
  			</div>
		</div>

}