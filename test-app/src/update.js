const span = document.querySelector('#counter');

let ctr = 0;
export default function update() {
	span.textContent = ctr++;
	setTimeout(update, 1000);
}
