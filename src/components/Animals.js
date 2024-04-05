import { useState } from 'react'
import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import heart from './svg/heart.svg'
import horse from './svg/horse.svg'
const svgmap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}
const Animals = ({type}) => {
const [click , setClick] = useState(0)
const handleclick = () => {
    setClick(click + 1)
}
  return (
    <div onClick={handleclick}>
    <img alt='animals' src={svgmap[type]} style={{width: '50px' , height: '50px' }} />
    <img alt='heart' src={heart} style={{width: 10 + 10 * click + 'px'}} />
    </div>
  )


  
 
}
export default Animals;