import 'egg';

declare module 'egg' {
  /**
   * Powerful Partial, Support adding ? modifier to a mapped property in deep level
   * @example
   * import { PowerPartial, EggAppConfig } from 'egg';
   *
   * // { view: { defaultEngines: string } } => { view?: { defaultEngines?: string } }
   * type EggConfig = PowerPartial<EggAppConfig>
   */
  export type PowerPartial<T> = {
    [U in keyof T]?: T[U] extends object
    ? PowerPartial<T[U]>
    : T[U]
  };
  interface mysql {
    get(tableName: String, find: {}): Promise<Any>

    query(sql: String, values: Any[]): Promise<Any>

    select(tableName: String): Promise<Any>

    insert(tableName: String, values: Any[]): Promise<Any>

    update(tableName: String, values: Any[]): Promise<Any>
  }
  interface Application {
    mysql: mysql;
  }
}