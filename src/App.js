import { useState } from "react";
import Animals from "./components/Animals";
function  getRandomAnimals(){
const animals = ['bird' , 'cat' , 'cow' , 'dog' , 'gator' , 'horse' ]
 return animals[Math.floor(Math.random() * animals.length)]
}


function App() {
 const [animals , setAnimals] = useState([])
   const handleAnimals = () =>{
    setAnimals([ ...animals,getRandomAnimals()])
   }
   const renderAnimals = animals.map((animal, index) =>{
      return <Animals type={animal} key={index} />
   })
  return (
   <div>
  <button onClick={handleAnimals}>Add Animals</button>
  <h3>{renderAnimals}</h3>
   </div>  
  );
  }

export default App;
