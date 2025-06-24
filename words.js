
const initGame = async () => {
    const res = await fetch("http://localhost:5000/random-movie-word");
    const data = await res.json();

    if (!data.word) return alert("Failed to fetch word");

    initTimer(30);
    let wordArray = data.word.toLowerCase().split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = data.hint;
    correctWord = data.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
}
