// DOM Element
const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile-img');
const names = document.getElementById('name');
const date = document.getElementById('date');

// Get Animated class
const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

// Get Data Function
function getData(){

// Put img in the page
header.innerHTML = '<img src="./istockphoto-1389603578-1024x1024.jpg" alt="">';

// put title text in the page
title.innerHTML = 'Lorem ipsum dolor sit amet.';

// put paragraph text in the page
excerpt.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, exercitationem?';

// Put profile img in page
profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">';

// put user info to the page
names.innerHTML = 'Jone Doe';
date.innerHTML = 'Oct 08, 2020';

// Show Content in page
animated_bgs.forEach((animate) => animate.classList.remove('animated-bg'));
animated_bg_texts.forEach((text) => text.classList.remove('animated-bg-text'));
};

// Show Content after this time
setTimeout(getData,2500)