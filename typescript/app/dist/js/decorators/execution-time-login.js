export function executionTimeLogin(inSeconds = false) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let divider = 1;
            let unit = 'milisegundos';
            if (inSeconds) {
                divider = 1000;
                unit = 'segundos';
            }
            const t1 = performance.now();
            const returnOriginalMethod = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / 1000} ${unit}.`);
            returnOriginalMethod;
        };
        return descriptor;
    };
}
