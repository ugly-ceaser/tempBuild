
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library.js';
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
 * Model UserInfo
 * 
 */
export type UserInfo = $Result.DefaultSelection<Prisma.$UserInfoPayload>
/**
 * Model UserKyc
 * 
 */
export type UserKyc = $Result.DefaultSelection<Prisma.$UserKycPayload>
/**
 * Model RealEstate
 * 
 */
export type RealEstate = $Result.DefaultSelection<Prisma.$RealEstatePayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model JobMarket
 * 
 */
export type JobMarket = $Result.DefaultSelection<Prisma.$JobMarketPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model PropertyMarket
 * 
 */
export type PropertyMarket = $Result.DefaultSelection<Prisma.$PropertyMarketPayload>
/**
 * Model Reminder
 * 
 */
export type Reminder = $Result.DefaultSelection<Prisma.$ReminderPayload>
/**
 * Model Search
 * 
 */
export type Search = $Result.DefaultSelection<Prisma.$SearchPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model RealEstateInterest
 * 
 */
export type RealEstateInterest = $Result.DefaultSelection<Prisma.$RealEstateInterestPayload>

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

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
   * `prisma.userInfo`: Exposes CRUD operations for the **UserInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserInfos
    * const userInfos = await prisma.userInfo.findMany()
    * ```
    */
  get userInfo(): Prisma.UserInfoDelegate<ExtArgs>;

  /**
   * `prisma.userKyc`: Exposes CRUD operations for the **UserKyc** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserKycs
    * const userKycs = await prisma.userKyc.findMany()
    * ```
    */
  get userKyc(): Prisma.UserKycDelegate<ExtArgs>;

  /**
   * `prisma.realEstate`: Exposes CRUD operations for the **RealEstate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RealEstates
    * const realEstates = await prisma.realEstate.findMany()
    * ```
    */
  get realEstate(): Prisma.RealEstateDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs>;

  /**
   * `prisma.jobMarket`: Exposes CRUD operations for the **JobMarket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobMarkets
    * const jobMarkets = await prisma.jobMarket.findMany()
    * ```
    */
  get jobMarket(): Prisma.JobMarketDelegate<ExtArgs>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs>;

  /**
   * `prisma.propertyMarket`: Exposes CRUD operations for the **PropertyMarket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyMarkets
    * const propertyMarkets = await prisma.propertyMarket.findMany()
    * ```
    */
  get propertyMarket(): Prisma.PropertyMarketDelegate<ExtArgs>;

  /**
   * `prisma.reminder`: Exposes CRUD operations for the **Reminder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reminders
    * const reminders = await prisma.reminder.findMany()
    * ```
    */
  get reminder(): Prisma.ReminderDelegate<ExtArgs>;

  /**
   * `prisma.search`: Exposes CRUD operations for the **Search** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Searches
    * const searches = await prisma.search.findMany()
    * ```
    */
  get search(): Prisma.SearchDelegate<ExtArgs>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs>;

  /**
   * `prisma.realEstateInterest`: Exposes CRUD operations for the **RealEstateInterest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RealEstateInterests
    * const realEstateInterests = await prisma.realEstateInterest.findMany()
    * ```
    */
  get realEstateInterest(): Prisma.RealEstateInterestDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.21.0
   * Query Engine version: 08713a93b99d58f31485621c634b04983ae01d95
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
    UserInfo: 'UserInfo',
    UserKyc: 'UserKyc',
    RealEstate: 'RealEstate',
    Review: 'Review',
    Report: 'Report',
    ChatMessage: 'ChatMessage',
    Contact: 'Contact',
    JobMarket: 'JobMarket',
    Notification: 'Notification',
    PropertyMarket: 'PropertyMarket',
    Reminder: 'Reminder',
    Search: 'Search',
    Admin: 'Admin',
    Role: 'Role',
    RealEstateInterest: 'RealEstateInterest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "userInfo" | "userKyc" | "realEstate" | "review" | "report" | "chatMessage" | "contact" | "jobMarket" | "notification" | "propertyMarket" | "reminder" | "search" | "admin" | "role" | "realEstateInterest"
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
      UserInfo: {
        payload: Prisma.$UserInfoPayload<ExtArgs>
        fields: Prisma.UserInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          findFirst: {
            args: Prisma.UserInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          findMany: {
            args: Prisma.UserInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>[]
          }
          create: {
            args: Prisma.UserInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          createMany: {
            args: Prisma.UserInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>[]
          }
          delete: {
            args: Prisma.UserInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          update: {
            args: Prisma.UserInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          deleteMany: {
            args: Prisma.UserInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          aggregate: {
            args: Prisma.UserInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserInfo>
          }
          groupBy: {
            args: Prisma.UserInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserInfoCountArgs<ExtArgs>
            result: $Utils.Optional<UserInfoCountAggregateOutputType> | number
          }
        }
      }
      UserKyc: {
        payload: Prisma.$UserKycPayload<ExtArgs>
        fields: Prisma.UserKycFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserKycFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKycPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserKycFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKycPayload>
          }
          findFirst: {
            args: Prisma.UserKycFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKycPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserKycFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKycPayload>
          }
          findMany: {
            args: Prisma.UserKycFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKycPayload>[]
          }
          create: {
            args: Prisma.UserKycCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKycPayload>
          }
          createMany: {
            args: Prisma.UserKycCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserKycCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKycPayload>[]
          }
          delete: {
            args: Prisma.UserKycDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKycPayload>
          }
          update: {
            args: Prisma.UserKycUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKycPayload>
          }
          deleteMany: {
            args: Prisma.UserKycDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserKycUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserKycUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKycPayload>
          }
          aggregate: {
            args: Prisma.UserKycAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserKyc>
          }
          groupBy: {
            args: Prisma.UserKycGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserKycGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserKycCountArgs<ExtArgs>
            result: $Utils.Optional<UserKycCountAggregateOutputType> | number
          }
        }
      }
      RealEstate: {
        payload: Prisma.$RealEstatePayload<ExtArgs>
        fields: Prisma.RealEstateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RealEstateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealEstatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RealEstateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealEstatePayload>
          }
          findFirst: {
            args: Prisma.RealEstateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealEstatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RealEstateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealEstatePayload>
          }
          findMany: {
            args: Prisma.RealEstateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealEstatePayload>[]
          }
          create: {
            args: Prisma.RealEstateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealEstatePayload>
          }
          createMany: {
            args: Prisma.RealEstateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RealEstateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealEstatePayload>[]
          }
          delete: {
            args: Prisma.RealEstateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealEstatePayload>
          }
          update: {
            args: Prisma.RealEstateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealEstatePayload>
          }
          deleteMany: {
            args: Prisma.RealEstateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RealEstateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RealEstateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealEstatePayload>
          }
          aggregate: {
            args: Prisma.RealEstateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRealEstate>
          }
          groupBy: {
            args: Prisma.RealEstateGroupByArgs<ExtArgs>
            result: $Utils.Optional<RealEstateGroupByOutputType>[]
          }
          count: {
            args: Prisma.RealEstateCountArgs<ExtArgs>
            result: $Utils.Optional<RealEstateCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      JobMarket: {
        payload: Prisma.$JobMarketPayload<ExtArgs>
        fields: Prisma.JobMarketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobMarketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMarketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobMarketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMarketPayload>
          }
          findFirst: {
            args: Prisma.JobMarketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMarketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobMarketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMarketPayload>
          }
          findMany: {
            args: Prisma.JobMarketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMarketPayload>[]
          }
          create: {
            args: Prisma.JobMarketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMarketPayload>
          }
          createMany: {
            args: Prisma.JobMarketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobMarketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMarketPayload>[]
          }
          delete: {
            args: Prisma.JobMarketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMarketPayload>
          }
          update: {
            args: Prisma.JobMarketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMarketPayload>
          }
          deleteMany: {
            args: Prisma.JobMarketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobMarketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JobMarketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMarketPayload>
          }
          aggregate: {
            args: Prisma.JobMarketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobMarket>
          }
          groupBy: {
            args: Prisma.JobMarketGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobMarketGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobMarketCountArgs<ExtArgs>
            result: $Utils.Optional<JobMarketCountAggregateOutputType> | number
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
      PropertyMarket: {
        payload: Prisma.$PropertyMarketPayload<ExtArgs>
        fields: Prisma.PropertyMarketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyMarketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMarketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyMarketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMarketPayload>
          }
          findFirst: {
            args: Prisma.PropertyMarketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMarketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyMarketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMarketPayload>
          }
          findMany: {
            args: Prisma.PropertyMarketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMarketPayload>[]
          }
          create: {
            args: Prisma.PropertyMarketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMarketPayload>
          }
          createMany: {
            args: Prisma.PropertyMarketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyMarketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMarketPayload>[]
          }
          delete: {
            args: Prisma.PropertyMarketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMarketPayload>
          }
          update: {
            args: Prisma.PropertyMarketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMarketPayload>
          }
          deleteMany: {
            args: Prisma.PropertyMarketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyMarketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropertyMarketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMarketPayload>
          }
          aggregate: {
            args: Prisma.PropertyMarketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyMarket>
          }
          groupBy: {
            args: Prisma.PropertyMarketGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyMarketGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyMarketCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyMarketCountAggregateOutputType> | number
          }
        }
      }
      Reminder: {
        payload: Prisma.$ReminderPayload<ExtArgs>
        fields: Prisma.ReminderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReminderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReminderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          findFirst: {
            args: Prisma.ReminderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReminderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          findMany: {
            args: Prisma.ReminderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          create: {
            args: Prisma.ReminderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          createMany: {
            args: Prisma.ReminderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReminderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          delete: {
            args: Prisma.ReminderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          update: {
            args: Prisma.ReminderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          deleteMany: {
            args: Prisma.ReminderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReminderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReminderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          aggregate: {
            args: Prisma.ReminderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReminder>
          }
          groupBy: {
            args: Prisma.ReminderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReminderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReminderCountArgs<ExtArgs>
            result: $Utils.Optional<ReminderCountAggregateOutputType> | number
          }
        }
      }
      Search: {
        payload: Prisma.$SearchPayload<ExtArgs>
        fields: Prisma.SearchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SearchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SearchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchPayload>
          }
          findFirst: {
            args: Prisma.SearchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SearchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchPayload>
          }
          findMany: {
            args: Prisma.SearchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchPayload>[]
          }
          create: {
            args: Prisma.SearchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchPayload>
          }
          createMany: {
            args: Prisma.SearchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SearchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchPayload>[]
          }
          delete: {
            args: Prisma.SearchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchPayload>
          }
          update: {
            args: Prisma.SearchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchPayload>
          }
          deleteMany: {
            args: Prisma.SearchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SearchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SearchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchPayload>
          }
          aggregate: {
            args: Prisma.SearchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSearch>
          }
          groupBy: {
            args: Prisma.SearchGroupByArgs<ExtArgs>
            result: $Utils.Optional<SearchGroupByOutputType>[]
          }
          count: {
            args: Prisma.SearchCountArgs<ExtArgs>
            result: $Utils.Optional<SearchCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      RealEstateInterest: {
        payload: Prisma.$RealEstateInterestPayload<ExtArgs>
        fields: Prisma.RealEstateInterestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RealEstateInterestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealEstateInterestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RealEstateInterestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealEstateInterestPayload>
          }
          findFirst: {
            args: Prisma.RealEstateInterestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealEstateInterestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RealEstateInterestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealEstateInterestPayload>
          }
          findMany: {
            args: Prisma.RealEstateInterestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealEstateInterestPayload>[]
          }
          create: {
            args: Prisma.RealEstateInterestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealEstateInterestPayload>
          }
          createMany: {
            args: Prisma.RealEstateInterestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RealEstateInterestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealEstateInterestPayload>[]
          }
          delete: {
            args: Prisma.RealEstateInterestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealEstateInterestPayload>
          }
          update: {
            args: Prisma.RealEstateInterestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealEstateInterestPayload>
          }
          deleteMany: {
            args: Prisma.RealEstateInterestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RealEstateInterestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RealEstateInterestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealEstateInterestPayload>
          }
          aggregate: {
            args: Prisma.RealEstateInterestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRealEstateInterest>
          }
          groupBy: {
            args: Prisma.RealEstateInterestGroupByArgs<ExtArgs>
            result: $Utils.Optional<RealEstateInterestGroupByOutputType>[]
          }
          count: {
            args: Prisma.RealEstateInterestCountArgs<ExtArgs>
            result: $Utils.Optional<RealEstateInterestCountAggregateOutputType> | number
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
    | 'createManyAndReturn'
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
    chatMessagesSent: number
    chatMessagesReceived: number
    jobsApplied: number
    notifications: number
    propertiesUploaded: number
    apartmentsUploaded: number
    reminders: number
    reports: number
    reviews: number
    searches: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatMessagesSent?: boolean | UserCountOutputTypeCountChatMessagesSentArgs
    chatMessagesReceived?: boolean | UserCountOutputTypeCountChatMessagesReceivedArgs
    jobsApplied?: boolean | UserCountOutputTypeCountJobsAppliedArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    propertiesUploaded?: boolean | UserCountOutputTypeCountPropertiesUploadedArgs
    apartmentsUploaded?: boolean | UserCountOutputTypeCountApartmentsUploadedArgs
    reminders?: boolean | UserCountOutputTypeCountRemindersArgs
    reports?: boolean | UserCountOutputTypeCountReportsArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    searches?: boolean | UserCountOutputTypeCountSearchesArgs
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
  export type UserCountOutputTypeCountChatMessagesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatMessagesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJobsAppliedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobMarketWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPropertiesUploadedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyMarketWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApartmentsUploadedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RealEstateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSearchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchWhereInput
  }


  /**
   * Count Type RealEstateCountOutputType
   */

  export type RealEstateCountOutputType = {
    reviews: number
  }

  export type RealEstateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | RealEstateCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * RealEstateCountOutputType without action
   */
  export type RealEstateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealEstateCountOutputType
     */
    select?: RealEstateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RealEstateCountOutputType without action
   */
  export type RealEstateCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    roles: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | AdminCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    admins: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admins?: boolean | RoleCountOutputTypeCountAdminsArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountAdminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
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
    phoneNumber: string | null
    password: string | null
    isVerified: boolean | null
    isEmailVerified: boolean | null
    isNumberVerified: boolean | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
    tempToken: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    isVerified: boolean | null
    isEmailVerified: boolean | null
    isNumberVerified: boolean | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
    tempToken: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    phoneNumber: number
    password: number
    isVerified: number
    isEmailVerified: number
    isNumberVerified: number
    country: number
    createdAt: number
    updatedAt: number
    tempToken: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    phoneNumber?: true
    password?: true
    isVerified?: true
    isEmailVerified?: true
    isNumberVerified?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    tempToken?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    phoneNumber?: true
    password?: true
    isVerified?: true
    isEmailVerified?: true
    isNumberVerified?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    tempToken?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    phoneNumber?: true
    password?: true
    isVerified?: true
    isEmailVerified?: true
    isNumberVerified?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    tempToken?: true
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
    phoneNumber: string | null
    password: string
    isVerified: boolean
    isEmailVerified: boolean | null
    isNumberVerified: boolean | null
    country: string | null
    createdAt: Date
    updatedAt: Date
    tempToken: string | null
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
    phoneNumber?: boolean
    password?: boolean
    isVerified?: boolean
    isEmailVerified?: boolean
    isNumberVerified?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tempToken?: boolean
    chatMessagesSent?: boolean | User$chatMessagesSentArgs<ExtArgs>
    chatMessagesReceived?: boolean | User$chatMessagesReceivedArgs<ExtArgs>
    jobsApplied?: boolean | User$jobsAppliedArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    propertiesUploaded?: boolean | User$propertiesUploadedArgs<ExtArgs>
    apartmentsUploaded?: boolean | User$apartmentsUploadedArgs<ExtArgs>
    reminders?: boolean | User$remindersArgs<ExtArgs>
    reports?: boolean | User$reportsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    searches?: boolean | User$searchesArgs<ExtArgs>
    realEstateInterest?: boolean | User$realEstateInterestArgs<ExtArgs>
    userKyc?: boolean | User$userKycArgs<ExtArgs>
    userInfo?: boolean | User$userInfoArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    isVerified?: boolean
    isEmailVerified?: boolean
    isNumberVerified?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tempToken?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    isVerified?: boolean
    isEmailVerified?: boolean
    isNumberVerified?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tempToken?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatMessagesSent?: boolean | User$chatMessagesSentArgs<ExtArgs>
    chatMessagesReceived?: boolean | User$chatMessagesReceivedArgs<ExtArgs>
    jobsApplied?: boolean | User$jobsAppliedArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    propertiesUploaded?: boolean | User$propertiesUploadedArgs<ExtArgs>
    apartmentsUploaded?: boolean | User$apartmentsUploadedArgs<ExtArgs>
    reminders?: boolean | User$remindersArgs<ExtArgs>
    reports?: boolean | User$reportsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    searches?: boolean | User$searchesArgs<ExtArgs>
    realEstateInterest?: boolean | User$realEstateInterestArgs<ExtArgs>
    userKyc?: boolean | User$userKycArgs<ExtArgs>
    userInfo?: boolean | User$userInfoArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      chatMessagesSent: Prisma.$ChatMessagePayload<ExtArgs>[]
      chatMessagesReceived: Prisma.$ChatMessagePayload<ExtArgs>[]
      jobsApplied: Prisma.$JobMarketPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      propertiesUploaded: Prisma.$PropertyMarketPayload<ExtArgs>[]
      apartmentsUploaded: Prisma.$RealEstatePayload<ExtArgs>[]
      reminders: Prisma.$ReminderPayload<ExtArgs>[]
      reports: Prisma.$ReportPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      searches: Prisma.$SearchPayload<ExtArgs>[]
      realEstateInterest: Prisma.$RealEstateInterestPayload<ExtArgs> | null
      userKyc: Prisma.$UserKycPayload<ExtArgs> | null
      userInfo: Prisma.$UserInfoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      phoneNumber: string | null
      password: string
      isVerified: boolean
      isEmailVerified: boolean | null
      isNumberVerified: boolean | null
      country: string | null
      createdAt: Date
      updatedAt: Date
      tempToken: string | null
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatMessagesSent<T extends User$chatMessagesSentArgs<ExtArgs> = {}>(args?: Subset<T, User$chatMessagesSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany"> | Null>
    chatMessagesReceived<T extends User$chatMessagesReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$chatMessagesReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany"> | Null>
    jobsApplied<T extends User$jobsAppliedArgs<ExtArgs> = {}>(args?: Subset<T, User$jobsAppliedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobMarketPayload<ExtArgs>, T, "findMany"> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany"> | Null>
    propertiesUploaded<T extends User$propertiesUploadedArgs<ExtArgs> = {}>(args?: Subset<T, User$propertiesUploadedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyMarketPayload<ExtArgs>, T, "findMany"> | Null>
    apartmentsUploaded<T extends User$apartmentsUploadedArgs<ExtArgs> = {}>(args?: Subset<T, User$apartmentsUploadedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RealEstatePayload<ExtArgs>, T, "findMany"> | Null>
    reminders<T extends User$remindersArgs<ExtArgs> = {}>(args?: Subset<T, User$remindersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany"> | Null>
    reports<T extends User$reportsArgs<ExtArgs> = {}>(args?: Subset<T, User$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany"> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    searches<T extends User$searchesArgs<ExtArgs> = {}>(args?: Subset<T, User$searchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchPayload<ExtArgs>, T, "findMany"> | Null>
    realEstateInterest<T extends User$realEstateInterestArgs<ExtArgs> = {}>(args?: Subset<T, User$realEstateInterestArgs<ExtArgs>>): Prisma__RealEstateInterestClient<$Result.GetResult<Prisma.$RealEstateInterestPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    userKyc<T extends User$userKycArgs<ExtArgs> = {}>(args?: Subset<T, User$userKycArgs<ExtArgs>>): Prisma__UserKycClient<$Result.GetResult<Prisma.$UserKycPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    userInfo<T extends User$userInfoArgs<ExtArgs> = {}>(args?: Subset<T, User$userInfoArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly isNumberVerified: FieldRef<"User", 'Boolean'>
    readonly country: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly tempToken: FieldRef<"User", 'String'>
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
  }

  /**
   * User.chatMessagesSent
   */
  export type User$chatMessagesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * User.chatMessagesReceived
   */
  export type User$chatMessagesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * User.jobsApplied
   */
  export type User$jobsAppliedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMarket
     */
    select?: JobMarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMarketInclude<ExtArgs> | null
    where?: JobMarketWhereInput
    orderBy?: JobMarketOrderByWithRelationInput | JobMarketOrderByWithRelationInput[]
    cursor?: JobMarketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobMarketScalarFieldEnum | JobMarketScalarFieldEnum[]
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
   * User.propertiesUploaded
   */
  export type User$propertiesUploadedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMarket
     */
    select?: PropertyMarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMarketInclude<ExtArgs> | null
    where?: PropertyMarketWhereInput
    orderBy?: PropertyMarketOrderByWithRelationInput | PropertyMarketOrderByWithRelationInput[]
    cursor?: PropertyMarketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyMarketScalarFieldEnum | PropertyMarketScalarFieldEnum[]
  }

  /**
   * User.apartmentsUploaded
   */
  export type User$apartmentsUploadedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealEstate
     */
    select?: RealEstateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealEstateInclude<ExtArgs> | null
    where?: RealEstateWhereInput
    orderBy?: RealEstateOrderByWithRelationInput | RealEstateOrderByWithRelationInput[]
    cursor?: RealEstateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RealEstateScalarFieldEnum | RealEstateScalarFieldEnum[]
  }

  /**
   * User.reminders
   */
  export type User$remindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    cursor?: ReminderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * User.reports
   */
  export type User$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.searches
   */
  export type User$searchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Search
     */
    select?: SearchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchInclude<ExtArgs> | null
    where?: SearchWhereInput
    orderBy?: SearchOrderByWithRelationInput | SearchOrderByWithRelationInput[]
    cursor?: SearchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SearchScalarFieldEnum | SearchScalarFieldEnum[]
  }

  /**
   * User.realEstateInterest
   */
  export type User$realEstateInterestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealEstateInterest
     */
    select?: RealEstateInterestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealEstateInterestInclude<ExtArgs> | null
    where?: RealEstateInterestWhereInput
  }

  /**
   * User.userKyc
   */
  export type User$userKycArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKyc
     */
    select?: UserKycSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKycInclude<ExtArgs> | null
    where?: UserKycWhereInput
  }

  /**
   * User.userInfo
   */
  export type User$userInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    where?: UserInfoWhereInput
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserInfo
   */

  export type AggregateUserInfo = {
    _count: UserInfoCountAggregateOutputType | null
    _min: UserInfoMinAggregateOutputType | null
    _max: UserInfoMaxAggregateOutputType | null
  }

  export type UserInfoMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    profilePicture: string | null
    address: string | null
    userType: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserInfoMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    profilePicture: string | null
    address: string | null
    userType: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserInfoCountAggregateOutputType = {
    id: number
    fullName: number
    profilePicture: number
    address: number
    userType: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserInfoMinAggregateInputType = {
    id?: true
    fullName?: true
    profilePicture?: true
    address?: true
    userType?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserInfoMaxAggregateInputType = {
    id?: true
    fullName?: true
    profilePicture?: true
    address?: true
    userType?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserInfoCountAggregateInputType = {
    id?: true
    fullName?: true
    profilePicture?: true
    address?: true
    userType?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInfo to aggregate.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserInfos
    **/
    _count?: true | UserInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserInfoMaxAggregateInputType
  }

  export type GetUserInfoAggregateType<T extends UserInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateUserInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserInfo[P]>
      : GetScalarType<T[P], AggregateUserInfo[P]>
  }




  export type UserInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserInfoWhereInput
    orderBy?: UserInfoOrderByWithAggregationInput | UserInfoOrderByWithAggregationInput[]
    by: UserInfoScalarFieldEnum[] | UserInfoScalarFieldEnum
    having?: UserInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserInfoCountAggregateInputType | true
    _min?: UserInfoMinAggregateInputType
    _max?: UserInfoMaxAggregateInputType
  }

  export type UserInfoGroupByOutputType = {
    id: string
    fullName: string
    profilePicture: string
    address: string
    userType: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: UserInfoCountAggregateOutputType | null
    _min: UserInfoMinAggregateOutputType | null
    _max: UserInfoMaxAggregateOutputType | null
  }

  type GetUserInfoGroupByPayload<T extends UserInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserInfoGroupByOutputType[P]>
            : GetScalarType<T[P], UserInfoGroupByOutputType[P]>
        }
      >
    >


  export type UserInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    profilePicture?: boolean
    address?: boolean
    userType?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userInfo"]>

  export type UserInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    profilePicture?: boolean
    address?: boolean
    userType?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userInfo"]>

  export type UserInfoSelectScalar = {
    id?: boolean
    fullName?: boolean
    profilePicture?: boolean
    address?: boolean
    userType?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserInfo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      profilePicture: string
      address: string
      userType: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userInfo"]>
    composites: {}
  }

  type UserInfoGetPayload<S extends boolean | null | undefined | UserInfoDefaultArgs> = $Result.GetResult<Prisma.$UserInfoPayload, S>

  type UserInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserInfoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserInfoCountAggregateInputType | true
    }

  export interface UserInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserInfo'], meta: { name: 'UserInfo' } }
    /**
     * Find zero or one UserInfo that matches the filter.
     * @param {UserInfoFindUniqueArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserInfoFindUniqueArgs>(args: SelectSubset<T, UserInfoFindUniqueArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserInfo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserInfoFindUniqueOrThrowArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, UserInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindFirstArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserInfoFindFirstArgs>(args?: SelectSubset<T, UserInfoFindFirstArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindFirstOrThrowArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, UserInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserInfos
     * const userInfos = await prisma.userInfo.findMany()
     * 
     * // Get first 10 UserInfos
     * const userInfos = await prisma.userInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userInfoWithIdOnly = await prisma.userInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserInfoFindManyArgs>(args?: SelectSubset<T, UserInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserInfo.
     * @param {UserInfoCreateArgs} args - Arguments to create a UserInfo.
     * @example
     * // Create one UserInfo
     * const UserInfo = await prisma.userInfo.create({
     *   data: {
     *     // ... data to create a UserInfo
     *   }
     * })
     * 
     */
    create<T extends UserInfoCreateArgs>(args: SelectSubset<T, UserInfoCreateArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserInfos.
     * @param {UserInfoCreateManyArgs} args - Arguments to create many UserInfos.
     * @example
     * // Create many UserInfos
     * const userInfo = await prisma.userInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserInfoCreateManyArgs>(args?: SelectSubset<T, UserInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserInfos and returns the data saved in the database.
     * @param {UserInfoCreateManyAndReturnArgs} args - Arguments to create many UserInfos.
     * @example
     * // Create many UserInfos
     * const userInfo = await prisma.userInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserInfos and only return the `id`
     * const userInfoWithIdOnly = await prisma.userInfo.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, UserInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserInfo.
     * @param {UserInfoDeleteArgs} args - Arguments to delete one UserInfo.
     * @example
     * // Delete one UserInfo
     * const UserInfo = await prisma.userInfo.delete({
     *   where: {
     *     // ... filter to delete one UserInfo
     *   }
     * })
     * 
     */
    delete<T extends UserInfoDeleteArgs>(args: SelectSubset<T, UserInfoDeleteArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserInfo.
     * @param {UserInfoUpdateArgs} args - Arguments to update one UserInfo.
     * @example
     * // Update one UserInfo
     * const userInfo = await prisma.userInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserInfoUpdateArgs>(args: SelectSubset<T, UserInfoUpdateArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserInfos.
     * @param {UserInfoDeleteManyArgs} args - Arguments to filter UserInfos to delete.
     * @example
     * // Delete a few UserInfos
     * const { count } = await prisma.userInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserInfoDeleteManyArgs>(args?: SelectSubset<T, UserInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserInfos
     * const userInfo = await prisma.userInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserInfoUpdateManyArgs>(args: SelectSubset<T, UserInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserInfo.
     * @param {UserInfoUpsertArgs} args - Arguments to update or create a UserInfo.
     * @example
     * // Update or create a UserInfo
     * const userInfo = await prisma.userInfo.upsert({
     *   create: {
     *     // ... data to create a UserInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserInfo we want to update
     *   }
     * })
     */
    upsert<T extends UserInfoUpsertArgs>(args: SelectSubset<T, UserInfoUpsertArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoCountArgs} args - Arguments to filter UserInfos to count.
     * @example
     * // Count the number of UserInfos
     * const count = await prisma.userInfo.count({
     *   where: {
     *     // ... the filter for the UserInfos we want to count
     *   }
     * })
    **/
    count<T extends UserInfoCountArgs>(
      args?: Subset<T, UserInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserInfoAggregateArgs>(args: Subset<T, UserInfoAggregateArgs>): Prisma.PrismaPromise<GetUserInfoAggregateType<T>>

    /**
     * Group by UserInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoGroupByArgs} args - Group by arguments.
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
      T extends UserInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserInfoGroupByArgs['orderBy'] }
        : { orderBy?: UserInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserInfo model
   */
  readonly fields: UserInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UserInfo model
   */ 
  interface UserInfoFieldRefs {
    readonly id: FieldRef<"UserInfo", 'String'>
    readonly fullName: FieldRef<"UserInfo", 'String'>
    readonly profilePicture: FieldRef<"UserInfo", 'String'>
    readonly address: FieldRef<"UserInfo", 'String'>
    readonly userType: FieldRef<"UserInfo", 'String'>
    readonly userId: FieldRef<"UserInfo", 'String'>
    readonly createdAt: FieldRef<"UserInfo", 'DateTime'>
    readonly updatedAt: FieldRef<"UserInfo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserInfo findUnique
   */
  export type UserInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo findUniqueOrThrow
   */
  export type UserInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo findFirst
   */
  export type UserInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInfos.
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInfos.
     */
    distinct?: UserInfoScalarFieldEnum | UserInfoScalarFieldEnum[]
  }

  /**
   * UserInfo findFirstOrThrow
   */
  export type UserInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInfos.
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInfos.
     */
    distinct?: UserInfoScalarFieldEnum | UserInfoScalarFieldEnum[]
  }

  /**
   * UserInfo findMany
   */
  export type UserInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfos to fetch.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserInfos.
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    distinct?: UserInfoScalarFieldEnum | UserInfoScalarFieldEnum[]
  }

  /**
   * UserInfo create
   */
  export type UserInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a UserInfo.
     */
    data: XOR<UserInfoCreateInput, UserInfoUncheckedCreateInput>
  }

  /**
   * UserInfo createMany
   */
  export type UserInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserInfos.
     */
    data: UserInfoCreateManyInput | UserInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserInfo createManyAndReturn
   */
  export type UserInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserInfos.
     */
    data: UserInfoCreateManyInput | UserInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserInfo update
   */
  export type UserInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a UserInfo.
     */
    data: XOR<UserInfoUpdateInput, UserInfoUncheckedUpdateInput>
    /**
     * Choose, which UserInfo to update.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo updateMany
   */
  export type UserInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserInfos.
     */
    data: XOR<UserInfoUpdateManyMutationInput, UserInfoUncheckedUpdateManyInput>
    /**
     * Filter which UserInfos to update
     */
    where?: UserInfoWhereInput
  }

  /**
   * UserInfo upsert
   */
  export type UserInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the UserInfo to update in case it exists.
     */
    where: UserInfoWhereUniqueInput
    /**
     * In case the UserInfo found by the `where` argument doesn't exist, create a new UserInfo with this data.
     */
    create: XOR<UserInfoCreateInput, UserInfoUncheckedCreateInput>
    /**
     * In case the UserInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserInfoUpdateInput, UserInfoUncheckedUpdateInput>
  }

  /**
   * UserInfo delete
   */
  export type UserInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter which UserInfo to delete.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo deleteMany
   */
  export type UserInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInfos to delete
     */
    where?: UserInfoWhereInput
  }

  /**
   * UserInfo without action
   */
  export type UserInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
  }


  /**
   * Model UserKyc
   */

  export type AggregateUserKyc = {
    _count: UserKycCountAggregateOutputType | null
    _avg: UserKycAvgAggregateOutputType | null
    _sum: UserKycSumAggregateOutputType | null
    _min: UserKycMinAggregateOutputType | null
    _max: UserKycMaxAggregateOutputType | null
  }

  export type UserKycAvgAggregateOutputType = {
    id: number | null
  }

  export type UserKycSumAggregateOutputType = {
    id: number | null
  }

  export type UserKycMinAggregateOutputType = {
    id: number | null
    userId: string | null
    idType: string | null
    idFrontImage: string | null
    idBackImage: string | null
    nyscNumber: string | null
    nin: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserKycMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    idType: string | null
    idFrontImage: string | null
    idBackImage: string | null
    nyscNumber: string | null
    nin: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserKycCountAggregateOutputType = {
    id: number
    userId: number
    passportPhoto: number
    idType: number
    idFrontImage: number
    idBackImage: number
    nyscNumber: number
    nin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserKycAvgAggregateInputType = {
    id?: true
  }

  export type UserKycSumAggregateInputType = {
    id?: true
  }

  export type UserKycMinAggregateInputType = {
    id?: true
    userId?: true
    idType?: true
    idFrontImage?: true
    idBackImage?: true
    nyscNumber?: true
    nin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserKycMaxAggregateInputType = {
    id?: true
    userId?: true
    idType?: true
    idFrontImage?: true
    idBackImage?: true
    nyscNumber?: true
    nin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserKycCountAggregateInputType = {
    id?: true
    userId?: true
    passportPhoto?: true
    idType?: true
    idFrontImage?: true
    idBackImage?: true
    nyscNumber?: true
    nin?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserKycAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserKyc to aggregate.
     */
    where?: UserKycWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserKycs to fetch.
     */
    orderBy?: UserKycOrderByWithRelationInput | UserKycOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserKycWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserKycs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserKycs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserKycs
    **/
    _count?: true | UserKycCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserKycAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserKycSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserKycMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserKycMaxAggregateInputType
  }

  export type GetUserKycAggregateType<T extends UserKycAggregateArgs> = {
        [P in keyof T & keyof AggregateUserKyc]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserKyc[P]>
      : GetScalarType<T[P], AggregateUserKyc[P]>
  }




  export type UserKycGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserKycWhereInput
    orderBy?: UserKycOrderByWithAggregationInput | UserKycOrderByWithAggregationInput[]
    by: UserKycScalarFieldEnum[] | UserKycScalarFieldEnum
    having?: UserKycScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserKycCountAggregateInputType | true
    _avg?: UserKycAvgAggregateInputType
    _sum?: UserKycSumAggregateInputType
    _min?: UserKycMinAggregateInputType
    _max?: UserKycMaxAggregateInputType
  }

  export type UserKycGroupByOutputType = {
    id: number
    userId: string
    passportPhoto: string[]
    idType: string
    idFrontImage: string
    idBackImage: string
    nyscNumber: string | null
    nin: string
    createdAt: Date
    updatedAt: Date
    _count: UserKycCountAggregateOutputType | null
    _avg: UserKycAvgAggregateOutputType | null
    _sum: UserKycSumAggregateOutputType | null
    _min: UserKycMinAggregateOutputType | null
    _max: UserKycMaxAggregateOutputType | null
  }

  type GetUserKycGroupByPayload<T extends UserKycGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserKycGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserKycGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserKycGroupByOutputType[P]>
            : GetScalarType<T[P], UserKycGroupByOutputType[P]>
        }
      >
    >


  export type UserKycSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    passportPhoto?: boolean
    idType?: boolean
    idFrontImage?: boolean
    idBackImage?: boolean
    nyscNumber?: boolean
    nin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userKyc"]>

  export type UserKycSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    passportPhoto?: boolean
    idType?: boolean
    idFrontImage?: boolean
    idBackImage?: boolean
    nyscNumber?: boolean
    nin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userKyc"]>

  export type UserKycSelectScalar = {
    id?: boolean
    userId?: boolean
    passportPhoto?: boolean
    idType?: boolean
    idFrontImage?: boolean
    idBackImage?: boolean
    nyscNumber?: boolean
    nin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserKycInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserKycIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserKycPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserKyc"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      passportPhoto: string[]
      idType: string
      idFrontImage: string
      idBackImage: string
      nyscNumber: string | null
      nin: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userKyc"]>
    composites: {}
  }

  type UserKycGetPayload<S extends boolean | null | undefined | UserKycDefaultArgs> = $Result.GetResult<Prisma.$UserKycPayload, S>

  type UserKycCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserKycFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserKycCountAggregateInputType | true
    }

  export interface UserKycDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserKyc'], meta: { name: 'UserKyc' } }
    /**
     * Find zero or one UserKyc that matches the filter.
     * @param {UserKycFindUniqueArgs} args - Arguments to find a UserKyc
     * @example
     * // Get one UserKyc
     * const userKyc = await prisma.userKyc.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserKycFindUniqueArgs>(args: SelectSubset<T, UserKycFindUniqueArgs<ExtArgs>>): Prisma__UserKycClient<$Result.GetResult<Prisma.$UserKycPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserKyc that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserKycFindUniqueOrThrowArgs} args - Arguments to find a UserKyc
     * @example
     * // Get one UserKyc
     * const userKyc = await prisma.userKyc.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserKycFindUniqueOrThrowArgs>(args: SelectSubset<T, UserKycFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserKycClient<$Result.GetResult<Prisma.$UserKycPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserKyc that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKycFindFirstArgs} args - Arguments to find a UserKyc
     * @example
     * // Get one UserKyc
     * const userKyc = await prisma.userKyc.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserKycFindFirstArgs>(args?: SelectSubset<T, UserKycFindFirstArgs<ExtArgs>>): Prisma__UserKycClient<$Result.GetResult<Prisma.$UserKycPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserKyc that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKycFindFirstOrThrowArgs} args - Arguments to find a UserKyc
     * @example
     * // Get one UserKyc
     * const userKyc = await prisma.userKyc.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserKycFindFirstOrThrowArgs>(args?: SelectSubset<T, UserKycFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserKycClient<$Result.GetResult<Prisma.$UserKycPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserKycs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKycFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserKycs
     * const userKycs = await prisma.userKyc.findMany()
     * 
     * // Get first 10 UserKycs
     * const userKycs = await prisma.userKyc.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userKycWithIdOnly = await prisma.userKyc.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserKycFindManyArgs>(args?: SelectSubset<T, UserKycFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserKycPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserKyc.
     * @param {UserKycCreateArgs} args - Arguments to create a UserKyc.
     * @example
     * // Create one UserKyc
     * const UserKyc = await prisma.userKyc.create({
     *   data: {
     *     // ... data to create a UserKyc
     *   }
     * })
     * 
     */
    create<T extends UserKycCreateArgs>(args: SelectSubset<T, UserKycCreateArgs<ExtArgs>>): Prisma__UserKycClient<$Result.GetResult<Prisma.$UserKycPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserKycs.
     * @param {UserKycCreateManyArgs} args - Arguments to create many UserKycs.
     * @example
     * // Create many UserKycs
     * const userKyc = await prisma.userKyc.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserKycCreateManyArgs>(args?: SelectSubset<T, UserKycCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserKycs and returns the data saved in the database.
     * @param {UserKycCreateManyAndReturnArgs} args - Arguments to create many UserKycs.
     * @example
     * // Create many UserKycs
     * const userKyc = await prisma.userKyc.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserKycs and only return the `id`
     * const userKycWithIdOnly = await prisma.userKyc.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserKycCreateManyAndReturnArgs>(args?: SelectSubset<T, UserKycCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserKycPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserKyc.
     * @param {UserKycDeleteArgs} args - Arguments to delete one UserKyc.
     * @example
     * // Delete one UserKyc
     * const UserKyc = await prisma.userKyc.delete({
     *   where: {
     *     // ... filter to delete one UserKyc
     *   }
     * })
     * 
     */
    delete<T extends UserKycDeleteArgs>(args: SelectSubset<T, UserKycDeleteArgs<ExtArgs>>): Prisma__UserKycClient<$Result.GetResult<Prisma.$UserKycPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserKyc.
     * @param {UserKycUpdateArgs} args - Arguments to update one UserKyc.
     * @example
     * // Update one UserKyc
     * const userKyc = await prisma.userKyc.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserKycUpdateArgs>(args: SelectSubset<T, UserKycUpdateArgs<ExtArgs>>): Prisma__UserKycClient<$Result.GetResult<Prisma.$UserKycPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserKycs.
     * @param {UserKycDeleteManyArgs} args - Arguments to filter UserKycs to delete.
     * @example
     * // Delete a few UserKycs
     * const { count } = await prisma.userKyc.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserKycDeleteManyArgs>(args?: SelectSubset<T, UserKycDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserKycs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKycUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserKycs
     * const userKyc = await prisma.userKyc.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserKycUpdateManyArgs>(args: SelectSubset<T, UserKycUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserKyc.
     * @param {UserKycUpsertArgs} args - Arguments to update or create a UserKyc.
     * @example
     * // Update or create a UserKyc
     * const userKyc = await prisma.userKyc.upsert({
     *   create: {
     *     // ... data to create a UserKyc
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserKyc we want to update
     *   }
     * })
     */
    upsert<T extends UserKycUpsertArgs>(args: SelectSubset<T, UserKycUpsertArgs<ExtArgs>>): Prisma__UserKycClient<$Result.GetResult<Prisma.$UserKycPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserKycs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKycCountArgs} args - Arguments to filter UserKycs to count.
     * @example
     * // Count the number of UserKycs
     * const count = await prisma.userKyc.count({
     *   where: {
     *     // ... the filter for the UserKycs we want to count
     *   }
     * })
    **/
    count<T extends UserKycCountArgs>(
      args?: Subset<T, UserKycCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserKycCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserKyc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKycAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserKycAggregateArgs>(args: Subset<T, UserKycAggregateArgs>): Prisma.PrismaPromise<GetUserKycAggregateType<T>>

    /**
     * Group by UserKyc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKycGroupByArgs} args - Group by arguments.
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
      T extends UserKycGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserKycGroupByArgs['orderBy'] }
        : { orderBy?: UserKycGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserKycGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserKycGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserKyc model
   */
  readonly fields: UserKycFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserKyc.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserKycClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UserKyc model
   */ 
  interface UserKycFieldRefs {
    readonly id: FieldRef<"UserKyc", 'Int'>
    readonly userId: FieldRef<"UserKyc", 'String'>
    readonly passportPhoto: FieldRef<"UserKyc", 'String[]'>
    readonly idType: FieldRef<"UserKyc", 'String'>
    readonly idFrontImage: FieldRef<"UserKyc", 'String'>
    readonly idBackImage: FieldRef<"UserKyc", 'String'>
    readonly nyscNumber: FieldRef<"UserKyc", 'String'>
    readonly nin: FieldRef<"UserKyc", 'String'>
    readonly createdAt: FieldRef<"UserKyc", 'DateTime'>
    readonly updatedAt: FieldRef<"UserKyc", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserKyc findUnique
   */
  export type UserKycFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKyc
     */
    select?: UserKycSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKycInclude<ExtArgs> | null
    /**
     * Filter, which UserKyc to fetch.
     */
    where: UserKycWhereUniqueInput
  }

  /**
   * UserKyc findUniqueOrThrow
   */
  export type UserKycFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKyc
     */
    select?: UserKycSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKycInclude<ExtArgs> | null
    /**
     * Filter, which UserKyc to fetch.
     */
    where: UserKycWhereUniqueInput
  }

  /**
   * UserKyc findFirst
   */
  export type UserKycFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKyc
     */
    select?: UserKycSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKycInclude<ExtArgs> | null
    /**
     * Filter, which UserKyc to fetch.
     */
    where?: UserKycWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserKycs to fetch.
     */
    orderBy?: UserKycOrderByWithRelationInput | UserKycOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserKycs.
     */
    cursor?: UserKycWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserKycs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserKycs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserKycs.
     */
    distinct?: UserKycScalarFieldEnum | UserKycScalarFieldEnum[]
  }

  /**
   * UserKyc findFirstOrThrow
   */
  export type UserKycFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKyc
     */
    select?: UserKycSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKycInclude<ExtArgs> | null
    /**
     * Filter, which UserKyc to fetch.
     */
    where?: UserKycWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserKycs to fetch.
     */
    orderBy?: UserKycOrderByWithRelationInput | UserKycOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserKycs.
     */
    cursor?: UserKycWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserKycs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserKycs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserKycs.
     */
    distinct?: UserKycScalarFieldEnum | UserKycScalarFieldEnum[]
  }

  /**
   * UserKyc findMany
   */
  export type UserKycFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKyc
     */
    select?: UserKycSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKycInclude<ExtArgs> | null
    /**
     * Filter, which UserKycs to fetch.
     */
    where?: UserKycWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserKycs to fetch.
     */
    orderBy?: UserKycOrderByWithRelationInput | UserKycOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserKycs.
     */
    cursor?: UserKycWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserKycs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserKycs.
     */
    skip?: number
    distinct?: UserKycScalarFieldEnum | UserKycScalarFieldEnum[]
  }

  /**
   * UserKyc create
   */
  export type UserKycCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKyc
     */
    select?: UserKycSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKycInclude<ExtArgs> | null
    /**
     * The data needed to create a UserKyc.
     */
    data: XOR<UserKycCreateInput, UserKycUncheckedCreateInput>
  }

  /**
   * UserKyc createMany
   */
  export type UserKycCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserKycs.
     */
    data: UserKycCreateManyInput | UserKycCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserKyc createManyAndReturn
   */
  export type UserKycCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKyc
     */
    select?: UserKycSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserKycs.
     */
    data: UserKycCreateManyInput | UserKycCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKycIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserKyc update
   */
  export type UserKycUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKyc
     */
    select?: UserKycSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKycInclude<ExtArgs> | null
    /**
     * The data needed to update a UserKyc.
     */
    data: XOR<UserKycUpdateInput, UserKycUncheckedUpdateInput>
    /**
     * Choose, which UserKyc to update.
     */
    where: UserKycWhereUniqueInput
  }

  /**
   * UserKyc updateMany
   */
  export type UserKycUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserKycs.
     */
    data: XOR<UserKycUpdateManyMutationInput, UserKycUncheckedUpdateManyInput>
    /**
     * Filter which UserKycs to update
     */
    where?: UserKycWhereInput
  }

  /**
   * UserKyc upsert
   */
  export type UserKycUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKyc
     */
    select?: UserKycSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKycInclude<ExtArgs> | null
    /**
     * The filter to search for the UserKyc to update in case it exists.
     */
    where: UserKycWhereUniqueInput
    /**
     * In case the UserKyc found by the `where` argument doesn't exist, create a new UserKyc with this data.
     */
    create: XOR<UserKycCreateInput, UserKycUncheckedCreateInput>
    /**
     * In case the UserKyc was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserKycUpdateInput, UserKycUncheckedUpdateInput>
  }

  /**
   * UserKyc delete
   */
  export type UserKycDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKyc
     */
    select?: UserKycSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKycInclude<ExtArgs> | null
    /**
     * Filter which UserKyc to delete.
     */
    where: UserKycWhereUniqueInput
  }

  /**
   * UserKyc deleteMany
   */
  export type UserKycDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserKycs to delete
     */
    where?: UserKycWhereInput
  }

  /**
   * UserKyc without action
   */
  export type UserKycDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKyc
     */
    select?: UserKycSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKycInclude<ExtArgs> | null
  }


  /**
   * Model RealEstate
   */

  export type AggregateRealEstate = {
    _count: RealEstateCountAggregateOutputType | null
    _avg: RealEstateAvgAggregateOutputType | null
    _sum: RealEstateSumAggregateOutputType | null
    _min: RealEstateMinAggregateOutputType | null
    _max: RealEstateMaxAggregateOutputType | null
  }

  export type RealEstateAvgAggregateOutputType = {
    id: number | null
    numberOfRooms: number | null
    mainPictureIndex: number | null
  }

  export type RealEstateSumAggregateOutputType = {
    id: number | null
    numberOfRooms: number | null
    mainPictureIndex: number | null
  }

  export type RealEstateMinAggregateOutputType = {
    id: number | null
    userId: string | null
    houseName: string | null
    category: string | null
    numberOfRooms: number | null
    mainPictureIndex: number | null
    description: string | null
    state: string | null
    lga: string | null
    country: string | null
    address: string | null
    createdAt: Date | null
  }

  export type RealEstateMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    houseName: string | null
    category: string | null
    numberOfRooms: number | null
    mainPictureIndex: number | null
    description: string | null
    state: string | null
    lga: string | null
    country: string | null
    address: string | null
    createdAt: Date | null
  }

  export type RealEstateCountAggregateOutputType = {
    id: number
    userId: number
    houseName: number
    category: number
    numberOfRooms: number
    pictures: number
    mainPictureIndex: number
    description: number
    state: number
    lga: number
    country: number
    nearby: number
    amenities: number
    address: number
    createdAt: number
    _all: number
  }


  export type RealEstateAvgAggregateInputType = {
    id?: true
    numberOfRooms?: true
    mainPictureIndex?: true
  }

  export type RealEstateSumAggregateInputType = {
    id?: true
    numberOfRooms?: true
    mainPictureIndex?: true
  }

  export type RealEstateMinAggregateInputType = {
    id?: true
    userId?: true
    houseName?: true
    category?: true
    numberOfRooms?: true
    mainPictureIndex?: true
    description?: true
    state?: true
    lga?: true
    country?: true
    address?: true
    createdAt?: true
  }

  export type RealEstateMaxAggregateInputType = {
    id?: true
    userId?: true
    houseName?: true
    category?: true
    numberOfRooms?: true
    mainPictureIndex?: true
    description?: true
    state?: true
    lga?: true
    country?: true
    address?: true
    createdAt?: true
  }

  export type RealEstateCountAggregateInputType = {
    id?: true
    userId?: true
    houseName?: true
    category?: true
    numberOfRooms?: true
    pictures?: true
    mainPictureIndex?: true
    description?: true
    state?: true
    lga?: true
    country?: true
    nearby?: true
    amenities?: true
    address?: true
    createdAt?: true
    _all?: true
  }

  export type RealEstateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RealEstate to aggregate.
     */
    where?: RealEstateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstates to fetch.
     */
    orderBy?: RealEstateOrderByWithRelationInput | RealEstateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RealEstateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RealEstates
    **/
    _count?: true | RealEstateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RealEstateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RealEstateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RealEstateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RealEstateMaxAggregateInputType
  }

  export type GetRealEstateAggregateType<T extends RealEstateAggregateArgs> = {
        [P in keyof T & keyof AggregateRealEstate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRealEstate[P]>
      : GetScalarType<T[P], AggregateRealEstate[P]>
  }




  export type RealEstateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RealEstateWhereInput
    orderBy?: RealEstateOrderByWithAggregationInput | RealEstateOrderByWithAggregationInput[]
    by: RealEstateScalarFieldEnum[] | RealEstateScalarFieldEnum
    having?: RealEstateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RealEstateCountAggregateInputType | true
    _avg?: RealEstateAvgAggregateInputType
    _sum?: RealEstateSumAggregateInputType
    _min?: RealEstateMinAggregateInputType
    _max?: RealEstateMaxAggregateInputType
  }

  export type RealEstateGroupByOutputType = {
    id: number
    userId: string
    houseName: string | null
    category: string
    numberOfRooms: number
    pictures: string[]
    mainPictureIndex: number
    description: string
    state: string
    lga: string
    country: string
    nearby: string[]
    amenities: string[]
    address: string
    createdAt: Date
    _count: RealEstateCountAggregateOutputType | null
    _avg: RealEstateAvgAggregateOutputType | null
    _sum: RealEstateSumAggregateOutputType | null
    _min: RealEstateMinAggregateOutputType | null
    _max: RealEstateMaxAggregateOutputType | null
  }

  type GetRealEstateGroupByPayload<T extends RealEstateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RealEstateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RealEstateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RealEstateGroupByOutputType[P]>
            : GetScalarType<T[P], RealEstateGroupByOutputType[P]>
        }
      >
    >


  export type RealEstateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    houseName?: boolean
    category?: boolean
    numberOfRooms?: boolean
    pictures?: boolean
    mainPictureIndex?: boolean
    description?: boolean
    state?: boolean
    lga?: boolean
    country?: boolean
    nearby?: boolean
    amenities?: boolean
    address?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | RealEstate$reviewsArgs<ExtArgs>
    _count?: boolean | RealEstateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["realEstate"]>

  export type RealEstateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    houseName?: boolean
    category?: boolean
    numberOfRooms?: boolean
    pictures?: boolean
    mainPictureIndex?: boolean
    description?: boolean
    state?: boolean
    lga?: boolean
    country?: boolean
    nearby?: boolean
    amenities?: boolean
    address?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["realEstate"]>

  export type RealEstateSelectScalar = {
    id?: boolean
    userId?: boolean
    houseName?: boolean
    category?: boolean
    numberOfRooms?: boolean
    pictures?: boolean
    mainPictureIndex?: boolean
    description?: boolean
    state?: boolean
    lga?: boolean
    country?: boolean
    nearby?: boolean
    amenities?: boolean
    address?: boolean
    createdAt?: boolean
  }

  export type RealEstateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | RealEstate$reviewsArgs<ExtArgs>
    _count?: boolean | RealEstateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RealEstateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RealEstatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RealEstate"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      houseName: string | null
      category: string
      numberOfRooms: number
      pictures: string[]
      mainPictureIndex: number
      description: string
      state: string
      lga: string
      country: string
      nearby: string[]
      amenities: string[]
      address: string
      createdAt: Date
    }, ExtArgs["result"]["realEstate"]>
    composites: {}
  }

  type RealEstateGetPayload<S extends boolean | null | undefined | RealEstateDefaultArgs> = $Result.GetResult<Prisma.$RealEstatePayload, S>

  type RealEstateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RealEstateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RealEstateCountAggregateInputType | true
    }

  export interface RealEstateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RealEstate'], meta: { name: 'RealEstate' } }
    /**
     * Find zero or one RealEstate that matches the filter.
     * @param {RealEstateFindUniqueArgs} args - Arguments to find a RealEstate
     * @example
     * // Get one RealEstate
     * const realEstate = await prisma.realEstate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RealEstateFindUniqueArgs>(args: SelectSubset<T, RealEstateFindUniqueArgs<ExtArgs>>): Prisma__RealEstateClient<$Result.GetResult<Prisma.$RealEstatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RealEstate that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RealEstateFindUniqueOrThrowArgs} args - Arguments to find a RealEstate
     * @example
     * // Get one RealEstate
     * const realEstate = await prisma.realEstate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RealEstateFindUniqueOrThrowArgs>(args: SelectSubset<T, RealEstateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RealEstateClient<$Result.GetResult<Prisma.$RealEstatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RealEstate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateFindFirstArgs} args - Arguments to find a RealEstate
     * @example
     * // Get one RealEstate
     * const realEstate = await prisma.realEstate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RealEstateFindFirstArgs>(args?: SelectSubset<T, RealEstateFindFirstArgs<ExtArgs>>): Prisma__RealEstateClient<$Result.GetResult<Prisma.$RealEstatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RealEstate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateFindFirstOrThrowArgs} args - Arguments to find a RealEstate
     * @example
     * // Get one RealEstate
     * const realEstate = await prisma.realEstate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RealEstateFindFirstOrThrowArgs>(args?: SelectSubset<T, RealEstateFindFirstOrThrowArgs<ExtArgs>>): Prisma__RealEstateClient<$Result.GetResult<Prisma.$RealEstatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RealEstates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RealEstates
     * const realEstates = await prisma.realEstate.findMany()
     * 
     * // Get first 10 RealEstates
     * const realEstates = await prisma.realEstate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const realEstateWithIdOnly = await prisma.realEstate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RealEstateFindManyArgs>(args?: SelectSubset<T, RealEstateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RealEstatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RealEstate.
     * @param {RealEstateCreateArgs} args - Arguments to create a RealEstate.
     * @example
     * // Create one RealEstate
     * const RealEstate = await prisma.realEstate.create({
     *   data: {
     *     // ... data to create a RealEstate
     *   }
     * })
     * 
     */
    create<T extends RealEstateCreateArgs>(args: SelectSubset<T, RealEstateCreateArgs<ExtArgs>>): Prisma__RealEstateClient<$Result.GetResult<Prisma.$RealEstatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RealEstates.
     * @param {RealEstateCreateManyArgs} args - Arguments to create many RealEstates.
     * @example
     * // Create many RealEstates
     * const realEstate = await prisma.realEstate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RealEstateCreateManyArgs>(args?: SelectSubset<T, RealEstateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RealEstates and returns the data saved in the database.
     * @param {RealEstateCreateManyAndReturnArgs} args - Arguments to create many RealEstates.
     * @example
     * // Create many RealEstates
     * const realEstate = await prisma.realEstate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RealEstates and only return the `id`
     * const realEstateWithIdOnly = await prisma.realEstate.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RealEstateCreateManyAndReturnArgs>(args?: SelectSubset<T, RealEstateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RealEstatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RealEstate.
     * @param {RealEstateDeleteArgs} args - Arguments to delete one RealEstate.
     * @example
     * // Delete one RealEstate
     * const RealEstate = await prisma.realEstate.delete({
     *   where: {
     *     // ... filter to delete one RealEstate
     *   }
     * })
     * 
     */
    delete<T extends RealEstateDeleteArgs>(args: SelectSubset<T, RealEstateDeleteArgs<ExtArgs>>): Prisma__RealEstateClient<$Result.GetResult<Prisma.$RealEstatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RealEstate.
     * @param {RealEstateUpdateArgs} args - Arguments to update one RealEstate.
     * @example
     * // Update one RealEstate
     * const realEstate = await prisma.realEstate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RealEstateUpdateArgs>(args: SelectSubset<T, RealEstateUpdateArgs<ExtArgs>>): Prisma__RealEstateClient<$Result.GetResult<Prisma.$RealEstatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RealEstates.
     * @param {RealEstateDeleteManyArgs} args - Arguments to filter RealEstates to delete.
     * @example
     * // Delete a few RealEstates
     * const { count } = await prisma.realEstate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RealEstateDeleteManyArgs>(args?: SelectSubset<T, RealEstateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RealEstates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RealEstates
     * const realEstate = await prisma.realEstate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RealEstateUpdateManyArgs>(args: SelectSubset<T, RealEstateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RealEstate.
     * @param {RealEstateUpsertArgs} args - Arguments to update or create a RealEstate.
     * @example
     * // Update or create a RealEstate
     * const realEstate = await prisma.realEstate.upsert({
     *   create: {
     *     // ... data to create a RealEstate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RealEstate we want to update
     *   }
     * })
     */
    upsert<T extends RealEstateUpsertArgs>(args: SelectSubset<T, RealEstateUpsertArgs<ExtArgs>>): Prisma__RealEstateClient<$Result.GetResult<Prisma.$RealEstatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RealEstates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateCountArgs} args - Arguments to filter RealEstates to count.
     * @example
     * // Count the number of RealEstates
     * const count = await prisma.realEstate.count({
     *   where: {
     *     // ... the filter for the RealEstates we want to count
     *   }
     * })
    **/
    count<T extends RealEstateCountArgs>(
      args?: Subset<T, RealEstateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RealEstateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RealEstate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RealEstateAggregateArgs>(args: Subset<T, RealEstateAggregateArgs>): Prisma.PrismaPromise<GetRealEstateAggregateType<T>>

    /**
     * Group by RealEstate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateGroupByArgs} args - Group by arguments.
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
      T extends RealEstateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RealEstateGroupByArgs['orderBy'] }
        : { orderBy?: RealEstateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RealEstateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRealEstateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RealEstate model
   */
  readonly fields: RealEstateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RealEstate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RealEstateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    reviews<T extends RealEstate$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, RealEstate$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the RealEstate model
   */ 
  interface RealEstateFieldRefs {
    readonly id: FieldRef<"RealEstate", 'Int'>
    readonly userId: FieldRef<"RealEstate", 'String'>
    readonly houseName: FieldRef<"RealEstate", 'String'>
    readonly category: FieldRef<"RealEstate", 'String'>
    readonly numberOfRooms: FieldRef<"RealEstate", 'Int'>
    readonly pictures: FieldRef<"RealEstate", 'String[]'>
    readonly mainPictureIndex: FieldRef<"RealEstate", 'Int'>
    readonly description: FieldRef<"RealEstate", 'String'>
    readonly state: FieldRef<"RealEstate", 'String'>
    readonly lga: FieldRef<"RealEstate", 'String'>
    readonly country: FieldRef<"RealEstate", 'String'>
    readonly nearby: FieldRef<"RealEstate", 'String[]'>
    readonly amenities: FieldRef<"RealEstate", 'String[]'>
    readonly address: FieldRef<"RealEstate", 'String'>
    readonly createdAt: FieldRef<"RealEstate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RealEstate findUnique
   */
  export type RealEstateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealEstate
     */
    select?: RealEstateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealEstateInclude<ExtArgs> | null
    /**
     * Filter, which RealEstate to fetch.
     */
    where: RealEstateWhereUniqueInput
  }

  /**
   * RealEstate findUniqueOrThrow
   */
  export type RealEstateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealEstate
     */
    select?: RealEstateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealEstateInclude<ExtArgs> | null
    /**
     * Filter, which RealEstate to fetch.
     */
    where: RealEstateWhereUniqueInput
  }

  /**
   * RealEstate findFirst
   */
  export type RealEstateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealEstate
     */
    select?: RealEstateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealEstateInclude<ExtArgs> | null
    /**
     * Filter, which RealEstate to fetch.
     */
    where?: RealEstateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstates to fetch.
     */
    orderBy?: RealEstateOrderByWithRelationInput | RealEstateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RealEstates.
     */
    cursor?: RealEstateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RealEstates.
     */
    distinct?: RealEstateScalarFieldEnum | RealEstateScalarFieldEnum[]
  }

  /**
   * RealEstate findFirstOrThrow
   */
  export type RealEstateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealEstate
     */
    select?: RealEstateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealEstateInclude<ExtArgs> | null
    /**
     * Filter, which RealEstate to fetch.
     */
    where?: RealEstateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstates to fetch.
     */
    orderBy?: RealEstateOrderByWithRelationInput | RealEstateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RealEstates.
     */
    cursor?: RealEstateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RealEstates.
     */
    distinct?: RealEstateScalarFieldEnum | RealEstateScalarFieldEnum[]
  }

  /**
   * RealEstate findMany
   */
  export type RealEstateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealEstate
     */
    select?: RealEstateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealEstateInclude<ExtArgs> | null
    /**
     * Filter, which RealEstates to fetch.
     */
    where?: RealEstateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstates to fetch.
     */
    orderBy?: RealEstateOrderByWithRelationInput | RealEstateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RealEstates.
     */
    cursor?: RealEstateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstates.
     */
    skip?: number
    distinct?: RealEstateScalarFieldEnum | RealEstateScalarFieldEnum[]
  }

  /**
   * RealEstate create
   */
  export type RealEstateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealEstate
     */
    select?: RealEstateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealEstateInclude<ExtArgs> | null
    /**
     * The data needed to create a RealEstate.
     */
    data: XOR<RealEstateCreateInput, RealEstateUncheckedCreateInput>
  }

  /**
   * RealEstate createMany
   */
  export type RealEstateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RealEstates.
     */
    data: RealEstateCreateManyInput | RealEstateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RealEstate createManyAndReturn
   */
  export type RealEstateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealEstate
     */
    select?: RealEstateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RealEstates.
     */
    data: RealEstateCreateManyInput | RealEstateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealEstateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RealEstate update
   */
  export type RealEstateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealEstate
     */
    select?: RealEstateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealEstateInclude<ExtArgs> | null
    /**
     * The data needed to update a RealEstate.
     */
    data: XOR<RealEstateUpdateInput, RealEstateUncheckedUpdateInput>
    /**
     * Choose, which RealEstate to update.
     */
    where: RealEstateWhereUniqueInput
  }

  /**
   * RealEstate updateMany
   */
  export type RealEstateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RealEstates.
     */
    data: XOR<RealEstateUpdateManyMutationInput, RealEstateUncheckedUpdateManyInput>
    /**
     * Filter which RealEstates to update
     */
    where?: RealEstateWhereInput
  }

  /**
   * RealEstate upsert
   */
  export type RealEstateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealEstate
     */
    select?: RealEstateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealEstateInclude<ExtArgs> | null
    /**
     * The filter to search for the RealEstate to update in case it exists.
     */
    where: RealEstateWhereUniqueInput
    /**
     * In case the RealEstate found by the `where` argument doesn't exist, create a new RealEstate with this data.
     */
    create: XOR<RealEstateCreateInput, RealEstateUncheckedCreateInput>
    /**
     * In case the RealEstate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RealEstateUpdateInput, RealEstateUncheckedUpdateInput>
  }

  /**
   * RealEstate delete
   */
  export type RealEstateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealEstate
     */
    select?: RealEstateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealEstateInclude<ExtArgs> | null
    /**
     * Filter which RealEstate to delete.
     */
    where: RealEstateWhereUniqueInput
  }

  /**
   * RealEstate deleteMany
   */
  export type RealEstateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RealEstates to delete
     */
    where?: RealEstateWhereInput
  }

  /**
   * RealEstate.reviews
   */
  export type RealEstate$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * RealEstate without action
   */
  export type RealEstateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealEstate
     */
    select?: RealEstateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealEstateInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    realEstateId: number | null
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    realEstateId: number | null
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    userId: string | null
    realEstateId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    realEstateId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    userId: number
    realEstateId: number
    rating: number
    comment: number
    propertyPictures: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    realEstateId?: true
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    realEstateId?: true
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    userId?: true
    realEstateId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    userId?: true
    realEstateId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    userId?: true
    realEstateId?: true
    rating?: true
    comment?: true
    propertyPictures?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    userId: string
    realEstateId: number
    rating: number
    comment: string | null
    propertyPictures: string[]
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    realEstateId?: boolean
    rating?: boolean
    comment?: boolean
    propertyPictures?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    realEstate?: boolean | RealEstateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    realEstateId?: boolean
    rating?: boolean
    comment?: boolean
    propertyPictures?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    realEstate?: boolean | RealEstateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    userId?: boolean
    realEstateId?: boolean
    rating?: boolean
    comment?: boolean
    propertyPictures?: boolean
    createdAt?: boolean
  }

  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    realEstate?: boolean | RealEstateDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    realEstate?: boolean | RealEstateDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      realEstate: Prisma.$RealEstatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      realEstateId: number
      rating: number
      comment: string | null
      propertyPictures: string[]
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    realEstate<T extends RealEstateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RealEstateDefaultArgs<ExtArgs>>): Prisma__RealEstateClient<$Result.GetResult<Prisma.$RealEstatePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Review model
   */ 
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly userId: FieldRef<"Review", 'String'>
    readonly realEstateId: FieldRef<"Review", 'Int'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly propertyPictures: FieldRef<"Review", 'String[]'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportAvgAggregateOutputType = {
    id: number | null
  }

  export type ReportSumAggregateOutputType = {
    id: number | null
  }

  export type ReportMinAggregateOutputType = {
    id: number | null
    userId: string | null
    reportCategory: string | null
    comment: string | null
    reportPriority: string | null
    reportableType: string | null
    createdAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    reportCategory: string | null
    comment: string | null
    reportPriority: string | null
    reportableType: string | null
    createdAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    userId: number
    reportCategory: number
    comment: number
    reportPriority: number
    reportableType: number
    createdAt: number
    _all: number
  }


  export type ReportAvgAggregateInputType = {
    id?: true
  }

  export type ReportSumAggregateInputType = {
    id?: true
  }

  export type ReportMinAggregateInputType = {
    id?: true
    userId?: true
    reportCategory?: true
    comment?: true
    reportPriority?: true
    reportableType?: true
    createdAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    userId?: true
    reportCategory?: true
    comment?: true
    reportPriority?: true
    reportableType?: true
    createdAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    userId?: true
    reportCategory?: true
    comment?: true
    reportPriority?: true
    reportableType?: true
    createdAt?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _avg?: ReportAvgAggregateInputType
    _sum?: ReportSumAggregateInputType
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: number
    userId: string
    reportCategory: string
    comment: string | null
    reportPriority: string
    reportableType: string
    createdAt: Date
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reportCategory?: boolean
    comment?: boolean
    reportPriority?: boolean
    reportableType?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reportCategory?: boolean
    comment?: boolean
    reportPriority?: boolean
    reportableType?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    userId?: boolean
    reportCategory?: boolean
    comment?: boolean
    reportPriority?: boolean
    reportableType?: boolean
    createdAt?: boolean
  }

  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      reportCategory: string
      comment: string | null
      reportPriority: string
      reportableType: string
      createdAt: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
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
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Report model
   */ 
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'Int'>
    readonly userId: FieldRef<"Report", 'String'>
    readonly reportCategory: FieldRef<"Report", 'String'>
    readonly comment: FieldRef<"Report", 'String'>
    readonly reportPriority: FieldRef<"Report", 'String'>
    readonly reportableType: FieldRef<"Report", 'String'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _avg: ChatMessageAvgAggregateOutputType | null
    _sum: ChatMessageSumAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageAvgAggregateOutputType = {
    id: number | null
  }

  export type ChatMessageSumAggregateOutputType = {
    id: number | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: number | null
    senderId: string | null
    receiverId: string | null
    message: string | null
    createdAt: Date | null
    isRead: boolean | null
    isDelivered: boolean | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: number | null
    senderId: string | null
    receiverId: string | null
    message: string | null
    createdAt: Date | null
    isRead: boolean | null
    isDelivered: boolean | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    message: number
    createdAt: number
    isRead: number
    isDelivered: number
    _all: number
  }


  export type ChatMessageAvgAggregateInputType = {
    id?: true
  }

  export type ChatMessageSumAggregateInputType = {
    id?: true
  }

  export type ChatMessageMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    message?: true
    createdAt?: true
    isRead?: true
    isDelivered?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    message?: true
    createdAt?: true
    isRead?: true
    isDelivered?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    message?: true
    createdAt?: true
    isRead?: true
    isDelivered?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _avg?: ChatMessageAvgAggregateInputType
    _sum?: ChatMessageSumAggregateInputType
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: number
    senderId: string
    receiverId: string
    message: string
    createdAt: Date
    isRead: boolean
    isDelivered: boolean
    _count: ChatMessageCountAggregateOutputType | null
    _avg: ChatMessageAvgAggregateOutputType | null
    _sum: ChatMessageSumAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    message?: boolean
    createdAt?: boolean
    isRead?: boolean
    isDelivered?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    message?: boolean
    createdAt?: boolean
    isRead?: boolean
    isDelivered?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    message?: boolean
    createdAt?: boolean
    isRead?: boolean
    isDelivered?: boolean
  }

  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      senderId: string
      receiverId: string
      message: string
      createdAt: Date
      isRead: boolean
      isDelivered: boolean
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
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
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ChatMessage model
   */ 
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'Int'>
    readonly senderId: FieldRef<"ChatMessage", 'String'>
    readonly receiverId: FieldRef<"ChatMessage", 'String'>
    readonly message: FieldRef<"ChatMessage", 'String'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
    readonly isRead: FieldRef<"ChatMessage", 'Boolean'>
    readonly isDelivered: FieldRef<"ChatMessage", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactSumAggregateOutputType = {
    id: number | null
  }

  export type ContactMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    message: number
    createdAt: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    id?: true
  }

  export type ContactSumAggregateInputType = {
    id?: true
  }

  export type ContactMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    message?: true
    createdAt?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    message?: true
    createdAt?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    message: string
    createdAt: Date
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
  }


  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      message: string
      createdAt: Date
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
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
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Contact model
   */ 
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'Int'>
    readonly firstName: FieldRef<"Contact", 'String'>
    readonly lastName: FieldRef<"Contact", 'String'>
    readonly email: FieldRef<"Contact", 'String'>
    readonly message: FieldRef<"Contact", 'String'>
    readonly createdAt: FieldRef<"Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
  }


  /**
   * Model JobMarket
   */

  export type AggregateJobMarket = {
    _count: JobMarketCountAggregateOutputType | null
    _avg: JobMarketAvgAggregateOutputType | null
    _sum: JobMarketSumAggregateOutputType | null
    _min: JobMarketMinAggregateOutputType | null
    _max: JobMarketMaxAggregateOutputType | null
  }

  export type JobMarketAvgAggregateOutputType = {
    id: number | null
  }

  export type JobMarketSumAggregateOutputType = {
    id: number | null
  }

  export type JobMarketMinAggregateOutputType = {
    id: number | null
    userId: string | null
    companyName: string | null
    jobTitle: string | null
    jobDescription: string | null
    workArrangement: string | null
    createdAt: Date | null
    updatedAt: Date | null
    applicationUrl: string | null
  }

  export type JobMarketMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    companyName: string | null
    jobTitle: string | null
    jobDescription: string | null
    workArrangement: string | null
    createdAt: Date | null
    updatedAt: Date | null
    applicationUrl: string | null
  }

  export type JobMarketCountAggregateOutputType = {
    id: number
    userId: number
    companyName: number
    jobTitle: number
    jobDescription: number
    keyResponsibilities: number
    qualifications: number
    workArrangement: number
    createdAt: number
    updatedAt: number
    applicationUrl: number
    _all: number
  }


  export type JobMarketAvgAggregateInputType = {
    id?: true
  }

  export type JobMarketSumAggregateInputType = {
    id?: true
  }

  export type JobMarketMinAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    jobTitle?: true
    jobDescription?: true
    workArrangement?: true
    createdAt?: true
    updatedAt?: true
    applicationUrl?: true
  }

  export type JobMarketMaxAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    jobTitle?: true
    jobDescription?: true
    workArrangement?: true
    createdAt?: true
    updatedAt?: true
    applicationUrl?: true
  }

  export type JobMarketCountAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    jobTitle?: true
    jobDescription?: true
    keyResponsibilities?: true
    qualifications?: true
    workArrangement?: true
    createdAt?: true
    updatedAt?: true
    applicationUrl?: true
    _all?: true
  }

  export type JobMarketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobMarket to aggregate.
     */
    where?: JobMarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobMarkets to fetch.
     */
    orderBy?: JobMarketOrderByWithRelationInput | JobMarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobMarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobMarkets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobMarkets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobMarkets
    **/
    _count?: true | JobMarketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobMarketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobMarketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMarketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMarketMaxAggregateInputType
  }

  export type GetJobMarketAggregateType<T extends JobMarketAggregateArgs> = {
        [P in keyof T & keyof AggregateJobMarket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobMarket[P]>
      : GetScalarType<T[P], AggregateJobMarket[P]>
  }




  export type JobMarketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobMarketWhereInput
    orderBy?: JobMarketOrderByWithAggregationInput | JobMarketOrderByWithAggregationInput[]
    by: JobMarketScalarFieldEnum[] | JobMarketScalarFieldEnum
    having?: JobMarketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobMarketCountAggregateInputType | true
    _avg?: JobMarketAvgAggregateInputType
    _sum?: JobMarketSumAggregateInputType
    _min?: JobMarketMinAggregateInputType
    _max?: JobMarketMaxAggregateInputType
  }

  export type JobMarketGroupByOutputType = {
    id: number
    userId: string
    companyName: string
    jobTitle: string
    jobDescription: string
    keyResponsibilities: string[]
    qualifications: string[]
    workArrangement: string
    createdAt: Date
    updatedAt: Date
    applicationUrl: string
    _count: JobMarketCountAggregateOutputType | null
    _avg: JobMarketAvgAggregateOutputType | null
    _sum: JobMarketSumAggregateOutputType | null
    _min: JobMarketMinAggregateOutputType | null
    _max: JobMarketMaxAggregateOutputType | null
  }

  type GetJobMarketGroupByPayload<T extends JobMarketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobMarketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobMarketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobMarketGroupByOutputType[P]>
            : GetScalarType<T[P], JobMarketGroupByOutputType[P]>
        }
      >
    >


  export type JobMarketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    jobTitle?: boolean
    jobDescription?: boolean
    keyResponsibilities?: boolean
    qualifications?: boolean
    workArrangement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicationUrl?: boolean
    user?: boolean | JobMarket$userArgs<ExtArgs>
  }, ExtArgs["result"]["jobMarket"]>

  export type JobMarketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    jobTitle?: boolean
    jobDescription?: boolean
    keyResponsibilities?: boolean
    qualifications?: boolean
    workArrangement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicationUrl?: boolean
    user?: boolean | JobMarket$userArgs<ExtArgs>
  }, ExtArgs["result"]["jobMarket"]>

  export type JobMarketSelectScalar = {
    id?: boolean
    userId?: boolean
    companyName?: boolean
    jobTitle?: boolean
    jobDescription?: boolean
    keyResponsibilities?: boolean
    qualifications?: boolean
    workArrangement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicationUrl?: boolean
  }

  export type JobMarketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | JobMarket$userArgs<ExtArgs>
  }
  export type JobMarketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | JobMarket$userArgs<ExtArgs>
  }

  export type $JobMarketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobMarket"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      companyName: string
      jobTitle: string
      jobDescription: string
      keyResponsibilities: string[]
      qualifications: string[]
      workArrangement: string
      createdAt: Date
      updatedAt: Date
      applicationUrl: string
    }, ExtArgs["result"]["jobMarket"]>
    composites: {}
  }

  type JobMarketGetPayload<S extends boolean | null | undefined | JobMarketDefaultArgs> = $Result.GetResult<Prisma.$JobMarketPayload, S>

  type JobMarketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JobMarketFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JobMarketCountAggregateInputType | true
    }

  export interface JobMarketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobMarket'], meta: { name: 'JobMarket' } }
    /**
     * Find zero or one JobMarket that matches the filter.
     * @param {JobMarketFindUniqueArgs} args - Arguments to find a JobMarket
     * @example
     * // Get one JobMarket
     * const jobMarket = await prisma.jobMarket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobMarketFindUniqueArgs>(args: SelectSubset<T, JobMarketFindUniqueArgs<ExtArgs>>): Prisma__JobMarketClient<$Result.GetResult<Prisma.$JobMarketPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one JobMarket that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {JobMarketFindUniqueOrThrowArgs} args - Arguments to find a JobMarket
     * @example
     * // Get one JobMarket
     * const jobMarket = await prisma.jobMarket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobMarketFindUniqueOrThrowArgs>(args: SelectSubset<T, JobMarketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobMarketClient<$Result.GetResult<Prisma.$JobMarketPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first JobMarket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMarketFindFirstArgs} args - Arguments to find a JobMarket
     * @example
     * // Get one JobMarket
     * const jobMarket = await prisma.jobMarket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobMarketFindFirstArgs>(args?: SelectSubset<T, JobMarketFindFirstArgs<ExtArgs>>): Prisma__JobMarketClient<$Result.GetResult<Prisma.$JobMarketPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first JobMarket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMarketFindFirstOrThrowArgs} args - Arguments to find a JobMarket
     * @example
     * // Get one JobMarket
     * const jobMarket = await prisma.jobMarket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobMarketFindFirstOrThrowArgs>(args?: SelectSubset<T, JobMarketFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobMarketClient<$Result.GetResult<Prisma.$JobMarketPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more JobMarkets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMarketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobMarkets
     * const jobMarkets = await prisma.jobMarket.findMany()
     * 
     * // Get first 10 JobMarkets
     * const jobMarkets = await prisma.jobMarket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobMarketWithIdOnly = await prisma.jobMarket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobMarketFindManyArgs>(args?: SelectSubset<T, JobMarketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobMarketPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a JobMarket.
     * @param {JobMarketCreateArgs} args - Arguments to create a JobMarket.
     * @example
     * // Create one JobMarket
     * const JobMarket = await prisma.jobMarket.create({
     *   data: {
     *     // ... data to create a JobMarket
     *   }
     * })
     * 
     */
    create<T extends JobMarketCreateArgs>(args: SelectSubset<T, JobMarketCreateArgs<ExtArgs>>): Prisma__JobMarketClient<$Result.GetResult<Prisma.$JobMarketPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many JobMarkets.
     * @param {JobMarketCreateManyArgs} args - Arguments to create many JobMarkets.
     * @example
     * // Create many JobMarkets
     * const jobMarket = await prisma.jobMarket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobMarketCreateManyArgs>(args?: SelectSubset<T, JobMarketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobMarkets and returns the data saved in the database.
     * @param {JobMarketCreateManyAndReturnArgs} args - Arguments to create many JobMarkets.
     * @example
     * // Create many JobMarkets
     * const jobMarket = await prisma.jobMarket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobMarkets and only return the `id`
     * const jobMarketWithIdOnly = await prisma.jobMarket.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobMarketCreateManyAndReturnArgs>(args?: SelectSubset<T, JobMarketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobMarketPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a JobMarket.
     * @param {JobMarketDeleteArgs} args - Arguments to delete one JobMarket.
     * @example
     * // Delete one JobMarket
     * const JobMarket = await prisma.jobMarket.delete({
     *   where: {
     *     // ... filter to delete one JobMarket
     *   }
     * })
     * 
     */
    delete<T extends JobMarketDeleteArgs>(args: SelectSubset<T, JobMarketDeleteArgs<ExtArgs>>): Prisma__JobMarketClient<$Result.GetResult<Prisma.$JobMarketPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one JobMarket.
     * @param {JobMarketUpdateArgs} args - Arguments to update one JobMarket.
     * @example
     * // Update one JobMarket
     * const jobMarket = await prisma.jobMarket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobMarketUpdateArgs>(args: SelectSubset<T, JobMarketUpdateArgs<ExtArgs>>): Prisma__JobMarketClient<$Result.GetResult<Prisma.$JobMarketPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more JobMarkets.
     * @param {JobMarketDeleteManyArgs} args - Arguments to filter JobMarkets to delete.
     * @example
     * // Delete a few JobMarkets
     * const { count } = await prisma.jobMarket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobMarketDeleteManyArgs>(args?: SelectSubset<T, JobMarketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobMarkets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMarketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobMarkets
     * const jobMarket = await prisma.jobMarket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobMarketUpdateManyArgs>(args: SelectSubset<T, JobMarketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JobMarket.
     * @param {JobMarketUpsertArgs} args - Arguments to update or create a JobMarket.
     * @example
     * // Update or create a JobMarket
     * const jobMarket = await prisma.jobMarket.upsert({
     *   create: {
     *     // ... data to create a JobMarket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobMarket we want to update
     *   }
     * })
     */
    upsert<T extends JobMarketUpsertArgs>(args: SelectSubset<T, JobMarketUpsertArgs<ExtArgs>>): Prisma__JobMarketClient<$Result.GetResult<Prisma.$JobMarketPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of JobMarkets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMarketCountArgs} args - Arguments to filter JobMarkets to count.
     * @example
     * // Count the number of JobMarkets
     * const count = await prisma.jobMarket.count({
     *   where: {
     *     // ... the filter for the JobMarkets we want to count
     *   }
     * })
    **/
    count<T extends JobMarketCountArgs>(
      args?: Subset<T, JobMarketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobMarketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobMarket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMarketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobMarketAggregateArgs>(args: Subset<T, JobMarketAggregateArgs>): Prisma.PrismaPromise<GetJobMarketAggregateType<T>>

    /**
     * Group by JobMarket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMarketGroupByArgs} args - Group by arguments.
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
      T extends JobMarketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobMarketGroupByArgs['orderBy'] }
        : { orderBy?: JobMarketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobMarketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobMarketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobMarket model
   */
  readonly fields: JobMarketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobMarket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobMarketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends JobMarket$userArgs<ExtArgs> = {}>(args?: Subset<T, JobMarket$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the JobMarket model
   */ 
  interface JobMarketFieldRefs {
    readonly id: FieldRef<"JobMarket", 'Int'>
    readonly userId: FieldRef<"JobMarket", 'String'>
    readonly companyName: FieldRef<"JobMarket", 'String'>
    readonly jobTitle: FieldRef<"JobMarket", 'String'>
    readonly jobDescription: FieldRef<"JobMarket", 'String'>
    readonly keyResponsibilities: FieldRef<"JobMarket", 'String[]'>
    readonly qualifications: FieldRef<"JobMarket", 'String[]'>
    readonly workArrangement: FieldRef<"JobMarket", 'String'>
    readonly createdAt: FieldRef<"JobMarket", 'DateTime'>
    readonly updatedAt: FieldRef<"JobMarket", 'DateTime'>
    readonly applicationUrl: FieldRef<"JobMarket", 'String'>
  }
    

  // Custom InputTypes
  /**
   * JobMarket findUnique
   */
  export type JobMarketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMarket
     */
    select?: JobMarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMarketInclude<ExtArgs> | null
    /**
     * Filter, which JobMarket to fetch.
     */
    where: JobMarketWhereUniqueInput
  }

  /**
   * JobMarket findUniqueOrThrow
   */
  export type JobMarketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMarket
     */
    select?: JobMarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMarketInclude<ExtArgs> | null
    /**
     * Filter, which JobMarket to fetch.
     */
    where: JobMarketWhereUniqueInput
  }

  /**
   * JobMarket findFirst
   */
  export type JobMarketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMarket
     */
    select?: JobMarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMarketInclude<ExtArgs> | null
    /**
     * Filter, which JobMarket to fetch.
     */
    where?: JobMarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobMarkets to fetch.
     */
    orderBy?: JobMarketOrderByWithRelationInput | JobMarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobMarkets.
     */
    cursor?: JobMarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobMarkets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobMarkets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobMarkets.
     */
    distinct?: JobMarketScalarFieldEnum | JobMarketScalarFieldEnum[]
  }

  /**
   * JobMarket findFirstOrThrow
   */
  export type JobMarketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMarket
     */
    select?: JobMarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMarketInclude<ExtArgs> | null
    /**
     * Filter, which JobMarket to fetch.
     */
    where?: JobMarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobMarkets to fetch.
     */
    orderBy?: JobMarketOrderByWithRelationInput | JobMarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobMarkets.
     */
    cursor?: JobMarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobMarkets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobMarkets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobMarkets.
     */
    distinct?: JobMarketScalarFieldEnum | JobMarketScalarFieldEnum[]
  }

  /**
   * JobMarket findMany
   */
  export type JobMarketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMarket
     */
    select?: JobMarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMarketInclude<ExtArgs> | null
    /**
     * Filter, which JobMarkets to fetch.
     */
    where?: JobMarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobMarkets to fetch.
     */
    orderBy?: JobMarketOrderByWithRelationInput | JobMarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobMarkets.
     */
    cursor?: JobMarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobMarkets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobMarkets.
     */
    skip?: number
    distinct?: JobMarketScalarFieldEnum | JobMarketScalarFieldEnum[]
  }

  /**
   * JobMarket create
   */
  export type JobMarketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMarket
     */
    select?: JobMarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMarketInclude<ExtArgs> | null
    /**
     * The data needed to create a JobMarket.
     */
    data: XOR<JobMarketCreateInput, JobMarketUncheckedCreateInput>
  }

  /**
   * JobMarket createMany
   */
  export type JobMarketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobMarkets.
     */
    data: JobMarketCreateManyInput | JobMarketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobMarket createManyAndReturn
   */
  export type JobMarketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMarket
     */
    select?: JobMarketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many JobMarkets.
     */
    data: JobMarketCreateManyInput | JobMarketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMarketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobMarket update
   */
  export type JobMarketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMarket
     */
    select?: JobMarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMarketInclude<ExtArgs> | null
    /**
     * The data needed to update a JobMarket.
     */
    data: XOR<JobMarketUpdateInput, JobMarketUncheckedUpdateInput>
    /**
     * Choose, which JobMarket to update.
     */
    where: JobMarketWhereUniqueInput
  }

  /**
   * JobMarket updateMany
   */
  export type JobMarketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobMarkets.
     */
    data: XOR<JobMarketUpdateManyMutationInput, JobMarketUncheckedUpdateManyInput>
    /**
     * Filter which JobMarkets to update
     */
    where?: JobMarketWhereInput
  }

  /**
   * JobMarket upsert
   */
  export type JobMarketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMarket
     */
    select?: JobMarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMarketInclude<ExtArgs> | null
    /**
     * The filter to search for the JobMarket to update in case it exists.
     */
    where: JobMarketWhereUniqueInput
    /**
     * In case the JobMarket found by the `where` argument doesn't exist, create a new JobMarket with this data.
     */
    create: XOR<JobMarketCreateInput, JobMarketUncheckedCreateInput>
    /**
     * In case the JobMarket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobMarketUpdateInput, JobMarketUncheckedUpdateInput>
  }

  /**
   * JobMarket delete
   */
  export type JobMarketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMarket
     */
    select?: JobMarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMarketInclude<ExtArgs> | null
    /**
     * Filter which JobMarket to delete.
     */
    where: JobMarketWhereUniqueInput
  }

  /**
   * JobMarket deleteMany
   */
  export type JobMarketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobMarkets to delete
     */
    where?: JobMarketWhereInput
  }

  /**
   * JobMarket.user
   */
  export type JobMarket$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * JobMarket without action
   */
  export type JobMarketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMarket
     */
    select?: JobMarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMarketInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    userId: string | null
    message: string | null
    createdAt: Date | null
    status: string | null
    type: string | null
    priority: string | null
    actionButtonLabel: string | null
    actionButtonLink: string | null
    relatedResourceLink: string | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    message: string | null
    createdAt: Date | null
    status: string | null
    type: string | null
    priority: string | null
    actionButtonLabel: string | null
    actionButtonLink: string | null
    relatedResourceLink: string | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    message: number
    createdAt: number
    status: number
    type: number
    priority: number
    actionButtonLabel: number
    actionButtonLink: number
    relatedResourceLink: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    createdAt?: true
    status?: true
    type?: true
    priority?: true
    actionButtonLabel?: true
    actionButtonLink?: true
    relatedResourceLink?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    createdAt?: true
    status?: true
    type?: true
    priority?: true
    actionButtonLabel?: true
    actionButtonLink?: true
    relatedResourceLink?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    createdAt?: true
    status?: true
    type?: true
    priority?: true
    actionButtonLabel?: true
    actionButtonLink?: true
    relatedResourceLink?: true
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
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
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
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    userId: string
    message: string
    createdAt: Date
    status: string
    type: string
    priority: string
    actionButtonLabel: string | null
    actionButtonLink: string | null
    relatedResourceLink: string | null
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
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
    message?: boolean
    createdAt?: boolean
    status?: boolean
    type?: boolean
    priority?: boolean
    actionButtonLabel?: boolean
    actionButtonLink?: boolean
    relatedResourceLink?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    createdAt?: boolean
    status?: boolean
    type?: boolean
    priority?: boolean
    actionButtonLabel?: boolean
    actionButtonLink?: boolean
    relatedResourceLink?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    message?: boolean
    createdAt?: boolean
    status?: boolean
    type?: boolean
    priority?: boolean
    actionButtonLabel?: boolean
    actionButtonLink?: boolean
    relatedResourceLink?: boolean
  }

  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      message: string
      createdAt: Date
      status: string
      type: string
      priority: string
      actionButtonLabel: string | null
      actionButtonLink: string | null
      relatedResourceLink: string | null
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany">>

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
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
    readonly id: FieldRef<"Notification", 'Int'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly status: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly priority: FieldRef<"Notification", 'String'>
    readonly actionButtonLabel: FieldRef<"Notification", 'String'>
    readonly actionButtonLink: FieldRef<"Notification", 'String'>
    readonly relatedResourceLink: FieldRef<"Notification", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model PropertyMarket
   */

  export type AggregatePropertyMarket = {
    _count: PropertyMarketCountAggregateOutputType | null
    _avg: PropertyMarketAvgAggregateOutputType | null
    _sum: PropertyMarketSumAggregateOutputType | null
    _min: PropertyMarketMinAggregateOutputType | null
    _max: PropertyMarketMaxAggregateOutputType | null
  }

  export type PropertyMarketAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type PropertyMarketSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type PropertyMarketMinAggregateOutputType = {
    id: number | null
    userId: string | null
    title: string | null
    description: string | null
    price: number | null
    location: string | null
    createdAt: Date | null
  }

  export type PropertyMarketMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    title: string | null
    description: string | null
    price: number | null
    location: string | null
    createdAt: Date | null
  }

  export type PropertyMarketCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    price: number
    images: number
    location: number
    createdAt: number
    _all: number
  }


  export type PropertyMarketAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type PropertyMarketSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type PropertyMarketMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    price?: true
    location?: true
    createdAt?: true
  }

  export type PropertyMarketMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    price?: true
    location?: true
    createdAt?: true
  }

  export type PropertyMarketCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    price?: true
    images?: true
    location?: true
    createdAt?: true
    _all?: true
  }

  export type PropertyMarketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyMarket to aggregate.
     */
    where?: PropertyMarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyMarkets to fetch.
     */
    orderBy?: PropertyMarketOrderByWithRelationInput | PropertyMarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyMarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyMarkets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyMarkets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyMarkets
    **/
    _count?: true | PropertyMarketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyMarketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertyMarketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMarketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMarketMaxAggregateInputType
  }

  export type GetPropertyMarketAggregateType<T extends PropertyMarketAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyMarket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyMarket[P]>
      : GetScalarType<T[P], AggregatePropertyMarket[P]>
  }




  export type PropertyMarketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyMarketWhereInput
    orderBy?: PropertyMarketOrderByWithAggregationInput | PropertyMarketOrderByWithAggregationInput[]
    by: PropertyMarketScalarFieldEnum[] | PropertyMarketScalarFieldEnum
    having?: PropertyMarketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyMarketCountAggregateInputType | true
    _avg?: PropertyMarketAvgAggregateInputType
    _sum?: PropertyMarketSumAggregateInputType
    _min?: PropertyMarketMinAggregateInputType
    _max?: PropertyMarketMaxAggregateInputType
  }

  export type PropertyMarketGroupByOutputType = {
    id: number
    userId: string
    title: string
    description: string
    price: number
    images: string[]
    location: string
    createdAt: Date
    _count: PropertyMarketCountAggregateOutputType | null
    _avg: PropertyMarketAvgAggregateOutputType | null
    _sum: PropertyMarketSumAggregateOutputType | null
    _min: PropertyMarketMinAggregateOutputType | null
    _max: PropertyMarketMaxAggregateOutputType | null
  }

  type GetPropertyMarketGroupByPayload<T extends PropertyMarketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyMarketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyMarketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyMarketGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyMarketGroupByOutputType[P]>
        }
      >
    >


  export type PropertyMarketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    images?: boolean
    location?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyMarket"]>

  export type PropertyMarketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    images?: boolean
    location?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyMarket"]>

  export type PropertyMarketSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    images?: boolean
    location?: boolean
    createdAt?: boolean
  }

  export type PropertyMarketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PropertyMarketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PropertyMarketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyMarket"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      title: string
      description: string
      price: number
      images: string[]
      location: string
      createdAt: Date
    }, ExtArgs["result"]["propertyMarket"]>
    composites: {}
  }

  type PropertyMarketGetPayload<S extends boolean | null | undefined | PropertyMarketDefaultArgs> = $Result.GetResult<Prisma.$PropertyMarketPayload, S>

  type PropertyMarketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PropertyMarketFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PropertyMarketCountAggregateInputType | true
    }

  export interface PropertyMarketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyMarket'], meta: { name: 'PropertyMarket' } }
    /**
     * Find zero or one PropertyMarket that matches the filter.
     * @param {PropertyMarketFindUniqueArgs} args - Arguments to find a PropertyMarket
     * @example
     * // Get one PropertyMarket
     * const propertyMarket = await prisma.propertyMarket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyMarketFindUniqueArgs>(args: SelectSubset<T, PropertyMarketFindUniqueArgs<ExtArgs>>): Prisma__PropertyMarketClient<$Result.GetResult<Prisma.$PropertyMarketPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PropertyMarket that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PropertyMarketFindUniqueOrThrowArgs} args - Arguments to find a PropertyMarket
     * @example
     * // Get one PropertyMarket
     * const propertyMarket = await prisma.propertyMarket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyMarketFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyMarketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyMarketClient<$Result.GetResult<Prisma.$PropertyMarketPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PropertyMarket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyMarketFindFirstArgs} args - Arguments to find a PropertyMarket
     * @example
     * // Get one PropertyMarket
     * const propertyMarket = await prisma.propertyMarket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyMarketFindFirstArgs>(args?: SelectSubset<T, PropertyMarketFindFirstArgs<ExtArgs>>): Prisma__PropertyMarketClient<$Result.GetResult<Prisma.$PropertyMarketPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PropertyMarket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyMarketFindFirstOrThrowArgs} args - Arguments to find a PropertyMarket
     * @example
     * // Get one PropertyMarket
     * const propertyMarket = await prisma.propertyMarket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyMarketFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyMarketFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyMarketClient<$Result.GetResult<Prisma.$PropertyMarketPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PropertyMarkets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyMarketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyMarkets
     * const propertyMarkets = await prisma.propertyMarket.findMany()
     * 
     * // Get first 10 PropertyMarkets
     * const propertyMarkets = await prisma.propertyMarket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyMarketWithIdOnly = await prisma.propertyMarket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyMarketFindManyArgs>(args?: SelectSubset<T, PropertyMarketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyMarketPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PropertyMarket.
     * @param {PropertyMarketCreateArgs} args - Arguments to create a PropertyMarket.
     * @example
     * // Create one PropertyMarket
     * const PropertyMarket = await prisma.propertyMarket.create({
     *   data: {
     *     // ... data to create a PropertyMarket
     *   }
     * })
     * 
     */
    create<T extends PropertyMarketCreateArgs>(args: SelectSubset<T, PropertyMarketCreateArgs<ExtArgs>>): Prisma__PropertyMarketClient<$Result.GetResult<Prisma.$PropertyMarketPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PropertyMarkets.
     * @param {PropertyMarketCreateManyArgs} args - Arguments to create many PropertyMarkets.
     * @example
     * // Create many PropertyMarkets
     * const propertyMarket = await prisma.propertyMarket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyMarketCreateManyArgs>(args?: SelectSubset<T, PropertyMarketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropertyMarkets and returns the data saved in the database.
     * @param {PropertyMarketCreateManyAndReturnArgs} args - Arguments to create many PropertyMarkets.
     * @example
     * // Create many PropertyMarkets
     * const propertyMarket = await prisma.propertyMarket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropertyMarkets and only return the `id`
     * const propertyMarketWithIdOnly = await prisma.propertyMarket.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyMarketCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyMarketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyMarketPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PropertyMarket.
     * @param {PropertyMarketDeleteArgs} args - Arguments to delete one PropertyMarket.
     * @example
     * // Delete one PropertyMarket
     * const PropertyMarket = await prisma.propertyMarket.delete({
     *   where: {
     *     // ... filter to delete one PropertyMarket
     *   }
     * })
     * 
     */
    delete<T extends PropertyMarketDeleteArgs>(args: SelectSubset<T, PropertyMarketDeleteArgs<ExtArgs>>): Prisma__PropertyMarketClient<$Result.GetResult<Prisma.$PropertyMarketPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PropertyMarket.
     * @param {PropertyMarketUpdateArgs} args - Arguments to update one PropertyMarket.
     * @example
     * // Update one PropertyMarket
     * const propertyMarket = await prisma.propertyMarket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyMarketUpdateArgs>(args: SelectSubset<T, PropertyMarketUpdateArgs<ExtArgs>>): Prisma__PropertyMarketClient<$Result.GetResult<Prisma.$PropertyMarketPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PropertyMarkets.
     * @param {PropertyMarketDeleteManyArgs} args - Arguments to filter PropertyMarkets to delete.
     * @example
     * // Delete a few PropertyMarkets
     * const { count } = await prisma.propertyMarket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyMarketDeleteManyArgs>(args?: SelectSubset<T, PropertyMarketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyMarkets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyMarketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyMarkets
     * const propertyMarket = await prisma.propertyMarket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyMarketUpdateManyArgs>(args: SelectSubset<T, PropertyMarketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PropertyMarket.
     * @param {PropertyMarketUpsertArgs} args - Arguments to update or create a PropertyMarket.
     * @example
     * // Update or create a PropertyMarket
     * const propertyMarket = await prisma.propertyMarket.upsert({
     *   create: {
     *     // ... data to create a PropertyMarket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyMarket we want to update
     *   }
     * })
     */
    upsert<T extends PropertyMarketUpsertArgs>(args: SelectSubset<T, PropertyMarketUpsertArgs<ExtArgs>>): Prisma__PropertyMarketClient<$Result.GetResult<Prisma.$PropertyMarketPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PropertyMarkets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyMarketCountArgs} args - Arguments to filter PropertyMarkets to count.
     * @example
     * // Count the number of PropertyMarkets
     * const count = await prisma.propertyMarket.count({
     *   where: {
     *     // ... the filter for the PropertyMarkets we want to count
     *   }
     * })
    **/
    count<T extends PropertyMarketCountArgs>(
      args?: Subset<T, PropertyMarketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyMarketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyMarket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyMarketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyMarketAggregateArgs>(args: Subset<T, PropertyMarketAggregateArgs>): Prisma.PrismaPromise<GetPropertyMarketAggregateType<T>>

    /**
     * Group by PropertyMarket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyMarketGroupByArgs} args - Group by arguments.
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
      T extends PropertyMarketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyMarketGroupByArgs['orderBy'] }
        : { orderBy?: PropertyMarketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyMarketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyMarketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyMarket model
   */
  readonly fields: PropertyMarketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyMarket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyMarketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PropertyMarket model
   */ 
  interface PropertyMarketFieldRefs {
    readonly id: FieldRef<"PropertyMarket", 'Int'>
    readonly userId: FieldRef<"PropertyMarket", 'String'>
    readonly title: FieldRef<"PropertyMarket", 'String'>
    readonly description: FieldRef<"PropertyMarket", 'String'>
    readonly price: FieldRef<"PropertyMarket", 'Float'>
    readonly images: FieldRef<"PropertyMarket", 'String[]'>
    readonly location: FieldRef<"PropertyMarket", 'String'>
    readonly createdAt: FieldRef<"PropertyMarket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PropertyMarket findUnique
   */
  export type PropertyMarketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMarket
     */
    select?: PropertyMarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMarketInclude<ExtArgs> | null
    /**
     * Filter, which PropertyMarket to fetch.
     */
    where: PropertyMarketWhereUniqueInput
  }

  /**
   * PropertyMarket findUniqueOrThrow
   */
  export type PropertyMarketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMarket
     */
    select?: PropertyMarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMarketInclude<ExtArgs> | null
    /**
     * Filter, which PropertyMarket to fetch.
     */
    where: PropertyMarketWhereUniqueInput
  }

  /**
   * PropertyMarket findFirst
   */
  export type PropertyMarketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMarket
     */
    select?: PropertyMarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMarketInclude<ExtArgs> | null
    /**
     * Filter, which PropertyMarket to fetch.
     */
    where?: PropertyMarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyMarkets to fetch.
     */
    orderBy?: PropertyMarketOrderByWithRelationInput | PropertyMarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyMarkets.
     */
    cursor?: PropertyMarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyMarkets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyMarkets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyMarkets.
     */
    distinct?: PropertyMarketScalarFieldEnum | PropertyMarketScalarFieldEnum[]
  }

  /**
   * PropertyMarket findFirstOrThrow
   */
  export type PropertyMarketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMarket
     */
    select?: PropertyMarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMarketInclude<ExtArgs> | null
    /**
     * Filter, which PropertyMarket to fetch.
     */
    where?: PropertyMarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyMarkets to fetch.
     */
    orderBy?: PropertyMarketOrderByWithRelationInput | PropertyMarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyMarkets.
     */
    cursor?: PropertyMarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyMarkets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyMarkets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyMarkets.
     */
    distinct?: PropertyMarketScalarFieldEnum | PropertyMarketScalarFieldEnum[]
  }

  /**
   * PropertyMarket findMany
   */
  export type PropertyMarketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMarket
     */
    select?: PropertyMarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMarketInclude<ExtArgs> | null
    /**
     * Filter, which PropertyMarkets to fetch.
     */
    where?: PropertyMarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyMarkets to fetch.
     */
    orderBy?: PropertyMarketOrderByWithRelationInput | PropertyMarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyMarkets.
     */
    cursor?: PropertyMarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyMarkets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyMarkets.
     */
    skip?: number
    distinct?: PropertyMarketScalarFieldEnum | PropertyMarketScalarFieldEnum[]
  }

  /**
   * PropertyMarket create
   */
  export type PropertyMarketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMarket
     */
    select?: PropertyMarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMarketInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyMarket.
     */
    data: XOR<PropertyMarketCreateInput, PropertyMarketUncheckedCreateInput>
  }

  /**
   * PropertyMarket createMany
   */
  export type PropertyMarketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyMarkets.
     */
    data: PropertyMarketCreateManyInput | PropertyMarketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyMarket createManyAndReturn
   */
  export type PropertyMarketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMarket
     */
    select?: PropertyMarketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PropertyMarkets.
     */
    data: PropertyMarketCreateManyInput | PropertyMarketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMarketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyMarket update
   */
  export type PropertyMarketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMarket
     */
    select?: PropertyMarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMarketInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyMarket.
     */
    data: XOR<PropertyMarketUpdateInput, PropertyMarketUncheckedUpdateInput>
    /**
     * Choose, which PropertyMarket to update.
     */
    where: PropertyMarketWhereUniqueInput
  }

  /**
   * PropertyMarket updateMany
   */
  export type PropertyMarketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyMarkets.
     */
    data: XOR<PropertyMarketUpdateManyMutationInput, PropertyMarketUncheckedUpdateManyInput>
    /**
     * Filter which PropertyMarkets to update
     */
    where?: PropertyMarketWhereInput
  }

  /**
   * PropertyMarket upsert
   */
  export type PropertyMarketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMarket
     */
    select?: PropertyMarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMarketInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyMarket to update in case it exists.
     */
    where: PropertyMarketWhereUniqueInput
    /**
     * In case the PropertyMarket found by the `where` argument doesn't exist, create a new PropertyMarket with this data.
     */
    create: XOR<PropertyMarketCreateInput, PropertyMarketUncheckedCreateInput>
    /**
     * In case the PropertyMarket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyMarketUpdateInput, PropertyMarketUncheckedUpdateInput>
  }

  /**
   * PropertyMarket delete
   */
  export type PropertyMarketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMarket
     */
    select?: PropertyMarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMarketInclude<ExtArgs> | null
    /**
     * Filter which PropertyMarket to delete.
     */
    where: PropertyMarketWhereUniqueInput
  }

  /**
   * PropertyMarket deleteMany
   */
  export type PropertyMarketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyMarkets to delete
     */
    where?: PropertyMarketWhereInput
  }

  /**
   * PropertyMarket without action
   */
  export type PropertyMarketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMarket
     */
    select?: PropertyMarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMarketInclude<ExtArgs> | null
  }


  /**
   * Model Reminder
   */

  export type AggregateReminder = {
    _count: ReminderCountAggregateOutputType | null
    _avg: ReminderAvgAggregateOutputType | null
    _sum: ReminderSumAggregateOutputType | null
    _min: ReminderMinAggregateOutputType | null
    _max: ReminderMaxAggregateOutputType | null
  }

  export type ReminderAvgAggregateOutputType = {
    id: number | null
  }

  export type ReminderSumAggregateOutputType = {
    id: number | null
  }

  export type ReminderMinAggregateOutputType = {
    id: number | null
    userId: string | null
    title: string | null
    location: string | null
    time: Date | null
    dueDate: Date | null
    note: string | null
    appointmentContactNumber: string | null
    status: boolean | null
  }

  export type ReminderMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    title: string | null
    location: string | null
    time: Date | null
    dueDate: Date | null
    note: string | null
    appointmentContactNumber: string | null
    status: boolean | null
  }

  export type ReminderCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    location: number
    time: number
    dueDate: number
    note: number
    appointmentContactNumber: number
    status: number
    _all: number
  }


  export type ReminderAvgAggregateInputType = {
    id?: true
  }

  export type ReminderSumAggregateInputType = {
    id?: true
  }

  export type ReminderMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    location?: true
    time?: true
    dueDate?: true
    note?: true
    appointmentContactNumber?: true
    status?: true
  }

  export type ReminderMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    location?: true
    time?: true
    dueDate?: true
    note?: true
    appointmentContactNumber?: true
    status?: true
  }

  export type ReminderCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    location?: true
    time?: true
    dueDate?: true
    note?: true
    appointmentContactNumber?: true
    status?: true
    _all?: true
  }

  export type ReminderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reminder to aggregate.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reminders
    **/
    _count?: true | ReminderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReminderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReminderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReminderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReminderMaxAggregateInputType
  }

  export type GetReminderAggregateType<T extends ReminderAggregateArgs> = {
        [P in keyof T & keyof AggregateReminder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReminder[P]>
      : GetScalarType<T[P], AggregateReminder[P]>
  }




  export type ReminderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithAggregationInput | ReminderOrderByWithAggregationInput[]
    by: ReminderScalarFieldEnum[] | ReminderScalarFieldEnum
    having?: ReminderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReminderCountAggregateInputType | true
    _avg?: ReminderAvgAggregateInputType
    _sum?: ReminderSumAggregateInputType
    _min?: ReminderMinAggregateInputType
    _max?: ReminderMaxAggregateInputType
  }

  export type ReminderGroupByOutputType = {
    id: number
    userId: string
    title: string
    location: string
    time: Date
    dueDate: Date
    note: string
    appointmentContactNumber: string
    status: boolean
    _count: ReminderCountAggregateOutputType | null
    _avg: ReminderAvgAggregateOutputType | null
    _sum: ReminderSumAggregateOutputType | null
    _min: ReminderMinAggregateOutputType | null
    _max: ReminderMaxAggregateOutputType | null
  }

  type GetReminderGroupByPayload<T extends ReminderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReminderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReminderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReminderGroupByOutputType[P]>
            : GetScalarType<T[P], ReminderGroupByOutputType[P]>
        }
      >
    >


  export type ReminderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    location?: boolean
    time?: boolean
    dueDate?: boolean
    note?: boolean
    appointmentContactNumber?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    location?: boolean
    time?: boolean
    dueDate?: boolean
    note?: boolean
    appointmentContactNumber?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    location?: boolean
    time?: boolean
    dueDate?: boolean
    note?: boolean
    appointmentContactNumber?: boolean
    status?: boolean
  }

  export type ReminderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReminderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReminderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reminder"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      title: string
      location: string
      time: Date
      dueDate: Date
      note: string
      appointmentContactNumber: string
      status: boolean
    }, ExtArgs["result"]["reminder"]>
    composites: {}
  }

  type ReminderGetPayload<S extends boolean | null | undefined | ReminderDefaultArgs> = $Result.GetResult<Prisma.$ReminderPayload, S>

  type ReminderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReminderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReminderCountAggregateInputType | true
    }

  export interface ReminderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reminder'], meta: { name: 'Reminder' } }
    /**
     * Find zero or one Reminder that matches the filter.
     * @param {ReminderFindUniqueArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReminderFindUniqueArgs>(args: SelectSubset<T, ReminderFindUniqueArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reminder that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReminderFindUniqueOrThrowArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReminderFindUniqueOrThrowArgs>(args: SelectSubset<T, ReminderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reminder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindFirstArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReminderFindFirstArgs>(args?: SelectSubset<T, ReminderFindFirstArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reminder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindFirstOrThrowArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReminderFindFirstOrThrowArgs>(args?: SelectSubset<T, ReminderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reminders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reminders
     * const reminders = await prisma.reminder.findMany()
     * 
     * // Get first 10 Reminders
     * const reminders = await prisma.reminder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reminderWithIdOnly = await prisma.reminder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReminderFindManyArgs>(args?: SelectSubset<T, ReminderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reminder.
     * @param {ReminderCreateArgs} args - Arguments to create a Reminder.
     * @example
     * // Create one Reminder
     * const Reminder = await prisma.reminder.create({
     *   data: {
     *     // ... data to create a Reminder
     *   }
     * })
     * 
     */
    create<T extends ReminderCreateArgs>(args: SelectSubset<T, ReminderCreateArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reminders.
     * @param {ReminderCreateManyArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminder = await prisma.reminder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReminderCreateManyArgs>(args?: SelectSubset<T, ReminderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reminders and returns the data saved in the database.
     * @param {ReminderCreateManyAndReturnArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminder = await prisma.reminder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reminders and only return the `id`
     * const reminderWithIdOnly = await prisma.reminder.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReminderCreateManyAndReturnArgs>(args?: SelectSubset<T, ReminderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Reminder.
     * @param {ReminderDeleteArgs} args - Arguments to delete one Reminder.
     * @example
     * // Delete one Reminder
     * const Reminder = await prisma.reminder.delete({
     *   where: {
     *     // ... filter to delete one Reminder
     *   }
     * })
     * 
     */
    delete<T extends ReminderDeleteArgs>(args: SelectSubset<T, ReminderDeleteArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reminder.
     * @param {ReminderUpdateArgs} args - Arguments to update one Reminder.
     * @example
     * // Update one Reminder
     * const reminder = await prisma.reminder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReminderUpdateArgs>(args: SelectSubset<T, ReminderUpdateArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reminders.
     * @param {ReminderDeleteManyArgs} args - Arguments to filter Reminders to delete.
     * @example
     * // Delete a few Reminders
     * const { count } = await prisma.reminder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReminderDeleteManyArgs>(args?: SelectSubset<T, ReminderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reminders
     * const reminder = await prisma.reminder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReminderUpdateManyArgs>(args: SelectSubset<T, ReminderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reminder.
     * @param {ReminderUpsertArgs} args - Arguments to update or create a Reminder.
     * @example
     * // Update or create a Reminder
     * const reminder = await prisma.reminder.upsert({
     *   create: {
     *     // ... data to create a Reminder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reminder we want to update
     *   }
     * })
     */
    upsert<T extends ReminderUpsertArgs>(args: SelectSubset<T, ReminderUpsertArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderCountArgs} args - Arguments to filter Reminders to count.
     * @example
     * // Count the number of Reminders
     * const count = await prisma.reminder.count({
     *   where: {
     *     // ... the filter for the Reminders we want to count
     *   }
     * })
    **/
    count<T extends ReminderCountArgs>(
      args?: Subset<T, ReminderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReminderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReminderAggregateArgs>(args: Subset<T, ReminderAggregateArgs>): Prisma.PrismaPromise<GetReminderAggregateType<T>>

    /**
     * Group by Reminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderGroupByArgs} args - Group by arguments.
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
      T extends ReminderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReminderGroupByArgs['orderBy'] }
        : { orderBy?: ReminderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReminderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReminderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reminder model
   */
  readonly fields: ReminderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reminder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReminderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Reminder model
   */ 
  interface ReminderFieldRefs {
    readonly id: FieldRef<"Reminder", 'Int'>
    readonly userId: FieldRef<"Reminder", 'String'>
    readonly title: FieldRef<"Reminder", 'String'>
    readonly location: FieldRef<"Reminder", 'String'>
    readonly time: FieldRef<"Reminder", 'DateTime'>
    readonly dueDate: FieldRef<"Reminder", 'DateTime'>
    readonly note: FieldRef<"Reminder", 'String'>
    readonly appointmentContactNumber: FieldRef<"Reminder", 'String'>
    readonly status: FieldRef<"Reminder", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Reminder findUnique
   */
  export type ReminderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder findUniqueOrThrow
   */
  export type ReminderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder findFirst
   */
  export type ReminderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reminders.
     */
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder findFirstOrThrow
   */
  export type ReminderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reminders.
     */
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder findMany
   */
  export type ReminderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminders to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder create
   */
  export type ReminderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The data needed to create a Reminder.
     */
    data: XOR<ReminderCreateInput, ReminderUncheckedCreateInput>
  }

  /**
   * Reminder createMany
   */
  export type ReminderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reminders.
     */
    data: ReminderCreateManyInput | ReminderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reminder createManyAndReturn
   */
  export type ReminderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reminders.
     */
    data: ReminderCreateManyInput | ReminderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reminder update
   */
  export type ReminderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The data needed to update a Reminder.
     */
    data: XOR<ReminderUpdateInput, ReminderUncheckedUpdateInput>
    /**
     * Choose, which Reminder to update.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder updateMany
   */
  export type ReminderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reminders.
     */
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyInput>
    /**
     * Filter which Reminders to update
     */
    where?: ReminderWhereInput
  }

  /**
   * Reminder upsert
   */
  export type ReminderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The filter to search for the Reminder to update in case it exists.
     */
    where: ReminderWhereUniqueInput
    /**
     * In case the Reminder found by the `where` argument doesn't exist, create a new Reminder with this data.
     */
    create: XOR<ReminderCreateInput, ReminderUncheckedCreateInput>
    /**
     * In case the Reminder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReminderUpdateInput, ReminderUncheckedUpdateInput>
  }

  /**
   * Reminder delete
   */
  export type ReminderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter which Reminder to delete.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder deleteMany
   */
  export type ReminderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reminders to delete
     */
    where?: ReminderWhereInput
  }

  /**
   * Reminder without action
   */
  export type ReminderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
  }


  /**
   * Model Search
   */

  export type AggregateSearch = {
    _count: SearchCountAggregateOutputType | null
    _avg: SearchAvgAggregateOutputType | null
    _sum: SearchSumAggregateOutputType | null
    _min: SearchMinAggregateOutputType | null
    _max: SearchMaxAggregateOutputType | null
  }

  export type SearchAvgAggregateOutputType = {
    id: number | null
  }

  export type SearchSumAggregateOutputType = {
    id: number | null
  }

  export type SearchMinAggregateOutputType = {
    id: number | null
    userId: string | null
    query: string | null
    timestamp: Date | null
  }

  export type SearchMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    query: string | null
    timestamp: Date | null
  }

  export type SearchCountAggregateOutputType = {
    id: number
    userId: number
    query: number
    timestamp: number
    _all: number
  }


  export type SearchAvgAggregateInputType = {
    id?: true
  }

  export type SearchSumAggregateInputType = {
    id?: true
  }

  export type SearchMinAggregateInputType = {
    id?: true
    userId?: true
    query?: true
    timestamp?: true
  }

  export type SearchMaxAggregateInputType = {
    id?: true
    userId?: true
    query?: true
    timestamp?: true
  }

  export type SearchCountAggregateInputType = {
    id?: true
    userId?: true
    query?: true
    timestamp?: true
    _all?: true
  }

  export type SearchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Search to aggregate.
     */
    where?: SearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Searches to fetch.
     */
    orderBy?: SearchOrderByWithRelationInput | SearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Searches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Searches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Searches
    **/
    _count?: true | SearchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SearchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SearchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SearchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SearchMaxAggregateInputType
  }

  export type GetSearchAggregateType<T extends SearchAggregateArgs> = {
        [P in keyof T & keyof AggregateSearch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSearch[P]>
      : GetScalarType<T[P], AggregateSearch[P]>
  }




  export type SearchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchWhereInput
    orderBy?: SearchOrderByWithAggregationInput | SearchOrderByWithAggregationInput[]
    by: SearchScalarFieldEnum[] | SearchScalarFieldEnum
    having?: SearchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SearchCountAggregateInputType | true
    _avg?: SearchAvgAggregateInputType
    _sum?: SearchSumAggregateInputType
    _min?: SearchMinAggregateInputType
    _max?: SearchMaxAggregateInputType
  }

  export type SearchGroupByOutputType = {
    id: number
    userId: string
    query: string
    timestamp: Date
    _count: SearchCountAggregateOutputType | null
    _avg: SearchAvgAggregateOutputType | null
    _sum: SearchSumAggregateOutputType | null
    _min: SearchMinAggregateOutputType | null
    _max: SearchMaxAggregateOutputType | null
  }

  type GetSearchGroupByPayload<T extends SearchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SearchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SearchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SearchGroupByOutputType[P]>
            : GetScalarType<T[P], SearchGroupByOutputType[P]>
        }
      >
    >


  export type SearchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    query?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["search"]>

  export type SearchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    query?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["search"]>

  export type SearchSelectScalar = {
    id?: boolean
    userId?: boolean
    query?: boolean
    timestamp?: boolean
  }

  export type SearchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SearchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SearchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Search"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      query: string
      timestamp: Date
    }, ExtArgs["result"]["search"]>
    composites: {}
  }

  type SearchGetPayload<S extends boolean | null | undefined | SearchDefaultArgs> = $Result.GetResult<Prisma.$SearchPayload, S>

  type SearchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SearchFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SearchCountAggregateInputType | true
    }

  export interface SearchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Search'], meta: { name: 'Search' } }
    /**
     * Find zero or one Search that matches the filter.
     * @param {SearchFindUniqueArgs} args - Arguments to find a Search
     * @example
     * // Get one Search
     * const search = await prisma.search.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SearchFindUniqueArgs>(args: SelectSubset<T, SearchFindUniqueArgs<ExtArgs>>): Prisma__SearchClient<$Result.GetResult<Prisma.$SearchPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Search that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SearchFindUniqueOrThrowArgs} args - Arguments to find a Search
     * @example
     * // Get one Search
     * const search = await prisma.search.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SearchFindUniqueOrThrowArgs>(args: SelectSubset<T, SearchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SearchClient<$Result.GetResult<Prisma.$SearchPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Search that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchFindFirstArgs} args - Arguments to find a Search
     * @example
     * // Get one Search
     * const search = await prisma.search.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SearchFindFirstArgs>(args?: SelectSubset<T, SearchFindFirstArgs<ExtArgs>>): Prisma__SearchClient<$Result.GetResult<Prisma.$SearchPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Search that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchFindFirstOrThrowArgs} args - Arguments to find a Search
     * @example
     * // Get one Search
     * const search = await prisma.search.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SearchFindFirstOrThrowArgs>(args?: SelectSubset<T, SearchFindFirstOrThrowArgs<ExtArgs>>): Prisma__SearchClient<$Result.GetResult<Prisma.$SearchPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Searches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Searches
     * const searches = await prisma.search.findMany()
     * 
     * // Get first 10 Searches
     * const searches = await prisma.search.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const searchWithIdOnly = await prisma.search.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SearchFindManyArgs>(args?: SelectSubset<T, SearchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Search.
     * @param {SearchCreateArgs} args - Arguments to create a Search.
     * @example
     * // Create one Search
     * const Search = await prisma.search.create({
     *   data: {
     *     // ... data to create a Search
     *   }
     * })
     * 
     */
    create<T extends SearchCreateArgs>(args: SelectSubset<T, SearchCreateArgs<ExtArgs>>): Prisma__SearchClient<$Result.GetResult<Prisma.$SearchPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Searches.
     * @param {SearchCreateManyArgs} args - Arguments to create many Searches.
     * @example
     * // Create many Searches
     * const search = await prisma.search.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SearchCreateManyArgs>(args?: SelectSubset<T, SearchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Searches and returns the data saved in the database.
     * @param {SearchCreateManyAndReturnArgs} args - Arguments to create many Searches.
     * @example
     * // Create many Searches
     * const search = await prisma.search.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Searches and only return the `id`
     * const searchWithIdOnly = await prisma.search.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SearchCreateManyAndReturnArgs>(args?: SelectSubset<T, SearchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Search.
     * @param {SearchDeleteArgs} args - Arguments to delete one Search.
     * @example
     * // Delete one Search
     * const Search = await prisma.search.delete({
     *   where: {
     *     // ... filter to delete one Search
     *   }
     * })
     * 
     */
    delete<T extends SearchDeleteArgs>(args: SelectSubset<T, SearchDeleteArgs<ExtArgs>>): Prisma__SearchClient<$Result.GetResult<Prisma.$SearchPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Search.
     * @param {SearchUpdateArgs} args - Arguments to update one Search.
     * @example
     * // Update one Search
     * const search = await prisma.search.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SearchUpdateArgs>(args: SelectSubset<T, SearchUpdateArgs<ExtArgs>>): Prisma__SearchClient<$Result.GetResult<Prisma.$SearchPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Searches.
     * @param {SearchDeleteManyArgs} args - Arguments to filter Searches to delete.
     * @example
     * // Delete a few Searches
     * const { count } = await prisma.search.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SearchDeleteManyArgs>(args?: SelectSubset<T, SearchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Searches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Searches
     * const search = await prisma.search.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SearchUpdateManyArgs>(args: SelectSubset<T, SearchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Search.
     * @param {SearchUpsertArgs} args - Arguments to update or create a Search.
     * @example
     * // Update or create a Search
     * const search = await prisma.search.upsert({
     *   create: {
     *     // ... data to create a Search
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Search we want to update
     *   }
     * })
     */
    upsert<T extends SearchUpsertArgs>(args: SelectSubset<T, SearchUpsertArgs<ExtArgs>>): Prisma__SearchClient<$Result.GetResult<Prisma.$SearchPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Searches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchCountArgs} args - Arguments to filter Searches to count.
     * @example
     * // Count the number of Searches
     * const count = await prisma.search.count({
     *   where: {
     *     // ... the filter for the Searches we want to count
     *   }
     * })
    **/
    count<T extends SearchCountArgs>(
      args?: Subset<T, SearchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SearchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Search.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SearchAggregateArgs>(args: Subset<T, SearchAggregateArgs>): Prisma.PrismaPromise<GetSearchAggregateType<T>>

    /**
     * Group by Search.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchGroupByArgs} args - Group by arguments.
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
      T extends SearchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SearchGroupByArgs['orderBy'] }
        : { orderBy?: SearchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SearchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSearchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Search model
   */
  readonly fields: SearchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Search.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SearchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Search model
   */ 
  interface SearchFieldRefs {
    readonly id: FieldRef<"Search", 'Int'>
    readonly userId: FieldRef<"Search", 'String'>
    readonly query: FieldRef<"Search", 'String'>
    readonly timestamp: FieldRef<"Search", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Search findUnique
   */
  export type SearchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Search
     */
    select?: SearchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchInclude<ExtArgs> | null
    /**
     * Filter, which Search to fetch.
     */
    where: SearchWhereUniqueInput
  }

  /**
   * Search findUniqueOrThrow
   */
  export type SearchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Search
     */
    select?: SearchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchInclude<ExtArgs> | null
    /**
     * Filter, which Search to fetch.
     */
    where: SearchWhereUniqueInput
  }

  /**
   * Search findFirst
   */
  export type SearchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Search
     */
    select?: SearchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchInclude<ExtArgs> | null
    /**
     * Filter, which Search to fetch.
     */
    where?: SearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Searches to fetch.
     */
    orderBy?: SearchOrderByWithRelationInput | SearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Searches.
     */
    cursor?: SearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Searches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Searches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Searches.
     */
    distinct?: SearchScalarFieldEnum | SearchScalarFieldEnum[]
  }

  /**
   * Search findFirstOrThrow
   */
  export type SearchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Search
     */
    select?: SearchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchInclude<ExtArgs> | null
    /**
     * Filter, which Search to fetch.
     */
    where?: SearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Searches to fetch.
     */
    orderBy?: SearchOrderByWithRelationInput | SearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Searches.
     */
    cursor?: SearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Searches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Searches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Searches.
     */
    distinct?: SearchScalarFieldEnum | SearchScalarFieldEnum[]
  }

  /**
   * Search findMany
   */
  export type SearchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Search
     */
    select?: SearchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchInclude<ExtArgs> | null
    /**
     * Filter, which Searches to fetch.
     */
    where?: SearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Searches to fetch.
     */
    orderBy?: SearchOrderByWithRelationInput | SearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Searches.
     */
    cursor?: SearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Searches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Searches.
     */
    skip?: number
    distinct?: SearchScalarFieldEnum | SearchScalarFieldEnum[]
  }

  /**
   * Search create
   */
  export type SearchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Search
     */
    select?: SearchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchInclude<ExtArgs> | null
    /**
     * The data needed to create a Search.
     */
    data: XOR<SearchCreateInput, SearchUncheckedCreateInput>
  }

  /**
   * Search createMany
   */
  export type SearchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Searches.
     */
    data: SearchCreateManyInput | SearchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Search createManyAndReturn
   */
  export type SearchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Search
     */
    select?: SearchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Searches.
     */
    data: SearchCreateManyInput | SearchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Search update
   */
  export type SearchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Search
     */
    select?: SearchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchInclude<ExtArgs> | null
    /**
     * The data needed to update a Search.
     */
    data: XOR<SearchUpdateInput, SearchUncheckedUpdateInput>
    /**
     * Choose, which Search to update.
     */
    where: SearchWhereUniqueInput
  }

  /**
   * Search updateMany
   */
  export type SearchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Searches.
     */
    data: XOR<SearchUpdateManyMutationInput, SearchUncheckedUpdateManyInput>
    /**
     * Filter which Searches to update
     */
    where?: SearchWhereInput
  }

  /**
   * Search upsert
   */
  export type SearchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Search
     */
    select?: SearchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchInclude<ExtArgs> | null
    /**
     * The filter to search for the Search to update in case it exists.
     */
    where: SearchWhereUniqueInput
    /**
     * In case the Search found by the `where` argument doesn't exist, create a new Search with this data.
     */
    create: XOR<SearchCreateInput, SearchUncheckedCreateInput>
    /**
     * In case the Search was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SearchUpdateInput, SearchUncheckedUpdateInput>
  }

  /**
   * Search delete
   */
  export type SearchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Search
     */
    select?: SearchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchInclude<ExtArgs> | null
    /**
     * Filter which Search to delete.
     */
    where: SearchWhereUniqueInput
  }

  /**
   * Search deleteMany
   */
  export type SearchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Searches to delete
     */
    where?: SearchWhereInput
  }

  /**
   * Search without action
   */
  export type SearchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Search
     */
    select?: SearchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roles?: boolean | Admin$rolesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Admin$rolesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      roles: Prisma.$RolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends Admin$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Admin$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }

  /**
   * Admin.roles
   */
  export type Admin$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: string
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    admins?: boolean | Role$adminsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admins?: boolean | Role$adminsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      admins: Prisma.$AdminPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admins<T extends Role$adminsArgs<ExtArgs> = {}>(args?: Subset<T, Role$adminsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Role model
   */ 
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
  }

  /**
   * Role.admins
   */
  export type Role$adminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    cursor?: AdminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model RealEstateInterest
   */

  export type AggregateRealEstateInterest = {
    _count: RealEstateInterestCountAggregateOutputType | null
    _avg: RealEstateInterestAvgAggregateOutputType | null
    _sum: RealEstateInterestSumAggregateOutputType | null
    _min: RealEstateInterestMinAggregateOutputType | null
    _max: RealEstateInterestMaxAggregateOutputType | null
  }

  export type RealEstateInterestAvgAggregateOutputType = {
    id: number | null
  }

  export type RealEstateInterestSumAggregateOutputType = {
    id: number | null
  }

  export type RealEstateInterestMinAggregateOutputType = {
    id: number | null
    userId: string | null
  }

  export type RealEstateInterestMaxAggregateOutputType = {
    id: number | null
    userId: string | null
  }

  export type RealEstateInterestCountAggregateOutputType = {
    id: number
    userId: number
    state: number
    lga: number
    country: number
    _all: number
  }


  export type RealEstateInterestAvgAggregateInputType = {
    id?: true
  }

  export type RealEstateInterestSumAggregateInputType = {
    id?: true
  }

  export type RealEstateInterestMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type RealEstateInterestMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type RealEstateInterestCountAggregateInputType = {
    id?: true
    userId?: true
    state?: true
    lga?: true
    country?: true
    _all?: true
  }

  export type RealEstateInterestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RealEstateInterest to aggregate.
     */
    where?: RealEstateInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateInterests to fetch.
     */
    orderBy?: RealEstateInterestOrderByWithRelationInput | RealEstateInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RealEstateInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RealEstateInterests
    **/
    _count?: true | RealEstateInterestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RealEstateInterestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RealEstateInterestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RealEstateInterestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RealEstateInterestMaxAggregateInputType
  }

  export type GetRealEstateInterestAggregateType<T extends RealEstateInterestAggregateArgs> = {
        [P in keyof T & keyof AggregateRealEstateInterest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRealEstateInterest[P]>
      : GetScalarType<T[P], AggregateRealEstateInterest[P]>
  }




  export type RealEstateInterestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RealEstateInterestWhereInput
    orderBy?: RealEstateInterestOrderByWithAggregationInput | RealEstateInterestOrderByWithAggregationInput[]
    by: RealEstateInterestScalarFieldEnum[] | RealEstateInterestScalarFieldEnum
    having?: RealEstateInterestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RealEstateInterestCountAggregateInputType | true
    _avg?: RealEstateInterestAvgAggregateInputType
    _sum?: RealEstateInterestSumAggregateInputType
    _min?: RealEstateInterestMinAggregateInputType
    _max?: RealEstateInterestMaxAggregateInputType
  }

  export type RealEstateInterestGroupByOutputType = {
    id: number
    userId: string
    state: string[]
    lga: string[]
    country: string[]
    _count: RealEstateInterestCountAggregateOutputType | null
    _avg: RealEstateInterestAvgAggregateOutputType | null
    _sum: RealEstateInterestSumAggregateOutputType | null
    _min: RealEstateInterestMinAggregateOutputType | null
    _max: RealEstateInterestMaxAggregateOutputType | null
  }

  type GetRealEstateInterestGroupByPayload<T extends RealEstateInterestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RealEstateInterestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RealEstateInterestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RealEstateInterestGroupByOutputType[P]>
            : GetScalarType<T[P], RealEstateInterestGroupByOutputType[P]>
        }
      >
    >


  export type RealEstateInterestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    state?: boolean
    lga?: boolean
    country?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["realEstateInterest"]>

  export type RealEstateInterestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    state?: boolean
    lga?: boolean
    country?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["realEstateInterest"]>

  export type RealEstateInterestSelectScalar = {
    id?: boolean
    userId?: boolean
    state?: boolean
    lga?: boolean
    country?: boolean
  }

  export type RealEstateInterestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RealEstateInterestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RealEstateInterestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RealEstateInterest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      state: string[]
      lga: string[]
      country: string[]
    }, ExtArgs["result"]["realEstateInterest"]>
    composites: {}
  }

  type RealEstateInterestGetPayload<S extends boolean | null | undefined | RealEstateInterestDefaultArgs> = $Result.GetResult<Prisma.$RealEstateInterestPayload, S>

  type RealEstateInterestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RealEstateInterestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RealEstateInterestCountAggregateInputType | true
    }

  export interface RealEstateInterestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RealEstateInterest'], meta: { name: 'RealEstateInterest' } }
    /**
     * Find zero or one RealEstateInterest that matches the filter.
     * @param {RealEstateInterestFindUniqueArgs} args - Arguments to find a RealEstateInterest
     * @example
     * // Get one RealEstateInterest
     * const realEstateInterest = await prisma.realEstateInterest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RealEstateInterestFindUniqueArgs>(args: SelectSubset<T, RealEstateInterestFindUniqueArgs<ExtArgs>>): Prisma__RealEstateInterestClient<$Result.GetResult<Prisma.$RealEstateInterestPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RealEstateInterest that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RealEstateInterestFindUniqueOrThrowArgs} args - Arguments to find a RealEstateInterest
     * @example
     * // Get one RealEstateInterest
     * const realEstateInterest = await prisma.realEstateInterest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RealEstateInterestFindUniqueOrThrowArgs>(args: SelectSubset<T, RealEstateInterestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RealEstateInterestClient<$Result.GetResult<Prisma.$RealEstateInterestPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RealEstateInterest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateInterestFindFirstArgs} args - Arguments to find a RealEstateInterest
     * @example
     * // Get one RealEstateInterest
     * const realEstateInterest = await prisma.realEstateInterest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RealEstateInterestFindFirstArgs>(args?: SelectSubset<T, RealEstateInterestFindFirstArgs<ExtArgs>>): Prisma__RealEstateInterestClient<$Result.GetResult<Prisma.$RealEstateInterestPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RealEstateInterest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateInterestFindFirstOrThrowArgs} args - Arguments to find a RealEstateInterest
     * @example
     * // Get one RealEstateInterest
     * const realEstateInterest = await prisma.realEstateInterest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RealEstateInterestFindFirstOrThrowArgs>(args?: SelectSubset<T, RealEstateInterestFindFirstOrThrowArgs<ExtArgs>>): Prisma__RealEstateInterestClient<$Result.GetResult<Prisma.$RealEstateInterestPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RealEstateInterests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateInterestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RealEstateInterests
     * const realEstateInterests = await prisma.realEstateInterest.findMany()
     * 
     * // Get first 10 RealEstateInterests
     * const realEstateInterests = await prisma.realEstateInterest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const realEstateInterestWithIdOnly = await prisma.realEstateInterest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RealEstateInterestFindManyArgs>(args?: SelectSubset<T, RealEstateInterestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RealEstateInterestPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RealEstateInterest.
     * @param {RealEstateInterestCreateArgs} args - Arguments to create a RealEstateInterest.
     * @example
     * // Create one RealEstateInterest
     * const RealEstateInterest = await prisma.realEstateInterest.create({
     *   data: {
     *     // ... data to create a RealEstateInterest
     *   }
     * })
     * 
     */
    create<T extends RealEstateInterestCreateArgs>(args: SelectSubset<T, RealEstateInterestCreateArgs<ExtArgs>>): Prisma__RealEstateInterestClient<$Result.GetResult<Prisma.$RealEstateInterestPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RealEstateInterests.
     * @param {RealEstateInterestCreateManyArgs} args - Arguments to create many RealEstateInterests.
     * @example
     * // Create many RealEstateInterests
     * const realEstateInterest = await prisma.realEstateInterest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RealEstateInterestCreateManyArgs>(args?: SelectSubset<T, RealEstateInterestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RealEstateInterests and returns the data saved in the database.
     * @param {RealEstateInterestCreateManyAndReturnArgs} args - Arguments to create many RealEstateInterests.
     * @example
     * // Create many RealEstateInterests
     * const realEstateInterest = await prisma.realEstateInterest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RealEstateInterests and only return the `id`
     * const realEstateInterestWithIdOnly = await prisma.realEstateInterest.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RealEstateInterestCreateManyAndReturnArgs>(args?: SelectSubset<T, RealEstateInterestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RealEstateInterestPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RealEstateInterest.
     * @param {RealEstateInterestDeleteArgs} args - Arguments to delete one RealEstateInterest.
     * @example
     * // Delete one RealEstateInterest
     * const RealEstateInterest = await prisma.realEstateInterest.delete({
     *   where: {
     *     // ... filter to delete one RealEstateInterest
     *   }
     * })
     * 
     */
    delete<T extends RealEstateInterestDeleteArgs>(args: SelectSubset<T, RealEstateInterestDeleteArgs<ExtArgs>>): Prisma__RealEstateInterestClient<$Result.GetResult<Prisma.$RealEstateInterestPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RealEstateInterest.
     * @param {RealEstateInterestUpdateArgs} args - Arguments to update one RealEstateInterest.
     * @example
     * // Update one RealEstateInterest
     * const realEstateInterest = await prisma.realEstateInterest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RealEstateInterestUpdateArgs>(args: SelectSubset<T, RealEstateInterestUpdateArgs<ExtArgs>>): Prisma__RealEstateInterestClient<$Result.GetResult<Prisma.$RealEstateInterestPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RealEstateInterests.
     * @param {RealEstateInterestDeleteManyArgs} args - Arguments to filter RealEstateInterests to delete.
     * @example
     * // Delete a few RealEstateInterests
     * const { count } = await prisma.realEstateInterest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RealEstateInterestDeleteManyArgs>(args?: SelectSubset<T, RealEstateInterestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RealEstateInterests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateInterestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RealEstateInterests
     * const realEstateInterest = await prisma.realEstateInterest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RealEstateInterestUpdateManyArgs>(args: SelectSubset<T, RealEstateInterestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RealEstateInterest.
     * @param {RealEstateInterestUpsertArgs} args - Arguments to update or create a RealEstateInterest.
     * @example
     * // Update or create a RealEstateInterest
     * const realEstateInterest = await prisma.realEstateInterest.upsert({
     *   create: {
     *     // ... data to create a RealEstateInterest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RealEstateInterest we want to update
     *   }
     * })
     */
    upsert<T extends RealEstateInterestUpsertArgs>(args: SelectSubset<T, RealEstateInterestUpsertArgs<ExtArgs>>): Prisma__RealEstateInterestClient<$Result.GetResult<Prisma.$RealEstateInterestPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RealEstateInterests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateInterestCountArgs} args - Arguments to filter RealEstateInterests to count.
     * @example
     * // Count the number of RealEstateInterests
     * const count = await prisma.realEstateInterest.count({
     *   where: {
     *     // ... the filter for the RealEstateInterests we want to count
     *   }
     * })
    **/
    count<T extends RealEstateInterestCountArgs>(
      args?: Subset<T, RealEstateInterestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RealEstateInterestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RealEstateInterest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateInterestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RealEstateInterestAggregateArgs>(args: Subset<T, RealEstateInterestAggregateArgs>): Prisma.PrismaPromise<GetRealEstateInterestAggregateType<T>>

    /**
     * Group by RealEstateInterest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateInterestGroupByArgs} args - Group by arguments.
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
      T extends RealEstateInterestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RealEstateInterestGroupByArgs['orderBy'] }
        : { orderBy?: RealEstateInterestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RealEstateInterestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRealEstateInterestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RealEstateInterest model
   */
  readonly fields: RealEstateInterestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RealEstateInterest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RealEstateInterestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the RealEstateInterest model
   */ 
  interface RealEstateInterestFieldRefs {
    readonly id: FieldRef<"RealEstateInterest", 'Int'>
    readonly userId: FieldRef<"RealEstateInterest", 'String'>
    readonly state: FieldRef<"RealEstateInterest", 'String[]'>
    readonly lga: FieldRef<"RealEstateInterest", 'String[]'>
    readonly country: FieldRef<"RealEstateInterest", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * RealEstateInterest findUnique
   */
  export type RealEstateInterestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealEstateInterest
     */
    select?: RealEstateInterestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealEstateInterestInclude<ExtArgs> | null
    /**
     * Filter, which RealEstateInterest to fetch.
     */
    where: RealEstateInterestWhereUniqueInput
  }

  /**
   * RealEstateInterest findUniqueOrThrow
   */
  export type RealEstateInterestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealEstateInterest
     */
    select?: RealEstateInterestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealEstateInterestInclude<ExtArgs> | null
    /**
     * Filter, which RealEstateInterest to fetch.
     */
    where: RealEstateInterestWhereUniqueInput
  }

  /**
   * RealEstateInterest findFirst
   */
  export type RealEstateInterestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealEstateInterest
     */
    select?: RealEstateInterestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealEstateInterestInclude<ExtArgs> | null
    /**
     * Filter, which RealEstateInterest to fetch.
     */
    where?: RealEstateInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateInterests to fetch.
     */
    orderBy?: RealEstateInterestOrderByWithRelationInput | RealEstateInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RealEstateInterests.
     */
    cursor?: RealEstateInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RealEstateInterests.
     */
    distinct?: RealEstateInterestScalarFieldEnum | RealEstateInterestScalarFieldEnum[]
  }

  /**
   * RealEstateInterest findFirstOrThrow
   */
  export type RealEstateInterestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealEstateInterest
     */
    select?: RealEstateInterestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealEstateInterestInclude<ExtArgs> | null
    /**
     * Filter, which RealEstateInterest to fetch.
     */
    where?: RealEstateInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateInterests to fetch.
     */
    orderBy?: RealEstateInterestOrderByWithRelationInput | RealEstateInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RealEstateInterests.
     */
    cursor?: RealEstateInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RealEstateInterests.
     */
    distinct?: RealEstateInterestScalarFieldEnum | RealEstateInterestScalarFieldEnum[]
  }

  /**
   * RealEstateInterest findMany
   */
  export type RealEstateInterestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealEstateInterest
     */
    select?: RealEstateInterestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealEstateInterestInclude<ExtArgs> | null
    /**
     * Filter, which RealEstateInterests to fetch.
     */
    where?: RealEstateInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateInterests to fetch.
     */
    orderBy?: RealEstateInterestOrderByWithRelationInput | RealEstateInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RealEstateInterests.
     */
    cursor?: RealEstateInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateInterests.
     */
    skip?: number
    distinct?: RealEstateInterestScalarFieldEnum | RealEstateInterestScalarFieldEnum[]
  }

  /**
   * RealEstateInterest create
   */
  export type RealEstateInterestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealEstateInterest
     */
    select?: RealEstateInterestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealEstateInterestInclude<ExtArgs> | null
    /**
     * The data needed to create a RealEstateInterest.
     */
    data: XOR<RealEstateInterestCreateInput, RealEstateInterestUncheckedCreateInput>
  }

  /**
   * RealEstateInterest createMany
   */
  export type RealEstateInterestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RealEstateInterests.
     */
    data: RealEstateInterestCreateManyInput | RealEstateInterestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RealEstateInterest createManyAndReturn
   */
  export type RealEstateInterestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealEstateInterest
     */
    select?: RealEstateInterestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RealEstateInterests.
     */
    data: RealEstateInterestCreateManyInput | RealEstateInterestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealEstateInterestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RealEstateInterest update
   */
  export type RealEstateInterestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealEstateInterest
     */
    select?: RealEstateInterestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealEstateInterestInclude<ExtArgs> | null
    /**
     * The data needed to update a RealEstateInterest.
     */
    data: XOR<RealEstateInterestUpdateInput, RealEstateInterestUncheckedUpdateInput>
    /**
     * Choose, which RealEstateInterest to update.
     */
    where: RealEstateInterestWhereUniqueInput
  }

  /**
   * RealEstateInterest updateMany
   */
  export type RealEstateInterestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RealEstateInterests.
     */
    data: XOR<RealEstateInterestUpdateManyMutationInput, RealEstateInterestUncheckedUpdateManyInput>
    /**
     * Filter which RealEstateInterests to update
     */
    where?: RealEstateInterestWhereInput
  }

  /**
   * RealEstateInterest upsert
   */
  export type RealEstateInterestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealEstateInterest
     */
    select?: RealEstateInterestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealEstateInterestInclude<ExtArgs> | null
    /**
     * The filter to search for the RealEstateInterest to update in case it exists.
     */
    where: RealEstateInterestWhereUniqueInput
    /**
     * In case the RealEstateInterest found by the `where` argument doesn't exist, create a new RealEstateInterest with this data.
     */
    create: XOR<RealEstateInterestCreateInput, RealEstateInterestUncheckedCreateInput>
    /**
     * In case the RealEstateInterest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RealEstateInterestUpdateInput, RealEstateInterestUncheckedUpdateInput>
  }

  /**
   * RealEstateInterest delete
   */
  export type RealEstateInterestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealEstateInterest
     */
    select?: RealEstateInterestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealEstateInterestInclude<ExtArgs> | null
    /**
     * Filter which RealEstateInterest to delete.
     */
    where: RealEstateInterestWhereUniqueInput
  }

  /**
   * RealEstateInterest deleteMany
   */
  export type RealEstateInterestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RealEstateInterests to delete
     */
    where?: RealEstateInterestWhereInput
  }

  /**
   * RealEstateInterest without action
   */
  export type RealEstateInterestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealEstateInterest
     */
    select?: RealEstateInterestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealEstateInterestInclude<ExtArgs> | null
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
    phoneNumber: 'phoneNumber',
    password: 'password',
    isVerified: 'isVerified',
    isEmailVerified: 'isEmailVerified',
    isNumberVerified: 'isNumberVerified',
    country: 'country',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tempToken: 'tempToken'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserInfoScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    profilePicture: 'profilePicture',
    address: 'address',
    userType: 'userType',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserInfoScalarFieldEnum = (typeof UserInfoScalarFieldEnum)[keyof typeof UserInfoScalarFieldEnum]


  export const UserKycScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    passportPhoto: 'passportPhoto',
    idType: 'idType',
    idFrontImage: 'idFrontImage',
    idBackImage: 'idBackImage',
    nyscNumber: 'nyscNumber',
    nin: 'nin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserKycScalarFieldEnum = (typeof UserKycScalarFieldEnum)[keyof typeof UserKycScalarFieldEnum]


  export const RealEstateScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    houseName: 'houseName',
    category: 'category',
    numberOfRooms: 'numberOfRooms',
    pictures: 'pictures',
    mainPictureIndex: 'mainPictureIndex',
    description: 'description',
    state: 'state',
    lga: 'lga',
    country: 'country',
    nearby: 'nearby',
    amenities: 'amenities',
    address: 'address',
    createdAt: 'createdAt'
  };

  export type RealEstateScalarFieldEnum = (typeof RealEstateScalarFieldEnum)[keyof typeof RealEstateScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    realEstateId: 'realEstateId',
    rating: 'rating',
    comment: 'comment',
    propertyPictures: 'propertyPictures',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    reportCategory: 'reportCategory',
    comment: 'comment',
    reportPriority: 'reportPriority',
    reportableType: 'reportableType',
    createdAt: 'createdAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    message: 'message',
    createdAt: 'createdAt',
    isRead: 'isRead',
    isDelivered: 'isDelivered'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const JobMarketScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    companyName: 'companyName',
    jobTitle: 'jobTitle',
    jobDescription: 'jobDescription',
    keyResponsibilities: 'keyResponsibilities',
    qualifications: 'qualifications',
    workArrangement: 'workArrangement',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    applicationUrl: 'applicationUrl'
  };

  export type JobMarketScalarFieldEnum = (typeof JobMarketScalarFieldEnum)[keyof typeof JobMarketScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    message: 'message',
    createdAt: 'createdAt',
    status: 'status',
    type: 'type',
    priority: 'priority',
    actionButtonLabel: 'actionButtonLabel',
    actionButtonLink: 'actionButtonLink',
    relatedResourceLink: 'relatedResourceLink'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const PropertyMarketScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    price: 'price',
    images: 'images',
    location: 'location',
    createdAt: 'createdAt'
  };

  export type PropertyMarketScalarFieldEnum = (typeof PropertyMarketScalarFieldEnum)[keyof typeof PropertyMarketScalarFieldEnum]


  export const ReminderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    location: 'location',
    time: 'time',
    dueDate: 'dueDate',
    note: 'note',
    appointmentContactNumber: 'appointmentContactNumber',
    status: 'status'
  };

  export type ReminderScalarFieldEnum = (typeof ReminderScalarFieldEnum)[keyof typeof ReminderScalarFieldEnum]


  export const SearchScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    query: 'query',
    timestamp: 'timestamp'
  };

  export type SearchScalarFieldEnum = (typeof SearchScalarFieldEnum)[keyof typeof SearchScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const RealEstateInterestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    state: 'state',
    lga: 'lga',
    country: 'country'
  };

  export type RealEstateInterestScalarFieldEnum = (typeof RealEstateInterestScalarFieldEnum)[keyof typeof RealEstateInterestScalarFieldEnum]


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
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    isEmailVerified?: BoolNullableFilter<"User"> | boolean | null
    isNumberVerified?: BoolNullableFilter<"User"> | boolean | null
    country?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tempToken?: StringNullableFilter<"User"> | string | null
    chatMessagesSent?: ChatMessageListRelationFilter
    chatMessagesReceived?: ChatMessageListRelationFilter
    jobsApplied?: JobMarketListRelationFilter
    notifications?: NotificationListRelationFilter
    propertiesUploaded?: PropertyMarketListRelationFilter
    apartmentsUploaded?: RealEstateListRelationFilter
    reminders?: ReminderListRelationFilter
    reports?: ReportListRelationFilter
    reviews?: ReviewListRelationFilter
    searches?: SearchListRelationFilter
    realEstateInterest?: XOR<RealEstateInterestNullableRelationFilter, RealEstateInterestWhereInput> | null
    userKyc?: XOR<UserKycNullableRelationFilter, UserKycWhereInput> | null
    userInfo?: XOR<UserInfoNullableRelationFilter, UserInfoWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    isEmailVerified?: SortOrderInput | SortOrder
    isNumberVerified?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tempToken?: SortOrderInput | SortOrder
    chatMessagesSent?: ChatMessageOrderByRelationAggregateInput
    chatMessagesReceived?: ChatMessageOrderByRelationAggregateInput
    jobsApplied?: JobMarketOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    propertiesUploaded?: PropertyMarketOrderByRelationAggregateInput
    apartmentsUploaded?: RealEstateOrderByRelationAggregateInput
    reminders?: ReminderOrderByRelationAggregateInput
    reports?: ReportOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    searches?: SearchOrderByRelationAggregateInput
    realEstateInterest?: RealEstateInterestOrderByWithRelationInput
    userKyc?: UserKycOrderByWithRelationInput
    userInfo?: UserInfoOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phoneNumber?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    isEmailVerified?: BoolNullableFilter<"User"> | boolean | null
    isNumberVerified?: BoolNullableFilter<"User"> | boolean | null
    country?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tempToken?: StringNullableFilter<"User"> | string | null
    chatMessagesSent?: ChatMessageListRelationFilter
    chatMessagesReceived?: ChatMessageListRelationFilter
    jobsApplied?: JobMarketListRelationFilter
    notifications?: NotificationListRelationFilter
    propertiesUploaded?: PropertyMarketListRelationFilter
    apartmentsUploaded?: RealEstateListRelationFilter
    reminders?: ReminderListRelationFilter
    reports?: ReportListRelationFilter
    reviews?: ReviewListRelationFilter
    searches?: SearchListRelationFilter
    realEstateInterest?: XOR<RealEstateInterestNullableRelationFilter, RealEstateInterestWhereInput> | null
    userKyc?: XOR<UserKycNullableRelationFilter, UserKycWhereInput> | null
    userInfo?: XOR<UserInfoNullableRelationFilter, UserInfoWhereInput> | null
  }, "id" | "email" | "phoneNumber">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    isEmailVerified?: SortOrderInput | SortOrder
    isNumberVerified?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tempToken?: SortOrderInput | SortOrder
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
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    isEmailVerified?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    isNumberVerified?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    tempToken?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type UserInfoWhereInput = {
    AND?: UserInfoWhereInput | UserInfoWhereInput[]
    OR?: UserInfoWhereInput[]
    NOT?: UserInfoWhereInput | UserInfoWhereInput[]
    id?: StringFilter<"UserInfo"> | string
    fullName?: StringFilter<"UserInfo"> | string
    profilePicture?: StringFilter<"UserInfo"> | string
    address?: StringFilter<"UserInfo"> | string
    userType?: StringFilter<"UserInfo"> | string
    userId?: StringFilter<"UserInfo"> | string
    createdAt?: DateTimeFilter<"UserInfo"> | Date | string
    updatedAt?: DateTimeFilter<"UserInfo"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserInfoOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    profilePicture?: SortOrder
    address?: SortOrder
    userType?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserInfoWhereInput | UserInfoWhereInput[]
    OR?: UserInfoWhereInput[]
    NOT?: UserInfoWhereInput | UserInfoWhereInput[]
    fullName?: StringFilter<"UserInfo"> | string
    profilePicture?: StringFilter<"UserInfo"> | string
    address?: StringFilter<"UserInfo"> | string
    userType?: StringFilter<"UserInfo"> | string
    createdAt?: DateTimeFilter<"UserInfo"> | Date | string
    updatedAt?: DateTimeFilter<"UserInfo"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserInfoOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    profilePicture?: SortOrder
    address?: SortOrder
    userType?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserInfoCountOrderByAggregateInput
    _max?: UserInfoMaxOrderByAggregateInput
    _min?: UserInfoMinOrderByAggregateInput
  }

  export type UserInfoScalarWhereWithAggregatesInput = {
    AND?: UserInfoScalarWhereWithAggregatesInput | UserInfoScalarWhereWithAggregatesInput[]
    OR?: UserInfoScalarWhereWithAggregatesInput[]
    NOT?: UserInfoScalarWhereWithAggregatesInput | UserInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserInfo"> | string
    fullName?: StringWithAggregatesFilter<"UserInfo"> | string
    profilePicture?: StringWithAggregatesFilter<"UserInfo"> | string
    address?: StringWithAggregatesFilter<"UserInfo"> | string
    userType?: StringWithAggregatesFilter<"UserInfo"> | string
    userId?: StringWithAggregatesFilter<"UserInfo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserInfo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserInfo"> | Date | string
  }

  export type UserKycWhereInput = {
    AND?: UserKycWhereInput | UserKycWhereInput[]
    OR?: UserKycWhereInput[]
    NOT?: UserKycWhereInput | UserKycWhereInput[]
    id?: IntFilter<"UserKyc"> | number
    userId?: StringFilter<"UserKyc"> | string
    passportPhoto?: StringNullableListFilter<"UserKyc">
    idType?: StringFilter<"UserKyc"> | string
    idFrontImage?: StringFilter<"UserKyc"> | string
    idBackImage?: StringFilter<"UserKyc"> | string
    nyscNumber?: StringNullableFilter<"UserKyc"> | string | null
    nin?: StringFilter<"UserKyc"> | string
    createdAt?: DateTimeFilter<"UserKyc"> | Date | string
    updatedAt?: DateTimeFilter<"UserKyc"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserKycOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    passportPhoto?: SortOrder
    idType?: SortOrder
    idFrontImage?: SortOrder
    idBackImage?: SortOrder
    nyscNumber?: SortOrderInput | SortOrder
    nin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserKycWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: UserKycWhereInput | UserKycWhereInput[]
    OR?: UserKycWhereInput[]
    NOT?: UserKycWhereInput | UserKycWhereInput[]
    passportPhoto?: StringNullableListFilter<"UserKyc">
    idType?: StringFilter<"UserKyc"> | string
    idFrontImage?: StringFilter<"UserKyc"> | string
    idBackImage?: StringFilter<"UserKyc"> | string
    nyscNumber?: StringNullableFilter<"UserKyc"> | string | null
    nin?: StringFilter<"UserKyc"> | string
    createdAt?: DateTimeFilter<"UserKyc"> | Date | string
    updatedAt?: DateTimeFilter<"UserKyc"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserKycOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    passportPhoto?: SortOrder
    idType?: SortOrder
    idFrontImage?: SortOrder
    idBackImage?: SortOrder
    nyscNumber?: SortOrderInput | SortOrder
    nin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserKycCountOrderByAggregateInput
    _avg?: UserKycAvgOrderByAggregateInput
    _max?: UserKycMaxOrderByAggregateInput
    _min?: UserKycMinOrderByAggregateInput
    _sum?: UserKycSumOrderByAggregateInput
  }

  export type UserKycScalarWhereWithAggregatesInput = {
    AND?: UserKycScalarWhereWithAggregatesInput | UserKycScalarWhereWithAggregatesInput[]
    OR?: UserKycScalarWhereWithAggregatesInput[]
    NOT?: UserKycScalarWhereWithAggregatesInput | UserKycScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserKyc"> | number
    userId?: StringWithAggregatesFilter<"UserKyc"> | string
    passportPhoto?: StringNullableListFilter<"UserKyc">
    idType?: StringWithAggregatesFilter<"UserKyc"> | string
    idFrontImage?: StringWithAggregatesFilter<"UserKyc"> | string
    idBackImage?: StringWithAggregatesFilter<"UserKyc"> | string
    nyscNumber?: StringNullableWithAggregatesFilter<"UserKyc"> | string | null
    nin?: StringWithAggregatesFilter<"UserKyc"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserKyc"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserKyc"> | Date | string
  }

  export type RealEstateWhereInput = {
    AND?: RealEstateWhereInput | RealEstateWhereInput[]
    OR?: RealEstateWhereInput[]
    NOT?: RealEstateWhereInput | RealEstateWhereInput[]
    id?: IntFilter<"RealEstate"> | number
    userId?: StringFilter<"RealEstate"> | string
    houseName?: StringNullableFilter<"RealEstate"> | string | null
    category?: StringFilter<"RealEstate"> | string
    numberOfRooms?: IntFilter<"RealEstate"> | number
    pictures?: StringNullableListFilter<"RealEstate">
    mainPictureIndex?: IntFilter<"RealEstate"> | number
    description?: StringFilter<"RealEstate"> | string
    state?: StringFilter<"RealEstate"> | string
    lga?: StringFilter<"RealEstate"> | string
    country?: StringFilter<"RealEstate"> | string
    nearby?: StringNullableListFilter<"RealEstate">
    amenities?: StringNullableListFilter<"RealEstate">
    address?: StringFilter<"RealEstate"> | string
    createdAt?: DateTimeFilter<"RealEstate"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    reviews?: ReviewListRelationFilter
  }

  export type RealEstateOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    houseName?: SortOrderInput | SortOrder
    category?: SortOrder
    numberOfRooms?: SortOrder
    pictures?: SortOrder
    mainPictureIndex?: SortOrder
    description?: SortOrder
    state?: SortOrder
    lga?: SortOrder
    country?: SortOrder
    nearby?: SortOrder
    amenities?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type RealEstateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RealEstateWhereInput | RealEstateWhereInput[]
    OR?: RealEstateWhereInput[]
    NOT?: RealEstateWhereInput | RealEstateWhereInput[]
    userId?: StringFilter<"RealEstate"> | string
    houseName?: StringNullableFilter<"RealEstate"> | string | null
    category?: StringFilter<"RealEstate"> | string
    numberOfRooms?: IntFilter<"RealEstate"> | number
    pictures?: StringNullableListFilter<"RealEstate">
    mainPictureIndex?: IntFilter<"RealEstate"> | number
    description?: StringFilter<"RealEstate"> | string
    state?: StringFilter<"RealEstate"> | string
    lga?: StringFilter<"RealEstate"> | string
    country?: StringFilter<"RealEstate"> | string
    nearby?: StringNullableListFilter<"RealEstate">
    amenities?: StringNullableListFilter<"RealEstate">
    address?: StringFilter<"RealEstate"> | string
    createdAt?: DateTimeFilter<"RealEstate"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    reviews?: ReviewListRelationFilter
  }, "id">

  export type RealEstateOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    houseName?: SortOrderInput | SortOrder
    category?: SortOrder
    numberOfRooms?: SortOrder
    pictures?: SortOrder
    mainPictureIndex?: SortOrder
    description?: SortOrder
    state?: SortOrder
    lga?: SortOrder
    country?: SortOrder
    nearby?: SortOrder
    amenities?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    _count?: RealEstateCountOrderByAggregateInput
    _avg?: RealEstateAvgOrderByAggregateInput
    _max?: RealEstateMaxOrderByAggregateInput
    _min?: RealEstateMinOrderByAggregateInput
    _sum?: RealEstateSumOrderByAggregateInput
  }

  export type RealEstateScalarWhereWithAggregatesInput = {
    AND?: RealEstateScalarWhereWithAggregatesInput | RealEstateScalarWhereWithAggregatesInput[]
    OR?: RealEstateScalarWhereWithAggregatesInput[]
    NOT?: RealEstateScalarWhereWithAggregatesInput | RealEstateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RealEstate"> | number
    userId?: StringWithAggregatesFilter<"RealEstate"> | string
    houseName?: StringNullableWithAggregatesFilter<"RealEstate"> | string | null
    category?: StringWithAggregatesFilter<"RealEstate"> | string
    numberOfRooms?: IntWithAggregatesFilter<"RealEstate"> | number
    pictures?: StringNullableListFilter<"RealEstate">
    mainPictureIndex?: IntWithAggregatesFilter<"RealEstate"> | number
    description?: StringWithAggregatesFilter<"RealEstate"> | string
    state?: StringWithAggregatesFilter<"RealEstate"> | string
    lga?: StringWithAggregatesFilter<"RealEstate"> | string
    country?: StringWithAggregatesFilter<"RealEstate"> | string
    nearby?: StringNullableListFilter<"RealEstate">
    amenities?: StringNullableListFilter<"RealEstate">
    address?: StringWithAggregatesFilter<"RealEstate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RealEstate"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    userId?: StringFilter<"Review"> | string
    realEstateId?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    propertyPictures?: StringNullableListFilter<"Review">
    createdAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    realEstate?: XOR<RealEstateRelationFilter, RealEstateWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    realEstateId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    propertyPictures?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    realEstate?: RealEstateOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_realEstateId?: ReviewUserIdRealEstateIdCompoundUniqueInput
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    userId?: StringFilter<"Review"> | string
    realEstateId?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    propertyPictures?: StringNullableListFilter<"Review">
    createdAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    realEstate?: XOR<RealEstateRelationFilter, RealEstateWhereInput>
  }, "id" | "userId_realEstateId">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    realEstateId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    propertyPictures?: SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    userId?: StringWithAggregatesFilter<"Review"> | string
    realEstateId?: IntWithAggregatesFilter<"Review"> | number
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    propertyPictures?: StringNullableListFilter<"Review">
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: IntFilter<"Report"> | number
    userId?: StringFilter<"Report"> | string
    reportCategory?: StringFilter<"Report"> | string
    comment?: StringNullableFilter<"Report"> | string | null
    reportPriority?: StringFilter<"Report"> | string
    reportableType?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    reportCategory?: SortOrder
    comment?: SortOrderInput | SortOrder
    reportPriority?: SortOrder
    reportableType?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    userId?: StringFilter<"Report"> | string
    reportCategory?: StringFilter<"Report"> | string
    comment?: StringNullableFilter<"Report"> | string | null
    reportPriority?: StringFilter<"Report"> | string
    reportableType?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    reportCategory?: SortOrder
    comment?: SortOrderInput | SortOrder
    reportPriority?: SortOrder
    reportableType?: SortOrder
    createdAt?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _avg?: ReportAvgOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
    _sum?: ReportSumOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Report"> | number
    userId?: StringWithAggregatesFilter<"Report"> | string
    reportCategory?: StringWithAggregatesFilter<"Report"> | string
    comment?: StringNullableWithAggregatesFilter<"Report"> | string | null
    reportPriority?: StringWithAggregatesFilter<"Report"> | string
    reportableType?: StringWithAggregatesFilter<"Report"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: IntFilter<"ChatMessage"> | number
    senderId?: StringFilter<"ChatMessage"> | string
    receiverId?: StringFilter<"ChatMessage"> | string
    message?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    isRead?: BoolFilter<"ChatMessage"> | boolean
    isDelivered?: BoolFilter<"ChatMessage"> | boolean
    sender?: XOR<UserRelationFilter, UserWhereInput>
    receiver?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    isDelivered?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    senderId?: StringFilter<"ChatMessage"> | string
    receiverId?: StringFilter<"ChatMessage"> | string
    message?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    isRead?: BoolFilter<"ChatMessage"> | boolean
    isDelivered?: BoolFilter<"ChatMessage"> | boolean
    sender?: XOR<UserRelationFilter, UserWhereInput>
    receiver?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    isDelivered?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _avg?: ChatMessageAvgOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
    _sum?: ChatMessageSumOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatMessage"> | number
    senderId?: StringWithAggregatesFilter<"ChatMessage"> | string
    receiverId?: StringWithAggregatesFilter<"ChatMessage"> | string
    message?: StringWithAggregatesFilter<"ChatMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
    isRead?: BoolWithAggregatesFilter<"ChatMessage"> | boolean
    isDelivered?: BoolWithAggregatesFilter<"ChatMessage"> | boolean
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: IntFilter<"Contact"> | number
    firstName?: StringFilter<"Contact"> | string
    lastName?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    message?: StringFilter<"Contact"> | string
    createdAt?: DateTimeFilter<"Contact"> | Date | string
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    firstName?: StringFilter<"Contact"> | string
    lastName?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    message?: StringFilter<"Contact"> | string
    createdAt?: DateTimeFilter<"Contact"> | Date | string
  }, "id">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _avg?: ContactAvgOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
    _sum?: ContactSumOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contact"> | number
    firstName?: StringWithAggregatesFilter<"Contact"> | string
    lastName?: StringWithAggregatesFilter<"Contact"> | string
    email?: StringWithAggregatesFilter<"Contact"> | string
    message?: StringWithAggregatesFilter<"Contact"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
  }

  export type JobMarketWhereInput = {
    AND?: JobMarketWhereInput | JobMarketWhereInput[]
    OR?: JobMarketWhereInput[]
    NOT?: JobMarketWhereInput | JobMarketWhereInput[]
    id?: IntFilter<"JobMarket"> | number
    userId?: StringFilter<"JobMarket"> | string
    companyName?: StringFilter<"JobMarket"> | string
    jobTitle?: StringFilter<"JobMarket"> | string
    jobDescription?: StringFilter<"JobMarket"> | string
    keyResponsibilities?: StringNullableListFilter<"JobMarket">
    qualifications?: StringNullableListFilter<"JobMarket">
    workArrangement?: StringFilter<"JobMarket"> | string
    createdAt?: DateTimeFilter<"JobMarket"> | Date | string
    updatedAt?: DateTimeFilter<"JobMarket"> | Date | string
    applicationUrl?: StringFilter<"JobMarket"> | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type JobMarketOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    jobDescription?: SortOrder
    keyResponsibilities?: SortOrder
    qualifications?: SortOrder
    workArrangement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applicationUrl?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type JobMarketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JobMarketWhereInput | JobMarketWhereInput[]
    OR?: JobMarketWhereInput[]
    NOT?: JobMarketWhereInput | JobMarketWhereInput[]
    userId?: StringFilter<"JobMarket"> | string
    companyName?: StringFilter<"JobMarket"> | string
    jobTitle?: StringFilter<"JobMarket"> | string
    jobDescription?: StringFilter<"JobMarket"> | string
    keyResponsibilities?: StringNullableListFilter<"JobMarket">
    qualifications?: StringNullableListFilter<"JobMarket">
    workArrangement?: StringFilter<"JobMarket"> | string
    createdAt?: DateTimeFilter<"JobMarket"> | Date | string
    updatedAt?: DateTimeFilter<"JobMarket"> | Date | string
    applicationUrl?: StringFilter<"JobMarket"> | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type JobMarketOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    jobDescription?: SortOrder
    keyResponsibilities?: SortOrder
    qualifications?: SortOrder
    workArrangement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applicationUrl?: SortOrder
    _count?: JobMarketCountOrderByAggregateInput
    _avg?: JobMarketAvgOrderByAggregateInput
    _max?: JobMarketMaxOrderByAggregateInput
    _min?: JobMarketMinOrderByAggregateInput
    _sum?: JobMarketSumOrderByAggregateInput
  }

  export type JobMarketScalarWhereWithAggregatesInput = {
    AND?: JobMarketScalarWhereWithAggregatesInput | JobMarketScalarWhereWithAggregatesInput[]
    OR?: JobMarketScalarWhereWithAggregatesInput[]
    NOT?: JobMarketScalarWhereWithAggregatesInput | JobMarketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JobMarket"> | number
    userId?: StringWithAggregatesFilter<"JobMarket"> | string
    companyName?: StringWithAggregatesFilter<"JobMarket"> | string
    jobTitle?: StringWithAggregatesFilter<"JobMarket"> | string
    jobDescription?: StringWithAggregatesFilter<"JobMarket"> | string
    keyResponsibilities?: StringNullableListFilter<"JobMarket">
    qualifications?: StringNullableListFilter<"JobMarket">
    workArrangement?: StringWithAggregatesFilter<"JobMarket"> | string
    createdAt?: DateTimeWithAggregatesFilter<"JobMarket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobMarket"> | Date | string
    applicationUrl?: StringWithAggregatesFilter<"JobMarket"> | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    status?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    priority?: StringFilter<"Notification"> | string
    actionButtonLabel?: StringNullableFilter<"Notification"> | string | null
    actionButtonLink?: StringNullableFilter<"Notification"> | string | null
    relatedResourceLink?: StringNullableFilter<"Notification"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    type?: SortOrder
    priority?: SortOrder
    actionButtonLabel?: SortOrderInput | SortOrder
    actionButtonLink?: SortOrderInput | SortOrder
    relatedResourceLink?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    status?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    priority?: StringFilter<"Notification"> | string
    actionButtonLabel?: StringNullableFilter<"Notification"> | string | null
    actionButtonLink?: StringNullableFilter<"Notification"> | string | null
    relatedResourceLink?: StringNullableFilter<"Notification"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    type?: SortOrder
    priority?: SortOrder
    actionButtonLabel?: SortOrderInput | SortOrder
    actionButtonLink?: SortOrderInput | SortOrder
    relatedResourceLink?: SortOrderInput | SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    userId?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    status?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    priority?: StringWithAggregatesFilter<"Notification"> | string
    actionButtonLabel?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    actionButtonLink?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    relatedResourceLink?: StringNullableWithAggregatesFilter<"Notification"> | string | null
  }

  export type PropertyMarketWhereInput = {
    AND?: PropertyMarketWhereInput | PropertyMarketWhereInput[]
    OR?: PropertyMarketWhereInput[]
    NOT?: PropertyMarketWhereInput | PropertyMarketWhereInput[]
    id?: IntFilter<"PropertyMarket"> | number
    userId?: StringFilter<"PropertyMarket"> | string
    title?: StringFilter<"PropertyMarket"> | string
    description?: StringFilter<"PropertyMarket"> | string
    price?: FloatFilter<"PropertyMarket"> | number
    images?: StringNullableListFilter<"PropertyMarket">
    location?: StringFilter<"PropertyMarket"> | string
    createdAt?: DateTimeFilter<"PropertyMarket"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PropertyMarketOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    images?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PropertyMarketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropertyMarketWhereInput | PropertyMarketWhereInput[]
    OR?: PropertyMarketWhereInput[]
    NOT?: PropertyMarketWhereInput | PropertyMarketWhereInput[]
    userId?: StringFilter<"PropertyMarket"> | string
    title?: StringFilter<"PropertyMarket"> | string
    description?: StringFilter<"PropertyMarket"> | string
    price?: FloatFilter<"PropertyMarket"> | number
    images?: StringNullableListFilter<"PropertyMarket">
    location?: StringFilter<"PropertyMarket"> | string
    createdAt?: DateTimeFilter<"PropertyMarket"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type PropertyMarketOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    images?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    _count?: PropertyMarketCountOrderByAggregateInput
    _avg?: PropertyMarketAvgOrderByAggregateInput
    _max?: PropertyMarketMaxOrderByAggregateInput
    _min?: PropertyMarketMinOrderByAggregateInput
    _sum?: PropertyMarketSumOrderByAggregateInput
  }

  export type PropertyMarketScalarWhereWithAggregatesInput = {
    AND?: PropertyMarketScalarWhereWithAggregatesInput | PropertyMarketScalarWhereWithAggregatesInput[]
    OR?: PropertyMarketScalarWhereWithAggregatesInput[]
    NOT?: PropertyMarketScalarWhereWithAggregatesInput | PropertyMarketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PropertyMarket"> | number
    userId?: StringWithAggregatesFilter<"PropertyMarket"> | string
    title?: StringWithAggregatesFilter<"PropertyMarket"> | string
    description?: StringWithAggregatesFilter<"PropertyMarket"> | string
    price?: FloatWithAggregatesFilter<"PropertyMarket"> | number
    images?: StringNullableListFilter<"PropertyMarket">
    location?: StringWithAggregatesFilter<"PropertyMarket"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PropertyMarket"> | Date | string
  }

  export type ReminderWhereInput = {
    AND?: ReminderWhereInput | ReminderWhereInput[]
    OR?: ReminderWhereInput[]
    NOT?: ReminderWhereInput | ReminderWhereInput[]
    id?: IntFilter<"Reminder"> | number
    userId?: StringFilter<"Reminder"> | string
    title?: StringFilter<"Reminder"> | string
    location?: StringFilter<"Reminder"> | string
    time?: DateTimeFilter<"Reminder"> | Date | string
    dueDate?: DateTimeFilter<"Reminder"> | Date | string
    note?: StringFilter<"Reminder"> | string
    appointmentContactNumber?: StringFilter<"Reminder"> | string
    status?: BoolFilter<"Reminder"> | boolean
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ReminderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    location?: SortOrder
    time?: SortOrder
    dueDate?: SortOrder
    note?: SortOrder
    appointmentContactNumber?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ReminderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReminderWhereInput | ReminderWhereInput[]
    OR?: ReminderWhereInput[]
    NOT?: ReminderWhereInput | ReminderWhereInput[]
    userId?: StringFilter<"Reminder"> | string
    title?: StringFilter<"Reminder"> | string
    location?: StringFilter<"Reminder"> | string
    time?: DateTimeFilter<"Reminder"> | Date | string
    dueDate?: DateTimeFilter<"Reminder"> | Date | string
    note?: StringFilter<"Reminder"> | string
    appointmentContactNumber?: StringFilter<"Reminder"> | string
    status?: BoolFilter<"Reminder"> | boolean
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ReminderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    location?: SortOrder
    time?: SortOrder
    dueDate?: SortOrder
    note?: SortOrder
    appointmentContactNumber?: SortOrder
    status?: SortOrder
    _count?: ReminderCountOrderByAggregateInput
    _avg?: ReminderAvgOrderByAggregateInput
    _max?: ReminderMaxOrderByAggregateInput
    _min?: ReminderMinOrderByAggregateInput
    _sum?: ReminderSumOrderByAggregateInput
  }

  export type ReminderScalarWhereWithAggregatesInput = {
    AND?: ReminderScalarWhereWithAggregatesInput | ReminderScalarWhereWithAggregatesInput[]
    OR?: ReminderScalarWhereWithAggregatesInput[]
    NOT?: ReminderScalarWhereWithAggregatesInput | ReminderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reminder"> | number
    userId?: StringWithAggregatesFilter<"Reminder"> | string
    title?: StringWithAggregatesFilter<"Reminder"> | string
    location?: StringWithAggregatesFilter<"Reminder"> | string
    time?: DateTimeWithAggregatesFilter<"Reminder"> | Date | string
    dueDate?: DateTimeWithAggregatesFilter<"Reminder"> | Date | string
    note?: StringWithAggregatesFilter<"Reminder"> | string
    appointmentContactNumber?: StringWithAggregatesFilter<"Reminder"> | string
    status?: BoolWithAggregatesFilter<"Reminder"> | boolean
  }

  export type SearchWhereInput = {
    AND?: SearchWhereInput | SearchWhereInput[]
    OR?: SearchWhereInput[]
    NOT?: SearchWhereInput | SearchWhereInput[]
    id?: IntFilter<"Search"> | number
    userId?: StringFilter<"Search"> | string
    query?: StringFilter<"Search"> | string
    timestamp?: DateTimeFilter<"Search"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SearchOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    query?: SortOrder
    timestamp?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SearchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SearchWhereInput | SearchWhereInput[]
    OR?: SearchWhereInput[]
    NOT?: SearchWhereInput | SearchWhereInput[]
    userId?: StringFilter<"Search"> | string
    query?: StringFilter<"Search"> | string
    timestamp?: DateTimeFilter<"Search"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type SearchOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    query?: SortOrder
    timestamp?: SortOrder
    _count?: SearchCountOrderByAggregateInput
    _avg?: SearchAvgOrderByAggregateInput
    _max?: SearchMaxOrderByAggregateInput
    _min?: SearchMinOrderByAggregateInput
    _sum?: SearchSumOrderByAggregateInput
  }

  export type SearchScalarWhereWithAggregatesInput = {
    AND?: SearchScalarWhereWithAggregatesInput | SearchScalarWhereWithAggregatesInput[]
    OR?: SearchScalarWhereWithAggregatesInput[]
    NOT?: SearchScalarWhereWithAggregatesInput | SearchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Search"> | number
    userId?: StringWithAggregatesFilter<"Search"> | string
    query?: StringWithAggregatesFilter<"Search"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Search"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    roles?: RoleListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roles?: RoleOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    roles?: RoleListRelationFilter
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    admins?: AdminListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    admins?: AdminOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    admins?: AdminListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
  }

  export type RealEstateInterestWhereInput = {
    AND?: RealEstateInterestWhereInput | RealEstateInterestWhereInput[]
    OR?: RealEstateInterestWhereInput[]
    NOT?: RealEstateInterestWhereInput | RealEstateInterestWhereInput[]
    id?: IntFilter<"RealEstateInterest"> | number
    userId?: StringFilter<"RealEstateInterest"> | string
    state?: StringNullableListFilter<"RealEstateInterest">
    lga?: StringNullableListFilter<"RealEstateInterest">
    country?: StringNullableListFilter<"RealEstateInterest">
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type RealEstateInterestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    state?: SortOrder
    lga?: SortOrder
    country?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RealEstateInterestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: RealEstateInterestWhereInput | RealEstateInterestWhereInput[]
    OR?: RealEstateInterestWhereInput[]
    NOT?: RealEstateInterestWhereInput | RealEstateInterestWhereInput[]
    state?: StringNullableListFilter<"RealEstateInterest">
    lga?: StringNullableListFilter<"RealEstateInterest">
    country?: StringNullableListFilter<"RealEstateInterest">
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type RealEstateInterestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    state?: SortOrder
    lga?: SortOrder
    country?: SortOrder
    _count?: RealEstateInterestCountOrderByAggregateInput
    _avg?: RealEstateInterestAvgOrderByAggregateInput
    _max?: RealEstateInterestMaxOrderByAggregateInput
    _min?: RealEstateInterestMinOrderByAggregateInput
    _sum?: RealEstateInterestSumOrderByAggregateInput
  }

  export type RealEstateInterestScalarWhereWithAggregatesInput = {
    AND?: RealEstateInterestScalarWhereWithAggregatesInput | RealEstateInterestScalarWhereWithAggregatesInput[]
    OR?: RealEstateInterestScalarWhereWithAggregatesInput[]
    NOT?: RealEstateInterestScalarWhereWithAggregatesInput | RealEstateInterestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RealEstateInterest"> | number
    userId?: StringWithAggregatesFilter<"RealEstateInterest"> | string
    state?: StringNullableListFilter<"RealEstateInterest">
    lga?: StringNullableListFilter<"RealEstateInterest">
    country?: StringNullableListFilter<"RealEstateInterest">
  }

  export type UserCreateInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
    chatMessagesSent?: ChatMessageCreateNestedManyWithoutSenderInput
    chatMessagesReceived?: ChatMessageCreateNestedManyWithoutReceiverInput
    jobsApplied?: JobMarketCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    propertiesUploaded?: PropertyMarketCreateNestedManyWithoutUserInput
    apartmentsUploaded?: RealEstateCreateNestedManyWithoutUserInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    searches?: SearchCreateNestedManyWithoutUserInput
    realEstateInterest?: RealEstateInterestCreateNestedOneWithoutUserInput
    userKyc?: UserKycCreateNestedOneWithoutUserInput
    userInfo?: UserInfoCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
    chatMessagesSent?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    chatMessagesReceived?: ChatMessageUncheckedCreateNestedManyWithoutReceiverInput
    jobsApplied?: JobMarketUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    propertiesUploaded?: PropertyMarketUncheckedCreateNestedManyWithoutUserInput
    apartmentsUploaded?: RealEstateUncheckedCreateNestedManyWithoutUserInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    searches?: SearchUncheckedCreateNestedManyWithoutUserInput
    realEstateInterest?: RealEstateInterestUncheckedCreateNestedOneWithoutUserInput
    userKyc?: UserKycUncheckedCreateNestedOneWithoutUserInput
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessagesSent?: ChatMessageUpdateManyWithoutSenderNestedInput
    chatMessagesReceived?: ChatMessageUpdateManyWithoutReceiverNestedInput
    jobsApplied?: JobMarketUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    propertiesUploaded?: PropertyMarketUpdateManyWithoutUserNestedInput
    apartmentsUploaded?: RealEstateUpdateManyWithoutUserNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    searches?: SearchUpdateManyWithoutUserNestedInput
    realEstateInterest?: RealEstateInterestUpdateOneWithoutUserNestedInput
    userKyc?: UserKycUpdateOneWithoutUserNestedInput
    userInfo?: UserInfoUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessagesSent?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    chatMessagesReceived?: ChatMessageUncheckedUpdateManyWithoutReceiverNestedInput
    jobsApplied?: JobMarketUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    propertiesUploaded?: PropertyMarketUncheckedUpdateManyWithoutUserNestedInput
    apartmentsUploaded?: RealEstateUncheckedUpdateManyWithoutUserNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    searches?: SearchUncheckedUpdateManyWithoutUserNestedInput
    realEstateInterest?: RealEstateInterestUncheckedUpdateOneWithoutUserNestedInput
    userKyc?: UserKycUncheckedUpdateOneWithoutUserNestedInput
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserInfoCreateInput = {
    id?: string
    fullName: string
    profilePicture: string
    address: string
    userType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserInfoInput
  }

  export type UserInfoUncheckedCreateInput = {
    id?: string
    fullName: string
    profilePicture: string
    address: string
    userType: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserInfoNestedInput
  }

  export type UserInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInfoCreateManyInput = {
    id?: string
    fullName: string
    profilePicture: string
    address: string
    userType: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserKycCreateInput = {
    passportPhoto?: UserKycCreatepassportPhotoInput | string[]
    idType: string
    idFrontImage: string
    idBackImage: string
    nyscNumber?: string | null
    nin: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserKycInput
  }

  export type UserKycUncheckedCreateInput = {
    id?: number
    userId: string
    passportPhoto?: UserKycCreatepassportPhotoInput | string[]
    idType: string
    idFrontImage: string
    idBackImage: string
    nyscNumber?: string | null
    nin: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserKycUpdateInput = {
    passportPhoto?: UserKycUpdatepassportPhotoInput | string[]
    idType?: StringFieldUpdateOperationsInput | string
    idFrontImage?: StringFieldUpdateOperationsInput | string
    idBackImage?: StringFieldUpdateOperationsInput | string
    nyscNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nin?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserKycNestedInput
  }

  export type UserKycUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    passportPhoto?: UserKycUpdatepassportPhotoInput | string[]
    idType?: StringFieldUpdateOperationsInput | string
    idFrontImage?: StringFieldUpdateOperationsInput | string
    idBackImage?: StringFieldUpdateOperationsInput | string
    nyscNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nin?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserKycCreateManyInput = {
    id?: number
    userId: string
    passportPhoto?: UserKycCreatepassportPhotoInput | string[]
    idType: string
    idFrontImage: string
    idBackImage: string
    nyscNumber?: string | null
    nin: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserKycUpdateManyMutationInput = {
    passportPhoto?: UserKycUpdatepassportPhotoInput | string[]
    idType?: StringFieldUpdateOperationsInput | string
    idFrontImage?: StringFieldUpdateOperationsInput | string
    idBackImage?: StringFieldUpdateOperationsInput | string
    nyscNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nin?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserKycUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    passportPhoto?: UserKycUpdatepassportPhotoInput | string[]
    idType?: StringFieldUpdateOperationsInput | string
    idFrontImage?: StringFieldUpdateOperationsInput | string
    idBackImage?: StringFieldUpdateOperationsInput | string
    nyscNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nin?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RealEstateCreateInput = {
    houseName?: string | null
    category: string
    numberOfRooms: number
    pictures?: RealEstateCreatepicturesInput | string[]
    mainPictureIndex: number
    description: string
    state: string
    lga: string
    country?: string
    nearby?: RealEstateCreatenearbyInput | string[]
    amenities?: RealEstateCreateamenitiesInput | string[]
    address: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutApartmentsUploadedInput
    reviews?: ReviewCreateNestedManyWithoutRealEstateInput
  }

  export type RealEstateUncheckedCreateInput = {
    id?: number
    userId: string
    houseName?: string | null
    category: string
    numberOfRooms: number
    pictures?: RealEstateCreatepicturesInput | string[]
    mainPictureIndex: number
    description: string
    state: string
    lga: string
    country?: string
    nearby?: RealEstateCreatenearbyInput | string[]
    amenities?: RealEstateCreateamenitiesInput | string[]
    address: string
    createdAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutRealEstateInput
  }

  export type RealEstateUpdateInput = {
    houseName?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    pictures?: RealEstateUpdatepicturesInput | string[]
    mainPictureIndex?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    nearby?: RealEstateUpdatenearbyInput | string[]
    amenities?: RealEstateUpdateamenitiesInput | string[]
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApartmentsUploadedNestedInput
    reviews?: ReviewUpdateManyWithoutRealEstateNestedInput
  }

  export type RealEstateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    houseName?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    pictures?: RealEstateUpdatepicturesInput | string[]
    mainPictureIndex?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    nearby?: RealEstateUpdatenearbyInput | string[]
    amenities?: RealEstateUpdateamenitiesInput | string[]
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutRealEstateNestedInput
  }

  export type RealEstateCreateManyInput = {
    id?: number
    userId: string
    houseName?: string | null
    category: string
    numberOfRooms: number
    pictures?: RealEstateCreatepicturesInput | string[]
    mainPictureIndex: number
    description: string
    state: string
    lga: string
    country?: string
    nearby?: RealEstateCreatenearbyInput | string[]
    amenities?: RealEstateCreateamenitiesInput | string[]
    address: string
    createdAt?: Date | string
  }

  export type RealEstateUpdateManyMutationInput = {
    houseName?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    pictures?: RealEstateUpdatepicturesInput | string[]
    mainPictureIndex?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    nearby?: RealEstateUpdatenearbyInput | string[]
    amenities?: RealEstateUpdateamenitiesInput | string[]
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RealEstateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    houseName?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    pictures?: RealEstateUpdatepicturesInput | string[]
    mainPictureIndex?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    nearby?: RealEstateUpdatenearbyInput | string[]
    amenities?: RealEstateUpdateamenitiesInput | string[]
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    rating: number
    comment?: string | null
    propertyPictures?: ReviewCreatepropertyPicturesInput | string[]
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    realEstate: RealEstateCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    userId: string
    realEstateId: number
    rating: number
    comment?: string | null
    propertyPictures?: ReviewCreatepropertyPicturesInput | string[]
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    propertyPictures?: ReviewUpdatepropertyPicturesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    realEstate?: RealEstateUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    realEstateId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    propertyPictures?: ReviewUpdatepropertyPicturesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: number
    userId: string
    realEstateId: number
    rating: number
    comment?: string | null
    propertyPictures?: ReviewCreatepropertyPicturesInput | string[]
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    propertyPictures?: ReviewUpdatepropertyPicturesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    realEstateId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    propertyPictures?: ReviewUpdatepropertyPicturesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateInput = {
    reportCategory: string
    comment?: string | null
    reportPriority: string
    reportableType: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateInput = {
    id?: number
    userId: string
    reportCategory: string
    comment?: string | null
    reportPriority: string
    reportableType: string
    createdAt?: Date | string
  }

  export type ReportUpdateInput = {
    reportCategory?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reportPriority?: StringFieldUpdateOperationsInput | string
    reportableType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    reportCategory?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reportPriority?: StringFieldUpdateOperationsInput | string
    reportableType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyInput = {
    id?: number
    userId: string
    reportCategory: string
    comment?: string | null
    reportPriority: string
    reportableType: string
    createdAt?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    reportCategory?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reportPriority?: StringFieldUpdateOperationsInput | string
    reportableType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    reportCategory?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reportPriority?: StringFieldUpdateOperationsInput | string
    reportableType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateInput = {
    message: string
    createdAt?: Date | string
    isRead?: boolean
    isDelivered?: boolean
    sender: UserCreateNestedOneWithoutChatMessagesSentInput
    receiver: UserCreateNestedOneWithoutChatMessagesReceivedInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: number
    senderId: string
    receiverId: string
    message: string
    createdAt?: Date | string
    isRead?: boolean
    isDelivered?: boolean
  }

  export type ChatMessageUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    sender?: UserUpdateOneRequiredWithoutChatMessagesSentNestedInput
    receiver?: UserUpdateOneRequiredWithoutChatMessagesReceivedNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChatMessageCreateManyInput = {
    id?: number
    senderId: string
    receiverId: string
    message: string
    createdAt?: Date | string
    isRead?: boolean
    isDelivered?: boolean
  }

  export type ChatMessageUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContactCreateInput = {
    firstName: string
    lastName: string
    email: string
    message: string
    createdAt?: Date | string
  }

  export type ContactUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    message: string
    createdAt?: Date | string
  }

  export type ContactUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    message: string
    createdAt?: Date | string
  }

  export type ContactUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobMarketCreateInput = {
    companyName: string
    jobTitle: string
    jobDescription: string
    keyResponsibilities?: JobMarketCreatekeyResponsibilitiesInput | string[]
    qualifications?: JobMarketCreatequalificationsInput | string[]
    workArrangement: string
    createdAt?: Date | string
    updatedAt?: Date | string
    applicationUrl: string
    user?: UserCreateNestedOneWithoutJobsAppliedInput
  }

  export type JobMarketUncheckedCreateInput = {
    id?: number
    userId: string
    companyName: string
    jobTitle: string
    jobDescription: string
    keyResponsibilities?: JobMarketCreatekeyResponsibilitiesInput | string[]
    qualifications?: JobMarketCreatequalificationsInput | string[]
    workArrangement: string
    createdAt?: Date | string
    updatedAt?: Date | string
    applicationUrl: string
  }

  export type JobMarketUpdateInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobDescription?: StringFieldUpdateOperationsInput | string
    keyResponsibilities?: JobMarketUpdatekeyResponsibilitiesInput | string[]
    qualifications?: JobMarketUpdatequalificationsInput | string[]
    workArrangement?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicationUrl?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutJobsAppliedNestedInput
  }

  export type JobMarketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobDescription?: StringFieldUpdateOperationsInput | string
    keyResponsibilities?: JobMarketUpdatekeyResponsibilitiesInput | string[]
    qualifications?: JobMarketUpdatequalificationsInput | string[]
    workArrangement?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicationUrl?: StringFieldUpdateOperationsInput | string
  }

  export type JobMarketCreateManyInput = {
    id?: number
    userId: string
    companyName: string
    jobTitle: string
    jobDescription: string
    keyResponsibilities?: JobMarketCreatekeyResponsibilitiesInput | string[]
    qualifications?: JobMarketCreatequalificationsInput | string[]
    workArrangement: string
    createdAt?: Date | string
    updatedAt?: Date | string
    applicationUrl: string
  }

  export type JobMarketUpdateManyMutationInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobDescription?: StringFieldUpdateOperationsInput | string
    keyResponsibilities?: JobMarketUpdatekeyResponsibilitiesInput | string[]
    qualifications?: JobMarketUpdatequalificationsInput | string[]
    workArrangement?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicationUrl?: StringFieldUpdateOperationsInput | string
  }

  export type JobMarketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobDescription?: StringFieldUpdateOperationsInput | string
    keyResponsibilities?: JobMarketUpdatekeyResponsibilitiesInput | string[]
    qualifications?: JobMarketUpdatequalificationsInput | string[]
    workArrangement?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicationUrl?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateInput = {
    message: string
    createdAt?: Date | string
    status: string
    type: string
    priority: string
    actionButtonLabel?: string | null
    actionButtonLink?: string | null
    relatedResourceLink?: string | null
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    userId: string
    message: string
    createdAt?: Date | string
    status: string
    type: string
    priority: string
    actionButtonLabel?: string | null
    actionButtonLink?: string | null
    relatedResourceLink?: string | null
  }

  export type NotificationUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    actionButtonLabel?: NullableStringFieldUpdateOperationsInput | string | null
    actionButtonLink?: NullableStringFieldUpdateOperationsInput | string | null
    relatedResourceLink?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    actionButtonLabel?: NullableStringFieldUpdateOperationsInput | string | null
    actionButtonLink?: NullableStringFieldUpdateOperationsInput | string | null
    relatedResourceLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationCreateManyInput = {
    id?: number
    userId: string
    message: string
    createdAt?: Date | string
    status: string
    type: string
    priority: string
    actionButtonLabel?: string | null
    actionButtonLink?: string | null
    relatedResourceLink?: string | null
  }

  export type NotificationUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    actionButtonLabel?: NullableStringFieldUpdateOperationsInput | string | null
    actionButtonLink?: NullableStringFieldUpdateOperationsInput | string | null
    relatedResourceLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    actionButtonLabel?: NullableStringFieldUpdateOperationsInput | string | null
    actionButtonLink?: NullableStringFieldUpdateOperationsInput | string | null
    relatedResourceLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropertyMarketCreateInput = {
    title: string
    description: string
    price: number
    images?: PropertyMarketCreateimagesInput | string[]
    location: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPropertiesUploadedInput
  }

  export type PropertyMarketUncheckedCreateInput = {
    id?: number
    userId: string
    title: string
    description: string
    price: number
    images?: PropertyMarketCreateimagesInput | string[]
    location: string
    createdAt?: Date | string
  }

  export type PropertyMarketUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    images?: PropertyMarketUpdateimagesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPropertiesUploadedNestedInput
  }

  export type PropertyMarketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    images?: PropertyMarketUpdateimagesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyMarketCreateManyInput = {
    id?: number
    userId: string
    title: string
    description: string
    price: number
    images?: PropertyMarketCreateimagesInput | string[]
    location: string
    createdAt?: Date | string
  }

  export type PropertyMarketUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    images?: PropertyMarketUpdateimagesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyMarketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    images?: PropertyMarketUpdateimagesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderCreateInput = {
    title: string
    location: string
    time: Date | string
    dueDate: Date | string
    note: string
    appointmentContactNumber: string
    status: boolean
    user: UserCreateNestedOneWithoutRemindersInput
  }

  export type ReminderUncheckedCreateInput = {
    id?: number
    userId: string
    title: string
    location: string
    time: Date | string
    dueDate: Date | string
    note: string
    appointmentContactNumber: string
    status: boolean
  }

  export type ReminderUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    appointmentContactNumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutRemindersNestedInput
  }

  export type ReminderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    appointmentContactNumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReminderCreateManyInput = {
    id?: number
    userId: string
    title: string
    location: string
    time: Date | string
    dueDate: Date | string
    note: string
    appointmentContactNumber: string
    status: boolean
  }

  export type ReminderUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    appointmentContactNumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReminderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    appointmentContactNumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SearchCreateInput = {
    query: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutSearchesInput
  }

  export type SearchUncheckedCreateInput = {
    id?: number
    userId: string
    query: string
    timestamp?: Date | string
  }

  export type SearchUpdateInput = {
    query?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSearchesNestedInput
  }

  export type SearchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchCreateManyInput = {
    id?: number
    userId: string
    query: string
    timestamp?: Date | string
  }

  export type SearchUpdateManyMutationInput = {
    query?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleCreateNestedManyWithoutAdminsInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleUncheckedCreateNestedManyWithoutAdminsInput
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUpdateManyWithoutAdminsNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUncheckedUpdateManyWithoutAdminsNestedInput
  }

  export type AdminCreateManyInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    name: string
    admins?: AdminCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: string
    admins?: AdminUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admins?: AdminUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admins?: AdminUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateInterestCreateInput = {
    state?: RealEstateInterestCreatestateInput | string[]
    lga?: RealEstateInterestCreatelgaInput | string[]
    country?: RealEstateInterestCreatecountryInput | string[]
    user: UserCreateNestedOneWithoutRealEstateInterestInput
  }

  export type RealEstateInterestUncheckedCreateInput = {
    id?: number
    userId: string
    state?: RealEstateInterestCreatestateInput | string[]
    lga?: RealEstateInterestCreatelgaInput | string[]
    country?: RealEstateInterestCreatecountryInput | string[]
  }

  export type RealEstateInterestUpdateInput = {
    state?: RealEstateInterestUpdatestateInput | string[]
    lga?: RealEstateInterestUpdatelgaInput | string[]
    country?: RealEstateInterestUpdatecountryInput | string[]
    user?: UserUpdateOneRequiredWithoutRealEstateInterestNestedInput
  }

  export type RealEstateInterestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    state?: RealEstateInterestUpdatestateInput | string[]
    lga?: RealEstateInterestUpdatelgaInput | string[]
    country?: RealEstateInterestUpdatecountryInput | string[]
  }

  export type RealEstateInterestCreateManyInput = {
    id?: number
    userId: string
    state?: RealEstateInterestCreatestateInput | string[]
    lga?: RealEstateInterestCreatelgaInput | string[]
    country?: RealEstateInterestCreatecountryInput | string[]
  }

  export type RealEstateInterestUpdateManyMutationInput = {
    state?: RealEstateInterestUpdatestateInput | string[]
    lga?: RealEstateInterestUpdatelgaInput | string[]
    country?: RealEstateInterestUpdatecountryInput | string[]
  }

  export type RealEstateInterestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    state?: RealEstateInterestUpdatestateInput | string[]
    lga?: RealEstateInterestUpdatelgaInput | string[]
    country?: RealEstateInterestUpdatecountryInput | string[]
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type JobMarketListRelationFilter = {
    every?: JobMarketWhereInput
    some?: JobMarketWhereInput
    none?: JobMarketWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type PropertyMarketListRelationFilter = {
    every?: PropertyMarketWhereInput
    some?: PropertyMarketWhereInput
    none?: PropertyMarketWhereInput
  }

  export type RealEstateListRelationFilter = {
    every?: RealEstateWhereInput
    some?: RealEstateWhereInput
    none?: RealEstateWhereInput
  }

  export type ReminderListRelationFilter = {
    every?: ReminderWhereInput
    some?: ReminderWhereInput
    none?: ReminderWhereInput
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type SearchListRelationFilter = {
    every?: SearchWhereInput
    some?: SearchWhereInput
    none?: SearchWhereInput
  }

  export type RealEstateInterestNullableRelationFilter = {
    is?: RealEstateInterestWhereInput | null
    isNot?: RealEstateInterestWhereInput | null
  }

  export type UserKycNullableRelationFilter = {
    is?: UserKycWhereInput | null
    isNot?: UserKycWhereInput | null
  }

  export type UserInfoNullableRelationFilter = {
    is?: UserInfoWhereInput | null
    isNot?: UserInfoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobMarketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyMarketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RealEstateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReminderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SearchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    isEmailVerified?: SortOrder
    isNumberVerified?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tempToken?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    isEmailVerified?: SortOrder
    isNumberVerified?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tempToken?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    isEmailVerified?: SortOrder
    isNumberVerified?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tempToken?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserInfoCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    profilePicture?: SortOrder
    address?: SortOrder
    userType?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    profilePicture?: SortOrder
    address?: SortOrder
    userType?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserInfoMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    profilePicture?: SortOrder
    address?: SortOrder
    userType?: SortOrder
    userId?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserKycCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    passportPhoto?: SortOrder
    idType?: SortOrder
    idFrontImage?: SortOrder
    idBackImage?: SortOrder
    nyscNumber?: SortOrder
    nin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserKycAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserKycMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    idType?: SortOrder
    idFrontImage?: SortOrder
    idBackImage?: SortOrder
    nyscNumber?: SortOrder
    nin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserKycMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    idType?: SortOrder
    idFrontImage?: SortOrder
    idBackImage?: SortOrder
    nyscNumber?: SortOrder
    nin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserKycSumOrderByAggregateInput = {
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

  export type RealEstateCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    houseName?: SortOrder
    category?: SortOrder
    numberOfRooms?: SortOrder
    pictures?: SortOrder
    mainPictureIndex?: SortOrder
    description?: SortOrder
    state?: SortOrder
    lga?: SortOrder
    country?: SortOrder
    nearby?: SortOrder
    amenities?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
  }

  export type RealEstateAvgOrderByAggregateInput = {
    id?: SortOrder
    numberOfRooms?: SortOrder
    mainPictureIndex?: SortOrder
  }

  export type RealEstateMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    houseName?: SortOrder
    category?: SortOrder
    numberOfRooms?: SortOrder
    mainPictureIndex?: SortOrder
    description?: SortOrder
    state?: SortOrder
    lga?: SortOrder
    country?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
  }

  export type RealEstateMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    houseName?: SortOrder
    category?: SortOrder
    numberOfRooms?: SortOrder
    mainPictureIndex?: SortOrder
    description?: SortOrder
    state?: SortOrder
    lga?: SortOrder
    country?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
  }

  export type RealEstateSumOrderByAggregateInput = {
    id?: SortOrder
    numberOfRooms?: SortOrder
    mainPictureIndex?: SortOrder
  }

  export type RealEstateRelationFilter = {
    is?: RealEstateWhereInput
    isNot?: RealEstateWhereInput
  }

  export type ReviewUserIdRealEstateIdCompoundUniqueInput = {
    userId: string
    realEstateId: number
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    realEstateId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    propertyPictures?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    realEstateId?: SortOrder
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    realEstateId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    realEstateId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    realEstateId?: SortOrder
    rating?: SortOrder
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reportCategory?: SortOrder
    comment?: SortOrder
    reportPriority?: SortOrder
    reportableType?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reportCategory?: SortOrder
    comment?: SortOrder
    reportPriority?: SortOrder
    reportableType?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reportCategory?: SortOrder
    comment?: SortOrder
    reportPriority?: SortOrder
    reportableType?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    isDelivered?: SortOrder
  }

  export type ChatMessageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    isDelivered?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    isDelivered?: SortOrder
  }

  export type ChatMessageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type JobMarketCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    jobDescription?: SortOrder
    keyResponsibilities?: SortOrder
    qualifications?: SortOrder
    workArrangement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applicationUrl?: SortOrder
  }

  export type JobMarketAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type JobMarketMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    jobDescription?: SortOrder
    workArrangement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applicationUrl?: SortOrder
  }

  export type JobMarketMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    jobDescription?: SortOrder
    workArrangement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applicationUrl?: SortOrder
  }

  export type JobMarketSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    type?: SortOrder
    priority?: SortOrder
    actionButtonLabel?: SortOrder
    actionButtonLink?: SortOrder
    relatedResourceLink?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    type?: SortOrder
    priority?: SortOrder
    actionButtonLabel?: SortOrder
    actionButtonLink?: SortOrder
    relatedResourceLink?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    type?: SortOrder
    priority?: SortOrder
    actionButtonLabel?: SortOrder
    actionButtonLink?: SortOrder
    relatedResourceLink?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type PropertyMarketCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    images?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyMarketAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type PropertyMarketMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyMarketMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyMarketSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
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

  export type ReminderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    location?: SortOrder
    time?: SortOrder
    dueDate?: SortOrder
    note?: SortOrder
    appointmentContactNumber?: SortOrder
    status?: SortOrder
  }

  export type ReminderAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ReminderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    location?: SortOrder
    time?: SortOrder
    dueDate?: SortOrder
    note?: SortOrder
    appointmentContactNumber?: SortOrder
    status?: SortOrder
  }

  export type ReminderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    location?: SortOrder
    time?: SortOrder
    dueDate?: SortOrder
    note?: SortOrder
    appointmentContactNumber?: SortOrder
    status?: SortOrder
  }

  export type ReminderSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SearchCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    query?: SortOrder
    timestamp?: SortOrder
  }

  export type SearchAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SearchMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    query?: SortOrder
    timestamp?: SortOrder
  }

  export type SearchMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    query?: SortOrder
    timestamp?: SortOrder
  }

  export type SearchSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleListRelationFilter = {
    every?: RoleWhereInput
    some?: RoleWhereInput
    none?: RoleWhereInput
  }

  export type RoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminListRelationFilter = {
    every?: AdminWhereInput
    some?: AdminWhereInput
    none?: AdminWhereInput
  }

  export type AdminOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RealEstateInterestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    state?: SortOrder
    lga?: SortOrder
    country?: SortOrder
  }

  export type RealEstateInterestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RealEstateInterestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type RealEstateInterestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type RealEstateInterestSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChatMessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutReceiverInput = {
    create?: XOR<ChatMessageCreateWithoutReceiverInput, ChatMessageUncheckedCreateWithoutReceiverInput> | ChatMessageCreateWithoutReceiverInput[] | ChatMessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutReceiverInput | ChatMessageCreateOrConnectWithoutReceiverInput[]
    createMany?: ChatMessageCreateManyReceiverInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type JobMarketCreateNestedManyWithoutUserInput = {
    create?: XOR<JobMarketCreateWithoutUserInput, JobMarketUncheckedCreateWithoutUserInput> | JobMarketCreateWithoutUserInput[] | JobMarketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobMarketCreateOrConnectWithoutUserInput | JobMarketCreateOrConnectWithoutUserInput[]
    createMany?: JobMarketCreateManyUserInputEnvelope
    connect?: JobMarketWhereUniqueInput | JobMarketWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type PropertyMarketCreateNestedManyWithoutUserInput = {
    create?: XOR<PropertyMarketCreateWithoutUserInput, PropertyMarketUncheckedCreateWithoutUserInput> | PropertyMarketCreateWithoutUserInput[] | PropertyMarketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PropertyMarketCreateOrConnectWithoutUserInput | PropertyMarketCreateOrConnectWithoutUserInput[]
    createMany?: PropertyMarketCreateManyUserInputEnvelope
    connect?: PropertyMarketWhereUniqueInput | PropertyMarketWhereUniqueInput[]
  }

  export type RealEstateCreateNestedManyWithoutUserInput = {
    create?: XOR<RealEstateCreateWithoutUserInput, RealEstateUncheckedCreateWithoutUserInput> | RealEstateCreateWithoutUserInput[] | RealEstateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RealEstateCreateOrConnectWithoutUserInput | RealEstateCreateOrConnectWithoutUserInput[]
    createMany?: RealEstateCreateManyUserInputEnvelope
    connect?: RealEstateWhereUniqueInput | RealEstateWhereUniqueInput[]
  }

  export type ReminderCreateNestedManyWithoutUserInput = {
    create?: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput> | ReminderCreateWithoutUserInput[] | ReminderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutUserInput | ReminderCreateOrConnectWithoutUserInput[]
    createMany?: ReminderCreateManyUserInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutUserInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type SearchCreateNestedManyWithoutUserInput = {
    create?: XOR<SearchCreateWithoutUserInput, SearchUncheckedCreateWithoutUserInput> | SearchCreateWithoutUserInput[] | SearchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SearchCreateOrConnectWithoutUserInput | SearchCreateOrConnectWithoutUserInput[]
    createMany?: SearchCreateManyUserInputEnvelope
    connect?: SearchWhereUniqueInput | SearchWhereUniqueInput[]
  }

  export type RealEstateInterestCreateNestedOneWithoutUserInput = {
    create?: XOR<RealEstateInterestCreateWithoutUserInput, RealEstateInterestUncheckedCreateWithoutUserInput>
    connectOrCreate?: RealEstateInterestCreateOrConnectWithoutUserInput
    connect?: RealEstateInterestWhereUniqueInput
  }

  export type UserKycCreateNestedOneWithoutUserInput = {
    create?: XOR<UserKycCreateWithoutUserInput, UserKycUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserKycCreateOrConnectWithoutUserInput
    connect?: UserKycWhereUniqueInput
  }

  export type UserInfoCreateNestedOneWithoutUserInput = {
    create?: XOR<UserInfoCreateWithoutUserInput, UserInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutUserInput
    connect?: UserInfoWhereUniqueInput
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<ChatMessageCreateWithoutReceiverInput, ChatMessageUncheckedCreateWithoutReceiverInput> | ChatMessageCreateWithoutReceiverInput[] | ChatMessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutReceiverInput | ChatMessageCreateOrConnectWithoutReceiverInput[]
    createMany?: ChatMessageCreateManyReceiverInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type JobMarketUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<JobMarketCreateWithoutUserInput, JobMarketUncheckedCreateWithoutUserInput> | JobMarketCreateWithoutUserInput[] | JobMarketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobMarketCreateOrConnectWithoutUserInput | JobMarketCreateOrConnectWithoutUserInput[]
    createMany?: JobMarketCreateManyUserInputEnvelope
    connect?: JobMarketWhereUniqueInput | JobMarketWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type PropertyMarketUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PropertyMarketCreateWithoutUserInput, PropertyMarketUncheckedCreateWithoutUserInput> | PropertyMarketCreateWithoutUserInput[] | PropertyMarketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PropertyMarketCreateOrConnectWithoutUserInput | PropertyMarketCreateOrConnectWithoutUserInput[]
    createMany?: PropertyMarketCreateManyUserInputEnvelope
    connect?: PropertyMarketWhereUniqueInput | PropertyMarketWhereUniqueInput[]
  }

  export type RealEstateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RealEstateCreateWithoutUserInput, RealEstateUncheckedCreateWithoutUserInput> | RealEstateCreateWithoutUserInput[] | RealEstateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RealEstateCreateOrConnectWithoutUserInput | RealEstateCreateOrConnectWithoutUserInput[]
    createMany?: RealEstateCreateManyUserInputEnvelope
    connect?: RealEstateWhereUniqueInput | RealEstateWhereUniqueInput[]
  }

  export type ReminderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput> | ReminderCreateWithoutUserInput[] | ReminderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutUserInput | ReminderCreateOrConnectWithoutUserInput[]
    createMany?: ReminderCreateManyUserInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type SearchUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SearchCreateWithoutUserInput, SearchUncheckedCreateWithoutUserInput> | SearchCreateWithoutUserInput[] | SearchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SearchCreateOrConnectWithoutUserInput | SearchCreateOrConnectWithoutUserInput[]
    createMany?: SearchCreateManyUserInputEnvelope
    connect?: SearchWhereUniqueInput | SearchWhereUniqueInput[]
  }

  export type RealEstateInterestUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<RealEstateInterestCreateWithoutUserInput, RealEstateInterestUncheckedCreateWithoutUserInput>
    connectOrCreate?: RealEstateInterestCreateOrConnectWithoutUserInput
    connect?: RealEstateInterestWhereUniqueInput
  }

  export type UserKycUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserKycCreateWithoutUserInput, UserKycUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserKycCreateOrConnectWithoutUserInput
    connect?: UserKycWhereUniqueInput
  }

  export type UserInfoUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserInfoCreateWithoutUserInput, UserInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutUserInput
    connect?: UserInfoWhereUniqueInput
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

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChatMessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSenderInput | ChatMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSenderInput | ChatMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSenderInput | ChatMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<ChatMessageCreateWithoutReceiverInput, ChatMessageUncheckedCreateWithoutReceiverInput> | ChatMessageCreateWithoutReceiverInput[] | ChatMessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutReceiverInput | ChatMessageCreateOrConnectWithoutReceiverInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutReceiverInput | ChatMessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: ChatMessageCreateManyReceiverInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutReceiverInput | ChatMessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutReceiverInput | ChatMessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type JobMarketUpdateManyWithoutUserNestedInput = {
    create?: XOR<JobMarketCreateWithoutUserInput, JobMarketUncheckedCreateWithoutUserInput> | JobMarketCreateWithoutUserInput[] | JobMarketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobMarketCreateOrConnectWithoutUserInput | JobMarketCreateOrConnectWithoutUserInput[]
    upsert?: JobMarketUpsertWithWhereUniqueWithoutUserInput | JobMarketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JobMarketCreateManyUserInputEnvelope
    set?: JobMarketWhereUniqueInput | JobMarketWhereUniqueInput[]
    disconnect?: JobMarketWhereUniqueInput | JobMarketWhereUniqueInput[]
    delete?: JobMarketWhereUniqueInput | JobMarketWhereUniqueInput[]
    connect?: JobMarketWhereUniqueInput | JobMarketWhereUniqueInput[]
    update?: JobMarketUpdateWithWhereUniqueWithoutUserInput | JobMarketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JobMarketUpdateManyWithWhereWithoutUserInput | JobMarketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JobMarketScalarWhereInput | JobMarketScalarWhereInput[]
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

  export type PropertyMarketUpdateManyWithoutUserNestedInput = {
    create?: XOR<PropertyMarketCreateWithoutUserInput, PropertyMarketUncheckedCreateWithoutUserInput> | PropertyMarketCreateWithoutUserInput[] | PropertyMarketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PropertyMarketCreateOrConnectWithoutUserInput | PropertyMarketCreateOrConnectWithoutUserInput[]
    upsert?: PropertyMarketUpsertWithWhereUniqueWithoutUserInput | PropertyMarketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PropertyMarketCreateManyUserInputEnvelope
    set?: PropertyMarketWhereUniqueInput | PropertyMarketWhereUniqueInput[]
    disconnect?: PropertyMarketWhereUniqueInput | PropertyMarketWhereUniqueInput[]
    delete?: PropertyMarketWhereUniqueInput | PropertyMarketWhereUniqueInput[]
    connect?: PropertyMarketWhereUniqueInput | PropertyMarketWhereUniqueInput[]
    update?: PropertyMarketUpdateWithWhereUniqueWithoutUserInput | PropertyMarketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PropertyMarketUpdateManyWithWhereWithoutUserInput | PropertyMarketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PropertyMarketScalarWhereInput | PropertyMarketScalarWhereInput[]
  }

  export type RealEstateUpdateManyWithoutUserNestedInput = {
    create?: XOR<RealEstateCreateWithoutUserInput, RealEstateUncheckedCreateWithoutUserInput> | RealEstateCreateWithoutUserInput[] | RealEstateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RealEstateCreateOrConnectWithoutUserInput | RealEstateCreateOrConnectWithoutUserInput[]
    upsert?: RealEstateUpsertWithWhereUniqueWithoutUserInput | RealEstateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RealEstateCreateManyUserInputEnvelope
    set?: RealEstateWhereUniqueInput | RealEstateWhereUniqueInput[]
    disconnect?: RealEstateWhereUniqueInput | RealEstateWhereUniqueInput[]
    delete?: RealEstateWhereUniqueInput | RealEstateWhereUniqueInput[]
    connect?: RealEstateWhereUniqueInput | RealEstateWhereUniqueInput[]
    update?: RealEstateUpdateWithWhereUniqueWithoutUserInput | RealEstateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RealEstateUpdateManyWithWhereWithoutUserInput | RealEstateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RealEstateScalarWhereInput | RealEstateScalarWhereInput[]
  }

  export type ReminderUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput> | ReminderCreateWithoutUserInput[] | ReminderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutUserInput | ReminderCreateOrConnectWithoutUserInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutUserInput | ReminderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReminderCreateManyUserInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutUserInput | ReminderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutUserInput | ReminderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutUserInput | ReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutUserInput | ReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutUserInput | ReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type SearchUpdateManyWithoutUserNestedInput = {
    create?: XOR<SearchCreateWithoutUserInput, SearchUncheckedCreateWithoutUserInput> | SearchCreateWithoutUserInput[] | SearchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SearchCreateOrConnectWithoutUserInput | SearchCreateOrConnectWithoutUserInput[]
    upsert?: SearchUpsertWithWhereUniqueWithoutUserInput | SearchUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SearchCreateManyUserInputEnvelope
    set?: SearchWhereUniqueInput | SearchWhereUniqueInput[]
    disconnect?: SearchWhereUniqueInput | SearchWhereUniqueInput[]
    delete?: SearchWhereUniqueInput | SearchWhereUniqueInput[]
    connect?: SearchWhereUniqueInput | SearchWhereUniqueInput[]
    update?: SearchUpdateWithWhereUniqueWithoutUserInput | SearchUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SearchUpdateManyWithWhereWithoutUserInput | SearchUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SearchScalarWhereInput | SearchScalarWhereInput[]
  }

  export type RealEstateInterestUpdateOneWithoutUserNestedInput = {
    create?: XOR<RealEstateInterestCreateWithoutUserInput, RealEstateInterestUncheckedCreateWithoutUserInput>
    connectOrCreate?: RealEstateInterestCreateOrConnectWithoutUserInput
    upsert?: RealEstateInterestUpsertWithoutUserInput
    disconnect?: RealEstateInterestWhereInput | boolean
    delete?: RealEstateInterestWhereInput | boolean
    connect?: RealEstateInterestWhereUniqueInput
    update?: XOR<XOR<RealEstateInterestUpdateToOneWithWhereWithoutUserInput, RealEstateInterestUpdateWithoutUserInput>, RealEstateInterestUncheckedUpdateWithoutUserInput>
  }

  export type UserKycUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserKycCreateWithoutUserInput, UserKycUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserKycCreateOrConnectWithoutUserInput
    upsert?: UserKycUpsertWithoutUserInput
    disconnect?: UserKycWhereInput | boolean
    delete?: UserKycWhereInput | boolean
    connect?: UserKycWhereUniqueInput
    update?: XOR<XOR<UserKycUpdateToOneWithWhereWithoutUserInput, UserKycUpdateWithoutUserInput>, UserKycUncheckedUpdateWithoutUserInput>
  }

  export type UserInfoUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserInfoCreateWithoutUserInput, UserInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutUserInput
    upsert?: UserInfoUpsertWithoutUserInput
    disconnect?: UserInfoWhereInput | boolean
    delete?: UserInfoWhereInput | boolean
    connect?: UserInfoWhereUniqueInput
    update?: XOR<XOR<UserInfoUpdateToOneWithWhereWithoutUserInput, UserInfoUpdateWithoutUserInput>, UserInfoUncheckedUpdateWithoutUserInput>
  }

  export type ChatMessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSenderInput | ChatMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSenderInput | ChatMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSenderInput | ChatMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<ChatMessageCreateWithoutReceiverInput, ChatMessageUncheckedCreateWithoutReceiverInput> | ChatMessageCreateWithoutReceiverInput[] | ChatMessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutReceiverInput | ChatMessageCreateOrConnectWithoutReceiverInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutReceiverInput | ChatMessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: ChatMessageCreateManyReceiverInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutReceiverInput | ChatMessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutReceiverInput | ChatMessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type JobMarketUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<JobMarketCreateWithoutUserInput, JobMarketUncheckedCreateWithoutUserInput> | JobMarketCreateWithoutUserInput[] | JobMarketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobMarketCreateOrConnectWithoutUserInput | JobMarketCreateOrConnectWithoutUserInput[]
    upsert?: JobMarketUpsertWithWhereUniqueWithoutUserInput | JobMarketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JobMarketCreateManyUserInputEnvelope
    set?: JobMarketWhereUniqueInput | JobMarketWhereUniqueInput[]
    disconnect?: JobMarketWhereUniqueInput | JobMarketWhereUniqueInput[]
    delete?: JobMarketWhereUniqueInput | JobMarketWhereUniqueInput[]
    connect?: JobMarketWhereUniqueInput | JobMarketWhereUniqueInput[]
    update?: JobMarketUpdateWithWhereUniqueWithoutUserInput | JobMarketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JobMarketUpdateManyWithWhereWithoutUserInput | JobMarketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JobMarketScalarWhereInput | JobMarketScalarWhereInput[]
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

  export type PropertyMarketUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PropertyMarketCreateWithoutUserInput, PropertyMarketUncheckedCreateWithoutUserInput> | PropertyMarketCreateWithoutUserInput[] | PropertyMarketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PropertyMarketCreateOrConnectWithoutUserInput | PropertyMarketCreateOrConnectWithoutUserInput[]
    upsert?: PropertyMarketUpsertWithWhereUniqueWithoutUserInput | PropertyMarketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PropertyMarketCreateManyUserInputEnvelope
    set?: PropertyMarketWhereUniqueInput | PropertyMarketWhereUniqueInput[]
    disconnect?: PropertyMarketWhereUniqueInput | PropertyMarketWhereUniqueInput[]
    delete?: PropertyMarketWhereUniqueInput | PropertyMarketWhereUniqueInput[]
    connect?: PropertyMarketWhereUniqueInput | PropertyMarketWhereUniqueInput[]
    update?: PropertyMarketUpdateWithWhereUniqueWithoutUserInput | PropertyMarketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PropertyMarketUpdateManyWithWhereWithoutUserInput | PropertyMarketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PropertyMarketScalarWhereInput | PropertyMarketScalarWhereInput[]
  }

  export type RealEstateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RealEstateCreateWithoutUserInput, RealEstateUncheckedCreateWithoutUserInput> | RealEstateCreateWithoutUserInput[] | RealEstateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RealEstateCreateOrConnectWithoutUserInput | RealEstateCreateOrConnectWithoutUserInput[]
    upsert?: RealEstateUpsertWithWhereUniqueWithoutUserInput | RealEstateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RealEstateCreateManyUserInputEnvelope
    set?: RealEstateWhereUniqueInput | RealEstateWhereUniqueInput[]
    disconnect?: RealEstateWhereUniqueInput | RealEstateWhereUniqueInput[]
    delete?: RealEstateWhereUniqueInput | RealEstateWhereUniqueInput[]
    connect?: RealEstateWhereUniqueInput | RealEstateWhereUniqueInput[]
    update?: RealEstateUpdateWithWhereUniqueWithoutUserInput | RealEstateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RealEstateUpdateManyWithWhereWithoutUserInput | RealEstateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RealEstateScalarWhereInput | RealEstateScalarWhereInput[]
  }

  export type ReminderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput> | ReminderCreateWithoutUserInput[] | ReminderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutUserInput | ReminderCreateOrConnectWithoutUserInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutUserInput | ReminderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReminderCreateManyUserInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutUserInput | ReminderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutUserInput | ReminderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutUserInput | ReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutUserInput | ReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutUserInput | ReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type SearchUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SearchCreateWithoutUserInput, SearchUncheckedCreateWithoutUserInput> | SearchCreateWithoutUserInput[] | SearchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SearchCreateOrConnectWithoutUserInput | SearchCreateOrConnectWithoutUserInput[]
    upsert?: SearchUpsertWithWhereUniqueWithoutUserInput | SearchUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SearchCreateManyUserInputEnvelope
    set?: SearchWhereUniqueInput | SearchWhereUniqueInput[]
    disconnect?: SearchWhereUniqueInput | SearchWhereUniqueInput[]
    delete?: SearchWhereUniqueInput | SearchWhereUniqueInput[]
    connect?: SearchWhereUniqueInput | SearchWhereUniqueInput[]
    update?: SearchUpdateWithWhereUniqueWithoutUserInput | SearchUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SearchUpdateManyWithWhereWithoutUserInput | SearchUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SearchScalarWhereInput | SearchScalarWhereInput[]
  }

  export type RealEstateInterestUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<RealEstateInterestCreateWithoutUserInput, RealEstateInterestUncheckedCreateWithoutUserInput>
    connectOrCreate?: RealEstateInterestCreateOrConnectWithoutUserInput
    upsert?: RealEstateInterestUpsertWithoutUserInput
    disconnect?: RealEstateInterestWhereInput | boolean
    delete?: RealEstateInterestWhereInput | boolean
    connect?: RealEstateInterestWhereUniqueInput
    update?: XOR<XOR<RealEstateInterestUpdateToOneWithWhereWithoutUserInput, RealEstateInterestUpdateWithoutUserInput>, RealEstateInterestUncheckedUpdateWithoutUserInput>
  }

  export type UserKycUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserKycCreateWithoutUserInput, UserKycUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserKycCreateOrConnectWithoutUserInput
    upsert?: UserKycUpsertWithoutUserInput
    disconnect?: UserKycWhereInput | boolean
    delete?: UserKycWhereInput | boolean
    connect?: UserKycWhereUniqueInput
    update?: XOR<XOR<UserKycUpdateToOneWithWhereWithoutUserInput, UserKycUpdateWithoutUserInput>, UserKycUncheckedUpdateWithoutUserInput>
  }

  export type UserInfoUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserInfoCreateWithoutUserInput, UserInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutUserInput
    upsert?: UserInfoUpsertWithoutUserInput
    disconnect?: UserInfoWhereInput | boolean
    delete?: UserInfoWhereInput | boolean
    connect?: UserInfoWhereUniqueInput
    update?: XOR<XOR<UserInfoUpdateToOneWithWhereWithoutUserInput, UserInfoUpdateWithoutUserInput>, UserInfoUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutUserInfoInput = {
    create?: XOR<UserCreateWithoutUserInfoInput, UserUncheckedCreateWithoutUserInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserInfoInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserInfoNestedInput = {
    create?: XOR<UserCreateWithoutUserInfoInput, UserUncheckedCreateWithoutUserInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserInfoInput
    upsert?: UserUpsertWithoutUserInfoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserInfoInput, UserUpdateWithoutUserInfoInput>, UserUncheckedUpdateWithoutUserInfoInput>
  }

  export type UserKycCreatepassportPhotoInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutUserKycInput = {
    create?: XOR<UserCreateWithoutUserKycInput, UserUncheckedCreateWithoutUserKycInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserKycInput
    connect?: UserWhereUniqueInput
  }

  export type UserKycUpdatepassportPhotoInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutUserKycNestedInput = {
    create?: XOR<UserCreateWithoutUserKycInput, UserUncheckedCreateWithoutUserKycInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserKycInput
    upsert?: UserUpsertWithoutUserKycInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserKycInput, UserUpdateWithoutUserKycInput>, UserUncheckedUpdateWithoutUserKycInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RealEstateCreatepicturesInput = {
    set: string[]
  }

  export type RealEstateCreatenearbyInput = {
    set: string[]
  }

  export type RealEstateCreateamenitiesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutApartmentsUploadedInput = {
    create?: XOR<UserCreateWithoutApartmentsUploadedInput, UserUncheckedCreateWithoutApartmentsUploadedInput>
    connectOrCreate?: UserCreateOrConnectWithoutApartmentsUploadedInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutRealEstateInput = {
    create?: XOR<ReviewCreateWithoutRealEstateInput, ReviewUncheckedCreateWithoutRealEstateInput> | ReviewCreateWithoutRealEstateInput[] | ReviewUncheckedCreateWithoutRealEstateInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRealEstateInput | ReviewCreateOrConnectWithoutRealEstateInput[]
    createMany?: ReviewCreateManyRealEstateInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutRealEstateInput = {
    create?: XOR<ReviewCreateWithoutRealEstateInput, ReviewUncheckedCreateWithoutRealEstateInput> | ReviewCreateWithoutRealEstateInput[] | ReviewUncheckedCreateWithoutRealEstateInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRealEstateInput | ReviewCreateOrConnectWithoutRealEstateInput[]
    createMany?: ReviewCreateManyRealEstateInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type RealEstateUpdatepicturesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type RealEstateUpdatenearbyInput = {
    set?: string[]
    push?: string | string[]
  }

  export type RealEstateUpdateamenitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutApartmentsUploadedNestedInput = {
    create?: XOR<UserCreateWithoutApartmentsUploadedInput, UserUncheckedCreateWithoutApartmentsUploadedInput>
    connectOrCreate?: UserCreateOrConnectWithoutApartmentsUploadedInput
    upsert?: UserUpsertWithoutApartmentsUploadedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApartmentsUploadedInput, UserUpdateWithoutApartmentsUploadedInput>, UserUncheckedUpdateWithoutApartmentsUploadedInput>
  }

  export type ReviewUpdateManyWithoutRealEstateNestedInput = {
    create?: XOR<ReviewCreateWithoutRealEstateInput, ReviewUncheckedCreateWithoutRealEstateInput> | ReviewCreateWithoutRealEstateInput[] | ReviewUncheckedCreateWithoutRealEstateInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRealEstateInput | ReviewCreateOrConnectWithoutRealEstateInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutRealEstateInput | ReviewUpsertWithWhereUniqueWithoutRealEstateInput[]
    createMany?: ReviewCreateManyRealEstateInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutRealEstateInput | ReviewUpdateWithWhereUniqueWithoutRealEstateInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutRealEstateInput | ReviewUpdateManyWithWhereWithoutRealEstateInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutRealEstateNestedInput = {
    create?: XOR<ReviewCreateWithoutRealEstateInput, ReviewUncheckedCreateWithoutRealEstateInput> | ReviewCreateWithoutRealEstateInput[] | ReviewUncheckedCreateWithoutRealEstateInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRealEstateInput | ReviewCreateOrConnectWithoutRealEstateInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutRealEstateInput | ReviewUpsertWithWhereUniqueWithoutRealEstateInput[]
    createMany?: ReviewCreateManyRealEstateInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutRealEstateInput | ReviewUpdateWithWhereUniqueWithoutRealEstateInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutRealEstateInput | ReviewUpdateManyWithWhereWithoutRealEstateInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewCreatepropertyPicturesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type RealEstateCreateNestedOneWithoutReviewsInput = {
    create?: XOR<RealEstateCreateWithoutReviewsInput, RealEstateUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: RealEstateCreateOrConnectWithoutReviewsInput
    connect?: RealEstateWhereUniqueInput
  }

  export type ReviewUpdatepropertyPicturesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type RealEstateUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<RealEstateCreateWithoutReviewsInput, RealEstateUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: RealEstateCreateOrConnectWithoutReviewsInput
    upsert?: RealEstateUpsertWithoutReviewsInput
    connect?: RealEstateWhereUniqueInput
    update?: XOR<XOR<RealEstateUpdateToOneWithWhereWithoutReviewsInput, RealEstateUpdateWithoutReviewsInput>, RealEstateUncheckedUpdateWithoutReviewsInput>
  }

  export type UserCreateNestedOneWithoutReportsInput = {
    create?: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsInput
    upsert?: UserUpsertWithoutReportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReportsInput, UserUpdateWithoutReportsInput>, UserUncheckedUpdateWithoutReportsInput>
  }

  export type UserCreateNestedOneWithoutChatMessagesSentInput = {
    create?: XOR<UserCreateWithoutChatMessagesSentInput, UserUncheckedCreateWithoutChatMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesSentInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatMessagesReceivedInput = {
    create?: XOR<UserCreateWithoutChatMessagesReceivedInput, UserUncheckedCreateWithoutChatMessagesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutChatMessagesSentNestedInput = {
    create?: XOR<UserCreateWithoutChatMessagesSentInput, UserUncheckedCreateWithoutChatMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesSentInput
    upsert?: UserUpsertWithoutChatMessagesSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatMessagesSentInput, UserUpdateWithoutChatMessagesSentInput>, UserUncheckedUpdateWithoutChatMessagesSentInput>
  }

  export type UserUpdateOneRequiredWithoutChatMessagesReceivedNestedInput = {
    create?: XOR<UserCreateWithoutChatMessagesReceivedInput, UserUncheckedCreateWithoutChatMessagesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesReceivedInput
    upsert?: UserUpsertWithoutChatMessagesReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatMessagesReceivedInput, UserUpdateWithoutChatMessagesReceivedInput>, UserUncheckedUpdateWithoutChatMessagesReceivedInput>
  }

  export type JobMarketCreatekeyResponsibilitiesInput = {
    set: string[]
  }

  export type JobMarketCreatequalificationsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutJobsAppliedInput = {
    create?: XOR<UserCreateWithoutJobsAppliedInput, UserUncheckedCreateWithoutJobsAppliedInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobsAppliedInput
    connect?: UserWhereUniqueInput
  }

  export type JobMarketUpdatekeyResponsibilitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type JobMarketUpdatequalificationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneWithoutJobsAppliedNestedInput = {
    create?: XOR<UserCreateWithoutJobsAppliedInput, UserUncheckedCreateWithoutJobsAppliedInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobsAppliedInput
    upsert?: UserUpsertWithoutJobsAppliedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJobsAppliedInput, UserUpdateWithoutJobsAppliedInput>, UserUncheckedUpdateWithoutJobsAppliedInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type PropertyMarketCreateimagesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutPropertiesUploadedInput = {
    create?: XOR<UserCreateWithoutPropertiesUploadedInput, UserUncheckedCreateWithoutPropertiesUploadedInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertiesUploadedInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PropertyMarketUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutPropertiesUploadedNestedInput = {
    create?: XOR<UserCreateWithoutPropertiesUploadedInput, UserUncheckedCreateWithoutPropertiesUploadedInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertiesUploadedInput
    upsert?: UserUpsertWithoutPropertiesUploadedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPropertiesUploadedInput, UserUpdateWithoutPropertiesUploadedInput>, UserUncheckedUpdateWithoutPropertiesUploadedInput>
  }

  export type UserCreateNestedOneWithoutRemindersInput = {
    create?: XOR<UserCreateWithoutRemindersInput, UserUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: UserCreateOrConnectWithoutRemindersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRemindersNestedInput = {
    create?: XOR<UserCreateWithoutRemindersInput, UserUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: UserCreateOrConnectWithoutRemindersInput
    upsert?: UserUpsertWithoutRemindersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRemindersInput, UserUpdateWithoutRemindersInput>, UserUncheckedUpdateWithoutRemindersInput>
  }

  export type UserCreateNestedOneWithoutSearchesInput = {
    create?: XOR<UserCreateWithoutSearchesInput, UserUncheckedCreateWithoutSearchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSearchesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSearchesNestedInput = {
    create?: XOR<UserCreateWithoutSearchesInput, UserUncheckedCreateWithoutSearchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSearchesInput
    upsert?: UserUpsertWithoutSearchesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSearchesInput, UserUpdateWithoutSearchesInput>, UserUncheckedUpdateWithoutSearchesInput>
  }

  export type RoleCreateNestedManyWithoutAdminsInput = {
    create?: XOR<RoleCreateWithoutAdminsInput, RoleUncheckedCreateWithoutAdminsInput> | RoleCreateWithoutAdminsInput[] | RoleUncheckedCreateWithoutAdminsInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutAdminsInput | RoleCreateOrConnectWithoutAdminsInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutAdminsInput = {
    create?: XOR<RoleCreateWithoutAdminsInput, RoleUncheckedCreateWithoutAdminsInput> | RoleCreateWithoutAdminsInput[] | RoleUncheckedCreateWithoutAdminsInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutAdminsInput | RoleCreateOrConnectWithoutAdminsInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RoleUpdateManyWithoutAdminsNestedInput = {
    create?: XOR<RoleCreateWithoutAdminsInput, RoleUncheckedCreateWithoutAdminsInput> | RoleCreateWithoutAdminsInput[] | RoleUncheckedCreateWithoutAdminsInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutAdminsInput | RoleCreateOrConnectWithoutAdminsInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutAdminsInput | RoleUpsertWithWhereUniqueWithoutAdminsInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutAdminsInput | RoleUpdateWithWhereUniqueWithoutAdminsInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutAdminsInput | RoleUpdateManyWithWhereWithoutAdminsInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutAdminsNestedInput = {
    create?: XOR<RoleCreateWithoutAdminsInput, RoleUncheckedCreateWithoutAdminsInput> | RoleCreateWithoutAdminsInput[] | RoleUncheckedCreateWithoutAdminsInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutAdminsInput | RoleCreateOrConnectWithoutAdminsInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutAdminsInput | RoleUpsertWithWhereUniqueWithoutAdminsInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutAdminsInput | RoleUpdateWithWhereUniqueWithoutAdminsInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutAdminsInput | RoleUpdateManyWithWhereWithoutAdminsInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type AdminCreateNestedManyWithoutRolesInput = {
    create?: XOR<AdminCreateWithoutRolesInput, AdminUncheckedCreateWithoutRolesInput> | AdminCreateWithoutRolesInput[] | AdminUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutRolesInput | AdminCreateOrConnectWithoutRolesInput[]
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
  }

  export type AdminUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<AdminCreateWithoutRolesInput, AdminUncheckedCreateWithoutRolesInput> | AdminCreateWithoutRolesInput[] | AdminUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutRolesInput | AdminCreateOrConnectWithoutRolesInput[]
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
  }

  export type AdminUpdateManyWithoutRolesNestedInput = {
    create?: XOR<AdminCreateWithoutRolesInput, AdminUncheckedCreateWithoutRolesInput> | AdminCreateWithoutRolesInput[] | AdminUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutRolesInput | AdminCreateOrConnectWithoutRolesInput[]
    upsert?: AdminUpsertWithWhereUniqueWithoutRolesInput | AdminUpsertWithWhereUniqueWithoutRolesInput[]
    set?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    disconnect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    delete?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    update?: AdminUpdateWithWhereUniqueWithoutRolesInput | AdminUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: AdminUpdateManyWithWhereWithoutRolesInput | AdminUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: AdminScalarWhereInput | AdminScalarWhereInput[]
  }

  export type AdminUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<AdminCreateWithoutRolesInput, AdminUncheckedCreateWithoutRolesInput> | AdminCreateWithoutRolesInput[] | AdminUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutRolesInput | AdminCreateOrConnectWithoutRolesInput[]
    upsert?: AdminUpsertWithWhereUniqueWithoutRolesInput | AdminUpsertWithWhereUniqueWithoutRolesInput[]
    set?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    disconnect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    delete?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    update?: AdminUpdateWithWhereUniqueWithoutRolesInput | AdminUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: AdminUpdateManyWithWhereWithoutRolesInput | AdminUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: AdminScalarWhereInput | AdminScalarWhereInput[]
  }

  export type RealEstateInterestCreatestateInput = {
    set: string[]
  }

  export type RealEstateInterestCreatelgaInput = {
    set: string[]
  }

  export type RealEstateInterestCreatecountryInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutRealEstateInterestInput = {
    create?: XOR<UserCreateWithoutRealEstateInterestInput, UserUncheckedCreateWithoutRealEstateInterestInput>
    connectOrCreate?: UserCreateOrConnectWithoutRealEstateInterestInput
    connect?: UserWhereUniqueInput
  }

  export type RealEstateInterestUpdatestateInput = {
    set?: string[]
    push?: string | string[]
  }

  export type RealEstateInterestUpdatelgaInput = {
    set?: string[]
    push?: string | string[]
  }

  export type RealEstateInterestUpdatecountryInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutRealEstateInterestNestedInput = {
    create?: XOR<UserCreateWithoutRealEstateInterestInput, UserUncheckedCreateWithoutRealEstateInterestInput>
    connectOrCreate?: UserCreateOrConnectWithoutRealEstateInterestInput
    upsert?: UserUpsertWithoutRealEstateInterestInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRealEstateInterestInput, UserUpdateWithoutRealEstateInterestInput>, UserUncheckedUpdateWithoutRealEstateInterestInput>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type ChatMessageCreateWithoutSenderInput = {
    message: string
    createdAt?: Date | string
    isRead?: boolean
    isDelivered?: boolean
    receiver: UserCreateNestedOneWithoutChatMessagesReceivedInput
  }

  export type ChatMessageUncheckedCreateWithoutSenderInput = {
    id?: number
    receiverId: string
    message: string
    createdAt?: Date | string
    isRead?: boolean
    isDelivered?: boolean
  }

  export type ChatMessageCreateOrConnectWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput>
  }

  export type ChatMessageCreateManySenderInputEnvelope = {
    data: ChatMessageCreateManySenderInput | ChatMessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutReceiverInput = {
    message: string
    createdAt?: Date | string
    isRead?: boolean
    isDelivered?: boolean
    sender: UserCreateNestedOneWithoutChatMessagesSentInput
  }

  export type ChatMessageUncheckedCreateWithoutReceiverInput = {
    id?: number
    senderId: string
    message: string
    createdAt?: Date | string
    isRead?: boolean
    isDelivered?: boolean
  }

  export type ChatMessageCreateOrConnectWithoutReceiverInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutReceiverInput, ChatMessageUncheckedCreateWithoutReceiverInput>
  }

  export type ChatMessageCreateManyReceiverInputEnvelope = {
    data: ChatMessageCreateManyReceiverInput | ChatMessageCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type JobMarketCreateWithoutUserInput = {
    companyName: string
    jobTitle: string
    jobDescription: string
    keyResponsibilities?: JobMarketCreatekeyResponsibilitiesInput | string[]
    qualifications?: JobMarketCreatequalificationsInput | string[]
    workArrangement: string
    createdAt?: Date | string
    updatedAt?: Date | string
    applicationUrl: string
  }

  export type JobMarketUncheckedCreateWithoutUserInput = {
    id?: number
    companyName: string
    jobTitle: string
    jobDescription: string
    keyResponsibilities?: JobMarketCreatekeyResponsibilitiesInput | string[]
    qualifications?: JobMarketCreatequalificationsInput | string[]
    workArrangement: string
    createdAt?: Date | string
    updatedAt?: Date | string
    applicationUrl: string
  }

  export type JobMarketCreateOrConnectWithoutUserInput = {
    where: JobMarketWhereUniqueInput
    create: XOR<JobMarketCreateWithoutUserInput, JobMarketUncheckedCreateWithoutUserInput>
  }

  export type JobMarketCreateManyUserInputEnvelope = {
    data: JobMarketCreateManyUserInput | JobMarketCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    message: string
    createdAt?: Date | string
    status: string
    type: string
    priority: string
    actionButtonLabel?: string | null
    actionButtonLink?: string | null
    relatedResourceLink?: string | null
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: number
    message: string
    createdAt?: Date | string
    status: string
    type: string
    priority: string
    actionButtonLabel?: string | null
    actionButtonLink?: string | null
    relatedResourceLink?: string | null
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PropertyMarketCreateWithoutUserInput = {
    title: string
    description: string
    price: number
    images?: PropertyMarketCreateimagesInput | string[]
    location: string
    createdAt?: Date | string
  }

  export type PropertyMarketUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    description: string
    price: number
    images?: PropertyMarketCreateimagesInput | string[]
    location: string
    createdAt?: Date | string
  }

  export type PropertyMarketCreateOrConnectWithoutUserInput = {
    where: PropertyMarketWhereUniqueInput
    create: XOR<PropertyMarketCreateWithoutUserInput, PropertyMarketUncheckedCreateWithoutUserInput>
  }

  export type PropertyMarketCreateManyUserInputEnvelope = {
    data: PropertyMarketCreateManyUserInput | PropertyMarketCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RealEstateCreateWithoutUserInput = {
    houseName?: string | null
    category: string
    numberOfRooms: number
    pictures?: RealEstateCreatepicturesInput | string[]
    mainPictureIndex: number
    description: string
    state: string
    lga: string
    country?: string
    nearby?: RealEstateCreatenearbyInput | string[]
    amenities?: RealEstateCreateamenitiesInput | string[]
    address: string
    createdAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutRealEstateInput
  }

  export type RealEstateUncheckedCreateWithoutUserInput = {
    id?: number
    houseName?: string | null
    category: string
    numberOfRooms: number
    pictures?: RealEstateCreatepicturesInput | string[]
    mainPictureIndex: number
    description: string
    state: string
    lga: string
    country?: string
    nearby?: RealEstateCreatenearbyInput | string[]
    amenities?: RealEstateCreateamenitiesInput | string[]
    address: string
    createdAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutRealEstateInput
  }

  export type RealEstateCreateOrConnectWithoutUserInput = {
    where: RealEstateWhereUniqueInput
    create: XOR<RealEstateCreateWithoutUserInput, RealEstateUncheckedCreateWithoutUserInput>
  }

  export type RealEstateCreateManyUserInputEnvelope = {
    data: RealEstateCreateManyUserInput | RealEstateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReminderCreateWithoutUserInput = {
    title: string
    location: string
    time: Date | string
    dueDate: Date | string
    note: string
    appointmentContactNumber: string
    status: boolean
  }

  export type ReminderUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    location: string
    time: Date | string
    dueDate: Date | string
    note: string
    appointmentContactNumber: string
    status: boolean
  }

  export type ReminderCreateOrConnectWithoutUserInput = {
    where: ReminderWhereUniqueInput
    create: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput>
  }

  export type ReminderCreateManyUserInputEnvelope = {
    data: ReminderCreateManyUserInput | ReminderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutUserInput = {
    reportCategory: string
    comment?: string | null
    reportPriority: string
    reportableType: string
    createdAt?: Date | string
  }

  export type ReportUncheckedCreateWithoutUserInput = {
    id?: number
    reportCategory: string
    comment?: string | null
    reportPriority: string
    reportableType: string
    createdAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutUserInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput>
  }

  export type ReportCreateManyUserInputEnvelope = {
    data: ReportCreateManyUserInput | ReportCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    rating: number
    comment?: string | null
    propertyPictures?: ReviewCreatepropertyPicturesInput | string[]
    createdAt?: Date | string
    realEstate: RealEstateCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    realEstateId: number
    rating: number
    comment?: string | null
    propertyPictures?: ReviewCreatepropertyPicturesInput | string[]
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SearchCreateWithoutUserInput = {
    query: string
    timestamp?: Date | string
  }

  export type SearchUncheckedCreateWithoutUserInput = {
    id?: number
    query: string
    timestamp?: Date | string
  }

  export type SearchCreateOrConnectWithoutUserInput = {
    where: SearchWhereUniqueInput
    create: XOR<SearchCreateWithoutUserInput, SearchUncheckedCreateWithoutUserInput>
  }

  export type SearchCreateManyUserInputEnvelope = {
    data: SearchCreateManyUserInput | SearchCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RealEstateInterestCreateWithoutUserInput = {
    state?: RealEstateInterestCreatestateInput | string[]
    lga?: RealEstateInterestCreatelgaInput | string[]
    country?: RealEstateInterestCreatecountryInput | string[]
  }

  export type RealEstateInterestUncheckedCreateWithoutUserInput = {
    id?: number
    state?: RealEstateInterestCreatestateInput | string[]
    lga?: RealEstateInterestCreatelgaInput | string[]
    country?: RealEstateInterestCreatecountryInput | string[]
  }

  export type RealEstateInterestCreateOrConnectWithoutUserInput = {
    where: RealEstateInterestWhereUniqueInput
    create: XOR<RealEstateInterestCreateWithoutUserInput, RealEstateInterestUncheckedCreateWithoutUserInput>
  }

  export type UserKycCreateWithoutUserInput = {
    passportPhoto?: UserKycCreatepassportPhotoInput | string[]
    idType: string
    idFrontImage: string
    idBackImage: string
    nyscNumber?: string | null
    nin: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserKycUncheckedCreateWithoutUserInput = {
    id?: number
    passportPhoto?: UserKycCreatepassportPhotoInput | string[]
    idType: string
    idFrontImage: string
    idBackImage: string
    nyscNumber?: string | null
    nin: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserKycCreateOrConnectWithoutUserInput = {
    where: UserKycWhereUniqueInput
    create: XOR<UserKycCreateWithoutUserInput, UserKycUncheckedCreateWithoutUserInput>
  }

  export type UserInfoCreateWithoutUserInput = {
    id?: string
    fullName: string
    profilePicture: string
    address: string
    userType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserInfoUncheckedCreateWithoutUserInput = {
    id?: string
    fullName: string
    profilePicture: string
    address: string
    userType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserInfoCreateOrConnectWithoutUserInput = {
    where: UserInfoWhereUniqueInput
    create: XOR<UserInfoCreateWithoutUserInput, UserInfoUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutSenderInput, ChatMessageUncheckedUpdateWithoutSenderInput>
    create: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutSenderInput, ChatMessageUncheckedUpdateWithoutSenderInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutSenderInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: IntFilter<"ChatMessage"> | number
    senderId?: StringFilter<"ChatMessage"> | string
    receiverId?: StringFilter<"ChatMessage"> | string
    message?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    isRead?: BoolFilter<"ChatMessage"> | boolean
    isDelivered?: BoolFilter<"ChatMessage"> | boolean
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutReceiverInput, ChatMessageUncheckedUpdateWithoutReceiverInput>
    create: XOR<ChatMessageCreateWithoutReceiverInput, ChatMessageUncheckedCreateWithoutReceiverInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutReceiverInput, ChatMessageUncheckedUpdateWithoutReceiverInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutReceiverInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutReceiverInput>
  }

  export type JobMarketUpsertWithWhereUniqueWithoutUserInput = {
    where: JobMarketWhereUniqueInput
    update: XOR<JobMarketUpdateWithoutUserInput, JobMarketUncheckedUpdateWithoutUserInput>
    create: XOR<JobMarketCreateWithoutUserInput, JobMarketUncheckedCreateWithoutUserInput>
  }

  export type JobMarketUpdateWithWhereUniqueWithoutUserInput = {
    where: JobMarketWhereUniqueInput
    data: XOR<JobMarketUpdateWithoutUserInput, JobMarketUncheckedUpdateWithoutUserInput>
  }

  export type JobMarketUpdateManyWithWhereWithoutUserInput = {
    where: JobMarketScalarWhereInput
    data: XOR<JobMarketUpdateManyMutationInput, JobMarketUncheckedUpdateManyWithoutUserInput>
  }

  export type JobMarketScalarWhereInput = {
    AND?: JobMarketScalarWhereInput | JobMarketScalarWhereInput[]
    OR?: JobMarketScalarWhereInput[]
    NOT?: JobMarketScalarWhereInput | JobMarketScalarWhereInput[]
    id?: IntFilter<"JobMarket"> | number
    userId?: StringFilter<"JobMarket"> | string
    companyName?: StringFilter<"JobMarket"> | string
    jobTitle?: StringFilter<"JobMarket"> | string
    jobDescription?: StringFilter<"JobMarket"> | string
    keyResponsibilities?: StringNullableListFilter<"JobMarket">
    qualifications?: StringNullableListFilter<"JobMarket">
    workArrangement?: StringFilter<"JobMarket"> | string
    createdAt?: DateTimeFilter<"JobMarket"> | Date | string
    updatedAt?: DateTimeFilter<"JobMarket"> | Date | string
    applicationUrl?: StringFilter<"JobMarket"> | string
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
    id?: IntFilter<"Notification"> | number
    userId?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    status?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    priority?: StringFilter<"Notification"> | string
    actionButtonLabel?: StringNullableFilter<"Notification"> | string | null
    actionButtonLink?: StringNullableFilter<"Notification"> | string | null
    relatedResourceLink?: StringNullableFilter<"Notification"> | string | null
  }

  export type PropertyMarketUpsertWithWhereUniqueWithoutUserInput = {
    where: PropertyMarketWhereUniqueInput
    update: XOR<PropertyMarketUpdateWithoutUserInput, PropertyMarketUncheckedUpdateWithoutUserInput>
    create: XOR<PropertyMarketCreateWithoutUserInput, PropertyMarketUncheckedCreateWithoutUserInput>
  }

  export type PropertyMarketUpdateWithWhereUniqueWithoutUserInput = {
    where: PropertyMarketWhereUniqueInput
    data: XOR<PropertyMarketUpdateWithoutUserInput, PropertyMarketUncheckedUpdateWithoutUserInput>
  }

  export type PropertyMarketUpdateManyWithWhereWithoutUserInput = {
    where: PropertyMarketScalarWhereInput
    data: XOR<PropertyMarketUpdateManyMutationInput, PropertyMarketUncheckedUpdateManyWithoutUserInput>
  }

  export type PropertyMarketScalarWhereInput = {
    AND?: PropertyMarketScalarWhereInput | PropertyMarketScalarWhereInput[]
    OR?: PropertyMarketScalarWhereInput[]
    NOT?: PropertyMarketScalarWhereInput | PropertyMarketScalarWhereInput[]
    id?: IntFilter<"PropertyMarket"> | number
    userId?: StringFilter<"PropertyMarket"> | string
    title?: StringFilter<"PropertyMarket"> | string
    description?: StringFilter<"PropertyMarket"> | string
    price?: FloatFilter<"PropertyMarket"> | number
    images?: StringNullableListFilter<"PropertyMarket">
    location?: StringFilter<"PropertyMarket"> | string
    createdAt?: DateTimeFilter<"PropertyMarket"> | Date | string
  }

  export type RealEstateUpsertWithWhereUniqueWithoutUserInput = {
    where: RealEstateWhereUniqueInput
    update: XOR<RealEstateUpdateWithoutUserInput, RealEstateUncheckedUpdateWithoutUserInput>
    create: XOR<RealEstateCreateWithoutUserInput, RealEstateUncheckedCreateWithoutUserInput>
  }

  export type RealEstateUpdateWithWhereUniqueWithoutUserInput = {
    where: RealEstateWhereUniqueInput
    data: XOR<RealEstateUpdateWithoutUserInput, RealEstateUncheckedUpdateWithoutUserInput>
  }

  export type RealEstateUpdateManyWithWhereWithoutUserInput = {
    where: RealEstateScalarWhereInput
    data: XOR<RealEstateUpdateManyMutationInput, RealEstateUncheckedUpdateManyWithoutUserInput>
  }

  export type RealEstateScalarWhereInput = {
    AND?: RealEstateScalarWhereInput | RealEstateScalarWhereInput[]
    OR?: RealEstateScalarWhereInput[]
    NOT?: RealEstateScalarWhereInput | RealEstateScalarWhereInput[]
    id?: IntFilter<"RealEstate"> | number
    userId?: StringFilter<"RealEstate"> | string
    houseName?: StringNullableFilter<"RealEstate"> | string | null
    category?: StringFilter<"RealEstate"> | string
    numberOfRooms?: IntFilter<"RealEstate"> | number
    pictures?: StringNullableListFilter<"RealEstate">
    mainPictureIndex?: IntFilter<"RealEstate"> | number
    description?: StringFilter<"RealEstate"> | string
    state?: StringFilter<"RealEstate"> | string
    lga?: StringFilter<"RealEstate"> | string
    country?: StringFilter<"RealEstate"> | string
    nearby?: StringNullableListFilter<"RealEstate">
    amenities?: StringNullableListFilter<"RealEstate">
    address?: StringFilter<"RealEstate"> | string
    createdAt?: DateTimeFilter<"RealEstate"> | Date | string
  }

  export type ReminderUpsertWithWhereUniqueWithoutUserInput = {
    where: ReminderWhereUniqueInput
    update: XOR<ReminderUpdateWithoutUserInput, ReminderUncheckedUpdateWithoutUserInput>
    create: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput>
  }

  export type ReminderUpdateWithWhereUniqueWithoutUserInput = {
    where: ReminderWhereUniqueInput
    data: XOR<ReminderUpdateWithoutUserInput, ReminderUncheckedUpdateWithoutUserInput>
  }

  export type ReminderUpdateManyWithWhereWithoutUserInput = {
    where: ReminderScalarWhereInput
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyWithoutUserInput>
  }

  export type ReminderScalarWhereInput = {
    AND?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
    OR?: ReminderScalarWhereInput[]
    NOT?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
    id?: IntFilter<"Reminder"> | number
    userId?: StringFilter<"Reminder"> | string
    title?: StringFilter<"Reminder"> | string
    location?: StringFilter<"Reminder"> | string
    time?: DateTimeFilter<"Reminder"> | Date | string
    dueDate?: DateTimeFilter<"Reminder"> | Date | string
    note?: StringFilter<"Reminder"> | string
    appointmentContactNumber?: StringFilter<"Reminder"> | string
    status?: BoolFilter<"Reminder"> | boolean
  }

  export type ReportUpsertWithWhereUniqueWithoutUserInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutUserInput, ReportUncheckedUpdateWithoutUserInput>
    create: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutUserInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutUserInput, ReportUncheckedUpdateWithoutUserInput>
  }

  export type ReportUpdateManyWithWhereWithoutUserInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutUserInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: IntFilter<"Report"> | number
    userId?: StringFilter<"Report"> | string
    reportCategory?: StringFilter<"Report"> | string
    comment?: StringNullableFilter<"Report"> | string | null
    reportPriority?: StringFilter<"Report"> | string
    reportableType?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    userId?: StringFilter<"Review"> | string
    realEstateId?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    propertyPictures?: StringNullableListFilter<"Review">
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type SearchUpsertWithWhereUniqueWithoutUserInput = {
    where: SearchWhereUniqueInput
    update: XOR<SearchUpdateWithoutUserInput, SearchUncheckedUpdateWithoutUserInput>
    create: XOR<SearchCreateWithoutUserInput, SearchUncheckedCreateWithoutUserInput>
  }

  export type SearchUpdateWithWhereUniqueWithoutUserInput = {
    where: SearchWhereUniqueInput
    data: XOR<SearchUpdateWithoutUserInput, SearchUncheckedUpdateWithoutUserInput>
  }

  export type SearchUpdateManyWithWhereWithoutUserInput = {
    where: SearchScalarWhereInput
    data: XOR<SearchUpdateManyMutationInput, SearchUncheckedUpdateManyWithoutUserInput>
  }

  export type SearchScalarWhereInput = {
    AND?: SearchScalarWhereInput | SearchScalarWhereInput[]
    OR?: SearchScalarWhereInput[]
    NOT?: SearchScalarWhereInput | SearchScalarWhereInput[]
    id?: IntFilter<"Search"> | number
    userId?: StringFilter<"Search"> | string
    query?: StringFilter<"Search"> | string
    timestamp?: DateTimeFilter<"Search"> | Date | string
  }

  export type RealEstateInterestUpsertWithoutUserInput = {
    update: XOR<RealEstateInterestUpdateWithoutUserInput, RealEstateInterestUncheckedUpdateWithoutUserInput>
    create: XOR<RealEstateInterestCreateWithoutUserInput, RealEstateInterestUncheckedCreateWithoutUserInput>
    where?: RealEstateInterestWhereInput
  }

  export type RealEstateInterestUpdateToOneWithWhereWithoutUserInput = {
    where?: RealEstateInterestWhereInput
    data: XOR<RealEstateInterestUpdateWithoutUserInput, RealEstateInterestUncheckedUpdateWithoutUserInput>
  }

  export type RealEstateInterestUpdateWithoutUserInput = {
    state?: RealEstateInterestUpdatestateInput | string[]
    lga?: RealEstateInterestUpdatelgaInput | string[]
    country?: RealEstateInterestUpdatecountryInput | string[]
  }

  export type RealEstateInterestUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    state?: RealEstateInterestUpdatestateInput | string[]
    lga?: RealEstateInterestUpdatelgaInput | string[]
    country?: RealEstateInterestUpdatecountryInput | string[]
  }

  export type UserKycUpsertWithoutUserInput = {
    update: XOR<UserKycUpdateWithoutUserInput, UserKycUncheckedUpdateWithoutUserInput>
    create: XOR<UserKycCreateWithoutUserInput, UserKycUncheckedCreateWithoutUserInput>
    where?: UserKycWhereInput
  }

  export type UserKycUpdateToOneWithWhereWithoutUserInput = {
    where?: UserKycWhereInput
    data: XOR<UserKycUpdateWithoutUserInput, UserKycUncheckedUpdateWithoutUserInput>
  }

  export type UserKycUpdateWithoutUserInput = {
    passportPhoto?: UserKycUpdatepassportPhotoInput | string[]
    idType?: StringFieldUpdateOperationsInput | string
    idFrontImage?: StringFieldUpdateOperationsInput | string
    idBackImage?: StringFieldUpdateOperationsInput | string
    nyscNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nin?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserKycUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    passportPhoto?: UserKycUpdatepassportPhotoInput | string[]
    idType?: StringFieldUpdateOperationsInput | string
    idFrontImage?: StringFieldUpdateOperationsInput | string
    idBackImage?: StringFieldUpdateOperationsInput | string
    nyscNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nin?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInfoUpsertWithoutUserInput = {
    update: XOR<UserInfoUpdateWithoutUserInput, UserInfoUncheckedUpdateWithoutUserInput>
    create: XOR<UserInfoCreateWithoutUserInput, UserInfoUncheckedCreateWithoutUserInput>
    where?: UserInfoWhereInput
  }

  export type UserInfoUpdateToOneWithWhereWithoutUserInput = {
    where?: UserInfoWhereInput
    data: XOR<UserInfoUpdateWithoutUserInput, UserInfoUncheckedUpdateWithoutUserInput>
  }

  export type UserInfoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInfoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutUserInfoInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
    chatMessagesSent?: ChatMessageCreateNestedManyWithoutSenderInput
    chatMessagesReceived?: ChatMessageCreateNestedManyWithoutReceiverInput
    jobsApplied?: JobMarketCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    propertiesUploaded?: PropertyMarketCreateNestedManyWithoutUserInput
    apartmentsUploaded?: RealEstateCreateNestedManyWithoutUserInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    searches?: SearchCreateNestedManyWithoutUserInput
    realEstateInterest?: RealEstateInterestCreateNestedOneWithoutUserInput
    userKyc?: UserKycCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserInfoInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
    chatMessagesSent?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    chatMessagesReceived?: ChatMessageUncheckedCreateNestedManyWithoutReceiverInput
    jobsApplied?: JobMarketUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    propertiesUploaded?: PropertyMarketUncheckedCreateNestedManyWithoutUserInput
    apartmentsUploaded?: RealEstateUncheckedCreateNestedManyWithoutUserInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    searches?: SearchUncheckedCreateNestedManyWithoutUserInput
    realEstateInterest?: RealEstateInterestUncheckedCreateNestedOneWithoutUserInput
    userKyc?: UserKycUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserInfoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserInfoInput, UserUncheckedCreateWithoutUserInfoInput>
  }

  export type UserUpsertWithoutUserInfoInput = {
    update: XOR<UserUpdateWithoutUserInfoInput, UserUncheckedUpdateWithoutUserInfoInput>
    create: XOR<UserCreateWithoutUserInfoInput, UserUncheckedCreateWithoutUserInfoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserInfoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserInfoInput, UserUncheckedUpdateWithoutUserInfoInput>
  }

  export type UserUpdateWithoutUserInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessagesSent?: ChatMessageUpdateManyWithoutSenderNestedInput
    chatMessagesReceived?: ChatMessageUpdateManyWithoutReceiverNestedInput
    jobsApplied?: JobMarketUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    propertiesUploaded?: PropertyMarketUpdateManyWithoutUserNestedInput
    apartmentsUploaded?: RealEstateUpdateManyWithoutUserNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    searches?: SearchUpdateManyWithoutUserNestedInput
    realEstateInterest?: RealEstateInterestUpdateOneWithoutUserNestedInput
    userKyc?: UserKycUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessagesSent?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    chatMessagesReceived?: ChatMessageUncheckedUpdateManyWithoutReceiverNestedInput
    jobsApplied?: JobMarketUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    propertiesUploaded?: PropertyMarketUncheckedUpdateManyWithoutUserNestedInput
    apartmentsUploaded?: RealEstateUncheckedUpdateManyWithoutUserNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    searches?: SearchUncheckedUpdateManyWithoutUserNestedInput
    realEstateInterest?: RealEstateInterestUncheckedUpdateOneWithoutUserNestedInput
    userKyc?: UserKycUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutUserKycInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
    chatMessagesSent?: ChatMessageCreateNestedManyWithoutSenderInput
    chatMessagesReceived?: ChatMessageCreateNestedManyWithoutReceiverInput
    jobsApplied?: JobMarketCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    propertiesUploaded?: PropertyMarketCreateNestedManyWithoutUserInput
    apartmentsUploaded?: RealEstateCreateNestedManyWithoutUserInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    searches?: SearchCreateNestedManyWithoutUserInput
    realEstateInterest?: RealEstateInterestCreateNestedOneWithoutUserInput
    userInfo?: UserInfoCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserKycInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
    chatMessagesSent?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    chatMessagesReceived?: ChatMessageUncheckedCreateNestedManyWithoutReceiverInput
    jobsApplied?: JobMarketUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    propertiesUploaded?: PropertyMarketUncheckedCreateNestedManyWithoutUserInput
    apartmentsUploaded?: RealEstateUncheckedCreateNestedManyWithoutUserInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    searches?: SearchUncheckedCreateNestedManyWithoutUserInput
    realEstateInterest?: RealEstateInterestUncheckedCreateNestedOneWithoutUserInput
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserKycInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserKycInput, UserUncheckedCreateWithoutUserKycInput>
  }

  export type UserUpsertWithoutUserKycInput = {
    update: XOR<UserUpdateWithoutUserKycInput, UserUncheckedUpdateWithoutUserKycInput>
    create: XOR<UserCreateWithoutUserKycInput, UserUncheckedCreateWithoutUserKycInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserKycInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserKycInput, UserUncheckedUpdateWithoutUserKycInput>
  }

  export type UserUpdateWithoutUserKycInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessagesSent?: ChatMessageUpdateManyWithoutSenderNestedInput
    chatMessagesReceived?: ChatMessageUpdateManyWithoutReceiverNestedInput
    jobsApplied?: JobMarketUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    propertiesUploaded?: PropertyMarketUpdateManyWithoutUserNestedInput
    apartmentsUploaded?: RealEstateUpdateManyWithoutUserNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    searches?: SearchUpdateManyWithoutUserNestedInput
    realEstateInterest?: RealEstateInterestUpdateOneWithoutUserNestedInput
    userInfo?: UserInfoUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserKycInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessagesSent?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    chatMessagesReceived?: ChatMessageUncheckedUpdateManyWithoutReceiverNestedInput
    jobsApplied?: JobMarketUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    propertiesUploaded?: PropertyMarketUncheckedUpdateManyWithoutUserNestedInput
    apartmentsUploaded?: RealEstateUncheckedUpdateManyWithoutUserNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    searches?: SearchUncheckedUpdateManyWithoutUserNestedInput
    realEstateInterest?: RealEstateInterestUncheckedUpdateOneWithoutUserNestedInput
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutApartmentsUploadedInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
    chatMessagesSent?: ChatMessageCreateNestedManyWithoutSenderInput
    chatMessagesReceived?: ChatMessageCreateNestedManyWithoutReceiverInput
    jobsApplied?: JobMarketCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    propertiesUploaded?: PropertyMarketCreateNestedManyWithoutUserInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    searches?: SearchCreateNestedManyWithoutUserInput
    realEstateInterest?: RealEstateInterestCreateNestedOneWithoutUserInput
    userKyc?: UserKycCreateNestedOneWithoutUserInput
    userInfo?: UserInfoCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApartmentsUploadedInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
    chatMessagesSent?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    chatMessagesReceived?: ChatMessageUncheckedCreateNestedManyWithoutReceiverInput
    jobsApplied?: JobMarketUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    propertiesUploaded?: PropertyMarketUncheckedCreateNestedManyWithoutUserInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    searches?: SearchUncheckedCreateNestedManyWithoutUserInput
    realEstateInterest?: RealEstateInterestUncheckedCreateNestedOneWithoutUserInput
    userKyc?: UserKycUncheckedCreateNestedOneWithoutUserInput
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApartmentsUploadedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApartmentsUploadedInput, UserUncheckedCreateWithoutApartmentsUploadedInput>
  }

  export type ReviewCreateWithoutRealEstateInput = {
    rating: number
    comment?: string | null
    propertyPictures?: ReviewCreatepropertyPicturesInput | string[]
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutRealEstateInput = {
    id?: number
    userId: string
    rating: number
    comment?: string | null
    propertyPictures?: ReviewCreatepropertyPicturesInput | string[]
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutRealEstateInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutRealEstateInput, ReviewUncheckedCreateWithoutRealEstateInput>
  }

  export type ReviewCreateManyRealEstateInputEnvelope = {
    data: ReviewCreateManyRealEstateInput | ReviewCreateManyRealEstateInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutApartmentsUploadedInput = {
    update: XOR<UserUpdateWithoutApartmentsUploadedInput, UserUncheckedUpdateWithoutApartmentsUploadedInput>
    create: XOR<UserCreateWithoutApartmentsUploadedInput, UserUncheckedCreateWithoutApartmentsUploadedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApartmentsUploadedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApartmentsUploadedInput, UserUncheckedUpdateWithoutApartmentsUploadedInput>
  }

  export type UserUpdateWithoutApartmentsUploadedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessagesSent?: ChatMessageUpdateManyWithoutSenderNestedInput
    chatMessagesReceived?: ChatMessageUpdateManyWithoutReceiverNestedInput
    jobsApplied?: JobMarketUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    propertiesUploaded?: PropertyMarketUpdateManyWithoutUserNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    searches?: SearchUpdateManyWithoutUserNestedInput
    realEstateInterest?: RealEstateInterestUpdateOneWithoutUserNestedInput
    userKyc?: UserKycUpdateOneWithoutUserNestedInput
    userInfo?: UserInfoUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApartmentsUploadedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessagesSent?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    chatMessagesReceived?: ChatMessageUncheckedUpdateManyWithoutReceiverNestedInput
    jobsApplied?: JobMarketUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    propertiesUploaded?: PropertyMarketUncheckedUpdateManyWithoutUserNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    searches?: SearchUncheckedUpdateManyWithoutUserNestedInput
    realEstateInterest?: RealEstateInterestUncheckedUpdateOneWithoutUserNestedInput
    userKyc?: UserKycUncheckedUpdateOneWithoutUserNestedInput
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutRealEstateInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutRealEstateInput, ReviewUncheckedUpdateWithoutRealEstateInput>
    create: XOR<ReviewCreateWithoutRealEstateInput, ReviewUncheckedCreateWithoutRealEstateInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutRealEstateInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutRealEstateInput, ReviewUncheckedUpdateWithoutRealEstateInput>
  }

  export type ReviewUpdateManyWithWhereWithoutRealEstateInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutRealEstateInput>
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
    chatMessagesSent?: ChatMessageCreateNestedManyWithoutSenderInput
    chatMessagesReceived?: ChatMessageCreateNestedManyWithoutReceiverInput
    jobsApplied?: JobMarketCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    propertiesUploaded?: PropertyMarketCreateNestedManyWithoutUserInput
    apartmentsUploaded?: RealEstateCreateNestedManyWithoutUserInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutUserInput
    searches?: SearchCreateNestedManyWithoutUserInput
    realEstateInterest?: RealEstateInterestCreateNestedOneWithoutUserInput
    userKyc?: UserKycCreateNestedOneWithoutUserInput
    userInfo?: UserInfoCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
    chatMessagesSent?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    chatMessagesReceived?: ChatMessageUncheckedCreateNestedManyWithoutReceiverInput
    jobsApplied?: JobMarketUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    propertiesUploaded?: PropertyMarketUncheckedCreateNestedManyWithoutUserInput
    apartmentsUploaded?: RealEstateUncheckedCreateNestedManyWithoutUserInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    searches?: SearchUncheckedCreateNestedManyWithoutUserInput
    realEstateInterest?: RealEstateInterestUncheckedCreateNestedOneWithoutUserInput
    userKyc?: UserKycUncheckedCreateNestedOneWithoutUserInput
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type RealEstateCreateWithoutReviewsInput = {
    houseName?: string | null
    category: string
    numberOfRooms: number
    pictures?: RealEstateCreatepicturesInput | string[]
    mainPictureIndex: number
    description: string
    state: string
    lga: string
    country?: string
    nearby?: RealEstateCreatenearbyInput | string[]
    amenities?: RealEstateCreateamenitiesInput | string[]
    address: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutApartmentsUploadedInput
  }

  export type RealEstateUncheckedCreateWithoutReviewsInput = {
    id?: number
    userId: string
    houseName?: string | null
    category: string
    numberOfRooms: number
    pictures?: RealEstateCreatepicturesInput | string[]
    mainPictureIndex: number
    description: string
    state: string
    lga: string
    country?: string
    nearby?: RealEstateCreatenearbyInput | string[]
    amenities?: RealEstateCreateamenitiesInput | string[]
    address: string
    createdAt?: Date | string
  }

  export type RealEstateCreateOrConnectWithoutReviewsInput = {
    where: RealEstateWhereUniqueInput
    create: XOR<RealEstateCreateWithoutReviewsInput, RealEstateUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessagesSent?: ChatMessageUpdateManyWithoutSenderNestedInput
    chatMessagesReceived?: ChatMessageUpdateManyWithoutReceiverNestedInput
    jobsApplied?: JobMarketUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    propertiesUploaded?: PropertyMarketUpdateManyWithoutUserNestedInput
    apartmentsUploaded?: RealEstateUpdateManyWithoutUserNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutUserNestedInput
    searches?: SearchUpdateManyWithoutUserNestedInput
    realEstateInterest?: RealEstateInterestUpdateOneWithoutUserNestedInput
    userKyc?: UserKycUpdateOneWithoutUserNestedInput
    userInfo?: UserInfoUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessagesSent?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    chatMessagesReceived?: ChatMessageUncheckedUpdateManyWithoutReceiverNestedInput
    jobsApplied?: JobMarketUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    propertiesUploaded?: PropertyMarketUncheckedUpdateManyWithoutUserNestedInput
    apartmentsUploaded?: RealEstateUncheckedUpdateManyWithoutUserNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
    searches?: SearchUncheckedUpdateManyWithoutUserNestedInput
    realEstateInterest?: RealEstateInterestUncheckedUpdateOneWithoutUserNestedInput
    userKyc?: UserKycUncheckedUpdateOneWithoutUserNestedInput
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserNestedInput
  }

  export type RealEstateUpsertWithoutReviewsInput = {
    update: XOR<RealEstateUpdateWithoutReviewsInput, RealEstateUncheckedUpdateWithoutReviewsInput>
    create: XOR<RealEstateCreateWithoutReviewsInput, RealEstateUncheckedCreateWithoutReviewsInput>
    where?: RealEstateWhereInput
  }

  export type RealEstateUpdateToOneWithWhereWithoutReviewsInput = {
    where?: RealEstateWhereInput
    data: XOR<RealEstateUpdateWithoutReviewsInput, RealEstateUncheckedUpdateWithoutReviewsInput>
  }

  export type RealEstateUpdateWithoutReviewsInput = {
    houseName?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    pictures?: RealEstateUpdatepicturesInput | string[]
    mainPictureIndex?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    nearby?: RealEstateUpdatenearbyInput | string[]
    amenities?: RealEstateUpdateamenitiesInput | string[]
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApartmentsUploadedNestedInput
  }

  export type RealEstateUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    houseName?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    pictures?: RealEstateUpdatepicturesInput | string[]
    mainPictureIndex?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    nearby?: RealEstateUpdatenearbyInput | string[]
    amenities?: RealEstateUpdateamenitiesInput | string[]
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutReportsInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
    chatMessagesSent?: ChatMessageCreateNestedManyWithoutSenderInput
    chatMessagesReceived?: ChatMessageCreateNestedManyWithoutReceiverInput
    jobsApplied?: JobMarketCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    propertiesUploaded?: PropertyMarketCreateNestedManyWithoutUserInput
    apartmentsUploaded?: RealEstateCreateNestedManyWithoutUserInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    searches?: SearchCreateNestedManyWithoutUserInput
    realEstateInterest?: RealEstateInterestCreateNestedOneWithoutUserInput
    userKyc?: UserKycCreateNestedOneWithoutUserInput
    userInfo?: UserInfoCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReportsInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
    chatMessagesSent?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    chatMessagesReceived?: ChatMessageUncheckedCreateNestedManyWithoutReceiverInput
    jobsApplied?: JobMarketUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    propertiesUploaded?: PropertyMarketUncheckedCreateNestedManyWithoutUserInput
    apartmentsUploaded?: RealEstateUncheckedCreateNestedManyWithoutUserInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    searches?: SearchUncheckedCreateNestedManyWithoutUserInput
    realEstateInterest?: RealEstateInterestUncheckedCreateNestedOneWithoutUserInput
    userKyc?: UserKycUncheckedCreateNestedOneWithoutUserInput
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
  }

  export type UserUpsertWithoutReportsInput = {
    update: XOR<UserUpdateWithoutReportsInput, UserUncheckedUpdateWithoutReportsInput>
    create: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReportsInput, UserUncheckedUpdateWithoutReportsInput>
  }

  export type UserUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessagesSent?: ChatMessageUpdateManyWithoutSenderNestedInput
    chatMessagesReceived?: ChatMessageUpdateManyWithoutReceiverNestedInput
    jobsApplied?: JobMarketUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    propertiesUploaded?: PropertyMarketUpdateManyWithoutUserNestedInput
    apartmentsUploaded?: RealEstateUpdateManyWithoutUserNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    searches?: SearchUpdateManyWithoutUserNestedInput
    realEstateInterest?: RealEstateInterestUpdateOneWithoutUserNestedInput
    userKyc?: UserKycUpdateOneWithoutUserNestedInput
    userInfo?: UserInfoUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessagesSent?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    chatMessagesReceived?: ChatMessageUncheckedUpdateManyWithoutReceiverNestedInput
    jobsApplied?: JobMarketUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    propertiesUploaded?: PropertyMarketUncheckedUpdateManyWithoutUserNestedInput
    apartmentsUploaded?: RealEstateUncheckedUpdateManyWithoutUserNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    searches?: SearchUncheckedUpdateManyWithoutUserNestedInput
    realEstateInterest?: RealEstateInterestUncheckedUpdateOneWithoutUserNestedInput
    userKyc?: UserKycUncheckedUpdateOneWithoutUserNestedInput
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutChatMessagesSentInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
    chatMessagesReceived?: ChatMessageCreateNestedManyWithoutReceiverInput
    jobsApplied?: JobMarketCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    propertiesUploaded?: PropertyMarketCreateNestedManyWithoutUserInput
    apartmentsUploaded?: RealEstateCreateNestedManyWithoutUserInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    searches?: SearchCreateNestedManyWithoutUserInput
    realEstateInterest?: RealEstateInterestCreateNestedOneWithoutUserInput
    userKyc?: UserKycCreateNestedOneWithoutUserInput
    userInfo?: UserInfoCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatMessagesSentInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
    chatMessagesReceived?: ChatMessageUncheckedCreateNestedManyWithoutReceiverInput
    jobsApplied?: JobMarketUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    propertiesUploaded?: PropertyMarketUncheckedCreateNestedManyWithoutUserInput
    apartmentsUploaded?: RealEstateUncheckedCreateNestedManyWithoutUserInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    searches?: SearchUncheckedCreateNestedManyWithoutUserInput
    realEstateInterest?: RealEstateInterestUncheckedCreateNestedOneWithoutUserInput
    userKyc?: UserKycUncheckedCreateNestedOneWithoutUserInput
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatMessagesSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatMessagesSentInput, UserUncheckedCreateWithoutChatMessagesSentInput>
  }

  export type UserCreateWithoutChatMessagesReceivedInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
    chatMessagesSent?: ChatMessageCreateNestedManyWithoutSenderInput
    jobsApplied?: JobMarketCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    propertiesUploaded?: PropertyMarketCreateNestedManyWithoutUserInput
    apartmentsUploaded?: RealEstateCreateNestedManyWithoutUserInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    searches?: SearchCreateNestedManyWithoutUserInput
    realEstateInterest?: RealEstateInterestCreateNestedOneWithoutUserInput
    userKyc?: UserKycCreateNestedOneWithoutUserInput
    userInfo?: UserInfoCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatMessagesReceivedInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
    chatMessagesSent?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    jobsApplied?: JobMarketUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    propertiesUploaded?: PropertyMarketUncheckedCreateNestedManyWithoutUserInput
    apartmentsUploaded?: RealEstateUncheckedCreateNestedManyWithoutUserInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    searches?: SearchUncheckedCreateNestedManyWithoutUserInput
    realEstateInterest?: RealEstateInterestUncheckedCreateNestedOneWithoutUserInput
    userKyc?: UserKycUncheckedCreateNestedOneWithoutUserInput
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatMessagesReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatMessagesReceivedInput, UserUncheckedCreateWithoutChatMessagesReceivedInput>
  }

  export type UserUpsertWithoutChatMessagesSentInput = {
    update: XOR<UserUpdateWithoutChatMessagesSentInput, UserUncheckedUpdateWithoutChatMessagesSentInput>
    create: XOR<UserCreateWithoutChatMessagesSentInput, UserUncheckedCreateWithoutChatMessagesSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatMessagesSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatMessagesSentInput, UserUncheckedUpdateWithoutChatMessagesSentInput>
  }

  export type UserUpdateWithoutChatMessagesSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessagesReceived?: ChatMessageUpdateManyWithoutReceiverNestedInput
    jobsApplied?: JobMarketUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    propertiesUploaded?: PropertyMarketUpdateManyWithoutUserNestedInput
    apartmentsUploaded?: RealEstateUpdateManyWithoutUserNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    searches?: SearchUpdateManyWithoutUserNestedInput
    realEstateInterest?: RealEstateInterestUpdateOneWithoutUserNestedInput
    userKyc?: UserKycUpdateOneWithoutUserNestedInput
    userInfo?: UserInfoUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatMessagesSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessagesReceived?: ChatMessageUncheckedUpdateManyWithoutReceiverNestedInput
    jobsApplied?: JobMarketUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    propertiesUploaded?: PropertyMarketUncheckedUpdateManyWithoutUserNestedInput
    apartmentsUploaded?: RealEstateUncheckedUpdateManyWithoutUserNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    searches?: SearchUncheckedUpdateManyWithoutUserNestedInput
    realEstateInterest?: RealEstateInterestUncheckedUpdateOneWithoutUserNestedInput
    userKyc?: UserKycUncheckedUpdateOneWithoutUserNestedInput
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUpsertWithoutChatMessagesReceivedInput = {
    update: XOR<UserUpdateWithoutChatMessagesReceivedInput, UserUncheckedUpdateWithoutChatMessagesReceivedInput>
    create: XOR<UserCreateWithoutChatMessagesReceivedInput, UserUncheckedCreateWithoutChatMessagesReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatMessagesReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatMessagesReceivedInput, UserUncheckedUpdateWithoutChatMessagesReceivedInput>
  }

  export type UserUpdateWithoutChatMessagesReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessagesSent?: ChatMessageUpdateManyWithoutSenderNestedInput
    jobsApplied?: JobMarketUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    propertiesUploaded?: PropertyMarketUpdateManyWithoutUserNestedInput
    apartmentsUploaded?: RealEstateUpdateManyWithoutUserNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    searches?: SearchUpdateManyWithoutUserNestedInput
    realEstateInterest?: RealEstateInterestUpdateOneWithoutUserNestedInput
    userKyc?: UserKycUpdateOneWithoutUserNestedInput
    userInfo?: UserInfoUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatMessagesReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessagesSent?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    jobsApplied?: JobMarketUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    propertiesUploaded?: PropertyMarketUncheckedUpdateManyWithoutUserNestedInput
    apartmentsUploaded?: RealEstateUncheckedUpdateManyWithoutUserNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    searches?: SearchUncheckedUpdateManyWithoutUserNestedInput
    realEstateInterest?: RealEstateInterestUncheckedUpdateOneWithoutUserNestedInput
    userKyc?: UserKycUncheckedUpdateOneWithoutUserNestedInput
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutJobsAppliedInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
    chatMessagesSent?: ChatMessageCreateNestedManyWithoutSenderInput
    chatMessagesReceived?: ChatMessageCreateNestedManyWithoutReceiverInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    propertiesUploaded?: PropertyMarketCreateNestedManyWithoutUserInput
    apartmentsUploaded?: RealEstateCreateNestedManyWithoutUserInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    searches?: SearchCreateNestedManyWithoutUserInput
    realEstateInterest?: RealEstateInterestCreateNestedOneWithoutUserInput
    userKyc?: UserKycCreateNestedOneWithoutUserInput
    userInfo?: UserInfoCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJobsAppliedInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
    chatMessagesSent?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    chatMessagesReceived?: ChatMessageUncheckedCreateNestedManyWithoutReceiverInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    propertiesUploaded?: PropertyMarketUncheckedCreateNestedManyWithoutUserInput
    apartmentsUploaded?: RealEstateUncheckedCreateNestedManyWithoutUserInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    searches?: SearchUncheckedCreateNestedManyWithoutUserInput
    realEstateInterest?: RealEstateInterestUncheckedCreateNestedOneWithoutUserInput
    userKyc?: UserKycUncheckedCreateNestedOneWithoutUserInput
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJobsAppliedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJobsAppliedInput, UserUncheckedCreateWithoutJobsAppliedInput>
  }

  export type UserUpsertWithoutJobsAppliedInput = {
    update: XOR<UserUpdateWithoutJobsAppliedInput, UserUncheckedUpdateWithoutJobsAppliedInput>
    create: XOR<UserCreateWithoutJobsAppliedInput, UserUncheckedCreateWithoutJobsAppliedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJobsAppliedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJobsAppliedInput, UserUncheckedUpdateWithoutJobsAppliedInput>
  }

  export type UserUpdateWithoutJobsAppliedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessagesSent?: ChatMessageUpdateManyWithoutSenderNestedInput
    chatMessagesReceived?: ChatMessageUpdateManyWithoutReceiverNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    propertiesUploaded?: PropertyMarketUpdateManyWithoutUserNestedInput
    apartmentsUploaded?: RealEstateUpdateManyWithoutUserNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    searches?: SearchUpdateManyWithoutUserNestedInput
    realEstateInterest?: RealEstateInterestUpdateOneWithoutUserNestedInput
    userKyc?: UserKycUpdateOneWithoutUserNestedInput
    userInfo?: UserInfoUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJobsAppliedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessagesSent?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    chatMessagesReceived?: ChatMessageUncheckedUpdateManyWithoutReceiverNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    propertiesUploaded?: PropertyMarketUncheckedUpdateManyWithoutUserNestedInput
    apartmentsUploaded?: RealEstateUncheckedUpdateManyWithoutUserNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    searches?: SearchUncheckedUpdateManyWithoutUserNestedInput
    realEstateInterest?: RealEstateInterestUncheckedUpdateOneWithoutUserNestedInput
    userKyc?: UserKycUncheckedUpdateOneWithoutUserNestedInput
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
    chatMessagesSent?: ChatMessageCreateNestedManyWithoutSenderInput
    chatMessagesReceived?: ChatMessageCreateNestedManyWithoutReceiverInput
    jobsApplied?: JobMarketCreateNestedManyWithoutUserInput
    propertiesUploaded?: PropertyMarketCreateNestedManyWithoutUserInput
    apartmentsUploaded?: RealEstateCreateNestedManyWithoutUserInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    searches?: SearchCreateNestedManyWithoutUserInput
    realEstateInterest?: RealEstateInterestCreateNestedOneWithoutUserInput
    userKyc?: UserKycCreateNestedOneWithoutUserInput
    userInfo?: UserInfoCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
    chatMessagesSent?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    chatMessagesReceived?: ChatMessageUncheckedCreateNestedManyWithoutReceiverInput
    jobsApplied?: JobMarketUncheckedCreateNestedManyWithoutUserInput
    propertiesUploaded?: PropertyMarketUncheckedCreateNestedManyWithoutUserInput
    apartmentsUploaded?: RealEstateUncheckedCreateNestedManyWithoutUserInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    searches?: SearchUncheckedCreateNestedManyWithoutUserInput
    realEstateInterest?: RealEstateInterestUncheckedCreateNestedOneWithoutUserInput
    userKyc?: UserKycUncheckedCreateNestedOneWithoutUserInput
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserInput
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
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessagesSent?: ChatMessageUpdateManyWithoutSenderNestedInput
    chatMessagesReceived?: ChatMessageUpdateManyWithoutReceiverNestedInput
    jobsApplied?: JobMarketUpdateManyWithoutUserNestedInput
    propertiesUploaded?: PropertyMarketUpdateManyWithoutUserNestedInput
    apartmentsUploaded?: RealEstateUpdateManyWithoutUserNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    searches?: SearchUpdateManyWithoutUserNestedInput
    realEstateInterest?: RealEstateInterestUpdateOneWithoutUserNestedInput
    userKyc?: UserKycUpdateOneWithoutUserNestedInput
    userInfo?: UserInfoUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessagesSent?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    chatMessagesReceived?: ChatMessageUncheckedUpdateManyWithoutReceiverNestedInput
    jobsApplied?: JobMarketUncheckedUpdateManyWithoutUserNestedInput
    propertiesUploaded?: PropertyMarketUncheckedUpdateManyWithoutUserNestedInput
    apartmentsUploaded?: RealEstateUncheckedUpdateManyWithoutUserNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    searches?: SearchUncheckedUpdateManyWithoutUserNestedInput
    realEstateInterest?: RealEstateInterestUncheckedUpdateOneWithoutUserNestedInput
    userKyc?: UserKycUncheckedUpdateOneWithoutUserNestedInput
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutPropertiesUploadedInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
    chatMessagesSent?: ChatMessageCreateNestedManyWithoutSenderInput
    chatMessagesReceived?: ChatMessageCreateNestedManyWithoutReceiverInput
    jobsApplied?: JobMarketCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    apartmentsUploaded?: RealEstateCreateNestedManyWithoutUserInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    searches?: SearchCreateNestedManyWithoutUserInput
    realEstateInterest?: RealEstateInterestCreateNestedOneWithoutUserInput
    userKyc?: UserKycCreateNestedOneWithoutUserInput
    userInfo?: UserInfoCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPropertiesUploadedInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
    chatMessagesSent?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    chatMessagesReceived?: ChatMessageUncheckedCreateNestedManyWithoutReceiverInput
    jobsApplied?: JobMarketUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    apartmentsUploaded?: RealEstateUncheckedCreateNestedManyWithoutUserInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    searches?: SearchUncheckedCreateNestedManyWithoutUserInput
    realEstateInterest?: RealEstateInterestUncheckedCreateNestedOneWithoutUserInput
    userKyc?: UserKycUncheckedCreateNestedOneWithoutUserInput
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPropertiesUploadedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPropertiesUploadedInput, UserUncheckedCreateWithoutPropertiesUploadedInput>
  }

  export type UserUpsertWithoutPropertiesUploadedInput = {
    update: XOR<UserUpdateWithoutPropertiesUploadedInput, UserUncheckedUpdateWithoutPropertiesUploadedInput>
    create: XOR<UserCreateWithoutPropertiesUploadedInput, UserUncheckedCreateWithoutPropertiesUploadedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPropertiesUploadedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPropertiesUploadedInput, UserUncheckedUpdateWithoutPropertiesUploadedInput>
  }

  export type UserUpdateWithoutPropertiesUploadedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessagesSent?: ChatMessageUpdateManyWithoutSenderNestedInput
    chatMessagesReceived?: ChatMessageUpdateManyWithoutReceiverNestedInput
    jobsApplied?: JobMarketUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    apartmentsUploaded?: RealEstateUpdateManyWithoutUserNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    searches?: SearchUpdateManyWithoutUserNestedInput
    realEstateInterest?: RealEstateInterestUpdateOneWithoutUserNestedInput
    userKyc?: UserKycUpdateOneWithoutUserNestedInput
    userInfo?: UserInfoUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPropertiesUploadedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessagesSent?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    chatMessagesReceived?: ChatMessageUncheckedUpdateManyWithoutReceiverNestedInput
    jobsApplied?: JobMarketUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    apartmentsUploaded?: RealEstateUncheckedUpdateManyWithoutUserNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    searches?: SearchUncheckedUpdateManyWithoutUserNestedInput
    realEstateInterest?: RealEstateInterestUncheckedUpdateOneWithoutUserNestedInput
    userKyc?: UserKycUncheckedUpdateOneWithoutUserNestedInput
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutRemindersInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
    chatMessagesSent?: ChatMessageCreateNestedManyWithoutSenderInput
    chatMessagesReceived?: ChatMessageCreateNestedManyWithoutReceiverInput
    jobsApplied?: JobMarketCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    propertiesUploaded?: PropertyMarketCreateNestedManyWithoutUserInput
    apartmentsUploaded?: RealEstateCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    searches?: SearchCreateNestedManyWithoutUserInput
    realEstateInterest?: RealEstateInterestCreateNestedOneWithoutUserInput
    userKyc?: UserKycCreateNestedOneWithoutUserInput
    userInfo?: UserInfoCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRemindersInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
    chatMessagesSent?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    chatMessagesReceived?: ChatMessageUncheckedCreateNestedManyWithoutReceiverInput
    jobsApplied?: JobMarketUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    propertiesUploaded?: PropertyMarketUncheckedCreateNestedManyWithoutUserInput
    apartmentsUploaded?: RealEstateUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    searches?: SearchUncheckedCreateNestedManyWithoutUserInput
    realEstateInterest?: RealEstateInterestUncheckedCreateNestedOneWithoutUserInput
    userKyc?: UserKycUncheckedCreateNestedOneWithoutUserInput
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRemindersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRemindersInput, UserUncheckedCreateWithoutRemindersInput>
  }

  export type UserUpsertWithoutRemindersInput = {
    update: XOR<UserUpdateWithoutRemindersInput, UserUncheckedUpdateWithoutRemindersInput>
    create: XOR<UserCreateWithoutRemindersInput, UserUncheckedCreateWithoutRemindersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRemindersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRemindersInput, UserUncheckedUpdateWithoutRemindersInput>
  }

  export type UserUpdateWithoutRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessagesSent?: ChatMessageUpdateManyWithoutSenderNestedInput
    chatMessagesReceived?: ChatMessageUpdateManyWithoutReceiverNestedInput
    jobsApplied?: JobMarketUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    propertiesUploaded?: PropertyMarketUpdateManyWithoutUserNestedInput
    apartmentsUploaded?: RealEstateUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    searches?: SearchUpdateManyWithoutUserNestedInput
    realEstateInterest?: RealEstateInterestUpdateOneWithoutUserNestedInput
    userKyc?: UserKycUpdateOneWithoutUserNestedInput
    userInfo?: UserInfoUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessagesSent?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    chatMessagesReceived?: ChatMessageUncheckedUpdateManyWithoutReceiverNestedInput
    jobsApplied?: JobMarketUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    propertiesUploaded?: PropertyMarketUncheckedUpdateManyWithoutUserNestedInput
    apartmentsUploaded?: RealEstateUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    searches?: SearchUncheckedUpdateManyWithoutUserNestedInput
    realEstateInterest?: RealEstateInterestUncheckedUpdateOneWithoutUserNestedInput
    userKyc?: UserKycUncheckedUpdateOneWithoutUserNestedInput
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutSearchesInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
    chatMessagesSent?: ChatMessageCreateNestedManyWithoutSenderInput
    chatMessagesReceived?: ChatMessageCreateNestedManyWithoutReceiverInput
    jobsApplied?: JobMarketCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    propertiesUploaded?: PropertyMarketCreateNestedManyWithoutUserInput
    apartmentsUploaded?: RealEstateCreateNestedManyWithoutUserInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    realEstateInterest?: RealEstateInterestCreateNestedOneWithoutUserInput
    userKyc?: UserKycCreateNestedOneWithoutUserInput
    userInfo?: UserInfoCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSearchesInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
    chatMessagesSent?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    chatMessagesReceived?: ChatMessageUncheckedCreateNestedManyWithoutReceiverInput
    jobsApplied?: JobMarketUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    propertiesUploaded?: PropertyMarketUncheckedCreateNestedManyWithoutUserInput
    apartmentsUploaded?: RealEstateUncheckedCreateNestedManyWithoutUserInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    realEstateInterest?: RealEstateInterestUncheckedCreateNestedOneWithoutUserInput
    userKyc?: UserKycUncheckedCreateNestedOneWithoutUserInput
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSearchesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSearchesInput, UserUncheckedCreateWithoutSearchesInput>
  }

  export type UserUpsertWithoutSearchesInput = {
    update: XOR<UserUpdateWithoutSearchesInput, UserUncheckedUpdateWithoutSearchesInput>
    create: XOR<UserCreateWithoutSearchesInput, UserUncheckedCreateWithoutSearchesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSearchesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSearchesInput, UserUncheckedUpdateWithoutSearchesInput>
  }

  export type UserUpdateWithoutSearchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessagesSent?: ChatMessageUpdateManyWithoutSenderNestedInput
    chatMessagesReceived?: ChatMessageUpdateManyWithoutReceiverNestedInput
    jobsApplied?: JobMarketUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    propertiesUploaded?: PropertyMarketUpdateManyWithoutUserNestedInput
    apartmentsUploaded?: RealEstateUpdateManyWithoutUserNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    realEstateInterest?: RealEstateInterestUpdateOneWithoutUserNestedInput
    userKyc?: UserKycUpdateOneWithoutUserNestedInput
    userInfo?: UserInfoUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSearchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessagesSent?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    chatMessagesReceived?: ChatMessageUncheckedUpdateManyWithoutReceiverNestedInput
    jobsApplied?: JobMarketUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    propertiesUploaded?: PropertyMarketUncheckedUpdateManyWithoutUserNestedInput
    apartmentsUploaded?: RealEstateUncheckedUpdateManyWithoutUserNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    realEstateInterest?: RealEstateInterestUncheckedUpdateOneWithoutUserNestedInput
    userKyc?: UserKycUncheckedUpdateOneWithoutUserNestedInput
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserNestedInput
  }

  export type RoleCreateWithoutAdminsInput = {
    id?: string
    name: string
  }

  export type RoleUncheckedCreateWithoutAdminsInput = {
    id?: string
    name: string
  }

  export type RoleCreateOrConnectWithoutAdminsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutAdminsInput, RoleUncheckedCreateWithoutAdminsInput>
  }

  export type RoleUpsertWithWhereUniqueWithoutAdminsInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutAdminsInput, RoleUncheckedUpdateWithoutAdminsInput>
    create: XOR<RoleCreateWithoutAdminsInput, RoleUncheckedCreateWithoutAdminsInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutAdminsInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutAdminsInput, RoleUncheckedUpdateWithoutAdminsInput>
  }

  export type RoleUpdateManyWithWhereWithoutAdminsInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutAdminsInput>
  }

  export type RoleScalarWhereInput = {
    AND?: RoleScalarWhereInput | RoleScalarWhereInput[]
    OR?: RoleScalarWhereInput[]
    NOT?: RoleScalarWhereInput | RoleScalarWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
  }

  export type AdminCreateWithoutRolesInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateWithoutRolesInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminCreateOrConnectWithoutRolesInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutRolesInput, AdminUncheckedCreateWithoutRolesInput>
  }

  export type AdminUpsertWithWhereUniqueWithoutRolesInput = {
    where: AdminWhereUniqueInput
    update: XOR<AdminUpdateWithoutRolesInput, AdminUncheckedUpdateWithoutRolesInput>
    create: XOR<AdminCreateWithoutRolesInput, AdminUncheckedCreateWithoutRolesInput>
  }

  export type AdminUpdateWithWhereUniqueWithoutRolesInput = {
    where: AdminWhereUniqueInput
    data: XOR<AdminUpdateWithoutRolesInput, AdminUncheckedUpdateWithoutRolesInput>
  }

  export type AdminUpdateManyWithWhereWithoutRolesInput = {
    where: AdminScalarWhereInput
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyWithoutRolesInput>
  }

  export type AdminScalarWhereInput = {
    AND?: AdminScalarWhereInput | AdminScalarWhereInput[]
    OR?: AdminScalarWhereInput[]
    NOT?: AdminScalarWhereInput | AdminScalarWhereInput[]
    id?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type UserCreateWithoutRealEstateInterestInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
    chatMessagesSent?: ChatMessageCreateNestedManyWithoutSenderInput
    chatMessagesReceived?: ChatMessageCreateNestedManyWithoutReceiverInput
    jobsApplied?: JobMarketCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    propertiesUploaded?: PropertyMarketCreateNestedManyWithoutUserInput
    apartmentsUploaded?: RealEstateCreateNestedManyWithoutUserInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    searches?: SearchCreateNestedManyWithoutUserInput
    userKyc?: UserKycCreateNestedOneWithoutUserInput
    userInfo?: UserInfoCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRealEstateInterestInput = {
    id?: string
    email: string
    phoneNumber?: string | null
    password: string
    isVerified?: boolean
    isEmailVerified?: boolean | null
    isNumberVerified?: boolean | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempToken?: string | null
    chatMessagesSent?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    chatMessagesReceived?: ChatMessageUncheckedCreateNestedManyWithoutReceiverInput
    jobsApplied?: JobMarketUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    propertiesUploaded?: PropertyMarketUncheckedCreateNestedManyWithoutUserInput
    apartmentsUploaded?: RealEstateUncheckedCreateNestedManyWithoutUserInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    searches?: SearchUncheckedCreateNestedManyWithoutUserInput
    userKyc?: UserKycUncheckedCreateNestedOneWithoutUserInput
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRealEstateInterestInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRealEstateInterestInput, UserUncheckedCreateWithoutRealEstateInterestInput>
  }

  export type UserUpsertWithoutRealEstateInterestInput = {
    update: XOR<UserUpdateWithoutRealEstateInterestInput, UserUncheckedUpdateWithoutRealEstateInterestInput>
    create: XOR<UserCreateWithoutRealEstateInterestInput, UserUncheckedCreateWithoutRealEstateInterestInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRealEstateInterestInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRealEstateInterestInput, UserUncheckedUpdateWithoutRealEstateInterestInput>
  }

  export type UserUpdateWithoutRealEstateInterestInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessagesSent?: ChatMessageUpdateManyWithoutSenderNestedInput
    chatMessagesReceived?: ChatMessageUpdateManyWithoutReceiverNestedInput
    jobsApplied?: JobMarketUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    propertiesUploaded?: PropertyMarketUpdateManyWithoutUserNestedInput
    apartmentsUploaded?: RealEstateUpdateManyWithoutUserNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    searches?: SearchUpdateManyWithoutUserNestedInput
    userKyc?: UserKycUpdateOneWithoutUserNestedInput
    userInfo?: UserInfoUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRealEstateInterestInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempToken?: NullableStringFieldUpdateOperationsInput | string | null
    chatMessagesSent?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    chatMessagesReceived?: ChatMessageUncheckedUpdateManyWithoutReceiverNestedInput
    jobsApplied?: JobMarketUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    propertiesUploaded?: PropertyMarketUncheckedUpdateManyWithoutUserNestedInput
    apartmentsUploaded?: RealEstateUncheckedUpdateManyWithoutUserNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    searches?: SearchUncheckedUpdateManyWithoutUserNestedInput
    userKyc?: UserKycUncheckedUpdateOneWithoutUserNestedInput
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ChatMessageCreateManySenderInput = {
    id?: number
    receiverId: string
    message: string
    createdAt?: Date | string
    isRead?: boolean
    isDelivered?: boolean
  }

  export type ChatMessageCreateManyReceiverInput = {
    id?: number
    senderId: string
    message: string
    createdAt?: Date | string
    isRead?: boolean
    isDelivered?: boolean
  }

  export type JobMarketCreateManyUserInput = {
    id?: number
    companyName: string
    jobTitle: string
    jobDescription: string
    keyResponsibilities?: JobMarketCreatekeyResponsibilitiesInput | string[]
    qualifications?: JobMarketCreatequalificationsInput | string[]
    workArrangement: string
    createdAt?: Date | string
    updatedAt?: Date | string
    applicationUrl: string
  }

  export type NotificationCreateManyUserInput = {
    id?: number
    message: string
    createdAt?: Date | string
    status: string
    type: string
    priority: string
    actionButtonLabel?: string | null
    actionButtonLink?: string | null
    relatedResourceLink?: string | null
  }

  export type PropertyMarketCreateManyUserInput = {
    id?: number
    title: string
    description: string
    price: number
    images?: PropertyMarketCreateimagesInput | string[]
    location: string
    createdAt?: Date | string
  }

  export type RealEstateCreateManyUserInput = {
    id?: number
    houseName?: string | null
    category: string
    numberOfRooms: number
    pictures?: RealEstateCreatepicturesInput | string[]
    mainPictureIndex: number
    description: string
    state: string
    lga: string
    country?: string
    nearby?: RealEstateCreatenearbyInput | string[]
    amenities?: RealEstateCreateamenitiesInput | string[]
    address: string
    createdAt?: Date | string
  }

  export type ReminderCreateManyUserInput = {
    id?: number
    title: string
    location: string
    time: Date | string
    dueDate: Date | string
    note: string
    appointmentContactNumber: string
    status: boolean
  }

  export type ReportCreateManyUserInput = {
    id?: number
    reportCategory: string
    comment?: string | null
    reportPriority: string
    reportableType: string
    createdAt?: Date | string
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    realEstateId: number
    rating: number
    comment?: string | null
    propertyPictures?: ReviewCreatepropertyPicturesInput | string[]
    createdAt?: Date | string
  }

  export type SearchCreateManyUserInput = {
    id?: number
    query: string
    timestamp?: Date | string
  }

  export type ChatMessageUpdateWithoutSenderInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    receiver?: UserUpdateOneRequiredWithoutChatMessagesReceivedNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiverId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChatMessageUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiverId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChatMessageUpdateWithoutReceiverInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    sender?: UserUpdateOneRequiredWithoutChatMessagesSentNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChatMessageUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JobMarketUpdateWithoutUserInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobDescription?: StringFieldUpdateOperationsInput | string
    keyResponsibilities?: JobMarketUpdatekeyResponsibilitiesInput | string[]
    qualifications?: JobMarketUpdatequalificationsInput | string[]
    workArrangement?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicationUrl?: StringFieldUpdateOperationsInput | string
  }

  export type JobMarketUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobDescription?: StringFieldUpdateOperationsInput | string
    keyResponsibilities?: JobMarketUpdatekeyResponsibilitiesInput | string[]
    qualifications?: JobMarketUpdatequalificationsInput | string[]
    workArrangement?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicationUrl?: StringFieldUpdateOperationsInput | string
  }

  export type JobMarketUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobDescription?: StringFieldUpdateOperationsInput | string
    keyResponsibilities?: JobMarketUpdatekeyResponsibilitiesInput | string[]
    qualifications?: JobMarketUpdatequalificationsInput | string[]
    workArrangement?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicationUrl?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    actionButtonLabel?: NullableStringFieldUpdateOperationsInput | string | null
    actionButtonLink?: NullableStringFieldUpdateOperationsInput | string | null
    relatedResourceLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    actionButtonLabel?: NullableStringFieldUpdateOperationsInput | string | null
    actionButtonLink?: NullableStringFieldUpdateOperationsInput | string | null
    relatedResourceLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    actionButtonLabel?: NullableStringFieldUpdateOperationsInput | string | null
    actionButtonLink?: NullableStringFieldUpdateOperationsInput | string | null
    relatedResourceLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropertyMarketUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    images?: PropertyMarketUpdateimagesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyMarketUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    images?: PropertyMarketUpdateimagesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyMarketUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    images?: PropertyMarketUpdateimagesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RealEstateUpdateWithoutUserInput = {
    houseName?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    pictures?: RealEstateUpdatepicturesInput | string[]
    mainPictureIndex?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    nearby?: RealEstateUpdatenearbyInput | string[]
    amenities?: RealEstateUpdateamenitiesInput | string[]
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutRealEstateNestedInput
  }

  export type RealEstateUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    houseName?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    pictures?: RealEstateUpdatepicturesInput | string[]
    mainPictureIndex?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    nearby?: RealEstateUpdatenearbyInput | string[]
    amenities?: RealEstateUpdateamenitiesInput | string[]
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutRealEstateNestedInput
  }

  export type RealEstateUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    houseName?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    pictures?: RealEstateUpdatepicturesInput | string[]
    mainPictureIndex?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    nearby?: RealEstateUpdatenearbyInput | string[]
    amenities?: RealEstateUpdateamenitiesInput | string[]
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    appointmentContactNumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReminderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    appointmentContactNumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReminderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    appointmentContactNumber?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReportUpdateWithoutUserInput = {
    reportCategory?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reportPriority?: StringFieldUpdateOperationsInput | string
    reportableType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    reportCategory?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reportPriority?: StringFieldUpdateOperationsInput | string
    reportableType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    reportCategory?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reportPriority?: StringFieldUpdateOperationsInput | string
    reportableType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    propertyPictures?: ReviewUpdatepropertyPicturesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    realEstate?: RealEstateUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    realEstateId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    propertyPictures?: ReviewUpdatepropertyPicturesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    realEstateId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    propertyPictures?: ReviewUpdatepropertyPicturesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchUpdateWithoutUserInput = {
    query?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    query?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    query?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyRealEstateInput = {
    id?: number
    userId: string
    rating: number
    comment?: string | null
    propertyPictures?: ReviewCreatepropertyPicturesInput | string[]
    createdAt?: Date | string
  }

  export type ReviewUpdateWithoutRealEstateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    propertyPictures?: ReviewUpdatepropertyPicturesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutRealEstateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    propertyPictures?: ReviewUpdatepropertyPicturesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutRealEstateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    propertyPictures?: ReviewUpdatepropertyPicturesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUpdateWithoutAdminsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutAdminsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyWithoutAdminsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RealEstateCountOutputTypeDefaultArgs instead
     */
    export type RealEstateCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RealEstateCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminCountOutputTypeDefaultArgs instead
     */
    export type AdminCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleCountOutputTypeDefaultArgs instead
     */
    export type RoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserInfoDefaultArgs instead
     */
    export type UserInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserInfoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserKycDefaultArgs instead
     */
    export type UserKycArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserKycDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RealEstateDefaultArgs instead
     */
    export type RealEstateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RealEstateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReviewDefaultArgs instead
     */
    export type ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReviewDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReportDefaultArgs instead
     */
    export type ReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReportDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatMessageDefaultArgs instead
     */
    export type ChatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatMessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactDefaultArgs instead
     */
    export type ContactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContactDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobMarketDefaultArgs instead
     */
    export type JobMarketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobMarketDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationDefaultArgs instead
     */
    export type NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PropertyMarketDefaultArgs instead
     */
    export type PropertyMarketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PropertyMarketDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReminderDefaultArgs instead
     */
    export type ReminderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReminderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SearchDefaultArgs instead
     */
    export type SearchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SearchDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminDefaultArgs instead
     */
    export type AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleDefaultArgs instead
     */
    export type RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RealEstateInterestDefaultArgs instead
     */
    export type RealEstateInterestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RealEstateInterestDefaultArgs<ExtArgs>

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