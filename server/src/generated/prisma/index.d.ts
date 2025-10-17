
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
 * Model Casual
 * 
 */
export type Casual = $Result.DefaultSelection<Prisma.$CasualPayload>
/**
 * Model DailyCasualRequest
 * 
 */
export type DailyCasualRequest = $Result.DefaultSelection<Prisma.$DailyCasualRequestPayload>
/**
 * Model CasualWorkEntry
 * 
 */
export type CasualWorkEntry = $Result.DefaultSelection<Prisma.$CasualWorkEntryPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  FARM_SUPERVISOR: 'FARM_SUPERVISOR',
  SYSTEM_ADMIN: 'SYSTEM_ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const DailyRequestStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type DailyRequestStatus = (typeof DailyRequestStatus)[keyof typeof DailyRequestStatus]


export const NotificationType: {
  REQUEST_CREATED: 'REQUEST_CREATED',
  REQUEST_APPROVED: 'REQUEST_APPROVED',
  REQUEST_REJECTED: 'REQUEST_REJECTED',
  WORK_ENTRY_CREATED: 'WORK_ENTRY_CREATED',
  SYSTEM_NOTIFICATION: 'SYSTEM_NOTIFICATION'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type DailyRequestStatus = $Enums.DailyRequestStatus

export const DailyRequestStatus: typeof $Enums.DailyRequestStatus

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.casual`: Exposes CRUD operations for the **Casual** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Casuals
    * const casuals = await prisma.casual.findMany()
    * ```
    */
  get casual(): Prisma.CasualDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyCasualRequest`: Exposes CRUD operations for the **DailyCasualRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyCasualRequests
    * const dailyCasualRequests = await prisma.dailyCasualRequest.findMany()
    * ```
    */
  get dailyCasualRequest(): Prisma.DailyCasualRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.casualWorkEntry`: Exposes CRUD operations for the **CasualWorkEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CasualWorkEntries
    * const casualWorkEntries = await prisma.casualWorkEntry.findMany()
    * ```
    */
  get casualWorkEntry(): Prisma.CasualWorkEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Casual: 'Casual',
    DailyCasualRequest: 'DailyCasualRequest',
    CasualWorkEntry: 'CasualWorkEntry',
    Session: 'Session',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "casual" | "dailyCasualRequest" | "casualWorkEntry" | "session" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Casual: {
        payload: Prisma.$CasualPayload<ExtArgs>
        fields: Prisma.CasualFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CasualFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasualPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CasualFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasualPayload>
          }
          findFirst: {
            args: Prisma.CasualFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasualPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CasualFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasualPayload>
          }
          findMany: {
            args: Prisma.CasualFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasualPayload>[]
          }
          create: {
            args: Prisma.CasualCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasualPayload>
          }
          createMany: {
            args: Prisma.CasualCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CasualCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasualPayload>[]
          }
          delete: {
            args: Prisma.CasualDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasualPayload>
          }
          update: {
            args: Prisma.CasualUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasualPayload>
          }
          deleteMany: {
            args: Prisma.CasualDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CasualUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CasualUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasualPayload>[]
          }
          upsert: {
            args: Prisma.CasualUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasualPayload>
          }
          aggregate: {
            args: Prisma.CasualAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCasual>
          }
          groupBy: {
            args: Prisma.CasualGroupByArgs<ExtArgs>
            result: $Utils.Optional<CasualGroupByOutputType>[]
          }
          count: {
            args: Prisma.CasualCountArgs<ExtArgs>
            result: $Utils.Optional<CasualCountAggregateOutputType> | number
          }
        }
      }
      DailyCasualRequest: {
        payload: Prisma.$DailyCasualRequestPayload<ExtArgs>
        fields: Prisma.DailyCasualRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyCasualRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyCasualRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyCasualRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyCasualRequestPayload>
          }
          findFirst: {
            args: Prisma.DailyCasualRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyCasualRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyCasualRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyCasualRequestPayload>
          }
          findMany: {
            args: Prisma.DailyCasualRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyCasualRequestPayload>[]
          }
          create: {
            args: Prisma.DailyCasualRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyCasualRequestPayload>
          }
          createMany: {
            args: Prisma.DailyCasualRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyCasualRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyCasualRequestPayload>[]
          }
          delete: {
            args: Prisma.DailyCasualRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyCasualRequestPayload>
          }
          update: {
            args: Prisma.DailyCasualRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyCasualRequestPayload>
          }
          deleteMany: {
            args: Prisma.DailyCasualRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyCasualRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyCasualRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyCasualRequestPayload>[]
          }
          upsert: {
            args: Prisma.DailyCasualRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyCasualRequestPayload>
          }
          aggregate: {
            args: Prisma.DailyCasualRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyCasualRequest>
          }
          groupBy: {
            args: Prisma.DailyCasualRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyCasualRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyCasualRequestCountArgs<ExtArgs>
            result: $Utils.Optional<DailyCasualRequestCountAggregateOutputType> | number
          }
        }
      }
      CasualWorkEntry: {
        payload: Prisma.$CasualWorkEntryPayload<ExtArgs>
        fields: Prisma.CasualWorkEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CasualWorkEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasualWorkEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CasualWorkEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasualWorkEntryPayload>
          }
          findFirst: {
            args: Prisma.CasualWorkEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasualWorkEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CasualWorkEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasualWorkEntryPayload>
          }
          findMany: {
            args: Prisma.CasualWorkEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasualWorkEntryPayload>[]
          }
          create: {
            args: Prisma.CasualWorkEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasualWorkEntryPayload>
          }
          createMany: {
            args: Prisma.CasualWorkEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CasualWorkEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasualWorkEntryPayload>[]
          }
          delete: {
            args: Prisma.CasualWorkEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasualWorkEntryPayload>
          }
          update: {
            args: Prisma.CasualWorkEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasualWorkEntryPayload>
          }
          deleteMany: {
            args: Prisma.CasualWorkEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CasualWorkEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CasualWorkEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasualWorkEntryPayload>[]
          }
          upsert: {
            args: Prisma.CasualWorkEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasualWorkEntryPayload>
          }
          aggregate: {
            args: Prisma.CasualWorkEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCasualWorkEntry>
          }
          groupBy: {
            args: Prisma.CasualWorkEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CasualWorkEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CasualWorkEntryCountArgs<ExtArgs>
            result: $Utils.Optional<CasualWorkEntryCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    casual?: CasualOmit
    dailyCasualRequest?: DailyCasualRequestOmit
    casualWorkEntry?: CasualWorkEntryOmit
    session?: SessionOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
    sessions: number
    casualWorkEntries: number
    approvedCasualWorkEntries: number
    dailyCasualRequests: number
    approvedDailyCasualRequests: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    casualWorkEntries?: boolean | UserCountOutputTypeCountCasualWorkEntriesArgs
    approvedCasualWorkEntries?: boolean | UserCountOutputTypeCountApprovedCasualWorkEntriesArgs
    dailyCasualRequests?: boolean | UserCountOutputTypeCountDailyCasualRequestsArgs
    approvedDailyCasualRequests?: boolean | UserCountOutputTypeCountApprovedDailyCasualRequestsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
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
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCasualWorkEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasualWorkEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApprovedCasualWorkEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasualWorkEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDailyCasualRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyCasualRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApprovedDailyCasualRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyCasualRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type CasualCountOutputType
   */

  export type CasualCountOutputType = {
    workEntries: number
  }

  export type CasualCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workEntries?: boolean | CasualCountOutputTypeCountWorkEntriesArgs
  }

  // Custom InputTypes
  /**
   * CasualCountOutputType without action
   */
  export type CasualCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasualCountOutputType
     */
    select?: CasualCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CasualCountOutputType without action
   */
  export type CasualCountOutputTypeCountWorkEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasualWorkEntryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    isActive: boolean | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    isActive: boolean | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    isActive: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    isActive?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    isActive?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    isActive?: true
    role?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    firstName: string | null
    lastName: string | null
    isActive: boolean
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    isActive?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    casualWorkEntries?: boolean | User$casualWorkEntriesArgs<ExtArgs>
    approvedCasualWorkEntries?: boolean | User$approvedCasualWorkEntriesArgs<ExtArgs>
    dailyCasualRequests?: boolean | User$dailyCasualRequestsArgs<ExtArgs>
    approvedDailyCasualRequests?: boolean | User$approvedDailyCasualRequestsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    isActive?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    isActive?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    isActive?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "isActive" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    casualWorkEntries?: boolean | User$casualWorkEntriesArgs<ExtArgs>
    approvedCasualWorkEntries?: boolean | User$approvedCasualWorkEntriesArgs<ExtArgs>
    dailyCasualRequests?: boolean | User$dailyCasualRequestsArgs<ExtArgs>
    approvedDailyCasualRequests?: boolean | User$approvedDailyCasualRequestsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      casualWorkEntries: Prisma.$CasualWorkEntryPayload<ExtArgs>[]
      approvedCasualWorkEntries: Prisma.$CasualWorkEntryPayload<ExtArgs>[]
      dailyCasualRequests: Prisma.$DailyCasualRequestPayload<ExtArgs>[]
      approvedDailyCasualRequests: Prisma.$DailyCasualRequestPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstName: string | null
      lastName: string | null
      isActive: boolean
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    casualWorkEntries<T extends User$casualWorkEntriesArgs<ExtArgs> = {}>(args?: Subset<T, User$casualWorkEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasualWorkEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approvedCasualWorkEntries<T extends User$approvedCasualWorkEntriesArgs<ExtArgs> = {}>(args?: Subset<T, User$approvedCasualWorkEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasualWorkEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyCasualRequests<T extends User$dailyCasualRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$dailyCasualRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyCasualRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approvedDailyCasualRequests<T extends User$approvedDailyCasualRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$approvedDailyCasualRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyCasualRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.casualWorkEntries
   */
  export type User$casualWorkEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasualWorkEntry
     */
    select?: CasualWorkEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasualWorkEntry
     */
    omit?: CasualWorkEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasualWorkEntryInclude<ExtArgs> | null
    where?: CasualWorkEntryWhereInput
    orderBy?: CasualWorkEntryOrderByWithRelationInput | CasualWorkEntryOrderByWithRelationInput[]
    cursor?: CasualWorkEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CasualWorkEntryScalarFieldEnum | CasualWorkEntryScalarFieldEnum[]
  }

  /**
   * User.approvedCasualWorkEntries
   */
  export type User$approvedCasualWorkEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasualWorkEntry
     */
    select?: CasualWorkEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasualWorkEntry
     */
    omit?: CasualWorkEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasualWorkEntryInclude<ExtArgs> | null
    where?: CasualWorkEntryWhereInput
    orderBy?: CasualWorkEntryOrderByWithRelationInput | CasualWorkEntryOrderByWithRelationInput[]
    cursor?: CasualWorkEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CasualWorkEntryScalarFieldEnum | CasualWorkEntryScalarFieldEnum[]
  }

  /**
   * User.dailyCasualRequests
   */
  export type User$dailyCasualRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCasualRequest
     */
    select?: DailyCasualRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyCasualRequest
     */
    omit?: DailyCasualRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyCasualRequestInclude<ExtArgs> | null
    where?: DailyCasualRequestWhereInput
    orderBy?: DailyCasualRequestOrderByWithRelationInput | DailyCasualRequestOrderByWithRelationInput[]
    cursor?: DailyCasualRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyCasualRequestScalarFieldEnum | DailyCasualRequestScalarFieldEnum[]
  }

  /**
   * User.approvedDailyCasualRequests
   */
  export type User$approvedDailyCasualRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCasualRequest
     */
    select?: DailyCasualRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyCasualRequest
     */
    omit?: DailyCasualRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyCasualRequestInclude<ExtArgs> | null
    where?: DailyCasualRequestWhereInput
    orderBy?: DailyCasualRequestOrderByWithRelationInput | DailyCasualRequestOrderByWithRelationInput[]
    cursor?: DailyCasualRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyCasualRequestScalarFieldEnum | DailyCasualRequestScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Casual
   */

  export type AggregateCasual = {
    _count: CasualCountAggregateOutputType | null
    _min: CasualMinAggregateOutputType | null
    _max: CasualMaxAggregateOutputType | null
  }

  export type CasualMinAggregateOutputType = {
    id: string | null
    name: string | null
    nationalId: string | null
    phoneNumber: string | null
    farmName: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CasualMaxAggregateOutputType = {
    id: string | null
    name: string | null
    nationalId: string | null
    phoneNumber: string | null
    farmName: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CasualCountAggregateOutputType = {
    id: number
    name: number
    nationalId: number
    phoneNumber: number
    farmName: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CasualMinAggregateInputType = {
    id?: true
    name?: true
    nationalId?: true
    phoneNumber?: true
    farmName?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CasualMaxAggregateInputType = {
    id?: true
    name?: true
    nationalId?: true
    phoneNumber?: true
    farmName?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CasualCountAggregateInputType = {
    id?: true
    name?: true
    nationalId?: true
    phoneNumber?: true
    farmName?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CasualAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Casual to aggregate.
     */
    where?: CasualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Casuals to fetch.
     */
    orderBy?: CasualOrderByWithRelationInput | CasualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CasualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Casuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Casuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Casuals
    **/
    _count?: true | CasualCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CasualMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CasualMaxAggregateInputType
  }

  export type GetCasualAggregateType<T extends CasualAggregateArgs> = {
        [P in keyof T & keyof AggregateCasual]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCasual[P]>
      : GetScalarType<T[P], AggregateCasual[P]>
  }




  export type CasualGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasualWhereInput
    orderBy?: CasualOrderByWithAggregationInput | CasualOrderByWithAggregationInput[]
    by: CasualScalarFieldEnum[] | CasualScalarFieldEnum
    having?: CasualScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CasualCountAggregateInputType | true
    _min?: CasualMinAggregateInputType
    _max?: CasualMaxAggregateInputType
  }

  export type CasualGroupByOutputType = {
    id: string
    name: string
    nationalId: string
    phoneNumber: string
    farmName: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CasualCountAggregateOutputType | null
    _min: CasualMinAggregateOutputType | null
    _max: CasualMaxAggregateOutputType | null
  }

  type GetCasualGroupByPayload<T extends CasualGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CasualGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CasualGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CasualGroupByOutputType[P]>
            : GetScalarType<T[P], CasualGroupByOutputType[P]>
        }
      >
    >


  export type CasualSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nationalId?: boolean
    phoneNumber?: boolean
    farmName?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workEntries?: boolean | Casual$workEntriesArgs<ExtArgs>
    _count?: boolean | CasualCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["casual"]>

  export type CasualSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nationalId?: boolean
    phoneNumber?: boolean
    farmName?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["casual"]>

  export type CasualSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nationalId?: boolean
    phoneNumber?: boolean
    farmName?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["casual"]>

  export type CasualSelectScalar = {
    id?: boolean
    name?: boolean
    nationalId?: boolean
    phoneNumber?: boolean
    farmName?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CasualOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "nationalId" | "phoneNumber" | "farmName" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["casual"]>
  export type CasualInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workEntries?: boolean | Casual$workEntriesArgs<ExtArgs>
    _count?: boolean | CasualCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CasualIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CasualIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CasualPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Casual"
    objects: {
      workEntries: Prisma.$CasualWorkEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      nationalId: string
      phoneNumber: string
      farmName: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["casual"]>
    composites: {}
  }

  type CasualGetPayload<S extends boolean | null | undefined | CasualDefaultArgs> = $Result.GetResult<Prisma.$CasualPayload, S>

  type CasualCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CasualFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CasualCountAggregateInputType | true
    }

  export interface CasualDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Casual'], meta: { name: 'Casual' } }
    /**
     * Find zero or one Casual that matches the filter.
     * @param {CasualFindUniqueArgs} args - Arguments to find a Casual
     * @example
     * // Get one Casual
     * const casual = await prisma.casual.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CasualFindUniqueArgs>(args: SelectSubset<T, CasualFindUniqueArgs<ExtArgs>>): Prisma__CasualClient<$Result.GetResult<Prisma.$CasualPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Casual that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CasualFindUniqueOrThrowArgs} args - Arguments to find a Casual
     * @example
     * // Get one Casual
     * const casual = await prisma.casual.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CasualFindUniqueOrThrowArgs>(args: SelectSubset<T, CasualFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CasualClient<$Result.GetResult<Prisma.$CasualPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Casual that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasualFindFirstArgs} args - Arguments to find a Casual
     * @example
     * // Get one Casual
     * const casual = await prisma.casual.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CasualFindFirstArgs>(args?: SelectSubset<T, CasualFindFirstArgs<ExtArgs>>): Prisma__CasualClient<$Result.GetResult<Prisma.$CasualPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Casual that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasualFindFirstOrThrowArgs} args - Arguments to find a Casual
     * @example
     * // Get one Casual
     * const casual = await prisma.casual.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CasualFindFirstOrThrowArgs>(args?: SelectSubset<T, CasualFindFirstOrThrowArgs<ExtArgs>>): Prisma__CasualClient<$Result.GetResult<Prisma.$CasualPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Casuals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasualFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Casuals
     * const casuals = await prisma.casual.findMany()
     * 
     * // Get first 10 Casuals
     * const casuals = await prisma.casual.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const casualWithIdOnly = await prisma.casual.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CasualFindManyArgs>(args?: SelectSubset<T, CasualFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasualPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Casual.
     * @param {CasualCreateArgs} args - Arguments to create a Casual.
     * @example
     * // Create one Casual
     * const Casual = await prisma.casual.create({
     *   data: {
     *     // ... data to create a Casual
     *   }
     * })
     * 
     */
    create<T extends CasualCreateArgs>(args: SelectSubset<T, CasualCreateArgs<ExtArgs>>): Prisma__CasualClient<$Result.GetResult<Prisma.$CasualPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Casuals.
     * @param {CasualCreateManyArgs} args - Arguments to create many Casuals.
     * @example
     * // Create many Casuals
     * const casual = await prisma.casual.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CasualCreateManyArgs>(args?: SelectSubset<T, CasualCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Casuals and returns the data saved in the database.
     * @param {CasualCreateManyAndReturnArgs} args - Arguments to create many Casuals.
     * @example
     * // Create many Casuals
     * const casual = await prisma.casual.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Casuals and only return the `id`
     * const casualWithIdOnly = await prisma.casual.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CasualCreateManyAndReturnArgs>(args?: SelectSubset<T, CasualCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasualPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Casual.
     * @param {CasualDeleteArgs} args - Arguments to delete one Casual.
     * @example
     * // Delete one Casual
     * const Casual = await prisma.casual.delete({
     *   where: {
     *     // ... filter to delete one Casual
     *   }
     * })
     * 
     */
    delete<T extends CasualDeleteArgs>(args: SelectSubset<T, CasualDeleteArgs<ExtArgs>>): Prisma__CasualClient<$Result.GetResult<Prisma.$CasualPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Casual.
     * @param {CasualUpdateArgs} args - Arguments to update one Casual.
     * @example
     * // Update one Casual
     * const casual = await prisma.casual.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CasualUpdateArgs>(args: SelectSubset<T, CasualUpdateArgs<ExtArgs>>): Prisma__CasualClient<$Result.GetResult<Prisma.$CasualPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Casuals.
     * @param {CasualDeleteManyArgs} args - Arguments to filter Casuals to delete.
     * @example
     * // Delete a few Casuals
     * const { count } = await prisma.casual.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CasualDeleteManyArgs>(args?: SelectSubset<T, CasualDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Casuals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasualUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Casuals
     * const casual = await prisma.casual.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CasualUpdateManyArgs>(args: SelectSubset<T, CasualUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Casuals and returns the data updated in the database.
     * @param {CasualUpdateManyAndReturnArgs} args - Arguments to update many Casuals.
     * @example
     * // Update many Casuals
     * const casual = await prisma.casual.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Casuals and only return the `id`
     * const casualWithIdOnly = await prisma.casual.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CasualUpdateManyAndReturnArgs>(args: SelectSubset<T, CasualUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasualPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Casual.
     * @param {CasualUpsertArgs} args - Arguments to update or create a Casual.
     * @example
     * // Update or create a Casual
     * const casual = await prisma.casual.upsert({
     *   create: {
     *     // ... data to create a Casual
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Casual we want to update
     *   }
     * })
     */
    upsert<T extends CasualUpsertArgs>(args: SelectSubset<T, CasualUpsertArgs<ExtArgs>>): Prisma__CasualClient<$Result.GetResult<Prisma.$CasualPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Casuals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasualCountArgs} args - Arguments to filter Casuals to count.
     * @example
     * // Count the number of Casuals
     * const count = await prisma.casual.count({
     *   where: {
     *     // ... the filter for the Casuals we want to count
     *   }
     * })
    **/
    count<T extends CasualCountArgs>(
      args?: Subset<T, CasualCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CasualCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Casual.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasualAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CasualAggregateArgs>(args: Subset<T, CasualAggregateArgs>): Prisma.PrismaPromise<GetCasualAggregateType<T>>

    /**
     * Group by Casual.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasualGroupByArgs} args - Group by arguments.
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
      T extends CasualGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CasualGroupByArgs['orderBy'] }
        : { orderBy?: CasualGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CasualGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCasualGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Casual model
   */
  readonly fields: CasualFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Casual.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CasualClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workEntries<T extends Casual$workEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Casual$workEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasualWorkEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Casual model
   */
  interface CasualFieldRefs {
    readonly id: FieldRef<"Casual", 'String'>
    readonly name: FieldRef<"Casual", 'String'>
    readonly nationalId: FieldRef<"Casual", 'String'>
    readonly phoneNumber: FieldRef<"Casual", 'String'>
    readonly farmName: FieldRef<"Casual", 'String'>
    readonly isActive: FieldRef<"Casual", 'Boolean'>
    readonly createdAt: FieldRef<"Casual", 'DateTime'>
    readonly updatedAt: FieldRef<"Casual", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Casual findUnique
   */
  export type CasualFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casual
     */
    select?: CasualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casual
     */
    omit?: CasualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasualInclude<ExtArgs> | null
    /**
     * Filter, which Casual to fetch.
     */
    where: CasualWhereUniqueInput
  }

  /**
   * Casual findUniqueOrThrow
   */
  export type CasualFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casual
     */
    select?: CasualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casual
     */
    omit?: CasualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasualInclude<ExtArgs> | null
    /**
     * Filter, which Casual to fetch.
     */
    where: CasualWhereUniqueInput
  }

  /**
   * Casual findFirst
   */
  export type CasualFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casual
     */
    select?: CasualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casual
     */
    omit?: CasualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasualInclude<ExtArgs> | null
    /**
     * Filter, which Casual to fetch.
     */
    where?: CasualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Casuals to fetch.
     */
    orderBy?: CasualOrderByWithRelationInput | CasualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Casuals.
     */
    cursor?: CasualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Casuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Casuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Casuals.
     */
    distinct?: CasualScalarFieldEnum | CasualScalarFieldEnum[]
  }

  /**
   * Casual findFirstOrThrow
   */
  export type CasualFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casual
     */
    select?: CasualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casual
     */
    omit?: CasualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasualInclude<ExtArgs> | null
    /**
     * Filter, which Casual to fetch.
     */
    where?: CasualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Casuals to fetch.
     */
    orderBy?: CasualOrderByWithRelationInput | CasualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Casuals.
     */
    cursor?: CasualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Casuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Casuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Casuals.
     */
    distinct?: CasualScalarFieldEnum | CasualScalarFieldEnum[]
  }

  /**
   * Casual findMany
   */
  export type CasualFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casual
     */
    select?: CasualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casual
     */
    omit?: CasualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasualInclude<ExtArgs> | null
    /**
     * Filter, which Casuals to fetch.
     */
    where?: CasualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Casuals to fetch.
     */
    orderBy?: CasualOrderByWithRelationInput | CasualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Casuals.
     */
    cursor?: CasualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Casuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Casuals.
     */
    skip?: number
    distinct?: CasualScalarFieldEnum | CasualScalarFieldEnum[]
  }

  /**
   * Casual create
   */
  export type CasualCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casual
     */
    select?: CasualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casual
     */
    omit?: CasualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasualInclude<ExtArgs> | null
    /**
     * The data needed to create a Casual.
     */
    data: XOR<CasualCreateInput, CasualUncheckedCreateInput>
  }

  /**
   * Casual createMany
   */
  export type CasualCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Casuals.
     */
    data: CasualCreateManyInput | CasualCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Casual createManyAndReturn
   */
  export type CasualCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casual
     */
    select?: CasualSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Casual
     */
    omit?: CasualOmit<ExtArgs> | null
    /**
     * The data used to create many Casuals.
     */
    data: CasualCreateManyInput | CasualCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Casual update
   */
  export type CasualUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casual
     */
    select?: CasualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casual
     */
    omit?: CasualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasualInclude<ExtArgs> | null
    /**
     * The data needed to update a Casual.
     */
    data: XOR<CasualUpdateInput, CasualUncheckedUpdateInput>
    /**
     * Choose, which Casual to update.
     */
    where: CasualWhereUniqueInput
  }

  /**
   * Casual updateMany
   */
  export type CasualUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Casuals.
     */
    data: XOR<CasualUpdateManyMutationInput, CasualUncheckedUpdateManyInput>
    /**
     * Filter which Casuals to update
     */
    where?: CasualWhereInput
    /**
     * Limit how many Casuals to update.
     */
    limit?: number
  }

  /**
   * Casual updateManyAndReturn
   */
  export type CasualUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casual
     */
    select?: CasualSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Casual
     */
    omit?: CasualOmit<ExtArgs> | null
    /**
     * The data used to update Casuals.
     */
    data: XOR<CasualUpdateManyMutationInput, CasualUncheckedUpdateManyInput>
    /**
     * Filter which Casuals to update
     */
    where?: CasualWhereInput
    /**
     * Limit how many Casuals to update.
     */
    limit?: number
  }

  /**
   * Casual upsert
   */
  export type CasualUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casual
     */
    select?: CasualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casual
     */
    omit?: CasualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasualInclude<ExtArgs> | null
    /**
     * The filter to search for the Casual to update in case it exists.
     */
    where: CasualWhereUniqueInput
    /**
     * In case the Casual found by the `where` argument doesn't exist, create a new Casual with this data.
     */
    create: XOR<CasualCreateInput, CasualUncheckedCreateInput>
    /**
     * In case the Casual was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CasualUpdateInput, CasualUncheckedUpdateInput>
  }

  /**
   * Casual delete
   */
  export type CasualDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casual
     */
    select?: CasualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casual
     */
    omit?: CasualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasualInclude<ExtArgs> | null
    /**
     * Filter which Casual to delete.
     */
    where: CasualWhereUniqueInput
  }

  /**
   * Casual deleteMany
   */
  export type CasualDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Casuals to delete
     */
    where?: CasualWhereInput
    /**
     * Limit how many Casuals to delete.
     */
    limit?: number
  }

  /**
   * Casual.workEntries
   */
  export type Casual$workEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasualWorkEntry
     */
    select?: CasualWorkEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasualWorkEntry
     */
    omit?: CasualWorkEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasualWorkEntryInclude<ExtArgs> | null
    where?: CasualWorkEntryWhereInput
    orderBy?: CasualWorkEntryOrderByWithRelationInput | CasualWorkEntryOrderByWithRelationInput[]
    cursor?: CasualWorkEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CasualWorkEntryScalarFieldEnum | CasualWorkEntryScalarFieldEnum[]
  }

  /**
   * Casual without action
   */
  export type CasualDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Casual
     */
    select?: CasualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Casual
     */
    omit?: CasualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasualInclude<ExtArgs> | null
  }


  /**
   * Model DailyCasualRequest
   */

  export type AggregateDailyCasualRequest = {
    _count: DailyCasualRequestCountAggregateOutputType | null
    _avg: DailyCasualRequestAvgAggregateOutputType | null
    _sum: DailyCasualRequestSumAggregateOutputType | null
    _min: DailyCasualRequestMinAggregateOutputType | null
    _max: DailyCasualRequestMaxAggregateOutputType | null
  }

  export type DailyCasualRequestAvgAggregateOutputType = {
    casualsRequired: number | null
    adjustment: number | null
    units: number | null
    costPerUnit: number | null
    total: number | null
  }

  export type DailyCasualRequestSumAggregateOutputType = {
    casualsRequired: number | null
    adjustment: number | null
    units: number | null
    costPerUnit: number | null
    total: number | null
  }

  export type DailyCasualRequestMinAggregateOutputType = {
    id: string | null
    casualsRequired: number | null
    crop: string | null
    cropStage: string | null
    date: Date | null
    week: string | null
    activity: string | null
    farmName: string | null
    adjustment: number | null
    units: number | null
    costPerUnit: number | null
    total: number | null
    status: $Enums.DailyRequestStatus | null
    rejectionReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
    supervisorId: string | null
    adminId: string | null
  }

  export type DailyCasualRequestMaxAggregateOutputType = {
    id: string | null
    casualsRequired: number | null
    crop: string | null
    cropStage: string | null
    date: Date | null
    week: string | null
    activity: string | null
    farmName: string | null
    adjustment: number | null
    units: number | null
    costPerUnit: number | null
    total: number | null
    status: $Enums.DailyRequestStatus | null
    rejectionReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
    supervisorId: string | null
    adminId: string | null
  }

  export type DailyCasualRequestCountAggregateOutputType = {
    id: number
    casualsRequired: number
    crop: number
    cropStage: number
    date: number
    week: number
    activity: number
    farmName: number
    adjustment: number
    units: number
    costPerUnit: number
    total: number
    status: number
    rejectionReason: number
    createdAt: number
    updatedAt: number
    supervisorId: number
    adminId: number
    _all: number
  }


  export type DailyCasualRequestAvgAggregateInputType = {
    casualsRequired?: true
    adjustment?: true
    units?: true
    costPerUnit?: true
    total?: true
  }

  export type DailyCasualRequestSumAggregateInputType = {
    casualsRequired?: true
    adjustment?: true
    units?: true
    costPerUnit?: true
    total?: true
  }

  export type DailyCasualRequestMinAggregateInputType = {
    id?: true
    casualsRequired?: true
    crop?: true
    cropStage?: true
    date?: true
    week?: true
    activity?: true
    farmName?: true
    adjustment?: true
    units?: true
    costPerUnit?: true
    total?: true
    status?: true
    rejectionReason?: true
    createdAt?: true
    updatedAt?: true
    supervisorId?: true
    adminId?: true
  }

  export type DailyCasualRequestMaxAggregateInputType = {
    id?: true
    casualsRequired?: true
    crop?: true
    cropStage?: true
    date?: true
    week?: true
    activity?: true
    farmName?: true
    adjustment?: true
    units?: true
    costPerUnit?: true
    total?: true
    status?: true
    rejectionReason?: true
    createdAt?: true
    updatedAt?: true
    supervisorId?: true
    adminId?: true
  }

  export type DailyCasualRequestCountAggregateInputType = {
    id?: true
    casualsRequired?: true
    crop?: true
    cropStage?: true
    date?: true
    week?: true
    activity?: true
    farmName?: true
    adjustment?: true
    units?: true
    costPerUnit?: true
    total?: true
    status?: true
    rejectionReason?: true
    createdAt?: true
    updatedAt?: true
    supervisorId?: true
    adminId?: true
    _all?: true
  }

  export type DailyCasualRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyCasualRequest to aggregate.
     */
    where?: DailyCasualRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyCasualRequests to fetch.
     */
    orderBy?: DailyCasualRequestOrderByWithRelationInput | DailyCasualRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyCasualRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyCasualRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyCasualRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyCasualRequests
    **/
    _count?: true | DailyCasualRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyCasualRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyCasualRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyCasualRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyCasualRequestMaxAggregateInputType
  }

  export type GetDailyCasualRequestAggregateType<T extends DailyCasualRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyCasualRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyCasualRequest[P]>
      : GetScalarType<T[P], AggregateDailyCasualRequest[P]>
  }




  export type DailyCasualRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyCasualRequestWhereInput
    orderBy?: DailyCasualRequestOrderByWithAggregationInput | DailyCasualRequestOrderByWithAggregationInput[]
    by: DailyCasualRequestScalarFieldEnum[] | DailyCasualRequestScalarFieldEnum
    having?: DailyCasualRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyCasualRequestCountAggregateInputType | true
    _avg?: DailyCasualRequestAvgAggregateInputType
    _sum?: DailyCasualRequestSumAggregateInputType
    _min?: DailyCasualRequestMinAggregateInputType
    _max?: DailyCasualRequestMaxAggregateInputType
  }

  export type DailyCasualRequestGroupByOutputType = {
    id: string
    casualsRequired: number
    crop: string
    cropStage: string
    date: Date
    week: string
    activity: string
    farmName: string
    adjustment: number
    units: number
    costPerUnit: number
    total: number
    status: $Enums.DailyRequestStatus
    rejectionReason: string | null
    createdAt: Date
    updatedAt: Date
    supervisorId: string
    adminId: string | null
    _count: DailyCasualRequestCountAggregateOutputType | null
    _avg: DailyCasualRequestAvgAggregateOutputType | null
    _sum: DailyCasualRequestSumAggregateOutputType | null
    _min: DailyCasualRequestMinAggregateOutputType | null
    _max: DailyCasualRequestMaxAggregateOutputType | null
  }

  type GetDailyCasualRequestGroupByPayload<T extends DailyCasualRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyCasualRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyCasualRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyCasualRequestGroupByOutputType[P]>
            : GetScalarType<T[P], DailyCasualRequestGroupByOutputType[P]>
        }
      >
    >


  export type DailyCasualRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    casualsRequired?: boolean
    crop?: boolean
    cropStage?: boolean
    date?: boolean
    week?: boolean
    activity?: boolean
    farmName?: boolean
    adjustment?: boolean
    units?: boolean
    costPerUnit?: boolean
    total?: boolean
    status?: boolean
    rejectionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supervisorId?: boolean
    adminId?: boolean
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
    admin?: boolean | DailyCasualRequest$adminArgs<ExtArgs>
  }, ExtArgs["result"]["dailyCasualRequest"]>

  export type DailyCasualRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    casualsRequired?: boolean
    crop?: boolean
    cropStage?: boolean
    date?: boolean
    week?: boolean
    activity?: boolean
    farmName?: boolean
    adjustment?: boolean
    units?: boolean
    costPerUnit?: boolean
    total?: boolean
    status?: boolean
    rejectionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supervisorId?: boolean
    adminId?: boolean
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
    admin?: boolean | DailyCasualRequest$adminArgs<ExtArgs>
  }, ExtArgs["result"]["dailyCasualRequest"]>

  export type DailyCasualRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    casualsRequired?: boolean
    crop?: boolean
    cropStage?: boolean
    date?: boolean
    week?: boolean
    activity?: boolean
    farmName?: boolean
    adjustment?: boolean
    units?: boolean
    costPerUnit?: boolean
    total?: boolean
    status?: boolean
    rejectionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supervisorId?: boolean
    adminId?: boolean
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
    admin?: boolean | DailyCasualRequest$adminArgs<ExtArgs>
  }, ExtArgs["result"]["dailyCasualRequest"]>

  export type DailyCasualRequestSelectScalar = {
    id?: boolean
    casualsRequired?: boolean
    crop?: boolean
    cropStage?: boolean
    date?: boolean
    week?: boolean
    activity?: boolean
    farmName?: boolean
    adjustment?: boolean
    units?: boolean
    costPerUnit?: boolean
    total?: boolean
    status?: boolean
    rejectionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supervisorId?: boolean
    adminId?: boolean
  }

  export type DailyCasualRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "casualsRequired" | "crop" | "cropStage" | "date" | "week" | "activity" | "farmName" | "adjustment" | "units" | "costPerUnit" | "total" | "status" | "rejectionReason" | "createdAt" | "updatedAt" | "supervisorId" | "adminId", ExtArgs["result"]["dailyCasualRequest"]>
  export type DailyCasualRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
    admin?: boolean | DailyCasualRequest$adminArgs<ExtArgs>
  }
  export type DailyCasualRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
    admin?: boolean | DailyCasualRequest$adminArgs<ExtArgs>
  }
  export type DailyCasualRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
    admin?: boolean | DailyCasualRequest$adminArgs<ExtArgs>
  }

  export type $DailyCasualRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyCasualRequest"
    objects: {
      supervisor: Prisma.$UserPayload<ExtArgs>
      admin: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      casualsRequired: number
      crop: string
      cropStage: string
      date: Date
      week: string
      activity: string
      farmName: string
      adjustment: number
      units: number
      costPerUnit: number
      total: number
      status: $Enums.DailyRequestStatus
      rejectionReason: string | null
      createdAt: Date
      updatedAt: Date
      supervisorId: string
      adminId: string | null
    }, ExtArgs["result"]["dailyCasualRequest"]>
    composites: {}
  }

  type DailyCasualRequestGetPayload<S extends boolean | null | undefined | DailyCasualRequestDefaultArgs> = $Result.GetResult<Prisma.$DailyCasualRequestPayload, S>

  type DailyCasualRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyCasualRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyCasualRequestCountAggregateInputType | true
    }

  export interface DailyCasualRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyCasualRequest'], meta: { name: 'DailyCasualRequest' } }
    /**
     * Find zero or one DailyCasualRequest that matches the filter.
     * @param {DailyCasualRequestFindUniqueArgs} args - Arguments to find a DailyCasualRequest
     * @example
     * // Get one DailyCasualRequest
     * const dailyCasualRequest = await prisma.dailyCasualRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyCasualRequestFindUniqueArgs>(args: SelectSubset<T, DailyCasualRequestFindUniqueArgs<ExtArgs>>): Prisma__DailyCasualRequestClient<$Result.GetResult<Prisma.$DailyCasualRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyCasualRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyCasualRequestFindUniqueOrThrowArgs} args - Arguments to find a DailyCasualRequest
     * @example
     * // Get one DailyCasualRequest
     * const dailyCasualRequest = await prisma.dailyCasualRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyCasualRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyCasualRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyCasualRequestClient<$Result.GetResult<Prisma.$DailyCasualRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyCasualRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyCasualRequestFindFirstArgs} args - Arguments to find a DailyCasualRequest
     * @example
     * // Get one DailyCasualRequest
     * const dailyCasualRequest = await prisma.dailyCasualRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyCasualRequestFindFirstArgs>(args?: SelectSubset<T, DailyCasualRequestFindFirstArgs<ExtArgs>>): Prisma__DailyCasualRequestClient<$Result.GetResult<Prisma.$DailyCasualRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyCasualRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyCasualRequestFindFirstOrThrowArgs} args - Arguments to find a DailyCasualRequest
     * @example
     * // Get one DailyCasualRequest
     * const dailyCasualRequest = await prisma.dailyCasualRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyCasualRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyCasualRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyCasualRequestClient<$Result.GetResult<Prisma.$DailyCasualRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyCasualRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyCasualRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyCasualRequests
     * const dailyCasualRequests = await prisma.dailyCasualRequest.findMany()
     * 
     * // Get first 10 DailyCasualRequests
     * const dailyCasualRequests = await prisma.dailyCasualRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyCasualRequestWithIdOnly = await prisma.dailyCasualRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyCasualRequestFindManyArgs>(args?: SelectSubset<T, DailyCasualRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyCasualRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyCasualRequest.
     * @param {DailyCasualRequestCreateArgs} args - Arguments to create a DailyCasualRequest.
     * @example
     * // Create one DailyCasualRequest
     * const DailyCasualRequest = await prisma.dailyCasualRequest.create({
     *   data: {
     *     // ... data to create a DailyCasualRequest
     *   }
     * })
     * 
     */
    create<T extends DailyCasualRequestCreateArgs>(args: SelectSubset<T, DailyCasualRequestCreateArgs<ExtArgs>>): Prisma__DailyCasualRequestClient<$Result.GetResult<Prisma.$DailyCasualRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyCasualRequests.
     * @param {DailyCasualRequestCreateManyArgs} args - Arguments to create many DailyCasualRequests.
     * @example
     * // Create many DailyCasualRequests
     * const dailyCasualRequest = await prisma.dailyCasualRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyCasualRequestCreateManyArgs>(args?: SelectSubset<T, DailyCasualRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyCasualRequests and returns the data saved in the database.
     * @param {DailyCasualRequestCreateManyAndReturnArgs} args - Arguments to create many DailyCasualRequests.
     * @example
     * // Create many DailyCasualRequests
     * const dailyCasualRequest = await prisma.dailyCasualRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyCasualRequests and only return the `id`
     * const dailyCasualRequestWithIdOnly = await prisma.dailyCasualRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyCasualRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyCasualRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyCasualRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyCasualRequest.
     * @param {DailyCasualRequestDeleteArgs} args - Arguments to delete one DailyCasualRequest.
     * @example
     * // Delete one DailyCasualRequest
     * const DailyCasualRequest = await prisma.dailyCasualRequest.delete({
     *   where: {
     *     // ... filter to delete one DailyCasualRequest
     *   }
     * })
     * 
     */
    delete<T extends DailyCasualRequestDeleteArgs>(args: SelectSubset<T, DailyCasualRequestDeleteArgs<ExtArgs>>): Prisma__DailyCasualRequestClient<$Result.GetResult<Prisma.$DailyCasualRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyCasualRequest.
     * @param {DailyCasualRequestUpdateArgs} args - Arguments to update one DailyCasualRequest.
     * @example
     * // Update one DailyCasualRequest
     * const dailyCasualRequest = await prisma.dailyCasualRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyCasualRequestUpdateArgs>(args: SelectSubset<T, DailyCasualRequestUpdateArgs<ExtArgs>>): Prisma__DailyCasualRequestClient<$Result.GetResult<Prisma.$DailyCasualRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyCasualRequests.
     * @param {DailyCasualRequestDeleteManyArgs} args - Arguments to filter DailyCasualRequests to delete.
     * @example
     * // Delete a few DailyCasualRequests
     * const { count } = await prisma.dailyCasualRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyCasualRequestDeleteManyArgs>(args?: SelectSubset<T, DailyCasualRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyCasualRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyCasualRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyCasualRequests
     * const dailyCasualRequest = await prisma.dailyCasualRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyCasualRequestUpdateManyArgs>(args: SelectSubset<T, DailyCasualRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyCasualRequests and returns the data updated in the database.
     * @param {DailyCasualRequestUpdateManyAndReturnArgs} args - Arguments to update many DailyCasualRequests.
     * @example
     * // Update many DailyCasualRequests
     * const dailyCasualRequest = await prisma.dailyCasualRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyCasualRequests and only return the `id`
     * const dailyCasualRequestWithIdOnly = await prisma.dailyCasualRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyCasualRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyCasualRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyCasualRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyCasualRequest.
     * @param {DailyCasualRequestUpsertArgs} args - Arguments to update or create a DailyCasualRequest.
     * @example
     * // Update or create a DailyCasualRequest
     * const dailyCasualRequest = await prisma.dailyCasualRequest.upsert({
     *   create: {
     *     // ... data to create a DailyCasualRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyCasualRequest we want to update
     *   }
     * })
     */
    upsert<T extends DailyCasualRequestUpsertArgs>(args: SelectSubset<T, DailyCasualRequestUpsertArgs<ExtArgs>>): Prisma__DailyCasualRequestClient<$Result.GetResult<Prisma.$DailyCasualRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyCasualRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyCasualRequestCountArgs} args - Arguments to filter DailyCasualRequests to count.
     * @example
     * // Count the number of DailyCasualRequests
     * const count = await prisma.dailyCasualRequest.count({
     *   where: {
     *     // ... the filter for the DailyCasualRequests we want to count
     *   }
     * })
    **/
    count<T extends DailyCasualRequestCountArgs>(
      args?: Subset<T, DailyCasualRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyCasualRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyCasualRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyCasualRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyCasualRequestAggregateArgs>(args: Subset<T, DailyCasualRequestAggregateArgs>): Prisma.PrismaPromise<GetDailyCasualRequestAggregateType<T>>

    /**
     * Group by DailyCasualRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyCasualRequestGroupByArgs} args - Group by arguments.
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
      T extends DailyCasualRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyCasualRequestGroupByArgs['orderBy'] }
        : { orderBy?: DailyCasualRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyCasualRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyCasualRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyCasualRequest model
   */
  readonly fields: DailyCasualRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyCasualRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyCasualRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supervisor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    admin<T extends DailyCasualRequest$adminArgs<ExtArgs> = {}>(args?: Subset<T, DailyCasualRequest$adminArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyCasualRequest model
   */
  interface DailyCasualRequestFieldRefs {
    readonly id: FieldRef<"DailyCasualRequest", 'String'>
    readonly casualsRequired: FieldRef<"DailyCasualRequest", 'Int'>
    readonly crop: FieldRef<"DailyCasualRequest", 'String'>
    readonly cropStage: FieldRef<"DailyCasualRequest", 'String'>
    readonly date: FieldRef<"DailyCasualRequest", 'DateTime'>
    readonly week: FieldRef<"DailyCasualRequest", 'String'>
    readonly activity: FieldRef<"DailyCasualRequest", 'String'>
    readonly farmName: FieldRef<"DailyCasualRequest", 'String'>
    readonly adjustment: FieldRef<"DailyCasualRequest", 'Float'>
    readonly units: FieldRef<"DailyCasualRequest", 'Int'>
    readonly costPerUnit: FieldRef<"DailyCasualRequest", 'Float'>
    readonly total: FieldRef<"DailyCasualRequest", 'Float'>
    readonly status: FieldRef<"DailyCasualRequest", 'DailyRequestStatus'>
    readonly rejectionReason: FieldRef<"DailyCasualRequest", 'String'>
    readonly createdAt: FieldRef<"DailyCasualRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"DailyCasualRequest", 'DateTime'>
    readonly supervisorId: FieldRef<"DailyCasualRequest", 'String'>
    readonly adminId: FieldRef<"DailyCasualRequest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DailyCasualRequest findUnique
   */
  export type DailyCasualRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCasualRequest
     */
    select?: DailyCasualRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyCasualRequest
     */
    omit?: DailyCasualRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyCasualRequestInclude<ExtArgs> | null
    /**
     * Filter, which DailyCasualRequest to fetch.
     */
    where: DailyCasualRequestWhereUniqueInput
  }

  /**
   * DailyCasualRequest findUniqueOrThrow
   */
  export type DailyCasualRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCasualRequest
     */
    select?: DailyCasualRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyCasualRequest
     */
    omit?: DailyCasualRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyCasualRequestInclude<ExtArgs> | null
    /**
     * Filter, which DailyCasualRequest to fetch.
     */
    where: DailyCasualRequestWhereUniqueInput
  }

  /**
   * DailyCasualRequest findFirst
   */
  export type DailyCasualRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCasualRequest
     */
    select?: DailyCasualRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyCasualRequest
     */
    omit?: DailyCasualRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyCasualRequestInclude<ExtArgs> | null
    /**
     * Filter, which DailyCasualRequest to fetch.
     */
    where?: DailyCasualRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyCasualRequests to fetch.
     */
    orderBy?: DailyCasualRequestOrderByWithRelationInput | DailyCasualRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyCasualRequests.
     */
    cursor?: DailyCasualRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyCasualRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyCasualRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyCasualRequests.
     */
    distinct?: DailyCasualRequestScalarFieldEnum | DailyCasualRequestScalarFieldEnum[]
  }

  /**
   * DailyCasualRequest findFirstOrThrow
   */
  export type DailyCasualRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCasualRequest
     */
    select?: DailyCasualRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyCasualRequest
     */
    omit?: DailyCasualRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyCasualRequestInclude<ExtArgs> | null
    /**
     * Filter, which DailyCasualRequest to fetch.
     */
    where?: DailyCasualRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyCasualRequests to fetch.
     */
    orderBy?: DailyCasualRequestOrderByWithRelationInput | DailyCasualRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyCasualRequests.
     */
    cursor?: DailyCasualRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyCasualRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyCasualRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyCasualRequests.
     */
    distinct?: DailyCasualRequestScalarFieldEnum | DailyCasualRequestScalarFieldEnum[]
  }

  /**
   * DailyCasualRequest findMany
   */
  export type DailyCasualRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCasualRequest
     */
    select?: DailyCasualRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyCasualRequest
     */
    omit?: DailyCasualRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyCasualRequestInclude<ExtArgs> | null
    /**
     * Filter, which DailyCasualRequests to fetch.
     */
    where?: DailyCasualRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyCasualRequests to fetch.
     */
    orderBy?: DailyCasualRequestOrderByWithRelationInput | DailyCasualRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyCasualRequests.
     */
    cursor?: DailyCasualRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyCasualRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyCasualRequests.
     */
    skip?: number
    distinct?: DailyCasualRequestScalarFieldEnum | DailyCasualRequestScalarFieldEnum[]
  }

  /**
   * DailyCasualRequest create
   */
  export type DailyCasualRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCasualRequest
     */
    select?: DailyCasualRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyCasualRequest
     */
    omit?: DailyCasualRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyCasualRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyCasualRequest.
     */
    data: XOR<DailyCasualRequestCreateInput, DailyCasualRequestUncheckedCreateInput>
  }

  /**
   * DailyCasualRequest createMany
   */
  export type DailyCasualRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyCasualRequests.
     */
    data: DailyCasualRequestCreateManyInput | DailyCasualRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyCasualRequest createManyAndReturn
   */
  export type DailyCasualRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCasualRequest
     */
    select?: DailyCasualRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyCasualRequest
     */
    omit?: DailyCasualRequestOmit<ExtArgs> | null
    /**
     * The data used to create many DailyCasualRequests.
     */
    data: DailyCasualRequestCreateManyInput | DailyCasualRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyCasualRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyCasualRequest update
   */
  export type DailyCasualRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCasualRequest
     */
    select?: DailyCasualRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyCasualRequest
     */
    omit?: DailyCasualRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyCasualRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyCasualRequest.
     */
    data: XOR<DailyCasualRequestUpdateInput, DailyCasualRequestUncheckedUpdateInput>
    /**
     * Choose, which DailyCasualRequest to update.
     */
    where: DailyCasualRequestWhereUniqueInput
  }

  /**
   * DailyCasualRequest updateMany
   */
  export type DailyCasualRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyCasualRequests.
     */
    data: XOR<DailyCasualRequestUpdateManyMutationInput, DailyCasualRequestUncheckedUpdateManyInput>
    /**
     * Filter which DailyCasualRequests to update
     */
    where?: DailyCasualRequestWhereInput
    /**
     * Limit how many DailyCasualRequests to update.
     */
    limit?: number
  }

  /**
   * DailyCasualRequest updateManyAndReturn
   */
  export type DailyCasualRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCasualRequest
     */
    select?: DailyCasualRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyCasualRequest
     */
    omit?: DailyCasualRequestOmit<ExtArgs> | null
    /**
     * The data used to update DailyCasualRequests.
     */
    data: XOR<DailyCasualRequestUpdateManyMutationInput, DailyCasualRequestUncheckedUpdateManyInput>
    /**
     * Filter which DailyCasualRequests to update
     */
    where?: DailyCasualRequestWhereInput
    /**
     * Limit how many DailyCasualRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyCasualRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyCasualRequest upsert
   */
  export type DailyCasualRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCasualRequest
     */
    select?: DailyCasualRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyCasualRequest
     */
    omit?: DailyCasualRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyCasualRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyCasualRequest to update in case it exists.
     */
    where: DailyCasualRequestWhereUniqueInput
    /**
     * In case the DailyCasualRequest found by the `where` argument doesn't exist, create a new DailyCasualRequest with this data.
     */
    create: XOR<DailyCasualRequestCreateInput, DailyCasualRequestUncheckedCreateInput>
    /**
     * In case the DailyCasualRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyCasualRequestUpdateInput, DailyCasualRequestUncheckedUpdateInput>
  }

  /**
   * DailyCasualRequest delete
   */
  export type DailyCasualRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCasualRequest
     */
    select?: DailyCasualRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyCasualRequest
     */
    omit?: DailyCasualRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyCasualRequestInclude<ExtArgs> | null
    /**
     * Filter which DailyCasualRequest to delete.
     */
    where: DailyCasualRequestWhereUniqueInput
  }

  /**
   * DailyCasualRequest deleteMany
   */
  export type DailyCasualRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyCasualRequests to delete
     */
    where?: DailyCasualRequestWhereInput
    /**
     * Limit how many DailyCasualRequests to delete.
     */
    limit?: number
  }

  /**
   * DailyCasualRequest.admin
   */
  export type DailyCasualRequest$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * DailyCasualRequest without action
   */
  export type DailyCasualRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCasualRequest
     */
    select?: DailyCasualRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyCasualRequest
     */
    omit?: DailyCasualRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyCasualRequestInclude<ExtArgs> | null
  }


  /**
   * Model CasualWorkEntry
   */

  export type AggregateCasualWorkEntry = {
    _count: CasualWorkEntryCountAggregateOutputType | null
    _avg: CasualWorkEntryAvgAggregateOutputType | null
    _sum: CasualWorkEntrySumAggregateOutputType | null
    _min: CasualWorkEntryMinAggregateOutputType | null
    _max: CasualWorkEntryMaxAggregateOutputType | null
  }

  export type CasualWorkEntryAvgAggregateOutputType = {
    unit: number | null
    costPerUnit: number | null
    adjustment: number | null
    amount: number | null
    amountInclMomoCharges: number | null
  }

  export type CasualWorkEntrySumAggregateOutputType = {
    unit: number | null
    costPerUnit: number | null
    adjustment: number | null
    amount: number | null
    amountInclMomoCharges: number | null
  }

  export type CasualWorkEntryMinAggregateOutputType = {
    id: string | null
    activityDone: string | null
    unit: number | null
    costPerUnit: number | null
    date: Date | null
    farmName: string | null
    period: string | null
    month: string | null
    crop: string | null
    cropStage: string | null
    adjustment: number | null
    amount: number | null
    amountInclMomoCharges: number | null
    signature: string | null
    createdAt: Date | null
    updatedAt: Date | null
    casualId: string | null
    supervisorId: string | null
    adminId: string | null
  }

  export type CasualWorkEntryMaxAggregateOutputType = {
    id: string | null
    activityDone: string | null
    unit: number | null
    costPerUnit: number | null
    date: Date | null
    farmName: string | null
    period: string | null
    month: string | null
    crop: string | null
    cropStage: string | null
    adjustment: number | null
    amount: number | null
    amountInclMomoCharges: number | null
    signature: string | null
    createdAt: Date | null
    updatedAt: Date | null
    casualId: string | null
    supervisorId: string | null
    adminId: string | null
  }

  export type CasualWorkEntryCountAggregateOutputType = {
    id: number
    activityDone: number
    unit: number
    costPerUnit: number
    date: number
    farmName: number
    period: number
    month: number
    crop: number
    cropStage: number
    adjustment: number
    amount: number
    amountInclMomoCharges: number
    signature: number
    createdAt: number
    updatedAt: number
    casualId: number
    supervisorId: number
    adminId: number
    _all: number
  }


  export type CasualWorkEntryAvgAggregateInputType = {
    unit?: true
    costPerUnit?: true
    adjustment?: true
    amount?: true
    amountInclMomoCharges?: true
  }

  export type CasualWorkEntrySumAggregateInputType = {
    unit?: true
    costPerUnit?: true
    adjustment?: true
    amount?: true
    amountInclMomoCharges?: true
  }

  export type CasualWorkEntryMinAggregateInputType = {
    id?: true
    activityDone?: true
    unit?: true
    costPerUnit?: true
    date?: true
    farmName?: true
    period?: true
    month?: true
    crop?: true
    cropStage?: true
    adjustment?: true
    amount?: true
    amountInclMomoCharges?: true
    signature?: true
    createdAt?: true
    updatedAt?: true
    casualId?: true
    supervisorId?: true
    adminId?: true
  }

  export type CasualWorkEntryMaxAggregateInputType = {
    id?: true
    activityDone?: true
    unit?: true
    costPerUnit?: true
    date?: true
    farmName?: true
    period?: true
    month?: true
    crop?: true
    cropStage?: true
    adjustment?: true
    amount?: true
    amountInclMomoCharges?: true
    signature?: true
    createdAt?: true
    updatedAt?: true
    casualId?: true
    supervisorId?: true
    adminId?: true
  }

  export type CasualWorkEntryCountAggregateInputType = {
    id?: true
    activityDone?: true
    unit?: true
    costPerUnit?: true
    date?: true
    farmName?: true
    period?: true
    month?: true
    crop?: true
    cropStage?: true
    adjustment?: true
    amount?: true
    amountInclMomoCharges?: true
    signature?: true
    createdAt?: true
    updatedAt?: true
    casualId?: true
    supervisorId?: true
    adminId?: true
    _all?: true
  }

  export type CasualWorkEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CasualWorkEntry to aggregate.
     */
    where?: CasualWorkEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasualWorkEntries to fetch.
     */
    orderBy?: CasualWorkEntryOrderByWithRelationInput | CasualWorkEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CasualWorkEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasualWorkEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasualWorkEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CasualWorkEntries
    **/
    _count?: true | CasualWorkEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CasualWorkEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CasualWorkEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CasualWorkEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CasualWorkEntryMaxAggregateInputType
  }

  export type GetCasualWorkEntryAggregateType<T extends CasualWorkEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateCasualWorkEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCasualWorkEntry[P]>
      : GetScalarType<T[P], AggregateCasualWorkEntry[P]>
  }




  export type CasualWorkEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasualWorkEntryWhereInput
    orderBy?: CasualWorkEntryOrderByWithAggregationInput | CasualWorkEntryOrderByWithAggregationInput[]
    by: CasualWorkEntryScalarFieldEnum[] | CasualWorkEntryScalarFieldEnum
    having?: CasualWorkEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CasualWorkEntryCountAggregateInputType | true
    _avg?: CasualWorkEntryAvgAggregateInputType
    _sum?: CasualWorkEntrySumAggregateInputType
    _min?: CasualWorkEntryMinAggregateInputType
    _max?: CasualWorkEntryMaxAggregateInputType
  }

  export type CasualWorkEntryGroupByOutputType = {
    id: string
    activityDone: string
    unit: number
    costPerUnit: number
    date: Date
    farmName: string
    period: string
    month: string
    crop: string
    cropStage: string | null
    adjustment: number
    amount: number
    amountInclMomoCharges: number
    signature: string | null
    createdAt: Date
    updatedAt: Date
    casualId: string
    supervisorId: string
    adminId: string | null
    _count: CasualWorkEntryCountAggregateOutputType | null
    _avg: CasualWorkEntryAvgAggregateOutputType | null
    _sum: CasualWorkEntrySumAggregateOutputType | null
    _min: CasualWorkEntryMinAggregateOutputType | null
    _max: CasualWorkEntryMaxAggregateOutputType | null
  }

  type GetCasualWorkEntryGroupByPayload<T extends CasualWorkEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CasualWorkEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CasualWorkEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CasualWorkEntryGroupByOutputType[P]>
            : GetScalarType<T[P], CasualWorkEntryGroupByOutputType[P]>
        }
      >
    >


  export type CasualWorkEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activityDone?: boolean
    unit?: boolean
    costPerUnit?: boolean
    date?: boolean
    farmName?: boolean
    period?: boolean
    month?: boolean
    crop?: boolean
    cropStage?: boolean
    adjustment?: boolean
    amount?: boolean
    amountInclMomoCharges?: boolean
    signature?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    casualId?: boolean
    supervisorId?: boolean
    adminId?: boolean
    casual?: boolean | CasualDefaultArgs<ExtArgs>
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
    admin?: boolean | CasualWorkEntry$adminArgs<ExtArgs>
  }, ExtArgs["result"]["casualWorkEntry"]>

  export type CasualWorkEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activityDone?: boolean
    unit?: boolean
    costPerUnit?: boolean
    date?: boolean
    farmName?: boolean
    period?: boolean
    month?: boolean
    crop?: boolean
    cropStage?: boolean
    adjustment?: boolean
    amount?: boolean
    amountInclMomoCharges?: boolean
    signature?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    casualId?: boolean
    supervisorId?: boolean
    adminId?: boolean
    casual?: boolean | CasualDefaultArgs<ExtArgs>
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
    admin?: boolean | CasualWorkEntry$adminArgs<ExtArgs>
  }, ExtArgs["result"]["casualWorkEntry"]>

  export type CasualWorkEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activityDone?: boolean
    unit?: boolean
    costPerUnit?: boolean
    date?: boolean
    farmName?: boolean
    period?: boolean
    month?: boolean
    crop?: boolean
    cropStage?: boolean
    adjustment?: boolean
    amount?: boolean
    amountInclMomoCharges?: boolean
    signature?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    casualId?: boolean
    supervisorId?: boolean
    adminId?: boolean
    casual?: boolean | CasualDefaultArgs<ExtArgs>
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
    admin?: boolean | CasualWorkEntry$adminArgs<ExtArgs>
  }, ExtArgs["result"]["casualWorkEntry"]>

  export type CasualWorkEntrySelectScalar = {
    id?: boolean
    activityDone?: boolean
    unit?: boolean
    costPerUnit?: boolean
    date?: boolean
    farmName?: boolean
    period?: boolean
    month?: boolean
    crop?: boolean
    cropStage?: boolean
    adjustment?: boolean
    amount?: boolean
    amountInclMomoCharges?: boolean
    signature?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    casualId?: boolean
    supervisorId?: boolean
    adminId?: boolean
  }

  export type CasualWorkEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "activityDone" | "unit" | "costPerUnit" | "date" | "farmName" | "period" | "month" | "crop" | "cropStage" | "adjustment" | "amount" | "amountInclMomoCharges" | "signature" | "createdAt" | "updatedAt" | "casualId" | "supervisorId" | "adminId", ExtArgs["result"]["casualWorkEntry"]>
  export type CasualWorkEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casual?: boolean | CasualDefaultArgs<ExtArgs>
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
    admin?: boolean | CasualWorkEntry$adminArgs<ExtArgs>
  }
  export type CasualWorkEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casual?: boolean | CasualDefaultArgs<ExtArgs>
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
    admin?: boolean | CasualWorkEntry$adminArgs<ExtArgs>
  }
  export type CasualWorkEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casual?: boolean | CasualDefaultArgs<ExtArgs>
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
    admin?: boolean | CasualWorkEntry$adminArgs<ExtArgs>
  }

  export type $CasualWorkEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CasualWorkEntry"
    objects: {
      casual: Prisma.$CasualPayload<ExtArgs>
      supervisor: Prisma.$UserPayload<ExtArgs>
      admin: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      activityDone: string
      unit: number
      costPerUnit: number
      date: Date
      farmName: string
      period: string
      month: string
      crop: string
      cropStage: string | null
      adjustment: number
      amount: number
      amountInclMomoCharges: number
      signature: string | null
      createdAt: Date
      updatedAt: Date
      casualId: string
      supervisorId: string
      adminId: string | null
    }, ExtArgs["result"]["casualWorkEntry"]>
    composites: {}
  }

  type CasualWorkEntryGetPayload<S extends boolean | null | undefined | CasualWorkEntryDefaultArgs> = $Result.GetResult<Prisma.$CasualWorkEntryPayload, S>

  type CasualWorkEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CasualWorkEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CasualWorkEntryCountAggregateInputType | true
    }

  export interface CasualWorkEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CasualWorkEntry'], meta: { name: 'CasualWorkEntry' } }
    /**
     * Find zero or one CasualWorkEntry that matches the filter.
     * @param {CasualWorkEntryFindUniqueArgs} args - Arguments to find a CasualWorkEntry
     * @example
     * // Get one CasualWorkEntry
     * const casualWorkEntry = await prisma.casualWorkEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CasualWorkEntryFindUniqueArgs>(args: SelectSubset<T, CasualWorkEntryFindUniqueArgs<ExtArgs>>): Prisma__CasualWorkEntryClient<$Result.GetResult<Prisma.$CasualWorkEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CasualWorkEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CasualWorkEntryFindUniqueOrThrowArgs} args - Arguments to find a CasualWorkEntry
     * @example
     * // Get one CasualWorkEntry
     * const casualWorkEntry = await prisma.casualWorkEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CasualWorkEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, CasualWorkEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CasualWorkEntryClient<$Result.GetResult<Prisma.$CasualWorkEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CasualWorkEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasualWorkEntryFindFirstArgs} args - Arguments to find a CasualWorkEntry
     * @example
     * // Get one CasualWorkEntry
     * const casualWorkEntry = await prisma.casualWorkEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CasualWorkEntryFindFirstArgs>(args?: SelectSubset<T, CasualWorkEntryFindFirstArgs<ExtArgs>>): Prisma__CasualWorkEntryClient<$Result.GetResult<Prisma.$CasualWorkEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CasualWorkEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasualWorkEntryFindFirstOrThrowArgs} args - Arguments to find a CasualWorkEntry
     * @example
     * // Get one CasualWorkEntry
     * const casualWorkEntry = await prisma.casualWorkEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CasualWorkEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, CasualWorkEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CasualWorkEntryClient<$Result.GetResult<Prisma.$CasualWorkEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CasualWorkEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasualWorkEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CasualWorkEntries
     * const casualWorkEntries = await prisma.casualWorkEntry.findMany()
     * 
     * // Get first 10 CasualWorkEntries
     * const casualWorkEntries = await prisma.casualWorkEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const casualWorkEntryWithIdOnly = await prisma.casualWorkEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CasualWorkEntryFindManyArgs>(args?: SelectSubset<T, CasualWorkEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasualWorkEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CasualWorkEntry.
     * @param {CasualWorkEntryCreateArgs} args - Arguments to create a CasualWorkEntry.
     * @example
     * // Create one CasualWorkEntry
     * const CasualWorkEntry = await prisma.casualWorkEntry.create({
     *   data: {
     *     // ... data to create a CasualWorkEntry
     *   }
     * })
     * 
     */
    create<T extends CasualWorkEntryCreateArgs>(args: SelectSubset<T, CasualWorkEntryCreateArgs<ExtArgs>>): Prisma__CasualWorkEntryClient<$Result.GetResult<Prisma.$CasualWorkEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CasualWorkEntries.
     * @param {CasualWorkEntryCreateManyArgs} args - Arguments to create many CasualWorkEntries.
     * @example
     * // Create many CasualWorkEntries
     * const casualWorkEntry = await prisma.casualWorkEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CasualWorkEntryCreateManyArgs>(args?: SelectSubset<T, CasualWorkEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CasualWorkEntries and returns the data saved in the database.
     * @param {CasualWorkEntryCreateManyAndReturnArgs} args - Arguments to create many CasualWorkEntries.
     * @example
     * // Create many CasualWorkEntries
     * const casualWorkEntry = await prisma.casualWorkEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CasualWorkEntries and only return the `id`
     * const casualWorkEntryWithIdOnly = await prisma.casualWorkEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CasualWorkEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, CasualWorkEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasualWorkEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CasualWorkEntry.
     * @param {CasualWorkEntryDeleteArgs} args - Arguments to delete one CasualWorkEntry.
     * @example
     * // Delete one CasualWorkEntry
     * const CasualWorkEntry = await prisma.casualWorkEntry.delete({
     *   where: {
     *     // ... filter to delete one CasualWorkEntry
     *   }
     * })
     * 
     */
    delete<T extends CasualWorkEntryDeleteArgs>(args: SelectSubset<T, CasualWorkEntryDeleteArgs<ExtArgs>>): Prisma__CasualWorkEntryClient<$Result.GetResult<Prisma.$CasualWorkEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CasualWorkEntry.
     * @param {CasualWorkEntryUpdateArgs} args - Arguments to update one CasualWorkEntry.
     * @example
     * // Update one CasualWorkEntry
     * const casualWorkEntry = await prisma.casualWorkEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CasualWorkEntryUpdateArgs>(args: SelectSubset<T, CasualWorkEntryUpdateArgs<ExtArgs>>): Prisma__CasualWorkEntryClient<$Result.GetResult<Prisma.$CasualWorkEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CasualWorkEntries.
     * @param {CasualWorkEntryDeleteManyArgs} args - Arguments to filter CasualWorkEntries to delete.
     * @example
     * // Delete a few CasualWorkEntries
     * const { count } = await prisma.casualWorkEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CasualWorkEntryDeleteManyArgs>(args?: SelectSubset<T, CasualWorkEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CasualWorkEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasualWorkEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CasualWorkEntries
     * const casualWorkEntry = await prisma.casualWorkEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CasualWorkEntryUpdateManyArgs>(args: SelectSubset<T, CasualWorkEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CasualWorkEntries and returns the data updated in the database.
     * @param {CasualWorkEntryUpdateManyAndReturnArgs} args - Arguments to update many CasualWorkEntries.
     * @example
     * // Update many CasualWorkEntries
     * const casualWorkEntry = await prisma.casualWorkEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CasualWorkEntries and only return the `id`
     * const casualWorkEntryWithIdOnly = await prisma.casualWorkEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CasualWorkEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, CasualWorkEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasualWorkEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CasualWorkEntry.
     * @param {CasualWorkEntryUpsertArgs} args - Arguments to update or create a CasualWorkEntry.
     * @example
     * // Update or create a CasualWorkEntry
     * const casualWorkEntry = await prisma.casualWorkEntry.upsert({
     *   create: {
     *     // ... data to create a CasualWorkEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CasualWorkEntry we want to update
     *   }
     * })
     */
    upsert<T extends CasualWorkEntryUpsertArgs>(args: SelectSubset<T, CasualWorkEntryUpsertArgs<ExtArgs>>): Prisma__CasualWorkEntryClient<$Result.GetResult<Prisma.$CasualWorkEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CasualWorkEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasualWorkEntryCountArgs} args - Arguments to filter CasualWorkEntries to count.
     * @example
     * // Count the number of CasualWorkEntries
     * const count = await prisma.casualWorkEntry.count({
     *   where: {
     *     // ... the filter for the CasualWorkEntries we want to count
     *   }
     * })
    **/
    count<T extends CasualWorkEntryCountArgs>(
      args?: Subset<T, CasualWorkEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CasualWorkEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CasualWorkEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasualWorkEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CasualWorkEntryAggregateArgs>(args: Subset<T, CasualWorkEntryAggregateArgs>): Prisma.PrismaPromise<GetCasualWorkEntryAggregateType<T>>

    /**
     * Group by CasualWorkEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasualWorkEntryGroupByArgs} args - Group by arguments.
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
      T extends CasualWorkEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CasualWorkEntryGroupByArgs['orderBy'] }
        : { orderBy?: CasualWorkEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CasualWorkEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCasualWorkEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CasualWorkEntry model
   */
  readonly fields: CasualWorkEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CasualWorkEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CasualWorkEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    casual<T extends CasualDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CasualDefaultArgs<ExtArgs>>): Prisma__CasualClient<$Result.GetResult<Prisma.$CasualPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supervisor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    admin<T extends CasualWorkEntry$adminArgs<ExtArgs> = {}>(args?: Subset<T, CasualWorkEntry$adminArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CasualWorkEntry model
   */
  interface CasualWorkEntryFieldRefs {
    readonly id: FieldRef<"CasualWorkEntry", 'String'>
    readonly activityDone: FieldRef<"CasualWorkEntry", 'String'>
    readonly unit: FieldRef<"CasualWorkEntry", 'Int'>
    readonly costPerUnit: FieldRef<"CasualWorkEntry", 'Float'>
    readonly date: FieldRef<"CasualWorkEntry", 'DateTime'>
    readonly farmName: FieldRef<"CasualWorkEntry", 'String'>
    readonly period: FieldRef<"CasualWorkEntry", 'String'>
    readonly month: FieldRef<"CasualWorkEntry", 'String'>
    readonly crop: FieldRef<"CasualWorkEntry", 'String'>
    readonly cropStage: FieldRef<"CasualWorkEntry", 'String'>
    readonly adjustment: FieldRef<"CasualWorkEntry", 'Float'>
    readonly amount: FieldRef<"CasualWorkEntry", 'Float'>
    readonly amountInclMomoCharges: FieldRef<"CasualWorkEntry", 'Float'>
    readonly signature: FieldRef<"CasualWorkEntry", 'String'>
    readonly createdAt: FieldRef<"CasualWorkEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"CasualWorkEntry", 'DateTime'>
    readonly casualId: FieldRef<"CasualWorkEntry", 'String'>
    readonly supervisorId: FieldRef<"CasualWorkEntry", 'String'>
    readonly adminId: FieldRef<"CasualWorkEntry", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CasualWorkEntry findUnique
   */
  export type CasualWorkEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasualWorkEntry
     */
    select?: CasualWorkEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasualWorkEntry
     */
    omit?: CasualWorkEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasualWorkEntryInclude<ExtArgs> | null
    /**
     * Filter, which CasualWorkEntry to fetch.
     */
    where: CasualWorkEntryWhereUniqueInput
  }

  /**
   * CasualWorkEntry findUniqueOrThrow
   */
  export type CasualWorkEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasualWorkEntry
     */
    select?: CasualWorkEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasualWorkEntry
     */
    omit?: CasualWorkEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasualWorkEntryInclude<ExtArgs> | null
    /**
     * Filter, which CasualWorkEntry to fetch.
     */
    where: CasualWorkEntryWhereUniqueInput
  }

  /**
   * CasualWorkEntry findFirst
   */
  export type CasualWorkEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasualWorkEntry
     */
    select?: CasualWorkEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasualWorkEntry
     */
    omit?: CasualWorkEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasualWorkEntryInclude<ExtArgs> | null
    /**
     * Filter, which CasualWorkEntry to fetch.
     */
    where?: CasualWorkEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasualWorkEntries to fetch.
     */
    orderBy?: CasualWorkEntryOrderByWithRelationInput | CasualWorkEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CasualWorkEntries.
     */
    cursor?: CasualWorkEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasualWorkEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasualWorkEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CasualWorkEntries.
     */
    distinct?: CasualWorkEntryScalarFieldEnum | CasualWorkEntryScalarFieldEnum[]
  }

  /**
   * CasualWorkEntry findFirstOrThrow
   */
  export type CasualWorkEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasualWorkEntry
     */
    select?: CasualWorkEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasualWorkEntry
     */
    omit?: CasualWorkEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasualWorkEntryInclude<ExtArgs> | null
    /**
     * Filter, which CasualWorkEntry to fetch.
     */
    where?: CasualWorkEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasualWorkEntries to fetch.
     */
    orderBy?: CasualWorkEntryOrderByWithRelationInput | CasualWorkEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CasualWorkEntries.
     */
    cursor?: CasualWorkEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasualWorkEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasualWorkEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CasualWorkEntries.
     */
    distinct?: CasualWorkEntryScalarFieldEnum | CasualWorkEntryScalarFieldEnum[]
  }

  /**
   * CasualWorkEntry findMany
   */
  export type CasualWorkEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasualWorkEntry
     */
    select?: CasualWorkEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasualWorkEntry
     */
    omit?: CasualWorkEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasualWorkEntryInclude<ExtArgs> | null
    /**
     * Filter, which CasualWorkEntries to fetch.
     */
    where?: CasualWorkEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasualWorkEntries to fetch.
     */
    orderBy?: CasualWorkEntryOrderByWithRelationInput | CasualWorkEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CasualWorkEntries.
     */
    cursor?: CasualWorkEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasualWorkEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasualWorkEntries.
     */
    skip?: number
    distinct?: CasualWorkEntryScalarFieldEnum | CasualWorkEntryScalarFieldEnum[]
  }

  /**
   * CasualWorkEntry create
   */
  export type CasualWorkEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasualWorkEntry
     */
    select?: CasualWorkEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasualWorkEntry
     */
    omit?: CasualWorkEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasualWorkEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a CasualWorkEntry.
     */
    data: XOR<CasualWorkEntryCreateInput, CasualWorkEntryUncheckedCreateInput>
  }

  /**
   * CasualWorkEntry createMany
   */
  export type CasualWorkEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CasualWorkEntries.
     */
    data: CasualWorkEntryCreateManyInput | CasualWorkEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CasualWorkEntry createManyAndReturn
   */
  export type CasualWorkEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasualWorkEntry
     */
    select?: CasualWorkEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CasualWorkEntry
     */
    omit?: CasualWorkEntryOmit<ExtArgs> | null
    /**
     * The data used to create many CasualWorkEntries.
     */
    data: CasualWorkEntryCreateManyInput | CasualWorkEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasualWorkEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CasualWorkEntry update
   */
  export type CasualWorkEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasualWorkEntry
     */
    select?: CasualWorkEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasualWorkEntry
     */
    omit?: CasualWorkEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasualWorkEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a CasualWorkEntry.
     */
    data: XOR<CasualWorkEntryUpdateInput, CasualWorkEntryUncheckedUpdateInput>
    /**
     * Choose, which CasualWorkEntry to update.
     */
    where: CasualWorkEntryWhereUniqueInput
  }

  /**
   * CasualWorkEntry updateMany
   */
  export type CasualWorkEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CasualWorkEntries.
     */
    data: XOR<CasualWorkEntryUpdateManyMutationInput, CasualWorkEntryUncheckedUpdateManyInput>
    /**
     * Filter which CasualWorkEntries to update
     */
    where?: CasualWorkEntryWhereInput
    /**
     * Limit how many CasualWorkEntries to update.
     */
    limit?: number
  }

  /**
   * CasualWorkEntry updateManyAndReturn
   */
  export type CasualWorkEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasualWorkEntry
     */
    select?: CasualWorkEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CasualWorkEntry
     */
    omit?: CasualWorkEntryOmit<ExtArgs> | null
    /**
     * The data used to update CasualWorkEntries.
     */
    data: XOR<CasualWorkEntryUpdateManyMutationInput, CasualWorkEntryUncheckedUpdateManyInput>
    /**
     * Filter which CasualWorkEntries to update
     */
    where?: CasualWorkEntryWhereInput
    /**
     * Limit how many CasualWorkEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasualWorkEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CasualWorkEntry upsert
   */
  export type CasualWorkEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasualWorkEntry
     */
    select?: CasualWorkEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasualWorkEntry
     */
    omit?: CasualWorkEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasualWorkEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the CasualWorkEntry to update in case it exists.
     */
    where: CasualWorkEntryWhereUniqueInput
    /**
     * In case the CasualWorkEntry found by the `where` argument doesn't exist, create a new CasualWorkEntry with this data.
     */
    create: XOR<CasualWorkEntryCreateInput, CasualWorkEntryUncheckedCreateInput>
    /**
     * In case the CasualWorkEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CasualWorkEntryUpdateInput, CasualWorkEntryUncheckedUpdateInput>
  }

  /**
   * CasualWorkEntry delete
   */
  export type CasualWorkEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasualWorkEntry
     */
    select?: CasualWorkEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasualWorkEntry
     */
    omit?: CasualWorkEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasualWorkEntryInclude<ExtArgs> | null
    /**
     * Filter which CasualWorkEntry to delete.
     */
    where: CasualWorkEntryWhereUniqueInput
  }

  /**
   * CasualWorkEntry deleteMany
   */
  export type CasualWorkEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CasualWorkEntries to delete
     */
    where?: CasualWorkEntryWhereInput
    /**
     * Limit how many CasualWorkEntries to delete.
     */
    limit?: number
  }

  /**
   * CasualWorkEntry.admin
   */
  export type CasualWorkEntry$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * CasualWorkEntry without action
   */
  export type CasualWorkEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasualWorkEntry
     */
    select?: CasualWorkEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasualWorkEntry
     */
    omit?: CasualWorkEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasualWorkEntryInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    token: string
    userId: string
    expiresAt: Date
    createdAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId" | "expiresAt" | "createdAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly token: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.NotificationType | null
    title: string | null
    message: string | null
    isRead: boolean | null
    link: string | null
    metadata: string | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.NotificationType | null
    title: string | null
    message: string | null
    isRead: boolean | null
    link: string | null
    metadata: string | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    title: number
    message: number
    isRead: number
    link: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    isRead?: true
    link?: true
    metadata?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    isRead?: true
    link?: true
    metadata?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    isRead?: true
    link?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.NotificationType
    title: string
    message: string
    isRead: boolean
    link: string | null
    metadata: string | null
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    link?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    link?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    link?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    link?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "title" | "message" | "isRead" | "link" | "metadata" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.NotificationType
      title: string
      message: string
      isRead: boolean
      link: string | null
      metadata: string | null
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly link: FieldRef<"Notification", 'String'>
    readonly metadata: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
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
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    isActive: 'isActive',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CasualScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nationalId: 'nationalId',
    phoneNumber: 'phoneNumber',
    farmName: 'farmName',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CasualScalarFieldEnum = (typeof CasualScalarFieldEnum)[keyof typeof CasualScalarFieldEnum]


  export const DailyCasualRequestScalarFieldEnum: {
    id: 'id',
    casualsRequired: 'casualsRequired',
    crop: 'crop',
    cropStage: 'cropStage',
    date: 'date',
    week: 'week',
    activity: 'activity',
    farmName: 'farmName',
    adjustment: 'adjustment',
    units: 'units',
    costPerUnit: 'costPerUnit',
    total: 'total',
    status: 'status',
    rejectionReason: 'rejectionReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    supervisorId: 'supervisorId',
    adminId: 'adminId'
  };

  export type DailyCasualRequestScalarFieldEnum = (typeof DailyCasualRequestScalarFieldEnum)[keyof typeof DailyCasualRequestScalarFieldEnum]


  export const CasualWorkEntryScalarFieldEnum: {
    id: 'id',
    activityDone: 'activityDone',
    unit: 'unit',
    costPerUnit: 'costPerUnit',
    date: 'date',
    farmName: 'farmName',
    period: 'period',
    month: 'month',
    crop: 'crop',
    cropStage: 'cropStage',
    adjustment: 'adjustment',
    amount: 'amount',
    amountInclMomoCharges: 'amountInclMomoCharges',
    signature: 'signature',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    casualId: 'casualId',
    supervisorId: 'supervisorId',
    adminId: 'adminId'
  };

  export type CasualWorkEntryScalarFieldEnum = (typeof CasualWorkEntryScalarFieldEnum)[keyof typeof CasualWorkEntryScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    title: 'title',
    message: 'message',
    isRead: 'isRead',
    link: 'link',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DailyRequestStatus'
   */
  export type EnumDailyRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DailyRequestStatus'>
    


  /**
   * Reference to a field of type 'DailyRequestStatus[]'
   */
  export type ListEnumDailyRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DailyRequestStatus[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    casualWorkEntries?: CasualWorkEntryListRelationFilter
    approvedCasualWorkEntries?: CasualWorkEntryListRelationFilter
    dailyCasualRequests?: DailyCasualRequestListRelationFilter
    approvedDailyCasualRequests?: DailyCasualRequestListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    isActive?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    casualWorkEntries?: CasualWorkEntryOrderByRelationAggregateInput
    approvedCasualWorkEntries?: CasualWorkEntryOrderByRelationAggregateInput
    dailyCasualRequests?: DailyCasualRequestOrderByRelationAggregateInput
    approvedDailyCasualRequests?: DailyCasualRequestOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    casualWorkEntries?: CasualWorkEntryListRelationFilter
    approvedCasualWorkEntries?: CasualWorkEntryListRelationFilter
    dailyCasualRequests?: DailyCasualRequestListRelationFilter
    approvedDailyCasualRequests?: DailyCasualRequestListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    isActive?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CasualWhereInput = {
    AND?: CasualWhereInput | CasualWhereInput[]
    OR?: CasualWhereInput[]
    NOT?: CasualWhereInput | CasualWhereInput[]
    id?: StringFilter<"Casual"> | string
    name?: StringFilter<"Casual"> | string
    nationalId?: StringFilter<"Casual"> | string
    phoneNumber?: StringFilter<"Casual"> | string
    farmName?: StringFilter<"Casual"> | string
    isActive?: BoolFilter<"Casual"> | boolean
    createdAt?: DateTimeFilter<"Casual"> | Date | string
    updatedAt?: DateTimeFilter<"Casual"> | Date | string
    workEntries?: CasualWorkEntryListRelationFilter
  }

  export type CasualOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    nationalId?: SortOrder
    phoneNumber?: SortOrder
    farmName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workEntries?: CasualWorkEntryOrderByRelationAggregateInput
  }

  export type CasualWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nationalId?: string
    AND?: CasualWhereInput | CasualWhereInput[]
    OR?: CasualWhereInput[]
    NOT?: CasualWhereInput | CasualWhereInput[]
    name?: StringFilter<"Casual"> | string
    phoneNumber?: StringFilter<"Casual"> | string
    farmName?: StringFilter<"Casual"> | string
    isActive?: BoolFilter<"Casual"> | boolean
    createdAt?: DateTimeFilter<"Casual"> | Date | string
    updatedAt?: DateTimeFilter<"Casual"> | Date | string
    workEntries?: CasualWorkEntryListRelationFilter
  }, "id" | "nationalId">

  export type CasualOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    nationalId?: SortOrder
    phoneNumber?: SortOrder
    farmName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CasualCountOrderByAggregateInput
    _max?: CasualMaxOrderByAggregateInput
    _min?: CasualMinOrderByAggregateInput
  }

  export type CasualScalarWhereWithAggregatesInput = {
    AND?: CasualScalarWhereWithAggregatesInput | CasualScalarWhereWithAggregatesInput[]
    OR?: CasualScalarWhereWithAggregatesInput[]
    NOT?: CasualScalarWhereWithAggregatesInput | CasualScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Casual"> | string
    name?: StringWithAggregatesFilter<"Casual"> | string
    nationalId?: StringWithAggregatesFilter<"Casual"> | string
    phoneNumber?: StringWithAggregatesFilter<"Casual"> | string
    farmName?: StringWithAggregatesFilter<"Casual"> | string
    isActive?: BoolWithAggregatesFilter<"Casual"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Casual"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Casual"> | Date | string
  }

  export type DailyCasualRequestWhereInput = {
    AND?: DailyCasualRequestWhereInput | DailyCasualRequestWhereInput[]
    OR?: DailyCasualRequestWhereInput[]
    NOT?: DailyCasualRequestWhereInput | DailyCasualRequestWhereInput[]
    id?: StringFilter<"DailyCasualRequest"> | string
    casualsRequired?: IntFilter<"DailyCasualRequest"> | number
    crop?: StringFilter<"DailyCasualRequest"> | string
    cropStage?: StringFilter<"DailyCasualRequest"> | string
    date?: DateTimeFilter<"DailyCasualRequest"> | Date | string
    week?: StringFilter<"DailyCasualRequest"> | string
    activity?: StringFilter<"DailyCasualRequest"> | string
    farmName?: StringFilter<"DailyCasualRequest"> | string
    adjustment?: FloatFilter<"DailyCasualRequest"> | number
    units?: IntFilter<"DailyCasualRequest"> | number
    costPerUnit?: FloatFilter<"DailyCasualRequest"> | number
    total?: FloatFilter<"DailyCasualRequest"> | number
    status?: EnumDailyRequestStatusFilter<"DailyCasualRequest"> | $Enums.DailyRequestStatus
    rejectionReason?: StringNullableFilter<"DailyCasualRequest"> | string | null
    createdAt?: DateTimeFilter<"DailyCasualRequest"> | Date | string
    updatedAt?: DateTimeFilter<"DailyCasualRequest"> | Date | string
    supervisorId?: StringFilter<"DailyCasualRequest"> | string
    adminId?: StringNullableFilter<"DailyCasualRequest"> | string | null
    supervisor?: XOR<UserScalarRelationFilter, UserWhereInput>
    admin?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type DailyCasualRequestOrderByWithRelationInput = {
    id?: SortOrder
    casualsRequired?: SortOrder
    crop?: SortOrder
    cropStage?: SortOrder
    date?: SortOrder
    week?: SortOrder
    activity?: SortOrder
    farmName?: SortOrder
    adjustment?: SortOrder
    units?: SortOrder
    costPerUnit?: SortOrder
    total?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    supervisorId?: SortOrder
    adminId?: SortOrderInput | SortOrder
    supervisor?: UserOrderByWithRelationInput
    admin?: UserOrderByWithRelationInput
  }

  export type DailyCasualRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DailyCasualRequestWhereInput | DailyCasualRequestWhereInput[]
    OR?: DailyCasualRequestWhereInput[]
    NOT?: DailyCasualRequestWhereInput | DailyCasualRequestWhereInput[]
    casualsRequired?: IntFilter<"DailyCasualRequest"> | number
    crop?: StringFilter<"DailyCasualRequest"> | string
    cropStage?: StringFilter<"DailyCasualRequest"> | string
    date?: DateTimeFilter<"DailyCasualRequest"> | Date | string
    week?: StringFilter<"DailyCasualRequest"> | string
    activity?: StringFilter<"DailyCasualRequest"> | string
    farmName?: StringFilter<"DailyCasualRequest"> | string
    adjustment?: FloatFilter<"DailyCasualRequest"> | number
    units?: IntFilter<"DailyCasualRequest"> | number
    costPerUnit?: FloatFilter<"DailyCasualRequest"> | number
    total?: FloatFilter<"DailyCasualRequest"> | number
    status?: EnumDailyRequestStatusFilter<"DailyCasualRequest"> | $Enums.DailyRequestStatus
    rejectionReason?: StringNullableFilter<"DailyCasualRequest"> | string | null
    createdAt?: DateTimeFilter<"DailyCasualRequest"> | Date | string
    updatedAt?: DateTimeFilter<"DailyCasualRequest"> | Date | string
    supervisorId?: StringFilter<"DailyCasualRequest"> | string
    adminId?: StringNullableFilter<"DailyCasualRequest"> | string | null
    supervisor?: XOR<UserScalarRelationFilter, UserWhereInput>
    admin?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type DailyCasualRequestOrderByWithAggregationInput = {
    id?: SortOrder
    casualsRequired?: SortOrder
    crop?: SortOrder
    cropStage?: SortOrder
    date?: SortOrder
    week?: SortOrder
    activity?: SortOrder
    farmName?: SortOrder
    adjustment?: SortOrder
    units?: SortOrder
    costPerUnit?: SortOrder
    total?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    supervisorId?: SortOrder
    adminId?: SortOrderInput | SortOrder
    _count?: DailyCasualRequestCountOrderByAggregateInput
    _avg?: DailyCasualRequestAvgOrderByAggregateInput
    _max?: DailyCasualRequestMaxOrderByAggregateInput
    _min?: DailyCasualRequestMinOrderByAggregateInput
    _sum?: DailyCasualRequestSumOrderByAggregateInput
  }

  export type DailyCasualRequestScalarWhereWithAggregatesInput = {
    AND?: DailyCasualRequestScalarWhereWithAggregatesInput | DailyCasualRequestScalarWhereWithAggregatesInput[]
    OR?: DailyCasualRequestScalarWhereWithAggregatesInput[]
    NOT?: DailyCasualRequestScalarWhereWithAggregatesInput | DailyCasualRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyCasualRequest"> | string
    casualsRequired?: IntWithAggregatesFilter<"DailyCasualRequest"> | number
    crop?: StringWithAggregatesFilter<"DailyCasualRequest"> | string
    cropStage?: StringWithAggregatesFilter<"DailyCasualRequest"> | string
    date?: DateTimeWithAggregatesFilter<"DailyCasualRequest"> | Date | string
    week?: StringWithAggregatesFilter<"DailyCasualRequest"> | string
    activity?: StringWithAggregatesFilter<"DailyCasualRequest"> | string
    farmName?: StringWithAggregatesFilter<"DailyCasualRequest"> | string
    adjustment?: FloatWithAggregatesFilter<"DailyCasualRequest"> | number
    units?: IntWithAggregatesFilter<"DailyCasualRequest"> | number
    costPerUnit?: FloatWithAggregatesFilter<"DailyCasualRequest"> | number
    total?: FloatWithAggregatesFilter<"DailyCasualRequest"> | number
    status?: EnumDailyRequestStatusWithAggregatesFilter<"DailyCasualRequest"> | $Enums.DailyRequestStatus
    rejectionReason?: StringNullableWithAggregatesFilter<"DailyCasualRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DailyCasualRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DailyCasualRequest"> | Date | string
    supervisorId?: StringWithAggregatesFilter<"DailyCasualRequest"> | string
    adminId?: StringNullableWithAggregatesFilter<"DailyCasualRequest"> | string | null
  }

  export type CasualWorkEntryWhereInput = {
    AND?: CasualWorkEntryWhereInput | CasualWorkEntryWhereInput[]
    OR?: CasualWorkEntryWhereInput[]
    NOT?: CasualWorkEntryWhereInput | CasualWorkEntryWhereInput[]
    id?: StringFilter<"CasualWorkEntry"> | string
    activityDone?: StringFilter<"CasualWorkEntry"> | string
    unit?: IntFilter<"CasualWorkEntry"> | number
    costPerUnit?: FloatFilter<"CasualWorkEntry"> | number
    date?: DateTimeFilter<"CasualWorkEntry"> | Date | string
    farmName?: StringFilter<"CasualWorkEntry"> | string
    period?: StringFilter<"CasualWorkEntry"> | string
    month?: StringFilter<"CasualWorkEntry"> | string
    crop?: StringFilter<"CasualWorkEntry"> | string
    cropStage?: StringNullableFilter<"CasualWorkEntry"> | string | null
    adjustment?: FloatFilter<"CasualWorkEntry"> | number
    amount?: FloatFilter<"CasualWorkEntry"> | number
    amountInclMomoCharges?: FloatFilter<"CasualWorkEntry"> | number
    signature?: StringNullableFilter<"CasualWorkEntry"> | string | null
    createdAt?: DateTimeFilter<"CasualWorkEntry"> | Date | string
    updatedAt?: DateTimeFilter<"CasualWorkEntry"> | Date | string
    casualId?: StringFilter<"CasualWorkEntry"> | string
    supervisorId?: StringFilter<"CasualWorkEntry"> | string
    adminId?: StringNullableFilter<"CasualWorkEntry"> | string | null
    casual?: XOR<CasualScalarRelationFilter, CasualWhereInput>
    supervisor?: XOR<UserScalarRelationFilter, UserWhereInput>
    admin?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type CasualWorkEntryOrderByWithRelationInput = {
    id?: SortOrder
    activityDone?: SortOrder
    unit?: SortOrder
    costPerUnit?: SortOrder
    date?: SortOrder
    farmName?: SortOrder
    period?: SortOrder
    month?: SortOrder
    crop?: SortOrder
    cropStage?: SortOrderInput | SortOrder
    adjustment?: SortOrder
    amount?: SortOrder
    amountInclMomoCharges?: SortOrder
    signature?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    casualId?: SortOrder
    supervisorId?: SortOrder
    adminId?: SortOrderInput | SortOrder
    casual?: CasualOrderByWithRelationInput
    supervisor?: UserOrderByWithRelationInput
    admin?: UserOrderByWithRelationInput
  }

  export type CasualWorkEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CasualWorkEntryWhereInput | CasualWorkEntryWhereInput[]
    OR?: CasualWorkEntryWhereInput[]
    NOT?: CasualWorkEntryWhereInput | CasualWorkEntryWhereInput[]
    activityDone?: StringFilter<"CasualWorkEntry"> | string
    unit?: IntFilter<"CasualWorkEntry"> | number
    costPerUnit?: FloatFilter<"CasualWorkEntry"> | number
    date?: DateTimeFilter<"CasualWorkEntry"> | Date | string
    farmName?: StringFilter<"CasualWorkEntry"> | string
    period?: StringFilter<"CasualWorkEntry"> | string
    month?: StringFilter<"CasualWorkEntry"> | string
    crop?: StringFilter<"CasualWorkEntry"> | string
    cropStage?: StringNullableFilter<"CasualWorkEntry"> | string | null
    adjustment?: FloatFilter<"CasualWorkEntry"> | number
    amount?: FloatFilter<"CasualWorkEntry"> | number
    amountInclMomoCharges?: FloatFilter<"CasualWorkEntry"> | number
    signature?: StringNullableFilter<"CasualWorkEntry"> | string | null
    createdAt?: DateTimeFilter<"CasualWorkEntry"> | Date | string
    updatedAt?: DateTimeFilter<"CasualWorkEntry"> | Date | string
    casualId?: StringFilter<"CasualWorkEntry"> | string
    supervisorId?: StringFilter<"CasualWorkEntry"> | string
    adminId?: StringNullableFilter<"CasualWorkEntry"> | string | null
    casual?: XOR<CasualScalarRelationFilter, CasualWhereInput>
    supervisor?: XOR<UserScalarRelationFilter, UserWhereInput>
    admin?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type CasualWorkEntryOrderByWithAggregationInput = {
    id?: SortOrder
    activityDone?: SortOrder
    unit?: SortOrder
    costPerUnit?: SortOrder
    date?: SortOrder
    farmName?: SortOrder
    period?: SortOrder
    month?: SortOrder
    crop?: SortOrder
    cropStage?: SortOrderInput | SortOrder
    adjustment?: SortOrder
    amount?: SortOrder
    amountInclMomoCharges?: SortOrder
    signature?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    casualId?: SortOrder
    supervisorId?: SortOrder
    adminId?: SortOrderInput | SortOrder
    _count?: CasualWorkEntryCountOrderByAggregateInput
    _avg?: CasualWorkEntryAvgOrderByAggregateInput
    _max?: CasualWorkEntryMaxOrderByAggregateInput
    _min?: CasualWorkEntryMinOrderByAggregateInput
    _sum?: CasualWorkEntrySumOrderByAggregateInput
  }

  export type CasualWorkEntryScalarWhereWithAggregatesInput = {
    AND?: CasualWorkEntryScalarWhereWithAggregatesInput | CasualWorkEntryScalarWhereWithAggregatesInput[]
    OR?: CasualWorkEntryScalarWhereWithAggregatesInput[]
    NOT?: CasualWorkEntryScalarWhereWithAggregatesInput | CasualWorkEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CasualWorkEntry"> | string
    activityDone?: StringWithAggregatesFilter<"CasualWorkEntry"> | string
    unit?: IntWithAggregatesFilter<"CasualWorkEntry"> | number
    costPerUnit?: FloatWithAggregatesFilter<"CasualWorkEntry"> | number
    date?: DateTimeWithAggregatesFilter<"CasualWorkEntry"> | Date | string
    farmName?: StringWithAggregatesFilter<"CasualWorkEntry"> | string
    period?: StringWithAggregatesFilter<"CasualWorkEntry"> | string
    month?: StringWithAggregatesFilter<"CasualWorkEntry"> | string
    crop?: StringWithAggregatesFilter<"CasualWorkEntry"> | string
    cropStage?: StringNullableWithAggregatesFilter<"CasualWorkEntry"> | string | null
    adjustment?: FloatWithAggregatesFilter<"CasualWorkEntry"> | number
    amount?: FloatWithAggregatesFilter<"CasualWorkEntry"> | number
    amountInclMomoCharges?: FloatWithAggregatesFilter<"CasualWorkEntry"> | number
    signature?: StringNullableWithAggregatesFilter<"CasualWorkEntry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CasualWorkEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CasualWorkEntry"> | Date | string
    casualId?: StringWithAggregatesFilter<"CasualWorkEntry"> | string
    supervisorId?: StringWithAggregatesFilter<"CasualWorkEntry"> | string
    adminId?: StringNullableWithAggregatesFilter<"CasualWorkEntry"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    token?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    link?: StringNullableFilter<"Notification"> | string | null
    metadata?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    link?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    link?: StringNullableFilter<"Notification"> | string | null
    metadata?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    link?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    link?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    metadata?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isActive?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    casualWorkEntries?: CasualWorkEntryCreateNestedManyWithoutSupervisorInput
    approvedCasualWorkEntries?: CasualWorkEntryCreateNestedManyWithoutAdminInput
    dailyCasualRequests?: DailyCasualRequestCreateNestedManyWithoutSupervisorInput
    approvedDailyCasualRequests?: DailyCasualRequestCreateNestedManyWithoutAdminInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isActive?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    casualWorkEntries?: CasualWorkEntryUncheckedCreateNestedManyWithoutSupervisorInput
    approvedCasualWorkEntries?: CasualWorkEntryUncheckedCreateNestedManyWithoutAdminInput
    dailyCasualRequests?: DailyCasualRequestUncheckedCreateNestedManyWithoutSupervisorInput
    approvedDailyCasualRequests?: DailyCasualRequestUncheckedCreateNestedManyWithoutAdminInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    casualWorkEntries?: CasualWorkEntryUpdateManyWithoutSupervisorNestedInput
    approvedCasualWorkEntries?: CasualWorkEntryUpdateManyWithoutAdminNestedInput
    dailyCasualRequests?: DailyCasualRequestUpdateManyWithoutSupervisorNestedInput
    approvedDailyCasualRequests?: DailyCasualRequestUpdateManyWithoutAdminNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    casualWorkEntries?: CasualWorkEntryUncheckedUpdateManyWithoutSupervisorNestedInput
    approvedCasualWorkEntries?: CasualWorkEntryUncheckedUpdateManyWithoutAdminNestedInput
    dailyCasualRequests?: DailyCasualRequestUncheckedUpdateManyWithoutSupervisorNestedInput
    approvedDailyCasualRequests?: DailyCasualRequestUncheckedUpdateManyWithoutAdminNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isActive?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasualCreateInput = {
    id?: string
    name: string
    nationalId: string
    phoneNumber: string
    farmName?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workEntries?: CasualWorkEntryCreateNestedManyWithoutCasualInput
  }

  export type CasualUncheckedCreateInput = {
    id?: string
    name: string
    nationalId: string
    phoneNumber: string
    farmName?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workEntries?: CasualWorkEntryUncheckedCreateNestedManyWithoutCasualInput
  }

  export type CasualUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workEntries?: CasualWorkEntryUpdateManyWithoutCasualNestedInput
  }

  export type CasualUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workEntries?: CasualWorkEntryUncheckedUpdateManyWithoutCasualNestedInput
  }

  export type CasualCreateManyInput = {
    id?: string
    name: string
    nationalId: string
    phoneNumber: string
    farmName?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CasualUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasualUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyCasualRequestCreateInput = {
    id?: string
    casualsRequired: number
    crop: string
    cropStage: string
    date: Date | string
    week: string
    activity: string
    farmName: string
    adjustment?: number
    units?: number
    costPerUnit: number
    total: number
    status?: $Enums.DailyRequestStatus
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supervisor: UserCreateNestedOneWithoutDailyCasualRequestsInput
    admin?: UserCreateNestedOneWithoutApprovedDailyCasualRequestsInput
  }

  export type DailyCasualRequestUncheckedCreateInput = {
    id?: string
    casualsRequired: number
    crop: string
    cropStage: string
    date: Date | string
    week: string
    activity: string
    farmName: string
    adjustment?: number
    units?: number
    costPerUnit: number
    total: number
    status?: $Enums.DailyRequestStatus
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supervisorId: string
    adminId?: string | null
  }

  export type DailyCasualRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    casualsRequired?: IntFieldUpdateOperationsInput | number
    crop?: StringFieldUpdateOperationsInput | string
    cropStage?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    week?: StringFieldUpdateOperationsInput | string
    activity?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    adjustment?: FloatFieldUpdateOperationsInput | number
    units?: IntFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumDailyRequestStatusFieldUpdateOperationsInput | $Enums.DailyRequestStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supervisor?: UserUpdateOneRequiredWithoutDailyCasualRequestsNestedInput
    admin?: UserUpdateOneWithoutApprovedDailyCasualRequestsNestedInput
  }

  export type DailyCasualRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    casualsRequired?: IntFieldUpdateOperationsInput | number
    crop?: StringFieldUpdateOperationsInput | string
    cropStage?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    week?: StringFieldUpdateOperationsInput | string
    activity?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    adjustment?: FloatFieldUpdateOperationsInput | number
    units?: IntFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumDailyRequestStatusFieldUpdateOperationsInput | $Enums.DailyRequestStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supervisorId?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DailyCasualRequestCreateManyInput = {
    id?: string
    casualsRequired: number
    crop: string
    cropStage: string
    date: Date | string
    week: string
    activity: string
    farmName: string
    adjustment?: number
    units?: number
    costPerUnit: number
    total: number
    status?: $Enums.DailyRequestStatus
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supervisorId: string
    adminId?: string | null
  }

  export type DailyCasualRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    casualsRequired?: IntFieldUpdateOperationsInput | number
    crop?: StringFieldUpdateOperationsInput | string
    cropStage?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    week?: StringFieldUpdateOperationsInput | string
    activity?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    adjustment?: FloatFieldUpdateOperationsInput | number
    units?: IntFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumDailyRequestStatusFieldUpdateOperationsInput | $Enums.DailyRequestStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyCasualRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    casualsRequired?: IntFieldUpdateOperationsInput | number
    crop?: StringFieldUpdateOperationsInput | string
    cropStage?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    week?: StringFieldUpdateOperationsInput | string
    activity?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    adjustment?: FloatFieldUpdateOperationsInput | number
    units?: IntFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumDailyRequestStatusFieldUpdateOperationsInput | $Enums.DailyRequestStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supervisorId?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CasualWorkEntryCreateInput = {
    id?: string
    activityDone: string
    unit: number
    costPerUnit: number
    date: Date | string
    farmName: string
    period: string
    month: string
    crop: string
    cropStage?: string | null
    adjustment?: number
    amount: number
    amountInclMomoCharges: number
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    casual: CasualCreateNestedOneWithoutWorkEntriesInput
    supervisor: UserCreateNestedOneWithoutCasualWorkEntriesInput
    admin?: UserCreateNestedOneWithoutApprovedCasualWorkEntriesInput
  }

  export type CasualWorkEntryUncheckedCreateInput = {
    id?: string
    activityDone: string
    unit: number
    costPerUnit: number
    date: Date | string
    farmName: string
    period: string
    month: string
    crop: string
    cropStage?: string | null
    adjustment?: number
    amount: number
    amountInclMomoCharges: number
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    casualId: string
    supervisorId: string
    adminId?: string | null
  }

  export type CasualWorkEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityDone?: StringFieldUpdateOperationsInput | string
    unit?: IntFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    farmName?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    crop?: StringFieldUpdateOperationsInput | string
    cropStage?: NullableStringFieldUpdateOperationsInput | string | null
    adjustment?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    amountInclMomoCharges?: FloatFieldUpdateOperationsInput | number
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casual?: CasualUpdateOneRequiredWithoutWorkEntriesNestedInput
    supervisor?: UserUpdateOneRequiredWithoutCasualWorkEntriesNestedInput
    admin?: UserUpdateOneWithoutApprovedCasualWorkEntriesNestedInput
  }

  export type CasualWorkEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityDone?: StringFieldUpdateOperationsInput | string
    unit?: IntFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    farmName?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    crop?: StringFieldUpdateOperationsInput | string
    cropStage?: NullableStringFieldUpdateOperationsInput | string | null
    adjustment?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    amountInclMomoCharges?: FloatFieldUpdateOperationsInput | number
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casualId?: StringFieldUpdateOperationsInput | string
    supervisorId?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CasualWorkEntryCreateManyInput = {
    id?: string
    activityDone: string
    unit: number
    costPerUnit: number
    date: Date | string
    farmName: string
    period: string
    month: string
    crop: string
    cropStage?: string | null
    adjustment?: number
    amount: number
    amountInclMomoCharges: number
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    casualId: string
    supervisorId: string
    adminId?: string | null
  }

  export type CasualWorkEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityDone?: StringFieldUpdateOperationsInput | string
    unit?: IntFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    farmName?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    crop?: StringFieldUpdateOperationsInput | string
    cropStage?: NullableStringFieldUpdateOperationsInput | string | null
    adjustment?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    amountInclMomoCharges?: FloatFieldUpdateOperationsInput | number
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasualWorkEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityDone?: StringFieldUpdateOperationsInput | string
    unit?: IntFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    farmName?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    crop?: StringFieldUpdateOperationsInput | string
    cropStage?: NullableStringFieldUpdateOperationsInput | string | null
    adjustment?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    amountInclMomoCharges?: FloatFieldUpdateOperationsInput | number
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casualId?: StringFieldUpdateOperationsInput | string
    supervisorId?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    link?: string | null
    metadata?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    link?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    link?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type CasualWorkEntryListRelationFilter = {
    every?: CasualWorkEntryWhereInput
    some?: CasualWorkEntryWhereInput
    none?: CasualWorkEntryWhereInput
  }

  export type DailyCasualRequestListRelationFilter = {
    every?: DailyCasualRequestWhereInput
    some?: DailyCasualRequestWhereInput
    none?: DailyCasualRequestWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CasualWorkEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyCasualRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    isActive?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    isActive?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    isActive?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type CasualCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nationalId?: SortOrder
    phoneNumber?: SortOrder
    farmName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CasualMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nationalId?: SortOrder
    phoneNumber?: SortOrder
    farmName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CasualMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nationalId?: SortOrder
    phoneNumber?: SortOrder
    farmName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumDailyRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DailyRequestStatus | EnumDailyRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DailyRequestStatus[] | ListEnumDailyRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DailyRequestStatus[] | ListEnumDailyRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDailyRequestStatusFilter<$PrismaModel> | $Enums.DailyRequestStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type DailyCasualRequestCountOrderByAggregateInput = {
    id?: SortOrder
    casualsRequired?: SortOrder
    crop?: SortOrder
    cropStage?: SortOrder
    date?: SortOrder
    week?: SortOrder
    activity?: SortOrder
    farmName?: SortOrder
    adjustment?: SortOrder
    units?: SortOrder
    costPerUnit?: SortOrder
    total?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    supervisorId?: SortOrder
    adminId?: SortOrder
  }

  export type DailyCasualRequestAvgOrderByAggregateInput = {
    casualsRequired?: SortOrder
    adjustment?: SortOrder
    units?: SortOrder
    costPerUnit?: SortOrder
    total?: SortOrder
  }

  export type DailyCasualRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    casualsRequired?: SortOrder
    crop?: SortOrder
    cropStage?: SortOrder
    date?: SortOrder
    week?: SortOrder
    activity?: SortOrder
    farmName?: SortOrder
    adjustment?: SortOrder
    units?: SortOrder
    costPerUnit?: SortOrder
    total?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    supervisorId?: SortOrder
    adminId?: SortOrder
  }

  export type DailyCasualRequestMinOrderByAggregateInput = {
    id?: SortOrder
    casualsRequired?: SortOrder
    crop?: SortOrder
    cropStage?: SortOrder
    date?: SortOrder
    week?: SortOrder
    activity?: SortOrder
    farmName?: SortOrder
    adjustment?: SortOrder
    units?: SortOrder
    costPerUnit?: SortOrder
    total?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    supervisorId?: SortOrder
    adminId?: SortOrder
  }

  export type DailyCasualRequestSumOrderByAggregateInput = {
    casualsRequired?: SortOrder
    adjustment?: SortOrder
    units?: SortOrder
    costPerUnit?: SortOrder
    total?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumDailyRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DailyRequestStatus | EnumDailyRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DailyRequestStatus[] | ListEnumDailyRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DailyRequestStatus[] | ListEnumDailyRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDailyRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.DailyRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDailyRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumDailyRequestStatusFilter<$PrismaModel>
  }

  export type CasualScalarRelationFilter = {
    is?: CasualWhereInput
    isNot?: CasualWhereInput
  }

  export type CasualWorkEntryCountOrderByAggregateInput = {
    id?: SortOrder
    activityDone?: SortOrder
    unit?: SortOrder
    costPerUnit?: SortOrder
    date?: SortOrder
    farmName?: SortOrder
    period?: SortOrder
    month?: SortOrder
    crop?: SortOrder
    cropStage?: SortOrder
    adjustment?: SortOrder
    amount?: SortOrder
    amountInclMomoCharges?: SortOrder
    signature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    casualId?: SortOrder
    supervisorId?: SortOrder
    adminId?: SortOrder
  }

  export type CasualWorkEntryAvgOrderByAggregateInput = {
    unit?: SortOrder
    costPerUnit?: SortOrder
    adjustment?: SortOrder
    amount?: SortOrder
    amountInclMomoCharges?: SortOrder
  }

  export type CasualWorkEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    activityDone?: SortOrder
    unit?: SortOrder
    costPerUnit?: SortOrder
    date?: SortOrder
    farmName?: SortOrder
    period?: SortOrder
    month?: SortOrder
    crop?: SortOrder
    cropStage?: SortOrder
    adjustment?: SortOrder
    amount?: SortOrder
    amountInclMomoCharges?: SortOrder
    signature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    casualId?: SortOrder
    supervisorId?: SortOrder
    adminId?: SortOrder
  }

  export type CasualWorkEntryMinOrderByAggregateInput = {
    id?: SortOrder
    activityDone?: SortOrder
    unit?: SortOrder
    costPerUnit?: SortOrder
    date?: SortOrder
    farmName?: SortOrder
    period?: SortOrder
    month?: SortOrder
    crop?: SortOrder
    cropStage?: SortOrder
    adjustment?: SortOrder
    amount?: SortOrder
    amountInclMomoCharges?: SortOrder
    signature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    casualId?: SortOrder
    supervisorId?: SortOrder
    adminId?: SortOrder
  }

  export type CasualWorkEntrySumOrderByAggregateInput = {
    unit?: SortOrder
    costPerUnit?: SortOrder
    adjustment?: SortOrder
    amount?: SortOrder
    amountInclMomoCharges?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    link?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    link?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    link?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type CasualWorkEntryCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<CasualWorkEntryCreateWithoutSupervisorInput, CasualWorkEntryUncheckedCreateWithoutSupervisorInput> | CasualWorkEntryCreateWithoutSupervisorInput[] | CasualWorkEntryUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: CasualWorkEntryCreateOrConnectWithoutSupervisorInput | CasualWorkEntryCreateOrConnectWithoutSupervisorInput[]
    createMany?: CasualWorkEntryCreateManySupervisorInputEnvelope
    connect?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
  }

  export type CasualWorkEntryCreateNestedManyWithoutAdminInput = {
    create?: XOR<CasualWorkEntryCreateWithoutAdminInput, CasualWorkEntryUncheckedCreateWithoutAdminInput> | CasualWorkEntryCreateWithoutAdminInput[] | CasualWorkEntryUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: CasualWorkEntryCreateOrConnectWithoutAdminInput | CasualWorkEntryCreateOrConnectWithoutAdminInput[]
    createMany?: CasualWorkEntryCreateManyAdminInputEnvelope
    connect?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
  }

  export type DailyCasualRequestCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<DailyCasualRequestCreateWithoutSupervisorInput, DailyCasualRequestUncheckedCreateWithoutSupervisorInput> | DailyCasualRequestCreateWithoutSupervisorInput[] | DailyCasualRequestUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: DailyCasualRequestCreateOrConnectWithoutSupervisorInput | DailyCasualRequestCreateOrConnectWithoutSupervisorInput[]
    createMany?: DailyCasualRequestCreateManySupervisorInputEnvelope
    connect?: DailyCasualRequestWhereUniqueInput | DailyCasualRequestWhereUniqueInput[]
  }

  export type DailyCasualRequestCreateNestedManyWithoutAdminInput = {
    create?: XOR<DailyCasualRequestCreateWithoutAdminInput, DailyCasualRequestUncheckedCreateWithoutAdminInput> | DailyCasualRequestCreateWithoutAdminInput[] | DailyCasualRequestUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: DailyCasualRequestCreateOrConnectWithoutAdminInput | DailyCasualRequestCreateOrConnectWithoutAdminInput[]
    createMany?: DailyCasualRequestCreateManyAdminInputEnvelope
    connect?: DailyCasualRequestWhereUniqueInput | DailyCasualRequestWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type CasualWorkEntryUncheckedCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<CasualWorkEntryCreateWithoutSupervisorInput, CasualWorkEntryUncheckedCreateWithoutSupervisorInput> | CasualWorkEntryCreateWithoutSupervisorInput[] | CasualWorkEntryUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: CasualWorkEntryCreateOrConnectWithoutSupervisorInput | CasualWorkEntryCreateOrConnectWithoutSupervisorInput[]
    createMany?: CasualWorkEntryCreateManySupervisorInputEnvelope
    connect?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
  }

  export type CasualWorkEntryUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<CasualWorkEntryCreateWithoutAdminInput, CasualWorkEntryUncheckedCreateWithoutAdminInput> | CasualWorkEntryCreateWithoutAdminInput[] | CasualWorkEntryUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: CasualWorkEntryCreateOrConnectWithoutAdminInput | CasualWorkEntryCreateOrConnectWithoutAdminInput[]
    createMany?: CasualWorkEntryCreateManyAdminInputEnvelope
    connect?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
  }

  export type DailyCasualRequestUncheckedCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<DailyCasualRequestCreateWithoutSupervisorInput, DailyCasualRequestUncheckedCreateWithoutSupervisorInput> | DailyCasualRequestCreateWithoutSupervisorInput[] | DailyCasualRequestUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: DailyCasualRequestCreateOrConnectWithoutSupervisorInput | DailyCasualRequestCreateOrConnectWithoutSupervisorInput[]
    createMany?: DailyCasualRequestCreateManySupervisorInputEnvelope
    connect?: DailyCasualRequestWhereUniqueInput | DailyCasualRequestWhereUniqueInput[]
  }

  export type DailyCasualRequestUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<DailyCasualRequestCreateWithoutAdminInput, DailyCasualRequestUncheckedCreateWithoutAdminInput> | DailyCasualRequestCreateWithoutAdminInput[] | DailyCasualRequestUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: DailyCasualRequestCreateOrConnectWithoutAdminInput | DailyCasualRequestCreateOrConnectWithoutAdminInput[]
    createMany?: DailyCasualRequestCreateManyAdminInputEnvelope
    connect?: DailyCasualRequestWhereUniqueInput | DailyCasualRequestWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type CasualWorkEntryUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<CasualWorkEntryCreateWithoutSupervisorInput, CasualWorkEntryUncheckedCreateWithoutSupervisorInput> | CasualWorkEntryCreateWithoutSupervisorInput[] | CasualWorkEntryUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: CasualWorkEntryCreateOrConnectWithoutSupervisorInput | CasualWorkEntryCreateOrConnectWithoutSupervisorInput[]
    upsert?: CasualWorkEntryUpsertWithWhereUniqueWithoutSupervisorInput | CasualWorkEntryUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: CasualWorkEntryCreateManySupervisorInputEnvelope
    set?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
    disconnect?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
    delete?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
    connect?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
    update?: CasualWorkEntryUpdateWithWhereUniqueWithoutSupervisorInput | CasualWorkEntryUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: CasualWorkEntryUpdateManyWithWhereWithoutSupervisorInput | CasualWorkEntryUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: CasualWorkEntryScalarWhereInput | CasualWorkEntryScalarWhereInput[]
  }

  export type CasualWorkEntryUpdateManyWithoutAdminNestedInput = {
    create?: XOR<CasualWorkEntryCreateWithoutAdminInput, CasualWorkEntryUncheckedCreateWithoutAdminInput> | CasualWorkEntryCreateWithoutAdminInput[] | CasualWorkEntryUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: CasualWorkEntryCreateOrConnectWithoutAdminInput | CasualWorkEntryCreateOrConnectWithoutAdminInput[]
    upsert?: CasualWorkEntryUpsertWithWhereUniqueWithoutAdminInput | CasualWorkEntryUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: CasualWorkEntryCreateManyAdminInputEnvelope
    set?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
    disconnect?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
    delete?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
    connect?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
    update?: CasualWorkEntryUpdateWithWhereUniqueWithoutAdminInput | CasualWorkEntryUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: CasualWorkEntryUpdateManyWithWhereWithoutAdminInput | CasualWorkEntryUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: CasualWorkEntryScalarWhereInput | CasualWorkEntryScalarWhereInput[]
  }

  export type DailyCasualRequestUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<DailyCasualRequestCreateWithoutSupervisorInput, DailyCasualRequestUncheckedCreateWithoutSupervisorInput> | DailyCasualRequestCreateWithoutSupervisorInput[] | DailyCasualRequestUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: DailyCasualRequestCreateOrConnectWithoutSupervisorInput | DailyCasualRequestCreateOrConnectWithoutSupervisorInput[]
    upsert?: DailyCasualRequestUpsertWithWhereUniqueWithoutSupervisorInput | DailyCasualRequestUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: DailyCasualRequestCreateManySupervisorInputEnvelope
    set?: DailyCasualRequestWhereUniqueInput | DailyCasualRequestWhereUniqueInput[]
    disconnect?: DailyCasualRequestWhereUniqueInput | DailyCasualRequestWhereUniqueInput[]
    delete?: DailyCasualRequestWhereUniqueInput | DailyCasualRequestWhereUniqueInput[]
    connect?: DailyCasualRequestWhereUniqueInput | DailyCasualRequestWhereUniqueInput[]
    update?: DailyCasualRequestUpdateWithWhereUniqueWithoutSupervisorInput | DailyCasualRequestUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: DailyCasualRequestUpdateManyWithWhereWithoutSupervisorInput | DailyCasualRequestUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: DailyCasualRequestScalarWhereInput | DailyCasualRequestScalarWhereInput[]
  }

  export type DailyCasualRequestUpdateManyWithoutAdminNestedInput = {
    create?: XOR<DailyCasualRequestCreateWithoutAdminInput, DailyCasualRequestUncheckedCreateWithoutAdminInput> | DailyCasualRequestCreateWithoutAdminInput[] | DailyCasualRequestUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: DailyCasualRequestCreateOrConnectWithoutAdminInput | DailyCasualRequestCreateOrConnectWithoutAdminInput[]
    upsert?: DailyCasualRequestUpsertWithWhereUniqueWithoutAdminInput | DailyCasualRequestUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: DailyCasualRequestCreateManyAdminInputEnvelope
    set?: DailyCasualRequestWhereUniqueInput | DailyCasualRequestWhereUniqueInput[]
    disconnect?: DailyCasualRequestWhereUniqueInput | DailyCasualRequestWhereUniqueInput[]
    delete?: DailyCasualRequestWhereUniqueInput | DailyCasualRequestWhereUniqueInput[]
    connect?: DailyCasualRequestWhereUniqueInput | DailyCasualRequestWhereUniqueInput[]
    update?: DailyCasualRequestUpdateWithWhereUniqueWithoutAdminInput | DailyCasualRequestUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: DailyCasualRequestUpdateManyWithWhereWithoutAdminInput | DailyCasualRequestUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: DailyCasualRequestScalarWhereInput | DailyCasualRequestScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type CasualWorkEntryUncheckedUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<CasualWorkEntryCreateWithoutSupervisorInput, CasualWorkEntryUncheckedCreateWithoutSupervisorInput> | CasualWorkEntryCreateWithoutSupervisorInput[] | CasualWorkEntryUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: CasualWorkEntryCreateOrConnectWithoutSupervisorInput | CasualWorkEntryCreateOrConnectWithoutSupervisorInput[]
    upsert?: CasualWorkEntryUpsertWithWhereUniqueWithoutSupervisorInput | CasualWorkEntryUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: CasualWorkEntryCreateManySupervisorInputEnvelope
    set?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
    disconnect?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
    delete?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
    connect?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
    update?: CasualWorkEntryUpdateWithWhereUniqueWithoutSupervisorInput | CasualWorkEntryUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: CasualWorkEntryUpdateManyWithWhereWithoutSupervisorInput | CasualWorkEntryUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: CasualWorkEntryScalarWhereInput | CasualWorkEntryScalarWhereInput[]
  }

  export type CasualWorkEntryUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<CasualWorkEntryCreateWithoutAdminInput, CasualWorkEntryUncheckedCreateWithoutAdminInput> | CasualWorkEntryCreateWithoutAdminInput[] | CasualWorkEntryUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: CasualWorkEntryCreateOrConnectWithoutAdminInput | CasualWorkEntryCreateOrConnectWithoutAdminInput[]
    upsert?: CasualWorkEntryUpsertWithWhereUniqueWithoutAdminInput | CasualWorkEntryUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: CasualWorkEntryCreateManyAdminInputEnvelope
    set?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
    disconnect?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
    delete?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
    connect?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
    update?: CasualWorkEntryUpdateWithWhereUniqueWithoutAdminInput | CasualWorkEntryUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: CasualWorkEntryUpdateManyWithWhereWithoutAdminInput | CasualWorkEntryUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: CasualWorkEntryScalarWhereInput | CasualWorkEntryScalarWhereInput[]
  }

  export type DailyCasualRequestUncheckedUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<DailyCasualRequestCreateWithoutSupervisorInput, DailyCasualRequestUncheckedCreateWithoutSupervisorInput> | DailyCasualRequestCreateWithoutSupervisorInput[] | DailyCasualRequestUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: DailyCasualRequestCreateOrConnectWithoutSupervisorInput | DailyCasualRequestCreateOrConnectWithoutSupervisorInput[]
    upsert?: DailyCasualRequestUpsertWithWhereUniqueWithoutSupervisorInput | DailyCasualRequestUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: DailyCasualRequestCreateManySupervisorInputEnvelope
    set?: DailyCasualRequestWhereUniqueInput | DailyCasualRequestWhereUniqueInput[]
    disconnect?: DailyCasualRequestWhereUniqueInput | DailyCasualRequestWhereUniqueInput[]
    delete?: DailyCasualRequestWhereUniqueInput | DailyCasualRequestWhereUniqueInput[]
    connect?: DailyCasualRequestWhereUniqueInput | DailyCasualRequestWhereUniqueInput[]
    update?: DailyCasualRequestUpdateWithWhereUniqueWithoutSupervisorInput | DailyCasualRequestUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: DailyCasualRequestUpdateManyWithWhereWithoutSupervisorInput | DailyCasualRequestUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: DailyCasualRequestScalarWhereInput | DailyCasualRequestScalarWhereInput[]
  }

  export type DailyCasualRequestUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<DailyCasualRequestCreateWithoutAdminInput, DailyCasualRequestUncheckedCreateWithoutAdminInput> | DailyCasualRequestCreateWithoutAdminInput[] | DailyCasualRequestUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: DailyCasualRequestCreateOrConnectWithoutAdminInput | DailyCasualRequestCreateOrConnectWithoutAdminInput[]
    upsert?: DailyCasualRequestUpsertWithWhereUniqueWithoutAdminInput | DailyCasualRequestUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: DailyCasualRequestCreateManyAdminInputEnvelope
    set?: DailyCasualRequestWhereUniqueInput | DailyCasualRequestWhereUniqueInput[]
    disconnect?: DailyCasualRequestWhereUniqueInput | DailyCasualRequestWhereUniqueInput[]
    delete?: DailyCasualRequestWhereUniqueInput | DailyCasualRequestWhereUniqueInput[]
    connect?: DailyCasualRequestWhereUniqueInput | DailyCasualRequestWhereUniqueInput[]
    update?: DailyCasualRequestUpdateWithWhereUniqueWithoutAdminInput | DailyCasualRequestUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: DailyCasualRequestUpdateManyWithWhereWithoutAdminInput | DailyCasualRequestUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: DailyCasualRequestScalarWhereInput | DailyCasualRequestScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type CasualWorkEntryCreateNestedManyWithoutCasualInput = {
    create?: XOR<CasualWorkEntryCreateWithoutCasualInput, CasualWorkEntryUncheckedCreateWithoutCasualInput> | CasualWorkEntryCreateWithoutCasualInput[] | CasualWorkEntryUncheckedCreateWithoutCasualInput[]
    connectOrCreate?: CasualWorkEntryCreateOrConnectWithoutCasualInput | CasualWorkEntryCreateOrConnectWithoutCasualInput[]
    createMany?: CasualWorkEntryCreateManyCasualInputEnvelope
    connect?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
  }

  export type CasualWorkEntryUncheckedCreateNestedManyWithoutCasualInput = {
    create?: XOR<CasualWorkEntryCreateWithoutCasualInput, CasualWorkEntryUncheckedCreateWithoutCasualInput> | CasualWorkEntryCreateWithoutCasualInput[] | CasualWorkEntryUncheckedCreateWithoutCasualInput[]
    connectOrCreate?: CasualWorkEntryCreateOrConnectWithoutCasualInput | CasualWorkEntryCreateOrConnectWithoutCasualInput[]
    createMany?: CasualWorkEntryCreateManyCasualInputEnvelope
    connect?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
  }

  export type CasualWorkEntryUpdateManyWithoutCasualNestedInput = {
    create?: XOR<CasualWorkEntryCreateWithoutCasualInput, CasualWorkEntryUncheckedCreateWithoutCasualInput> | CasualWorkEntryCreateWithoutCasualInput[] | CasualWorkEntryUncheckedCreateWithoutCasualInput[]
    connectOrCreate?: CasualWorkEntryCreateOrConnectWithoutCasualInput | CasualWorkEntryCreateOrConnectWithoutCasualInput[]
    upsert?: CasualWorkEntryUpsertWithWhereUniqueWithoutCasualInput | CasualWorkEntryUpsertWithWhereUniqueWithoutCasualInput[]
    createMany?: CasualWorkEntryCreateManyCasualInputEnvelope
    set?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
    disconnect?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
    delete?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
    connect?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
    update?: CasualWorkEntryUpdateWithWhereUniqueWithoutCasualInput | CasualWorkEntryUpdateWithWhereUniqueWithoutCasualInput[]
    updateMany?: CasualWorkEntryUpdateManyWithWhereWithoutCasualInput | CasualWorkEntryUpdateManyWithWhereWithoutCasualInput[]
    deleteMany?: CasualWorkEntryScalarWhereInput | CasualWorkEntryScalarWhereInput[]
  }

  export type CasualWorkEntryUncheckedUpdateManyWithoutCasualNestedInput = {
    create?: XOR<CasualWorkEntryCreateWithoutCasualInput, CasualWorkEntryUncheckedCreateWithoutCasualInput> | CasualWorkEntryCreateWithoutCasualInput[] | CasualWorkEntryUncheckedCreateWithoutCasualInput[]
    connectOrCreate?: CasualWorkEntryCreateOrConnectWithoutCasualInput | CasualWorkEntryCreateOrConnectWithoutCasualInput[]
    upsert?: CasualWorkEntryUpsertWithWhereUniqueWithoutCasualInput | CasualWorkEntryUpsertWithWhereUniqueWithoutCasualInput[]
    createMany?: CasualWorkEntryCreateManyCasualInputEnvelope
    set?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
    disconnect?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
    delete?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
    connect?: CasualWorkEntryWhereUniqueInput | CasualWorkEntryWhereUniqueInput[]
    update?: CasualWorkEntryUpdateWithWhereUniqueWithoutCasualInput | CasualWorkEntryUpdateWithWhereUniqueWithoutCasualInput[]
    updateMany?: CasualWorkEntryUpdateManyWithWhereWithoutCasualInput | CasualWorkEntryUpdateManyWithWhereWithoutCasualInput[]
    deleteMany?: CasualWorkEntryScalarWhereInput | CasualWorkEntryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDailyCasualRequestsInput = {
    create?: XOR<UserCreateWithoutDailyCasualRequestsInput, UserUncheckedCreateWithoutDailyCasualRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyCasualRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApprovedDailyCasualRequestsInput = {
    create?: XOR<UserCreateWithoutApprovedDailyCasualRequestsInput, UserUncheckedCreateWithoutApprovedDailyCasualRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovedDailyCasualRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumDailyRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.DailyRequestStatus
  }

  export type UserUpdateOneRequiredWithoutDailyCasualRequestsNestedInput = {
    create?: XOR<UserCreateWithoutDailyCasualRequestsInput, UserUncheckedCreateWithoutDailyCasualRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyCasualRequestsInput
    upsert?: UserUpsertWithoutDailyCasualRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDailyCasualRequestsInput, UserUpdateWithoutDailyCasualRequestsInput>, UserUncheckedUpdateWithoutDailyCasualRequestsInput>
  }

  export type UserUpdateOneWithoutApprovedDailyCasualRequestsNestedInput = {
    create?: XOR<UserCreateWithoutApprovedDailyCasualRequestsInput, UserUncheckedCreateWithoutApprovedDailyCasualRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovedDailyCasualRequestsInput
    upsert?: UserUpsertWithoutApprovedDailyCasualRequestsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApprovedDailyCasualRequestsInput, UserUpdateWithoutApprovedDailyCasualRequestsInput>, UserUncheckedUpdateWithoutApprovedDailyCasualRequestsInput>
  }

  export type CasualCreateNestedOneWithoutWorkEntriesInput = {
    create?: XOR<CasualCreateWithoutWorkEntriesInput, CasualUncheckedCreateWithoutWorkEntriesInput>
    connectOrCreate?: CasualCreateOrConnectWithoutWorkEntriesInput
    connect?: CasualWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCasualWorkEntriesInput = {
    create?: XOR<UserCreateWithoutCasualWorkEntriesInput, UserUncheckedCreateWithoutCasualWorkEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCasualWorkEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApprovedCasualWorkEntriesInput = {
    create?: XOR<UserCreateWithoutApprovedCasualWorkEntriesInput, UserUncheckedCreateWithoutApprovedCasualWorkEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovedCasualWorkEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type CasualUpdateOneRequiredWithoutWorkEntriesNestedInput = {
    create?: XOR<CasualCreateWithoutWorkEntriesInput, CasualUncheckedCreateWithoutWorkEntriesInput>
    connectOrCreate?: CasualCreateOrConnectWithoutWorkEntriesInput
    upsert?: CasualUpsertWithoutWorkEntriesInput
    connect?: CasualWhereUniqueInput
    update?: XOR<XOR<CasualUpdateToOneWithWhereWithoutWorkEntriesInput, CasualUpdateWithoutWorkEntriesInput>, CasualUncheckedUpdateWithoutWorkEntriesInput>
  }

  export type UserUpdateOneRequiredWithoutCasualWorkEntriesNestedInput = {
    create?: XOR<UserCreateWithoutCasualWorkEntriesInput, UserUncheckedCreateWithoutCasualWorkEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCasualWorkEntriesInput
    upsert?: UserUpsertWithoutCasualWorkEntriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCasualWorkEntriesInput, UserUpdateWithoutCasualWorkEntriesInput>, UserUncheckedUpdateWithoutCasualWorkEntriesInput>
  }

  export type UserUpdateOneWithoutApprovedCasualWorkEntriesNestedInput = {
    create?: XOR<UserCreateWithoutApprovedCasualWorkEntriesInput, UserUncheckedCreateWithoutApprovedCasualWorkEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovedCasualWorkEntriesInput
    upsert?: UserUpsertWithoutApprovedCasualWorkEntriesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApprovedCasualWorkEntriesInput, UserUpdateWithoutApprovedCasualWorkEntriesInput>, UserUncheckedUpdateWithoutApprovedCasualWorkEntriesInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumDailyRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DailyRequestStatus | EnumDailyRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DailyRequestStatus[] | ListEnumDailyRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DailyRequestStatus[] | ListEnumDailyRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDailyRequestStatusFilter<$PrismaModel> | $Enums.DailyRequestStatus
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumDailyRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DailyRequestStatus | EnumDailyRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DailyRequestStatus[] | ListEnumDailyRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DailyRequestStatus[] | ListEnumDailyRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDailyRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.DailyRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDailyRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumDailyRequestStatusFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CasualWorkEntryCreateWithoutSupervisorInput = {
    id?: string
    activityDone: string
    unit: number
    costPerUnit: number
    date: Date | string
    farmName: string
    period: string
    month: string
    crop: string
    cropStage?: string | null
    adjustment?: number
    amount: number
    amountInclMomoCharges: number
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    casual: CasualCreateNestedOneWithoutWorkEntriesInput
    admin?: UserCreateNestedOneWithoutApprovedCasualWorkEntriesInput
  }

  export type CasualWorkEntryUncheckedCreateWithoutSupervisorInput = {
    id?: string
    activityDone: string
    unit: number
    costPerUnit: number
    date: Date | string
    farmName: string
    period: string
    month: string
    crop: string
    cropStage?: string | null
    adjustment?: number
    amount: number
    amountInclMomoCharges: number
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    casualId: string
    adminId?: string | null
  }

  export type CasualWorkEntryCreateOrConnectWithoutSupervisorInput = {
    where: CasualWorkEntryWhereUniqueInput
    create: XOR<CasualWorkEntryCreateWithoutSupervisorInput, CasualWorkEntryUncheckedCreateWithoutSupervisorInput>
  }

  export type CasualWorkEntryCreateManySupervisorInputEnvelope = {
    data: CasualWorkEntryCreateManySupervisorInput | CasualWorkEntryCreateManySupervisorInput[]
    skipDuplicates?: boolean
  }

  export type CasualWorkEntryCreateWithoutAdminInput = {
    id?: string
    activityDone: string
    unit: number
    costPerUnit: number
    date: Date | string
    farmName: string
    period: string
    month: string
    crop: string
    cropStage?: string | null
    adjustment?: number
    amount: number
    amountInclMomoCharges: number
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    casual: CasualCreateNestedOneWithoutWorkEntriesInput
    supervisor: UserCreateNestedOneWithoutCasualWorkEntriesInput
  }

  export type CasualWorkEntryUncheckedCreateWithoutAdminInput = {
    id?: string
    activityDone: string
    unit: number
    costPerUnit: number
    date: Date | string
    farmName: string
    period: string
    month: string
    crop: string
    cropStage?: string | null
    adjustment?: number
    amount: number
    amountInclMomoCharges: number
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    casualId: string
    supervisorId: string
  }

  export type CasualWorkEntryCreateOrConnectWithoutAdminInput = {
    where: CasualWorkEntryWhereUniqueInput
    create: XOR<CasualWorkEntryCreateWithoutAdminInput, CasualWorkEntryUncheckedCreateWithoutAdminInput>
  }

  export type CasualWorkEntryCreateManyAdminInputEnvelope = {
    data: CasualWorkEntryCreateManyAdminInput | CasualWorkEntryCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type DailyCasualRequestCreateWithoutSupervisorInput = {
    id?: string
    casualsRequired: number
    crop: string
    cropStage: string
    date: Date | string
    week: string
    activity: string
    farmName: string
    adjustment?: number
    units?: number
    costPerUnit: number
    total: number
    status?: $Enums.DailyRequestStatus
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: UserCreateNestedOneWithoutApprovedDailyCasualRequestsInput
  }

  export type DailyCasualRequestUncheckedCreateWithoutSupervisorInput = {
    id?: string
    casualsRequired: number
    crop: string
    cropStage: string
    date: Date | string
    week: string
    activity: string
    farmName: string
    adjustment?: number
    units?: number
    costPerUnit: number
    total: number
    status?: $Enums.DailyRequestStatus
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId?: string | null
  }

  export type DailyCasualRequestCreateOrConnectWithoutSupervisorInput = {
    where: DailyCasualRequestWhereUniqueInput
    create: XOR<DailyCasualRequestCreateWithoutSupervisorInput, DailyCasualRequestUncheckedCreateWithoutSupervisorInput>
  }

  export type DailyCasualRequestCreateManySupervisorInputEnvelope = {
    data: DailyCasualRequestCreateManySupervisorInput | DailyCasualRequestCreateManySupervisorInput[]
    skipDuplicates?: boolean
  }

  export type DailyCasualRequestCreateWithoutAdminInput = {
    id?: string
    casualsRequired: number
    crop: string
    cropStage: string
    date: Date | string
    week: string
    activity: string
    farmName: string
    adjustment?: number
    units?: number
    costPerUnit: number
    total: number
    status?: $Enums.DailyRequestStatus
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supervisor: UserCreateNestedOneWithoutDailyCasualRequestsInput
  }

  export type DailyCasualRequestUncheckedCreateWithoutAdminInput = {
    id?: string
    casualsRequired: number
    crop: string
    cropStage: string
    date: Date | string
    week: string
    activity: string
    farmName: string
    adjustment?: number
    units?: number
    costPerUnit: number
    total: number
    status?: $Enums.DailyRequestStatus
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supervisorId: string
  }

  export type DailyCasualRequestCreateOrConnectWithoutAdminInput = {
    where: DailyCasualRequestWhereUniqueInput
    create: XOR<DailyCasualRequestCreateWithoutAdminInput, DailyCasualRequestUncheckedCreateWithoutAdminInput>
  }

  export type DailyCasualRequestCreateManyAdminInputEnvelope = {
    data: DailyCasualRequestCreateManyAdminInput | DailyCasualRequestCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    link?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    link?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type CasualWorkEntryUpsertWithWhereUniqueWithoutSupervisorInput = {
    where: CasualWorkEntryWhereUniqueInput
    update: XOR<CasualWorkEntryUpdateWithoutSupervisorInput, CasualWorkEntryUncheckedUpdateWithoutSupervisorInput>
    create: XOR<CasualWorkEntryCreateWithoutSupervisorInput, CasualWorkEntryUncheckedCreateWithoutSupervisorInput>
  }

  export type CasualWorkEntryUpdateWithWhereUniqueWithoutSupervisorInput = {
    where: CasualWorkEntryWhereUniqueInput
    data: XOR<CasualWorkEntryUpdateWithoutSupervisorInput, CasualWorkEntryUncheckedUpdateWithoutSupervisorInput>
  }

  export type CasualWorkEntryUpdateManyWithWhereWithoutSupervisorInput = {
    where: CasualWorkEntryScalarWhereInput
    data: XOR<CasualWorkEntryUpdateManyMutationInput, CasualWorkEntryUncheckedUpdateManyWithoutSupervisorInput>
  }

  export type CasualWorkEntryScalarWhereInput = {
    AND?: CasualWorkEntryScalarWhereInput | CasualWorkEntryScalarWhereInput[]
    OR?: CasualWorkEntryScalarWhereInput[]
    NOT?: CasualWorkEntryScalarWhereInput | CasualWorkEntryScalarWhereInput[]
    id?: StringFilter<"CasualWorkEntry"> | string
    activityDone?: StringFilter<"CasualWorkEntry"> | string
    unit?: IntFilter<"CasualWorkEntry"> | number
    costPerUnit?: FloatFilter<"CasualWorkEntry"> | number
    date?: DateTimeFilter<"CasualWorkEntry"> | Date | string
    farmName?: StringFilter<"CasualWorkEntry"> | string
    period?: StringFilter<"CasualWorkEntry"> | string
    month?: StringFilter<"CasualWorkEntry"> | string
    crop?: StringFilter<"CasualWorkEntry"> | string
    cropStage?: StringNullableFilter<"CasualWorkEntry"> | string | null
    adjustment?: FloatFilter<"CasualWorkEntry"> | number
    amount?: FloatFilter<"CasualWorkEntry"> | number
    amountInclMomoCharges?: FloatFilter<"CasualWorkEntry"> | number
    signature?: StringNullableFilter<"CasualWorkEntry"> | string | null
    createdAt?: DateTimeFilter<"CasualWorkEntry"> | Date | string
    updatedAt?: DateTimeFilter<"CasualWorkEntry"> | Date | string
    casualId?: StringFilter<"CasualWorkEntry"> | string
    supervisorId?: StringFilter<"CasualWorkEntry"> | string
    adminId?: StringNullableFilter<"CasualWorkEntry"> | string | null
  }

  export type CasualWorkEntryUpsertWithWhereUniqueWithoutAdminInput = {
    where: CasualWorkEntryWhereUniqueInput
    update: XOR<CasualWorkEntryUpdateWithoutAdminInput, CasualWorkEntryUncheckedUpdateWithoutAdminInput>
    create: XOR<CasualWorkEntryCreateWithoutAdminInput, CasualWorkEntryUncheckedCreateWithoutAdminInput>
  }

  export type CasualWorkEntryUpdateWithWhereUniqueWithoutAdminInput = {
    where: CasualWorkEntryWhereUniqueInput
    data: XOR<CasualWorkEntryUpdateWithoutAdminInput, CasualWorkEntryUncheckedUpdateWithoutAdminInput>
  }

  export type CasualWorkEntryUpdateManyWithWhereWithoutAdminInput = {
    where: CasualWorkEntryScalarWhereInput
    data: XOR<CasualWorkEntryUpdateManyMutationInput, CasualWorkEntryUncheckedUpdateManyWithoutAdminInput>
  }

  export type DailyCasualRequestUpsertWithWhereUniqueWithoutSupervisorInput = {
    where: DailyCasualRequestWhereUniqueInput
    update: XOR<DailyCasualRequestUpdateWithoutSupervisorInput, DailyCasualRequestUncheckedUpdateWithoutSupervisorInput>
    create: XOR<DailyCasualRequestCreateWithoutSupervisorInput, DailyCasualRequestUncheckedCreateWithoutSupervisorInput>
  }

  export type DailyCasualRequestUpdateWithWhereUniqueWithoutSupervisorInput = {
    where: DailyCasualRequestWhereUniqueInput
    data: XOR<DailyCasualRequestUpdateWithoutSupervisorInput, DailyCasualRequestUncheckedUpdateWithoutSupervisorInput>
  }

  export type DailyCasualRequestUpdateManyWithWhereWithoutSupervisorInput = {
    where: DailyCasualRequestScalarWhereInput
    data: XOR<DailyCasualRequestUpdateManyMutationInput, DailyCasualRequestUncheckedUpdateManyWithoutSupervisorInput>
  }

  export type DailyCasualRequestScalarWhereInput = {
    AND?: DailyCasualRequestScalarWhereInput | DailyCasualRequestScalarWhereInput[]
    OR?: DailyCasualRequestScalarWhereInput[]
    NOT?: DailyCasualRequestScalarWhereInput | DailyCasualRequestScalarWhereInput[]
    id?: StringFilter<"DailyCasualRequest"> | string
    casualsRequired?: IntFilter<"DailyCasualRequest"> | number
    crop?: StringFilter<"DailyCasualRequest"> | string
    cropStage?: StringFilter<"DailyCasualRequest"> | string
    date?: DateTimeFilter<"DailyCasualRequest"> | Date | string
    week?: StringFilter<"DailyCasualRequest"> | string
    activity?: StringFilter<"DailyCasualRequest"> | string
    farmName?: StringFilter<"DailyCasualRequest"> | string
    adjustment?: FloatFilter<"DailyCasualRequest"> | number
    units?: IntFilter<"DailyCasualRequest"> | number
    costPerUnit?: FloatFilter<"DailyCasualRequest"> | number
    total?: FloatFilter<"DailyCasualRequest"> | number
    status?: EnumDailyRequestStatusFilter<"DailyCasualRequest"> | $Enums.DailyRequestStatus
    rejectionReason?: StringNullableFilter<"DailyCasualRequest"> | string | null
    createdAt?: DateTimeFilter<"DailyCasualRequest"> | Date | string
    updatedAt?: DateTimeFilter<"DailyCasualRequest"> | Date | string
    supervisorId?: StringFilter<"DailyCasualRequest"> | string
    adminId?: StringNullableFilter<"DailyCasualRequest"> | string | null
  }

  export type DailyCasualRequestUpsertWithWhereUniqueWithoutAdminInput = {
    where: DailyCasualRequestWhereUniqueInput
    update: XOR<DailyCasualRequestUpdateWithoutAdminInput, DailyCasualRequestUncheckedUpdateWithoutAdminInput>
    create: XOR<DailyCasualRequestCreateWithoutAdminInput, DailyCasualRequestUncheckedCreateWithoutAdminInput>
  }

  export type DailyCasualRequestUpdateWithWhereUniqueWithoutAdminInput = {
    where: DailyCasualRequestWhereUniqueInput
    data: XOR<DailyCasualRequestUpdateWithoutAdminInput, DailyCasualRequestUncheckedUpdateWithoutAdminInput>
  }

  export type DailyCasualRequestUpdateManyWithWhereWithoutAdminInput = {
    where: DailyCasualRequestScalarWhereInput
    data: XOR<DailyCasualRequestUpdateManyMutationInput, DailyCasualRequestUncheckedUpdateManyWithoutAdminInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    link?: StringNullableFilter<"Notification"> | string | null
    metadata?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type CasualWorkEntryCreateWithoutCasualInput = {
    id?: string
    activityDone: string
    unit: number
    costPerUnit: number
    date: Date | string
    farmName: string
    period: string
    month: string
    crop: string
    cropStage?: string | null
    adjustment?: number
    amount: number
    amountInclMomoCharges: number
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supervisor: UserCreateNestedOneWithoutCasualWorkEntriesInput
    admin?: UserCreateNestedOneWithoutApprovedCasualWorkEntriesInput
  }

  export type CasualWorkEntryUncheckedCreateWithoutCasualInput = {
    id?: string
    activityDone: string
    unit: number
    costPerUnit: number
    date: Date | string
    farmName: string
    period: string
    month: string
    crop: string
    cropStage?: string | null
    adjustment?: number
    amount: number
    amountInclMomoCharges: number
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supervisorId: string
    adminId?: string | null
  }

  export type CasualWorkEntryCreateOrConnectWithoutCasualInput = {
    where: CasualWorkEntryWhereUniqueInput
    create: XOR<CasualWorkEntryCreateWithoutCasualInput, CasualWorkEntryUncheckedCreateWithoutCasualInput>
  }

  export type CasualWorkEntryCreateManyCasualInputEnvelope = {
    data: CasualWorkEntryCreateManyCasualInput | CasualWorkEntryCreateManyCasualInput[]
    skipDuplicates?: boolean
  }

  export type CasualWorkEntryUpsertWithWhereUniqueWithoutCasualInput = {
    where: CasualWorkEntryWhereUniqueInput
    update: XOR<CasualWorkEntryUpdateWithoutCasualInput, CasualWorkEntryUncheckedUpdateWithoutCasualInput>
    create: XOR<CasualWorkEntryCreateWithoutCasualInput, CasualWorkEntryUncheckedCreateWithoutCasualInput>
  }

  export type CasualWorkEntryUpdateWithWhereUniqueWithoutCasualInput = {
    where: CasualWorkEntryWhereUniqueInput
    data: XOR<CasualWorkEntryUpdateWithoutCasualInput, CasualWorkEntryUncheckedUpdateWithoutCasualInput>
  }

  export type CasualWorkEntryUpdateManyWithWhereWithoutCasualInput = {
    where: CasualWorkEntryScalarWhereInput
    data: XOR<CasualWorkEntryUpdateManyMutationInput, CasualWorkEntryUncheckedUpdateManyWithoutCasualInput>
  }

  export type UserCreateWithoutDailyCasualRequestsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isActive?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    casualWorkEntries?: CasualWorkEntryCreateNestedManyWithoutSupervisorInput
    approvedCasualWorkEntries?: CasualWorkEntryCreateNestedManyWithoutAdminInput
    approvedDailyCasualRequests?: DailyCasualRequestCreateNestedManyWithoutAdminInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDailyCasualRequestsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isActive?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    casualWorkEntries?: CasualWorkEntryUncheckedCreateNestedManyWithoutSupervisorInput
    approvedCasualWorkEntries?: CasualWorkEntryUncheckedCreateNestedManyWithoutAdminInput
    approvedDailyCasualRequests?: DailyCasualRequestUncheckedCreateNestedManyWithoutAdminInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDailyCasualRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDailyCasualRequestsInput, UserUncheckedCreateWithoutDailyCasualRequestsInput>
  }

  export type UserCreateWithoutApprovedDailyCasualRequestsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isActive?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    casualWorkEntries?: CasualWorkEntryCreateNestedManyWithoutSupervisorInput
    approvedCasualWorkEntries?: CasualWorkEntryCreateNestedManyWithoutAdminInput
    dailyCasualRequests?: DailyCasualRequestCreateNestedManyWithoutSupervisorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApprovedDailyCasualRequestsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isActive?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    casualWorkEntries?: CasualWorkEntryUncheckedCreateNestedManyWithoutSupervisorInput
    approvedCasualWorkEntries?: CasualWorkEntryUncheckedCreateNestedManyWithoutAdminInput
    dailyCasualRequests?: DailyCasualRequestUncheckedCreateNestedManyWithoutSupervisorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApprovedDailyCasualRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApprovedDailyCasualRequestsInput, UserUncheckedCreateWithoutApprovedDailyCasualRequestsInput>
  }

  export type UserUpsertWithoutDailyCasualRequestsInput = {
    update: XOR<UserUpdateWithoutDailyCasualRequestsInput, UserUncheckedUpdateWithoutDailyCasualRequestsInput>
    create: XOR<UserCreateWithoutDailyCasualRequestsInput, UserUncheckedCreateWithoutDailyCasualRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDailyCasualRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDailyCasualRequestsInput, UserUncheckedUpdateWithoutDailyCasualRequestsInput>
  }

  export type UserUpdateWithoutDailyCasualRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    casualWorkEntries?: CasualWorkEntryUpdateManyWithoutSupervisorNestedInput
    approvedCasualWorkEntries?: CasualWorkEntryUpdateManyWithoutAdminNestedInput
    approvedDailyCasualRequests?: DailyCasualRequestUpdateManyWithoutAdminNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDailyCasualRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    casualWorkEntries?: CasualWorkEntryUncheckedUpdateManyWithoutSupervisorNestedInput
    approvedCasualWorkEntries?: CasualWorkEntryUncheckedUpdateManyWithoutAdminNestedInput
    approvedDailyCasualRequests?: DailyCasualRequestUncheckedUpdateManyWithoutAdminNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutApprovedDailyCasualRequestsInput = {
    update: XOR<UserUpdateWithoutApprovedDailyCasualRequestsInput, UserUncheckedUpdateWithoutApprovedDailyCasualRequestsInput>
    create: XOR<UserCreateWithoutApprovedDailyCasualRequestsInput, UserUncheckedCreateWithoutApprovedDailyCasualRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApprovedDailyCasualRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApprovedDailyCasualRequestsInput, UserUncheckedUpdateWithoutApprovedDailyCasualRequestsInput>
  }

  export type UserUpdateWithoutApprovedDailyCasualRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    casualWorkEntries?: CasualWorkEntryUpdateManyWithoutSupervisorNestedInput
    approvedCasualWorkEntries?: CasualWorkEntryUpdateManyWithoutAdminNestedInput
    dailyCasualRequests?: DailyCasualRequestUpdateManyWithoutSupervisorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApprovedDailyCasualRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    casualWorkEntries?: CasualWorkEntryUncheckedUpdateManyWithoutSupervisorNestedInput
    approvedCasualWorkEntries?: CasualWorkEntryUncheckedUpdateManyWithoutAdminNestedInput
    dailyCasualRequests?: DailyCasualRequestUncheckedUpdateManyWithoutSupervisorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CasualCreateWithoutWorkEntriesInput = {
    id?: string
    name: string
    nationalId: string
    phoneNumber: string
    farmName?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CasualUncheckedCreateWithoutWorkEntriesInput = {
    id?: string
    name: string
    nationalId: string
    phoneNumber: string
    farmName?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CasualCreateOrConnectWithoutWorkEntriesInput = {
    where: CasualWhereUniqueInput
    create: XOR<CasualCreateWithoutWorkEntriesInput, CasualUncheckedCreateWithoutWorkEntriesInput>
  }

  export type UserCreateWithoutCasualWorkEntriesInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isActive?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    approvedCasualWorkEntries?: CasualWorkEntryCreateNestedManyWithoutAdminInput
    dailyCasualRequests?: DailyCasualRequestCreateNestedManyWithoutSupervisorInput
    approvedDailyCasualRequests?: DailyCasualRequestCreateNestedManyWithoutAdminInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCasualWorkEntriesInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isActive?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    approvedCasualWorkEntries?: CasualWorkEntryUncheckedCreateNestedManyWithoutAdminInput
    dailyCasualRequests?: DailyCasualRequestUncheckedCreateNestedManyWithoutSupervisorInput
    approvedDailyCasualRequests?: DailyCasualRequestUncheckedCreateNestedManyWithoutAdminInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCasualWorkEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCasualWorkEntriesInput, UserUncheckedCreateWithoutCasualWorkEntriesInput>
  }

  export type UserCreateWithoutApprovedCasualWorkEntriesInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isActive?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    casualWorkEntries?: CasualWorkEntryCreateNestedManyWithoutSupervisorInput
    dailyCasualRequests?: DailyCasualRequestCreateNestedManyWithoutSupervisorInput
    approvedDailyCasualRequests?: DailyCasualRequestCreateNestedManyWithoutAdminInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApprovedCasualWorkEntriesInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isActive?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    casualWorkEntries?: CasualWorkEntryUncheckedCreateNestedManyWithoutSupervisorInput
    dailyCasualRequests?: DailyCasualRequestUncheckedCreateNestedManyWithoutSupervisorInput
    approvedDailyCasualRequests?: DailyCasualRequestUncheckedCreateNestedManyWithoutAdminInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApprovedCasualWorkEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApprovedCasualWorkEntriesInput, UserUncheckedCreateWithoutApprovedCasualWorkEntriesInput>
  }

  export type CasualUpsertWithoutWorkEntriesInput = {
    update: XOR<CasualUpdateWithoutWorkEntriesInput, CasualUncheckedUpdateWithoutWorkEntriesInput>
    create: XOR<CasualCreateWithoutWorkEntriesInput, CasualUncheckedCreateWithoutWorkEntriesInput>
    where?: CasualWhereInput
  }

  export type CasualUpdateToOneWithWhereWithoutWorkEntriesInput = {
    where?: CasualWhereInput
    data: XOR<CasualUpdateWithoutWorkEntriesInput, CasualUncheckedUpdateWithoutWorkEntriesInput>
  }

  export type CasualUpdateWithoutWorkEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasualUncheckedUpdateWithoutWorkEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutCasualWorkEntriesInput = {
    update: XOR<UserUpdateWithoutCasualWorkEntriesInput, UserUncheckedUpdateWithoutCasualWorkEntriesInput>
    create: XOR<UserCreateWithoutCasualWorkEntriesInput, UserUncheckedCreateWithoutCasualWorkEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCasualWorkEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCasualWorkEntriesInput, UserUncheckedUpdateWithoutCasualWorkEntriesInput>
  }

  export type UserUpdateWithoutCasualWorkEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    approvedCasualWorkEntries?: CasualWorkEntryUpdateManyWithoutAdminNestedInput
    dailyCasualRequests?: DailyCasualRequestUpdateManyWithoutSupervisorNestedInput
    approvedDailyCasualRequests?: DailyCasualRequestUpdateManyWithoutAdminNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCasualWorkEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    approvedCasualWorkEntries?: CasualWorkEntryUncheckedUpdateManyWithoutAdminNestedInput
    dailyCasualRequests?: DailyCasualRequestUncheckedUpdateManyWithoutSupervisorNestedInput
    approvedDailyCasualRequests?: DailyCasualRequestUncheckedUpdateManyWithoutAdminNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutApprovedCasualWorkEntriesInput = {
    update: XOR<UserUpdateWithoutApprovedCasualWorkEntriesInput, UserUncheckedUpdateWithoutApprovedCasualWorkEntriesInput>
    create: XOR<UserCreateWithoutApprovedCasualWorkEntriesInput, UserUncheckedCreateWithoutApprovedCasualWorkEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApprovedCasualWorkEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApprovedCasualWorkEntriesInput, UserUncheckedUpdateWithoutApprovedCasualWorkEntriesInput>
  }

  export type UserUpdateWithoutApprovedCasualWorkEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    casualWorkEntries?: CasualWorkEntryUpdateManyWithoutSupervisorNestedInput
    dailyCasualRequests?: DailyCasualRequestUpdateManyWithoutSupervisorNestedInput
    approvedDailyCasualRequests?: DailyCasualRequestUpdateManyWithoutAdminNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApprovedCasualWorkEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    casualWorkEntries?: CasualWorkEntryUncheckedUpdateManyWithoutSupervisorNestedInput
    dailyCasualRequests?: DailyCasualRequestUncheckedUpdateManyWithoutSupervisorNestedInput
    approvedDailyCasualRequests?: DailyCasualRequestUncheckedUpdateManyWithoutAdminNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isActive?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    casualWorkEntries?: CasualWorkEntryCreateNestedManyWithoutSupervisorInput
    approvedCasualWorkEntries?: CasualWorkEntryCreateNestedManyWithoutAdminInput
    dailyCasualRequests?: DailyCasualRequestCreateNestedManyWithoutSupervisorInput
    approvedDailyCasualRequests?: DailyCasualRequestCreateNestedManyWithoutAdminInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isActive?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    casualWorkEntries?: CasualWorkEntryUncheckedCreateNestedManyWithoutSupervisorInput
    approvedCasualWorkEntries?: CasualWorkEntryUncheckedCreateNestedManyWithoutAdminInput
    dailyCasualRequests?: DailyCasualRequestUncheckedCreateNestedManyWithoutSupervisorInput
    approvedDailyCasualRequests?: DailyCasualRequestUncheckedCreateNestedManyWithoutAdminInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casualWorkEntries?: CasualWorkEntryUpdateManyWithoutSupervisorNestedInput
    approvedCasualWorkEntries?: CasualWorkEntryUpdateManyWithoutAdminNestedInput
    dailyCasualRequests?: DailyCasualRequestUpdateManyWithoutSupervisorNestedInput
    approvedDailyCasualRequests?: DailyCasualRequestUpdateManyWithoutAdminNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casualWorkEntries?: CasualWorkEntryUncheckedUpdateManyWithoutSupervisorNestedInput
    approvedCasualWorkEntries?: CasualWorkEntryUncheckedUpdateManyWithoutAdminNestedInput
    dailyCasualRequests?: DailyCasualRequestUncheckedUpdateManyWithoutSupervisorNestedInput
    approvedDailyCasualRequests?: DailyCasualRequestUncheckedUpdateManyWithoutAdminNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isActive?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    casualWorkEntries?: CasualWorkEntryCreateNestedManyWithoutSupervisorInput
    approvedCasualWorkEntries?: CasualWorkEntryCreateNestedManyWithoutAdminInput
    dailyCasualRequests?: DailyCasualRequestCreateNestedManyWithoutSupervisorInput
    approvedDailyCasualRequests?: DailyCasualRequestCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    isActive?: boolean
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    casualWorkEntries?: CasualWorkEntryUncheckedCreateNestedManyWithoutSupervisorInput
    approvedCasualWorkEntries?: CasualWorkEntryUncheckedCreateNestedManyWithoutAdminInput
    dailyCasualRequests?: DailyCasualRequestUncheckedCreateNestedManyWithoutSupervisorInput
    approvedDailyCasualRequests?: DailyCasualRequestUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    casualWorkEntries?: CasualWorkEntryUpdateManyWithoutSupervisorNestedInput
    approvedCasualWorkEntries?: CasualWorkEntryUpdateManyWithoutAdminNestedInput
    dailyCasualRequests?: DailyCasualRequestUpdateManyWithoutSupervisorNestedInput
    approvedDailyCasualRequests?: DailyCasualRequestUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    casualWorkEntries?: CasualWorkEntryUncheckedUpdateManyWithoutSupervisorNestedInput
    approvedCasualWorkEntries?: CasualWorkEntryUncheckedUpdateManyWithoutAdminNestedInput
    dailyCasualRequests?: DailyCasualRequestUncheckedUpdateManyWithoutSupervisorNestedInput
    approvedDailyCasualRequests?: DailyCasualRequestUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type SessionCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type CasualWorkEntryCreateManySupervisorInput = {
    id?: string
    activityDone: string
    unit: number
    costPerUnit: number
    date: Date | string
    farmName: string
    period: string
    month: string
    crop: string
    cropStage?: string | null
    adjustment?: number
    amount: number
    amountInclMomoCharges: number
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    casualId: string
    adminId?: string | null
  }

  export type CasualWorkEntryCreateManyAdminInput = {
    id?: string
    activityDone: string
    unit: number
    costPerUnit: number
    date: Date | string
    farmName: string
    period: string
    month: string
    crop: string
    cropStage?: string | null
    adjustment?: number
    amount: number
    amountInclMomoCharges: number
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    casualId: string
    supervisorId: string
  }

  export type DailyCasualRequestCreateManySupervisorInput = {
    id?: string
    casualsRequired: number
    crop: string
    cropStage: string
    date: Date | string
    week: string
    activity: string
    farmName: string
    adjustment?: number
    units?: number
    costPerUnit: number
    total: number
    status?: $Enums.DailyRequestStatus
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId?: string | null
  }

  export type DailyCasualRequestCreateManyAdminInput = {
    id?: string
    casualsRequired: number
    crop: string
    cropStage: string
    date: Date | string
    week: string
    activity: string
    farmName: string
    adjustment?: number
    units?: number
    costPerUnit: number
    total: number
    status?: $Enums.DailyRequestStatus
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supervisorId: string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    link?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasualWorkEntryUpdateWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityDone?: StringFieldUpdateOperationsInput | string
    unit?: IntFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    farmName?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    crop?: StringFieldUpdateOperationsInput | string
    cropStage?: NullableStringFieldUpdateOperationsInput | string | null
    adjustment?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    amountInclMomoCharges?: FloatFieldUpdateOperationsInput | number
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casual?: CasualUpdateOneRequiredWithoutWorkEntriesNestedInput
    admin?: UserUpdateOneWithoutApprovedCasualWorkEntriesNestedInput
  }

  export type CasualWorkEntryUncheckedUpdateWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityDone?: StringFieldUpdateOperationsInput | string
    unit?: IntFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    farmName?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    crop?: StringFieldUpdateOperationsInput | string
    cropStage?: NullableStringFieldUpdateOperationsInput | string | null
    adjustment?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    amountInclMomoCharges?: FloatFieldUpdateOperationsInput | number
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casualId?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CasualWorkEntryUncheckedUpdateManyWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityDone?: StringFieldUpdateOperationsInput | string
    unit?: IntFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    farmName?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    crop?: StringFieldUpdateOperationsInput | string
    cropStage?: NullableStringFieldUpdateOperationsInput | string | null
    adjustment?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    amountInclMomoCharges?: FloatFieldUpdateOperationsInput | number
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casualId?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CasualWorkEntryUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityDone?: StringFieldUpdateOperationsInput | string
    unit?: IntFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    farmName?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    crop?: StringFieldUpdateOperationsInput | string
    cropStage?: NullableStringFieldUpdateOperationsInput | string | null
    adjustment?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    amountInclMomoCharges?: FloatFieldUpdateOperationsInput | number
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casual?: CasualUpdateOneRequiredWithoutWorkEntriesNestedInput
    supervisor?: UserUpdateOneRequiredWithoutCasualWorkEntriesNestedInput
  }

  export type CasualWorkEntryUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityDone?: StringFieldUpdateOperationsInput | string
    unit?: IntFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    farmName?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    crop?: StringFieldUpdateOperationsInput | string
    cropStage?: NullableStringFieldUpdateOperationsInput | string | null
    adjustment?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    amountInclMomoCharges?: FloatFieldUpdateOperationsInput | number
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casualId?: StringFieldUpdateOperationsInput | string
    supervisorId?: StringFieldUpdateOperationsInput | string
  }

  export type CasualWorkEntryUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityDone?: StringFieldUpdateOperationsInput | string
    unit?: IntFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    farmName?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    crop?: StringFieldUpdateOperationsInput | string
    cropStage?: NullableStringFieldUpdateOperationsInput | string | null
    adjustment?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    amountInclMomoCharges?: FloatFieldUpdateOperationsInput | number
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casualId?: StringFieldUpdateOperationsInput | string
    supervisorId?: StringFieldUpdateOperationsInput | string
  }

  export type DailyCasualRequestUpdateWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    casualsRequired?: IntFieldUpdateOperationsInput | number
    crop?: StringFieldUpdateOperationsInput | string
    cropStage?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    week?: StringFieldUpdateOperationsInput | string
    activity?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    adjustment?: FloatFieldUpdateOperationsInput | number
    units?: IntFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumDailyRequestStatusFieldUpdateOperationsInput | $Enums.DailyRequestStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneWithoutApprovedDailyCasualRequestsNestedInput
  }

  export type DailyCasualRequestUncheckedUpdateWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    casualsRequired?: IntFieldUpdateOperationsInput | number
    crop?: StringFieldUpdateOperationsInput | string
    cropStage?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    week?: StringFieldUpdateOperationsInput | string
    activity?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    adjustment?: FloatFieldUpdateOperationsInput | number
    units?: IntFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumDailyRequestStatusFieldUpdateOperationsInput | $Enums.DailyRequestStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DailyCasualRequestUncheckedUpdateManyWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    casualsRequired?: IntFieldUpdateOperationsInput | number
    crop?: StringFieldUpdateOperationsInput | string
    cropStage?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    week?: StringFieldUpdateOperationsInput | string
    activity?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    adjustment?: FloatFieldUpdateOperationsInput | number
    units?: IntFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumDailyRequestStatusFieldUpdateOperationsInput | $Enums.DailyRequestStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DailyCasualRequestUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    casualsRequired?: IntFieldUpdateOperationsInput | number
    crop?: StringFieldUpdateOperationsInput | string
    cropStage?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    week?: StringFieldUpdateOperationsInput | string
    activity?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    adjustment?: FloatFieldUpdateOperationsInput | number
    units?: IntFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumDailyRequestStatusFieldUpdateOperationsInput | $Enums.DailyRequestStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supervisor?: UserUpdateOneRequiredWithoutDailyCasualRequestsNestedInput
  }

  export type DailyCasualRequestUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    casualsRequired?: IntFieldUpdateOperationsInput | number
    crop?: StringFieldUpdateOperationsInput | string
    cropStage?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    week?: StringFieldUpdateOperationsInput | string
    activity?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    adjustment?: FloatFieldUpdateOperationsInput | number
    units?: IntFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumDailyRequestStatusFieldUpdateOperationsInput | $Enums.DailyRequestStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supervisorId?: StringFieldUpdateOperationsInput | string
  }

  export type DailyCasualRequestUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    casualsRequired?: IntFieldUpdateOperationsInput | number
    crop?: StringFieldUpdateOperationsInput | string
    cropStage?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    week?: StringFieldUpdateOperationsInput | string
    activity?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    adjustment?: FloatFieldUpdateOperationsInput | number
    units?: IntFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumDailyRequestStatusFieldUpdateOperationsInput | $Enums.DailyRequestStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supervisorId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasualWorkEntryCreateManyCasualInput = {
    id?: string
    activityDone: string
    unit: number
    costPerUnit: number
    date: Date | string
    farmName: string
    period: string
    month: string
    crop: string
    cropStage?: string | null
    adjustment?: number
    amount: number
    amountInclMomoCharges: number
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supervisorId: string
    adminId?: string | null
  }

  export type CasualWorkEntryUpdateWithoutCasualInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityDone?: StringFieldUpdateOperationsInput | string
    unit?: IntFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    farmName?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    crop?: StringFieldUpdateOperationsInput | string
    cropStage?: NullableStringFieldUpdateOperationsInput | string | null
    adjustment?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    amountInclMomoCharges?: FloatFieldUpdateOperationsInput | number
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supervisor?: UserUpdateOneRequiredWithoutCasualWorkEntriesNestedInput
    admin?: UserUpdateOneWithoutApprovedCasualWorkEntriesNestedInput
  }

  export type CasualWorkEntryUncheckedUpdateWithoutCasualInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityDone?: StringFieldUpdateOperationsInput | string
    unit?: IntFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    farmName?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    crop?: StringFieldUpdateOperationsInput | string
    cropStage?: NullableStringFieldUpdateOperationsInput | string | null
    adjustment?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    amountInclMomoCharges?: FloatFieldUpdateOperationsInput | number
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supervisorId?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CasualWorkEntryUncheckedUpdateManyWithoutCasualInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityDone?: StringFieldUpdateOperationsInput | string
    unit?: IntFieldUpdateOperationsInput | number
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    farmName?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    crop?: StringFieldUpdateOperationsInput | string
    cropStage?: NullableStringFieldUpdateOperationsInput | string | null
    adjustment?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    amountInclMomoCharges?: FloatFieldUpdateOperationsInput | number
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supervisorId?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
  }



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