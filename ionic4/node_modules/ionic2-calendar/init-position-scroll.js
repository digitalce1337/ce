import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, ViewEncapsulation } from '@angular/core';
var initPositionScrollComponent = /** @class */ (function () {
    function initPositionScrollComponent(el) {
        this.onScroll = new EventEmitter();
        this.listenerAttached = false;
        this.element = el;
    }
    initPositionScrollComponent.prototype.ngOnChanges = function (changes) {
        var initPosition = changes['initPosition'];
        if (initPosition && initPosition.currentValue !== undefined && this.scrollContent) {
            this.scrollContent.scrollTop = initPosition.currentValue;
        }
    };
    initPositionScrollComponent.prototype.ngAfterViewInit = function () {
        var scrollContent = this.scrollContent = this.element.nativeElement.querySelector('.scroll-content');
        if (this.initPosition !== undefined) {
            scrollContent.scrollTop = this.initPosition;
        }
        if (this.emitEvent && !this.listenerAttached) {
            var onScroll_1 = this.onScroll;
            this.handler = function () {
                onScroll_1.emit(scrollContent.scrollTop);
            };
            this.listenerAttached = true;
            scrollContent.addEventListener('scroll', this.handler);
        }
    };
    initPositionScrollComponent.prototype.ngOnDestroy = function () {
        if (this.listenerAttached) {
            this.scrollContent.removeEventListener('scroll', this.handler);
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], initPositionScrollComponent.prototype, "initPosition", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], initPositionScrollComponent.prototype, "emitEvent", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], initPositionScrollComponent.prototype, "onScroll", void 0);
    initPositionScrollComponent = tslib_1.__decorate([
        Component({
            selector: 'init-position-scroll',
            template: "\n        <div class=\"scroll-content\" style=\"height:100%\">\n            <ng-content></ng-content>\n        </div>\n    ",
            styles: ["\n        .scroll-content {\n            overflow-y: auto;\n            overflow-x: hidden;\n        }        \n    "],
            encapsulation: ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], initPositionScrollComponent);
    return initPositionScrollComponent;
}());
export { initPositionScrollComponent };
