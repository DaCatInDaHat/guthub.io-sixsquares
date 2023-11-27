window.onload = (event) => {
    for (let i = 1; i < 7; i++) {
        const newButton = document.createElement("button");
        newButton.id = i;
        newButton.style.cssText = `
        border: solid;
        width: 128px;
        height: 128px;
        margin: 5px;
        `;
        document.body.appendChild(newButton);
    };

    const buttons = document.querySelectorAll("button");
    let squares = []

    for (const button of buttons) {
        button.addEventListener("click", UpdateSqures);
    }

    function UpdateSqures(event) {
        const btn = event.target;
        btn.style.backgroundColor = "green";
        squares.push(btn.id);
        if (squares.length === 6) setTimeout(() => { ReverseSquares(); }, 1000)
    }

    function ReverseSquares() {
        squares.reverse();

        for (const [index, id] of squares.entries()) {
            const reverse_btn = document.getElementById(id);
            setTimeout(() => {
                reverse_btn.style.backgroundColor = "";
            }, index * 1000);
            squares = [];
        }
    }
};