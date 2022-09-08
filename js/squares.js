async function squaresPrac(totalQues, rangeStart, rangeEnd) {
    let quesSpeedRecord = [];

    let squaresContainer = document.querySelector('.container');
    let quesDiv = document.querySelector('.showQues');
    let result = document.querySelector('.result');

    squaresContainer.style.display = 'block';
    result.style.display = 'none';

    const timeStopper = stopWatch('.timer');

    const randNumList = [];

    for (let j = parseInt(rangeStart); j <= parseInt(rangeEnd); j++) {
        randNumList.push(j);
    }

    for (let i = 0; i < totalQues; i++) {
        const num1 = randChoice(randNumList);

        console.log(num1);

        const ans = num1 ** 2;

        let num1Div = quesDiv.querySelector('.num[data-position="1"]');

        num1Div.innerHTML = num1;

        let startTime = Date.now();

        await checkUntilCorrect(ans, '.container-squares');

        let endTime = Date.now();
        let time = (endTime - startTime) / 1000;

        let temp = {}
        temp['num1'] = num1;
        temp['answer'] = ans;
        temp['time'] = parseFloat(time.toFixed(2));

        quesSpeedRecord.push(temp);
    }
    timeStopper.stop();

    
    squaresContainer.style.display = 'none';
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

    return quesSpeedRecord;
}

function startSquaring(fielsetSelector, button) {
    button.innerHTML = 'Restart';
    const fieldset = document.querySelector(fielsetSelector);

    const inputs = fieldset.querySelectorAll('input');

    const inputValues = {}

    for (let inp of inputs) {
        const inputId = inp.getAttribute('id');
        const inputValue = inp.value;

        inputValues[inputId] = inputValue;
    }

    squaresPrac(inputValues['num-ques'], inputValues['start'], inputValues['end'])
}
