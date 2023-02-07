<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Generator</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link rel="stylesheet" href="main.css" />
</head>
<body>

    <main>

        <div class="generator">

            <h1>Safeguard Your Software</h1>

            <label class="password-wrap">
                <input 
                    type="text" 
                    id="password" 
                    readonly
                    placeholder="Generate a Password"
                />
                <button class="material-icons" id="copy">content_copy</button>
            </label> 

            <label>
                <span>Password legnth:</span>
                <input type="number" id="length" value="16" />
            </label>

            <label>
                <span>Include Uppercase Letters:</span>
                <input type="checkbox" id="uppercase" checked />
            </label>

            <label>
                <span>Include Lowercase Letters:</span>
                <input type="checkbox" id="lowercase" checked />
            </label>

            <label>
                <span>Include Numbers:</span>
                <input type="checkbox" id="numbers" checked />
            </label>

            <label>
                <span>Include Symbols:</span>
                <input type="checkbox" id="symbols" checkbox />
            </label>

           <button type="submit" id="generate">Generate Password</button> 

        </div>

    </main>
  
    <script src="main.js"></script>
</body>
</html>