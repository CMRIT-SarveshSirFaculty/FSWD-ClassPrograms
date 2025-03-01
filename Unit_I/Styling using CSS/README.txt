Advanced CSS Styling
1. CSS Selectors
CSS selectors are used to target HTML elements.
/* Element Selector */
p {
    color: green;
}

/* Class Selector */
.text-blue {
    color: blue;
}

/* ID Selector */
#main-heading {
    color: red;
}

/* Group Selector */
h1, h2, h3 {
    font-family: sans-serif;
}

2. CSS Box Model
The box model consists of margin, border, padding, and content.

.container {
    display: flex;
    justify-content: space-between;
}
.box {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    text-align: center;
}

4. CSS Grid
Used for grid-based layouts.

.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
.grid-item {
    background-color: yellow;
    padding: 20px;
    text-align: center;
}

