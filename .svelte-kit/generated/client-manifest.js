export { matchers } from './client-matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8')
];

export const dictionary = {
	"": [[1], [0], 2],
	"about": [[1], [0], 3],
	"links": [[1], [0], 4],
	"manual": [[1], [0], 5],
	"metronome": [[1], [0], 6],
	"terms": [[1], [0], 7],
	"tone_generator": [[1], [0], 8]
};