export const NEXT_WEEK = "NEXT_WEEK";
export const PREVIOUS_WEEK = "PREVIOUS_WEEK";
export const TODAY = "TODAY";

export const nextWeek = () => ({ type: NEXT_WEEK });
export const previousWeek = () => ({ type: PREVIOUS_WEEK });
export const today = () => ({ type: TODAY });
