
const ADD_ITEM = 'ADD_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';


const initListItems = [
  { text: 'Get costume', key: Date.now() },
  { text: 'Get candy', key: Date.now() + 1}
];

const initialState = {
  listItems: initListItems
}

function asyncDispatch(action) {
  return async function asyncDispatchThunk(dispatch, getState) {
    console.log('in async dispatch, ', action);
    setTimeout(()=>dispatch(action), 1000);
  }
}

const addItem = (state, newText) => {
  console.log('now adding', newText);
  let { listItems } = state;
  let newListItems = listItems.concat({
    text: newText,
    key: Date.now() + Math.random()
  });
  return {
    ...state, 
    listItems: newListItems
  };
}

const updateItem = (state, itemId, newText) => {
  console.log('now updating', itemId);
  let { listItems } = state;
  let newItem = {
    text: newText,
    key: itemId
  };
  let newListItems = listItems.map(elem=>elem.key===itemId?newItem:elem);
  return {
    ...state, 
    listItems: newListItems
  };
}

const deleteItem = (state, itemId) => {
  console.log('now deleting', itemId);
  let { listItems } = state;
  let newListItems = listItems.filter(elem=>elem.key !== itemId);
  return {
    ...state, 
    listItems: newListItems
  }
}

function rootReducer(state=initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return addItem(state, action.payload.text);
    case UPDATE_ITEM:
      return updateItem(state, action.payload.key, action.payload.text);
    case DELETE_ITEM:
      return deleteItem(state, action.payload.key);
    default:
      return state;
  }
}



export { rootReducer, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, asyncDispatch };