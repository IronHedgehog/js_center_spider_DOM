'use strict';

// write code here

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const leftPosition = (wall.offsetWidth - spider.offsetWidth) / 2;

const topPosition = (wall.offsetHeight - spider.offsetHeight) / 2;

spider.style.left = leftPosition - 10 + 'px';
spider.style.top = topPosition - 10 + 'px';
