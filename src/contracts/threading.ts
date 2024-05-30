import {
  Cell,
  Slice, 
  Address, 
  Builder, 
  beginCell, 
  ComputeError, 
  TupleItem, 
  TupleReader, 
  Dictionary, 
  contractAddress, 
  ContractProvider, 
  Sender, 
  Contract, 
  ContractABI, 
  ABIType,
  ABIGetter,
  ABIReceiver,
  TupleBuilder,
  DictionaryValue
} from "ton-core";

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw);
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw);
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type Array = {
    $$type: 'Array';
    map: Dictionary<number, Address>;
    length: bigint;
}

export function storeArray(src: Array) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeDict(src.map, Dictionary.Keys.Uint(16), Dictionary.Values.Address());
        b_0.storeInt(src.length, 257);
    };
}

export function loadArray(slice: Slice) {
    let sc_0 = slice;
    let _map = Dictionary.load(Dictionary.Keys.Uint(16), Dictionary.Values.Address(), sc_0);
    let _length = sc_0.loadIntBig(257);
    return { $$type: 'Array' as const, map: _map, length: _length };
}

function loadTupleArray(source: TupleReader) {
    let _map = Dictionary.loadDirect(Dictionary.Keys.Uint(16), Dictionary.Values.Address(), source.readCellOpt());
    let _length = source.readBigNumber();
    return { $$type: 'Array' as const, map: _map, length: _length };
}

function storeTupleArray(source: Array) {
    let builder = new TupleBuilder();
    builder.writeCell(source.map.size > 0 ? beginCell().storeDictDirect(source.map, Dictionary.Keys.Uint(16), Dictionary.Values.Address()).endCell() : null);
    builder.writeNumber(source.length);
    return builder.build();
}

function dictValueParserArray(): DictionaryValue<Array> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeArray(src)).endCell());
        },
        parse: (src) => {
            return loadArray(src.loadRef().beginParse());
        }
    }
}

export type RegLevelEvent = {
    $$type: 'RegLevelEvent';
    _user: Address;
    _referrer: Address;
    _time: bigint;
}

export function storeRegLevelEvent(src: RegLevelEvent) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2317693508, 32);
        b_0.storeAddress(src._user);
        b_0.storeAddress(src._referrer);
        b_0.storeInt(src._time, 257);
    };
}

export function loadRegLevelEvent(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2317693508) { throw Error('Invalid prefix'); }
    let __user = sc_0.loadAddress();
    let __referrer = sc_0.loadAddress();
    let __time = sc_0.loadIntBig(257);
    return { $$type: 'RegLevelEvent' as const, _user: __user, _referrer: __referrer, _time: __time };
}

function loadTupleRegLevelEvent(source: TupleReader) {
    let __user = source.readAddress();
    let __referrer = source.readAddress();
    let __time = source.readBigNumber();
    return { $$type: 'RegLevelEvent' as const, _user: __user, _referrer: __referrer, _time: __time };
}

function storeTupleRegLevelEvent(source: RegLevelEvent) {
    let builder = new TupleBuilder();
    builder.writeAddress(source._user);
    builder.writeAddress(source._referrer);
    builder.writeNumber(source._time);
    return builder.build();
}

function dictValueParserRegLevelEvent(): DictionaryValue<RegLevelEvent> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeRegLevelEvent(src)).endCell());
        },
        parse: (src) => {
            return loadRegLevelEvent(src.loadRef().beginParse());
        }
    }
}

export type BuyLevelEvent = {
    $$type: 'BuyLevelEvent';
    _user: Address;
    _level: bigint;
    _time: bigint;
}

export function storeBuyLevelEvent(src: BuyLevelEvent) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(119552551, 32);
        b_0.storeAddress(src._user);
        b_0.storeUint(src._level, 8);
        b_0.storeInt(src._time, 257);
    };
}

export function loadBuyLevelEvent(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 119552551) { throw Error('Invalid prefix'); }
    let __user = sc_0.loadAddress();
    let __level = sc_0.loadUintBig(8);
    let __time = sc_0.loadIntBig(257);
    return { $$type: 'BuyLevelEvent' as const, _user: __user, _level: __level, _time: __time };
}

function loadTupleBuyLevelEvent(source: TupleReader) {
    let __user = source.readAddress();
    let __level = source.readBigNumber();
    let __time = source.readBigNumber();
    return { $$type: 'BuyLevelEvent' as const, _user: __user, _level: __level, _time: __time };
}

function storeTupleBuyLevelEvent(source: BuyLevelEvent) {
    let builder = new TupleBuilder();
    builder.writeAddress(source._user);
    builder.writeNumber(source._level);
    builder.writeNumber(source._time);
    return builder.build();
}

function dictValueParserBuyLevelEvent(): DictionaryValue<BuyLevelEvent> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeBuyLevelEvent(src)).endCell());
        },
        parse: (src) => {
            return loadBuyLevelEvent(src.loadRef().beginParse());
        }
    }
}

export type ProlongateLevelEvent = {
    $$type: 'ProlongateLevelEvent';
    _user: Address;
    _level: bigint;
    _time: bigint;
}

export function storeProlongateLevelEvent(src: ProlongateLevelEvent) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2949451230, 32);
        b_0.storeAddress(src._user);
        b_0.storeUint(src._level, 8);
        b_0.storeInt(src._time, 257);
    };
}

export function loadProlongateLevelEvent(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2949451230) { throw Error('Invalid prefix'); }
    let __user = sc_0.loadAddress();
    let __level = sc_0.loadUintBig(8);
    let __time = sc_0.loadIntBig(257);
    return { $$type: 'ProlongateLevelEvent' as const, _user: __user, _level: __level, _time: __time };
}

function loadTupleProlongateLevelEvent(source: TupleReader) {
    let __user = source.readAddress();
    let __level = source.readBigNumber();
    let __time = source.readBigNumber();
    return { $$type: 'ProlongateLevelEvent' as const, _user: __user, _level: __level, _time: __time };
}

function storeTupleProlongateLevelEvent(source: ProlongateLevelEvent) {
    let builder = new TupleBuilder();
    builder.writeAddress(source._user);
    builder.writeNumber(source._level);
    builder.writeNumber(source._time);
    return builder.build();
}

function dictValueParserProlongateLevelEvent(): DictionaryValue<ProlongateLevelEvent> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeProlongateLevelEvent(src)).endCell());
        },
        parse: (src) => {
            return loadProlongateLevelEvent(src.loadRef().beginParse());
        }
    }
}

export type GetMoneyForLevelEvent = {
    $$type: 'GetMoneyForLevelEvent';
    _user: Address;
    _referrer: Address;
    _level: bigint;
    _time: bigint;
}

export function storeGetMoneyForLevelEvent(src: GetMoneyForLevelEvent) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2841688802, 32);
        b_0.storeAddress(src._user);
        b_0.storeAddress(src._referrer);
        b_0.storeUint(src._level, 8);
        b_0.storeInt(src._time, 257);
    };
}

export function loadGetMoneyForLevelEvent(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2841688802) { throw Error('Invalid prefix'); }
    let __user = sc_0.loadAddress();
    let __referrer = sc_0.loadAddress();
    let __level = sc_0.loadUintBig(8);
    let __time = sc_0.loadIntBig(257);
    return { $$type: 'GetMoneyForLevelEvent' as const, _user: __user, _referrer: __referrer, _level: __level, _time: __time };
}

function loadTupleGetMoneyForLevelEvent(source: TupleReader) {
    let __user = source.readAddress();
    let __referrer = source.readAddress();
    let __level = source.readBigNumber();
    let __time = source.readBigNumber();
    return { $$type: 'GetMoneyForLevelEvent' as const, _user: __user, _referrer: __referrer, _level: __level, _time: __time };
}

function storeTupleGetMoneyForLevelEvent(source: GetMoneyForLevelEvent) {
    let builder = new TupleBuilder();
    builder.writeAddress(source._user);
    builder.writeAddress(source._referrer);
    builder.writeNumber(source._level);
    builder.writeNumber(source._time);
    return builder.build();
}

function dictValueParserGetMoneyForLevelEvent(): DictionaryValue<GetMoneyForLevelEvent> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeGetMoneyForLevelEvent(src)).endCell());
        },
        parse: (src) => {
            return loadGetMoneyForLevelEvent(src.loadRef().beginParse());
        }
    }
}

export type LostMoneyForLevelEvent = {
    $$type: 'LostMoneyForLevelEvent';
    _user: Address;
    _referrer: Address;
    _level: bigint;
    _time: bigint;
}

export function storeLostMoneyForLevelEvent(src: LostMoneyForLevelEvent) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(4235769846, 32);
        b_0.storeAddress(src._user);
        b_0.storeAddress(src._referrer);
        b_0.storeUint(src._level, 8);
        b_0.storeInt(src._time, 257);
    };
}

export function loadLostMoneyForLevelEvent(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 4235769846) { throw Error('Invalid prefix'); }
    let __user = sc_0.loadAddress();
    let __referrer = sc_0.loadAddress();
    let __level = sc_0.loadUintBig(8);
    let __time = sc_0.loadIntBig(257);
    return { $$type: 'LostMoneyForLevelEvent' as const, _user: __user, _referrer: __referrer, _level: __level, _time: __time };
}

function loadTupleLostMoneyForLevelEvent(source: TupleReader) {
    let __user = source.readAddress();
    let __referrer = source.readAddress();
    let __level = source.readBigNumber();
    let __time = source.readBigNumber();
    return { $$type: 'LostMoneyForLevelEvent' as const, _user: __user, _referrer: __referrer, _level: __level, _time: __time };
}

function storeTupleLostMoneyForLevelEvent(source: LostMoneyForLevelEvent) {
    let builder = new TupleBuilder();
    builder.writeAddress(source._user);
    builder.writeAddress(source._referrer);
    builder.writeNumber(source._level);
    builder.writeNumber(source._time);
    return builder.build();
}

function dictValueParserLostMoneyForLevelEvent(): DictionaryValue<LostMoneyForLevelEvent> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeLostMoneyForLevelEvent(src)).endCell());
        },
        parse: (src) => {
            return loadLostMoneyForLevelEvent(src.loadRef().beginParse());
        }
    }
}

export type Withdraw = {
    $$type: 'Withdraw';
    amount: bigint;
    data: Address;
}

export function storeWithdraw(src: Withdraw) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3122446785, 32);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.data);
    };
}

export function loadWithdraw(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3122446785) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadCoins();
    let _data = sc_0.loadAddress();
    return { $$type: 'Withdraw' as const, amount: _amount, data: _data };
}

function loadTupleWithdraw(source: TupleReader) {
    let _amount = source.readBigNumber();
    let _data = source.readAddress();
    return { $$type: 'Withdraw' as const, amount: _amount, data: _data };
}

function storeTupleWithdraw(source: Withdraw) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeAddress(source.data);
    return builder.build();
}

function dictValueParserWithdraw(): DictionaryValue<Withdraw> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeWithdraw(src)).endCell());
        },
        parse: (src) => {
            return loadWithdraw(src.loadRef().beginParse());
        }
    }
}

export type Register = {
    $$type: 'Register';
    referrerID: bigint;
    amount: bigint;
}

export function storeRegister(src: Register) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1074304679, 32);
        b_0.storeInt(src.referrerID, 257);
        b_0.storeCoins(src.amount);
    };
}

export function loadRegister(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1074304679) { throw Error('Invalid prefix'); }
    let _referrerID = sc_0.loadIntBig(257);
    let _amount = sc_0.loadCoins();
    return { $$type: 'Register' as const, referrerID: _referrerID, amount: _amount };
}

function loadTupleRegister(source: TupleReader) {
    let _referrerID = source.readBigNumber();
    let _amount = source.readBigNumber();
    return { $$type: 'Register' as const, referrerID: _referrerID, amount: _amount };
}

function storeTupleRegister(source: Register) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.referrerID);
    builder.writeNumber(source.amount);
    return builder.build();
}

function dictValueParserRegister(): DictionaryValue<Register> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeRegister(src)).endCell());
        },
        parse: (src) => {
            return loadRegister(src.loadRef().beginParse());
        }
    }
}

export type BuyLevel = {
    $$type: 'BuyLevel';
    level: bigint;
    amount: bigint;
}

export function storeBuyLevel(src: BuyLevel) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1281703468, 32);
        b_0.storeUint(src.level, 8);
        b_0.storeCoins(src.amount);
    };
}

export function loadBuyLevel(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1281703468) { throw Error('Invalid prefix'); }
    let _level = sc_0.loadUintBig(8);
    let _amount = sc_0.loadCoins();
    return { $$type: 'BuyLevel' as const, level: _level, amount: _amount };
}

function loadTupleBuyLevel(source: TupleReader) {
    let _level = source.readBigNumber();
    let _amount = source.readBigNumber();
    return { $$type: 'BuyLevel' as const, level: _level, amount: _amount };
}

function storeTupleBuyLevel(source: BuyLevel) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.level);
    builder.writeNumber(source.amount);
    return builder.build();
}

function dictValueParserBuyLevel(): DictionaryValue<BuyLevel> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeBuyLevel(src)).endCell());
        },
        parse: (src) => {
            return loadBuyLevel(src.loadRef().beginParse());
        }
    }
}

export type UserStruct = {
    $$type: 'UserStruct';
    id: bigint;
    referrerID: bigint;
    referral: Array;
    levelExpired: Dictionary<bigint, bigint>;
}

export function storeUserStruct(src: UserStruct) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(src.id, 256);
        b_0.storeUint(src.referrerID, 256);
        b_0.store(storeArray(src.referral));
        b_0.storeDict(src.levelExpired, Dictionary.Keys.BigInt(257), Dictionary.Values.BigInt(257));
    };
}

export function loadUserStruct(slice: Slice) {
    let sc_0 = slice;
    let _id = sc_0.loadUintBig(256);
    let _referrerID = sc_0.loadUintBig(256);
    let _referral = loadArray(sc_0);
    let _levelExpired = Dictionary.load(Dictionary.Keys.BigInt(257), Dictionary.Values.BigInt(257), sc_0);
    return { $$type: 'UserStruct' as const, id: _id, referrerID: _referrerID, referral: _referral, levelExpired: _levelExpired };
}

function loadTupleUserStruct(source: TupleReader) {
    let _id = source.readBigNumber();
    let _referrerID = source.readBigNumber();
    const _referral = loadTupleArray(source.readTuple());
    let _levelExpired = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), Dictionary.Values.BigInt(257), source.readCellOpt());
    return { $$type: 'UserStruct' as const, id: _id, referrerID: _referrerID, referral: _referral, levelExpired: _levelExpired };
}

function storeTupleUserStruct(source: UserStruct) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.id);
    builder.writeNumber(source.referrerID);
    builder.writeTuple(storeTupleArray(source.referral));
    builder.writeCell(source.levelExpired.size > 0 ? beginCell().storeDictDirect(source.levelExpired, Dictionary.Keys.BigInt(257), Dictionary.Values.BigInt(257)).endCell() : null);
    return builder.build();
}

function dictValueParserUserStruct(): DictionaryValue<UserStruct> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeUserStruct(src)).endCell());
        },
        parse: (src) => {
            return loadUserStruct(src.loadRef().beginParse());
        }
    }
}

 type Threading_init_args = {
    $$type: 'Threading_init_args';
}

function initThreading_init_args(src: Threading_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
    };
}

async function Threading_init() {
    const __code = Cell.fromBase64('te6ccgECVwEAGVAAART/APSkE/S88sgLAQIBYgIDAgLJBAUCASAQEQLx2AdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVFNs88uCCyPhDAcx/AcoAVUBQVCDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFhL0APQAAsj0AMv/yQHMye1Uk4GAQOwkB4D7AGSMH/gcCHXScIflTAg1wsf3iCCELocwcG6jrIw0x8BghC6HMHBuvLggfoA+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiBJsEuAgghBACJanuo6bMNMfAYIQQAiWp7ry4IGBAQHXAPoAWWwS2zx/4CAHDQgDwnCBAQFUVwBxAUEz9AxvoZQB1wAwkltt4iMhbpJbcJG64pIwceMOgQEL+EInWVn0C2+hkjBt3yBukjBtjhjQ0//T//QEgQEB1wBZAvQEBQRQM2wVbwXibrOOhDEB2zzjDn8JDgoCqoIQTGU+LLqOmDDTHwGCEExlPiy68uCB0wf6AFlsEts8f+CCEJRqmLa6jqfTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J+EIBcG3bPH/gMHAODwHigQEBVFcAcgFBM/QMb6GUAdcAMJJbbeIjIW6SW3CRuuKSMHKOy4EBAVRXAHMBQTP0DG+hlAHXADCSW23iIyFukltwkbrikjBzjqWBAQFUVwB0AUEz9AxvoZQB1wAwkltt4iMhbpJbcJG64pIwdOMO4uILAfTAAY7wggDzHCWBAQsjWfQLb6GSMG3fIG6SMG2OGNDT/9P/9ASBAQHXAFkC9AQFBFAzbBVvBeJus/L0gQELJQJZ9AtvoZIwbd8gbpIwbY4Y0NP/0//0BIEBAdcAWQL0BAUEUDNsFW8F4iBu8tCAbyVfBAHbPJRb8sCE4g0B4oEBAVRXAHUBQTP0DG+hlAHXADCSW23iIyFukltwkbrikjB1jsuBAQFUVwB2AUEz9AxvoZQB1wAwkltt4iMhbpJbcJG64pIwdo6lgQEBVFcAdwFBM/QMb6GUAdcAMJJbbeIjIW6SW3CRuuKSMHfjDuLiDADogQEBVFcAeAFBM/QMb6GUAdcAMJJbbeIjIW6SW3CRuuKSMHiOToEBAVRXAHkBQTP0DG+hlAHXADCSW23iIyFukltwkbrikjB5jiiBAQFUVwB6AUEz9AxvoZQB1wAwkltt4iMhbpJbcJG64pIwepPywIbi4uIB5oES7YEBC/hCJ1lZ9AtvoZIwbd8gbpIwbY4Y0NP/0//0BIEBAdcAWQL0BAUEUDNsFW8F4m7y9IEeDiLCAJNTI7uRcOLy9IIAlHiBAQFUVwBxAUEz9AxvoZQB1wAwkltt4lghbpJbcJG64vL0gQELI4EBASMSBLCBSTSBAQv4QidZWfQLb6GSMG3fIG6SMG2OGNDT/9P/9ASBAQHXAFkC9AQFBFAzbBVvBeJus/L0ggCZmSLCAJMiwQuRcOLy9CHAAeMP+EJSYNs8+EJQBvgjFxgeGQE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwzAgFiNTYCASBAQQP+WfQMb6GSMG3fIG7y0IAlWVn0C2+hkjBt3yBukjBtjhjQ0//T//QEgQEB1wBZAvQEBQRQM2wVbwXiIG7y0IBvJTBsIjHCAeMAAaRtcZMgwQuOHYEBAXBTEhBFWSFulVtZ9FowmMgBzwBBM/RC4gGk6DDbPCNRNVUggQEL+EIQRhNTFAGyI4EBC4EBAVRFFFn0DG+hkjBt3yBu8tCAEFdeM0Zw2zxHYFn0C2+hkjBt3yBukjBtjhjQ0//T//QEgQEB1wBZAvQEBQRQM2wVbwXiIG7y0IBvJV8EEDVEMBI3AcYQNUZWyFVAUEXL/xLL/wIC9ACBAQHPAPQAyRA2EiBulTBZ9FkwlEEz9BPigQEB+EIlEDUBIG6VMFn0WjCUQTP0FOIggQEBI1n0DG+hkjBt3yBu8tCAI4EBCyJZ9AtvoZIwbd8VBPogbpIwbY4Y0NP/0//0BIEBAdcAWQL0BAUEUDNsFW8F4iBu8tCAbyX4QkMw2zwQNBAkgQELBchVQFBFy/8Sy/8CAvQAgQEBzwD0AMkQNRIgbpUwWfRZMJRBM/QT4vhCcfgjggiD1gCgEHgQaBA1EDQQONs8cfhC2zz4QoEBAT4cHhYA/lRDGFn0DG+hkjBt3yBu8tCAFvgjyFUgghCKJTJEUATLH1gg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WgQEBzwDJyIJYwAAAAAAAAAAAAAAAAQHLZ8zJcPsAVQMBaoIAlHiBAQFUVwBxAUEz9AxvoZQB1wAwkltt4lghbpJbcJG64vL0+EIWFRRDMHGCCIPWANs8HAL4ggCUeIEBAVRXAFJQQTP0DG+hlAHXADCSW23iWCFukltwkbri8vQgpZMgwgCK6DCBAQv4QiVZWfQLb6GSMG3fIG6SMG2OGNDT/9P/9ASBAQHXAFkC9AQFBFAzbBVvBeIgbvLQgG8lbEGBAQFTIEEz9AxvoZQB1wAwkltt4hobAJzIVSCCEAcgOidQBMsfWCDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFssHgQEBzwDJyIJYwAAAAAAAAAAAAAAAAQHLZ8zJcPsAVQMAuIIAvSeBAQv4QidZWfQLb6GSMG3fIG6SMG2OGNDT/9P/9ASBAQHXAFkC9AQFBFAzbBVvBeIgbvLQgG8lbEGBAQFTMEEz9AxvoZQB1wAwkltt4iBu8tCA+CO+8vSlAmYgbvLQgMAAjpj4QvgjggiD1gCgEGciEGgQWBBIEDgB2zyOj/hCFhUUQzAmggiD1gDbPOIcHAHsJYEBCyRZ9AtvoZIwbd8gbpIwbY4Y0NP/0//0BIEBAdcAWQL0BAUEUDNsFW8F4iBu8tCAbyWBAQFUUQBSkEEz9AxvoZQB1wAwkltt4iBu8tCAgQEBB6BUEwYQNxAoIW6VW1n0WjCYyAHPAEEz9ELiQUQDgQELBR0AUMhVQFBFy/8Sy/8CAvQAgQEBzwD0AMkQNRIgbpUwWfRZMJRBM/QT4gIDNCHAAZF/kyHABuKPDCHAApF/kyHAB+LjD+MNHyAhAf6BAQGBAQtURhNZ9AtvoZIwbd8gbpIwbY4Y0NP/0//0BIEBAdcAWQL0BAUEUDNsFW8F4iBu8tCAbyUQNF8EJFlZ9AxvoZIwbd8gbvLQgIEBAYEBC1RGE1n0C2+hkjBt3yBukjBtjhjQ0//T//QEgQEB1wBZAvQEBQRQM2wVbwXiIgNUIcADkX+TIcAI4o8cIcAEkX+TIcAJ4o6OIcAFkX+TIcAK4pFb4w3jDeMNJCUmAe6BAQGBAQtURhNZ9AtvoZIwbd8gbpIwbY4Y0NP/0//0BIEBAdcAWQL0BAUEUDNsFW8F4iBu8tCAbyUQNF8EJFlZ9AxvoZIwbd8gbvLQgIEBAVRWAFJAQTP0DG+hlAHXADCSW23iIG7y0ICCANVXIcIA8vQlgQELIzAB+CBu8tCAbyUQNF8EJFlZ9AxvoZIwbd8gbvLQgIEBAVRWAFJAQTP0DG+hlAHXADCSW23iIG7y0ICCANVXIcIA8vQlgQELI1n0C2+hkjBt3yBukjBtjhjQ0//T//QEgQEB1wBZAvQEBQRQM2wVbwXiIG7y0IBvJWxBgQEBU0AjAjJBM/QMb6GUAdcAMJJbbeIgbvLQgPgjvuMPMTIB/oEBAYEBC1RGE1n0C2+hkjBt3yBukjBtjhjQ0//T//QEgQEB1wBZAvQEBQRQM2wVbwXiIG7y0IBvJRA0XwQkWVn0DG+hkjBt3yBu8tCAgQEBgQELVEYTWfQLb6GSMG3fIG6SMG2OGNDT/9P/9ASBAQHXAFkC9AQFBFAzbBVvBeInAf6BAQGBAQtURhNZ9AtvoZIwbd8gbpIwbY4Y0NP/0//0BIEBAdcAWQL0BAUEUDNsFW8F4iBu8tCAbyUQNF8EJFlZ9AxvoZIwbd8gbvLQgIEBAYEBC1RGE1n0C2+hkjBt3yBukjBtjhjQ0//T//QEgQEB1wBZAvQEBQRQM2wVbwXiKwH+gQEBgQELVEYTWfQLb6GSMG3fIG6SMG2OGNDT/9P/9ASBAQHXAFkC9AQFBFAzbBVvBeIgbvLQgG8lEDRfBCRZWfQMb6GSMG3fIG7y0ICBAQGBAQtURhNZ9AtvoZIwbd8gbpIwbY4Y0NP/0//0BIEBAdcAWQL0BAUEUDNsFW8F4i4B9CBu8tCAbyUQNF8EJFlZ9AxvoZIwbd8gbvLQgIEBAYEBC1RGE1n0C2+hkjBt3yBukjBtjhjQ0//T//QEgQEB1wBZAvQEBQRQM2wVbwXiIG7y0IBvJRA0XwQkWVn0DG+hkjBt3yBu8tCAgQEBgQELVEYTWfQLb6GSMG3fKAH0IG6SMG2OGNDT/9P/9ASBAQHXAFkC9AQFBFAzbBVvBeIgbvLQgG8lEDRfBCRZWfQMb6GSMG3fIG7y0ICBAQGBAQtURhNZ9AtvoZIwbd8gbpIwbY4Y0NP/0//0BIEBAdcAWQL0BAUEUDNsFW8F4iBu8tCAbyUQNF8EJFkpAfxZ9AxvoZIwbd8gbvLQgIEBAVRWAFJAQTP0DG+hlAHXADCSW23iIG7y0ICCANVXIcIA8vQlgQELI1n0C2+hkjBt3yBukjBtjhjQ0//T//QEgQEB1wBZAvQEBQRQM2wVbwXiIG7y0IBvJWxBgQEBU0BBM/QMb6GUAdcAMJJbbeIqAhQgbvLQgPgjvuMPMTIB9CBu8tCAbyUQNF8EJFlZ9AxvoZIwbd8gbvLQgIEBAYEBC1RGE1n0C2+hkjBt3yBukjBtjhjQ0//T//QEgQEB1wBZAvQEBQRQM2wVbwXiIG7y0IBvJRA0XwQkWVn0DG+hkjBt3yBu8tCAgQEBgQELVEYTWfQLb6GSMG3fLAHcIG6SMG2OGNDT/9P/9ASBAQHXAFkC9AQFBFAzbBVvBeIgbvLQgG8lEDRfBCRZWfQMb6GSMG3fIG7y0ICBAQFUVgBSQEEz9AxvoZQB1wAwkltt4iBu8tCAggDVVyHCAPL0JYEBCyNZ9AtvoZIwbd8tAo4gbpIwbY4Y0NP/0//0BIEBAdcAWQL0BAUEUDNsFW8F4iBu8tCAbyVsQYEBAVNAQTP0DG+hlAHXADCSW23iIG7y0ID4I77jDzEyAf4gbvLQgG8lEDRfBCRZWfQMb6GSMG3fIG7y0ICBAQGBAQtURhNZ9AtvoZIwbd8gbpIwbY4Y0NP/0//0BIEBAdcAWQL0BAUEUDNsFW8F4iBu8tCAbyUQNF8EJFlZ9AxvoZIwbd8gbvLQgIEBAVRWAFJAQTP0DG+hlAHXADCSW23iLwLGIG7y0ICCANVXIcIA8vQlgQELI1n0C2+hkjBt3yBukjBtjhjQ0//T//QEgQEB1wBZAvQEBQRQM2wVbwXiIG7y0IBvJWxBgQEBU0BBM/QMb6GUAdcAMJJbbeIgbvLQgPgjvuMPMTICoFn0C2+hkjBt3yBukjBtjhjQ0//T//QEgQEB1wBZAvQEBQRQM2wVbwXiIG7y0IBvJWxBgQEBU0BBM/QMb6GUAdcAMJJbbeIgbvLQgPgjvuMPMTIB9n8iAhJwbW1t2zz4Qlj4I8hVMIIQqWC64lAFyx9QAyDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFgEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbLB4EBAc8AyciCWMAAAAAAAAAAAAAAAAEBy2fMyXD7ADMA7DD4QlRhMfgjyFUwghD8eLf2UAXLH1ADINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFssHgQEBzwDJyIJYwAAAAAAAAAAAAAAAAQHLZ8zJcPsA8EQByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsANACYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAJNs7pINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiNs8VQTbPGxRgTjcCU7E3AEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCI2zwQRlUT2zxsUYE4/BPYjgQELIln0C2+hkjBt3yBukjBtjhjQ0//T//QEgQEB1wBZAvQEBQRQM2wVbwXiIG7y0IBvJTBsIjHBAtzbPCWBAQskWfQLb6GSMG3fIG6SMG2OGNDT/9P/9ASBAQHXAFkC9AQFBFAzbBVvBeIgbvLQgG8lMGwicNs82zxTPT44BP6BAQtURhRZ9AtvoZIwbd8gbpIwbY4Y0NP/0//0BIEBAdcAWQL0BAUEUDNsFW8F4iBu8tCAbyUwbCJx2zwS2zxwIMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIf3BwmSDBfpIhs5Fw4oroW2wiPT45OgOsgQELVHZR2zwqWVn0C2+hkjBt3yBukjBtjhjQ0//T//QEgQEB1wBZAvQEBQRQM2wVbwXiIG7y0IBvJTBsIjHAAo6FIME+4wCOi2wxcFRzIds8An8B4qQ9Oz0ADoFKDAGz8vQElIEBC1R2Uds8KllZ9AtvoZIwbd8gbpIwbY4Y0NP/0//0BIEBAdcAWQL0BAUEUDNsFW8F4iBu8tCAbyUwbCJw2zxGUNs8gQELVHIVPT0+PAN82zwqWVn0C2+hkjBt3yBukjBtjhjQ0//T//QEgQEB1wBZAvQEBQRQM2wVbwXiIG7y0IBvJTBsInHbPNs8UFQ9PT4AVIEbIyLCAPL0gUuFIcL/8vQggV3GA7kS8vSAEAFZ9A5voZIwbd8gbvLQgABCggCl5SKkgScQu/L0EoAQUjIgbpUwWfRbMJRBM/QW4gGkAKSBAQtURRNZ9AtvoZIwbd8gbpIwbY4Y0NP/0//0BIEBAdcAWQL0BAUEUDNsFW8F4iBu8tCAbyVsQYEBAVQQIUEz9AxvoZQB1wAwkltt4iBu8tCAAgFYQkMCAUhVVgIBIERFAgEgTE0CAVhGRwIRr0btnm2eNijATkoCS6ekQa6TAgIXdeXBEEGuFhRBAgn/deWhEwYTdeXBEbZ4qgm2eNilTkgCDdO2ebZ42KNOSQDcggDppSSBAQsjWfQLb6GSMG3fIG6SMG2OGNDT/9P/9ASBAQHXAFkC9AQFBFAzbBVvBeJus/L0gQELJAJZ9AtvoZIwbd8gbpIwbY4Y0NP/0//0BIEBAdcAWQL0BAUEUDNsFW8F4iBu8tCAbyUwbCIAAiEBDvgnbxB52zxLANogwQEhwk2x8tCGyCLBAJiALQHLBwKjAt5/cG8ABI4bBHqpDCDAAFIwsLObcDOmMBRvjASkBAORMOIE5AGzlwKALm+MAqTejhADeqkMpjATb4wDpCLAABA05jMipQOaUxJvgQHLBwKlAuRsIcnQAhGvlm2ebZ42KMBOTwC5rejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJAAZ7tRNDUAfhj0gABjjT6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAfQE9ATUAdD0BNP/MBAlECQQI2wV4DD4KNcLCoMJuvLgids8UAACIgH2bW1t+EKBAQFxghAR4aMAIhBHIW6VW1n0WjCYyAHPAEEz9ELigQEBcoIQHc1lACIhbpVbWfRaMJjIAc8AQTP0QuKBAQFzghA7msoAIiFulVtZ9FowmMgBzwBBM/RC4oEBAXSCEO5rKAAiIW6VW1n0WjCYyAHPAEEz9ELiUQH2gQEBdYISVAvkACIhbpVbWfRaMJjIAc8AQTP0QuKBAQF2ghgF0h26ACIhbpVbWfRaMJjIAc8AQTP0QuKBAQF3ghgLpDt0ACIhbpVbWfRaMJjIAc8AQTP0QuKBAQF4ghgXSHboACIhbpVbWfRaMJjIAc8AQTP0QuKBAQF5UgLighgukO3QACIhbpVbWfRaMJjIAc8AQTP0QuKBAQF6ghhdIdugACIhbpVbWfRaMJjIAc8AQTP0QuJxbXGTIMELjiOBAQGCGAzvXoDjUxIQRVkhbpVbWfRaMJjIAc8AQTP0QuIBpOgwcds8JARVMIEBCwVTVAAEbXAAfMhVQFBFy/8Sy/8CAvQAgQEBzwD0AMkmEDYBIG6VMFn0WTCUQTP0E+ICgQEBU0UgbpUwWfRaMJRBM/QU4lADABGwr7tRNDSAAGAAdbJu40NWlwZnM6Ly9RbWFkR3llcVo4dXdtdVlFVzRUZnBnRGFGdGFSYlppUGlmaXIzdmRZc0xRczRNgg');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initThreading_init_args({ $$type: 'Threading_init_args' })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const Threading_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack undeflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    4845: { message: `User exist` },
    6947: { message: `No items in the array!` },
    7694: { message: `Incorrect referrer Id` },
    17848: { message: `No items in the array to delete!` },
    18740: { message: `User not exist` },
    18956: { message: `No Free Referrer` },
    19333: { message: `Index of the item cannot be negative!` },
    24006: { message: `Index is out of array bounds!` },
    38008: { message: `Incorrect Value` },
    39321: { message: `Incorrect level` },
    42469: { message: `No space in the array left for new items!` },
    48423: { message: `Buy the previous level` },
    54615: { message: `Insufficient balance` },
    59813: { message: `User does not exist` },
    62236: { message: `Incorrect referrer` },
}

