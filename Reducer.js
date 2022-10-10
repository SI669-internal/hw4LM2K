
const ADD_ITEM = 'ADD_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';


const initTags = [
  { tagName: 'Personal', key: Date.now() },
  { tagName: 'School', key: Date.now() + 1},
  { tagName: '669', key: Date.now() + 2},
];

const initListItems = [
  { text: 'Get costume', tags: [initTags[0].key], key: Date.now() },
  { text: 'Get candy', tags: [initTags[0].key], key: Date.now() + 1},
  { text: 'Finish HW4', tags: [initTags[1].key, initTags[2].key], key: Date.now() + 2},
];

const initialState = {
  tags: initTags,
  listItems: initListItems
}

const addItem = (state, newText, tags) => {
  let { listItems } = state;
  let newListItems = listItems.concat({
    text: newText,
    key: Date.now() + Math.random(),
    tags: tags
  });
  return {
    ...state, 
    listItems: newListItems
  };
}

const updateItem = (state, itemId, newText, tags) => {
  let { listItems } = state;
  let newItem = {
    text: newText,
    key: itemId, 
    tags: tags
  };
  let newListItems = listItems.map(elem=>elem.key===itemId?newItem:elem);
  return {
    ...state, 
    listItems: newListItems
  };
}

const deleteItem = (state, itemId) => {
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
      return addItem(state, action.payload.text, action.payload.tags);
    case UPDATE_ITEM:
      return updateItem(state, action.payload.key, action.payload.text, action.payload.tags);
    case DELETE_ITEM:
      return deleteItem(state, action.payload.key);
    default:
      return state;
  }
}

const myMiddleware = (action) => {
  console.log('in middleware, action:', action);
}

export { rootReducer, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM };