/**
 * @param {number} ms
 */
export default async function delay(ms) {
    await new Promise((it) => { setTimeout(it, ms) })
}