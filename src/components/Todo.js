import React, { useEffect, useState, useReducer } from "react";
import { reducer } from "./reducer";
import Modal from "./Modal";

const objectPeople = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};
const Todo = () => {
  const [people, setPeople] = useState("");
  const [state, dispatch] = useReducer(reducer, objectPeople);
  const handleChange = (e) => {
    e.preventDefault();
    const newItem = {
      id: new Date().getTime().toString(),
      name: people,
    };
    if (people) {
      dispatch({ type: "ADD_ITEM", payload: newItem });
    }
    setPeople("");
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE" });
  };
  return (
    <>
      {state.isModalOpen ? (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      ) : (
        ""
      )}
      <form className="form" autocomplete="off">
        <div className="input-form">
          <h2> Name: </h2>
          <input
            type="text"
            name="name"
            id="name"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          />
        </div>
        <button className="btn" onClick={handleChange}>
          enter
        </button>
      </form>
      <div className="list">
        {state.people.map((person) => {
          return (
            <div className="item" key={person.id}>
              <h2>{person.name}</h2>
              <button
                className="btn-remove"
                onClick={() => dispatch({ type: "DELETE", payload: person })}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todo;
