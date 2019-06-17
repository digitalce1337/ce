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
var WebView = /** @class */ (function (_super) {
    __extends(WebView, _super);
    function WebView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(WebView.prototype, "convertFileSrc", {
        get: function () { return cordovaPropertyGet(this, "convertFileSrc"); },
        set: function (value) { cordovaPropertySet(this, "convertFileSrc", value); },
        enumerable: true,
        configurable: true
    });
    WebView.pluginName = "WebView";
    WebView.plugin = "cordova-plugin-ionic-webview";
    WebView.pluginRef = "window.Ionic.WebView";
    WebView.repo = "https://github.com/ionic-team/cordova-plugin-ionic-webview";
    WebView.platforms = ["Android", "iOS"];
    WebView.install = "ionic cordova plugin add cordova-plugin-ionic-webview";
    WebView = __decorate([
        Injectable()
    ], WebView);
    return WebView;
}(IonicNativePlugin));
export { WebView };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2lvbmljLXdlYnZpZXcvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sNkRBQThDLE1BQU0sb0JBQW9CLENBQUM7O0lBK0JuRCwyQkFBaUI7Ozs7MEJBTTVDLG1DQUFjOzs7Ozs7Ozs7Ozs7SUFOSCxPQUFPO1FBRG5CLFVBQVUsRUFBRTtPQUNBLE9BQU87a0JBaENwQjtFQWdDNkIsaUJBQWlCO1NBQWpDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIElvbmljIFdlYnZpZXdcbiAqIEBkZXNjcmlwdGlvblxuICogQWNjZXNzIFdlYiBWaWV3IHV0aWxpdGllcy5cbiAqXG4gKiBSZXF1aXJlcyB0aGUgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1pb25pYy13ZWJ2aWV3YCA+IDIuMC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0lvbmljIFdlYiBWaWV3XShodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9jb3Jkb3ZhLXBsdWdpbi1pb25pYy13ZWJ2aWV3KSByZXBvc2l0b3J5LlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgV2ViVmlldyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaW9uaWMtd2Vidmlldy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHdlYnZpZXc6IFdlYlZpZXcpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGltZyA9IHRoaXMud2Vidmlldy5jb252ZXJ0RmlsZVNyYygnZmlsZTovLy9Vc2Vycy9kYW4vY2FtZXJhLWltYWdlLTEyMzQ1LnBuZycpXG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnV2ViVmlldycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWlvbmljLXdlYnZpZXcnLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cuSW9uaWMuV2ViVmlldycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9jb3Jkb3ZhLXBsdWdpbi1pb25pYy13ZWJ2aWV3JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4taW9uaWMtd2Vidmlldydcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2ViVmlldyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogQ29udmVydCBhIGBmaWxlOi8vYCBVUkwgdG8gYSBVUkwgdGhhdCBpcyBjb21wYXRpYmxlIHdpdGggdGhlIGxvY2FsIHdlYiBzZXJ2ZXIgaW4gdGhlIFdlYiBWaWV3IHBsdWdpbi5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBjb252ZXJ0RmlsZVNyYzogKHVybDogc3RyaW5nKSA9PiBzdHJpbmc7XG5cbn1cbiJdfQ==