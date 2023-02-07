* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    font-family: sans-serif;
}

body {
    background-color: grey;
    color: var(#3A3B3C);
}

main {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 2rem;
}

.generator {
    width: 100%;
    max-width: 640px;
    padding: 2rem 1rem;
    background-color: darkgrey;
    border-radius: 1rem;
}

h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

input:not([type="checkbox"]),
button {
    appearance: none;
    outline:none;
    border:none;
    background:none;
}

input[type="checkbox"] {
    cursor: pointer;
}

.password-wrap {
    position: relative;
    display: flex;
    width: 100%;
    margin-bottom: 1rem;
}

.password-wrap:after {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    height: 3px;
    left: 0;
    right: 0;
    border-radius: 3px;
    background: linear-gradient(to right, #3A3B3C 25%, #3A3B3C 75%);
}

.password-wrap input {
    flex: 1 1 0%;
    padding: 0.5rem;
    color: beige;
}

.password-wrap input::placeholder {
    color: #888;
    font-style: italic;
}

.password-wrap button {
    cursor: pointer;
    background: linear-gradient(to bottom, #3A3B3C 0%, #3A3B3C 75%);
}

label {
    display: flex;
    user-select: none;
    margin-bottom: 1rem;
}

label span {
    display: block;
    flex: 1 1 0%;
    white-space: nowrap;
}
label input[type="number"] {
    text-align: right;
}

button[type="submit"] {
    cursor: pointer;
    padding: 0.5rem 1rem;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 0.5rem;
    background: linear-gradient(black 25%, gray 50%);
    background-size: 200%;
    background-position: 25%;
    transition: 0.3s ease-out;
}

button[type="submit"]:hover {
    background-position: 75%;
}