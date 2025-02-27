//your JS code here. If required.
const container = document.querySelector('.container');
        const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5', '#FF33A1', '#FF8C33'];

        for (let i = 0; i < 800; i++) {
            const square = document.createElement('div');
            square.classList.add('square');

            square.addEventListener('mouseover', () => {
                const color = colors[Math.floor(Math.random() * colors.length)];
                square.style.backgroundColor = color;
                square.style.boxShadow = `0 0 5px ${color}, 0 0 10px ${color}`;
            });

            square.addEventListener('mouseout', () => {
                square.style.backgroundColor = '#222';
                square.style.boxShadow = '0 0 0';
            });

            container.appendChild(square);
		}