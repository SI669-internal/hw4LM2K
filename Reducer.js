
const ADD_ITEM = 'ADD_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const SET_NICKNAME = 'SET_NICKNAME';

const colors = {
  blue: 'rgb(113, 212, 245)',
  red: 'rgb(245, 113, 132)',
  green: 'rgb(181, 245, 113)',
  yellow: 'rgb(245, 245, 113)',
  purple: 'rgb(179, 113, 245)',
  orange: 'rbg(245, 157, 113)'
}

const initTags = [
  { tagName: 'Personal', color: colors.blue, key: Date.now() },
  { tagName: 'School', color: colors.red, key: Date.now() + 1},
  { tagName: '669', color: colors.green, key: Date.now() + 2},
];

const initListItems = [
  { text: 'Get costume', tags: [initTags[0].key], key: Date.now() },
  { text: 'Get candy', tags: [initTags[0].key], key: Date.now() + 1},
  { text: 'Finish HW4', tags: [initTags[1].key, initTags[2].key], key: Date.now() + 2},
];

const initNickname = 'Jenny';

const initialState = {
  nickname: initNickname,
  tags: initTags,
  listItems: initListItems,
  colors: colors
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

const setNickname = (state, newName) => {
  return {
    ...state, 
    nickname: newName
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
    case SET_NICKNAME:
      return setNickname(state, action.payload.nickname);
    default:
      return state;
  }
}

const myMiddleware = (action) => {
  console.log('in middleware, action:', action);
}

export { rootReducer, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, SET_NICKNAME };