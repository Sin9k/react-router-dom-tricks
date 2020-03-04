import { createAction } from "redux-actions";

const NAMESPACE = "HISTORY::";

export const push = createAction(NAMESPACE + "PUSH");
export const replace = createAction(NAMESPACE + "REPLACE");
export const goBack = createAction(NAMESPACE + "GO_BACK");
