import React from 'react'
import Person from './Person'

function NameList() {
   const persons = [
       {
           id:1,
           name:'Bruce',
           age:30,
           skill: 'React'
       },
       {
        id:2,
        name:'Clark',
        age:25,
        skill: 'Angular' 
       },
       {
        id:3,
        name:'Diana',
        age:34,
        skill: 'Vue'
       }
   ]
//   const personList = persons.map(person => <Person key={person.id} person={person} />)
    const names = ['Bruce', 'clark', 'Diana', 'bruce']
    const nameList =  names.map((name, index) => <h2 key = {index}>{name}</h2>)
    return (
        <div>
          {
             nameList
    
          }
           
        </div>
    )
}

export default NameList
