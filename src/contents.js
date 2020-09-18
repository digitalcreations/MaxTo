export default [
	{
		title: "Tutorial",
		href: "/tutorial",
		children: [
			{
				title: "What are regions?",
				icon: "rectangle-wide",
				text: 'The basic building blocks of MaxTo.',
				href: "/tutorial/regions",
			},
			{
				title: "Keyboard shortcuts",
				text: 'Learn how to use the default keyboard shortcuts.',
				icon: 'keyboard',
				href: "/tutorial/keyboard",
			},
			{
				title: "Snapping",
				text: "Windows become slightly magnetic when you use MaxTo.",
				icon: "magnet",
				href: "/tutorial/snap"
			},
			{
				title: "Expanding windows",
				text: 'Like snapping, just with the keyboard.',
				icon: 'arrows-h',
				href: "/tutorial/expand",
			},
			{
				title: "Recipes",
				text: "Create your own recipes to automate your workflow.",
				icon: "code-branch",
				href: "/tutorial/recipes"
			},
			{
				title: "Command line",
				icon: "terminal",
				text: "Do anything with the command line.",
				href: "/tutorial/cli"
			},
			{
				title: "Virtual desktops",
				icon: "desktop",
				text: "Use the virtual desktop feature most effectively.",
				href: "/tutorial/virtual_desktops"
			}
		]
	},
	{
		title: "How-to",
		href: "/how-to",
		children: [
			{
				title: "Join multiple monitors into one",
				href: "/how-to/join-multiple-monitors"
			},
			{
				title: "Launch web browser into region",
				href: "/how-to/launch-web-browser"
			},
			{
				title: "Locate a specific window",
				href: "/how-to/locate-window"
			},
			{
				title: "Lock window in place",
				href: "/how-to/lock-window"
			}
		]
	},
	{
		title: 'Reference manual',
		href: '/reference',
		children: [
			{
				title: 'Triggers',
                href: '/reference/triggers',
                children: [] // this will be filled by _layout.svelte
            },
			{
				title: 'Commands',
                href: '/reference/commands',
                children: [] // this will be filled by _layout.svelte
			},
			{
				title: 'Settings',
				href: '/reference/settings',
				children: [
					{
						title: "Recipes",
						href: '/reference/settings/recipes'
					},
					{
						title: "Window behavior",
						href: '/reference/settings/behavior'
					},
					{
						title: "Monitor",
						href: '/reference/settings/monitor'
					},
					{
						title: "Compatibility",
						href: '/reference/settings/compatibility'
					},
					{
						title: "Language",
						href: '/reference/settings/language'
					},
					{
						title: "Updates",
						href: '/reference/settings/updates'
					},
					{
						title: "Startup",
						href: '/reference/settings/startup'
					},
					{
						title: "Error reporting",
						href: '/reference/settings/error_reporting'
					},
					{
						title: "License",
						href: '/reference/settings/license'
					}
				]
			}
		]
	}
];