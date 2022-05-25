export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Rubro-negro de primeira!', 'Uma vez Flamengo, sempre Flamengo!', 'É meu maior prazer vê-lo brilhar!']
export const GAME_COPIED_MESSAGE = 'Jogo copiado para a área de transferência'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Não há letras suficientes'
export const WORD_NOT_FOUND_MESSAGE = 'Palavra não encontrada'
export const HARD_MODE_ALERT_MESSAGE = 'O modo difícil só pode ser ativado no início!'
export const HARD_MODE_DESCRIPTION =
  'Quaisquer dicas reveladas devem ser usadas em suposições subsequentes'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Para melhor visão de cores'
export const CORRECT_WORD_MESSAGE = (solution: string) => `O jogador era ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Deve usar ${guess} na posição ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `O palpite deve conter ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'Estatísticas'
export const GUESS_DISTRIBUTION_TEXT = 'Distribuição de palpites'
export const NEW_WORD_TEXT = 'Novo jogador em'
export const SHARE_TEXT = 'Compartilhar'
export const TOTAL_TRIES_TEXT = 'Total de tentativas'
export const SUCCESS_RATE_TEXT = 'Percentual de sucesso'
export const CURRENT_STREAK_TEXT = 'Sequência atual'
export const BEST_STREAK_TEXT = 'Melhor sequência'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  'Você está usando um navegador incorporado e pode ter problemas para compartilhar ou salvar seus resultados. Recomendamos que você use o navegador padrão do seu dispositivo.'
