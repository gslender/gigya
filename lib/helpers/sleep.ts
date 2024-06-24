/**
 * Resolve promise after sleeping for X ms.
 */
export function sleep(ms: number) {
    return new Promise((resolve, reject) => {
        if (ms === 0) {
            setImmediate(resolve);
        } else {
            setTimeout(() => resolve(undefined), ms);
        }
    });
}

export default sleep;