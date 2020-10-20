import fs from 'fs';

export async function get(req, res, next) {
    const { name } = req.params;

    const file = await fs.promises.readFile(`node_modules/@mdi/svg/svg/${name}.svg`, "utf8");

    res.setHeader('Content-Type', 'image/svg+xml');
    res.end(file);
}