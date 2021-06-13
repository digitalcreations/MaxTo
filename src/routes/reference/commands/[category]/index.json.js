
import commands from '$lib/commands.js';

export async function get({ params }) {

    const { en } = commands;

    const summaries = Object.keys(en)
        .map(fqn => {
            const [category, name] = fqn.split(':');
            return { category, name, ...en[fqn] };
        })
        .filter(({ category }) => category === params.category)
        .map(({ category, name, displayName, icon }) => {
            return {
                category,
                name,
                displayName,
                icon
            }
        });
    

    return { 
        body: summaries
    };
}