
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

const addItem = (state, newText) => {
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
  let { listItems } = state;
  let newListItems = listItems.filter(elem=>elem.key !== itemId);
  return {
    ...state, 
    listItems: newListItems
  }
}

const addTag = (state, tagName) => {
  let { tags } = state;
  let newTags = tags.concat({key: Date.now(), tagName: tagName});
  return {
    ...state, 
    tags: newTags
  };
}

const updateTag = (state, key, tagName) => {
  let { tags, listItems } = state;
  let newTag = {
    key: key,
    tagName: tagName
  };
  let newTags = tags.map(elem=>elem.key===key?newTag:elem);
  let newListItems = [];
  for (let item of listItems) {
    let newItem = { ...item, tags: [] };
    let { itemTags } = newItem;
    for ( let tag of itemTags ) {
      if (tag in newTags) {
        newItem.tags.push(tag);
      }
    }
    newListItems.push(item);
  }
  return {
    ...state,
    listItems: newListItems,
    tags: newTags
  };
}

const deleteTag = (state, key) => {
  let { tags, listItems } = state;
  let newTags = tags.filter(elem=>elem.key!==key);
  let newListItems = [];
  for (let item of listItems) {
    let newItem = { ...item, tags: [] };
    let { itemTags } = newItem;
    for ( let tag of itemTags ) {
      if (tag in newTags) {
        newItem.tags.push(tag);
      }
    }
    newListItems.push(item);
  }
  return {
    ...state,
    listItems: newListItems,
    tags: newTags
  };
}

function rootReducer(state=initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return addItem(state, action.payload.text);
    case UPDATE_ITEM:
      return updateItem(state, action.payload.key, action.payload.text);
    case DELETE_ITEM:
      return deleteItem(state, action.payload.key);
    case ADD_TAG:
      return addTag(state, action.payload.tagName);
    case UPDATE_TAG:
      return updateTag(state, action.payload.key, action.payload.tagName);
    case DELETE_TAG:
      return deleteTag(state, action.payload.key);
    default:
      return state;
  }
}

const myMiddleware = (action) => {
  console.log('in middleware, action:', action);
}

export { rootReducer, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM };