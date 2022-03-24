declare type WhatType = String;
declare type CallBack = (what: WhatType | Array<WhatType>) => void;
interface emptyThis {
    then?: (what: WhatType | Array<WhatType>) => ItIs;
}
declare class ItIs {
    private _it;
    private _ok;
    private _what;
    private _cache;
    private callbacks;
    constructor(what: WhatType);
    is(what: WhatType): ItIs | null;
    then(fn: CallBack): ItIs;
}
interface runObj {
    cache: Array<WhatType>;
    callbacks: Array<CallBack>;
}
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
