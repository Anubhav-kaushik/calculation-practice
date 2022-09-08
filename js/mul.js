async function multiplyPrac(totalQues, rangeStart, rangeEnd) {
    let quesSpeedRecord = [];

    const container = document.querySelector('.container');
    const quesDiv = document.querySelector('.showQues');
    const result = document.querySelector('.result');
    const progressBar = document.querySelector('.progress-bar')

    container.style.display = 'block';
    progressBar.style.display = 'block';
    result.style.display = 'none';

    const randNumList = [];

    for (let j = parseInt(rangeStart); j <= parseInt(rangeEnd); j++) {
        randNumList.push(j);
    }

    const timeStopper = stopWatch('#timer-mul');

    for (let i = 0; i < totalQues; i++) {
        const num1 = randChoice(randNumList);
        const num2 = randChoice(randNumList);

        const ans = num1 * num2;

        let num1Div = quesDiv.querySelector('.num[data-position="1"]');
        let num2Div = quesDiv.querySelector('.num[data-position="2"]');

        num1Div.innerHTML = num1;
        num2Div.innerHTML = num2;

        let startTime = Date.now();

        await checkUntilCorrect(ans, '.container-mul');

        let endTime = Date.now();
        let time = (endTime - startTime) / 1000;

        let temp = {}
        temp['num1'] = num1;
        temp['num2'] = num2;
        temp['answer'] = ans;
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

    return quesSpeedRecord;
}

function startMultiplication(fielsetSelector, button) {
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

    multiplyPrac(inputValues['num-ques'], inputValues['num1'], inputValues['num2'])
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
