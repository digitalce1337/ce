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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
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
var SQLite = /** @class */ (function (_super) {
    __extends(SQLite, _super);
    function SQLite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SQLite.prototype.create = function (config) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return new Promise(function (resolve, reject) {
                    sqlitePlugin.openDatabase(config, function (db) { return resolve(new SQLiteObject(db)); }, reject);
                });
            }
        })();
    };
    SQLite.prototype.echoTest = function () { return cordova(this, "echoTest", {}, arguments); };
    SQLite.prototype.selfTest = function () { return cordova(this, "selfTest", {}, arguments); };
    SQLite.prototype.deleteDatabase = function (config) { return cordova(this, "deleteDatabase", {}, arguments); };
    SQLite.pluginName = "SQLite";
    SQLite.pluginRef = "sqlitePlugin";
    SQLite.plugin = "cordova-sqlite-storage";
    SQLite.repo = "https://github.com/litehelpers/Cordova-sqlite-storage";
    SQLite.platforms = ["Android", "iOS", "macOS", "Windows"];
    SQLite = __decorate([
        Injectable()
    ], SQLite);
    return SQLite;
}(IonicNativePlugin));
export { SQLite };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NxbGl0ZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw0R0FPTixNQUFNLG9CQUFvQixDQUFDOztJQXlEMUIsc0JBQW1CLGVBQW9CO1FBQXBCLG9CQUFlLEdBQWYsZUFBZSxDQUFLO0lBQUcsQ0FBQztJQVEzQyxxQ0FBYyxhQUFDLFdBQTRDO0lBVTNELGtDQUFXLGFBQUMsRUFBK0I7SUFTM0Msc0NBQWUsYUFBQyxFQUFtQztJQU9uRCwyQ0FBb0I7SUFNcEIsMkJBQUk7SUFRSiw0QkFBSztJQVNMLGlDQUFVLGFBQUMsU0FBaUIsRUFBRSxNQUFjO0lBUzVDLCtCQUFRLGFBQUMsYUFBMEM7SUFPbkQsa0RBQTJCOzBCQXZFUCwwQ0FBZ0I7Ozs7OzswQkFDaEIsaUNBQU87Ozs7Ozt1QkFwRTdCOzs7O0lBMkw0QiwwQkFBaUI7Ozs7SUFVM0MsdUJBQU0sYUFBQyxNQUE0Qjs7O21EQUF5QjtnQkFDMUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO29CQUNqQyxZQUFZLENBQUMsWUFBWSxDQUN2QixNQUFNLEVBQ04sVUFBQyxFQUFPLElBQUssT0FBQSxPQUFPLENBQUMsSUFBSSxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBN0IsQ0FBNkIsRUFDMUMsTUFBTSxDQUNQLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLENBQUM7YUFDSjs7O0lBT0QseUJBQVE7SUFTUix5QkFBUTtJQVVSLCtCQUFjLGFBQUMsTUFBNEI7Ozs7OztJQTVDaEMsTUFBTTtRQURsQixVQUFVLEVBQUU7T0FDQSxNQUFNO2lCQTNMbkI7RUEyTDRCLGlCQUFpQjtTQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29yZG92YSxcbiAgQ29yZG92YUNoZWNrLFxuICBDb3Jkb3ZhSW5zdGFuY2UsXG4gIEluc3RhbmNlUHJvcGVydHksXG4gIElvbmljTmF0aXZlUGx1Z2luLFxuICBQbHVnaW5cbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZGVjbGFyZSBjb25zdCBzcWxpdGVQbHVnaW46IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBTUUxpdGVEYXRhYmFzZUNvbmZpZyB7XG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBkYXRhYmFzZS4gRXhhbXBsZTogJ215LmRiJ1xuICAgKi9cbiAgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogTG9jYXRpb24gb2YgdGhlIGRhdGFiYXNlLiBFeGFtcGxlOiAnZGVmYXVsdCdcbiAgICovXG4gIGxvY2F0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICogaU9TIERhdGFiYXNlIExvY2F0aW9uLiBFeGFtcGxlOiAnTGlicmFyeSdcbiAgICovXG4gIGlvc0RhdGFiYXNlTG9jYXRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBzdXBwb3J0IG9wZW5pbmcgcHJlLWZpbGxlZCBkYXRhYmFzZXMgd2l0aCBodHRwczovL2dpdGh1Yi5jb20vbGl0ZWhlbHBlcnMvY29yZG92YS1zcWxpdGUtZXh0XG4gICAqL1xuICBjcmVhdGVGcm9tTG9jYXRpb24/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBzdXBwb3J0IGVuY3J5cHRlZCBkYXRhYmFzZXMgd2l0aCBodHRwczovL2dpdGh1Yi5jb20vbGl0ZWhlbHBlcnMvQ29yZG92YS1zcWxjaXBoZXItYWRhcHRlclxuICAgKi9cbiAga2V5Pzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEYlRyYW5zYWN0aW9uIHtcbiAgZXhlY3V0ZVNxbDogKFxuICAgIHNxbDogYW55LFxuICAgIHZhbHVlcz86IGFueVtdLFxuICAgIHN1Y2Nlc3M/OiBGdW5jdGlvbixcbiAgICBlcnJvcj86IEZ1bmN0aW9uXG4gICkgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1FMaXRlVHJhbnNhY3Rpb24gZXh0ZW5kcyBEYlRyYW5zYWN0aW9uIHtcbiAgc3RhcnQ6ICgpID0+IHZvaWQ7XG4gIGFkZFN0YXRlbWVudDogRGJUcmFuc2FjdGlvblsnZXhlY3V0ZVNxbCddO1xuICBoYW5kbGVTdGF0ZW1lbnRTdWNjZXNzOiAoaGFuZGxlcjogRnVuY3Rpb24sIHJlc3BvbnNlOiBhbnkpID0+IHZvaWQ7XG4gIGhhbmRsZVN0YXRlbWVudEZhaWx1cmU6IChoYW5kbGVyOiBGdW5jdGlvbiwgcmVzcG9uc2U6IGFueSkgPT4gdm9pZDtcbiAgcnVuOiAoKSA9PiB2b2lkO1xuICBhYm9ydDogKHR4RmFpbHVyZTogYW55KSA9PiB2b2lkO1xuICBmaW5pc2g6ICgpID0+IHZvaWQ7XG4gIGFib3J0RnJvbVE6IChzcWxlcnJvcjogYW55KSA9PiB2b2lkO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFNRTGl0ZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfb2JqZWN0SW5zdGFuY2U6IGFueSkge31cblxuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGRhdGFiYXNlRmVhdHVyZXM6IHsgaXNTUUxpdGVQbHVnaW5EYXRhYmFzZTogYm9vbGVhbiB9O1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIG9wZW5EQnM6IGFueTtcblxuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBzeW5jOiB0cnVlXG4gIH0pXG4gIGFkZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uOiAodHg6IFNRTGl0ZVRyYW5zYWN0aW9uKSA9PiB2b2lkKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gZm4ge0Z1bmN0aW9ufVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgc3VjY2Vzc0luZGV4OiAyLFxuICAgIGVycm9ySW5kZXg6IDFcbiAgfSlcbiAgdHJhbnNhY3Rpb24oZm46ICh0eDogRGJUcmFuc2FjdGlvbikgPT4gdm9pZCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVhZFRyYW5zYWN0aW9uKGZuOiAodHg6IFNRTGl0ZVRyYW5zYWN0aW9uKSA9PiB2b2lkKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBzeW5jOiB0cnVlXG4gIH0pXG4gIHN0YXJ0TmV4dFRyYW5zYWN0aW9uKCk6IHZvaWQge31cblxuICAvKipcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBvcGVuKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgY2xvc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZSBTUUwgb24gdGhlIG9wZW5lZCBkYXRhYmFzZS4gTm90ZSwgeW91IG11c3QgY2FsbCBgY3JlYXRlYCBmaXJzdCwgYW5kXG4gICAqIGVuc3VyZSBpdCByZXNvbHZlZCBhbmQgc3VjY2Vzc2Z1bGx5IG9wZW5lZCB0aGUgZGF0YWJhc2UuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZXhlY3V0ZVNxbChzdGF0ZW1lbnQ6IHN0cmluZywgcGFyYW1zPzogYW55W10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gc3FsU3RhdGVtZW50cyB7c3RyaW5nW10gfCBzdHJpbmdbXVtdIHwgYW55W119XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgc3FsQmF0Y2goc3FsU3RhdGVtZW50czogKHN0cmluZyB8IHN0cmluZ1tdIHwgYW55KVtdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBzeW5jOiB0cnVlXG4gIH0pXG4gIGFib3J0YWxsUGVuZGluZ1RyYW5zYWN0aW9ucygpOiB2b2lkIHt9XG59XG5cbi8qKlxuICogQG5hbWUgU1FMaXRlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBY2Nlc3MgU1FMaXRlIGRhdGFiYXNlcyBvbiB0aGUgZGV2aWNlLlxuICpcbiAqIEB1c2FnZVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNRTGl0ZSwgU1FMaXRlT2JqZWN0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zcWxpdGUvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNxbGl0ZTogU1FMaXRlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnNxbGl0ZS5jcmVhdGUoe1xuICogICBuYW1lOiAnZGF0YS5kYicsXG4gKiAgIGxvY2F0aW9uOiAnZGVmYXVsdCdcbiAqIH0pXG4gKiAgIC50aGVuKChkYjogU1FMaXRlT2JqZWN0KSA9PiB7XG4gKlxuICpcbiAqICAgICBkYi5leGVjdXRlU3FsKCdjcmVhdGUgdGFibGUgZGFuY2VNb3ZlcyhuYW1lIFZBUkNIQVIoMzIpKScsIFtdKVxuICogICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0V4ZWN1dGVkIFNRTCcpKVxuICogICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xuICpcbiAqXG4gKiAgIH0pXG4gKiAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcbiAqXG4gKiBgYGBcbiAqXG4gKiBAY2xhc3Nlc1xuICogU1FMaXRlT2JqZWN0XG4gKiBAaW50ZXJmYWNlc1xuICogU1FMaXRlRGF0YWJhc2VDb25maWdcbiAqIFNRTGl0ZVRyYW5zYWN0aW9uXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU1FMaXRlJyxcbiAgcGx1Z2luUmVmOiAnc3FsaXRlUGx1Z2luJyxcbiAgcGx1Z2luOiAnY29yZG92YS1zcWxpdGUtc3RvcmFnZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbGl0ZWhlbHBlcnMvQ29yZG92YS1zcWxpdGUtc3RvcmFnZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdtYWNPUycsICdXaW5kb3dzJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1FMaXRlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogT3BlbiBvciBjcmVhdGUgYSBTUUxpdGUgZGF0YWJhc2UgZmlsZS5cbiAgICpcbiAgICogU2VlIHRoZSBwbHVnaW4gZG9jcyBmb3IgYW4gZXhwbGFuYXRpb24gb2YgYWxsIG9wdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9saXRlaGVscGVycy9Db3Jkb3ZhLXNxbGl0ZS1zdG9yYWdlI29wZW5pbmctYS1kYXRhYmFzZVxuICAgKlxuICAgKiBAcGFyYW0gY29uZmlnIHtTUUxpdGVEYXRhYmFzZUNvbmZpZ30gZGF0YWJhc2UgY29uZmlndXJhdGlvblxuICAgKiBAcmV0dXJuIFByb21pc2U8U1FMaXRlT2JqZWN0PlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGNyZWF0ZShjb25maWc6IFNRTGl0ZURhdGFiYXNlQ29uZmlnKTogUHJvbWlzZTxTUUxpdGVPYmplY3Q+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc3FsaXRlUGx1Z2luLm9wZW5EYXRhYmFzZShcbiAgICAgICAgY29uZmlnLFxuICAgICAgICAoZGI6IGFueSkgPT4gcmVzb2x2ZShuZXcgU1FMaXRlT2JqZWN0KGRiKSksXG4gICAgICAgIHJlamVjdFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZnkgdGhhdCBib3RoIHRoZSBKYXZhc2NyaXB0IGFuZCBuYXRpdmUgcGFydCBvZiB0aGlzIHBsdWdpbiBhcmUgaW5zdGFsbGVkIGluIHlvdXIgYXBwbGljYXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZWNob1Rlc3QoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQXV0b21hdGljYWxseSB2ZXJpZnkgYmFzaWMgZGF0YWJhc2UgYWNjZXNzIG9wZXJhdGlvbnMgaW5jbHVkaW5nIG9wZW5pbmcgYSBkYXRhYmFzZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZWxmVGVzdCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgZGF0YWJhc2VcbiAgICogQHBhcmFtIGNvbmZpZyB7U1FMaXRlRGF0YWJhc2VDb25maWd9IGRhdGFiYXNlIGNvbmZpZ3VyYXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGVsZXRlRGF0YWJhc2UoY29uZmlnOiBTUUxpdGVEYXRhYmFzZUNvbmZpZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=