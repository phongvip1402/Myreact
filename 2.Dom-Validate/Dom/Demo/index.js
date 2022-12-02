const p1 = document.getElementById('p1');

p1.innerHTML = '<h1>Hello Everyone</h1>';
p1.style.color ='red';

Object.assign(p1.style,{
    backgroundColor: 'blue'
})