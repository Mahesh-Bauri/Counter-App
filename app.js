const resetBtn = document.getElementById('reset-btn');
const decBtn = document.getElementById('dec-btn');
const incBtn = document.getElementById('inc-btn');
const out = document.getElementById('output');
let output = parseInt(out.innerText);

// reset Button
resetBtn.onclick = () => {
    out.style.color = "black"
    out.innerText = 0;
};

// increase Button
incBtn.onclick = () => {
    output = parseInt(out.innerText);

    output++;
    if (output > 0) {
        out.style.color = "green";
    }
    out.innerText = output;
};

// decrease button
decBtn.onclick = () => {
    output = parseInt(out.innerText);
    output--;

    if (output < 0) {
        out.style.color = "red";
    }
    out.innerText = output;
};