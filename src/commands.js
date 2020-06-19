export async function preload() {
    const res = await this.fetch(`commands.json`);
    const { en } = await res.json();

    return { commands: en };
}

export const categories =
[
    { name: "window", title: "Window" },
    { name: "ui", title: "UI" },
    { name: "mouse", title: "Mouse" },
    { name: "regions", title: "Regions" },
    { name: "license", title: "License" },
    { name: "settings", title: "Settings" }
];

export function filterCategory(commands, category) {
    return Object.keys(commands)
        .filter(k => k.startsWith(category + ":"))
        .map(k => map(k, commands[k]))
}

function map(name, command) {
    return {
        category: name.substr(0, name.indexOf(':')),
        name: name.substr(name.indexOf(':') + 1),
        ...command
    };
}

export function mapToTableOfContents(commands) {
    return categories
        .map(category => ({
            href: `/reference/commands/${category.name}`,
            ...category,
            children: filterCategory(commands, category.name)
                .map(command => ({
                    href: `/reference/commands/${category.name}/${command.name}`,
                    title: `${command.category}:${command.name} — ${command.displayName}`
                }))
        }));
}