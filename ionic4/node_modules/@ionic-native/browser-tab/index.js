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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var BrowserTabOriginal = /** @class */ (function (_super) {
    __extends(BrowserTabOriginal, _super);
    function BrowserTabOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrowserTabOriginal.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    BrowserTabOriginal.prototype.openUrl = function (url) { return cordova(this, "openUrl", {}, arguments); };
    BrowserTabOriginal.prototype.close = function () { return cordova(this, "close", {}, arguments); };
    BrowserTabOriginal.pluginName = "BrowserTab";
    BrowserTabOriginal.plugin = "cordova-plugin-browsertab";
    BrowserTabOriginal.pluginRef = "cordova.plugins.browsertab";
    BrowserTabOriginal.repo = "https://github.com/google/cordova-plugin-browsertab";
    BrowserTabOriginal.platforms = ["Android", "iOS"];
    return BrowserTabOriginal;
}(IonicNativePlugin));
var BrowserTab = new BrowserTabOriginal();
export { BrowserTab };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Jyb3dzZXItdGFiL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWlDeEMsOEJBQWlCOzs7O0lBTS9DLGdDQUFXO0lBVVgsNEJBQU8sYUFBQyxHQUFXO0lBU25CLDBCQUFLOzs7Ozs7cUJBM0RQO0VBa0NnQyxpQkFBaUI7U0FBcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEJyb3dzZXIgVGFiXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIHByb3ZpZGVzIGFuIGludGVyZmFjZSB0byBpbi1hcHAgYnJvd3NlciB0YWJzIHRoYXQgZXhpc3Qgb24gc29tZSBtb2JpbGUgcGxhdGZvcm1zLCBzcGVjaWZpY2FsbHkgW0N1c3RvbSBUYWJzXShodHRwOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL3Rvb2xzL3N1cHBvcnQtbGlicmFyeS9mZWF0dXJlcy5odG1sI2N1c3RvbS10YWJzKSBvbiBBbmRyb2lkIChpbmNsdWRpbmcgdGhlIFtDaHJvbWUgQ3VzdG9tIFRhYnNdKGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vbXVsdGlkZXZpY2UvYW5kcm9pZC9jdXN0b210YWJzKSBpbXBsZW1lbnRhdGlvbiksIGFuZCBbU0ZTYWZhcmlWaWV3Q29udHJvbGxlcl0oaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2xpYnJhcnkvaW9zL2RvY3VtZW50YXRpb24vU2FmYXJpU2VydmljZXMvUmVmZXJlbmNlL1NGU2FmYXJpVmlld0NvbnRyb2xsZXJfUmVmLykgb24gaU9TLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQnJvd3NlclRhYiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYnJvd3Nlci10YWIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJyb3dzZXJUYWI6IEJyb3dzZXJUYWIpIHtcbiAqXG4gKiAgIGJyb3dzZXJUYWIuaXNBdmFpbGFibGUoKVxuICogICAgIC50aGVuKGlzQXZhaWxhYmxlID0+IHtcbiAqICAgICAgIGlmIChpc0F2YWlsYWJsZSkge1xuICogICAgICAgICBicm93c2VyVGFiLm9wZW5VcmwoJ2h0dHBzOi8vaW9uaWMuaW8nKTtcbiAqICAgICAgIH0gZWxzZSB7XG4gKiAgICAgICAgIC8vIG9wZW4gVVJMIHdpdGggSW5BcHBCcm93c2VyIGluc3RlYWQgb3IgU2FmYXJpVmlld0NvbnRyb2xsZXJcbiAqICAgICAgIH1cbiAqICAgICB9KTtcbiAqIH1cbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCcm93c2VyVGFiJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYnJvd3NlcnRhYicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5icm93c2VydGFiJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvY29yZG92YS1wbHVnaW4tYnJvd3NlcnRhYicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJyb3dzZXJUYWIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDaGVjayBpZiBCcm93c2VyVGFiIG9wdGlvbiBpcyBhdmFpbGFibGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gY2hlY2sgaXMgc3VjY2Vzc2Z1bCBhbmQgcmV0dXJucyB0cnVlIG9yIGZhbHNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzQXZhaWxhYmxlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSBwcm92aWRlZCBVUkwgdXNpbmcgYSBicm93c2VyIHRhYlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsICBUaGUgVVJMIHlvdSB3YW50IHRvIG9wZW5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gY2hlY2sgb3BlbiB3YXMgc3VjY2Vzc2Z1bFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvcGVuVXJsKHVybDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIGJyb3dzZXIgdGFiXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGNsb3NlIHdhcyBmaW5pc2hlZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjbG9zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19