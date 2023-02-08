export function escape(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        let originalMethodReturn = originalMethod.apply(this, args);
        if (typeof originalMethodReturn === 'string') {
            originalMethodReturn = originalMethodReturn
                .replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return originalMethodReturn;
    };
    return descriptor;
}
