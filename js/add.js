async function additionPrac(totalQues, rangeStart, rangeEnd, numShow=2, isInteger=true) {
    const quesSpeedRecord = [];
    const numDeci = 2;

    const container = document.querySelector('.container');
    const quesDiv = document.querySelector('.showQues');
    const result = document.querySelector('.result');
    const progressBar = document.querySelector('.progress-bar')

    container.style.display = 'block';
    progressBar.style.display = 'block';
    result.style.display = 'none';

    quesDiv.innerHTML = '';
    addNumFields('.showQues-add', numShow, '+');

    const timeStopper = stopWatch('#timer-add');

    for (let i = 0; i < totalQues; i++) {
        let sum = 0;
        const showedNums = [];
        const temp = {};

        for (let j = 0; j < numShow; j++) {
            let randNum;
            if (isInteger) {
                randNum = randInt(parseInt(rangeStart), parseInt(rangeEnd));
                sum += randNum;
            }
            else {
                randNum = randFloat(parseInt(rangeStart), parseInt(rangeEnd), numDeci);
                sum += randNum;
            }

            showedNums.push(randNum);
        }

        console.log(showedNums)

        updateFields(showedNums, quesDiv);

        let startTime = Date.now();

        await checkUntilCorrect(sum, '.container');

        let endTime = Date.now();
        let time = (endTime - startTime) / 1000;

        temp['numbers'] = showedNums;
        temp['time'] = parseFloat(time.toFixed(2));

        quesSpeedRecord.push(temp);
    }
    timeStopper.stop();

    container.style.display = 'none';
    progressBar.style.display = 'none';
    result.style.display = 'block';

    const allQuesTime = [];
    let minTime = 1000;
    let maxTime = 0;

    for (let ansDetail of quesSpeedRecord) {
        let time = ansDetail.time;
        allQuesTime.push(time);

        if (time > maxTime) {
            maxTime = time;
        }

        if (time < minTime) {
            minTime = time;
        }
    }

    const avgTime = averageList(allQuesTime);

    result.innerHTML = `<h2> Average time: ${avgTime.toFixed(2)} seconds </h2> </br> <h2> Minimum time: ${minTime} seconds </h2> </br> <h2> Maximum time: ${maxTime} seconds </h2>`;

    reverseColumn('.main-container');
}

function createNumField(number, numPos, addSign='') {
    const container = document.createElement('div');
    container.classList.add('num-container');

    if (addSign !== '') {
        const sign = document.createElement('span');
        sign.classList.add('sign');
        sign.innerHTML = addSign;

        container.append(sign);
    }

    const num = document.createElement('span');
    num.classList.add('num');
    num.dataset.position = numPos;
    num.innerHTML = number;

    container.append(num);

    return container;
}

function addNumFields(containerSelector, numberOfFields, operator) {
    const container = document.querySelector(containerSelector);

    let sign = '';

    for (let i = 0; i < numberOfFields; i++) {
        if (i == numberOfFields - 1) {
            sign = operator;
        }
        const field = createNumField(0, i, sign)
        container.append(field);
    }
}

function updateFields(values, container) {
    for (let i = 0; i < values.length; i++) {
        const field = container.querySelector(`.num[data-position="${i}"]`);
        field.innerHTML = values[i];

        console.log(values[i])
    }

}

function startAddition(fielsetSelector, button) {
    button.innerHTML = 'Restart';
    const fieldset = document.querySelector(fielsetSelector);

    const inputs = fieldset.querySelectorAll('input');

    const inputValues = {}

    for (let inp of inputs) {
        const inputId = inp.getAttribute('id');
        const inputValue = inp.value;

        inputValues[inputId] = inputValue;
    }

    reverseColumn('.main-container');

    additionPrac(inputValues['num-ques'], inputValues['num1'], inputValues['num2'])
}

function reverseColumn(containerSelector) {
    const container = document.querySelector(containerSelector);
    const direction = container.dataset.flexDirection;

    if (direction == 'reverse') {
        container.dataset.flexDirection = 'normal';
    } else {
        container.dataset.flexDirection = 'reverse';
    }
}
