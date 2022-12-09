## ColorSwitcher

Convert the following [CodePen](https://codepen.io/jkeohan/pen/abvjvpr?editors=1010) into a React app.

1. Create the following Components and organize based on the below hierarchy:
    - App
      - Form
      - ColorList
        - ColorListItem

1. Make two state variables in App. One will hold an array of colors. The other will hold the current background color.

1. Use the array of colors to generate the ColorList.

1. Add an onClick event to each ColorListIttem that lifts state to App and updates the background color of the app to be the color of the ColorListIttem that was clicked.

1. Add an onChange event to the Form that allows the user to add a color. The Form will pass that url to App which will then render it as an additional ColorListItem.