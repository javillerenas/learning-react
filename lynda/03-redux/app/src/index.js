import C from "./constants";
import { allSkiDays, goal } from "./initialState.json";

console.log(`

  Ski Day Counter:
  ================
  The goal is ${goal}
  Initially there are ${allSkiDays.length} sky days

  CONSTANTS: (actions)
  ==================
  ${Object.keys(C).join('\n     ')}

`)