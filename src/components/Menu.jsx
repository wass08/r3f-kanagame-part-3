import { gameStates, useGameStore } from "../store";

export const Menu = () => {
  const { startGame, gameState, goToMenu } = useGameStore((state) => ({
    startGame: state.startGame,
    gameState: state.gameState,
    goToMenu: state.goToMenu,
  }));
  return (
    <>
      <div
        className={`menu ${
          gameState !== gameStates.MENU ? "menu--hidden" : ""
        }`}
      >
        <div>
          <h1>Kana Game</h1>
          <p>What do you want to practice today?</p>
        </div>
        <button
          disabled={gameState !== gameStates.MENU}
          onClick={() => startGame({ mode: "hiragana" })}
        >
          Hiragana
        </button>
        <button
          disabled={gameState !== gameStates.MENU}
          onClick={() => startGame({ mode: "katakana" })}
        >
          Katakana
        </button>
        <div>
          <p>
            Made with 💙 by{" "}
            <a href="https://youtube.com/@WawaSensei" target="_blank">
              Wawa Sensei
            </a>
            , 3D models from{" "}
            <a href="https://instagram.com/belyakova.dsn" target="_blank">
              Camilla
            </a>
          </p>
        </div>
      </div>
      <div
        className={`scores ${
          gameState !== gameStates.GAME_OVER ? "scores--hidden" : ""
        }`}
      >
        <h1>Congratulations you are becoming a true master</h1>
        <button
          onClick={goToMenu}
          disabled={gameState !== gameStates.GAME_OVER}
        >
          Play again
        </button>
      </div>
    </>
  );
};
