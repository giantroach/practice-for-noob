# practice-for-noob

Simple project that let you create text based adventure game.

Basically just edit `myprogram.js`, open `index.html` on your brawser.

Bang! You see your program is working!!

We provide a few simple functions that let you display message on the screen easily.


# functions

There are three simple functions that you can call to make your program works on screen.

## message(msg, nextFunc)

This function displays messaage on your screen along with `Next` button.
When user click `Next` button, it automatically calls *given function*.

### msg

Any string value like `'You decided to go for travel!'`.

### nextFunc

When player clicks `Next` button this function will be called.

### Example

message('You decided to go for travel!', showChoosePathDialog);


## dialog(msg, yesFunc, noFunc)

This function displays messaage on your screen along with `Yes` and `No` button.
When user click either `Yes` or `No` button, it automatically calls *given function*.

### msg

Any string value like `'Do you want to eat this apple?'`.

### yesFunc

When player clicks `Yes` button this function will be called.

### noFunc

When player clicks `No` button this function will be called.


### Example

message('Do you want to eat this apple?', showGameover, showStarveMessage);



## end(msg, restartFunc)

Very similar to `message` function. But instead of displaying `Next` button, this displays `Restart` button.
The rests are the same.

### msg

Any string value like `'Congraturations, you win the game!'`.

### restartFunc

When player clicks `Restart` button this function will be called.

### Example

end('Congraturations, you win the game!', showIntroMessage);



# Disclaimer
`js/lib.js` intentionally does some bad practice to make code simpler in case you want to read it.
