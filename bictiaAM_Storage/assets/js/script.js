const color = localStorage.getItem('container')
console.log(color);



dark.addEventListener('click', () => {

    /*     localStorage.removeItem("container")
        container.innerText = ""; */

    const dark = document.getElementById('dark')

    document.getElementById('container').classList.add('dark')

    localStorage.setItem('container', 'dark');

    const colorDark = localStorage.getItem('container')
    console.log(colorDark);

})

light.addEventListener('click', () => {


    const light = document.getElementById('light')
    document.getElementById('container').classList.add('light')

    localStorage.setItem('container', 'light');

    const colorLight = localStorage.getItem('container')
    console.log(colorLight);

})

pink.addEventListener('click', () => {


    const pink = document.getElementById('pink')
    document.getElementById('container').classList.add('pink')

    localStorage.setItem('container', 'pink');

    const colorPink = localStorage.getItem('container')
    console.log(colorPink);

})

if (color == 'dark') {

    document.getElementById('container').classList.add('dark')
}

if (color == 'pink') {

    document.getElementById('container').classList.add('pink')
}

if (color == 'light') {
    document.getElementById('container').classList.add('light')
}