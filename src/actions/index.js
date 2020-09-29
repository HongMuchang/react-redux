export const INREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
//アクションクリエーターの定義
export const increment = () => {
  return {
    type: "INCREMENT",
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
