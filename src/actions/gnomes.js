import axios from "axios";

import { setElements } from "./lists";
import { listConsts } from "../reducers/lists";
import { snakeToCamel } from "../helpers/camelSnake";

export const loadGnomes = () => dispatch => axios.get("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json")
  .then(data => {
  	const snakeCaseData = snakeToCamel(data.data)
    dispatch(setElements(snakeCaseData.brastlewark, listConsts.GNOMES));
  })
  .catch(error => {
    console.log(error);
  });