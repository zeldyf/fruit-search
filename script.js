const inputField = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	return fruits.filter((val) => val.toLowerCase().includes(str.toLowerCase()));
}

function searchHandler(e) {
	const results = search(inputField.value);
	inputField.value === "" ? suggestions.replaceChildren() : showSuggestions(results, inputField.value);
}

function showSuggestions(results, inputVal) {
	suggestions.replaceChildren();
	for (let result of results) {
		const newLi = document.createElement("li");
		const input = result.toLowerCase();
		const startIdx = input.search(inputVal);
		const upperCaseResult = inputVal.charAt(0).toUpperCase() + inputVal.slice(1);

		if (input.startsWith(inputVal.toLowerCase())) {
			const toStyle = document.createElement("span");
			toStyle.className = "bold";
			toStyle.innerText = upperCaseResult;
			const noStyle = document.createElement("span");
			noStyle.innerText = input.slice(inputVal.length);
			newLi.appendChild(toStyle)
			newLi.appendChild(noStyle);
		} else {
			const begWord = document.createElement("span");
			begWord.innerText = result.slice(0, startIdx);
			const endWord = document.createElement("span");
			endWord.innerText = result.slice(startIdx + inputVal.length);
			const toStyle = document.createElement("span");
			toStyle.className = "bold";
			toStyle.innerText = inputVal;
			newLi.appendChild(begWord);
			newLi.appendChild(toStyle);
			newLi.appendChild(endWord);
		}
 		suggestions.appendChild(newLi)
	}
}

function useSuggestion(e) {
	inputField.value = e.target.innerText;
	suggestions.replaceChildren();
}

inputField.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
