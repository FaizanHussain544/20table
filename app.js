const a = prompt("Enter the value")
for(let i = a; i <= 20; i++){
    for(let k = 1; k <= 10; k++){
        result = i * k
        document.write(`${i} x ${k} = ${result} <br>`)
    }
    document.write("<br>")
}