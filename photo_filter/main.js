const wrapper = document.getElementById('imageWrapper');
const mainImg = document.getElementById('mainImg');
let wrapperBB;

function rad2deg(x, y) {
  const degrees = (180 / Math.PI) * Math.atan2(y, x);
  return degrees;
}

window.onload = () => {
	const imgSrc = mainImg.getAttribute('src');
	
	wrapperBB = wrapper.getBoundingClientRect();
	wrapper.style.setProperty('--src', `url(${imgSrc})`)
}

window.onresize = () => {
	//update values when window resize
	wrapperBB = wrapper.getBoundingClientRect();
}

document.addEventListener('mouseleave', () => {
	wrapper.classList.add('mouseout');
	
	wrapper.style.setProperty('--ix', 0);
	wrapper.style.setProperty('--iy', 0);
	wrapper.style.setProperty('--hm', 0);
	
	wrapper.ontransitionend = () => {
		wrapper.classList.remove('mouseout');
	}
});

document.addEventListener('mousemove', () => {
	const mx = event.clientX;
	const my = event.clientY;
	const imgCX = wrapperBB.x + (wrapperBB.width / 2);
	const imgCY = wrapperBB.y + (wrapperBB.height / 2);
	
	const fx = mx - imgCX;
	const fy = my - imgCY;
	const hueMod = rad2deg(fx, fy);

	wrapper.style.setProperty('--ix', fx);
	wrapper.style.setProperty('--iy', fy);
	wrapper.style.setProperty('--hm', hueMod)
});