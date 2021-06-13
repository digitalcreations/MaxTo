
import commands from '$lib/commands.js';

export async function get({ params }) {

    const { category, name } = params;

    const { en } = commands;

    const command = { category, name, ...en[`${category}:${name}`] };
    
    return { 
        body: command
    };
}