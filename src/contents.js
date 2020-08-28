export default [
	{
		title: "Tutorial",
		href: "/tutorial",
		children: [
			{
				title: "What are regions?",
				href: "/tutorial/regions",
			},
			{
				title: "Keyboard shortcuts",
				href: "/tutorial/keyboard",
			},
			{
				title: "Recipes",
				href: "/tutorial/recipes"
			},
			{
				title: "Command line",
				href: "/tutorial/cli"
			},
			{
				title: "Virtual desktops",
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