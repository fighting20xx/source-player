module.exports = {
	pages: {
		index: 'src/main.js',
		mini: 'src/mini/main.js',
	},
	pluginOptions: {
		electronBuilder: {
			nodeIntegration: true,
			builderOptions: {
				nsis: {
					oneClick: false,
					allowToChangeInstallationDirectory: true,
				},
				appId: 'com.hunlongyu.zy',
				copyright: 'Copyright @ 2020 Hunlongyu',
				productName: 'ZY Player',
				publish: [
					{
						provider: 'github',
						owner: 'Hunlongyu',
						repo: 'ZY-Player',
					},
				],
				mac: {
					icon: 'build/icon/icon.icns',
					category: 'public.app-category.developer-tools',
					target: 'default',
					extendInfo: {
						LSUIElement: 1,
					},
				},
				win: {
					icon: 'build/icons/icon.ico',
					target: 'nsis',
				},
				linux: {
					icon: 'build/icons/',
				},
				snap: {
					publish: ['github'],
				},
			},
		},
	},

	devServer: {
		open: true,
		host: '127.0.0.1',
		port: 9099,
		https: false,
		hotOnly: false,
		before: (app) => {},
	},
};
