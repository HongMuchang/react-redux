//actionsをimport
import { INCREMENT, DECREMENT } from "../actions";

//初期状態に入れる変数名initialState
const initialState = { value: 0 };

//reduserに渡す
//第一引数
//受け取ったタイプによって状態を変更してreturnで返す
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
};
