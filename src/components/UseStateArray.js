import React, { useState } from 'react';
import { peopleData } from '../people-data';
import { BiTrash } from 'react-icons/bi';

const UseStateArray = () => {
  const [people, setPeople] = useState(peopleData);

  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      <section className="--flex-center --100vh --bg-primary">
        <div className="container">
          <h1 className="--color-white">UseState in Array</h1>
          {people.map((people) => {
            let { id, name } = people;

            return (
              <div className="--flex-between --bg-light --my --card" key={id}>
                <h2>{name}</h2>
                <BiTrash
                  color="red"
                  size={22}
                  onClick={() => removePerson(id)}
                />
              </div>
            );
          })}
          <button className="--btn btn-danger" onClick={() => setPeople([])}>
            Clear All
          </button>
        </div>
      </section>
    </div>
  );
};

export default UseStateArray;
