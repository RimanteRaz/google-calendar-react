const initialState = { selectedDay: new Date() };

export const reducer = (state = initialState) => {
  return state;
};

export type State = ReturnType<typeof reducer>;
