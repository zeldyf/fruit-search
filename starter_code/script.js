const inputField = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	return fruits.filter((val) => val.toLowerCase().includes(str.toLowerCase()));
}

function searchHandler(e) {
	const results = search(inputField.value);
	inputField.value ? showSuggestions(results, inputField.value) : suggestions.replaceChildren();
}

function showSuggestions(results, inputVal) {
	suggestions.replaceChildren();
	for (let fruit of results) {
		const result = fruit.toLowerCase();
		const input = inputVal.toLowerCase();
		const boldStart = result.search(input);
		const newLi = document.createElement("li");
		const bold = document.createElement("b");
		const begWord = document.createElement("span");
		const endWord = document.createElement("span");
		if (result.startsWith(input)) {
			bold.innerText = inputVal[0].toUpperCase() + input.slice(1);
			endWord.innerText = result.slice(inputVal.length);
			newLi.appendChild(bold);
			newLi.appendChild(endWord);
		} else {
			begWord.innerText = fruit.slice(0, boldStart);
			endWord.innerText = fruit.slice(boldStart + inputVal.length);
			bold.innerText = input;
			newLi.appendChild(begWord);
			newLi.appendChild(bold);
			newLi.appendChild(endWord);
		}
		suggestions.appendChild(newLi);
	}
}

function useSuggestion(e) {
	inputField.value = e.target.innerText;
	suggestions.replaceChildren();
}

inputField.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);