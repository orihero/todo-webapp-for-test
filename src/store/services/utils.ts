import { Tokens } from "../../@types";
import { DEBUG } from "../../constants/global";

export function getTokens(): Tokens | null {
  let tokens: Tokens | null = null;
  try {
    // Get data from localStorage
    const data = localStorage.getItem("persist:root");
    if (data) {
      // Parse data and retrieve tokens
      tokens = JSON.parse(JSON.parse(data).localStore).tokens;
    }
  } catch (err) {
    if (DEBUG) console.log(err);
  }

  return tokens;
}