const Threading_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"Array","header":null,"fields":[{"name":"map","type":{"kind":"dict","key":"uint","keyFormat":16,"value":"address"}},{"name":"length","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"RegLevelEvent","header":2317693508,"fields":[{"name":"_user","type":{"kind":"simple","type":"address","optional":false}},{"name":"_referrer","type":{"kind":"simple","type":"address","optional":false}},{"name":"_time","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"BuyLevelEvent","header":119552551,"fields":[{"name":"_user","type":{"kind":"simple","type":"address","optional":false}},{"name":"_level","type":{"kind":"simple","type":"uint","optional":false,"format":8}},{"name":"_time","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"ProlongateLevelEvent","header":2949451230,"fields":[{"name":"_user","type":{"kind":"simple","type":"address","optional":false}},{"name":"_level","type":{"kind":"simple","type":"uint","optional":false,"format":8}},{"name":"_time","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"GetMoneyForLevelEvent","header":2841688802,"fields":[{"name":"_user","type":{"kind":"simple","type":"address","optional":false}},{"name":"_referrer","type":{"kind":"simple","type":"address","optional":false}},{"name":"_level","type":{"kind":"simple","type":"uint","optional":false,"format":8}},{"name":"_time","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"LostMoneyForLevelEvent","header":4235769846,"fields":[{"name":"_user","type":{"kind":"simple","type":"address","optional":false}},{"name":"_referrer","type":{"kind":"simple","type":"address","optional":false}},{"name":"_level","type":{"kind":"simple","type":"uint","optional":false,"format":8}},{"name":"_time","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"Withdraw","header":3122446785,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"data","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"Register","header":1074304679,"fields":[{"name":"referrerID","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"BuyLevel","header":1281703468,"fields":[{"name":"level","type":{"kind":"simple","type":"uint","optional":false,"format":8}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"UserStruct","header":null,"fields":[{"name":"id","type":{"kind":"simple","type":"uint","optional":false,"format":256}},{"name":"referrerID","type":{"kind":"simple","type":"uint","optional":false,"format":256}},{"name":"referral","type":{"kind":"simple","type":"Array","optional":false}},{"name":"levelExpired","type":{"kind":"dict","key":"int","value":"int"}}]},
]

const Threading_getters: ABIGetter[] = [
    {"name":"findFreeReferrer","arguments":[{"name":"_user","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"simple","type":"address","optional":false}},
    {"name":"viewUserReferral","arguments":[{"name":"_user","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"simple","type":"Array","optional":false}},
    {"name":"viewUserLevelExpired","arguments":[{"name":"_user","type":{"kind":"simple","type":"address","optional":false}},{"name":"_level","type":{"kind":"simple","type":"int","optional":false,"format":257}}],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"userList","arguments":[],"returnType":{"kind":"dict","key":"int","value":"address"}},
    {"name":"users","arguments":[],"returnType":{"kind":"dict","key":"address","value":"UserStruct","valueFormat":"ref"}},
    {"name":"contractBalance","arguments":[],"returnType":{"kind":"simple","type":"string","optional":false}},
]

const Threading_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"Withdraw"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Register"}},
    {"receiver":"internal","message":{"kind":"typed","type":"BuyLevel"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export default class Threading implements Contract {
    
    static async init() {
        return await Threading_init();
    }
    
    static async fromInit() {
        const init = await Threading_init();
        const address = contractAddress(0, init);
        return new Threading(address, init);
    }
    
    static fromAddress(address: Address) {
        return new Threading(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  Threading_types,
        getters: Threading_getters,
        receivers: Threading_receivers,
        errors: Threading_errors,
    };
    
    constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: Withdraw | Register | BuyLevel | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Withdraw') {
            body = beginCell().store(storeWithdraw(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Register') {
            body = beginCell().store(storeRegister(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'BuyLevel') {
            body = beginCell().store(storeBuyLevel(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getFindFreeReferrer(provider: ContractProvider, _user: Address) {
        let builder = new TupleBuilder();
        builder.writeAddress(_user);
        let source = (await provider.get('findFreeReferrer', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
    async getViewUserReferral(provider: ContractProvider, _user: Address) {
        let builder = new TupleBuilder();
        builder.writeAddress(_user);
        let source = (await provider.get('viewUserReferral', builder.build())).stack;
        const result = loadTupleArray(source);
        return result;
    }
    
    async getViewUserLevelExpired(provider: ContractProvider, _user: Address, _level: bigint) {
        let builder = new TupleBuilder();
        builder.writeAddress(_user);
        builder.writeNumber(_level);
        let source = (await provider.get('viewUserLevelExpired', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getUserList(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('userList', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), Dictionary.Values.Address(), source.readCellOpt());
        return result;
    }
    
    async getUsers(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('users', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.Address(), dictValueParserUserStruct(), source.readCellOpt());
        return result;
    }
    
    async getContractBalance(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('contractBalance', builder.build())).stack;
        let result = source.readString();
        return result;
    }
    
}
