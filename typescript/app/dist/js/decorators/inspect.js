export function inspect() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`Método: ${propertyKey}`);
            console.log(`Parâmetros: ${JSON.stringify(args)}`);
            const originalMethodReturn = originalMethod.apply(this, args);
            console.log(`Retorno: ${JSON.stringify(originalMethodReturn)}`);
            return originalMethodReturn;
        };
        return descriptor;
    };
}
