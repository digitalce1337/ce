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
import { IonicNativePlugin, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
var DeviceOriginal = /** @class */ (function (_super) {
    __extends(DeviceOriginal, _super);
    function DeviceOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DeviceOriginal.prototype, "cordova", {
        get: function () { return cordovaPropertyGet(this, "cordova"); },
        set: function (value) { cordovaPropertySet(this, "cordova", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "model", {
        get: function () { return cordovaPropertyGet(this, "model"); },
        set: function (value) { cordovaPropertySet(this, "model", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "platform", {
        get: function () { return cordovaPropertyGet(this, "platform"); },
        set: function (value) { cordovaPropertySet(this, "platform", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "uuid", {
        get: function () { return cordovaPropertyGet(this, "uuid"); },
        set: function (value) { cordovaPropertySet(this, "uuid", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "version", {
        get: function () { return cordovaPropertyGet(this, "version"); },
        set: function (value) { cordovaPropertySet(this, "version", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "manufacturer", {
        get: function () { return cordovaPropertyGet(this, "manufacturer"); },
        set: function (value) { cordovaPropertySet(this, "manufacturer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "isVirtual", {
        get: function () { return cordovaPropertyGet(this, "isVirtual"); },
        set: function (value) { cordovaPropertySet(this, "isVirtual", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "serial", {
        get: function () { return cordovaPropertyGet(this, "serial"); },
        set: function (value) { cordovaPropertySet(this, "serial", value); },
        enumerable: true,
        configurable: true
    });
    DeviceOriginal.pluginName = "Device";
    DeviceOriginal.plugin = "cordova-plugin-device";
    DeviceOriginal.pluginRef = "device";
    DeviceOriginal.repo = "https://github.com/apache/cordova-plugin-device";
    DeviceOriginal.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
    return DeviceOriginal;
}(IonicNativePlugin));
var Device = new DeviceOriginal();
export { Device };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RldmljZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw2REFBOEMsTUFBTSxvQkFBb0IsQ0FBQzs7SUE0QnBELDBCQUFpQjs7OzswQkFJM0MsMkJBQU87Ozs7OzswQkFPUCx5QkFBSzs7Ozs7OzBCQUlMLDRCQUFROzs7Ozs7MEJBSVIsd0JBQUk7Ozs7OzswQkFJSiwyQkFBTzs7Ozs7OzBCQUlQLGdDQUFZOzs7Ozs7MEJBSVosNkJBQVM7Ozs7OzswQkFJVCwwQkFBTTs7Ozs7Ozs7Ozs7aUJBaEVSO0VBNkI0QixpQkFBaUI7U0FBaEMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XG5cbi8qKlxuICogQG5hbWUgRGV2aWNlXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFjY2VzcyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdW5kZXJseWluZyBkZXZpY2UgYW5kIHBsYXRmb3JtLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRGV2aWNlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kZXZpY2Uvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGRldmljZTogRGV2aWNlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBjb25zb2xlLmxvZygnRGV2aWNlIFVVSUQgaXM6ICcgKyB0aGlzLmRldmljZS51dWlkKTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0RldmljZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRldmljZScsXG4gIHBsdWdpblJlZjogJ2RldmljZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWRldmljZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ21hY09TJywgJ1dpbmRvd3MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEZXZpY2UgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqIEdldCB0aGUgdmVyc2lvbiBvZiBDb3Jkb3ZhIHJ1bm5pbmcgb24gdGhlIGRldmljZS4gKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIGNvcmRvdmE6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGRldmljZS5tb2RlbCByZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBkZXZpY2UncyBtb2RlbCBvciBwcm9kdWN0LiBUaGUgdmFsdWUgaXMgc2V0XG4gICAqIGJ5IHRoZSBkZXZpY2UgbWFudWZhY3R1cmVyIGFuZCBtYXkgYmUgZGlmZmVyZW50IGFjcm9zcyB2ZXJzaW9ucyBvZiB0aGUgc2FtZSBwcm9kdWN0LlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIG1vZGVsOiBzdHJpbmc7XG5cbiAgLyoqIEdldCB0aGUgZGV2aWNlJ3Mgb3BlcmF0aW5nIHN5c3RlbSBuYW1lLiAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgcGxhdGZvcm06IHN0cmluZztcblxuICAvKiogR2V0IHRoZSBkZXZpY2UncyBVbml2ZXJzYWxseSBVbmlxdWUgSWRlbnRpZmllciAoVVVJRCkuICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICB1dWlkOiBzdHJpbmc7XG5cbiAgLyoqIEdldCB0aGUgb3BlcmF0aW5nIHN5c3RlbSB2ZXJzaW9uLiAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgdmVyc2lvbjogc3RyaW5nO1xuXG4gIC8qKiBHZXQgdGhlIGRldmljZSdzIG1hbnVmYWN0dXJlci4gKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIG1hbnVmYWN0dXJlcjogc3RyaW5nO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBkZXZpY2UgaXMgcnVubmluZyBvbiBhIHNpbXVsYXRvci4gKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIGlzVmlydHVhbDogYm9vbGVhbjtcblxuICAvKiogR2V0IHRoZSBkZXZpY2UgaGFyZHdhcmUgc2VyaWFsIG51bWJlci4gKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHNlcmlhbDogc3RyaW5nO1xuXG59XG4iXX0=