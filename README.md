# MengoWordle

## _The game for Flamengo supporters inspired on Wordle_

This game was inspired by the game <a href="https://www.nytimes.com/games/wordle/index.html">Wordle</a> and a clone of the project <a href="https://github.com/cwackerfuss/react-wordle">react-wordle</a>, adapted to guess some players from Flamengo, a brazilian soccer team.

The user has 6 chances to guess the player's name, and on each try the application gives a hint if the letter exists on the player's name with a yellow background, or a green background if it exists and it is on the right position.

The original project has a feature for validation of real words, which was excluded because we are working with multiple letters and also nicknames, so it would be harder to build this list.

To remove word validation functionality, removed lines from inside the if statement on App.tsx:

```js
if (!isWordInWordList(currentGuess)) {
  setCurrentRowClass('jiggle')
  return showErrorAlert(WORD_NOT_FOUND_MESSAGE, {
    onClose: clearCurrentRowClass,
  })
}
```

Also commented the import of `WORD_NOT_FOUND_MESSAGE`, on App.tsx, as the validation would display this message.
