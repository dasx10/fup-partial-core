import type TupleImpactType     from 'fup-tuple-impact-type';
import type TupleConsistentType from 'fup-tuple-consistent-type';

export type PartialCore = <
    Parameters extends unknown[],
    Result     extends unknown,
    Arguments  extends TupleConsistentType<Parameters>
> (executor: (...parameters: Parameters) => Result, ...startArguments: Arguments) => <NextArguments extends TupleImpactType<Parameters, Arguments>>(...nextArguments: NextArguments) => Result;

/**
 * @example
 * const add       = (z, y, x) => x + y + z; // (z, y, x) => x + y + z
 * 
 * const add1      = add(1);                 // (y, x)    => x + y + 1
 * const result1   = addA(4, 5);             // 10
 * 
 * const add2_3    = add(2, 3);              // (x)       => x + 3 + 2
 * const result2_3 = addB(6);                // 11
 */
declare const partialCore: PartialCore;
export default partialCore;