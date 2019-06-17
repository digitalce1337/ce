import { EventEmitter, ElementRef, SimpleChanges, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
export declare class initPositionScrollComponent implements OnChanges, AfterViewInit, OnDestroy {
    initPosition: number;
    emitEvent: boolean;
    onScroll: EventEmitter<number>;
    private element;
    private scrollContent;
    private handler;
    private listenerAttached;
    constructor(el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
