'use strict';

import { Range } from './Positioning';
import { X12Segment } from './X12Segment';

export class X12Element {
    constructor() {
        this.range = new Range();
        this.value = '';
    }
    
    range: Range;
    value: string;
}