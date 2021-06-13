
import triggers from '$lib/triggers.js';

export async function get({ params }) {

    const { category, name } = params;

    const { en } = triggers;

    const command = { category, name, ...en[`${category}:${name}`] };
    
    return { 
        body: command
    };
}