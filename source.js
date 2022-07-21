const partialCore = (executor, ...startArguments) => Object.defineProperty(
    (...nextArguments) => executor(...startArguments, ...nextArguments),
    'length',
    {
        enumerable   : false,
        configurable : false,
        writable     : false,
        value        : nextArguments.length - startArguments.length
    }
);

module.exports = partialCore;