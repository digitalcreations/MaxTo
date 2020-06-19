import fs from 'fs';
import DomParser from 'dom-parser';

export async function get(req, res, next) {
    const { set, name } = req.params;

    const sprites = await fs.promises.readFile(`node_modules/@fortawesome/fontawesome-pro/sprites/${set}.svg`, "utf8");
    const doc = new DomParser().parseFromString(sprites, 'text/xml');
    let sprite = doc.getElementById(name);

    if (sprite == null) {
        sprite = doc.getElementById('question');
    }

    res.setHeader('Content-Type', 'image/svg+xml');
    res.end(`<svg viewBox="${sprite.getAttribute("viewBox")}" width="100%" height="100%">${sprite.innerHTML}</svg>`);
}