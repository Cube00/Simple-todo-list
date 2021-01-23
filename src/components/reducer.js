export const reducer = (state, action) => {
    const people = [...state.people, action.payload];
    if (action.type === "ADD_ITEM") {
        return {
            ...state,
            people,
            isModalOpen: true,
            modalContent: "item added",
        };
    }
    const newPeople = people.filter((id) => id !== action.payload);
    if (action.type === "DELETE") {
        return {...state, people: newPeople, isModalOpen: true, modalContent: "item removed" }
    }
    if (action.type === "CLOSE") {
        return {...state, isModalOpen: false }
    }
    return "reducer";
};