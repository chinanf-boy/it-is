declare type WhatType = any;
declare type CallBack = (what: WhatType | Array<WhatType>) => void;
declare type emptyThis = {
    is?: (what: WhatType | Array<WhatType>) => emptyThis;
    then?: (what: WhatType | Array<WhatType>) => emptyThis;
};
declare class exObj {
    private _it;
    private _what;
    private _cache;
    private callbacks;
    constructor(what: WhatType);
    is(what: any): this;
    then(fn: CallBack): exObj | emptyThis;
}

export { CallBack, WhatType, exObj as default, emptyThis };
