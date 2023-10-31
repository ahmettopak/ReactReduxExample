import * as actionTypes from "./actionsTypes.js"

export function changeCategory(category) {

    return { type: actionTypes.CHANGE_CATEGORY, payload: category }
}