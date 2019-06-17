var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova, checkAvailability, cordovaInstance, instancePropertyGet, instancePropertySet } from '@ionic-native/core';
var SQLiteObject = /** @class */ (function () {
    function SQLiteObject(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    SQLiteObject.prototype.addTransaction = function (transaction) { return cordovaInstance(this, "addTransaction", { "sync": true }, arguments); };
    SQLiteObject.prototype.transaction = function (fn) { return cordovaInstance(this, "transaction", { "successIndex": 2, "errorIndex": 1 }, arguments); };
    SQLiteObject.prototype.readTransaction = function (fn) { return cordovaInstance(this, "readTransaction", {}, arguments); };
    SQLiteObject.prototype.startNextTransaction = function () { return cordovaInstance(this, "startNextTransaction", { "sync": true }, arguments); };
    SQLiteObject.prototype.open = function () { return cordovaInstance(this, "open", {}, arguments); };
    SQLiteObject.prototype.close = function () { return cordovaInstance(this, "close", {}, arguments); };
    SQLiteObject.prototype.executeSql = function (statement, params) { return cordovaInstance(this, "executeSql", {}, arguments); };
    SQLiteObject.prototype.sqlBatch = function (sqlStatements) { return cordovaInstance(this, "sqlBatch", {}, arguments); };
    SQLiteObject.prototype.abortallPendingTransactions = function () { return cordovaInstance(this, "abortallPendingTransactions", { "sync": true }, arguments); };
    Object.defineProperty(SQLiteObject.prototype, "databaseFeatures", {
        get: function () { return instancePropertyGet(this, "databaseFeatures"); },
        set: function (value) { instancePropertySet(this, "databaseFeatures", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SQLiteObject.prototype, "openDBs", {
        get: function () { return instancePropertyGet(this, "openDBs"); },
        set: function (value) { instancePropertySet(this, "openDBs", value); },
        enumerable: true,
        configurable: true
    });
    return SQLiteObject;
}());
export { SQLiteObject };
var SQLiteOriginal = /** @class */ (function (_super) {
    __extends(SQLiteOriginal, _super);
    function SQLiteOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SQLiteOriginal.prototype.create = function (config) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return new Promise(function (resolve, reject) {
                    sqlitePlugin.openDatabase(config, function (db) { return resolve(new SQLiteObject(db)); }, reject);
                });
            }
        })();
    };
    SQLiteOriginal.prototype.echoTest = function () { return cordova(this, "echoTest", {}, arguments); };
    SQLiteOriginal.prototype.selfTest = function () { return cordova(this, "selfTest", {}, arguments); };
    SQLiteOriginal.prototype.deleteDatabase = function (config) { return cordova(this, "deleteDatabase", {}, arguments); };
    SQLiteOriginal.pluginName = "SQLite";
    SQLiteOriginal.pluginRef = "sqlitePlugin";
    SQLiteOriginal.plugin = "cordova-sqlite-storage";
    SQLiteOriginal.repo = "https://github.com/litehelpers/Cordova-sqlite-storage";
    SQLiteOriginal.platforms = ["Android", "iOS", "macOS", "Windows"];
    return SQLiteOriginal;
}(IonicNativePlugin));
var SQLite = new SQLiteOriginal();
export { SQLite };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NxbGl0ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw0R0FPTixNQUFNLG9CQUFvQixDQUFDOztJQXlEMUIsc0JBQW1CLGVBQW9CO1FBQXBCLG9CQUFlLEdBQWYsZUFBZSxDQUFLO0lBQUcsQ0FBQztJQVEzQyxxQ0FBYyxhQUFDLFdBQTRDO0lBVTNELGtDQUFXLGFBQUMsRUFBK0I7SUFTM0Msc0NBQWUsYUFBQyxFQUFtQztJQU9uRCwyQ0FBb0I7SUFNcEIsMkJBQUk7SUFRSiw0QkFBSztJQVNMLGlDQUFVLGFBQUMsU0FBaUIsRUFBRSxNQUFjO0lBUzVDLCtCQUFRLGFBQUMsYUFBMEM7SUFPbkQsa0RBQTJCOzBCQXZFUCwwQ0FBZ0I7Ozs7OzswQkFDaEIsaUNBQU87Ozs7Ozt1QkFwRTdCOzs7O0lBMkw0QiwwQkFBaUI7Ozs7SUFVM0MsdUJBQU0sYUFBQyxNQUE0Qjs7O21EQUF5QjtnQkFDMUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO29CQUNqQyxZQUFZLENBQUMsWUFBWSxDQUN2QixNQUFNLEVBQ04sVUFBQyxFQUFPLElBQUssT0FBQSxPQUFPLENBQUMsSUFBSSxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBN0IsQ0FBNkIsRUFDMUMsTUFBTSxDQUNQLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLENBQUM7YUFDSjs7O0lBT0QseUJBQVE7SUFTUix5QkFBUTtJQVVSLCtCQUFjLGFBQUMsTUFBNEI7Ozs7OztpQkF2TzdDO0VBMkw0QixpQkFBaUI7U0FBaEMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvcmRvdmEsXG4gIENvcmRvdmFDaGVjayxcbiAgQ29yZG92YUluc3RhbmNlLFxuICBJbnN0YW5jZVByb3BlcnR5LFxuICBJb25pY05hdGl2ZVBsdWdpbixcbiAgUGx1Z2luXG59IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmRlY2xhcmUgY29uc3Qgc3FsaXRlUGx1Z2luOiBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1FMaXRlRGF0YWJhc2VDb25maWcge1xuICAvKipcbiAgICogTmFtZSBvZiB0aGUgZGF0YWJhc2UuIEV4YW1wbGU6ICdteS5kYidcbiAgICovXG4gIG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIExvY2F0aW9uIG9mIHRoZSBkYXRhYmFzZS4gRXhhbXBsZTogJ2RlZmF1bHQnXG4gICAqL1xuICBsb2NhdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIGlPUyBEYXRhYmFzZSBMb2NhdGlvbi4gRXhhbXBsZTogJ0xpYnJhcnknXG4gICAqL1xuICBpb3NEYXRhYmFzZUxvY2F0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICogc3VwcG9ydCBvcGVuaW5nIHByZS1maWxsZWQgZGF0YWJhc2VzIHdpdGggaHR0cHM6Ly9naXRodWIuY29tL2xpdGVoZWxwZXJzL2NvcmRvdmEtc3FsaXRlLWV4dFxuICAgKi9cbiAgY3JlYXRlRnJvbUxvY2F0aW9uPzogbnVtYmVyO1xuICAvKipcbiAgICogc3VwcG9ydCBlbmNyeXB0ZWQgZGF0YWJhc2VzIHdpdGggaHR0cHM6Ly9naXRodWIuY29tL2xpdGVoZWxwZXJzL0NvcmRvdmEtc3FsY2lwaGVyLWFkYXB0ZXJcbiAgICovXG4gIGtleT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGJUcmFuc2FjdGlvbiB7XG4gIGV4ZWN1dGVTcWw6IChcbiAgICBzcWw6IGFueSxcbiAgICB2YWx1ZXM/OiBhbnlbXSxcbiAgICBzdWNjZXNzPzogRnVuY3Rpb24sXG4gICAgZXJyb3I/OiBGdW5jdGlvblxuICApID0+IHZvaWQ7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNRTGl0ZVRyYW5zYWN0aW9uIGV4dGVuZHMgRGJUcmFuc2FjdGlvbiB7XG4gIHN0YXJ0OiAoKSA9PiB2b2lkO1xuICBhZGRTdGF0ZW1lbnQ6IERiVHJhbnNhY3Rpb25bJ2V4ZWN1dGVTcWwnXTtcbiAgaGFuZGxlU3RhdGVtZW50U3VjY2VzczogKGhhbmRsZXI6IEZ1bmN0aW9uLCByZXNwb25zZTogYW55KSA9PiB2b2lkO1xuICBoYW5kbGVTdGF0ZW1lbnRGYWlsdXJlOiAoaGFuZGxlcjogRnVuY3Rpb24sIHJlc3BvbnNlOiBhbnkpID0+IHZvaWQ7XG4gIHJ1bjogKCkgPT4gdm9pZDtcbiAgYWJvcnQ6ICh0eEZhaWx1cmU6IGFueSkgPT4gdm9pZDtcbiAgZmluaXNoOiAoKSA9PiB2b2lkO1xuICBhYm9ydEZyb21ROiAoc3FsZXJyb3I6IGFueSkgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBTUUxpdGVPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX29iamVjdEluc3RhbmNlOiBhbnkpIHt9XG5cbiAgQEluc3RhbmNlUHJvcGVydHkoKSBkYXRhYmFzZUZlYXR1cmVzOiB7IGlzU1FMaXRlUGx1Z2luRGF0YWJhc2U6IGJvb2xlYW4gfTtcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBvcGVuREJzOiBhbnk7XG5cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgc3luYzogdHJ1ZVxuICB9KVxuICBhZGRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogKHR4OiBTUUxpdGVUcmFuc2FjdGlvbikgPT4gdm9pZCk6IHZvaWQge31cblxuICAvKipcbiAgICogQHBhcmFtIGZuIHtGdW5jdGlvbn1cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIHN1Y2Nlc3NJbmRleDogMixcbiAgICBlcnJvckluZGV4OiAxXG4gIH0pXG4gIHRyYW5zYWN0aW9uKGZuOiAodHg6IERiVHJhbnNhY3Rpb24pID0+IHZvaWQpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gZm4ge0Z1bmN0aW9ufVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHJlYWRUcmFuc2FjdGlvbihmbjogKHR4OiBTUUxpdGVUcmFuc2FjdGlvbikgPT4gdm9pZCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgc3luYzogdHJ1ZVxuICB9KVxuICBzdGFydE5leHRUcmFuc2FjdGlvbigpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgb3BlbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGNsb3NlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGUgU1FMIG9uIHRoZSBvcGVuZWQgZGF0YWJhc2UuIE5vdGUsIHlvdSBtdXN0IGNhbGwgYGNyZWF0ZWAgZmlyc3QsIGFuZFxuICAgKiBlbnN1cmUgaXQgcmVzb2x2ZWQgYW5kIHN1Y2Nlc3NmdWxseSBvcGVuZWQgdGhlIGRhdGFiYXNlLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGV4ZWN1dGVTcWwoc3RhdGVtZW50OiBzdHJpbmcsIHBhcmFtcz86IGFueVtdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHNxbFN0YXRlbWVudHMge3N0cmluZ1tdIHwgc3RyaW5nW11bXSB8IGFueVtdfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHNxbEJhdGNoKHNxbFN0YXRlbWVudHM6IChzdHJpbmcgfCBzdHJpbmdbXSB8IGFueSlbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgc3luYzogdHJ1ZVxuICB9KVxuICBhYm9ydGFsbFBlbmRpbmdUcmFuc2FjdGlvbnMoKTogdm9pZCB7fVxufVxuXG4vKipcbiAqIEBuYW1lIFNRTGl0ZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWNjZXNzIFNRTGl0ZSBkYXRhYmFzZXMgb24gdGhlIGRldmljZS5cbiAqXG4gKiBAdXNhZ2VcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTUUxpdGUsIFNRTGl0ZU9iamVjdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3FsaXRlL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzcWxpdGU6IFNRTGl0ZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5zcWxpdGUuY3JlYXRlKHtcbiAqICAgbmFtZTogJ2RhdGEuZGInLFxuICogICBsb2NhdGlvbjogJ2RlZmF1bHQnXG4gKiB9KVxuICogICAudGhlbigoZGI6IFNRTGl0ZU9iamVjdCkgPT4ge1xuICpcbiAqXG4gKiAgICAgZGIuZXhlY3V0ZVNxbCgnY3JlYXRlIHRhYmxlIGRhbmNlTW92ZXMobmFtZSBWQVJDSEFSKDMyKSknLCBbXSlcbiAqICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdFeGVjdXRlZCBTUUwnKSlcbiAqICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcbiAqXG4gKlxuICogICB9KVxuICogICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gKlxuICogYGBgXG4gKlxuICogQGNsYXNzZXNcbiAqIFNRTGl0ZU9iamVjdFxuICogQGludGVyZmFjZXNcbiAqIFNRTGl0ZURhdGFiYXNlQ29uZmlnXG4gKiBTUUxpdGVUcmFuc2FjdGlvblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NRTGl0ZScsXG4gIHBsdWdpblJlZjogJ3NxbGl0ZVBsdWdpbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtc3FsaXRlLXN0b3JhZ2UnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2xpdGVoZWxwZXJzL0NvcmRvdmEtc3FsaXRlLXN0b3JhZ2UnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnbWFjT1MnLCAnV2luZG93cyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNRTGl0ZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIE9wZW4gb3IgY3JlYXRlIGEgU1FMaXRlIGRhdGFiYXNlIGZpbGUuXG4gICAqXG4gICAqIFNlZSB0aGUgcGx1Z2luIGRvY3MgZm9yIGFuIGV4cGxhbmF0aW9uIG9mIGFsbCBvcHRpb25zOiBodHRwczovL2dpdGh1Yi5jb20vbGl0ZWhlbHBlcnMvQ29yZG92YS1zcWxpdGUtc3RvcmFnZSNvcGVuaW5nLWEtZGF0YWJhc2VcbiAgICpcbiAgICogQHBhcmFtIGNvbmZpZyB7U1FMaXRlRGF0YWJhc2VDb25maWd9IGRhdGFiYXNlIGNvbmZpZ3VyYXRpb25cbiAgICogQHJldHVybiBQcm9taXNlPFNRTGl0ZU9iamVjdD5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBjcmVhdGUoY29uZmlnOiBTUUxpdGVEYXRhYmFzZUNvbmZpZyk6IFByb21pc2U8U1FMaXRlT2JqZWN0PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNxbGl0ZVBsdWdpbi5vcGVuRGF0YWJhc2UoXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgKGRiOiBhbnkpID0+IHJlc29sdmUobmV3IFNRTGl0ZU9iamVjdChkYikpLFxuICAgICAgICByZWplY3RcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZ5IHRoYXQgYm90aCB0aGUgSmF2YXNjcmlwdCBhbmQgbmF0aXZlIHBhcnQgb2YgdGhpcyBwbHVnaW4gYXJlIGluc3RhbGxlZCBpbiB5b3VyIGFwcGxpY2F0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGVjaG9UZXN0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEF1dG9tYXRpY2FsbHkgdmVyaWZ5IGJhc2ljIGRhdGFiYXNlIGFjY2VzcyBvcGVyYXRpb25zIGluY2x1ZGluZyBvcGVuaW5nIGEgZGF0YWJhc2VcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2VsZlRlc3QoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGRhdGFiYXNlXG4gICAqIEBwYXJhbSBjb25maWcge1NRTGl0ZURhdGFiYXNlQ29uZmlnfSBkYXRhYmFzZSBjb25maWd1cmF0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRlbGV0ZURhdGFiYXNlKGNvbmZpZzogU1FMaXRlRGF0YWJhc2VDb25maWcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19