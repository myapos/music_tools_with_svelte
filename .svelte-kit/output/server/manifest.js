export const manifest = {
	appDir: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","mstile-150x150.png","site.webmanifest","service-worker.js"]),
	mimeTypes: {".png":"image/png",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".webmanifest":"application/manifest+json"},
	_: {
		entry: {"file":"_app/immutable/start-595a1e7e.js","imports":["_app/immutable/start-595a1e7e.js","_app/immutable/chunks/index-e0c17b50.js","_app/immutable/chunks/singletons-9c55d055.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 2
			},
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 3
			},
			{
				type: 'page',
				id: "links",
				pattern: /^\/links\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 4
			},
			{
				type: 'page',
				id: "manual",
				pattern: /^\/manual\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 5
			},
			{
				type: 'page',
				id: "metronome",
				pattern: /^\/metronome\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 6
			},
			{
				type: 'page',
				id: "terms",
				pattern: /^\/terms\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 7
			},
			{
				type: 'page',
				id: "tone_generator",
				pattern: /^\/tone_generator\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 8
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
