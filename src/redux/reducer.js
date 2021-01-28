export const INC = "INC"
export const DEC = "DEC"
export const ADD_USER = 'ADD_USER'
export const SET_USERS = "SET_USERS"
export const DEL_USER = "DEL_USER"
export const EDIT_USER = "EDIT_USER"

const initStore = {
  counter: 88,
  users: [],
  goods: [],
  data: [],
}

export default function reducer(store = initStore, { type, payload }) {
  // console.log('====>>>', type, payload);
  switch (type) {
    case EDIT_USER:
      return {
        ...store, users: store
          .users
          .map((item) => item.id === payload.id ? {
            ...item,
            name: payload.name
          } : item)
      }
    case DEL_USER:
      return { ...store, users: store.users.filter(({ id }) => id !== payload) }
    case ADD_USER:
      return { ...store, users: [...store.users, payload] }
    // return { ...store, users: store.users.concat([payload]) }
    case SET_USERS:
      return { ...store, users: payload }
    case INC:
      return { ...store, counter: store.counter + 1 }
    case DEC:
      return { ...store, counter: store.counter - 1 }
    default:
      return store
  }
}
