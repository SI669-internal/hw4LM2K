import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { firebaseConfig } from './Secrets';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ADD_ITEM = 'ADD_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const SET_NICKNAME = 'SET_NICKNAME';


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

const initNickname = 'Jenny';

const initialState = {
  nickname: initNickname,
  tags: initTags,
  listItems: initListItems,
}

const addItemAction = async (dispatch, newText, tags) => {

  console.log('adding item:', newText, tags);
  let newItem = {
    text: newText,
    tags: tags
  };
  let docRef = await addDoc(collection(db, 'todos'), newItem);
  newItem.key = docRef.id;
  console.log('added item to fb:', newItem);


  let addAction = {
    type: ADD_ITEM,
    payload: newItem
  }
  dispatch(addAction);
}


const addItem = (state, payload) => {
  const { text, tags, key } = payload;
  let { listItems } = state;
  let newListItems = listItems.concat({
    text: text,
    key: key,
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
  const { type, payload } = action;
  switch (type) {
    case ADD_ITEM:
      return addItem(state, payload);//.text, action.payload.tags);
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

export { 
  rootReducer, 
  addItemAction, 
  ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, SET_NICKNAME };