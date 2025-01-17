import { ResultData } from "../types/types"; // Define the State type



interface State {
  data: ResultData | null; // Replace 'any' with the actual type if known
  winningChengyu: string[];
  gameTiles: string[];
  chengyuAnswers: string[];
  selectedTiles: string[];
  masterTiles: string[];
  masterEmperorCharacter: string;
  emperorCharacter: string | null;
  isEmperorAnimationComplete: boolean;
  isAnimating: boolean;
}

// Define the Action type
type Action =
  | { type: "SET_DATA"; payload: ResultData }
  | { type: "TILE_CLICK"; payload: string }
  | { type: "SET_WINNING_CHENGYU"; payload: string[] }
  | { type: "SET_GAME_TILES"; payload: string[] }
  | { type: "SET_CHENGYU_ANSWERS"; payload: string[] }
  | { type: "SET_SELECTED_TILES"; payload: string[] }
  | { type: "SET_MASTER_TILES"; payload: string[] }
  | { type: "SET_MASTER_EMPEROR_CHARACTER"; payload: string }
  | { type: "SET_EMPEROR_CHARACTER"; payload: string | null }
  | { type: "SET_IS_EMPEROR_ANIMATION_COMPLETE"; payload: boolean }
  | { type: "SET_IS_ANIMATING"; payload: boolean };

// Define the initial state
const initialState: State = {
  data: null,
  winningChengyu: [],
  gameTiles: [],
  chengyuAnswers: [],
  selectedTiles: [],
  masterTiles: [],
  masterEmperorCharacter: "",
  emperorCharacter: null,
  isEmperorAnimationComplete: false,
  isAnimating: false,
};

// Define the reducer function
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_WINNING_CHENGYU":
      return { ...state, winningChengyu: action.payload };
    case "SET_GAME_TILES":
      return { ...state, gameTiles: action.payload };
    case "SET_CHENGYU_ANSWERS":
      return { ...state, chengyuAnswers: action.payload };
    case "SET_SELECTED_TILES":
      return { ...state, selectedTiles: action.payload };
    case "SET_MASTER_TILES":
      return { ...state, masterTiles: action.payload };
    case "SET_MASTER_EMPEROR_CHARACTER":
      return { ...state, masterEmperorCharacter: action.payload };
    case "SET_EMPEROR_CHARACTER":
      return { ...state, emperorCharacter: action.payload };
    case "SET_IS_EMPEROR_ANIMATION_COMPLETE":
      return { ...state, isEmperorAnimationComplete: action.payload };
    case "SET_IS_ANIMATING":
      return { ...state, isAnimating: action.payload };
    default:
      return state;
  }
};

export { initialState };
