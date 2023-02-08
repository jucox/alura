export function executionTimeLogin(inSeconds: boolean = false) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            let divider = 1;
            let unit = 'milisegundos';

            if (inSeconds) {
                divider = 1000;
                unit = 'segundos';
            }

            const t1 = performance.now();
            const returnOriginalMethod = originalMethod.apply(this, args);
            const t2 = performance.now();

            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1)/1000} ${unit}.`);
            returnOriginalMethod;
        }

        return descriptor;
    }
}