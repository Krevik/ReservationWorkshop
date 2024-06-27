
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Workshop
 * 
 */
export type Workshop = $Result.DefaultSelection<Prisma.$WorkshopPayload>
/**
 * Model Visit
 * 
 */
export type Visit = $Result.DefaultSelection<Prisma.$VisitPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const VisitStatus: {
  WAITING_FOR_ACCEPTANCE: 'WAITING_FOR_ACCEPTANCE',
  ACCEPTED: 'ACCEPTED',
  FINISHED: 'FINISHED'
};

export type VisitStatus = (typeof VisitStatus)[keyof typeof VisitStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type VisitStatus = $Enums.VisitStatus

export const VisitStatus: typeof $Enums.VisitStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.workshop`: Exposes CRUD operations for the **Workshop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workshops
    * const workshops = await prisma.workshop.findMany()
    * ```
    */
  get workshop(): Prisma.WorkshopDelegate<ExtArgs>;

  /**
   * `prisma.visit`: Exposes CRUD operations for the **Visit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visits
    * const visits = await prisma.visit.findMany()
    * ```
    */
  get visit(): Prisma.VisitDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Workshop: 'Workshop',
    Visit: 'Visit'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'workshop' | 'visit'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Workshop: {
        payload: Prisma.$WorkshopPayload<ExtArgs>
        fields: Prisma.WorkshopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkshopFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorkshopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkshopFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorkshopPayload>
          }
          findFirst: {
            args: Prisma.WorkshopFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorkshopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkshopFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorkshopPayload>
          }
          findMany: {
            args: Prisma.WorkshopFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorkshopPayload>[]
          }
          create: {
            args: Prisma.WorkshopCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorkshopPayload>
          }
          createMany: {
            args: Prisma.WorkshopCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WorkshopDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorkshopPayload>
          }
          update: {
            args: Prisma.WorkshopUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorkshopPayload>
          }
          deleteMany: {
            args: Prisma.WorkshopDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WorkshopUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WorkshopUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorkshopPayload>
          }
          aggregate: {
            args: Prisma.WorkshopAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWorkshop>
          }
          groupBy: {
            args: Prisma.WorkshopGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WorkshopGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkshopCountArgs<ExtArgs>,
            result: $Utils.Optional<WorkshopCountAggregateOutputType> | number
          }
        }
      }
      Visit: {
        payload: Prisma.$VisitPayload<ExtArgs>
        fields: Prisma.VisitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          findFirst: {
            args: Prisma.VisitFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          findMany: {
            args: Prisma.VisitFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>[]
          }
          create: {
            args: Prisma.VisitCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          createMany: {
            args: Prisma.VisitCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VisitDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          update: {
            args: Prisma.VisitUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          deleteMany: {
            args: Prisma.VisitDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VisitUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VisitUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          aggregate: {
            args: Prisma.VisitAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVisit>
          }
          groupBy: {
            args: Prisma.VisitGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VisitGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisitCountArgs<ExtArgs>,
            result: $Utils.Optional<VisitCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    workshops: number
    visits: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workshops?: boolean | UserCountOutputTypeCountWorkshopsArgs
    visits?: boolean | UserCountOutputTypeCountVisitsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkshopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkshopWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitWhereInput
  }



  /**
   * Count Type WorkshopCountOutputType
   */

  export type WorkshopCountOutputType = {
    visits: number
  }

  export type WorkshopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visits?: boolean | WorkshopCountOutputTypeCountVisitsArgs
  }

  // Custom InputTypes

  /**
   * WorkshopCountOutputType without action
   */
  export type WorkshopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkshopCountOutputType
     */
    select?: WorkshopCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * WorkshopCountOutputType without action
   */
  export type WorkshopCountOutputTypeCountVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    email: string | null
    role: $Enums.UserRole | null
    name: string | null
    authToken: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    email: string | null
    role: $Enums.UserRole | null
    name: string | null
    authToken: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    email: number
    role: number
    name: number
    authToken: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    role?: true
    name?: true
    authToken?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    role?: true
    name?: true
    authToken?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    role?: true
    name?: true
    authToken?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    email: string
    role: $Enums.UserRole
    name: string
    authToken: string | null
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    role?: boolean
    name?: boolean
    authToken?: boolean
    password?: boolean
    workshops?: boolean | User$workshopsArgs<ExtArgs>
    visits?: boolean | User$visitsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    email?: boolean
    role?: boolean
    name?: boolean
    authToken?: boolean
    password?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workshops?: boolean | User$workshopsArgs<ExtArgs>
    visits?: boolean | User$visitsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      workshops: Prisma.$WorkshopPayload<ExtArgs>[]
      visits: Prisma.$VisitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      email: string
      role: $Enums.UserRole
      name: string
      authToken: string | null
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    workshops<T extends User$workshopsArgs<ExtArgs> = {}>(args?: Subset<T, User$workshopsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkshopPayload<ExtArgs>, T, 'findMany'> | Null>;

    visits<T extends User$visitsArgs<ExtArgs> = {}>(args?: Subset<T, User$visitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly name: FieldRef<"User", 'String'>
    readonly authToken: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.workshops
   */
  export type User$workshopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workshop
     */
    select?: WorkshopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkshopInclude<ExtArgs> | null
    where?: WorkshopWhereInput
    orderBy?: WorkshopOrderByWithRelationInput | WorkshopOrderByWithRelationInput[]
    cursor?: WorkshopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkshopScalarFieldEnum | WorkshopScalarFieldEnum[]
  }


  /**
   * User.visits
   */
  export type User$visitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitInclude<ExtArgs> | null
    where?: VisitWhereInput
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[]
    cursor?: VisitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitScalarFieldEnum | VisitScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Workshop
   */

  export type AggregateWorkshop = {
    _count: WorkshopCountAggregateOutputType | null
    _avg: WorkshopAvgAggregateOutputType | null
    _sum: WorkshopSumAggregateOutputType | null
    _min: WorkshopMinAggregateOutputType | null
    _max: WorkshopMaxAggregateOutputType | null
  }

  export type WorkshopAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type WorkshopSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type WorkshopMinAggregateOutputType = {
    id: number | null
    name: string | null
    ownerId: number | null
  }

  export type WorkshopMaxAggregateOutputType = {
    id: number | null
    name: string | null
    ownerId: number | null
  }

  export type WorkshopCountAggregateOutputType = {
    id: number
    name: number
    ownerId: number
    _all: number
  }


  export type WorkshopAvgAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type WorkshopSumAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type WorkshopMinAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
  }

  export type WorkshopMaxAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
  }

  export type WorkshopCountAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    _all?: true
  }

  export type WorkshopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workshop to aggregate.
     */
    where?: WorkshopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workshops to fetch.
     */
    orderBy?: WorkshopOrderByWithRelationInput | WorkshopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkshopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workshops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workshops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workshops
    **/
    _count?: true | WorkshopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkshopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkshopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkshopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkshopMaxAggregateInputType
  }

  export type GetWorkshopAggregateType<T extends WorkshopAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkshop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkshop[P]>
      : GetScalarType<T[P], AggregateWorkshop[P]>
  }




  export type WorkshopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkshopWhereInput
    orderBy?: WorkshopOrderByWithAggregationInput | WorkshopOrderByWithAggregationInput[]
    by: WorkshopScalarFieldEnum[] | WorkshopScalarFieldEnum
    having?: WorkshopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkshopCountAggregateInputType | true
    _avg?: WorkshopAvgAggregateInputType
    _sum?: WorkshopSumAggregateInputType
    _min?: WorkshopMinAggregateInputType
    _max?: WorkshopMaxAggregateInputType
  }

  export type WorkshopGroupByOutputType = {
    id: number
    name: string
    ownerId: number
    _count: WorkshopCountAggregateOutputType | null
    _avg: WorkshopAvgAggregateOutputType | null
    _sum: WorkshopSumAggregateOutputType | null
    _min: WorkshopMinAggregateOutputType | null
    _max: WorkshopMaxAggregateOutputType | null
  }

  type GetWorkshopGroupByPayload<T extends WorkshopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkshopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkshopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkshopGroupByOutputType[P]>
            : GetScalarType<T[P], WorkshopGroupByOutputType[P]>
        }
      >
    >


  export type WorkshopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    visits?: boolean | Workshop$visitsArgs<ExtArgs>
    _count?: boolean | WorkshopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workshop"]>

  export type WorkshopSelectScalar = {
    id?: boolean
    name?: boolean
    ownerId?: boolean
  }

  export type WorkshopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    visits?: boolean | Workshop$visitsArgs<ExtArgs>
    _count?: boolean | WorkshopCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $WorkshopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workshop"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      visits: Prisma.$VisitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      ownerId: number
    }, ExtArgs["result"]["workshop"]>
    composites: {}
  }


  type WorkshopGetPayload<S extends boolean | null | undefined | WorkshopDefaultArgs> = $Result.GetResult<Prisma.$WorkshopPayload, S>

  type WorkshopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorkshopFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkshopCountAggregateInputType | true
    }

  export interface WorkshopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workshop'], meta: { name: 'Workshop' } }
    /**
     * Find zero or one Workshop that matches the filter.
     * @param {WorkshopFindUniqueArgs} args - Arguments to find a Workshop
     * @example
     * // Get one Workshop
     * const workshop = await prisma.workshop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WorkshopFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WorkshopFindUniqueArgs<ExtArgs>>
    ): Prisma__WorkshopClient<$Result.GetResult<Prisma.$WorkshopPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Workshop that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WorkshopFindUniqueOrThrowArgs} args - Arguments to find a Workshop
     * @example
     * // Get one Workshop
     * const workshop = await prisma.workshop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WorkshopFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WorkshopFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WorkshopClient<$Result.GetResult<Prisma.$WorkshopPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Workshop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkshopFindFirstArgs} args - Arguments to find a Workshop
     * @example
     * // Get one Workshop
     * const workshop = await prisma.workshop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WorkshopFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WorkshopFindFirstArgs<ExtArgs>>
    ): Prisma__WorkshopClient<$Result.GetResult<Prisma.$WorkshopPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Workshop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkshopFindFirstOrThrowArgs} args - Arguments to find a Workshop
     * @example
     * // Get one Workshop
     * const workshop = await prisma.workshop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WorkshopFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WorkshopFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WorkshopClient<$Result.GetResult<Prisma.$WorkshopPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Workshops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkshopFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workshops
     * const workshops = await prisma.workshop.findMany()
     * 
     * // Get first 10 Workshops
     * const workshops = await prisma.workshop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workshopWithIdOnly = await prisma.workshop.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WorkshopFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WorkshopFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkshopPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Workshop.
     * @param {WorkshopCreateArgs} args - Arguments to create a Workshop.
     * @example
     * // Create one Workshop
     * const Workshop = await prisma.workshop.create({
     *   data: {
     *     // ... data to create a Workshop
     *   }
     * })
     * 
    **/
    create<T extends WorkshopCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WorkshopCreateArgs<ExtArgs>>
    ): Prisma__WorkshopClient<$Result.GetResult<Prisma.$WorkshopPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Workshops.
     *     @param {WorkshopCreateManyArgs} args - Arguments to create many Workshops.
     *     @example
     *     // Create many Workshops
     *     const workshop = await prisma.workshop.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WorkshopCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WorkshopCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Workshop.
     * @param {WorkshopDeleteArgs} args - Arguments to delete one Workshop.
     * @example
     * // Delete one Workshop
     * const Workshop = await prisma.workshop.delete({
     *   where: {
     *     // ... filter to delete one Workshop
     *   }
     * })
     * 
    **/
    delete<T extends WorkshopDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WorkshopDeleteArgs<ExtArgs>>
    ): Prisma__WorkshopClient<$Result.GetResult<Prisma.$WorkshopPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Workshop.
     * @param {WorkshopUpdateArgs} args - Arguments to update one Workshop.
     * @example
     * // Update one Workshop
     * const workshop = await prisma.workshop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WorkshopUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WorkshopUpdateArgs<ExtArgs>>
    ): Prisma__WorkshopClient<$Result.GetResult<Prisma.$WorkshopPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Workshops.
     * @param {WorkshopDeleteManyArgs} args - Arguments to filter Workshops to delete.
     * @example
     * // Delete a few Workshops
     * const { count } = await prisma.workshop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WorkshopDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WorkshopDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workshops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkshopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workshops
     * const workshop = await prisma.workshop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WorkshopUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WorkshopUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Workshop.
     * @param {WorkshopUpsertArgs} args - Arguments to update or create a Workshop.
     * @example
     * // Update or create a Workshop
     * const workshop = await prisma.workshop.upsert({
     *   create: {
     *     // ... data to create a Workshop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workshop we want to update
     *   }
     * })
    **/
    upsert<T extends WorkshopUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WorkshopUpsertArgs<ExtArgs>>
    ): Prisma__WorkshopClient<$Result.GetResult<Prisma.$WorkshopPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Workshops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkshopCountArgs} args - Arguments to filter Workshops to count.
     * @example
     * // Count the number of Workshops
     * const count = await prisma.workshop.count({
     *   where: {
     *     // ... the filter for the Workshops we want to count
     *   }
     * })
    **/
    count<T extends WorkshopCountArgs>(
      args?: Subset<T, WorkshopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkshopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workshop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkshopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkshopAggregateArgs>(args: Subset<T, WorkshopAggregateArgs>): Prisma.PrismaPromise<GetWorkshopAggregateType<T>>

    /**
     * Group by Workshop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkshopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkshopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkshopGroupByArgs['orderBy'] }
        : { orderBy?: WorkshopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkshopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkshopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workshop model
   */
  readonly fields: WorkshopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workshop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkshopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    visits<T extends Workshop$visitsArgs<ExtArgs> = {}>(args?: Subset<T, Workshop$visitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Workshop model
   */ 
  interface WorkshopFieldRefs {
    readonly id: FieldRef<"Workshop", 'Int'>
    readonly name: FieldRef<"Workshop", 'String'>
    readonly ownerId: FieldRef<"Workshop", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Workshop findUnique
   */
  export type WorkshopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workshop
     */
    select?: WorkshopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkshopInclude<ExtArgs> | null
    /**
     * Filter, which Workshop to fetch.
     */
    where: WorkshopWhereUniqueInput
  }


  /**
   * Workshop findUniqueOrThrow
   */
  export type WorkshopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workshop
     */
    select?: WorkshopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkshopInclude<ExtArgs> | null
    /**
     * Filter, which Workshop to fetch.
     */
    where: WorkshopWhereUniqueInput
  }


  /**
   * Workshop findFirst
   */
  export type WorkshopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workshop
     */
    select?: WorkshopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkshopInclude<ExtArgs> | null
    /**
     * Filter, which Workshop to fetch.
     */
    where?: WorkshopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workshops to fetch.
     */
    orderBy?: WorkshopOrderByWithRelationInput | WorkshopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workshops.
     */
    cursor?: WorkshopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workshops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workshops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workshops.
     */
    distinct?: WorkshopScalarFieldEnum | WorkshopScalarFieldEnum[]
  }


  /**
   * Workshop findFirstOrThrow
   */
  export type WorkshopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workshop
     */
    select?: WorkshopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkshopInclude<ExtArgs> | null
    /**
     * Filter, which Workshop to fetch.
     */
    where?: WorkshopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workshops to fetch.
     */
    orderBy?: WorkshopOrderByWithRelationInput | WorkshopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workshops.
     */
    cursor?: WorkshopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workshops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workshops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workshops.
     */
    distinct?: WorkshopScalarFieldEnum | WorkshopScalarFieldEnum[]
  }


  /**
   * Workshop findMany
   */
  export type WorkshopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workshop
     */
    select?: WorkshopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkshopInclude<ExtArgs> | null
    /**
     * Filter, which Workshops to fetch.
     */
    where?: WorkshopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workshops to fetch.
     */
    orderBy?: WorkshopOrderByWithRelationInput | WorkshopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workshops.
     */
    cursor?: WorkshopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workshops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workshops.
     */
    skip?: number
    distinct?: WorkshopScalarFieldEnum | WorkshopScalarFieldEnum[]
  }


  /**
   * Workshop create
   */
  export type WorkshopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workshop
     */
    select?: WorkshopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkshopInclude<ExtArgs> | null
    /**
     * The data needed to create a Workshop.
     */
    data: XOR<WorkshopCreateInput, WorkshopUncheckedCreateInput>
  }


  /**
   * Workshop createMany
   */
  export type WorkshopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workshops.
     */
    data: WorkshopCreateManyInput | WorkshopCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Workshop update
   */
  export type WorkshopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workshop
     */
    select?: WorkshopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkshopInclude<ExtArgs> | null
    /**
     * The data needed to update a Workshop.
     */
    data: XOR<WorkshopUpdateInput, WorkshopUncheckedUpdateInput>
    /**
     * Choose, which Workshop to update.
     */
    where: WorkshopWhereUniqueInput
  }


  /**
   * Workshop updateMany
   */
  export type WorkshopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workshops.
     */
    data: XOR<WorkshopUpdateManyMutationInput, WorkshopUncheckedUpdateManyInput>
    /**
     * Filter which Workshops to update
     */
    where?: WorkshopWhereInput
  }


  /**
   * Workshop upsert
   */
  export type WorkshopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workshop
     */
    select?: WorkshopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkshopInclude<ExtArgs> | null
    /**
     * The filter to search for the Workshop to update in case it exists.
     */
    where: WorkshopWhereUniqueInput
    /**
     * In case the Workshop found by the `where` argument doesn't exist, create a new Workshop with this data.
     */
    create: XOR<WorkshopCreateInput, WorkshopUncheckedCreateInput>
    /**
     * In case the Workshop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkshopUpdateInput, WorkshopUncheckedUpdateInput>
  }


  /**
   * Workshop delete
   */
  export type WorkshopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workshop
     */
    select?: WorkshopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkshopInclude<ExtArgs> | null
    /**
     * Filter which Workshop to delete.
     */
    where: WorkshopWhereUniqueInput
  }


  /**
   * Workshop deleteMany
   */
  export type WorkshopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workshops to delete
     */
    where?: WorkshopWhereInput
  }


  /**
   * Workshop.visits
   */
  export type Workshop$visitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitInclude<ExtArgs> | null
    where?: VisitWhereInput
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[]
    cursor?: VisitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitScalarFieldEnum | VisitScalarFieldEnum[]
  }


  /**
   * Workshop without action
   */
  export type WorkshopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workshop
     */
    select?: WorkshopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkshopInclude<ExtArgs> | null
  }



  /**
   * Model Visit
   */

  export type AggregateVisit = {
    _count: VisitCountAggregateOutputType | null
    _avg: VisitAvgAggregateOutputType | null
    _sum: VisitSumAggregateOutputType | null
    _min: VisitMinAggregateOutputType | null
    _max: VisitMaxAggregateOutputType | null
  }

  export type VisitAvgAggregateOutputType = {
    id: number | null
    workshopId: number | null
    reserverUserId: number | null
  }

  export type VisitSumAggregateOutputType = {
    id: number | null
    workshopId: number | null
    reserverUserId: number | null
  }

  export type VisitMinAggregateOutputType = {
    id: number | null
    date: Date | null
    workshopId: number | null
    status: $Enums.VisitStatus | null
    reserverUserId: number | null
  }

  export type VisitMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    workshopId: number | null
    status: $Enums.VisitStatus | null
    reserverUserId: number | null
  }

  export type VisitCountAggregateOutputType = {
    id: number
    date: number
    workshopId: number
    status: number
    reserverUserId: number
    _all: number
  }


  export type VisitAvgAggregateInputType = {
    id?: true
    workshopId?: true
    reserverUserId?: true
  }

  export type VisitSumAggregateInputType = {
    id?: true
    workshopId?: true
    reserverUserId?: true
  }

  export type VisitMinAggregateInputType = {
    id?: true
    date?: true
    workshopId?: true
    status?: true
    reserverUserId?: true
  }

  export type VisitMaxAggregateInputType = {
    id?: true
    date?: true
    workshopId?: true
    status?: true
    reserverUserId?: true
  }

  export type VisitCountAggregateInputType = {
    id?: true
    date?: true
    workshopId?: true
    status?: true
    reserverUserId?: true
    _all?: true
  }

  export type VisitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visit to aggregate.
     */
    where?: VisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visits to fetch.
     */
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Visits
    **/
    _count?: true | VisitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitMaxAggregateInputType
  }

  export type GetVisitAggregateType<T extends VisitAggregateArgs> = {
        [P in keyof T & keyof AggregateVisit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisit[P]>
      : GetScalarType<T[P], AggregateVisit[P]>
  }




  export type VisitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitWhereInput
    orderBy?: VisitOrderByWithAggregationInput | VisitOrderByWithAggregationInput[]
    by: VisitScalarFieldEnum[] | VisitScalarFieldEnum
    having?: VisitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitCountAggregateInputType | true
    _avg?: VisitAvgAggregateInputType
    _sum?: VisitSumAggregateInputType
    _min?: VisitMinAggregateInputType
    _max?: VisitMaxAggregateInputType
  }

  export type VisitGroupByOutputType = {
    id: number
    date: Date
    workshopId: number
    status: $Enums.VisitStatus
    reserverUserId: number
    _count: VisitCountAggregateOutputType | null
    _avg: VisitAvgAggregateOutputType | null
    _sum: VisitSumAggregateOutputType | null
    _min: VisitMinAggregateOutputType | null
    _max: VisitMaxAggregateOutputType | null
  }

  type GetVisitGroupByPayload<T extends VisitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitGroupByOutputType[P]>
            : GetScalarType<T[P], VisitGroupByOutputType[P]>
        }
      >
    >


  export type VisitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    workshopId?: boolean
    status?: boolean
    reserverUserId?: boolean
    workshop?: boolean | WorkshopDefaultArgs<ExtArgs>
    reservedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visit"]>

  export type VisitSelectScalar = {
    id?: boolean
    date?: boolean
    workshopId?: boolean
    status?: boolean
    reserverUserId?: boolean
  }

  export type VisitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workshop?: boolean | WorkshopDefaultArgs<ExtArgs>
    reservedBy?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $VisitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Visit"
    objects: {
      workshop: Prisma.$WorkshopPayload<ExtArgs>
      reservedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      workshopId: number
      status: $Enums.VisitStatus
      reserverUserId: number
    }, ExtArgs["result"]["visit"]>
    composites: {}
  }


  type VisitGetPayload<S extends boolean | null | undefined | VisitDefaultArgs> = $Result.GetResult<Prisma.$VisitPayload, S>

  type VisitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VisitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VisitCountAggregateInputType | true
    }

  export interface VisitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Visit'], meta: { name: 'Visit' } }
    /**
     * Find zero or one Visit that matches the filter.
     * @param {VisitFindUniqueArgs} args - Arguments to find a Visit
     * @example
     * // Get one Visit
     * const visit = await prisma.visit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VisitFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VisitFindUniqueArgs<ExtArgs>>
    ): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Visit that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VisitFindUniqueOrThrowArgs} args - Arguments to find a Visit
     * @example
     * // Get one Visit
     * const visit = await prisma.visit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VisitFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VisitFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Visit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitFindFirstArgs} args - Arguments to find a Visit
     * @example
     * // Get one Visit
     * const visit = await prisma.visit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VisitFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VisitFindFirstArgs<ExtArgs>>
    ): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Visit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitFindFirstOrThrowArgs} args - Arguments to find a Visit
     * @example
     * // Get one Visit
     * const visit = await prisma.visit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VisitFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VisitFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Visits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visits
     * const visits = await prisma.visit.findMany()
     * 
     * // Get first 10 Visits
     * const visits = await prisma.visit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitWithIdOnly = await prisma.visit.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VisitFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VisitFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Visit.
     * @param {VisitCreateArgs} args - Arguments to create a Visit.
     * @example
     * // Create one Visit
     * const Visit = await prisma.visit.create({
     *   data: {
     *     // ... data to create a Visit
     *   }
     * })
     * 
    **/
    create<T extends VisitCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VisitCreateArgs<ExtArgs>>
    ): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Visits.
     *     @param {VisitCreateManyArgs} args - Arguments to create many Visits.
     *     @example
     *     // Create many Visits
     *     const visit = await prisma.visit.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VisitCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VisitCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Visit.
     * @param {VisitDeleteArgs} args - Arguments to delete one Visit.
     * @example
     * // Delete one Visit
     * const Visit = await prisma.visit.delete({
     *   where: {
     *     // ... filter to delete one Visit
     *   }
     * })
     * 
    **/
    delete<T extends VisitDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VisitDeleteArgs<ExtArgs>>
    ): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Visit.
     * @param {VisitUpdateArgs} args - Arguments to update one Visit.
     * @example
     * // Update one Visit
     * const visit = await prisma.visit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VisitUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VisitUpdateArgs<ExtArgs>>
    ): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Visits.
     * @param {VisitDeleteManyArgs} args - Arguments to filter Visits to delete.
     * @example
     * // Delete a few Visits
     * const { count } = await prisma.visit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VisitDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VisitDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visits
     * const visit = await prisma.visit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VisitUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VisitUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Visit.
     * @param {VisitUpsertArgs} args - Arguments to update or create a Visit.
     * @example
     * // Update or create a Visit
     * const visit = await prisma.visit.upsert({
     *   create: {
     *     // ... data to create a Visit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visit we want to update
     *   }
     * })
    **/
    upsert<T extends VisitUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VisitUpsertArgs<ExtArgs>>
    ): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Visits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitCountArgs} args - Arguments to filter Visits to count.
     * @example
     * // Count the number of Visits
     * const count = await prisma.visit.count({
     *   where: {
     *     // ... the filter for the Visits we want to count
     *   }
     * })
    **/
    count<T extends VisitCountArgs>(
      args?: Subset<T, VisitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Visit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VisitAggregateArgs>(args: Subset<T, VisitAggregateArgs>): Prisma.PrismaPromise<GetVisitAggregateType<T>>

    /**
     * Group by Visit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VisitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitGroupByArgs['orderBy'] }
        : { orderBy?: VisitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VisitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Visit model
   */
  readonly fields: VisitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Visit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    workshop<T extends WorkshopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkshopDefaultArgs<ExtArgs>>): Prisma__WorkshopClient<$Result.GetResult<Prisma.$WorkshopPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    reservedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Visit model
   */ 
  interface VisitFieldRefs {
    readonly id: FieldRef<"Visit", 'Int'>
    readonly date: FieldRef<"Visit", 'DateTime'>
    readonly workshopId: FieldRef<"Visit", 'Int'>
    readonly status: FieldRef<"Visit", 'VisitStatus'>
    readonly reserverUserId: FieldRef<"Visit", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Visit findUnique
   */
  export type VisitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter, which Visit to fetch.
     */
    where: VisitWhereUniqueInput
  }


  /**
   * Visit findUniqueOrThrow
   */
  export type VisitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter, which Visit to fetch.
     */
    where: VisitWhereUniqueInput
  }


  /**
   * Visit findFirst
   */
  export type VisitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter, which Visit to fetch.
     */
    where?: VisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visits to fetch.
     */
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visits.
     */
    cursor?: VisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visits.
     */
    distinct?: VisitScalarFieldEnum | VisitScalarFieldEnum[]
  }


  /**
   * Visit findFirstOrThrow
   */
  export type VisitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter, which Visit to fetch.
     */
    where?: VisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visits to fetch.
     */
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visits.
     */
    cursor?: VisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visits.
     */
    distinct?: VisitScalarFieldEnum | VisitScalarFieldEnum[]
  }


  /**
   * Visit findMany
   */
  export type VisitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter, which Visits to fetch.
     */
    where?: VisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visits to fetch.
     */
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Visits.
     */
    cursor?: VisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visits.
     */
    skip?: number
    distinct?: VisitScalarFieldEnum | VisitScalarFieldEnum[]
  }


  /**
   * Visit create
   */
  export type VisitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * The data needed to create a Visit.
     */
    data: XOR<VisitCreateInput, VisitUncheckedCreateInput>
  }


  /**
   * Visit createMany
   */
  export type VisitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Visits.
     */
    data: VisitCreateManyInput | VisitCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Visit update
   */
  export type VisitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * The data needed to update a Visit.
     */
    data: XOR<VisitUpdateInput, VisitUncheckedUpdateInput>
    /**
     * Choose, which Visit to update.
     */
    where: VisitWhereUniqueInput
  }


  /**
   * Visit updateMany
   */
  export type VisitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Visits.
     */
    data: XOR<VisitUpdateManyMutationInput, VisitUncheckedUpdateManyInput>
    /**
     * Filter which Visits to update
     */
    where?: VisitWhereInput
  }


  /**
   * Visit upsert
   */
  export type VisitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * The filter to search for the Visit to update in case it exists.
     */
    where: VisitWhereUniqueInput
    /**
     * In case the Visit found by the `where` argument doesn't exist, create a new Visit with this data.
     */
    create: XOR<VisitCreateInput, VisitUncheckedCreateInput>
    /**
     * In case the Visit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitUpdateInput, VisitUncheckedUpdateInput>
  }


  /**
   * Visit delete
   */
  export type VisitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter which Visit to delete.
     */
    where: VisitWhereUniqueInput
  }


  /**
   * Visit deleteMany
   */
  export type VisitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visits to delete
     */
    where?: VisitWhereInput
  }


  /**
   * Visit without action
   */
  export type VisitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    email: 'email',
    role: 'role',
    name: 'name',
    authToken: 'authToken',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WorkshopScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ownerId: 'ownerId'
  };

  export type WorkshopScalarFieldEnum = (typeof WorkshopScalarFieldEnum)[keyof typeof WorkshopScalarFieldEnum]


  export const VisitScalarFieldEnum: {
    id: 'id',
    date: 'date',
    workshopId: 'workshopId',
    status: 'status',
    reserverUserId: 'reserverUserId'
  };

  export type VisitScalarFieldEnum = (typeof VisitScalarFieldEnum)[keyof typeof VisitScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'VisitStatus'
   */
  export type EnumVisitStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VisitStatus'>
    


  /**
   * Reference to a field of type 'VisitStatus[]'
   */
  export type ListEnumVisitStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VisitStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    name?: StringFilter<"User"> | string
    authToken?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    workshops?: WorkshopListRelationFilter
    visits?: VisitListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    role?: SortOrder
    name?: SortOrder
    authToken?: SortOrderInput | SortOrder
    password?: SortOrder
    workshops?: WorkshopOrderByRelationAggregateInput
    visits?: VisitOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    name?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    authToken?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    workshops?: WorkshopListRelationFilter
    visits?: VisitListRelationFilter
  }, "id" | "email" | "name">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    role?: SortOrder
    name?: SortOrder
    authToken?: SortOrderInput | SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    name?: StringWithAggregatesFilter<"User"> | string
    authToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type WorkshopWhereInput = {
    AND?: WorkshopWhereInput | WorkshopWhereInput[]
    OR?: WorkshopWhereInput[]
    NOT?: WorkshopWhereInput | WorkshopWhereInput[]
    id?: IntFilter<"Workshop"> | number
    name?: StringFilter<"Workshop"> | string
    ownerId?: IntFilter<"Workshop"> | number
    owner?: XOR<UserRelationFilter, UserWhereInput>
    visits?: VisitListRelationFilter
  }

  export type WorkshopOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
    visits?: VisitOrderByRelationAggregateInput
  }

  export type WorkshopWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: WorkshopWhereInput | WorkshopWhereInput[]
    OR?: WorkshopWhereInput[]
    NOT?: WorkshopWhereInput | WorkshopWhereInput[]
    ownerId?: IntFilter<"Workshop"> | number
    owner?: XOR<UserRelationFilter, UserWhereInput>
    visits?: VisitListRelationFilter
  }, "id" | "name">

  export type WorkshopOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    _count?: WorkshopCountOrderByAggregateInput
    _avg?: WorkshopAvgOrderByAggregateInput
    _max?: WorkshopMaxOrderByAggregateInput
    _min?: WorkshopMinOrderByAggregateInput
    _sum?: WorkshopSumOrderByAggregateInput
  }

  export type WorkshopScalarWhereWithAggregatesInput = {
    AND?: WorkshopScalarWhereWithAggregatesInput | WorkshopScalarWhereWithAggregatesInput[]
    OR?: WorkshopScalarWhereWithAggregatesInput[]
    NOT?: WorkshopScalarWhereWithAggregatesInput | WorkshopScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Workshop"> | number
    name?: StringWithAggregatesFilter<"Workshop"> | string
    ownerId?: IntWithAggregatesFilter<"Workshop"> | number
  }

  export type VisitWhereInput = {
    AND?: VisitWhereInput | VisitWhereInput[]
    OR?: VisitWhereInput[]
    NOT?: VisitWhereInput | VisitWhereInput[]
    id?: IntFilter<"Visit"> | number
    date?: DateTimeFilter<"Visit"> | Date | string
    workshopId?: IntFilter<"Visit"> | number
    status?: EnumVisitStatusFilter<"Visit"> | $Enums.VisitStatus
    reserverUserId?: IntFilter<"Visit"> | number
    workshop?: XOR<WorkshopRelationFilter, WorkshopWhereInput>
    reservedBy?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type VisitOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    workshopId?: SortOrder
    status?: SortOrder
    reserverUserId?: SortOrder
    workshop?: WorkshopOrderByWithRelationInput
    reservedBy?: UserOrderByWithRelationInput
  }

  export type VisitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VisitWhereInput | VisitWhereInput[]
    OR?: VisitWhereInput[]
    NOT?: VisitWhereInput | VisitWhereInput[]
    date?: DateTimeFilter<"Visit"> | Date | string
    workshopId?: IntFilter<"Visit"> | number
    status?: EnumVisitStatusFilter<"Visit"> | $Enums.VisitStatus
    reserverUserId?: IntFilter<"Visit"> | number
    workshop?: XOR<WorkshopRelationFilter, WorkshopWhereInput>
    reservedBy?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type VisitOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    workshopId?: SortOrder
    status?: SortOrder
    reserverUserId?: SortOrder
    _count?: VisitCountOrderByAggregateInput
    _avg?: VisitAvgOrderByAggregateInput
    _max?: VisitMaxOrderByAggregateInput
    _min?: VisitMinOrderByAggregateInput
    _sum?: VisitSumOrderByAggregateInput
  }

  export type VisitScalarWhereWithAggregatesInput = {
    AND?: VisitScalarWhereWithAggregatesInput | VisitScalarWhereWithAggregatesInput[]
    OR?: VisitScalarWhereWithAggregatesInput[]
    NOT?: VisitScalarWhereWithAggregatesInput | VisitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Visit"> | number
    date?: DateTimeWithAggregatesFilter<"Visit"> | Date | string
    workshopId?: IntWithAggregatesFilter<"Visit"> | number
    status?: EnumVisitStatusWithAggregatesFilter<"Visit"> | $Enums.VisitStatus
    reserverUserId?: IntWithAggregatesFilter<"Visit"> | number
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    email: string
    role?: $Enums.UserRole
    name: string
    authToken?: string | null
    password: string
    workshops?: WorkshopCreateNestedManyWithoutOwnerInput
    visits?: VisitCreateNestedManyWithoutReservedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    email: string
    role?: $Enums.UserRole
    name: string
    authToken?: string | null
    password: string
    workshops?: WorkshopUncheckedCreateNestedManyWithoutOwnerInput
    visits?: VisitUncheckedCreateNestedManyWithoutReservedByInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
    authToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    workshops?: WorkshopUpdateManyWithoutOwnerNestedInput
    visits?: VisitUpdateManyWithoutReservedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
    authToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    workshops?: WorkshopUncheckedUpdateManyWithoutOwnerNestedInput
    visits?: VisitUncheckedUpdateManyWithoutReservedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    createdAt?: Date | string
    email: string
    role?: $Enums.UserRole
    name: string
    authToken?: string | null
    password: string
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
    authToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
    authToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type WorkshopCreateInput = {
    name: string
    owner: UserCreateNestedOneWithoutWorkshopsInput
    visits?: VisitCreateNestedManyWithoutWorkshopInput
  }

  export type WorkshopUncheckedCreateInput = {
    id?: number
    name: string
    ownerId: number
    visits?: VisitUncheckedCreateNestedManyWithoutWorkshopInput
  }

  export type WorkshopUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutWorkshopsNestedInput
    visits?: VisitUpdateManyWithoutWorkshopNestedInput
  }

  export type WorkshopUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
    visits?: VisitUncheckedUpdateManyWithoutWorkshopNestedInput
  }

  export type WorkshopCreateManyInput = {
    id?: number
    name: string
    ownerId: number
  }

  export type WorkshopUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WorkshopUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type VisitCreateInput = {
    date: Date | string
    status: $Enums.VisitStatus
    workshop: WorkshopCreateNestedOneWithoutVisitsInput
    reservedBy: UserCreateNestedOneWithoutVisitsInput
  }

  export type VisitUncheckedCreateInput = {
    id?: number
    date: Date | string
    workshopId: number
    status: $Enums.VisitStatus
    reserverUserId: number
  }

  export type VisitUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumVisitStatusFieldUpdateOperationsInput | $Enums.VisitStatus
    workshop?: WorkshopUpdateOneRequiredWithoutVisitsNestedInput
    reservedBy?: UserUpdateOneRequiredWithoutVisitsNestedInput
  }

  export type VisitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopId?: IntFieldUpdateOperationsInput | number
    status?: EnumVisitStatusFieldUpdateOperationsInput | $Enums.VisitStatus
    reserverUserId?: IntFieldUpdateOperationsInput | number
  }

  export type VisitCreateManyInput = {
    id?: number
    date: Date | string
    workshopId: number
    status: $Enums.VisitStatus
    reserverUserId: number
  }

  export type VisitUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumVisitStatusFieldUpdateOperationsInput | $Enums.VisitStatus
  }

  export type VisitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopId?: IntFieldUpdateOperationsInput | number
    status?: EnumVisitStatusFieldUpdateOperationsInput | $Enums.VisitStatus
    reserverUserId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type WorkshopListRelationFilter = {
    every?: WorkshopWhereInput
    some?: WorkshopWhereInput
    none?: WorkshopWhereInput
  }

  export type VisitListRelationFilter = {
    every?: VisitWhereInput
    some?: VisitWhereInput
    none?: VisitWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkshopOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VisitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    role?: SortOrder
    name?: SortOrder
    authToken?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    role?: SortOrder
    name?: SortOrder
    authToken?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    role?: SortOrder
    name?: SortOrder
    authToken?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WorkshopCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
  }

  export type WorkshopAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type WorkshopMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
  }

  export type WorkshopMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
  }

  export type WorkshopSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type EnumVisitStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VisitStatus | EnumVisitStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VisitStatus[] | ListEnumVisitStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VisitStatus[] | ListEnumVisitStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVisitStatusFilter<$PrismaModel> | $Enums.VisitStatus
  }

  export type WorkshopRelationFilter = {
    is?: WorkshopWhereInput
    isNot?: WorkshopWhereInput
  }

  export type VisitCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    workshopId?: SortOrder
    status?: SortOrder
    reserverUserId?: SortOrder
  }

  export type VisitAvgOrderByAggregateInput = {
    id?: SortOrder
    workshopId?: SortOrder
    reserverUserId?: SortOrder
  }

  export type VisitMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    workshopId?: SortOrder
    status?: SortOrder
    reserverUserId?: SortOrder
  }

  export type VisitMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    workshopId?: SortOrder
    status?: SortOrder
    reserverUserId?: SortOrder
  }

  export type VisitSumOrderByAggregateInput = {
    id?: SortOrder
    workshopId?: SortOrder
    reserverUserId?: SortOrder
  }

  export type EnumVisitStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VisitStatus | EnumVisitStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VisitStatus[] | ListEnumVisitStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VisitStatus[] | ListEnumVisitStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVisitStatusWithAggregatesFilter<$PrismaModel> | $Enums.VisitStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisitStatusFilter<$PrismaModel>
    _max?: NestedEnumVisitStatusFilter<$PrismaModel>
  }

  export type WorkshopCreateNestedManyWithoutOwnerInput = {
    create?: XOR<WorkshopCreateWithoutOwnerInput, WorkshopUncheckedCreateWithoutOwnerInput> | WorkshopCreateWithoutOwnerInput[] | WorkshopUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WorkshopCreateOrConnectWithoutOwnerInput | WorkshopCreateOrConnectWithoutOwnerInput[]
    createMany?: WorkshopCreateManyOwnerInputEnvelope
    connect?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
  }

  export type VisitCreateNestedManyWithoutReservedByInput = {
    create?: XOR<VisitCreateWithoutReservedByInput, VisitUncheckedCreateWithoutReservedByInput> | VisitCreateWithoutReservedByInput[] | VisitUncheckedCreateWithoutReservedByInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutReservedByInput | VisitCreateOrConnectWithoutReservedByInput[]
    createMany?: VisitCreateManyReservedByInputEnvelope
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
  }

  export type WorkshopUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<WorkshopCreateWithoutOwnerInput, WorkshopUncheckedCreateWithoutOwnerInput> | WorkshopCreateWithoutOwnerInput[] | WorkshopUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WorkshopCreateOrConnectWithoutOwnerInput | WorkshopCreateOrConnectWithoutOwnerInput[]
    createMany?: WorkshopCreateManyOwnerInputEnvelope
    connect?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
  }

  export type VisitUncheckedCreateNestedManyWithoutReservedByInput = {
    create?: XOR<VisitCreateWithoutReservedByInput, VisitUncheckedCreateWithoutReservedByInput> | VisitCreateWithoutReservedByInput[] | VisitUncheckedCreateWithoutReservedByInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutReservedByInput | VisitCreateOrConnectWithoutReservedByInput[]
    createMany?: VisitCreateManyReservedByInputEnvelope
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type WorkshopUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<WorkshopCreateWithoutOwnerInput, WorkshopUncheckedCreateWithoutOwnerInput> | WorkshopCreateWithoutOwnerInput[] | WorkshopUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WorkshopCreateOrConnectWithoutOwnerInput | WorkshopCreateOrConnectWithoutOwnerInput[]
    upsert?: WorkshopUpsertWithWhereUniqueWithoutOwnerInput | WorkshopUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: WorkshopCreateManyOwnerInputEnvelope
    set?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    disconnect?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    delete?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    connect?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    update?: WorkshopUpdateWithWhereUniqueWithoutOwnerInput | WorkshopUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: WorkshopUpdateManyWithWhereWithoutOwnerInput | WorkshopUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: WorkshopScalarWhereInput | WorkshopScalarWhereInput[]
  }

  export type VisitUpdateManyWithoutReservedByNestedInput = {
    create?: XOR<VisitCreateWithoutReservedByInput, VisitUncheckedCreateWithoutReservedByInput> | VisitCreateWithoutReservedByInput[] | VisitUncheckedCreateWithoutReservedByInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutReservedByInput | VisitCreateOrConnectWithoutReservedByInput[]
    upsert?: VisitUpsertWithWhereUniqueWithoutReservedByInput | VisitUpsertWithWhereUniqueWithoutReservedByInput[]
    createMany?: VisitCreateManyReservedByInputEnvelope
    set?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    disconnect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    delete?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    update?: VisitUpdateWithWhereUniqueWithoutReservedByInput | VisitUpdateWithWhereUniqueWithoutReservedByInput[]
    updateMany?: VisitUpdateManyWithWhereWithoutReservedByInput | VisitUpdateManyWithWhereWithoutReservedByInput[]
    deleteMany?: VisitScalarWhereInput | VisitScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WorkshopUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<WorkshopCreateWithoutOwnerInput, WorkshopUncheckedCreateWithoutOwnerInput> | WorkshopCreateWithoutOwnerInput[] | WorkshopUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WorkshopCreateOrConnectWithoutOwnerInput | WorkshopCreateOrConnectWithoutOwnerInput[]
    upsert?: WorkshopUpsertWithWhereUniqueWithoutOwnerInput | WorkshopUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: WorkshopCreateManyOwnerInputEnvelope
    set?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    disconnect?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    delete?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    connect?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    update?: WorkshopUpdateWithWhereUniqueWithoutOwnerInput | WorkshopUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: WorkshopUpdateManyWithWhereWithoutOwnerInput | WorkshopUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: WorkshopScalarWhereInput | WorkshopScalarWhereInput[]
  }

  export type VisitUncheckedUpdateManyWithoutReservedByNestedInput = {
    create?: XOR<VisitCreateWithoutReservedByInput, VisitUncheckedCreateWithoutReservedByInput> | VisitCreateWithoutReservedByInput[] | VisitUncheckedCreateWithoutReservedByInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutReservedByInput | VisitCreateOrConnectWithoutReservedByInput[]
    upsert?: VisitUpsertWithWhereUniqueWithoutReservedByInput | VisitUpsertWithWhereUniqueWithoutReservedByInput[]
    createMany?: VisitCreateManyReservedByInputEnvelope
    set?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    disconnect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    delete?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    update?: VisitUpdateWithWhereUniqueWithoutReservedByInput | VisitUpdateWithWhereUniqueWithoutReservedByInput[]
    updateMany?: VisitUpdateManyWithWhereWithoutReservedByInput | VisitUpdateManyWithWhereWithoutReservedByInput[]
    deleteMany?: VisitScalarWhereInput | VisitScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWorkshopsInput = {
    create?: XOR<UserCreateWithoutWorkshopsInput, UserUncheckedCreateWithoutWorkshopsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkshopsInput
    connect?: UserWhereUniqueInput
  }

  export type VisitCreateNestedManyWithoutWorkshopInput = {
    create?: XOR<VisitCreateWithoutWorkshopInput, VisitUncheckedCreateWithoutWorkshopInput> | VisitCreateWithoutWorkshopInput[] | VisitUncheckedCreateWithoutWorkshopInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutWorkshopInput | VisitCreateOrConnectWithoutWorkshopInput[]
    createMany?: VisitCreateManyWorkshopInputEnvelope
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
  }

  export type VisitUncheckedCreateNestedManyWithoutWorkshopInput = {
    create?: XOR<VisitCreateWithoutWorkshopInput, VisitUncheckedCreateWithoutWorkshopInput> | VisitCreateWithoutWorkshopInput[] | VisitUncheckedCreateWithoutWorkshopInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutWorkshopInput | VisitCreateOrConnectWithoutWorkshopInput[]
    createMany?: VisitCreateManyWorkshopInputEnvelope
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutWorkshopsNestedInput = {
    create?: XOR<UserCreateWithoutWorkshopsInput, UserUncheckedCreateWithoutWorkshopsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkshopsInput
    upsert?: UserUpsertWithoutWorkshopsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkshopsInput, UserUpdateWithoutWorkshopsInput>, UserUncheckedUpdateWithoutWorkshopsInput>
  }

  export type VisitUpdateManyWithoutWorkshopNestedInput = {
    create?: XOR<VisitCreateWithoutWorkshopInput, VisitUncheckedCreateWithoutWorkshopInput> | VisitCreateWithoutWorkshopInput[] | VisitUncheckedCreateWithoutWorkshopInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutWorkshopInput | VisitCreateOrConnectWithoutWorkshopInput[]
    upsert?: VisitUpsertWithWhereUniqueWithoutWorkshopInput | VisitUpsertWithWhereUniqueWithoutWorkshopInput[]
    createMany?: VisitCreateManyWorkshopInputEnvelope
    set?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    disconnect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    delete?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    update?: VisitUpdateWithWhereUniqueWithoutWorkshopInput | VisitUpdateWithWhereUniqueWithoutWorkshopInput[]
    updateMany?: VisitUpdateManyWithWhereWithoutWorkshopInput | VisitUpdateManyWithWhereWithoutWorkshopInput[]
    deleteMany?: VisitScalarWhereInput | VisitScalarWhereInput[]
  }

  export type VisitUncheckedUpdateManyWithoutWorkshopNestedInput = {
    create?: XOR<VisitCreateWithoutWorkshopInput, VisitUncheckedCreateWithoutWorkshopInput> | VisitCreateWithoutWorkshopInput[] | VisitUncheckedCreateWithoutWorkshopInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutWorkshopInput | VisitCreateOrConnectWithoutWorkshopInput[]
    upsert?: VisitUpsertWithWhereUniqueWithoutWorkshopInput | VisitUpsertWithWhereUniqueWithoutWorkshopInput[]
    createMany?: VisitCreateManyWorkshopInputEnvelope
    set?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    disconnect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    delete?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    update?: VisitUpdateWithWhereUniqueWithoutWorkshopInput | VisitUpdateWithWhereUniqueWithoutWorkshopInput[]
    updateMany?: VisitUpdateManyWithWhereWithoutWorkshopInput | VisitUpdateManyWithWhereWithoutWorkshopInput[]
    deleteMany?: VisitScalarWhereInput | VisitScalarWhereInput[]
  }

  export type WorkshopCreateNestedOneWithoutVisitsInput = {
    create?: XOR<WorkshopCreateWithoutVisitsInput, WorkshopUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: WorkshopCreateOrConnectWithoutVisitsInput
    connect?: WorkshopWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVisitsInput = {
    create?: XOR<UserCreateWithoutVisitsInput, UserUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVisitsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumVisitStatusFieldUpdateOperationsInput = {
    set?: $Enums.VisitStatus
  }

  export type WorkshopUpdateOneRequiredWithoutVisitsNestedInput = {
    create?: XOR<WorkshopCreateWithoutVisitsInput, WorkshopUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: WorkshopCreateOrConnectWithoutVisitsInput
    upsert?: WorkshopUpsertWithoutVisitsInput
    connect?: WorkshopWhereUniqueInput
    update?: XOR<XOR<WorkshopUpdateToOneWithWhereWithoutVisitsInput, WorkshopUpdateWithoutVisitsInput>, WorkshopUncheckedUpdateWithoutVisitsInput>
  }

  export type UserUpdateOneRequiredWithoutVisitsNestedInput = {
    create?: XOR<UserCreateWithoutVisitsInput, UserUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVisitsInput
    upsert?: UserUpsertWithoutVisitsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVisitsInput, UserUpdateWithoutVisitsInput>, UserUncheckedUpdateWithoutVisitsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumVisitStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VisitStatus | EnumVisitStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VisitStatus[] | ListEnumVisitStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VisitStatus[] | ListEnumVisitStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVisitStatusFilter<$PrismaModel> | $Enums.VisitStatus
  }

  export type NestedEnumVisitStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VisitStatus | EnumVisitStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VisitStatus[] | ListEnumVisitStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VisitStatus[] | ListEnumVisitStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVisitStatusWithAggregatesFilter<$PrismaModel> | $Enums.VisitStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisitStatusFilter<$PrismaModel>
    _max?: NestedEnumVisitStatusFilter<$PrismaModel>
  }

  export type WorkshopCreateWithoutOwnerInput = {
    name: string
    visits?: VisitCreateNestedManyWithoutWorkshopInput
  }

  export type WorkshopUncheckedCreateWithoutOwnerInput = {
    id?: number
    name: string
    visits?: VisitUncheckedCreateNestedManyWithoutWorkshopInput
  }

  export type WorkshopCreateOrConnectWithoutOwnerInput = {
    where: WorkshopWhereUniqueInput
    create: XOR<WorkshopCreateWithoutOwnerInput, WorkshopUncheckedCreateWithoutOwnerInput>
  }

  export type WorkshopCreateManyOwnerInputEnvelope = {
    data: WorkshopCreateManyOwnerInput | WorkshopCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type VisitCreateWithoutReservedByInput = {
    date: Date | string
    status: $Enums.VisitStatus
    workshop: WorkshopCreateNestedOneWithoutVisitsInput
  }

  export type VisitUncheckedCreateWithoutReservedByInput = {
    id?: number
    date: Date | string
    workshopId: number
    status: $Enums.VisitStatus
  }

  export type VisitCreateOrConnectWithoutReservedByInput = {
    where: VisitWhereUniqueInput
    create: XOR<VisitCreateWithoutReservedByInput, VisitUncheckedCreateWithoutReservedByInput>
  }

  export type VisitCreateManyReservedByInputEnvelope = {
    data: VisitCreateManyReservedByInput | VisitCreateManyReservedByInput[]
    skipDuplicates?: boolean
  }

  export type WorkshopUpsertWithWhereUniqueWithoutOwnerInput = {
    where: WorkshopWhereUniqueInput
    update: XOR<WorkshopUpdateWithoutOwnerInput, WorkshopUncheckedUpdateWithoutOwnerInput>
    create: XOR<WorkshopCreateWithoutOwnerInput, WorkshopUncheckedCreateWithoutOwnerInput>
  }

  export type WorkshopUpdateWithWhereUniqueWithoutOwnerInput = {
    where: WorkshopWhereUniqueInput
    data: XOR<WorkshopUpdateWithoutOwnerInput, WorkshopUncheckedUpdateWithoutOwnerInput>
  }

  export type WorkshopUpdateManyWithWhereWithoutOwnerInput = {
    where: WorkshopScalarWhereInput
    data: XOR<WorkshopUpdateManyMutationInput, WorkshopUncheckedUpdateManyWithoutOwnerInput>
  }

  export type WorkshopScalarWhereInput = {
    AND?: WorkshopScalarWhereInput | WorkshopScalarWhereInput[]
    OR?: WorkshopScalarWhereInput[]
    NOT?: WorkshopScalarWhereInput | WorkshopScalarWhereInput[]
    id?: IntFilter<"Workshop"> | number
    name?: StringFilter<"Workshop"> | string
    ownerId?: IntFilter<"Workshop"> | number
  }

  export type VisitUpsertWithWhereUniqueWithoutReservedByInput = {
    where: VisitWhereUniqueInput
    update: XOR<VisitUpdateWithoutReservedByInput, VisitUncheckedUpdateWithoutReservedByInput>
    create: XOR<VisitCreateWithoutReservedByInput, VisitUncheckedCreateWithoutReservedByInput>
  }

  export type VisitUpdateWithWhereUniqueWithoutReservedByInput = {
    where: VisitWhereUniqueInput
    data: XOR<VisitUpdateWithoutReservedByInput, VisitUncheckedUpdateWithoutReservedByInput>
  }

  export type VisitUpdateManyWithWhereWithoutReservedByInput = {
    where: VisitScalarWhereInput
    data: XOR<VisitUpdateManyMutationInput, VisitUncheckedUpdateManyWithoutReservedByInput>
  }

  export type VisitScalarWhereInput = {
    AND?: VisitScalarWhereInput | VisitScalarWhereInput[]
    OR?: VisitScalarWhereInput[]
    NOT?: VisitScalarWhereInput | VisitScalarWhereInput[]
    id?: IntFilter<"Visit"> | number
    date?: DateTimeFilter<"Visit"> | Date | string
    workshopId?: IntFilter<"Visit"> | number
    status?: EnumVisitStatusFilter<"Visit"> | $Enums.VisitStatus
    reserverUserId?: IntFilter<"Visit"> | number
  }

  export type UserCreateWithoutWorkshopsInput = {
    createdAt?: Date | string
    email: string
    role?: $Enums.UserRole
    name: string
    authToken?: string | null
    password: string
    visits?: VisitCreateNestedManyWithoutReservedByInput
  }

  export type UserUncheckedCreateWithoutWorkshopsInput = {
    id?: number
    createdAt?: Date | string
    email: string
    role?: $Enums.UserRole
    name: string
    authToken?: string | null
    password: string
    visits?: VisitUncheckedCreateNestedManyWithoutReservedByInput
  }

  export type UserCreateOrConnectWithoutWorkshopsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkshopsInput, UserUncheckedCreateWithoutWorkshopsInput>
  }

  export type VisitCreateWithoutWorkshopInput = {
    date: Date | string
    status: $Enums.VisitStatus
    reservedBy: UserCreateNestedOneWithoutVisitsInput
  }

  export type VisitUncheckedCreateWithoutWorkshopInput = {
    id?: number
    date: Date | string
    status: $Enums.VisitStatus
    reserverUserId: number
  }

  export type VisitCreateOrConnectWithoutWorkshopInput = {
    where: VisitWhereUniqueInput
    create: XOR<VisitCreateWithoutWorkshopInput, VisitUncheckedCreateWithoutWorkshopInput>
  }

  export type VisitCreateManyWorkshopInputEnvelope = {
    data: VisitCreateManyWorkshopInput | VisitCreateManyWorkshopInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWorkshopsInput = {
    update: XOR<UserUpdateWithoutWorkshopsInput, UserUncheckedUpdateWithoutWorkshopsInput>
    create: XOR<UserCreateWithoutWorkshopsInput, UserUncheckedCreateWithoutWorkshopsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkshopsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkshopsInput, UserUncheckedUpdateWithoutWorkshopsInput>
  }

  export type UserUpdateWithoutWorkshopsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
    authToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    visits?: VisitUpdateManyWithoutReservedByNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkshopsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
    authToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    visits?: VisitUncheckedUpdateManyWithoutReservedByNestedInput
  }

  export type VisitUpsertWithWhereUniqueWithoutWorkshopInput = {
    where: VisitWhereUniqueInput
    update: XOR<VisitUpdateWithoutWorkshopInput, VisitUncheckedUpdateWithoutWorkshopInput>
    create: XOR<VisitCreateWithoutWorkshopInput, VisitUncheckedCreateWithoutWorkshopInput>
  }

  export type VisitUpdateWithWhereUniqueWithoutWorkshopInput = {
    where: VisitWhereUniqueInput
    data: XOR<VisitUpdateWithoutWorkshopInput, VisitUncheckedUpdateWithoutWorkshopInput>
  }

  export type VisitUpdateManyWithWhereWithoutWorkshopInput = {
    where: VisitScalarWhereInput
    data: XOR<VisitUpdateManyMutationInput, VisitUncheckedUpdateManyWithoutWorkshopInput>
  }

  export type WorkshopCreateWithoutVisitsInput = {
    name: string
    owner: UserCreateNestedOneWithoutWorkshopsInput
  }

  export type WorkshopUncheckedCreateWithoutVisitsInput = {
    id?: number
    name: string
    ownerId: number
  }

  export type WorkshopCreateOrConnectWithoutVisitsInput = {
    where: WorkshopWhereUniqueInput
    create: XOR<WorkshopCreateWithoutVisitsInput, WorkshopUncheckedCreateWithoutVisitsInput>
  }

  export type UserCreateWithoutVisitsInput = {
    createdAt?: Date | string
    email: string
    role?: $Enums.UserRole
    name: string
    authToken?: string | null
    password: string
    workshops?: WorkshopCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutVisitsInput = {
    id?: number
    createdAt?: Date | string
    email: string
    role?: $Enums.UserRole
    name: string
    authToken?: string | null
    password: string
    workshops?: WorkshopUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutVisitsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVisitsInput, UserUncheckedCreateWithoutVisitsInput>
  }

  export type WorkshopUpsertWithoutVisitsInput = {
    update: XOR<WorkshopUpdateWithoutVisitsInput, WorkshopUncheckedUpdateWithoutVisitsInput>
    create: XOR<WorkshopCreateWithoutVisitsInput, WorkshopUncheckedCreateWithoutVisitsInput>
    where?: WorkshopWhereInput
  }

  export type WorkshopUpdateToOneWithWhereWithoutVisitsInput = {
    where?: WorkshopWhereInput
    data: XOR<WorkshopUpdateWithoutVisitsInput, WorkshopUncheckedUpdateWithoutVisitsInput>
  }

  export type WorkshopUpdateWithoutVisitsInput = {
    name?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutWorkshopsNestedInput
  }

  export type WorkshopUncheckedUpdateWithoutVisitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutVisitsInput = {
    update: XOR<UserUpdateWithoutVisitsInput, UserUncheckedUpdateWithoutVisitsInput>
    create: XOR<UserCreateWithoutVisitsInput, UserUncheckedCreateWithoutVisitsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVisitsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVisitsInput, UserUncheckedUpdateWithoutVisitsInput>
  }

  export type UserUpdateWithoutVisitsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
    authToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    workshops?: WorkshopUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutVisitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
    authToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    workshops?: WorkshopUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type WorkshopCreateManyOwnerInput = {
    id?: number
    name: string
  }

  export type VisitCreateManyReservedByInput = {
    id?: number
    date: Date | string
    workshopId: number
    status: $Enums.VisitStatus
  }

  export type WorkshopUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    visits?: VisitUpdateManyWithoutWorkshopNestedInput
  }

  export type WorkshopUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    visits?: VisitUncheckedUpdateManyWithoutWorkshopNestedInput
  }

  export type WorkshopUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type VisitUpdateWithoutReservedByInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumVisitStatusFieldUpdateOperationsInput | $Enums.VisitStatus
    workshop?: WorkshopUpdateOneRequiredWithoutVisitsNestedInput
  }

  export type VisitUncheckedUpdateWithoutReservedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopId?: IntFieldUpdateOperationsInput | number
    status?: EnumVisitStatusFieldUpdateOperationsInput | $Enums.VisitStatus
  }

  export type VisitUncheckedUpdateManyWithoutReservedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopId?: IntFieldUpdateOperationsInput | number
    status?: EnumVisitStatusFieldUpdateOperationsInput | $Enums.VisitStatus
  }

  export type VisitCreateManyWorkshopInput = {
    id?: number
    date: Date | string
    status: $Enums.VisitStatus
    reserverUserId: number
  }

  export type VisitUpdateWithoutWorkshopInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumVisitStatusFieldUpdateOperationsInput | $Enums.VisitStatus
    reservedBy?: UserUpdateOneRequiredWithoutVisitsNestedInput
  }

  export type VisitUncheckedUpdateWithoutWorkshopInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumVisitStatusFieldUpdateOperationsInput | $Enums.VisitStatus
    reserverUserId?: IntFieldUpdateOperationsInput | number
  }

  export type VisitUncheckedUpdateManyWithoutWorkshopInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumVisitStatusFieldUpdateOperationsInput | $Enums.VisitStatus
    reserverUserId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkshopCountOutputTypeDefaultArgs instead
     */
    export type WorkshopCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkshopCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkshopDefaultArgs instead
     */
    export type WorkshopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkshopDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VisitDefaultArgs instead
     */
    export type VisitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VisitDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}