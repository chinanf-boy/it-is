declare type WhatType = any;
declare type CallBack = (what: WhatType | Array<WhatType>) => void;
declare type emptyThis = {
    is?: (what: WhatType | Array<WhatType>) => emptyThis;
    then?: (what: WhatType | Array<WhatType>) => emptyThis;
};
declare class ItIs {
    private _it;
    private _what;
    private _cache;
    private callbacks;
    constructor(what: WhatType);
    is(what: any): this;
    then(fn: CallBack): ItIs | emptyThis;
}
declare type runObj = {
    cache: Array<WhatType>;
    callbacks: Array<CallBack>;
};
declare class ItIsAsync {
    private _it;
    private _cache;
    private callbacks;
    private _runQueue;
    private _timerId;
    constructor(what: WhatType);
    _timer(): void;
    _run(): void;
    is(what: any): this;
    then(fn: CallBack): ItIsAsync;
    _reset(): void;
}

export { CallBack, ItIs, ItIsAsync, WhatType, emptyThis, runObj };
