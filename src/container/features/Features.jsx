import React from 'react'
import { Feature } from '../../components'
import "./feature.css"


const featuresData=[
  {title:"Improving and distrusts instantly",
text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui ipsum sunt quidem ipsam est aspernatur enim sapiente maxime commodi!"},

{title:"Become the tended active",
text:"dLorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui ipsum sunt quidem ipsam est aspernatur enim sapiente maxime commodi!"},
{title:"Message or am nothing",
text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui ipsum sunt quidem ipsam est aspernatur enim sapiente maxime commodi!"},
{title:"Really boy law county",
text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui ipsum sunt quidem ipsam est aspernatur enim sapiente maxime commodi!"}
]

function Features() {
  return (
    <div className="gpt3__features section__padding "id="features"><div className="gpt3__features-heading">
      <h1 className="gradient__text"> The Future is Now and You Need To Realize It.Step into Future Today & Make it Happen.</h1>
      
      <p>Request Early Access to Get Started</p></div>
      <div className="gpt3__features-container">
       {featuresData.map((item,index)=>{
         return <Feature title={item.title} text={item.text} key={item.title+ index}/> 
       })}
      </div>
      </div>
      
  )
}

export default Features