
import triggers from '$lib/triggers.js';

export async function get({ params }) {

    const { en } = triggers;

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