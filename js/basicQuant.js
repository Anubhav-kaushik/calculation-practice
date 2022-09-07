function sum(...data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i];
    }
    return sum;
}

function sumList(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }
    return sum;
}

function average(...data) {
    return sum(...data) / data.length;
}

function averageList(list) {
    return sumList(list) / list.length;
}

function max(...data) {
    let max = data[0];
    for (let i = 1; i < data.length; i++) {
        if (data[i] > max) {
            max = data[i];
        }
    }
    return max;
}

function min(...data) {
    let min = data[0];
    for (let i = 1; i < data.length; i++) {
        if (data[i] < min) {
            min = data[i];
        }
    }
    return min;
}

function multiply(...data) {
    let mul = 1;
    for (let i = 0; i < data.length; i++) {
        mul *= data[i];
    }
    return mul;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function isCorrect(num1, num2) {
    return num1 == num2;
}

async function checkUntilCorrect(rightAns, containerSelector) {
    let container = document.querySelector(containerSelector);
    let input = container.querySelector('input');
    input.value = '';

    let breakPoint = false;

    while (true) {
        addEventListener('input', (event) => {
            let ans = parseFloat(input.value);
            
            breakPoint = isCorrect(rightAns, ans);

        });
        
        if (breakPoint) {
            input.value = '';
            return true;
        }

        await sleep(randInt(200, 500));
    }
}

function makeItTwoDigit(num) {
    return num.toString().length == 1 ? '0' + num : num;
}

function stopWatch(elementSelector) {
    let timer = document.querySelector(elementSelector);
    let hours = timer.querySelector('.hours');
    let minutes = timer.querySelector('.minutes');
    let seconds = timer.querySelector('.seconds');
    let time = 0;
    let interval = setInterval(() => {
        time += 1;
        second = time % 60;
        minute = Math.floor(time / 60) % 60;
        hour = Math.floor(time / 3600);
        hours.textContent = makeItTwoDigit(hour);
        minutes.textContent = makeItTwoDigit(minute);
        seconds.textContent = makeItTwoDigit(second);
    }, 1000);
    return {
        stop: () => {
            clearInterval(interval);
        }
    };
}


