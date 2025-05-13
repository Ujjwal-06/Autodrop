
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
 * Model ShopifyCategory
 * 
 */
export type ShopifyCategory = $Result.DefaultSelection<Prisma.$ShopifyCategoryPayload>
/**
 * Model EbayCategory
 * 
 */
export type EbayCategory = $Result.DefaultSelection<Prisma.$EbayCategoryPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductImage
 * 
 */
export type ProductImage = $Result.DefaultSelection<Prisma.$ProductImagePayload>
/**
 * Model SyncProduct
 * 
 */
export type SyncProduct = $Result.DefaultSelection<Prisma.$SyncProductPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type Status = (typeof Status)[keyof typeof Status]


export const ProductStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type ProductStatus = (typeof ProductStatus)[keyof typeof ProductStatus]


export const AddressType: {
  BILLING: 'BILLING',
  SHIPPING: 'SHIPPING'
};

export type AddressType = (typeof AddressType)[keyof typeof AddressType]


export const OrderStatus: {
  OPEN: 'OPEN',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED',
  REFUNDED: 'REFUNDED',
  PAID: 'PAID',
  PENDING: 'PENDING'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type ProductStatus = $Enums.ProductStatus

export const ProductStatus: typeof $Enums.ProductStatus

export type AddressType = $Enums.AddressType

export const AddressType: typeof $Enums.AddressType

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

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
   * `prisma.shopifyCategory`: Exposes CRUD operations for the **ShopifyCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShopifyCategories
    * const shopifyCategories = await prisma.shopifyCategory.findMany()
    * ```
    */
  get shopifyCategory(): Prisma.ShopifyCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ebayCategory`: Exposes CRUD operations for the **EbayCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EbayCategories
    * const ebayCategories = await prisma.ebayCategory.findMany()
    * ```
    */
  get ebayCategory(): Prisma.EbayCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productImage`: Exposes CRUD operations for the **ProductImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductImages
    * const productImages = await prisma.productImage.findMany()
    * ```
    */
  get productImage(): Prisma.ProductImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.syncProduct`: Exposes CRUD operations for the **SyncProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SyncProducts
    * const syncProducts = await prisma.syncProduct.findMany()
    * ```
    */
  get syncProduct(): Prisma.SyncProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    ShopifyCategory: 'ShopifyCategory',
    EbayCategory: 'EbayCategory',
    Product: 'Product',
    ProductImage: 'ProductImage',
    SyncProduct: 'SyncProduct',
    Order: 'Order',
    OrderItem: 'OrderItem',
    Address: 'Address'
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
      modelProps: "user" | "shopifyCategory" | "ebayCategory" | "product" | "productImage" | "syncProduct" | "order" | "orderItem" | "address"
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
      ShopifyCategory: {
        payload: Prisma.$ShopifyCategoryPayload<ExtArgs>
        fields: Prisma.ShopifyCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopifyCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopifyCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopifyCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopifyCategoryPayload>
          }
          findFirst: {
            args: Prisma.ShopifyCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopifyCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopifyCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopifyCategoryPayload>
          }
          findMany: {
            args: Prisma.ShopifyCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopifyCategoryPayload>[]
          }
          create: {
            args: Prisma.ShopifyCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopifyCategoryPayload>
          }
          createMany: {
            args: Prisma.ShopifyCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShopifyCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopifyCategoryPayload>
          }
          update: {
            args: Prisma.ShopifyCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopifyCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ShopifyCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopifyCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShopifyCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopifyCategoryPayload>
          }
          aggregate: {
            args: Prisma.ShopifyCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShopifyCategory>
          }
          groupBy: {
            args: Prisma.ShopifyCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopifyCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopifyCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ShopifyCategoryCountAggregateOutputType> | number
          }
        }
      }
      EbayCategory: {
        payload: Prisma.$EbayCategoryPayload<ExtArgs>
        fields: Prisma.EbayCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EbayCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbayCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EbayCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbayCategoryPayload>
          }
          findFirst: {
            args: Prisma.EbayCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbayCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EbayCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbayCategoryPayload>
          }
          findMany: {
            args: Prisma.EbayCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbayCategoryPayload>[]
          }
          create: {
            args: Prisma.EbayCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbayCategoryPayload>
          }
          createMany: {
            args: Prisma.EbayCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EbayCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbayCategoryPayload>
          }
          update: {
            args: Prisma.EbayCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbayCategoryPayload>
          }
          deleteMany: {
            args: Prisma.EbayCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EbayCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EbayCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbayCategoryPayload>
          }
          aggregate: {
            args: Prisma.EbayCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEbayCategory>
          }
          groupBy: {
            args: Prisma.EbayCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EbayCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EbayCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<EbayCategoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductImage: {
        payload: Prisma.$ProductImagePayload<ExtArgs>
        fields: Prisma.ProductImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findFirst: {
            args: Prisma.ProductImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findMany: {
            args: Prisma.ProductImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          create: {
            args: Prisma.ProductImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          createMany: {
            args: Prisma.ProductImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          update: {
            args: Prisma.ProductImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          deleteMany: {
            args: Prisma.ProductImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          aggregate: {
            args: Prisma.ProductImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductImage>
          }
          groupBy: {
            args: Prisma.ProductImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductImageCountArgs<ExtArgs>
            result: $Utils.Optional<ProductImageCountAggregateOutputType> | number
          }
        }
      }
      SyncProduct: {
        payload: Prisma.$SyncProductPayload<ExtArgs>
        fields: Prisma.SyncProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SyncProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SyncProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncProductPayload>
          }
          findFirst: {
            args: Prisma.SyncProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SyncProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncProductPayload>
          }
          findMany: {
            args: Prisma.SyncProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncProductPayload>[]
          }
          create: {
            args: Prisma.SyncProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncProductPayload>
          }
          createMany: {
            args: Prisma.SyncProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SyncProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncProductPayload>
          }
          update: {
            args: Prisma.SyncProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncProductPayload>
          }
          deleteMany: {
            args: Prisma.SyncProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SyncProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SyncProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncProductPayload>
          }
          aggregate: {
            args: Prisma.SyncProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSyncProduct>
          }
          groupBy: {
            args: Prisma.SyncProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<SyncProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.SyncProductCountArgs<ExtArgs>
            result: $Utils.Optional<SyncProductCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
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
    shopifyCategory?: ShopifyCategoryOmit
    ebayCategory?: EbayCategoryOmit
    product?: ProductOmit
    productImage?: ProductImageOmit
    syncProduct?: SyncProductOmit
    order?: OrderOmit
    orderItem?: OrderItemOmit
    address?: AddressOmit
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
    address: number
    orders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | UserCountOutputTypeCountAddressArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
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
  export type UserCountOutputTypeCountAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type ShopifyCategoryCountOutputType
   */

  export type ShopifyCategoryCountOutputType = {
    products: number
  }

  export type ShopifyCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ShopifyCategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * ShopifyCategoryCountOutputType without action
   */
  export type ShopifyCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyCategoryCountOutputType
     */
    select?: ShopifyCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShopifyCategoryCountOutputType without action
   */
  export type ShopifyCategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type EbayCategoryCountOutputType
   */

  export type EbayCategoryCountOutputType = {
    products: number
  }

  export type EbayCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | EbayCategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * EbayCategoryCountOutputType without action
   */
  export type EbayCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbayCategoryCountOutputType
     */
    select?: EbayCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EbayCategoryCountOutputType without action
   */
  export type EbayCategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyncProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    orderItems: number
    productImages: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | ProductCountOutputTypeCountOrderItemsArgs
    productImages?: boolean | ProductCountOutputTypeCountProductImagesArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    orderItems: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | OrderCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type AddressCountOutputType
   */

  export type AddressCountOutputType = {
    billingOrders: number
    shippingOrders: number
  }

  export type AddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    billingOrders?: boolean | AddressCountOutputTypeCountBillingOrdersArgs
    shippingOrders?: boolean | AddressCountOutputTypeCountShippingOrdersArgs
  }

  // Custom InputTypes
  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     */
    select?: AddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountBillingOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountShippingOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
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
    roleId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    roleId: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    roleId: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    roleId: number
    firstName: number
    lastName: number
    email: number
    password: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    roleId?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    roleId?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    roleId?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    status?: true
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
    roleId: number
    firstName: string
    lastName: string
    email: string
    password: string
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
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
    roleId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    address?: boolean | User$addressArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    roleId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roleId" | "firstName" | "lastName" | "email" | "password" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | User$addressArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      address: Prisma.$AddressPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roleId: number
      firstName: string
      lastName: string
      email: string
      password: string
      status: $Enums.Status
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
    address<T extends User$addressArgs<ExtArgs> = {}>(args?: Subset<T, User$addressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly roleId: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'Status'>
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
   * User.address
   */
  export type User$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
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
   * Model ShopifyCategory
   */

  export type AggregateShopifyCategory = {
    _count: ShopifyCategoryCountAggregateOutputType | null
    _avg: ShopifyCategoryAvgAggregateOutputType | null
    _sum: ShopifyCategorySumAggregateOutputType | null
    _min: ShopifyCategoryMinAggregateOutputType | null
    _max: ShopifyCategoryMaxAggregateOutputType | null
  }

  export type ShopifyCategoryAvgAggregateOutputType = {
    id: number | null
    shopifyCategoryId: number | null
    parentId: number | null
  }

  export type ShopifyCategorySumAggregateOutputType = {
    id: number | null
    shopifyCategoryId: number | null
    parentId: number | null
  }

  export type ShopifyCategoryMinAggregateOutputType = {
    id: number | null
    shopifyCategoryId: number | null
    name: string | null
    parentId: number | null
    status: $Enums.Status | null
  }

  export type ShopifyCategoryMaxAggregateOutputType = {
    id: number | null
    shopifyCategoryId: number | null
    name: string | null
    parentId: number | null
    status: $Enums.Status | null
  }

  export type ShopifyCategoryCountAggregateOutputType = {
    id: number
    shopifyCategoryId: number
    name: number
    parentId: number
    status: number
    _all: number
  }


  export type ShopifyCategoryAvgAggregateInputType = {
    id?: true
    shopifyCategoryId?: true
    parentId?: true
  }

  export type ShopifyCategorySumAggregateInputType = {
    id?: true
    shopifyCategoryId?: true
    parentId?: true
  }

  export type ShopifyCategoryMinAggregateInputType = {
    id?: true
    shopifyCategoryId?: true
    name?: true
    parentId?: true
    status?: true
  }

  export type ShopifyCategoryMaxAggregateInputType = {
    id?: true
    shopifyCategoryId?: true
    name?: true
    parentId?: true
    status?: true
  }

  export type ShopifyCategoryCountAggregateInputType = {
    id?: true
    shopifyCategoryId?: true
    name?: true
    parentId?: true
    status?: true
    _all?: true
  }

  export type ShopifyCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopifyCategory to aggregate.
     */
    where?: ShopifyCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopifyCategories to fetch.
     */
    orderBy?: ShopifyCategoryOrderByWithRelationInput | ShopifyCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopifyCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopifyCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopifyCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShopifyCategories
    **/
    _count?: true | ShopifyCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopifyCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopifyCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopifyCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopifyCategoryMaxAggregateInputType
  }

  export type GetShopifyCategoryAggregateType<T extends ShopifyCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateShopifyCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShopifyCategory[P]>
      : GetScalarType<T[P], AggregateShopifyCategory[P]>
  }




  export type ShopifyCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopifyCategoryWhereInput
    orderBy?: ShopifyCategoryOrderByWithAggregationInput | ShopifyCategoryOrderByWithAggregationInput[]
    by: ShopifyCategoryScalarFieldEnum[] | ShopifyCategoryScalarFieldEnum
    having?: ShopifyCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopifyCategoryCountAggregateInputType | true
    _avg?: ShopifyCategoryAvgAggregateInputType
    _sum?: ShopifyCategorySumAggregateInputType
    _min?: ShopifyCategoryMinAggregateInputType
    _max?: ShopifyCategoryMaxAggregateInputType
  }

  export type ShopifyCategoryGroupByOutputType = {
    id: number
    shopifyCategoryId: number
    name: string
    parentId: number
    status: $Enums.Status
    _count: ShopifyCategoryCountAggregateOutputType | null
    _avg: ShopifyCategoryAvgAggregateOutputType | null
    _sum: ShopifyCategorySumAggregateOutputType | null
    _min: ShopifyCategoryMinAggregateOutputType | null
    _max: ShopifyCategoryMaxAggregateOutputType | null
  }

  type GetShopifyCategoryGroupByPayload<T extends ShopifyCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopifyCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopifyCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopifyCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ShopifyCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ShopifyCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopifyCategoryId?: boolean
    name?: boolean
    parentId?: boolean
    status?: boolean
    products?: boolean | ShopifyCategory$productsArgs<ExtArgs>
    _count?: boolean | ShopifyCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopifyCategory"]>



  export type ShopifyCategorySelectScalar = {
    id?: boolean
    shopifyCategoryId?: boolean
    name?: boolean
    parentId?: boolean
    status?: boolean
  }

  export type ShopifyCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopifyCategoryId" | "name" | "parentId" | "status", ExtArgs["result"]["shopifyCategory"]>
  export type ShopifyCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ShopifyCategory$productsArgs<ExtArgs>
    _count?: boolean | ShopifyCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ShopifyCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShopifyCategory"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      shopifyCategoryId: number
      name: string
      parentId: number
      status: $Enums.Status
    }, ExtArgs["result"]["shopifyCategory"]>
    composites: {}
  }

  type ShopifyCategoryGetPayload<S extends boolean | null | undefined | ShopifyCategoryDefaultArgs> = $Result.GetResult<Prisma.$ShopifyCategoryPayload, S>

  type ShopifyCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopifyCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopifyCategoryCountAggregateInputType | true
    }

  export interface ShopifyCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShopifyCategory'], meta: { name: 'ShopifyCategory' } }
    /**
     * Find zero or one ShopifyCategory that matches the filter.
     * @param {ShopifyCategoryFindUniqueArgs} args - Arguments to find a ShopifyCategory
     * @example
     * // Get one ShopifyCategory
     * const shopifyCategory = await prisma.shopifyCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopifyCategoryFindUniqueArgs>(args: SelectSubset<T, ShopifyCategoryFindUniqueArgs<ExtArgs>>): Prisma__ShopifyCategoryClient<$Result.GetResult<Prisma.$ShopifyCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShopifyCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopifyCategoryFindUniqueOrThrowArgs} args - Arguments to find a ShopifyCategory
     * @example
     * // Get one ShopifyCategory
     * const shopifyCategory = await prisma.shopifyCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopifyCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopifyCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopifyCategoryClient<$Result.GetResult<Prisma.$ShopifyCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopifyCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopifyCategoryFindFirstArgs} args - Arguments to find a ShopifyCategory
     * @example
     * // Get one ShopifyCategory
     * const shopifyCategory = await prisma.shopifyCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopifyCategoryFindFirstArgs>(args?: SelectSubset<T, ShopifyCategoryFindFirstArgs<ExtArgs>>): Prisma__ShopifyCategoryClient<$Result.GetResult<Prisma.$ShopifyCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopifyCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopifyCategoryFindFirstOrThrowArgs} args - Arguments to find a ShopifyCategory
     * @example
     * // Get one ShopifyCategory
     * const shopifyCategory = await prisma.shopifyCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopifyCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopifyCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopifyCategoryClient<$Result.GetResult<Prisma.$ShopifyCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShopifyCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopifyCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopifyCategories
     * const shopifyCategories = await prisma.shopifyCategory.findMany()
     * 
     * // Get first 10 ShopifyCategories
     * const shopifyCategories = await prisma.shopifyCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopifyCategoryWithIdOnly = await prisma.shopifyCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopifyCategoryFindManyArgs>(args?: SelectSubset<T, ShopifyCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopifyCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShopifyCategory.
     * @param {ShopifyCategoryCreateArgs} args - Arguments to create a ShopifyCategory.
     * @example
     * // Create one ShopifyCategory
     * const ShopifyCategory = await prisma.shopifyCategory.create({
     *   data: {
     *     // ... data to create a ShopifyCategory
     *   }
     * })
     * 
     */
    create<T extends ShopifyCategoryCreateArgs>(args: SelectSubset<T, ShopifyCategoryCreateArgs<ExtArgs>>): Prisma__ShopifyCategoryClient<$Result.GetResult<Prisma.$ShopifyCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShopifyCategories.
     * @param {ShopifyCategoryCreateManyArgs} args - Arguments to create many ShopifyCategories.
     * @example
     * // Create many ShopifyCategories
     * const shopifyCategory = await prisma.shopifyCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopifyCategoryCreateManyArgs>(args?: SelectSubset<T, ShopifyCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShopifyCategory.
     * @param {ShopifyCategoryDeleteArgs} args - Arguments to delete one ShopifyCategory.
     * @example
     * // Delete one ShopifyCategory
     * const ShopifyCategory = await prisma.shopifyCategory.delete({
     *   where: {
     *     // ... filter to delete one ShopifyCategory
     *   }
     * })
     * 
     */
    delete<T extends ShopifyCategoryDeleteArgs>(args: SelectSubset<T, ShopifyCategoryDeleteArgs<ExtArgs>>): Prisma__ShopifyCategoryClient<$Result.GetResult<Prisma.$ShopifyCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShopifyCategory.
     * @param {ShopifyCategoryUpdateArgs} args - Arguments to update one ShopifyCategory.
     * @example
     * // Update one ShopifyCategory
     * const shopifyCategory = await prisma.shopifyCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopifyCategoryUpdateArgs>(args: SelectSubset<T, ShopifyCategoryUpdateArgs<ExtArgs>>): Prisma__ShopifyCategoryClient<$Result.GetResult<Prisma.$ShopifyCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShopifyCategories.
     * @param {ShopifyCategoryDeleteManyArgs} args - Arguments to filter ShopifyCategories to delete.
     * @example
     * // Delete a few ShopifyCategories
     * const { count } = await prisma.shopifyCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopifyCategoryDeleteManyArgs>(args?: SelectSubset<T, ShopifyCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopifyCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopifyCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopifyCategories
     * const shopifyCategory = await prisma.shopifyCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopifyCategoryUpdateManyArgs>(args: SelectSubset<T, ShopifyCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShopifyCategory.
     * @param {ShopifyCategoryUpsertArgs} args - Arguments to update or create a ShopifyCategory.
     * @example
     * // Update or create a ShopifyCategory
     * const shopifyCategory = await prisma.shopifyCategory.upsert({
     *   create: {
     *     // ... data to create a ShopifyCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopifyCategory we want to update
     *   }
     * })
     */
    upsert<T extends ShopifyCategoryUpsertArgs>(args: SelectSubset<T, ShopifyCategoryUpsertArgs<ExtArgs>>): Prisma__ShopifyCategoryClient<$Result.GetResult<Prisma.$ShopifyCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShopifyCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopifyCategoryCountArgs} args - Arguments to filter ShopifyCategories to count.
     * @example
     * // Count the number of ShopifyCategories
     * const count = await prisma.shopifyCategory.count({
     *   where: {
     *     // ... the filter for the ShopifyCategories we want to count
     *   }
     * })
    **/
    count<T extends ShopifyCategoryCountArgs>(
      args?: Subset<T, ShopifyCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopifyCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShopifyCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopifyCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopifyCategoryAggregateArgs>(args: Subset<T, ShopifyCategoryAggregateArgs>): Prisma.PrismaPromise<GetShopifyCategoryAggregateType<T>>

    /**
     * Group by ShopifyCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopifyCategoryGroupByArgs} args - Group by arguments.
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
      T extends ShopifyCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopifyCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ShopifyCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShopifyCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopifyCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShopifyCategory model
   */
  readonly fields: ShopifyCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShopifyCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopifyCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends ShopifyCategory$productsArgs<ExtArgs> = {}>(args?: Subset<T, ShopifyCategory$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ShopifyCategory model
   */
  interface ShopifyCategoryFieldRefs {
    readonly id: FieldRef<"ShopifyCategory", 'Int'>
    readonly shopifyCategoryId: FieldRef<"ShopifyCategory", 'Int'>
    readonly name: FieldRef<"ShopifyCategory", 'String'>
    readonly parentId: FieldRef<"ShopifyCategory", 'Int'>
    readonly status: FieldRef<"ShopifyCategory", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * ShopifyCategory findUnique
   */
  export type ShopifyCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyCategory
     */
    select?: ShopifyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopifyCategory
     */
    omit?: ShopifyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopifyCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ShopifyCategory to fetch.
     */
    where: ShopifyCategoryWhereUniqueInput
  }

  /**
   * ShopifyCategory findUniqueOrThrow
   */
  export type ShopifyCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyCategory
     */
    select?: ShopifyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopifyCategory
     */
    omit?: ShopifyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopifyCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ShopifyCategory to fetch.
     */
    where: ShopifyCategoryWhereUniqueInput
  }

  /**
   * ShopifyCategory findFirst
   */
  export type ShopifyCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyCategory
     */
    select?: ShopifyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopifyCategory
     */
    omit?: ShopifyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopifyCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ShopifyCategory to fetch.
     */
    where?: ShopifyCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopifyCategories to fetch.
     */
    orderBy?: ShopifyCategoryOrderByWithRelationInput | ShopifyCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopifyCategories.
     */
    cursor?: ShopifyCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopifyCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopifyCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopifyCategories.
     */
    distinct?: ShopifyCategoryScalarFieldEnum | ShopifyCategoryScalarFieldEnum[]
  }

  /**
   * ShopifyCategory findFirstOrThrow
   */
  export type ShopifyCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyCategory
     */
    select?: ShopifyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopifyCategory
     */
    omit?: ShopifyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopifyCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ShopifyCategory to fetch.
     */
    where?: ShopifyCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopifyCategories to fetch.
     */
    orderBy?: ShopifyCategoryOrderByWithRelationInput | ShopifyCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopifyCategories.
     */
    cursor?: ShopifyCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopifyCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopifyCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopifyCategories.
     */
    distinct?: ShopifyCategoryScalarFieldEnum | ShopifyCategoryScalarFieldEnum[]
  }

  /**
   * ShopifyCategory findMany
   */
  export type ShopifyCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyCategory
     */
    select?: ShopifyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopifyCategory
     */
    omit?: ShopifyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopifyCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ShopifyCategories to fetch.
     */
    where?: ShopifyCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopifyCategories to fetch.
     */
    orderBy?: ShopifyCategoryOrderByWithRelationInput | ShopifyCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShopifyCategories.
     */
    cursor?: ShopifyCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopifyCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopifyCategories.
     */
    skip?: number
    distinct?: ShopifyCategoryScalarFieldEnum | ShopifyCategoryScalarFieldEnum[]
  }

  /**
   * ShopifyCategory create
   */
  export type ShopifyCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyCategory
     */
    select?: ShopifyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopifyCategory
     */
    omit?: ShopifyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopifyCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ShopifyCategory.
     */
    data: XOR<ShopifyCategoryCreateInput, ShopifyCategoryUncheckedCreateInput>
  }

  /**
   * ShopifyCategory createMany
   */
  export type ShopifyCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopifyCategories.
     */
    data: ShopifyCategoryCreateManyInput | ShopifyCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShopifyCategory update
   */
  export type ShopifyCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyCategory
     */
    select?: ShopifyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopifyCategory
     */
    omit?: ShopifyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopifyCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ShopifyCategory.
     */
    data: XOR<ShopifyCategoryUpdateInput, ShopifyCategoryUncheckedUpdateInput>
    /**
     * Choose, which ShopifyCategory to update.
     */
    where: ShopifyCategoryWhereUniqueInput
  }

  /**
   * ShopifyCategory updateMany
   */
  export type ShopifyCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopifyCategories.
     */
    data: XOR<ShopifyCategoryUpdateManyMutationInput, ShopifyCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ShopifyCategories to update
     */
    where?: ShopifyCategoryWhereInput
    /**
     * Limit how many ShopifyCategories to update.
     */
    limit?: number
  }

  /**
   * ShopifyCategory upsert
   */
  export type ShopifyCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyCategory
     */
    select?: ShopifyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopifyCategory
     */
    omit?: ShopifyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopifyCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ShopifyCategory to update in case it exists.
     */
    where: ShopifyCategoryWhereUniqueInput
    /**
     * In case the ShopifyCategory found by the `where` argument doesn't exist, create a new ShopifyCategory with this data.
     */
    create: XOR<ShopifyCategoryCreateInput, ShopifyCategoryUncheckedCreateInput>
    /**
     * In case the ShopifyCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopifyCategoryUpdateInput, ShopifyCategoryUncheckedUpdateInput>
  }

  /**
   * ShopifyCategory delete
   */
  export type ShopifyCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyCategory
     */
    select?: ShopifyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopifyCategory
     */
    omit?: ShopifyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopifyCategoryInclude<ExtArgs> | null
    /**
     * Filter which ShopifyCategory to delete.
     */
    where: ShopifyCategoryWhereUniqueInput
  }

  /**
   * ShopifyCategory deleteMany
   */
  export type ShopifyCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopifyCategories to delete
     */
    where?: ShopifyCategoryWhereInput
    /**
     * Limit how many ShopifyCategories to delete.
     */
    limit?: number
  }

  /**
   * ShopifyCategory.products
   */
  export type ShopifyCategory$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * ShopifyCategory without action
   */
  export type ShopifyCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyCategory
     */
    select?: ShopifyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopifyCategory
     */
    omit?: ShopifyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopifyCategoryInclude<ExtArgs> | null
  }


  /**
   * Model EbayCategory
   */

  export type AggregateEbayCategory = {
    _count: EbayCategoryCountAggregateOutputType | null
    _avg: EbayCategoryAvgAggregateOutputType | null
    _sum: EbayCategorySumAggregateOutputType | null
    _min: EbayCategoryMinAggregateOutputType | null
    _max: EbayCategoryMaxAggregateOutputType | null
  }

  export type EbayCategoryAvgAggregateOutputType = {
    id: number | null
    ebayCategoryId: number | null
    parentId: number | null
  }

  export type EbayCategorySumAggregateOutputType = {
    id: number | null
    ebayCategoryId: number | null
    parentId: number | null
  }

  export type EbayCategoryMinAggregateOutputType = {
    id: number | null
    ebayCategoryId: number | null
    name: string | null
    parentId: number | null
    status: $Enums.Status | null
  }

  export type EbayCategoryMaxAggregateOutputType = {
    id: number | null
    ebayCategoryId: number | null
    name: string | null
    parentId: number | null
    status: $Enums.Status | null
  }

  export type EbayCategoryCountAggregateOutputType = {
    id: number
    ebayCategoryId: number
    name: number
    parentId: number
    status: number
    _all: number
  }


  export type EbayCategoryAvgAggregateInputType = {
    id?: true
    ebayCategoryId?: true
    parentId?: true
  }

  export type EbayCategorySumAggregateInputType = {
    id?: true
    ebayCategoryId?: true
    parentId?: true
  }

  export type EbayCategoryMinAggregateInputType = {
    id?: true
    ebayCategoryId?: true
    name?: true
    parentId?: true
    status?: true
  }

  export type EbayCategoryMaxAggregateInputType = {
    id?: true
    ebayCategoryId?: true
    name?: true
    parentId?: true
    status?: true
  }

  export type EbayCategoryCountAggregateInputType = {
    id?: true
    ebayCategoryId?: true
    name?: true
    parentId?: true
    status?: true
    _all?: true
  }

  export type EbayCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EbayCategory to aggregate.
     */
    where?: EbayCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EbayCategories to fetch.
     */
    orderBy?: EbayCategoryOrderByWithRelationInput | EbayCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EbayCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EbayCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EbayCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EbayCategories
    **/
    _count?: true | EbayCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EbayCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EbayCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EbayCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EbayCategoryMaxAggregateInputType
  }

  export type GetEbayCategoryAggregateType<T extends EbayCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateEbayCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEbayCategory[P]>
      : GetScalarType<T[P], AggregateEbayCategory[P]>
  }




  export type EbayCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EbayCategoryWhereInput
    orderBy?: EbayCategoryOrderByWithAggregationInput | EbayCategoryOrderByWithAggregationInput[]
    by: EbayCategoryScalarFieldEnum[] | EbayCategoryScalarFieldEnum
    having?: EbayCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EbayCategoryCountAggregateInputType | true
    _avg?: EbayCategoryAvgAggregateInputType
    _sum?: EbayCategorySumAggregateInputType
    _min?: EbayCategoryMinAggregateInputType
    _max?: EbayCategoryMaxAggregateInputType
  }

  export type EbayCategoryGroupByOutputType = {
    id: number
    ebayCategoryId: number
    name: string
    parentId: number
    status: $Enums.Status
    _count: EbayCategoryCountAggregateOutputType | null
    _avg: EbayCategoryAvgAggregateOutputType | null
    _sum: EbayCategorySumAggregateOutputType | null
    _min: EbayCategoryMinAggregateOutputType | null
    _max: EbayCategoryMaxAggregateOutputType | null
  }

  type GetEbayCategoryGroupByPayload<T extends EbayCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EbayCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EbayCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EbayCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], EbayCategoryGroupByOutputType[P]>
        }
      >
    >


  export type EbayCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ebayCategoryId?: boolean
    name?: boolean
    parentId?: boolean
    status?: boolean
    products?: boolean | EbayCategory$productsArgs<ExtArgs>
    _count?: boolean | EbayCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ebayCategory"]>



  export type EbayCategorySelectScalar = {
    id?: boolean
    ebayCategoryId?: boolean
    name?: boolean
    parentId?: boolean
    status?: boolean
  }

  export type EbayCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ebayCategoryId" | "name" | "parentId" | "status", ExtArgs["result"]["ebayCategory"]>
  export type EbayCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | EbayCategory$productsArgs<ExtArgs>
    _count?: boolean | EbayCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EbayCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EbayCategory"
    objects: {
      products: Prisma.$SyncProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ebayCategoryId: number
      name: string
      parentId: number
      status: $Enums.Status
    }, ExtArgs["result"]["ebayCategory"]>
    composites: {}
  }

  type EbayCategoryGetPayload<S extends boolean | null | undefined | EbayCategoryDefaultArgs> = $Result.GetResult<Prisma.$EbayCategoryPayload, S>

  type EbayCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EbayCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EbayCategoryCountAggregateInputType | true
    }

  export interface EbayCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EbayCategory'], meta: { name: 'EbayCategory' } }
    /**
     * Find zero or one EbayCategory that matches the filter.
     * @param {EbayCategoryFindUniqueArgs} args - Arguments to find a EbayCategory
     * @example
     * // Get one EbayCategory
     * const ebayCategory = await prisma.ebayCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EbayCategoryFindUniqueArgs>(args: SelectSubset<T, EbayCategoryFindUniqueArgs<ExtArgs>>): Prisma__EbayCategoryClient<$Result.GetResult<Prisma.$EbayCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EbayCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EbayCategoryFindUniqueOrThrowArgs} args - Arguments to find a EbayCategory
     * @example
     * // Get one EbayCategory
     * const ebayCategory = await prisma.ebayCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EbayCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, EbayCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EbayCategoryClient<$Result.GetResult<Prisma.$EbayCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EbayCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbayCategoryFindFirstArgs} args - Arguments to find a EbayCategory
     * @example
     * // Get one EbayCategory
     * const ebayCategory = await prisma.ebayCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EbayCategoryFindFirstArgs>(args?: SelectSubset<T, EbayCategoryFindFirstArgs<ExtArgs>>): Prisma__EbayCategoryClient<$Result.GetResult<Prisma.$EbayCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EbayCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbayCategoryFindFirstOrThrowArgs} args - Arguments to find a EbayCategory
     * @example
     * // Get one EbayCategory
     * const ebayCategory = await prisma.ebayCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EbayCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, EbayCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EbayCategoryClient<$Result.GetResult<Prisma.$EbayCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EbayCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbayCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EbayCategories
     * const ebayCategories = await prisma.ebayCategory.findMany()
     * 
     * // Get first 10 EbayCategories
     * const ebayCategories = await prisma.ebayCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ebayCategoryWithIdOnly = await prisma.ebayCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EbayCategoryFindManyArgs>(args?: SelectSubset<T, EbayCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EbayCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EbayCategory.
     * @param {EbayCategoryCreateArgs} args - Arguments to create a EbayCategory.
     * @example
     * // Create one EbayCategory
     * const EbayCategory = await prisma.ebayCategory.create({
     *   data: {
     *     // ... data to create a EbayCategory
     *   }
     * })
     * 
     */
    create<T extends EbayCategoryCreateArgs>(args: SelectSubset<T, EbayCategoryCreateArgs<ExtArgs>>): Prisma__EbayCategoryClient<$Result.GetResult<Prisma.$EbayCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EbayCategories.
     * @param {EbayCategoryCreateManyArgs} args - Arguments to create many EbayCategories.
     * @example
     * // Create many EbayCategories
     * const ebayCategory = await prisma.ebayCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EbayCategoryCreateManyArgs>(args?: SelectSubset<T, EbayCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EbayCategory.
     * @param {EbayCategoryDeleteArgs} args - Arguments to delete one EbayCategory.
     * @example
     * // Delete one EbayCategory
     * const EbayCategory = await prisma.ebayCategory.delete({
     *   where: {
     *     // ... filter to delete one EbayCategory
     *   }
     * })
     * 
     */
    delete<T extends EbayCategoryDeleteArgs>(args: SelectSubset<T, EbayCategoryDeleteArgs<ExtArgs>>): Prisma__EbayCategoryClient<$Result.GetResult<Prisma.$EbayCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EbayCategory.
     * @param {EbayCategoryUpdateArgs} args - Arguments to update one EbayCategory.
     * @example
     * // Update one EbayCategory
     * const ebayCategory = await prisma.ebayCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EbayCategoryUpdateArgs>(args: SelectSubset<T, EbayCategoryUpdateArgs<ExtArgs>>): Prisma__EbayCategoryClient<$Result.GetResult<Prisma.$EbayCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EbayCategories.
     * @param {EbayCategoryDeleteManyArgs} args - Arguments to filter EbayCategories to delete.
     * @example
     * // Delete a few EbayCategories
     * const { count } = await prisma.ebayCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EbayCategoryDeleteManyArgs>(args?: SelectSubset<T, EbayCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EbayCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbayCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EbayCategories
     * const ebayCategory = await prisma.ebayCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EbayCategoryUpdateManyArgs>(args: SelectSubset<T, EbayCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EbayCategory.
     * @param {EbayCategoryUpsertArgs} args - Arguments to update or create a EbayCategory.
     * @example
     * // Update or create a EbayCategory
     * const ebayCategory = await prisma.ebayCategory.upsert({
     *   create: {
     *     // ... data to create a EbayCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EbayCategory we want to update
     *   }
     * })
     */
    upsert<T extends EbayCategoryUpsertArgs>(args: SelectSubset<T, EbayCategoryUpsertArgs<ExtArgs>>): Prisma__EbayCategoryClient<$Result.GetResult<Prisma.$EbayCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EbayCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbayCategoryCountArgs} args - Arguments to filter EbayCategories to count.
     * @example
     * // Count the number of EbayCategories
     * const count = await prisma.ebayCategory.count({
     *   where: {
     *     // ... the filter for the EbayCategories we want to count
     *   }
     * })
    **/
    count<T extends EbayCategoryCountArgs>(
      args?: Subset<T, EbayCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EbayCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EbayCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbayCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EbayCategoryAggregateArgs>(args: Subset<T, EbayCategoryAggregateArgs>): Prisma.PrismaPromise<GetEbayCategoryAggregateType<T>>

    /**
     * Group by EbayCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbayCategoryGroupByArgs} args - Group by arguments.
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
      T extends EbayCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EbayCategoryGroupByArgs['orderBy'] }
        : { orderBy?: EbayCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EbayCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEbayCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EbayCategory model
   */
  readonly fields: EbayCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EbayCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EbayCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends EbayCategory$productsArgs<ExtArgs> = {}>(args?: Subset<T, EbayCategory$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EbayCategory model
   */
  interface EbayCategoryFieldRefs {
    readonly id: FieldRef<"EbayCategory", 'Int'>
    readonly ebayCategoryId: FieldRef<"EbayCategory", 'Int'>
    readonly name: FieldRef<"EbayCategory", 'String'>
    readonly parentId: FieldRef<"EbayCategory", 'Int'>
    readonly status: FieldRef<"EbayCategory", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * EbayCategory findUnique
   */
  export type EbayCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbayCategory
     */
    select?: EbayCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbayCategory
     */
    omit?: EbayCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbayCategoryInclude<ExtArgs> | null
    /**
     * Filter, which EbayCategory to fetch.
     */
    where: EbayCategoryWhereUniqueInput
  }

  /**
   * EbayCategory findUniqueOrThrow
   */
  export type EbayCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbayCategory
     */
    select?: EbayCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbayCategory
     */
    omit?: EbayCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbayCategoryInclude<ExtArgs> | null
    /**
     * Filter, which EbayCategory to fetch.
     */
    where: EbayCategoryWhereUniqueInput
  }

  /**
   * EbayCategory findFirst
   */
  export type EbayCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbayCategory
     */
    select?: EbayCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbayCategory
     */
    omit?: EbayCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbayCategoryInclude<ExtArgs> | null
    /**
     * Filter, which EbayCategory to fetch.
     */
    where?: EbayCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EbayCategories to fetch.
     */
    orderBy?: EbayCategoryOrderByWithRelationInput | EbayCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EbayCategories.
     */
    cursor?: EbayCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EbayCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EbayCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EbayCategories.
     */
    distinct?: EbayCategoryScalarFieldEnum | EbayCategoryScalarFieldEnum[]
  }

  /**
   * EbayCategory findFirstOrThrow
   */
  export type EbayCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbayCategory
     */
    select?: EbayCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbayCategory
     */
    omit?: EbayCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbayCategoryInclude<ExtArgs> | null
    /**
     * Filter, which EbayCategory to fetch.
     */
    where?: EbayCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EbayCategories to fetch.
     */
    orderBy?: EbayCategoryOrderByWithRelationInput | EbayCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EbayCategories.
     */
    cursor?: EbayCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EbayCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EbayCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EbayCategories.
     */
    distinct?: EbayCategoryScalarFieldEnum | EbayCategoryScalarFieldEnum[]
  }

  /**
   * EbayCategory findMany
   */
  export type EbayCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbayCategory
     */
    select?: EbayCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbayCategory
     */
    omit?: EbayCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbayCategoryInclude<ExtArgs> | null
    /**
     * Filter, which EbayCategories to fetch.
     */
    where?: EbayCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EbayCategories to fetch.
     */
    orderBy?: EbayCategoryOrderByWithRelationInput | EbayCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EbayCategories.
     */
    cursor?: EbayCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EbayCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EbayCategories.
     */
    skip?: number
    distinct?: EbayCategoryScalarFieldEnum | EbayCategoryScalarFieldEnum[]
  }

  /**
   * EbayCategory create
   */
  export type EbayCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbayCategory
     */
    select?: EbayCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbayCategory
     */
    omit?: EbayCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbayCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a EbayCategory.
     */
    data: XOR<EbayCategoryCreateInput, EbayCategoryUncheckedCreateInput>
  }

  /**
   * EbayCategory createMany
   */
  export type EbayCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EbayCategories.
     */
    data: EbayCategoryCreateManyInput | EbayCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EbayCategory update
   */
  export type EbayCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbayCategory
     */
    select?: EbayCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbayCategory
     */
    omit?: EbayCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbayCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a EbayCategory.
     */
    data: XOR<EbayCategoryUpdateInput, EbayCategoryUncheckedUpdateInput>
    /**
     * Choose, which EbayCategory to update.
     */
    where: EbayCategoryWhereUniqueInput
  }

  /**
   * EbayCategory updateMany
   */
  export type EbayCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EbayCategories.
     */
    data: XOR<EbayCategoryUpdateManyMutationInput, EbayCategoryUncheckedUpdateManyInput>
    /**
     * Filter which EbayCategories to update
     */
    where?: EbayCategoryWhereInput
    /**
     * Limit how many EbayCategories to update.
     */
    limit?: number
  }

  /**
   * EbayCategory upsert
   */
  export type EbayCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbayCategory
     */
    select?: EbayCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbayCategory
     */
    omit?: EbayCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbayCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the EbayCategory to update in case it exists.
     */
    where: EbayCategoryWhereUniqueInput
    /**
     * In case the EbayCategory found by the `where` argument doesn't exist, create a new EbayCategory with this data.
     */
    create: XOR<EbayCategoryCreateInput, EbayCategoryUncheckedCreateInput>
    /**
     * In case the EbayCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EbayCategoryUpdateInput, EbayCategoryUncheckedUpdateInput>
  }

  /**
   * EbayCategory delete
   */
  export type EbayCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbayCategory
     */
    select?: EbayCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbayCategory
     */
    omit?: EbayCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbayCategoryInclude<ExtArgs> | null
    /**
     * Filter which EbayCategory to delete.
     */
    where: EbayCategoryWhereUniqueInput
  }

  /**
   * EbayCategory deleteMany
   */
  export type EbayCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EbayCategories to delete
     */
    where?: EbayCategoryWhereInput
    /**
     * Limit how many EbayCategories to delete.
     */
    limit?: number
  }

  /**
   * EbayCategory.products
   */
  export type EbayCategory$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncProduct
     */
    select?: SyncProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncProduct
     */
    omit?: SyncProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncProductInclude<ExtArgs> | null
    where?: SyncProductWhereInput
    orderBy?: SyncProductOrderByWithRelationInput | SyncProductOrderByWithRelationInput[]
    cursor?: SyncProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SyncProductScalarFieldEnum | SyncProductScalarFieldEnum[]
  }

  /**
   * EbayCategory without action
   */
  export type EbayCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EbayCategory
     */
    select?: EbayCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EbayCategory
     */
    omit?: EbayCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbayCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    shopifyProductId: number | null
    shopifyPrice: Decimal | null
    shopifyComparePrice: Decimal | null
    stock: number | null
    categoryId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    shopifyProductId: number | null
    shopifyPrice: Decimal | null
    shopifyComparePrice: Decimal | null
    stock: number | null
    categoryId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    shopifyProductId: number | null
    title: string | null
    description: string | null
    sku: string | null
    shopifyPrice: Decimal | null
    shopifyComparePrice: Decimal | null
    stock: number | null
    status: $Enums.ProductStatus | null
    categoryId: number | null
    brand: string | null
    mpn: string | null
    isbn: string | null
    ean: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    shopifyProductId: number | null
    title: string | null
    description: string | null
    sku: string | null
    shopifyPrice: Decimal | null
    shopifyComparePrice: Decimal | null
    stock: number | null
    status: $Enums.ProductStatus | null
    categoryId: number | null
    brand: string | null
    mpn: string | null
    isbn: string | null
    ean: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    shopifyProductId: number
    title: number
    description: number
    sku: number
    shopifyPrice: number
    shopifyComparePrice: number
    stock: number
    status: number
    categoryId: number
    productOptions: number
    brand: number
    mpn: number
    isbn: number
    ean: number
    package: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    shopifyProductId?: true
    shopifyPrice?: true
    shopifyComparePrice?: true
    stock?: true
    categoryId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    shopifyProductId?: true
    shopifyPrice?: true
    shopifyComparePrice?: true
    stock?: true
    categoryId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    shopifyProductId?: true
    title?: true
    description?: true
    sku?: true
    shopifyPrice?: true
    shopifyComparePrice?: true
    stock?: true
    status?: true
    categoryId?: true
    brand?: true
    mpn?: true
    isbn?: true
    ean?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    shopifyProductId?: true
    title?: true
    description?: true
    sku?: true
    shopifyPrice?: true
    shopifyComparePrice?: true
    stock?: true
    status?: true
    categoryId?: true
    brand?: true
    mpn?: true
    isbn?: true
    ean?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    shopifyProductId?: true
    title?: true
    description?: true
    sku?: true
    shopifyPrice?: true
    shopifyComparePrice?: true
    stock?: true
    status?: true
    categoryId?: true
    productOptions?: true
    brand?: true
    mpn?: true
    isbn?: true
    ean?: true
    package?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    shopifyProductId: number
    title: string
    description: string
    sku: string
    shopifyPrice: Decimal
    shopifyComparePrice: Decimal
    stock: number
    status: $Enums.ProductStatus
    categoryId: number
    productOptions: JsonValue | null
    brand: string | null
    mpn: string | null
    isbn: string | null
    ean: string | null
    package: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopifyProductId?: boolean
    title?: boolean
    description?: boolean
    sku?: boolean
    shopifyPrice?: boolean
    shopifyComparePrice?: boolean
    stock?: boolean
    status?: boolean
    categoryId?: boolean
    productOptions?: boolean
    brand?: boolean
    mpn?: boolean
    isbn?: boolean
    ean?: boolean
    package?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | ShopifyCategoryDefaultArgs<ExtArgs>
    orderItems?: boolean | Product$orderItemsArgs<ExtArgs>
    productImages?: boolean | Product$productImagesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type ProductSelectScalar = {
    id?: boolean
    shopifyProductId?: boolean
    title?: boolean
    description?: boolean
    sku?: boolean
    shopifyPrice?: boolean
    shopifyComparePrice?: boolean
    stock?: boolean
    status?: boolean
    categoryId?: boolean
    productOptions?: boolean
    brand?: boolean
    mpn?: boolean
    isbn?: boolean
    ean?: boolean
    package?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopifyProductId" | "title" | "description" | "sku" | "shopifyPrice" | "shopifyComparePrice" | "stock" | "status" | "categoryId" | "productOptions" | "brand" | "mpn" | "isbn" | "ean" | "package" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | ShopifyCategoryDefaultArgs<ExtArgs>
    orderItems?: boolean | Product$orderItemsArgs<ExtArgs>
    productImages?: boolean | Product$productImagesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$ShopifyCategoryPayload<ExtArgs>
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
      productImages: Prisma.$ProductImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      shopifyProductId: number
      title: string
      description: string
      sku: string
      shopifyPrice: Prisma.Decimal
      shopifyComparePrice: Prisma.Decimal
      stock: number
      status: $Enums.ProductStatus
      categoryId: number
      productOptions: Prisma.JsonValue | null
      brand: string | null
      mpn: string | null
      isbn: string | null
      ean: string | null
      package: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends ShopifyCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopifyCategoryDefaultArgs<ExtArgs>>): Prisma__ShopifyCategoryClient<$Result.GetResult<Prisma.$ShopifyCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderItems<T extends Product$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    productImages<T extends Product$productImagesArgs<ExtArgs> = {}>(args?: Subset<T, Product$productImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly shopifyProductId: FieldRef<"Product", 'Int'>
    readonly title: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly sku: FieldRef<"Product", 'String'>
    readonly shopifyPrice: FieldRef<"Product", 'Decimal'>
    readonly shopifyComparePrice: FieldRef<"Product", 'Decimal'>
    readonly stock: FieldRef<"Product", 'Int'>
    readonly status: FieldRef<"Product", 'ProductStatus'>
    readonly categoryId: FieldRef<"Product", 'Int'>
    readonly productOptions: FieldRef<"Product", 'Json'>
    readonly brand: FieldRef<"Product", 'String'>
    readonly mpn: FieldRef<"Product", 'String'>
    readonly isbn: FieldRef<"Product", 'String'>
    readonly ean: FieldRef<"Product", 'String'>
    readonly package: FieldRef<"Product", 'Json'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.orderItems
   */
  export type Product$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Product.productImages
   */
  export type Product$productImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    cursor?: ProductImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductImage
   */

  export type AggregateProductImage = {
    _count: ProductImageCountAggregateOutputType | null
    _avg: ProductImageAvgAggregateOutputType | null
    _sum: ProductImageSumAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  export type ProductImageAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    position: number | null
  }

  export type ProductImageSumAggregateOutputType = {
    id: number | null
    productId: number | null
    position: number | null
  }

  export type ProductImageMinAggregateOutputType = {
    id: number | null
    productId: number | null
    imageUrl: string | null
    position: number | null
    isDefault: boolean | null
  }

  export type ProductImageMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    imageUrl: string | null
    position: number | null
    isDefault: boolean | null
  }

  export type ProductImageCountAggregateOutputType = {
    id: number
    productId: number
    imageUrl: number
    position: number
    isDefault: number
    _all: number
  }


  export type ProductImageAvgAggregateInputType = {
    id?: true
    productId?: true
    position?: true
  }

  export type ProductImageSumAggregateInputType = {
    id?: true
    productId?: true
    position?: true
  }

  export type ProductImageMinAggregateInputType = {
    id?: true
    productId?: true
    imageUrl?: true
    position?: true
    isDefault?: true
  }

  export type ProductImageMaxAggregateInputType = {
    id?: true
    productId?: true
    imageUrl?: true
    position?: true
    isDefault?: true
  }

  export type ProductImageCountAggregateInputType = {
    id?: true
    productId?: true
    imageUrl?: true
    position?: true
    isDefault?: true
    _all?: true
  }

  export type ProductImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImage to aggregate.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductImages
    **/
    _count?: true | ProductImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductImageMaxAggregateInputType
  }

  export type GetProductImageAggregateType<T extends ProductImageAggregateArgs> = {
        [P in keyof T & keyof AggregateProductImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductImage[P]>
      : GetScalarType<T[P], AggregateProductImage[P]>
  }




  export type ProductImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithAggregationInput | ProductImageOrderByWithAggregationInput[]
    by: ProductImageScalarFieldEnum[] | ProductImageScalarFieldEnum
    having?: ProductImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductImageCountAggregateInputType | true
    _avg?: ProductImageAvgAggregateInputType
    _sum?: ProductImageSumAggregateInputType
    _min?: ProductImageMinAggregateInputType
    _max?: ProductImageMaxAggregateInputType
  }

  export type ProductImageGroupByOutputType = {
    id: number
    productId: number
    imageUrl: string
    position: number
    isDefault: boolean
    _count: ProductImageCountAggregateOutputType | null
    _avg: ProductImageAvgAggregateOutputType | null
    _sum: ProductImageSumAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  type GetProductImageGroupByPayload<T extends ProductImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
            : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
        }
      >
    >


  export type ProductImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    imageUrl?: boolean
    position?: boolean
    isDefault?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>



  export type ProductImageSelectScalar = {
    id?: boolean
    productId?: boolean
    imageUrl?: boolean
    position?: boolean
    isDefault?: boolean
  }

  export type ProductImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "imageUrl" | "position" | "isDefault", ExtArgs["result"]["productImage"]>
  export type ProductImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductImage"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      imageUrl: string
      position: number
      isDefault: boolean
    }, ExtArgs["result"]["productImage"]>
    composites: {}
  }

  type ProductImageGetPayload<S extends boolean | null | undefined | ProductImageDefaultArgs> = $Result.GetResult<Prisma.$ProductImagePayload, S>

  type ProductImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductImageCountAggregateInputType | true
    }

  export interface ProductImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductImage'], meta: { name: 'ProductImage' } }
    /**
     * Find zero or one ProductImage that matches the filter.
     * @param {ProductImageFindUniqueArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductImageFindUniqueArgs>(args: SelectSubset<T, ProductImageFindUniqueArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductImageFindUniqueOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductImageFindFirstArgs>(args?: SelectSubset<T, ProductImageFindFirstArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductImages
     * const productImages = await prisma.productImage.findMany()
     * 
     * // Get first 10 ProductImages
     * const productImages = await prisma.productImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productImageWithIdOnly = await prisma.productImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductImageFindManyArgs>(args?: SelectSubset<T, ProductImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductImage.
     * @param {ProductImageCreateArgs} args - Arguments to create a ProductImage.
     * @example
     * // Create one ProductImage
     * const ProductImage = await prisma.productImage.create({
     *   data: {
     *     // ... data to create a ProductImage
     *   }
     * })
     * 
     */
    create<T extends ProductImageCreateArgs>(args: SelectSubset<T, ProductImageCreateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductImages.
     * @param {ProductImageCreateManyArgs} args - Arguments to create many ProductImages.
     * @example
     * // Create many ProductImages
     * const productImage = await prisma.productImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductImageCreateManyArgs>(args?: SelectSubset<T, ProductImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductImage.
     * @param {ProductImageDeleteArgs} args - Arguments to delete one ProductImage.
     * @example
     * // Delete one ProductImage
     * const ProductImage = await prisma.productImage.delete({
     *   where: {
     *     // ... filter to delete one ProductImage
     *   }
     * })
     * 
     */
    delete<T extends ProductImageDeleteArgs>(args: SelectSubset<T, ProductImageDeleteArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductImage.
     * @param {ProductImageUpdateArgs} args - Arguments to update one ProductImage.
     * @example
     * // Update one ProductImage
     * const productImage = await prisma.productImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductImageUpdateArgs>(args: SelectSubset<T, ProductImageUpdateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductImages.
     * @param {ProductImageDeleteManyArgs} args - Arguments to filter ProductImages to delete.
     * @example
     * // Delete a few ProductImages
     * const { count } = await prisma.productImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductImageDeleteManyArgs>(args?: SelectSubset<T, ProductImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductImages
     * const productImage = await prisma.productImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductImageUpdateManyArgs>(args: SelectSubset<T, ProductImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductImage.
     * @param {ProductImageUpsertArgs} args - Arguments to update or create a ProductImage.
     * @example
     * // Update or create a ProductImage
     * const productImage = await prisma.productImage.upsert({
     *   create: {
     *     // ... data to create a ProductImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductImage we want to update
     *   }
     * })
     */
    upsert<T extends ProductImageUpsertArgs>(args: SelectSubset<T, ProductImageUpsertArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageCountArgs} args - Arguments to filter ProductImages to count.
     * @example
     * // Count the number of ProductImages
     * const count = await prisma.productImage.count({
     *   where: {
     *     // ... the filter for the ProductImages we want to count
     *   }
     * })
    **/
    count<T extends ProductImageCountArgs>(
      args?: Subset<T, ProductImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductImageAggregateArgs>(args: Subset<T, ProductImageAggregateArgs>): Prisma.PrismaPromise<GetProductImageAggregateType<T>>

    /**
     * Group by ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageGroupByArgs} args - Group by arguments.
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
      T extends ProductImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductImageGroupByArgs['orderBy'] }
        : { orderBy?: ProductImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductImage model
   */
  readonly fields: ProductImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductImage model
   */
  interface ProductImageFieldRefs {
    readonly id: FieldRef<"ProductImage", 'Int'>
    readonly productId: FieldRef<"ProductImage", 'Int'>
    readonly imageUrl: FieldRef<"ProductImage", 'String'>
    readonly position: FieldRef<"ProductImage", 'Int'>
    readonly isDefault: FieldRef<"ProductImage", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ProductImage findUnique
   */
  export type ProductImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findUniqueOrThrow
   */
  export type ProductImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findFirst
   */
  export type ProductImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findFirstOrThrow
   */
  export type ProductImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findMany
   */
  export type ProductImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage create
   */
  export type ProductImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductImage.
     */
    data: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
  }

  /**
   * ProductImage createMany
   */
  export type ProductImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImageCreateManyInput | ProductImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductImage update
   */
  export type ProductImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductImage.
     */
    data: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
    /**
     * Choose, which ProductImage to update.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage updateMany
   */
  export type ProductImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductImages.
     */
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to update.
     */
    limit?: number
  }

  /**
   * ProductImage upsert
   */
  export type ProductImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductImage to update in case it exists.
     */
    where: ProductImageWhereUniqueInput
    /**
     * In case the ProductImage found by the `where` argument doesn't exist, create a new ProductImage with this data.
     */
    create: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
    /**
     * In case the ProductImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
  }

  /**
   * ProductImage delete
   */
  export type ProductImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter which ProductImage to delete.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage deleteMany
   */
  export type ProductImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImages to delete
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to delete.
     */
    limit?: number
  }

  /**
   * ProductImage without action
   */
  export type ProductImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
  }


  /**
   * Model SyncProduct
   */

  export type AggregateSyncProduct = {
    _count: SyncProductCountAggregateOutputType | null
    _avg: SyncProductAvgAggregateOutputType | null
    _sum: SyncProductSumAggregateOutputType | null
    _min: SyncProductMinAggregateOutputType | null
    _max: SyncProductMaxAggregateOutputType | null
  }

  export type SyncProductAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    ebayPrice: Decimal | null
    ebayComparePrice: Decimal | null
    stock: number | null
    categoryId: number | null
  }

  export type SyncProductSumAggregateOutputType = {
    id: number | null
    productId: number | null
    ebayPrice: Decimal | null
    ebayComparePrice: Decimal | null
    stock: number | null
    categoryId: number | null
  }

  export type SyncProductMinAggregateOutputType = {
    id: number | null
    productId: number | null
    sku: string | null
    ebayPrice: Decimal | null
    ebayComparePrice: Decimal | null
    stock: number | null
    status: $Enums.ProductStatus | null
    categoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SyncProductMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    sku: string | null
    ebayPrice: Decimal | null
    ebayComparePrice: Decimal | null
    stock: number | null
    status: $Enums.ProductStatus | null
    categoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SyncProductCountAggregateOutputType = {
    id: number
    productId: number
    sku: number
    ebayPrice: number
    ebayComparePrice: number
    stock: number
    status: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SyncProductAvgAggregateInputType = {
    id?: true
    productId?: true
    ebayPrice?: true
    ebayComparePrice?: true
    stock?: true
    categoryId?: true
  }

  export type SyncProductSumAggregateInputType = {
    id?: true
    productId?: true
    ebayPrice?: true
    ebayComparePrice?: true
    stock?: true
    categoryId?: true
  }

  export type SyncProductMinAggregateInputType = {
    id?: true
    productId?: true
    sku?: true
    ebayPrice?: true
    ebayComparePrice?: true
    stock?: true
    status?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SyncProductMaxAggregateInputType = {
    id?: true
    productId?: true
    sku?: true
    ebayPrice?: true
    ebayComparePrice?: true
    stock?: true
    status?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SyncProductCountAggregateInputType = {
    id?: true
    productId?: true
    sku?: true
    ebayPrice?: true
    ebayComparePrice?: true
    stock?: true
    status?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SyncProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncProduct to aggregate.
     */
    where?: SyncProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncProducts to fetch.
     */
    orderBy?: SyncProductOrderByWithRelationInput | SyncProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SyncProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SyncProducts
    **/
    _count?: true | SyncProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SyncProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SyncProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SyncProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SyncProductMaxAggregateInputType
  }

  export type GetSyncProductAggregateType<T extends SyncProductAggregateArgs> = {
        [P in keyof T & keyof AggregateSyncProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSyncProduct[P]>
      : GetScalarType<T[P], AggregateSyncProduct[P]>
  }




  export type SyncProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyncProductWhereInput
    orderBy?: SyncProductOrderByWithAggregationInput | SyncProductOrderByWithAggregationInput[]
    by: SyncProductScalarFieldEnum[] | SyncProductScalarFieldEnum
    having?: SyncProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SyncProductCountAggregateInputType | true
    _avg?: SyncProductAvgAggregateInputType
    _sum?: SyncProductSumAggregateInputType
    _min?: SyncProductMinAggregateInputType
    _max?: SyncProductMaxAggregateInputType
  }

  export type SyncProductGroupByOutputType = {
    id: number
    productId: number
    sku: string
    ebayPrice: Decimal
    ebayComparePrice: Decimal
    stock: number
    status: $Enums.ProductStatus
    categoryId: number
    createdAt: Date
    updatedAt: Date
    _count: SyncProductCountAggregateOutputType | null
    _avg: SyncProductAvgAggregateOutputType | null
    _sum: SyncProductSumAggregateOutputType | null
    _min: SyncProductMinAggregateOutputType | null
    _max: SyncProductMaxAggregateOutputType | null
  }

  type GetSyncProductGroupByPayload<T extends SyncProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SyncProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SyncProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SyncProductGroupByOutputType[P]>
            : GetScalarType<T[P], SyncProductGroupByOutputType[P]>
        }
      >
    >


  export type SyncProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    sku?: boolean
    ebayPrice?: boolean
    ebayComparePrice?: boolean
    stock?: boolean
    status?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | EbayCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["syncProduct"]>



  export type SyncProductSelectScalar = {
    id?: boolean
    productId?: boolean
    sku?: boolean
    ebayPrice?: boolean
    ebayComparePrice?: boolean
    stock?: boolean
    status?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SyncProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "sku" | "ebayPrice" | "ebayComparePrice" | "stock" | "status" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["syncProduct"]>
  export type SyncProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | EbayCategoryDefaultArgs<ExtArgs>
  }

  export type $SyncProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SyncProduct"
    objects: {
      category: Prisma.$EbayCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      sku: string
      ebayPrice: Prisma.Decimal
      ebayComparePrice: Prisma.Decimal
      stock: number
      status: $Enums.ProductStatus
      categoryId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["syncProduct"]>
    composites: {}
  }

  type SyncProductGetPayload<S extends boolean | null | undefined | SyncProductDefaultArgs> = $Result.GetResult<Prisma.$SyncProductPayload, S>

  type SyncProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SyncProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SyncProductCountAggregateInputType | true
    }

  export interface SyncProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SyncProduct'], meta: { name: 'SyncProduct' } }
    /**
     * Find zero or one SyncProduct that matches the filter.
     * @param {SyncProductFindUniqueArgs} args - Arguments to find a SyncProduct
     * @example
     * // Get one SyncProduct
     * const syncProduct = await prisma.syncProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SyncProductFindUniqueArgs>(args: SelectSubset<T, SyncProductFindUniqueArgs<ExtArgs>>): Prisma__SyncProductClient<$Result.GetResult<Prisma.$SyncProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SyncProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SyncProductFindUniqueOrThrowArgs} args - Arguments to find a SyncProduct
     * @example
     * // Get one SyncProduct
     * const syncProduct = await prisma.syncProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SyncProductFindUniqueOrThrowArgs>(args: SelectSubset<T, SyncProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SyncProductClient<$Result.GetResult<Prisma.$SyncProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SyncProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncProductFindFirstArgs} args - Arguments to find a SyncProduct
     * @example
     * // Get one SyncProduct
     * const syncProduct = await prisma.syncProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SyncProductFindFirstArgs>(args?: SelectSubset<T, SyncProductFindFirstArgs<ExtArgs>>): Prisma__SyncProductClient<$Result.GetResult<Prisma.$SyncProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SyncProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncProductFindFirstOrThrowArgs} args - Arguments to find a SyncProduct
     * @example
     * // Get one SyncProduct
     * const syncProduct = await prisma.syncProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SyncProductFindFirstOrThrowArgs>(args?: SelectSubset<T, SyncProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__SyncProductClient<$Result.GetResult<Prisma.$SyncProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SyncProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SyncProducts
     * const syncProducts = await prisma.syncProduct.findMany()
     * 
     * // Get first 10 SyncProducts
     * const syncProducts = await prisma.syncProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const syncProductWithIdOnly = await prisma.syncProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SyncProductFindManyArgs>(args?: SelectSubset<T, SyncProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SyncProduct.
     * @param {SyncProductCreateArgs} args - Arguments to create a SyncProduct.
     * @example
     * // Create one SyncProduct
     * const SyncProduct = await prisma.syncProduct.create({
     *   data: {
     *     // ... data to create a SyncProduct
     *   }
     * })
     * 
     */
    create<T extends SyncProductCreateArgs>(args: SelectSubset<T, SyncProductCreateArgs<ExtArgs>>): Prisma__SyncProductClient<$Result.GetResult<Prisma.$SyncProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SyncProducts.
     * @param {SyncProductCreateManyArgs} args - Arguments to create many SyncProducts.
     * @example
     * // Create many SyncProducts
     * const syncProduct = await prisma.syncProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SyncProductCreateManyArgs>(args?: SelectSubset<T, SyncProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SyncProduct.
     * @param {SyncProductDeleteArgs} args - Arguments to delete one SyncProduct.
     * @example
     * // Delete one SyncProduct
     * const SyncProduct = await prisma.syncProduct.delete({
     *   where: {
     *     // ... filter to delete one SyncProduct
     *   }
     * })
     * 
     */
    delete<T extends SyncProductDeleteArgs>(args: SelectSubset<T, SyncProductDeleteArgs<ExtArgs>>): Prisma__SyncProductClient<$Result.GetResult<Prisma.$SyncProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SyncProduct.
     * @param {SyncProductUpdateArgs} args - Arguments to update one SyncProduct.
     * @example
     * // Update one SyncProduct
     * const syncProduct = await prisma.syncProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SyncProductUpdateArgs>(args: SelectSubset<T, SyncProductUpdateArgs<ExtArgs>>): Prisma__SyncProductClient<$Result.GetResult<Prisma.$SyncProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SyncProducts.
     * @param {SyncProductDeleteManyArgs} args - Arguments to filter SyncProducts to delete.
     * @example
     * // Delete a few SyncProducts
     * const { count } = await prisma.syncProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SyncProductDeleteManyArgs>(args?: SelectSubset<T, SyncProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SyncProducts
     * const syncProduct = await prisma.syncProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SyncProductUpdateManyArgs>(args: SelectSubset<T, SyncProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SyncProduct.
     * @param {SyncProductUpsertArgs} args - Arguments to update or create a SyncProduct.
     * @example
     * // Update or create a SyncProduct
     * const syncProduct = await prisma.syncProduct.upsert({
     *   create: {
     *     // ... data to create a SyncProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SyncProduct we want to update
     *   }
     * })
     */
    upsert<T extends SyncProductUpsertArgs>(args: SelectSubset<T, SyncProductUpsertArgs<ExtArgs>>): Prisma__SyncProductClient<$Result.GetResult<Prisma.$SyncProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SyncProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncProductCountArgs} args - Arguments to filter SyncProducts to count.
     * @example
     * // Count the number of SyncProducts
     * const count = await prisma.syncProduct.count({
     *   where: {
     *     // ... the filter for the SyncProducts we want to count
     *   }
     * })
    **/
    count<T extends SyncProductCountArgs>(
      args?: Subset<T, SyncProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SyncProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SyncProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SyncProductAggregateArgs>(args: Subset<T, SyncProductAggregateArgs>): Prisma.PrismaPromise<GetSyncProductAggregateType<T>>

    /**
     * Group by SyncProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncProductGroupByArgs} args - Group by arguments.
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
      T extends SyncProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SyncProductGroupByArgs['orderBy'] }
        : { orderBy?: SyncProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SyncProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSyncProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SyncProduct model
   */
  readonly fields: SyncProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SyncProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SyncProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends EbayCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EbayCategoryDefaultArgs<ExtArgs>>): Prisma__EbayCategoryClient<$Result.GetResult<Prisma.$EbayCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SyncProduct model
   */
  interface SyncProductFieldRefs {
    readonly id: FieldRef<"SyncProduct", 'Int'>
    readonly productId: FieldRef<"SyncProduct", 'Int'>
    readonly sku: FieldRef<"SyncProduct", 'String'>
    readonly ebayPrice: FieldRef<"SyncProduct", 'Decimal'>
    readonly ebayComparePrice: FieldRef<"SyncProduct", 'Decimal'>
    readonly stock: FieldRef<"SyncProduct", 'Int'>
    readonly status: FieldRef<"SyncProduct", 'ProductStatus'>
    readonly categoryId: FieldRef<"SyncProduct", 'Int'>
    readonly createdAt: FieldRef<"SyncProduct", 'DateTime'>
    readonly updatedAt: FieldRef<"SyncProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SyncProduct findUnique
   */
  export type SyncProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncProduct
     */
    select?: SyncProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncProduct
     */
    omit?: SyncProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncProductInclude<ExtArgs> | null
    /**
     * Filter, which SyncProduct to fetch.
     */
    where: SyncProductWhereUniqueInput
  }

  /**
   * SyncProduct findUniqueOrThrow
   */
  export type SyncProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncProduct
     */
    select?: SyncProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncProduct
     */
    omit?: SyncProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncProductInclude<ExtArgs> | null
    /**
     * Filter, which SyncProduct to fetch.
     */
    where: SyncProductWhereUniqueInput
  }

  /**
   * SyncProduct findFirst
   */
  export type SyncProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncProduct
     */
    select?: SyncProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncProduct
     */
    omit?: SyncProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncProductInclude<ExtArgs> | null
    /**
     * Filter, which SyncProduct to fetch.
     */
    where?: SyncProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncProducts to fetch.
     */
    orderBy?: SyncProductOrderByWithRelationInput | SyncProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncProducts.
     */
    cursor?: SyncProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncProducts.
     */
    distinct?: SyncProductScalarFieldEnum | SyncProductScalarFieldEnum[]
  }

  /**
   * SyncProduct findFirstOrThrow
   */
  export type SyncProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncProduct
     */
    select?: SyncProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncProduct
     */
    omit?: SyncProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncProductInclude<ExtArgs> | null
    /**
     * Filter, which SyncProduct to fetch.
     */
    where?: SyncProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncProducts to fetch.
     */
    orderBy?: SyncProductOrderByWithRelationInput | SyncProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncProducts.
     */
    cursor?: SyncProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncProducts.
     */
    distinct?: SyncProductScalarFieldEnum | SyncProductScalarFieldEnum[]
  }

  /**
   * SyncProduct findMany
   */
  export type SyncProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncProduct
     */
    select?: SyncProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncProduct
     */
    omit?: SyncProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncProductInclude<ExtArgs> | null
    /**
     * Filter, which SyncProducts to fetch.
     */
    where?: SyncProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncProducts to fetch.
     */
    orderBy?: SyncProductOrderByWithRelationInput | SyncProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SyncProducts.
     */
    cursor?: SyncProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncProducts.
     */
    skip?: number
    distinct?: SyncProductScalarFieldEnum | SyncProductScalarFieldEnum[]
  }

  /**
   * SyncProduct create
   */
  export type SyncProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncProduct
     */
    select?: SyncProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncProduct
     */
    omit?: SyncProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncProductInclude<ExtArgs> | null
    /**
     * The data needed to create a SyncProduct.
     */
    data: XOR<SyncProductCreateInput, SyncProductUncheckedCreateInput>
  }

  /**
   * SyncProduct createMany
   */
  export type SyncProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SyncProducts.
     */
    data: SyncProductCreateManyInput | SyncProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SyncProduct update
   */
  export type SyncProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncProduct
     */
    select?: SyncProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncProduct
     */
    omit?: SyncProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncProductInclude<ExtArgs> | null
    /**
     * The data needed to update a SyncProduct.
     */
    data: XOR<SyncProductUpdateInput, SyncProductUncheckedUpdateInput>
    /**
     * Choose, which SyncProduct to update.
     */
    where: SyncProductWhereUniqueInput
  }

  /**
   * SyncProduct updateMany
   */
  export type SyncProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SyncProducts.
     */
    data: XOR<SyncProductUpdateManyMutationInput, SyncProductUncheckedUpdateManyInput>
    /**
     * Filter which SyncProducts to update
     */
    where?: SyncProductWhereInput
    /**
     * Limit how many SyncProducts to update.
     */
    limit?: number
  }

  /**
   * SyncProduct upsert
   */
  export type SyncProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncProduct
     */
    select?: SyncProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncProduct
     */
    omit?: SyncProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncProductInclude<ExtArgs> | null
    /**
     * The filter to search for the SyncProduct to update in case it exists.
     */
    where: SyncProductWhereUniqueInput
    /**
     * In case the SyncProduct found by the `where` argument doesn't exist, create a new SyncProduct with this data.
     */
    create: XOR<SyncProductCreateInput, SyncProductUncheckedCreateInput>
    /**
     * In case the SyncProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SyncProductUpdateInput, SyncProductUncheckedUpdateInput>
  }

  /**
   * SyncProduct delete
   */
  export type SyncProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncProduct
     */
    select?: SyncProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncProduct
     */
    omit?: SyncProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncProductInclude<ExtArgs> | null
    /**
     * Filter which SyncProduct to delete.
     */
    where: SyncProductWhereUniqueInput
  }

  /**
   * SyncProduct deleteMany
   */
  export type SyncProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncProducts to delete
     */
    where?: SyncProductWhereInput
    /**
     * Limit how many SyncProducts to delete.
     */
    limit?: number
  }

  /**
   * SyncProduct without action
   */
  export type SyncProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncProduct
     */
    select?: SyncProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncProduct
     */
    omit?: SyncProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncProductInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    ebayOrderId: number | null
    totalAmount: Decimal | null
    billingId: number | null
    shippingId: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    userId: number | null
    ebayOrderId: number | null
    totalAmount: Decimal | null
    billingId: number | null
    shippingId: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    userId: number | null
    ebayOrderId: number | null
    status: $Enums.OrderStatus | null
    totalAmount: Decimal | null
    paymentId: string | null
    billingId: number | null
    shippingId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    ebayOrderId: number | null
    status: $Enums.OrderStatus | null
    totalAmount: Decimal | null
    paymentId: string | null
    billingId: number | null
    shippingId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    ebayOrderId: number
    status: number
    totalAmount: number
    paymentId: number
    billingId: number
    shippingId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    userId?: true
    ebayOrderId?: true
    totalAmount?: true
    billingId?: true
    shippingId?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    userId?: true
    ebayOrderId?: true
    totalAmount?: true
    billingId?: true
    shippingId?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    ebayOrderId?: true
    status?: true
    totalAmount?: true
    paymentId?: true
    billingId?: true
    shippingId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    ebayOrderId?: true
    status?: true
    totalAmount?: true
    paymentId?: true
    billingId?: true
    shippingId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    ebayOrderId?: true
    status?: true
    totalAmount?: true
    paymentId?: true
    billingId?: true
    shippingId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    userId: number
    ebayOrderId: number
    status: $Enums.OrderStatus
    totalAmount: Decimal
    paymentId: string | null
    billingId: number
    shippingId: number
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ebayOrderId?: boolean
    status?: boolean
    totalAmount?: boolean
    paymentId?: boolean
    billingId?: boolean
    shippingId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    billing?: boolean | AddressDefaultArgs<ExtArgs>
    shipping?: boolean | AddressDefaultArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>



  export type OrderSelectScalar = {
    id?: boolean
    userId?: boolean
    ebayOrderId?: boolean
    status?: boolean
    totalAmount?: boolean
    paymentId?: boolean
    billingId?: boolean
    shippingId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "ebayOrderId" | "status" | "totalAmount" | "paymentId" | "billingId" | "shippingId" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    billing?: boolean | AddressDefaultArgs<ExtArgs>
    shipping?: boolean | AddressDefaultArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      billing: Prisma.$AddressPayload<ExtArgs>
      shipping: Prisma.$AddressPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      ebayOrderId: number
      status: $Enums.OrderStatus
      totalAmount: Prisma.Decimal
      paymentId: string | null
      billingId: number
      shippingId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderItems<T extends Order$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    billing<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shipping<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly userId: FieldRef<"Order", 'Int'>
    readonly ebayOrderId: FieldRef<"Order", 'Int'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly totalAmount: FieldRef<"Order", 'Decimal'>
    readonly paymentId: FieldRef<"Order", 'String'>
    readonly billingId: FieldRef<"Order", 'Int'>
    readonly shippingId: FieldRef<"Order", 'Int'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.orderItems
   */
  export type Order$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    price: Decimal | null
    quantity: number | null
    totalPrice: Decimal | null
  }

  export type OrderItemSumAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    price: Decimal | null
    quantity: number | null
    totalPrice: Decimal | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    price: Decimal | null
    quantity: number | null
    totalPrice: Decimal | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    price: Decimal | null
    quantity: number | null
    totalPrice: Decimal | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    productId: number
    price: number
    quantity: number
    totalPrice: number
    productVariants: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    price?: true
    quantity?: true
    totalPrice?: true
  }

  export type OrderItemSumAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    price?: true
    quantity?: true
    totalPrice?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    price?: true
    quantity?: true
    totalPrice?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    price?: true
    quantity?: true
    totalPrice?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    price?: true
    quantity?: true
    totalPrice?: true
    productVariants?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: number
    orderId: number
    productId: number
    price: Decimal
    quantity: number
    totalPrice: Decimal
    productVariants: JsonValue | null
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    price?: boolean
    quantity?: boolean
    totalPrice?: boolean
    productVariants?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>



  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    productId?: boolean
    price?: boolean
    quantity?: boolean
    totalPrice?: boolean
    productVariants?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "productId" | "price" | "quantity" | "totalPrice" | "productVariants", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
      productId: number
      price: Prisma.Decimal
      quantity: number
      totalPrice: Prisma.Decimal
      productVariants: Prisma.JsonValue | null
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
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
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'Int'>
    readonly orderId: FieldRef<"OrderItem", 'Int'>
    readonly productId: FieldRef<"OrderItem", 'Int'>
    readonly price: FieldRef<"OrderItem", 'Decimal'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly totalPrice: FieldRef<"OrderItem", 'Decimal'>
    readonly productVariants: FieldRef<"OrderItem", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    userId: number | null
    type: $Enums.AddressType | null
    addressLine1: string | null
    addressLine2: string | null
    city: string | null
    county: string | null
    zipCode: string | null
    state: string | null
    country: string | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    type: $Enums.AddressType | null
    addressLine1: string | null
    addressLine2: string | null
    city: string | null
    county: string | null
    zipCode: string | null
    state: string | null
    country: string | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    addressLine1: number
    addressLine2: number
    city: number
    county: number
    zipCode: number
    state: number
    country: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    county?: true
    zipCode?: true
    state?: true
    country?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    county?: true
    zipCode?: true
    state?: true
    country?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    county?: true
    zipCode?: true
    state?: true
    country?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    userId: number
    type: $Enums.AddressType
    addressLine1: string
    addressLine2: string | null
    city: string
    county: string | null
    zipCode: string
    state: string
    country: string
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    county?: boolean
    zipCode?: boolean
    state?: boolean
    country?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    billingOrders?: boolean | Address$billingOrdersArgs<ExtArgs>
    shippingOrders?: boolean | Address$shippingOrdersArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>



  export type AddressSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    county?: boolean
    zipCode?: boolean
    state?: boolean
    country?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "addressLine1" | "addressLine2" | "city" | "county" | "zipCode" | "state" | "country", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    billingOrders?: boolean | Address$billingOrdersArgs<ExtArgs>
    shippingOrders?: boolean | Address$shippingOrdersArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      billingOrders: Prisma.$OrderPayload<ExtArgs>[]
      shippingOrders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      type: $Enums.AddressType
      addressLine1: string
      addressLine2: string | null
      city: string
      county: string | null
      zipCode: string
      state: string
      country: string
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    billingOrders<T extends Address$billingOrdersArgs<ExtArgs> = {}>(args?: Subset<T, Address$billingOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shippingOrders<T extends Address$shippingOrdersArgs<ExtArgs> = {}>(args?: Subset<T, Address$shippingOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly userId: FieldRef<"Address", 'Int'>
    readonly type: FieldRef<"Address", 'AddressType'>
    readonly addressLine1: FieldRef<"Address", 'String'>
    readonly addressLine2: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly county: FieldRef<"Address", 'String'>
    readonly zipCode: FieldRef<"Address", 'String'>
    readonly state: FieldRef<"Address", 'String'>
    readonly country: FieldRef<"Address", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address.billingOrders
   */
  export type Address$billingOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Address.shippingOrders
   */
  export type Address$shippingOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
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
    roleId: 'roleId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ShopifyCategoryScalarFieldEnum: {
    id: 'id',
    shopifyCategoryId: 'shopifyCategoryId',
    name: 'name',
    parentId: 'parentId',
    status: 'status'
  };

  export type ShopifyCategoryScalarFieldEnum = (typeof ShopifyCategoryScalarFieldEnum)[keyof typeof ShopifyCategoryScalarFieldEnum]


  export const EbayCategoryScalarFieldEnum: {
    id: 'id',
    ebayCategoryId: 'ebayCategoryId',
    name: 'name',
    parentId: 'parentId',
    status: 'status'
  };

  export type EbayCategoryScalarFieldEnum = (typeof EbayCategoryScalarFieldEnum)[keyof typeof EbayCategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    shopifyProductId: 'shopifyProductId',
    title: 'title',
    description: 'description',
    sku: 'sku',
    shopifyPrice: 'shopifyPrice',
    shopifyComparePrice: 'shopifyComparePrice',
    stock: 'stock',
    status: 'status',
    categoryId: 'categoryId',
    productOptions: 'productOptions',
    brand: 'brand',
    mpn: 'mpn',
    isbn: 'isbn',
    ean: 'ean',
    package: 'package',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductImageScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    imageUrl: 'imageUrl',
    position: 'position',
    isDefault: 'isDefault'
  };

  export type ProductImageScalarFieldEnum = (typeof ProductImageScalarFieldEnum)[keyof typeof ProductImageScalarFieldEnum]


  export const SyncProductScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    sku: 'sku',
    ebayPrice: 'ebayPrice',
    ebayComparePrice: 'ebayComparePrice',
    stock: 'stock',
    status: 'status',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SyncProductScalarFieldEnum = (typeof SyncProductScalarFieldEnum)[keyof typeof SyncProductScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ebayOrderId: 'ebayOrderId',
    status: 'status',
    totalAmount: 'totalAmount',
    paymentId: 'paymentId',
    billingId: 'billingId',
    shippingId: 'shippingId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    price: 'price',
    quantity: 'quantity',
    totalPrice: 'totalPrice',
    productVariants: 'productVariants'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    addressLine1: 'addressLine1',
    addressLine2: 'addressLine2',
    city: 'city',
    county: 'county',
    zipCode: 'zipCode',
    state: 'state',
    country: 'country'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const UserOrderByRelevanceFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const ShopifyCategoryOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type ShopifyCategoryOrderByRelevanceFieldEnum = (typeof ShopifyCategoryOrderByRelevanceFieldEnum)[keyof typeof ShopifyCategoryOrderByRelevanceFieldEnum]


  export const EbayCategoryOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type EbayCategoryOrderByRelevanceFieldEnum = (typeof EbayCategoryOrderByRelevanceFieldEnum)[keyof typeof EbayCategoryOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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


  export const ProductOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    sku: 'sku',
    brand: 'brand',
    mpn: 'mpn',
    isbn: 'isbn',
    ean: 'ean'
  };

  export type ProductOrderByRelevanceFieldEnum = (typeof ProductOrderByRelevanceFieldEnum)[keyof typeof ProductOrderByRelevanceFieldEnum]


  export const ProductImageOrderByRelevanceFieldEnum: {
    imageUrl: 'imageUrl'
  };

  export type ProductImageOrderByRelevanceFieldEnum = (typeof ProductImageOrderByRelevanceFieldEnum)[keyof typeof ProductImageOrderByRelevanceFieldEnum]


  export const SyncProductOrderByRelevanceFieldEnum: {
    sku: 'sku'
  };

  export type SyncProductOrderByRelevanceFieldEnum = (typeof SyncProductOrderByRelevanceFieldEnum)[keyof typeof SyncProductOrderByRelevanceFieldEnum]


  export const OrderOrderByRelevanceFieldEnum: {
    paymentId: 'paymentId'
  };

  export type OrderOrderByRelevanceFieldEnum = (typeof OrderOrderByRelevanceFieldEnum)[keyof typeof OrderOrderByRelevanceFieldEnum]


  export const AddressOrderByRelevanceFieldEnum: {
    addressLine1: 'addressLine1',
    addressLine2: 'addressLine2',
    city: 'city',
    county: 'county',
    zipCode: 'zipCode',
    state: 'state',
    country: 'country'
  };

  export type AddressOrderByRelevanceFieldEnum = (typeof AddressOrderByRelevanceFieldEnum)[keyof typeof AddressOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'ProductStatus'
   */
  export type EnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'AddressType'
   */
  export type EnumAddressTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AddressType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    roleId?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    status?: EnumStatusFilter<"User"> | $Enums.Status
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    address?: AddressListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    roleId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    address?: AddressOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    roleId?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    status?: EnumStatusFilter<"User"> | $Enums.Status
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    address?: AddressListRelationFilter
    orders?: OrderListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    roleId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    roleId?: IntWithAggregatesFilter<"User"> | number
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    status?: EnumStatusWithAggregatesFilter<"User"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ShopifyCategoryWhereInput = {
    AND?: ShopifyCategoryWhereInput | ShopifyCategoryWhereInput[]
    OR?: ShopifyCategoryWhereInput[]
    NOT?: ShopifyCategoryWhereInput | ShopifyCategoryWhereInput[]
    id?: IntFilter<"ShopifyCategory"> | number
    shopifyCategoryId?: IntFilter<"ShopifyCategory"> | number
    name?: StringFilter<"ShopifyCategory"> | string
    parentId?: IntFilter<"ShopifyCategory"> | number
    status?: EnumStatusFilter<"ShopifyCategory"> | $Enums.Status
    products?: ProductListRelationFilter
  }

  export type ShopifyCategoryOrderByWithRelationInput = {
    id?: SortOrder
    shopifyCategoryId?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    status?: SortOrder
    products?: ProductOrderByRelationAggregateInput
    _relevance?: ShopifyCategoryOrderByRelevanceInput
  }

  export type ShopifyCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    shopifyCategoryId?: number
    AND?: ShopifyCategoryWhereInput | ShopifyCategoryWhereInput[]
    OR?: ShopifyCategoryWhereInput[]
    NOT?: ShopifyCategoryWhereInput | ShopifyCategoryWhereInput[]
    name?: StringFilter<"ShopifyCategory"> | string
    parentId?: IntFilter<"ShopifyCategory"> | number
    status?: EnumStatusFilter<"ShopifyCategory"> | $Enums.Status
    products?: ProductListRelationFilter
  }, "id" | "shopifyCategoryId">

  export type ShopifyCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    shopifyCategoryId?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    status?: SortOrder
    _count?: ShopifyCategoryCountOrderByAggregateInput
    _avg?: ShopifyCategoryAvgOrderByAggregateInput
    _max?: ShopifyCategoryMaxOrderByAggregateInput
    _min?: ShopifyCategoryMinOrderByAggregateInput
    _sum?: ShopifyCategorySumOrderByAggregateInput
  }

  export type ShopifyCategoryScalarWhereWithAggregatesInput = {
    AND?: ShopifyCategoryScalarWhereWithAggregatesInput | ShopifyCategoryScalarWhereWithAggregatesInput[]
    OR?: ShopifyCategoryScalarWhereWithAggregatesInput[]
    NOT?: ShopifyCategoryScalarWhereWithAggregatesInput | ShopifyCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ShopifyCategory"> | number
    shopifyCategoryId?: IntWithAggregatesFilter<"ShopifyCategory"> | number
    name?: StringWithAggregatesFilter<"ShopifyCategory"> | string
    parentId?: IntWithAggregatesFilter<"ShopifyCategory"> | number
    status?: EnumStatusWithAggregatesFilter<"ShopifyCategory"> | $Enums.Status
  }

  export type EbayCategoryWhereInput = {
    AND?: EbayCategoryWhereInput | EbayCategoryWhereInput[]
    OR?: EbayCategoryWhereInput[]
    NOT?: EbayCategoryWhereInput | EbayCategoryWhereInput[]
    id?: IntFilter<"EbayCategory"> | number
    ebayCategoryId?: IntFilter<"EbayCategory"> | number
    name?: StringFilter<"EbayCategory"> | string
    parentId?: IntFilter<"EbayCategory"> | number
    status?: EnumStatusFilter<"EbayCategory"> | $Enums.Status
    products?: SyncProductListRelationFilter
  }

  export type EbayCategoryOrderByWithRelationInput = {
    id?: SortOrder
    ebayCategoryId?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    status?: SortOrder
    products?: SyncProductOrderByRelationAggregateInput
    _relevance?: EbayCategoryOrderByRelevanceInput
  }

  export type EbayCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EbayCategoryWhereInput | EbayCategoryWhereInput[]
    OR?: EbayCategoryWhereInput[]
    NOT?: EbayCategoryWhereInput | EbayCategoryWhereInput[]
    ebayCategoryId?: IntFilter<"EbayCategory"> | number
    name?: StringFilter<"EbayCategory"> | string
    parentId?: IntFilter<"EbayCategory"> | number
    status?: EnumStatusFilter<"EbayCategory"> | $Enums.Status
    products?: SyncProductListRelationFilter
  }, "id">

  export type EbayCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    ebayCategoryId?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    status?: SortOrder
    _count?: EbayCategoryCountOrderByAggregateInput
    _avg?: EbayCategoryAvgOrderByAggregateInput
    _max?: EbayCategoryMaxOrderByAggregateInput
    _min?: EbayCategoryMinOrderByAggregateInput
    _sum?: EbayCategorySumOrderByAggregateInput
  }

  export type EbayCategoryScalarWhereWithAggregatesInput = {
    AND?: EbayCategoryScalarWhereWithAggregatesInput | EbayCategoryScalarWhereWithAggregatesInput[]
    OR?: EbayCategoryScalarWhereWithAggregatesInput[]
    NOT?: EbayCategoryScalarWhereWithAggregatesInput | EbayCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EbayCategory"> | number
    ebayCategoryId?: IntWithAggregatesFilter<"EbayCategory"> | number
    name?: StringWithAggregatesFilter<"EbayCategory"> | string
    parentId?: IntWithAggregatesFilter<"EbayCategory"> | number
    status?: EnumStatusWithAggregatesFilter<"EbayCategory"> | $Enums.Status
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    shopifyProductId?: IntFilter<"Product"> | number
    title?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    sku?: StringFilter<"Product"> | string
    shopifyPrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    shopifyComparePrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"Product"> | number
    status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    categoryId?: IntFilter<"Product"> | number
    productOptions?: JsonNullableFilter<"Product">
    brand?: StringNullableFilter<"Product"> | string | null
    mpn?: StringNullableFilter<"Product"> | string | null
    isbn?: StringNullableFilter<"Product"> | string | null
    ean?: StringNullableFilter<"Product"> | string | null
    package?: JsonNullableFilter<"Product">
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<ShopifyCategoryScalarRelationFilter, ShopifyCategoryWhereInput>
    orderItems?: OrderItemListRelationFilter
    productImages?: ProductImageListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    shopifyProductId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    sku?: SortOrder
    shopifyPrice?: SortOrder
    shopifyComparePrice?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    categoryId?: SortOrder
    productOptions?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    mpn?: SortOrderInput | SortOrder
    isbn?: SortOrderInput | SortOrder
    ean?: SortOrderInput | SortOrder
    package?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: ShopifyCategoryOrderByWithRelationInput
    orderItems?: OrderItemOrderByRelationAggregateInput
    productImages?: ProductImageOrderByRelationAggregateInput
    _relevance?: ProductOrderByRelevanceInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    shopifyProductId?: IntFilter<"Product"> | number
    title?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    sku?: StringFilter<"Product"> | string
    shopifyPrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    shopifyComparePrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"Product"> | number
    status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    categoryId?: IntFilter<"Product"> | number
    productOptions?: JsonNullableFilter<"Product">
    brand?: StringNullableFilter<"Product"> | string | null
    mpn?: StringNullableFilter<"Product"> | string | null
    isbn?: StringNullableFilter<"Product"> | string | null
    ean?: StringNullableFilter<"Product"> | string | null
    package?: JsonNullableFilter<"Product">
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<ShopifyCategoryScalarRelationFilter, ShopifyCategoryWhereInput>
    orderItems?: OrderItemListRelationFilter
    productImages?: ProductImageListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    shopifyProductId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    sku?: SortOrder
    shopifyPrice?: SortOrder
    shopifyComparePrice?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    categoryId?: SortOrder
    productOptions?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    mpn?: SortOrderInput | SortOrder
    isbn?: SortOrderInput | SortOrder
    ean?: SortOrderInput | SortOrder
    package?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    shopifyProductId?: IntWithAggregatesFilter<"Product"> | number
    title?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    sku?: StringWithAggregatesFilter<"Product"> | string
    shopifyPrice?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    shopifyComparePrice?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    stock?: IntWithAggregatesFilter<"Product"> | number
    status?: EnumProductStatusWithAggregatesFilter<"Product"> | $Enums.ProductStatus
    categoryId?: IntWithAggregatesFilter<"Product"> | number
    productOptions?: JsonNullableWithAggregatesFilter<"Product">
    brand?: StringNullableWithAggregatesFilter<"Product"> | string | null
    mpn?: StringNullableWithAggregatesFilter<"Product"> | string | null
    isbn?: StringNullableWithAggregatesFilter<"Product"> | string | null
    ean?: StringNullableWithAggregatesFilter<"Product"> | string | null
    package?: JsonNullableWithAggregatesFilter<"Product">
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ProductImageWhereInput = {
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    id?: IntFilter<"ProductImage"> | number
    productId?: IntFilter<"ProductImage"> | number
    imageUrl?: StringFilter<"ProductImage"> | string
    position?: IntFilter<"ProductImage"> | number
    isDefault?: BoolFilter<"ProductImage"> | boolean
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductImageOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    imageUrl?: SortOrder
    position?: SortOrder
    isDefault?: SortOrder
    product?: ProductOrderByWithRelationInput
    _relevance?: ProductImageOrderByRelevanceInput
  }

  export type ProductImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    productId?: IntFilter<"ProductImage"> | number
    imageUrl?: StringFilter<"ProductImage"> | string
    position?: IntFilter<"ProductImage"> | number
    isDefault?: BoolFilter<"ProductImage"> | boolean
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductImageOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    imageUrl?: SortOrder
    position?: SortOrder
    isDefault?: SortOrder
    _count?: ProductImageCountOrderByAggregateInput
    _avg?: ProductImageAvgOrderByAggregateInput
    _max?: ProductImageMaxOrderByAggregateInput
    _min?: ProductImageMinOrderByAggregateInput
    _sum?: ProductImageSumOrderByAggregateInput
  }

  export type ProductImageScalarWhereWithAggregatesInput = {
    AND?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    OR?: ProductImageScalarWhereWithAggregatesInput[]
    NOT?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductImage"> | number
    productId?: IntWithAggregatesFilter<"ProductImage"> | number
    imageUrl?: StringWithAggregatesFilter<"ProductImage"> | string
    position?: IntWithAggregatesFilter<"ProductImage"> | number
    isDefault?: BoolWithAggregatesFilter<"ProductImage"> | boolean
  }

  export type SyncProductWhereInput = {
    AND?: SyncProductWhereInput | SyncProductWhereInput[]
    OR?: SyncProductWhereInput[]
    NOT?: SyncProductWhereInput | SyncProductWhereInput[]
    id?: IntFilter<"SyncProduct"> | number
    productId?: IntFilter<"SyncProduct"> | number
    sku?: StringFilter<"SyncProduct"> | string
    ebayPrice?: DecimalFilter<"SyncProduct"> | Decimal | DecimalJsLike | number | string
    ebayComparePrice?: DecimalFilter<"SyncProduct"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"SyncProduct"> | number
    status?: EnumProductStatusFilter<"SyncProduct"> | $Enums.ProductStatus
    categoryId?: IntFilter<"SyncProduct"> | number
    createdAt?: DateTimeFilter<"SyncProduct"> | Date | string
    updatedAt?: DateTimeFilter<"SyncProduct"> | Date | string
    category?: XOR<EbayCategoryScalarRelationFilter, EbayCategoryWhereInput>
  }

  export type SyncProductOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    sku?: SortOrder
    ebayPrice?: SortOrder
    ebayComparePrice?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: EbayCategoryOrderByWithRelationInput
    _relevance?: SyncProductOrderByRelevanceInput
  }

  export type SyncProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SyncProductWhereInput | SyncProductWhereInput[]
    OR?: SyncProductWhereInput[]
    NOT?: SyncProductWhereInput | SyncProductWhereInput[]
    productId?: IntFilter<"SyncProduct"> | number
    sku?: StringFilter<"SyncProduct"> | string
    ebayPrice?: DecimalFilter<"SyncProduct"> | Decimal | DecimalJsLike | number | string
    ebayComparePrice?: DecimalFilter<"SyncProduct"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"SyncProduct"> | number
    status?: EnumProductStatusFilter<"SyncProduct"> | $Enums.ProductStatus
    categoryId?: IntFilter<"SyncProduct"> | number
    createdAt?: DateTimeFilter<"SyncProduct"> | Date | string
    updatedAt?: DateTimeFilter<"SyncProduct"> | Date | string
    category?: XOR<EbayCategoryScalarRelationFilter, EbayCategoryWhereInput>
  }, "id">

  export type SyncProductOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    sku?: SortOrder
    ebayPrice?: SortOrder
    ebayComparePrice?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SyncProductCountOrderByAggregateInput
    _avg?: SyncProductAvgOrderByAggregateInput
    _max?: SyncProductMaxOrderByAggregateInput
    _min?: SyncProductMinOrderByAggregateInput
    _sum?: SyncProductSumOrderByAggregateInput
  }

  export type SyncProductScalarWhereWithAggregatesInput = {
    AND?: SyncProductScalarWhereWithAggregatesInput | SyncProductScalarWhereWithAggregatesInput[]
    OR?: SyncProductScalarWhereWithAggregatesInput[]
    NOT?: SyncProductScalarWhereWithAggregatesInput | SyncProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SyncProduct"> | number
    productId?: IntWithAggregatesFilter<"SyncProduct"> | number
    sku?: StringWithAggregatesFilter<"SyncProduct"> | string
    ebayPrice?: DecimalWithAggregatesFilter<"SyncProduct"> | Decimal | DecimalJsLike | number | string
    ebayComparePrice?: DecimalWithAggregatesFilter<"SyncProduct"> | Decimal | DecimalJsLike | number | string
    stock?: IntWithAggregatesFilter<"SyncProduct"> | number
    status?: EnumProductStatusWithAggregatesFilter<"SyncProduct"> | $Enums.ProductStatus
    categoryId?: IntWithAggregatesFilter<"SyncProduct"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SyncProduct"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SyncProduct"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    userId?: IntFilter<"Order"> | number
    ebayOrderId?: IntFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    totalAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    paymentId?: StringNullableFilter<"Order"> | string | null
    billingId?: IntFilter<"Order"> | number
    shippingId?: IntFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    orderItems?: OrderItemListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    billing?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    shipping?: XOR<AddressScalarRelationFilter, AddressWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ebayOrderId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    billingId?: SortOrder
    shippingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderItems?: OrderItemOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    billing?: AddressOrderByWithRelationInput
    shipping?: AddressOrderByWithRelationInput
    _relevance?: OrderOrderByRelevanceInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: IntFilter<"Order"> | number
    ebayOrderId?: IntFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    totalAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    paymentId?: StringNullableFilter<"Order"> | string | null
    billingId?: IntFilter<"Order"> | number
    shippingId?: IntFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    orderItems?: OrderItemListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    billing?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    shipping?: XOR<AddressScalarRelationFilter, AddressWhereInput>
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ebayOrderId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    billingId?: SortOrder
    shippingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    userId?: IntWithAggregatesFilter<"Order"> | number
    ebayOrderId?: IntWithAggregatesFilter<"Order"> | number
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    totalAmount?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    paymentId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    billingId?: IntWithAggregatesFilter<"Order"> | number
    shippingId?: IntWithAggregatesFilter<"Order"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: IntFilter<"OrderItem"> | number
    orderId?: IntFilter<"OrderItem"> | number
    productId?: IntFilter<"OrderItem"> | number
    price?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"OrderItem"> | number
    totalPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    productVariants?: JsonNullableFilter<"OrderItem">
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    productVariants?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
    order?: OrderOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: IntFilter<"OrderItem"> | number
    productId?: IntFilter<"OrderItem"> | number
    price?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"OrderItem"> | number
    totalPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    productVariants?: JsonNullableFilter<"OrderItem">
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    productVariants?: SortOrderInput | SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderItem"> | number
    orderId?: IntWithAggregatesFilter<"OrderItem"> | number
    productId?: IntWithAggregatesFilter<"OrderItem"> | number
    price?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    totalPrice?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    productVariants?: JsonNullableWithAggregatesFilter<"OrderItem">
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: IntFilter<"Address"> | number
    userId?: IntFilter<"Address"> | number
    type?: EnumAddressTypeFilter<"Address"> | $Enums.AddressType
    addressLine1?: StringFilter<"Address"> | string
    addressLine2?: StringNullableFilter<"Address"> | string | null
    city?: StringFilter<"Address"> | string
    county?: StringNullableFilter<"Address"> | string | null
    zipCode?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    billingOrders?: OrderListRelationFilter
    shippingOrders?: OrderListRelationFilter
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrderInput | SortOrder
    city?: SortOrder
    county?: SortOrderInput | SortOrder
    zipCode?: SortOrder
    state?: SortOrder
    country?: SortOrder
    user?: UserOrderByWithRelationInput
    billingOrders?: OrderOrderByRelationAggregateInput
    shippingOrders?: OrderOrderByRelationAggregateInput
    _relevance?: AddressOrderByRelevanceInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    userId?: IntFilter<"Address"> | number
    type?: EnumAddressTypeFilter<"Address"> | $Enums.AddressType
    addressLine1?: StringFilter<"Address"> | string
    addressLine2?: StringNullableFilter<"Address"> | string | null
    city?: StringFilter<"Address"> | string
    county?: StringNullableFilter<"Address"> | string | null
    zipCode?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    billingOrders?: OrderListRelationFilter
    shippingOrders?: OrderListRelationFilter
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrderInput | SortOrder
    city?: SortOrder
    county?: SortOrderInput | SortOrder
    zipCode?: SortOrder
    state?: SortOrder
    country?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address"> | number
    userId?: IntWithAggregatesFilter<"Address"> | number
    type?: EnumAddressTypeWithAggregatesFilter<"Address"> | $Enums.AddressType
    addressLine1?: StringWithAggregatesFilter<"Address"> | string
    addressLine2?: StringNullableWithAggregatesFilter<"Address"> | string | null
    city?: StringWithAggregatesFilter<"Address"> | string
    county?: StringNullableWithAggregatesFilter<"Address"> | string | null
    zipCode?: StringWithAggregatesFilter<"Address"> | string
    state?: StringWithAggregatesFilter<"Address"> | string
    country?: StringWithAggregatesFilter<"Address"> | string
  }

  export type UserCreateInput = {
    roleId: number
    firstName: string
    lastName: string
    email: string
    password: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    roleId: number
    firstName: string
    lastName: string
    email: string
    password: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    roleId: number
    firstName: string
    lastName: string
    email: string
    password: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopifyCategoryCreateInput = {
    shopifyCategoryId: number
    name: string
    parentId: number
    status?: $Enums.Status
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type ShopifyCategoryUncheckedCreateInput = {
    id?: number
    shopifyCategoryId: number
    name: string
    parentId: number
    status?: $Enums.Status
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type ShopifyCategoryUpdateInput = {
    shopifyCategoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type ShopifyCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopifyCategoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ShopifyCategoryCreateManyInput = {
    id?: number
    shopifyCategoryId: number
    name: string
    parentId: number
    status?: $Enums.Status
  }

  export type ShopifyCategoryUpdateManyMutationInput = {
    shopifyCategoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type ShopifyCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopifyCategoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type EbayCategoryCreateInput = {
    ebayCategoryId: number
    name: string
    parentId: number
    status?: $Enums.Status
    products?: SyncProductCreateNestedManyWithoutCategoryInput
  }

  export type EbayCategoryUncheckedCreateInput = {
    id?: number
    ebayCategoryId: number
    name: string
    parentId: number
    status?: $Enums.Status
    products?: SyncProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type EbayCategoryUpdateInput = {
    ebayCategoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    products?: SyncProductUpdateManyWithoutCategoryNestedInput
  }

  export type EbayCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ebayCategoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    products?: SyncProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type EbayCategoryCreateManyInput = {
    id?: number
    ebayCategoryId: number
    name: string
    parentId: number
    status?: $Enums.Status
  }

  export type EbayCategoryUpdateManyMutationInput = {
    ebayCategoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type EbayCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ebayCategoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type ProductCreateInput = {
    shopifyProductId: number
    title: string
    description: string
    sku: string
    shopifyPrice: Decimal | DecimalJsLike | number | string
    shopifyComparePrice: Decimal | DecimalJsLike | number | string
    stock: number
    status?: $Enums.ProductStatus
    productOptions?: NullableJsonNullValueInput | InputJsonValue
    brand?: string | null
    mpn?: string | null
    isbn?: string | null
    ean?: string | null
    package?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    category: ShopifyCategoryCreateNestedOneWithoutProductsInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
    productImages?: ProductImageCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    shopifyProductId: number
    title: string
    description: string
    sku: string
    shopifyPrice: Decimal | DecimalJsLike | number | string
    shopifyComparePrice: Decimal | DecimalJsLike | number | string
    stock: number
    status?: $Enums.ProductStatus
    categoryId: number
    productOptions?: NullableJsonNullValueInput | InputJsonValue
    brand?: string | null
    mpn?: string | null
    isbn?: string | null
    ean?: string | null
    package?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    productImages?: ProductImageUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    shopifyProductId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    shopifyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shopifyComparePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    productOptions?: NullableJsonNullValueInput | InputJsonValue
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    mpn?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    ean?: NullableStringFieldUpdateOperationsInput | string | null
    package?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: ShopifyCategoryUpdateOneRequiredWithoutProductsNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
    productImages?: ProductImageUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopifyProductId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    shopifyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shopifyComparePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    categoryId?: IntFieldUpdateOperationsInput | number
    productOptions?: NullableJsonNullValueInput | InputJsonValue
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    mpn?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    ean?: NullableStringFieldUpdateOperationsInput | string | null
    package?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    productImages?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    shopifyProductId: number
    title: string
    description: string
    sku: string
    shopifyPrice: Decimal | DecimalJsLike | number | string
    shopifyComparePrice: Decimal | DecimalJsLike | number | string
    stock: number
    status?: $Enums.ProductStatus
    categoryId: number
    productOptions?: NullableJsonNullValueInput | InputJsonValue
    brand?: string | null
    mpn?: string | null
    isbn?: string | null
    ean?: string | null
    package?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    shopifyProductId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    shopifyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shopifyComparePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    productOptions?: NullableJsonNullValueInput | InputJsonValue
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    mpn?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    ean?: NullableStringFieldUpdateOperationsInput | string | null
    package?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopifyProductId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    shopifyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shopifyComparePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    categoryId?: IntFieldUpdateOperationsInput | number
    productOptions?: NullableJsonNullValueInput | InputJsonValue
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    mpn?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    ean?: NullableStringFieldUpdateOperationsInput | string | null
    package?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageCreateInput = {
    imageUrl: string
    position: number
    isDefault?: boolean
    product: ProductCreateNestedOneWithoutProductImagesInput
  }

  export type ProductImageUncheckedCreateInput = {
    id?: number
    productId: number
    imageUrl: string
    position: number
    isDefault?: boolean
  }

  export type ProductImageUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    product?: ProductUpdateOneRequiredWithoutProductImagesNestedInput
  }

  export type ProductImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductImageCreateManyInput = {
    id?: number
    productId: number
    imageUrl: string
    position: number
    isDefault?: boolean
  }

  export type ProductImageUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SyncProductCreateInput = {
    productId: number
    sku: string
    ebayPrice: Decimal | DecimalJsLike | number | string
    ebayComparePrice: Decimal | DecimalJsLike | number | string
    stock: number
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    category: EbayCategoryCreateNestedOneWithoutProductsInput
  }

  export type SyncProductUncheckedCreateInput = {
    id?: number
    productId: number
    sku: string
    ebayPrice: Decimal | DecimalJsLike | number | string
    ebayComparePrice: Decimal | DecimalJsLike | number | string
    stock: number
    status?: $Enums.ProductStatus
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SyncProductUpdateInput = {
    productId?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    ebayPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ebayComparePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EbayCategoryUpdateOneRequiredWithoutProductsNestedInput
  }

  export type SyncProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    ebayPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ebayComparePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncProductCreateManyInput = {
    id?: number
    productId: number
    sku: string
    ebayPrice: Decimal | DecimalJsLike | number | string
    ebayComparePrice: Decimal | DecimalJsLike | number | string
    stock: number
    status?: $Enums.ProductStatus
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SyncProductUpdateManyMutationInput = {
    productId?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    ebayPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ebayComparePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    ebayPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ebayComparePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    ebayOrderId: number
    status?: $Enums.OrderStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    paymentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    user: UserCreateNestedOneWithoutOrdersInput
    billing: AddressCreateNestedOneWithoutBillingOrdersInput
    shipping: AddressCreateNestedOneWithoutShippingOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    userId: number
    ebayOrderId: number
    status?: $Enums.OrderStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    paymentId?: string | null
    billingId: number
    shippingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    ebayOrderId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    billing?: AddressUpdateOneRequiredWithoutBillingOrdersNestedInput
    shipping?: AddressUpdateOneRequiredWithoutShippingOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ebayOrderId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    billingId?: IntFieldUpdateOperationsInput | number
    shippingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    userId: number
    ebayOrderId: number
    status?: $Enums.OrderStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    paymentId?: string | null
    billingId: number
    shippingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    ebayOrderId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ebayOrderId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    billingId?: IntFieldUpdateOperationsInput | number
    shippingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    totalPrice: Decimal | DecimalJsLike | number | string
    productVariants?: NullableJsonNullValueInput | InputJsonValue
    product: ProductCreateNestedOneWithoutOrderItemsInput
    order: OrderCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: number
    orderId: number
    productId: number
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    totalPrice: Decimal | DecimalJsLike | number | string
    productVariants?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderItemUpdateInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productVariants?: NullableJsonNullValueInput | InputJsonValue
    product?: ProductUpdateOneRequiredWithoutOrderItemsNestedInput
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productVariants?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderItemCreateManyInput = {
    id?: number
    orderId: number
    productId: number
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    totalPrice: Decimal | DecimalJsLike | number | string
    productVariants?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderItemUpdateManyMutationInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productVariants?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productVariants?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AddressCreateInput = {
    type?: $Enums.AddressType
    addressLine1: string
    addressLine2?: string | null
    city: string
    county?: string | null
    zipCode: string
    state: string
    country: string
    user: UserCreateNestedOneWithoutAddressInput
    billingOrders?: OrderCreateNestedManyWithoutBillingInput
    shippingOrders?: OrderCreateNestedManyWithoutShippingInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    userId: number
    type?: $Enums.AddressType
    addressLine1: string
    addressLine2?: string | null
    city: string
    county?: string | null
    zipCode: string
    state: string
    country: string
    billingOrders?: OrderUncheckedCreateNestedManyWithoutBillingInput
    shippingOrders?: OrderUncheckedCreateNestedManyWithoutShippingInput
  }

  export type AddressUpdateInput = {
    type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    county?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAddressNestedInput
    billingOrders?: OrderUpdateManyWithoutBillingNestedInput
    shippingOrders?: OrderUpdateManyWithoutShippingNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    county?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    billingOrders?: OrderUncheckedUpdateManyWithoutBillingNestedInput
    shippingOrders?: OrderUncheckedUpdateManyWithoutShippingNestedInput
  }

  export type AddressCreateManyInput = {
    id?: number
    userId: number
    type?: $Enums.AddressType
    addressLine1: string
    addressLine2?: string | null
    city: string
    county?: string | null
    zipCode: string
    state: string
    country: string
  }

  export type AddressUpdateManyMutationInput = {
    type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    county?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    county?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShopifyCategoryOrderByRelevanceInput = {
    fields: ShopifyCategoryOrderByRelevanceFieldEnum | ShopifyCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ShopifyCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    shopifyCategoryId?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    status?: SortOrder
  }

  export type ShopifyCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    shopifyCategoryId?: SortOrder
    parentId?: SortOrder
  }

  export type ShopifyCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    shopifyCategoryId?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    status?: SortOrder
  }

  export type ShopifyCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    shopifyCategoryId?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    status?: SortOrder
  }

  export type ShopifyCategorySumOrderByAggregateInput = {
    id?: SortOrder
    shopifyCategoryId?: SortOrder
    parentId?: SortOrder
  }

  export type SyncProductListRelationFilter = {
    every?: SyncProductWhereInput
    some?: SyncProductWhereInput
    none?: SyncProductWhereInput
  }

  export type SyncProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EbayCategoryOrderByRelevanceInput = {
    fields: EbayCategoryOrderByRelevanceFieldEnum | EbayCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EbayCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    ebayCategoryId?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    status?: SortOrder
  }

  export type EbayCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    ebayCategoryId?: SortOrder
    parentId?: SortOrder
  }

  export type EbayCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    ebayCategoryId?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    status?: SortOrder
  }

  export type EbayCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    ebayCategoryId?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    status?: SortOrder
  }

  export type EbayCategorySumOrderByAggregateInput = {
    id?: SortOrder
    ebayCategoryId?: SortOrder
    parentId?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumProductStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[]
    notIn?: $Enums.ProductStatus[]
    not?: NestedEnumProductStatusFilter<$PrismaModel> | $Enums.ProductStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ShopifyCategoryScalarRelationFilter = {
    is?: ShopifyCategoryWhereInput
    isNot?: ShopifyCategoryWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type ProductImageListRelationFilter = {
    every?: ProductImageWhereInput
    some?: ProductImageWhereInput
    none?: ProductImageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelevanceInput = {
    fields: ProductOrderByRelevanceFieldEnum | ProductOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    shopifyProductId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    sku?: SortOrder
    shopifyPrice?: SortOrder
    shopifyComparePrice?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    categoryId?: SortOrder
    productOptions?: SortOrder
    brand?: SortOrder
    mpn?: SortOrder
    isbn?: SortOrder
    ean?: SortOrder
    package?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    shopifyProductId?: SortOrder
    shopifyPrice?: SortOrder
    shopifyComparePrice?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    shopifyProductId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    sku?: SortOrder
    shopifyPrice?: SortOrder
    shopifyComparePrice?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    categoryId?: SortOrder
    brand?: SortOrder
    mpn?: SortOrder
    isbn?: SortOrder
    ean?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    shopifyProductId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    sku?: SortOrder
    shopifyPrice?: SortOrder
    shopifyComparePrice?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    categoryId?: SortOrder
    brand?: SortOrder
    mpn?: SortOrder
    isbn?: SortOrder
    ean?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    shopifyProductId?: SortOrder
    shopifyPrice?: SortOrder
    shopifyComparePrice?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumProductStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[]
    notIn?: $Enums.ProductStatus[]
    not?: NestedEnumProductStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProductStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductStatusFilter<$PrismaModel>
    _max?: NestedEnumProductStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductImageOrderByRelevanceInput = {
    fields: ProductImageOrderByRelevanceFieldEnum | ProductImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductImageCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    imageUrl?: SortOrder
    position?: SortOrder
    isDefault?: SortOrder
  }

  export type ProductImageAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    position?: SortOrder
  }

  export type ProductImageMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    imageUrl?: SortOrder
    position?: SortOrder
    isDefault?: SortOrder
  }

  export type ProductImageMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    imageUrl?: SortOrder
    position?: SortOrder
    isDefault?: SortOrder
  }

  export type ProductImageSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    position?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EbayCategoryScalarRelationFilter = {
    is?: EbayCategoryWhereInput
    isNot?: EbayCategoryWhereInput
  }

  export type SyncProductOrderByRelevanceInput = {
    fields: SyncProductOrderByRelevanceFieldEnum | SyncProductOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SyncProductCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    sku?: SortOrder
    ebayPrice?: SortOrder
    ebayComparePrice?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SyncProductAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    ebayPrice?: SortOrder
    ebayComparePrice?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
  }

  export type SyncProductMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    sku?: SortOrder
    ebayPrice?: SortOrder
    ebayComparePrice?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SyncProductMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    sku?: SortOrder
    ebayPrice?: SortOrder
    ebayComparePrice?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SyncProductSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    ebayPrice?: SortOrder
    ebayComparePrice?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AddressScalarRelationFilter = {
    is?: AddressWhereInput
    isNot?: AddressWhereInput
  }

  export type OrderOrderByRelevanceInput = {
    fields: OrderOrderByRelevanceFieldEnum | OrderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ebayOrderId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    paymentId?: SortOrder
    billingId?: SortOrder
    shippingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ebayOrderId?: SortOrder
    totalAmount?: SortOrder
    billingId?: SortOrder
    shippingId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ebayOrderId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    paymentId?: SortOrder
    billingId?: SortOrder
    shippingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ebayOrderId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    paymentId?: SortOrder
    billingId?: SortOrder
    shippingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ebayOrderId?: SortOrder
    totalAmount?: SortOrder
    billingId?: SortOrder
    shippingId?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    productVariants?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
  }

  export type EnumAddressTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AddressType | EnumAddressTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AddressType[]
    notIn?: $Enums.AddressType[]
    not?: NestedEnumAddressTypeFilter<$PrismaModel> | $Enums.AddressType
  }

  export type AddressOrderByRelevanceInput = {
    fields: AddressOrderByRelevanceFieldEnum | AddressOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    county?: SortOrder
    zipCode?: SortOrder
    state?: SortOrder
    country?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    county?: SortOrder
    zipCode?: SortOrder
    state?: SortOrder
    country?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    county?: SortOrder
    zipCode?: SortOrder
    state?: SortOrder
    country?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumAddressTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AddressType | EnumAddressTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AddressType[]
    notIn?: $Enums.AddressType[]
    not?: NestedEnumAddressTypeWithAggregatesFilter<$PrismaModel> | $Enums.AddressType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAddressTypeFilter<$PrismaModel>
    _max?: NestedEnumAddressTypeFilter<$PrismaModel>
  }

  export type AddressCreateNestedManyWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AddressUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutUserInput | AddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutUserInput | AddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutUserInput | AddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type AddressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutUserInput | AddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutUserInput | AddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutUserInput | AddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type SyncProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SyncProductCreateWithoutCategoryInput, SyncProductUncheckedCreateWithoutCategoryInput> | SyncProductCreateWithoutCategoryInput[] | SyncProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SyncProductCreateOrConnectWithoutCategoryInput | SyncProductCreateOrConnectWithoutCategoryInput[]
    createMany?: SyncProductCreateManyCategoryInputEnvelope
    connect?: SyncProductWhereUniqueInput | SyncProductWhereUniqueInput[]
  }

  export type SyncProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SyncProductCreateWithoutCategoryInput, SyncProductUncheckedCreateWithoutCategoryInput> | SyncProductCreateWithoutCategoryInput[] | SyncProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SyncProductCreateOrConnectWithoutCategoryInput | SyncProductCreateOrConnectWithoutCategoryInput[]
    createMany?: SyncProductCreateManyCategoryInputEnvelope
    connect?: SyncProductWhereUniqueInput | SyncProductWhereUniqueInput[]
  }

  export type SyncProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SyncProductCreateWithoutCategoryInput, SyncProductUncheckedCreateWithoutCategoryInput> | SyncProductCreateWithoutCategoryInput[] | SyncProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SyncProductCreateOrConnectWithoutCategoryInput | SyncProductCreateOrConnectWithoutCategoryInput[]
    upsert?: SyncProductUpsertWithWhereUniqueWithoutCategoryInput | SyncProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SyncProductCreateManyCategoryInputEnvelope
    set?: SyncProductWhereUniqueInput | SyncProductWhereUniqueInput[]
    disconnect?: SyncProductWhereUniqueInput | SyncProductWhereUniqueInput[]
    delete?: SyncProductWhereUniqueInput | SyncProductWhereUniqueInput[]
    connect?: SyncProductWhereUniqueInput | SyncProductWhereUniqueInput[]
    update?: SyncProductUpdateWithWhereUniqueWithoutCategoryInput | SyncProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SyncProductUpdateManyWithWhereWithoutCategoryInput | SyncProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SyncProductScalarWhereInput | SyncProductScalarWhereInput[]
  }

  export type SyncProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SyncProductCreateWithoutCategoryInput, SyncProductUncheckedCreateWithoutCategoryInput> | SyncProductCreateWithoutCategoryInput[] | SyncProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SyncProductCreateOrConnectWithoutCategoryInput | SyncProductCreateOrConnectWithoutCategoryInput[]
    upsert?: SyncProductUpsertWithWhereUniqueWithoutCategoryInput | SyncProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SyncProductCreateManyCategoryInputEnvelope
    set?: SyncProductWhereUniqueInput | SyncProductWhereUniqueInput[]
    disconnect?: SyncProductWhereUniqueInput | SyncProductWhereUniqueInput[]
    delete?: SyncProductWhereUniqueInput | SyncProductWhereUniqueInput[]
    connect?: SyncProductWhereUniqueInput | SyncProductWhereUniqueInput[]
    update?: SyncProductUpdateWithWhereUniqueWithoutCategoryInput | SyncProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SyncProductUpdateManyWithWhereWithoutCategoryInput | SyncProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SyncProductScalarWhereInput | SyncProductScalarWhereInput[]
  }

  export type ShopifyCategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<ShopifyCategoryCreateWithoutProductsInput, ShopifyCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ShopifyCategoryCreateOrConnectWithoutProductsInput
    connect?: ShopifyCategoryWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type ProductImageCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type ProductImageUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumProductStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProductStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ShopifyCategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<ShopifyCategoryCreateWithoutProductsInput, ShopifyCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ShopifyCategoryCreateOrConnectWithoutProductsInput
    upsert?: ShopifyCategoryUpsertWithoutProductsInput
    connect?: ShopifyCategoryWhereUniqueInput
    update?: XOR<XOR<ShopifyCategoryUpdateToOneWithWhereWithoutProductsInput, ShopifyCategoryUpdateWithoutProductsInput>, ShopifyCategoryUncheckedUpdateWithoutProductsInput>
  }

  export type OrderItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ProductImageUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutProductInput | ProductImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutProductInput | ProductImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutProductInput | ProductImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ProductImageUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutProductInput | ProductImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutProductInput | ProductImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutProductInput | ProductImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutProductImagesInput = {
    create?: XOR<ProductCreateWithoutProductImagesInput, ProductUncheckedCreateWithoutProductImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductImagesInput
    connect?: ProductWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProductUpdateOneRequiredWithoutProductImagesNestedInput = {
    create?: XOR<ProductCreateWithoutProductImagesInput, ProductUncheckedCreateWithoutProductImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductImagesInput
    upsert?: ProductUpsertWithoutProductImagesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductImagesInput, ProductUpdateWithoutProductImagesInput>, ProductUncheckedUpdateWithoutProductImagesInput>
  }

  export type EbayCategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<EbayCategoryCreateWithoutProductsInput, EbayCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: EbayCategoryCreateOrConnectWithoutProductsInput
    connect?: EbayCategoryWhereUniqueInput
  }

  export type EbayCategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<EbayCategoryCreateWithoutProductsInput, EbayCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: EbayCategoryCreateOrConnectWithoutProductsInput
    upsert?: EbayCategoryUpsertWithoutProductsInput
    connect?: EbayCategoryWhereUniqueInput
    update?: XOR<XOR<EbayCategoryUpdateToOneWithWhereWithoutProductsInput, EbayCategoryUpdateWithoutProductsInput>, EbayCategoryUncheckedUpdateWithoutProductsInput>
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type AddressCreateNestedOneWithoutBillingOrdersInput = {
    create?: XOR<AddressCreateWithoutBillingOrdersInput, AddressUncheckedCreateWithoutBillingOrdersInput>
    connectOrCreate?: AddressCreateOrConnectWithoutBillingOrdersInput
    connect?: AddressWhereUniqueInput
  }

  export type AddressCreateNestedOneWithoutShippingOrdersInput = {
    create?: XOR<AddressCreateWithoutShippingOrdersInput, AddressUncheckedCreateWithoutShippingOrdersInput>
    connectOrCreate?: AddressCreateOrConnectWithoutShippingOrdersInput
    connect?: AddressWhereUniqueInput
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type AddressUpdateOneRequiredWithoutBillingOrdersNestedInput = {
    create?: XOR<AddressCreateWithoutBillingOrdersInput, AddressUncheckedCreateWithoutBillingOrdersInput>
    connectOrCreate?: AddressCreateOrConnectWithoutBillingOrdersInput
    upsert?: AddressUpsertWithoutBillingOrdersInput
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutBillingOrdersInput, AddressUpdateWithoutBillingOrdersInput>, AddressUncheckedUpdateWithoutBillingOrdersInput>
  }

  export type AddressUpdateOneRequiredWithoutShippingOrdersNestedInput = {
    create?: XOR<AddressCreateWithoutShippingOrdersInput, AddressUncheckedCreateWithoutShippingOrdersInput>
    connectOrCreate?: AddressCreateOrConnectWithoutShippingOrdersInput
    upsert?: AddressUpsertWithoutShippingOrdersInput
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutShippingOrdersInput, AddressUpdateWithoutShippingOrdersInput>, AddressUncheckedUpdateWithoutShippingOrdersInput>
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type OrderCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput
    upsert?: ProductUpsertWithoutOrderItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrderItemsInput, ProductUpdateWithoutOrderItemsInput>, ProductUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    upsert?: OrderUpsertWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderItemsInput, OrderUpdateWithoutOrderItemsInput>, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type UserCreateNestedOneWithoutAddressInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput
    connect?: UserWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutBillingInput = {
    create?: XOR<OrderCreateWithoutBillingInput, OrderUncheckedCreateWithoutBillingInput> | OrderCreateWithoutBillingInput[] | OrderUncheckedCreateWithoutBillingInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBillingInput | OrderCreateOrConnectWithoutBillingInput[]
    createMany?: OrderCreateManyBillingInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutShippingInput = {
    create?: XOR<OrderCreateWithoutShippingInput, OrderUncheckedCreateWithoutShippingInput> | OrderCreateWithoutShippingInput[] | OrderUncheckedCreateWithoutShippingInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutShippingInput | OrderCreateOrConnectWithoutShippingInput[]
    createMany?: OrderCreateManyShippingInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutBillingInput = {
    create?: XOR<OrderCreateWithoutBillingInput, OrderUncheckedCreateWithoutBillingInput> | OrderCreateWithoutBillingInput[] | OrderUncheckedCreateWithoutBillingInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBillingInput | OrderCreateOrConnectWithoutBillingInput[]
    createMany?: OrderCreateManyBillingInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutShippingInput = {
    create?: XOR<OrderCreateWithoutShippingInput, OrderUncheckedCreateWithoutShippingInput> | OrderCreateWithoutShippingInput[] | OrderUncheckedCreateWithoutShippingInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutShippingInput | OrderCreateOrConnectWithoutShippingInput[]
    createMany?: OrderCreateManyShippingInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type EnumAddressTypeFieldUpdateOperationsInput = {
    set?: $Enums.AddressType
  }

  export type UserUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput
    upsert?: UserUpsertWithoutAddressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAddressInput, UserUpdateWithoutAddressInput>, UserUncheckedUpdateWithoutAddressInput>
  }

  export type OrderUpdateManyWithoutBillingNestedInput = {
    create?: XOR<OrderCreateWithoutBillingInput, OrderUncheckedCreateWithoutBillingInput> | OrderCreateWithoutBillingInput[] | OrderUncheckedCreateWithoutBillingInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBillingInput | OrderCreateOrConnectWithoutBillingInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutBillingInput | OrderUpsertWithWhereUniqueWithoutBillingInput[]
    createMany?: OrderCreateManyBillingInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutBillingInput | OrderUpdateWithWhereUniqueWithoutBillingInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutBillingInput | OrderUpdateManyWithWhereWithoutBillingInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutShippingNestedInput = {
    create?: XOR<OrderCreateWithoutShippingInput, OrderUncheckedCreateWithoutShippingInput> | OrderCreateWithoutShippingInput[] | OrderUncheckedCreateWithoutShippingInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutShippingInput | OrderCreateOrConnectWithoutShippingInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutShippingInput | OrderUpsertWithWhereUniqueWithoutShippingInput[]
    createMany?: OrderCreateManyShippingInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutShippingInput | OrderUpdateWithWhereUniqueWithoutShippingInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutShippingInput | OrderUpdateManyWithWhereWithoutShippingInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutBillingNestedInput = {
    create?: XOR<OrderCreateWithoutBillingInput, OrderUncheckedCreateWithoutBillingInput> | OrderCreateWithoutBillingInput[] | OrderUncheckedCreateWithoutBillingInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBillingInput | OrderCreateOrConnectWithoutBillingInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutBillingInput | OrderUpsertWithWhereUniqueWithoutBillingInput[]
    createMany?: OrderCreateManyBillingInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutBillingInput | OrderUpdateWithWhereUniqueWithoutBillingInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutBillingInput | OrderUpdateManyWithWhereWithoutBillingInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutShippingNestedInput = {
    create?: XOR<OrderCreateWithoutShippingInput, OrderUncheckedCreateWithoutShippingInput> | OrderCreateWithoutShippingInput[] | OrderUncheckedCreateWithoutShippingInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutShippingInput | OrderCreateOrConnectWithoutShippingInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutShippingInput | OrderUpsertWithWhereUniqueWithoutShippingInput[]
    createMany?: OrderCreateManyShippingInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutShippingInput | OrderUpdateWithWhereUniqueWithoutShippingInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutShippingInput | OrderUpdateManyWithWhereWithoutShippingInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumProductStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[]
    notIn?: $Enums.ProductStatus[]
    not?: NestedEnumProductStatusFilter<$PrismaModel> | $Enums.ProductStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumProductStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[]
    notIn?: $Enums.ProductStatus[]
    not?: NestedEnumProductStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProductStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductStatusFilter<$PrismaModel>
    _max?: NestedEnumProductStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumAddressTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AddressType | EnumAddressTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AddressType[]
    notIn?: $Enums.AddressType[]
    not?: NestedEnumAddressTypeFilter<$PrismaModel> | $Enums.AddressType
  }

  export type NestedEnumAddressTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AddressType | EnumAddressTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AddressType[]
    notIn?: $Enums.AddressType[]
    not?: NestedEnumAddressTypeWithAggregatesFilter<$PrismaModel> | $Enums.AddressType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAddressTypeFilter<$PrismaModel>
    _max?: NestedEnumAddressTypeFilter<$PrismaModel>
  }

  export type AddressCreateWithoutUserInput = {
    type?: $Enums.AddressType
    addressLine1: string
    addressLine2?: string | null
    city: string
    county?: string | null
    zipCode: string
    state: string
    country: string
    billingOrders?: OrderCreateNestedManyWithoutBillingInput
    shippingOrders?: OrderCreateNestedManyWithoutShippingInput
  }

  export type AddressUncheckedCreateWithoutUserInput = {
    id?: number
    type?: $Enums.AddressType
    addressLine1: string
    addressLine2?: string | null
    city: string
    county?: string | null
    zipCode: string
    state: string
    country: string
    billingOrders?: OrderUncheckedCreateNestedManyWithoutBillingInput
    shippingOrders?: OrderUncheckedCreateNestedManyWithoutShippingInput
  }

  export type AddressCreateOrConnectWithoutUserInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type AddressCreateManyUserInputEnvelope = {
    data: AddressCreateManyUserInput | AddressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutUserInput = {
    ebayOrderId: number
    status?: $Enums.OrderStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    paymentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    billing: AddressCreateNestedOneWithoutBillingOrdersInput
    shipping: AddressCreateNestedOneWithoutShippingOrdersInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: number
    ebayOrderId: number
    status?: $Enums.OrderStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    paymentId?: string | null
    billingId: number
    shippingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
  }

  export type AddressUpdateManyWithWhereWithoutUserInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutUserInput>
  }

  export type AddressScalarWhereInput = {
    AND?: AddressScalarWhereInput | AddressScalarWhereInput[]
    OR?: AddressScalarWhereInput[]
    NOT?: AddressScalarWhereInput | AddressScalarWhereInput[]
    id?: IntFilter<"Address"> | number
    userId?: IntFilter<"Address"> | number
    type?: EnumAddressTypeFilter<"Address"> | $Enums.AddressType
    addressLine1?: StringFilter<"Address"> | string
    addressLine2?: StringNullableFilter<"Address"> | string | null
    city?: StringFilter<"Address"> | string
    county?: StringNullableFilter<"Address"> | string | null
    zipCode?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    userId?: IntFilter<"Order"> | number
    ebayOrderId?: IntFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    totalAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    paymentId?: StringNullableFilter<"Order"> | string | null
    billingId?: IntFilter<"Order"> | number
    shippingId?: IntFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type ProductCreateWithoutCategoryInput = {
    shopifyProductId: number
    title: string
    description: string
    sku: string
    shopifyPrice: Decimal | DecimalJsLike | number | string
    shopifyComparePrice: Decimal | DecimalJsLike | number | string
    stock: number
    status?: $Enums.ProductStatus
    productOptions?: NullableJsonNullValueInput | InputJsonValue
    brand?: string | null
    mpn?: string | null
    isbn?: string | null
    ean?: string | null
    package?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
    productImages?: ProductImageCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number
    shopifyProductId: number
    title: string
    description: string
    sku: string
    shopifyPrice: Decimal | DecimalJsLike | number | string
    shopifyComparePrice: Decimal | DecimalJsLike | number | string
    stock: number
    status?: $Enums.ProductStatus
    productOptions?: NullableJsonNullValueInput | InputJsonValue
    brand?: string | null
    mpn?: string | null
    isbn?: string | null
    ean?: string | null
    package?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    productImages?: ProductImageUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    shopifyProductId?: IntFilter<"Product"> | number
    title?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    sku?: StringFilter<"Product"> | string
    shopifyPrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    shopifyComparePrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"Product"> | number
    status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    categoryId?: IntFilter<"Product"> | number
    productOptions?: JsonNullableFilter<"Product">
    brand?: StringNullableFilter<"Product"> | string | null
    mpn?: StringNullableFilter<"Product"> | string | null
    isbn?: StringNullableFilter<"Product"> | string | null
    ean?: StringNullableFilter<"Product"> | string | null
    package?: JsonNullableFilter<"Product">
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type SyncProductCreateWithoutCategoryInput = {
    productId: number
    sku: string
    ebayPrice: Decimal | DecimalJsLike | number | string
    ebayComparePrice: Decimal | DecimalJsLike | number | string
    stock: number
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SyncProductUncheckedCreateWithoutCategoryInput = {
    id?: number
    productId: number
    sku: string
    ebayPrice: Decimal | DecimalJsLike | number | string
    ebayComparePrice: Decimal | DecimalJsLike | number | string
    stock: number
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SyncProductCreateOrConnectWithoutCategoryInput = {
    where: SyncProductWhereUniqueInput
    create: XOR<SyncProductCreateWithoutCategoryInput, SyncProductUncheckedCreateWithoutCategoryInput>
  }

  export type SyncProductCreateManyCategoryInputEnvelope = {
    data: SyncProductCreateManyCategoryInput | SyncProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type SyncProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SyncProductWhereUniqueInput
    update: XOR<SyncProductUpdateWithoutCategoryInput, SyncProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<SyncProductCreateWithoutCategoryInput, SyncProductUncheckedCreateWithoutCategoryInput>
  }

  export type SyncProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SyncProductWhereUniqueInput
    data: XOR<SyncProductUpdateWithoutCategoryInput, SyncProductUncheckedUpdateWithoutCategoryInput>
  }

  export type SyncProductUpdateManyWithWhereWithoutCategoryInput = {
    where: SyncProductScalarWhereInput
    data: XOR<SyncProductUpdateManyMutationInput, SyncProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type SyncProductScalarWhereInput = {
    AND?: SyncProductScalarWhereInput | SyncProductScalarWhereInput[]
    OR?: SyncProductScalarWhereInput[]
    NOT?: SyncProductScalarWhereInput | SyncProductScalarWhereInput[]
    id?: IntFilter<"SyncProduct"> | number
    productId?: IntFilter<"SyncProduct"> | number
    sku?: StringFilter<"SyncProduct"> | string
    ebayPrice?: DecimalFilter<"SyncProduct"> | Decimal | DecimalJsLike | number | string
    ebayComparePrice?: DecimalFilter<"SyncProduct"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"SyncProduct"> | number
    status?: EnumProductStatusFilter<"SyncProduct"> | $Enums.ProductStatus
    categoryId?: IntFilter<"SyncProduct"> | number
    createdAt?: DateTimeFilter<"SyncProduct"> | Date | string
    updatedAt?: DateTimeFilter<"SyncProduct"> | Date | string
  }

  export type ShopifyCategoryCreateWithoutProductsInput = {
    shopifyCategoryId: number
    name: string
    parentId: number
    status?: $Enums.Status
  }

  export type ShopifyCategoryUncheckedCreateWithoutProductsInput = {
    id?: number
    shopifyCategoryId: number
    name: string
    parentId: number
    status?: $Enums.Status
  }

  export type ShopifyCategoryCreateOrConnectWithoutProductsInput = {
    where: ShopifyCategoryWhereUniqueInput
    create: XOR<ShopifyCategoryCreateWithoutProductsInput, ShopifyCategoryUncheckedCreateWithoutProductsInput>
  }

  export type OrderItemCreateWithoutProductInput = {
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    totalPrice: Decimal | DecimalJsLike | number | string
    productVariants?: NullableJsonNullValueInput | InputJsonValue
    order: OrderCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutProductInput = {
    id?: number
    orderId: number
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    totalPrice: Decimal | DecimalJsLike | number | string
    productVariants?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderItemCreateOrConnectWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemCreateManyProductInputEnvelope = {
    data: OrderItemCreateManyProductInput | OrderItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductImageCreateWithoutProductInput = {
    imageUrl: string
    position: number
    isDefault?: boolean
  }

  export type ProductImageUncheckedCreateWithoutProductInput = {
    id?: number
    imageUrl: string
    position: number
    isDefault?: boolean
  }

  export type ProductImageCreateOrConnectWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    create: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput>
  }

  export type ProductImageCreateManyProductInputEnvelope = {
    data: ProductImageCreateManyProductInput | ProductImageCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ShopifyCategoryUpsertWithoutProductsInput = {
    update: XOR<ShopifyCategoryUpdateWithoutProductsInput, ShopifyCategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<ShopifyCategoryCreateWithoutProductsInput, ShopifyCategoryUncheckedCreateWithoutProductsInput>
    where?: ShopifyCategoryWhereInput
  }

  export type ShopifyCategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: ShopifyCategoryWhereInput
    data: XOR<ShopifyCategoryUpdateWithoutProductsInput, ShopifyCategoryUncheckedUpdateWithoutProductsInput>
  }

  export type ShopifyCategoryUpdateWithoutProductsInput = {
    shopifyCategoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type ShopifyCategoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopifyCategoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type OrderItemUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutProductInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: IntFilter<"OrderItem"> | number
    orderId?: IntFilter<"OrderItem"> | number
    productId?: IntFilter<"OrderItem"> | number
    price?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"OrderItem"> | number
    totalPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    productVariants?: JsonNullableFilter<"OrderItem">
  }

  export type ProductImageUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    update: XOR<ProductImageUpdateWithoutProductInput, ProductImageUncheckedUpdateWithoutProductInput>
    create: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput>
  }

  export type ProductImageUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    data: XOR<ProductImageUpdateWithoutProductInput, ProductImageUncheckedUpdateWithoutProductInput>
  }

  export type ProductImageUpdateManyWithWhereWithoutProductInput = {
    where: ProductImageScalarWhereInput
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductImageScalarWhereInput = {
    AND?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
    OR?: ProductImageScalarWhereInput[]
    NOT?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
    id?: IntFilter<"ProductImage"> | number
    productId?: IntFilter<"ProductImage"> | number
    imageUrl?: StringFilter<"ProductImage"> | string
    position?: IntFilter<"ProductImage"> | number
    isDefault?: BoolFilter<"ProductImage"> | boolean
  }

  export type ProductCreateWithoutProductImagesInput = {
    shopifyProductId: number
    title: string
    description: string
    sku: string
    shopifyPrice: Decimal | DecimalJsLike | number | string
    shopifyComparePrice: Decimal | DecimalJsLike | number | string
    stock: number
    status?: $Enums.ProductStatus
    productOptions?: NullableJsonNullValueInput | InputJsonValue
    brand?: string | null
    mpn?: string | null
    isbn?: string | null
    ean?: string | null
    package?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    category: ShopifyCategoryCreateNestedOneWithoutProductsInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductImagesInput = {
    id?: number
    shopifyProductId: number
    title: string
    description: string
    sku: string
    shopifyPrice: Decimal | DecimalJsLike | number | string
    shopifyComparePrice: Decimal | DecimalJsLike | number | string
    stock: number
    status?: $Enums.ProductStatus
    categoryId: number
    productOptions?: NullableJsonNullValueInput | InputJsonValue
    brand?: string | null
    mpn?: string | null
    isbn?: string | null
    ean?: string | null
    package?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductImagesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductImagesInput, ProductUncheckedCreateWithoutProductImagesInput>
  }

  export type ProductUpsertWithoutProductImagesInput = {
    update: XOR<ProductUpdateWithoutProductImagesInput, ProductUncheckedUpdateWithoutProductImagesInput>
    create: XOR<ProductCreateWithoutProductImagesInput, ProductUncheckedCreateWithoutProductImagesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductImagesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductImagesInput, ProductUncheckedUpdateWithoutProductImagesInput>
  }

  export type ProductUpdateWithoutProductImagesInput = {
    shopifyProductId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    shopifyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shopifyComparePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    productOptions?: NullableJsonNullValueInput | InputJsonValue
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    mpn?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    ean?: NullableStringFieldUpdateOperationsInput | string | null
    package?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: ShopifyCategoryUpdateOneRequiredWithoutProductsNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopifyProductId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    shopifyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shopifyComparePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    categoryId?: IntFieldUpdateOperationsInput | number
    productOptions?: NullableJsonNullValueInput | InputJsonValue
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    mpn?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    ean?: NullableStringFieldUpdateOperationsInput | string | null
    package?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type EbayCategoryCreateWithoutProductsInput = {
    ebayCategoryId: number
    name: string
    parentId: number
    status?: $Enums.Status
  }

  export type EbayCategoryUncheckedCreateWithoutProductsInput = {
    id?: number
    ebayCategoryId: number
    name: string
    parentId: number
    status?: $Enums.Status
  }

  export type EbayCategoryCreateOrConnectWithoutProductsInput = {
    where: EbayCategoryWhereUniqueInput
    create: XOR<EbayCategoryCreateWithoutProductsInput, EbayCategoryUncheckedCreateWithoutProductsInput>
  }

  export type EbayCategoryUpsertWithoutProductsInput = {
    update: XOR<EbayCategoryUpdateWithoutProductsInput, EbayCategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<EbayCategoryCreateWithoutProductsInput, EbayCategoryUncheckedCreateWithoutProductsInput>
    where?: EbayCategoryWhereInput
  }

  export type EbayCategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: EbayCategoryWhereInput
    data: XOR<EbayCategoryUpdateWithoutProductsInput, EbayCategoryUncheckedUpdateWithoutProductsInput>
  }

  export type EbayCategoryUpdateWithoutProductsInput = {
    ebayCategoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type EbayCategoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    ebayCategoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type OrderItemCreateWithoutOrderInput = {
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    totalPrice: Decimal | DecimalJsLike | number | string
    productVariants?: NullableJsonNullValueInput | InputJsonValue
    product: ProductCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: number
    productId: number
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    totalPrice: Decimal | DecimalJsLike | number | string
    productVariants?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutOrdersInput = {
    roleId: number
    firstName: string
    lastName: string
    email: string
    password: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: number
    roleId: number
    firstName: string
    lastName: string
    email: string
    password: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type AddressCreateWithoutBillingOrdersInput = {
    type?: $Enums.AddressType
    addressLine1: string
    addressLine2?: string | null
    city: string
    county?: string | null
    zipCode: string
    state: string
    country: string
    user: UserCreateNestedOneWithoutAddressInput
    shippingOrders?: OrderCreateNestedManyWithoutShippingInput
  }

  export type AddressUncheckedCreateWithoutBillingOrdersInput = {
    id?: number
    userId: number
    type?: $Enums.AddressType
    addressLine1: string
    addressLine2?: string | null
    city: string
    county?: string | null
    zipCode: string
    state: string
    country: string
    shippingOrders?: OrderUncheckedCreateNestedManyWithoutShippingInput
  }

  export type AddressCreateOrConnectWithoutBillingOrdersInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutBillingOrdersInput, AddressUncheckedCreateWithoutBillingOrdersInput>
  }

  export type AddressCreateWithoutShippingOrdersInput = {
    type?: $Enums.AddressType
    addressLine1: string
    addressLine2?: string | null
    city: string
    county?: string | null
    zipCode: string
    state: string
    country: string
    user: UserCreateNestedOneWithoutAddressInput
    billingOrders?: OrderCreateNestedManyWithoutBillingInput
  }

  export type AddressUncheckedCreateWithoutShippingOrdersInput = {
    id?: number
    userId: number
    type?: $Enums.AddressType
    addressLine1: string
    addressLine2?: string | null
    city: string
    county?: string | null
    zipCode: string
    state: string
    country: string
    billingOrders?: OrderUncheckedCreateNestedManyWithoutBillingInput
  }

  export type AddressCreateOrConnectWithoutShippingOrdersInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutShippingOrdersInput, AddressUncheckedCreateWithoutShippingOrdersInput>
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AddressUpsertWithoutBillingOrdersInput = {
    update: XOR<AddressUpdateWithoutBillingOrdersInput, AddressUncheckedUpdateWithoutBillingOrdersInput>
    create: XOR<AddressCreateWithoutBillingOrdersInput, AddressUncheckedCreateWithoutBillingOrdersInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutBillingOrdersInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutBillingOrdersInput, AddressUncheckedUpdateWithoutBillingOrdersInput>
  }

  export type AddressUpdateWithoutBillingOrdersInput = {
    type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    county?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAddressNestedInput
    shippingOrders?: OrderUpdateManyWithoutShippingNestedInput
  }

  export type AddressUncheckedUpdateWithoutBillingOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    county?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    shippingOrders?: OrderUncheckedUpdateManyWithoutShippingNestedInput
  }

  export type AddressUpsertWithoutShippingOrdersInput = {
    update: XOR<AddressUpdateWithoutShippingOrdersInput, AddressUncheckedUpdateWithoutShippingOrdersInput>
    create: XOR<AddressCreateWithoutShippingOrdersInput, AddressUncheckedCreateWithoutShippingOrdersInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutShippingOrdersInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutShippingOrdersInput, AddressUncheckedUpdateWithoutShippingOrdersInput>
  }

  export type AddressUpdateWithoutShippingOrdersInput = {
    type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    county?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAddressNestedInput
    billingOrders?: OrderUpdateManyWithoutBillingNestedInput
  }

  export type AddressUncheckedUpdateWithoutShippingOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    county?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    billingOrders?: OrderUncheckedUpdateManyWithoutBillingNestedInput
  }

  export type ProductCreateWithoutOrderItemsInput = {
    shopifyProductId: number
    title: string
    description: string
    sku: string
    shopifyPrice: Decimal | DecimalJsLike | number | string
    shopifyComparePrice: Decimal | DecimalJsLike | number | string
    stock: number
    status?: $Enums.ProductStatus
    productOptions?: NullableJsonNullValueInput | InputJsonValue
    brand?: string | null
    mpn?: string | null
    isbn?: string | null
    ean?: string | null
    package?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    category: ShopifyCategoryCreateNestedOneWithoutProductsInput
    productImages?: ProductImageCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrderItemsInput = {
    id?: number
    shopifyProductId: number
    title: string
    description: string
    sku: string
    shopifyPrice: Decimal | DecimalJsLike | number | string
    shopifyComparePrice: Decimal | DecimalJsLike | number | string
    stock: number
    status?: $Enums.ProductStatus
    categoryId: number
    productOptions?: NullableJsonNullValueInput | InputJsonValue
    brand?: string | null
    mpn?: string | null
    isbn?: string | null
    ean?: string | null
    package?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    productImages?: ProductImageUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrderItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrderCreateWithoutOrderItemsInput = {
    ebayOrderId: number
    status?: $Enums.OrderStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    paymentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    billing: AddressCreateNestedOneWithoutBillingOrdersInput
    shipping: AddressCreateNestedOneWithoutShippingOrdersInput
  }

  export type OrderUncheckedCreateWithoutOrderItemsInput = {
    id?: number
    userId: number
    ebayOrderId: number
    status?: $Enums.OrderStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    paymentId?: string | null
    billingId: number
    shippingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutOrderItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
  }

  export type ProductUpsertWithoutOrderItemsInput = {
    update: XOR<ProductUpdateWithoutOrderItemsInput, ProductUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrderItemsInput, ProductUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProductUpdateWithoutOrderItemsInput = {
    shopifyProductId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    shopifyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shopifyComparePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    productOptions?: NullableJsonNullValueInput | InputJsonValue
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    mpn?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    ean?: NullableStringFieldUpdateOperationsInput | string | null
    package?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: ShopifyCategoryUpdateOneRequiredWithoutProductsNestedInput
    productImages?: ProductImageUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopifyProductId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    shopifyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shopifyComparePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    categoryId?: IntFieldUpdateOperationsInput | number
    productOptions?: NullableJsonNullValueInput | InputJsonValue
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    mpn?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    ean?: NullableStringFieldUpdateOperationsInput | string | null
    package?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productImages?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type OrderUpsertWithoutOrderItemsInput = {
    update: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderUpdateWithoutOrderItemsInput = {
    ebayOrderId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    billing?: AddressUpdateOneRequiredWithoutBillingOrdersNestedInput
    shipping?: AddressUpdateOneRequiredWithoutShippingOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ebayOrderId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    billingId?: IntFieldUpdateOperationsInput | number
    shippingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutAddressInput = {
    roleId: number
    firstName: string
    lastName: string
    email: string
    password: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAddressInput = {
    id?: number
    roleId: number
    firstName: string
    lastName: string
    email: string
    password: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAddressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
  }

  export type OrderCreateWithoutBillingInput = {
    ebayOrderId: number
    status?: $Enums.OrderStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    paymentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    user: UserCreateNestedOneWithoutOrdersInput
    shipping: AddressCreateNestedOneWithoutShippingOrdersInput
  }

  export type OrderUncheckedCreateWithoutBillingInput = {
    id?: number
    userId: number
    ebayOrderId: number
    status?: $Enums.OrderStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    paymentId?: string | null
    shippingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutBillingInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutBillingInput, OrderUncheckedCreateWithoutBillingInput>
  }

  export type OrderCreateManyBillingInputEnvelope = {
    data: OrderCreateManyBillingInput | OrderCreateManyBillingInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutShippingInput = {
    ebayOrderId: number
    status?: $Enums.OrderStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    paymentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    user: UserCreateNestedOneWithoutOrdersInput
    billing: AddressCreateNestedOneWithoutBillingOrdersInput
  }

  export type OrderUncheckedCreateWithoutShippingInput = {
    id?: number
    userId: number
    ebayOrderId: number
    status?: $Enums.OrderStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    paymentId?: string | null
    billingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutShippingInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutShippingInput, OrderUncheckedCreateWithoutShippingInput>
  }

  export type OrderCreateManyShippingInputEnvelope = {
    data: OrderCreateManyShippingInput | OrderCreateManyShippingInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAddressInput = {
    update: XOR<UserUpdateWithoutAddressInput, UserUncheckedUpdateWithoutAddressInput>
    create: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAddressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAddressInput, UserUncheckedUpdateWithoutAddressInput>
  }

  export type UserUpdateWithoutAddressInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutBillingInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutBillingInput, OrderUncheckedUpdateWithoutBillingInput>
    create: XOR<OrderCreateWithoutBillingInput, OrderUncheckedCreateWithoutBillingInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutBillingInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutBillingInput, OrderUncheckedUpdateWithoutBillingInput>
  }

  export type OrderUpdateManyWithWhereWithoutBillingInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutBillingInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutShippingInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutShippingInput, OrderUncheckedUpdateWithoutShippingInput>
    create: XOR<OrderCreateWithoutShippingInput, OrderUncheckedCreateWithoutShippingInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutShippingInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutShippingInput, OrderUncheckedUpdateWithoutShippingInput>
  }

  export type OrderUpdateManyWithWhereWithoutShippingInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutShippingInput>
  }

  export type AddressCreateManyUserInput = {
    id?: number
    type?: $Enums.AddressType
    addressLine1: string
    addressLine2?: string | null
    city: string
    county?: string | null
    zipCode: string
    state: string
    country: string
  }

  export type OrderCreateManyUserInput = {
    id?: number
    ebayOrderId: number
    status?: $Enums.OrderStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    paymentId?: string | null
    billingId: number
    shippingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUpdateWithoutUserInput = {
    type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    county?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    billingOrders?: OrderUpdateManyWithoutBillingNestedInput
    shippingOrders?: OrderUpdateManyWithoutShippingNestedInput
  }

  export type AddressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    county?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    billingOrders?: OrderUncheckedUpdateManyWithoutBillingNestedInput
    shippingOrders?: OrderUncheckedUpdateManyWithoutShippingNestedInput
  }

  export type AddressUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    county?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUpdateWithoutUserInput = {
    ebayOrderId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    billing?: AddressUpdateOneRequiredWithoutBillingOrdersNestedInput
    shipping?: AddressUpdateOneRequiredWithoutShippingOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ebayOrderId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    billingId?: IntFieldUpdateOperationsInput | number
    shippingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ebayOrderId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    billingId?: IntFieldUpdateOperationsInput | number
    shippingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: number
    shopifyProductId: number
    title: string
    description: string
    sku: string
    shopifyPrice: Decimal | DecimalJsLike | number | string
    shopifyComparePrice: Decimal | DecimalJsLike | number | string
    stock: number
    status?: $Enums.ProductStatus
    productOptions?: NullableJsonNullValueInput | InputJsonValue
    brand?: string | null
    mpn?: string | null
    isbn?: string | null
    ean?: string | null
    package?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    shopifyProductId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    shopifyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shopifyComparePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    productOptions?: NullableJsonNullValueInput | InputJsonValue
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    mpn?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    ean?: NullableStringFieldUpdateOperationsInput | string | null
    package?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
    productImages?: ProductImageUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopifyProductId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    shopifyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shopifyComparePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    productOptions?: NullableJsonNullValueInput | InputJsonValue
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    mpn?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    ean?: NullableStringFieldUpdateOperationsInput | string | null
    package?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    productImages?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopifyProductId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    shopifyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shopifyComparePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    productOptions?: NullableJsonNullValueInput | InputJsonValue
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    mpn?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    ean?: NullableStringFieldUpdateOperationsInput | string | null
    package?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncProductCreateManyCategoryInput = {
    id?: number
    productId: number
    sku: string
    ebayPrice: Decimal | DecimalJsLike | number | string
    ebayComparePrice: Decimal | DecimalJsLike | number | string
    stock: number
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SyncProductUpdateWithoutCategoryInput = {
    productId?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    ebayPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ebayComparePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    ebayPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ebayComparePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    ebayPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ebayComparePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyProductInput = {
    id?: number
    orderId: number
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    totalPrice: Decimal | DecimalJsLike | number | string
    productVariants?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProductImageCreateManyProductInput = {
    id?: number
    imageUrl: string
    position: number
    isDefault?: boolean
  }

  export type OrderItemUpdateWithoutProductInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productVariants?: NullableJsonNullValueInput | InputJsonValue
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productVariants?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderItemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productVariants?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProductImageUpdateWithoutProductInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductImageUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductImageUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderItemCreateManyOrderInput = {
    id?: number
    productId: number
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    totalPrice: Decimal | DecimalJsLike | number | string
    productVariants?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderItemUpdateWithoutOrderInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productVariants?: NullableJsonNullValueInput | InputJsonValue
    product?: ProductUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productVariants?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productVariants?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderCreateManyBillingInput = {
    id?: number
    userId: number
    ebayOrderId: number
    status?: $Enums.OrderStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    paymentId?: string | null
    shippingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyShippingInput = {
    id?: number
    userId: number
    ebayOrderId: number
    status?: $Enums.OrderStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    paymentId?: string | null
    billingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutBillingInput = {
    ebayOrderId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    shipping?: AddressUpdateOneRequiredWithoutShippingOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutBillingInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ebayOrderId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    shippingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutBillingInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ebayOrderId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    shippingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutShippingInput = {
    ebayOrderId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    billing?: AddressUpdateOneRequiredWithoutBillingOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutShippingInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ebayOrderId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    billingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutShippingInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ebayOrderId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    billingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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