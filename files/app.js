let a = [] ,b = 0
r = parseInt(prompt('range'))

for(i=0;i<r;i++){
    c = parseInt(prompt('value'))
    a.push(c)
    b+= a[i] 
}
console.log(b/a.length)

