/**********************************************
 * STARTER CODE
 **********************************************/

/**
 * shuffle()
 * Shuffle the contents of an array
 *   depending the datatype of the source
 * Makes a copy. Does NOT shuffle the original.
 * Based on Steve Griffith's array shuffle prototype
 * @Parameters: Array or string
 * @Return: Scrambled Array or string, based on the provided parameter
 */
function shuffle (src) {
  const copy = [...src]

  const length = copy.length
  for (let i = 0; i < length; i++) {
    const x = copy[i]
    const y = Math.floor(Math.random() * length)
    const z = copy[y]
    copy[i] = z
    copy[y] = x
  }

  if (typeof src === 'string') {
    return copy.join('')
  }

  return copy
}

/**********************************************
 * YOUR CODE BELOW
 **********************************************/

const {useState, useEffect} = React;

//1 An array of words must be created. The words should not include spaces or special characters. There must be at least 10 words in the array.
const words =["vscode", "uxui", "react", "phone", "componet", "function", "return", "declaration", "variable", "coding"]

//2 The game should be persistent. The player's progress should be tracked throughout the game and stored in local storage.


//3 The player must be able to guess by typing into a textbox and hitting enter. Once a guess has been made, correct or incorrect, the textbox should be cleared. Making a guess should NOT cause a page refresh.


//4 If the guess is correct, a new scrambled word should appear.



//5 If the guess is incorrect, the current scrambled word should remain.


//6 After each guess, the player should receive a response telling whether the guess was correct or incorrect.


//7 After each guess, the number of points or strikes should be updated and displayed for the player.


//8 If the player clicks on the pass button and has at least one pass remaining, the current word should be removed, and the next scrambled word should be displayed.


//9 If the player makes it through the entire list of words OR receives the maximum number of strikes, the game should end and give the player the option to play again.


//10 If the player chooses to play again, the game should restart, clearing all previous points, strikes, or used passes. The restart should be accomplished without a page refresh.
