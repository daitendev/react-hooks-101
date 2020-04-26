import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENTS } from '../actions';
// action = {
//   type: 'CREATE_EVENT',
//   title: 'オリンピックのお知らせ',
//   body: 'お知らせです'
// }
// before
// state = [];
//
// after
// state = [
//   { id: 1, title: 'TAITLE1', body: 'BODY1' },
// ];
//
// before
// state = [
//   { id: 1, title: 'TAITLE1', body: 'BODY1' },
//   { id: 2, title: 'TAITLE2', body: 'BODY2' },
//   { id: 3, title: 'TAITLE3', body: 'BODY3' },
// ];
//
// after
// state = [
//   { id: 1, title: 'TAITLE1', body: 'BODY1' },
//   { id: 2, title: 'TAITLE2', body: 'BODY2' },
//   { id: 3, title: 'TAITLE3', body: 'BODY3' },
//   { id: 4, title: 'TAITLE4', body: 'BODY4' },
// ];

const events = (state = [], action) => {
  switch (action.type) {
    case CREATE_EVENT:
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];
    case DELETE_EVENT:
      return state.filter((event) => event.id !== action.id);
    case DELETE_ALL_EVENTS:
      return [];
    default:
      return state;
  }
};

export default events;
