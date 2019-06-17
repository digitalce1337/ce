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
import { IonicNativePlugin, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
var Device = /** @class */ (function (_super) {
    __extends(Device, _super);
    function Device() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Device.prototype, "cordova", {
        get: function () { return cordovaPropertyGet(this, "cordova"); },
        set: function (value) { cordovaPropertySet(this, "cordova", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "model", {
        get: function () { return cordovaPropertyGet(this, "model"); },
        set: function (value) { cordovaPropertySet(this, "model", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "platform", {
        get: function () { return cordovaPropertyGet(this, "platform"); },
        set: function (value) { cordovaPropertySet(this, "platform", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "uuid", {
        get: function () { return cordovaPropertyGet(this, "uuid"); },
        set: function (value) { cordovaPropertySet(this, "uuid", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "version", {
        get: function () { return cordovaPropertyGet(this, "version"); },
        set: function (value) { cordovaPropertySet(this, "version", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "manufacturer", {
        get: function () { return cordovaPropertyGet(this, "manufacturer"); },
        set: function (value) { cordovaPropertySet(this, "manufacturer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "isVirtual", {
        get: function () { return cordovaPropertyGet(this, "isVirtual"); },
        set: function (value) { cordovaPropertySet(this, "isVirtual", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "serial", {
        get: function () { return cordovaPropertyGet(this, "serial"); },
        set: function (value) { cordovaPropertySet(this, "serial", value); },
        enumerable: true,
        configurable: true
    });
    Device.pluginName = "Device";
    Device.plugin = "cordova-plugin-device";
    Device.pluginRef = "device";
    Device.repo = "https://github.com/apache/cordova-plugin-device";
    Device.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
    Device = __decorate([
        Injectable()
    ], Device);
    return Device;
}(IonicNativePlugin));
export { Device };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RldmljZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw2REFBOEMsTUFBTSxvQkFBb0IsQ0FBQzs7SUE0QnBELDBCQUFpQjs7OzswQkFJM0MsMkJBQU87Ozs7OzswQkFPUCx5QkFBSzs7Ozs7OzBCQUlMLDRCQUFROzs7Ozs7MEJBSVIsd0JBQUk7Ozs7OzswQkFJSiwyQkFBTzs7Ozs7OzBCQUlQLGdDQUFZOzs7Ozs7MEJBSVosNkJBQVM7Ozs7OzswQkFJVCwwQkFBTTs7Ozs7Ozs7Ozs7SUFuQ0ssTUFBTTtRQURsQixVQUFVLEVBQUU7T0FDQSxNQUFNO2lCQTdCbkI7RUE2QjRCLGlCQUFpQjtTQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IGFueTtcblxuLyoqXG4gKiBAbmFtZSBEZXZpY2VcbiAqIEBkZXNjcmlwdGlvblxuICogQWNjZXNzIGluZm9ybWF0aW9uIGFib3V0IHRoZSB1bmRlcmx5aW5nIGRldmljZSBhbmQgcGxhdGZvcm0uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBEZXZpY2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RldmljZS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZGV2aWNlOiBEZXZpY2UpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGNvbnNvbGUubG9nKCdEZXZpY2UgVVVJRCBpczogJyArIHRoaXMuZGV2aWNlLnV1aWQpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRGV2aWNlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZGV2aWNlJyxcbiAgcGx1Z2luUmVmOiAnZGV2aWNlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tZGV2aWNlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnbWFjT1MnLCAnV2luZG93cyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERldmljZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKiogR2V0IHRoZSB2ZXJzaW9uIG9mIENvcmRvdmEgcnVubmluZyBvbiB0aGUgZGV2aWNlLiAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgY29yZG92YTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZGV2aWNlLm1vZGVsIHJldHVybnMgdGhlIG5hbWUgb2YgdGhlIGRldmljZSdzIG1vZGVsIG9yIHByb2R1Y3QuIFRoZSB2YWx1ZSBpcyBzZXRcbiAgICogYnkgdGhlIGRldmljZSBtYW51ZmFjdHVyZXIgYW5kIG1heSBiZSBkaWZmZXJlbnQgYWNyb3NzIHZlcnNpb25zIG9mIHRoZSBzYW1lIHByb2R1Y3QuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgbW9kZWw6IHN0cmluZztcblxuICAvKiogR2V0IHRoZSBkZXZpY2UncyBvcGVyYXRpbmcgc3lzdGVtIG5hbWUuICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBwbGF0Zm9ybTogc3RyaW5nO1xuXG4gIC8qKiBHZXQgdGhlIGRldmljZSdzIFVuaXZlcnNhbGx5IFVuaXF1ZSBJZGVudGlmaWVyIChVVUlEKS4gKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHV1aWQ6IHN0cmluZztcblxuICAvKiogR2V0IHRoZSBvcGVyYXRpbmcgc3lzdGVtIHZlcnNpb24uICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICB2ZXJzaW9uOiBzdHJpbmc7XG5cbiAgLyoqIEdldCB0aGUgZGV2aWNlJ3MgbWFudWZhY3R1cmVyLiAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgbWFudWZhY3R1cmVyOiBzdHJpbmc7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGRldmljZSBpcyBydW5uaW5nIG9uIGEgc2ltdWxhdG9yLiAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgaXNWaXJ0dWFsOiBib29sZWFuO1xuXG4gIC8qKiBHZXQgdGhlIGRldmljZSBoYXJkd2FyZSBzZXJpYWwgbnVtYmVyLiAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgc2VyaWFsOiBzdHJpbmc7XG5cbn1cbiJdfQ==