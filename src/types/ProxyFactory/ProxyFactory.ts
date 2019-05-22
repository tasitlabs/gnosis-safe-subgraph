import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ProxyCreation extends EthereumEvent {
  get params(): ProxyCreation__Params {
    return new ProxyCreation__Params(this);
  }
}

export class ProxyCreation__Params {
  _event: ProxyCreation;

  constructor(event: ProxyCreation) {
    this._event = event;
  }

  get proxy(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ProxyFactory extends SmartContract {
  static bind(address: Address): ProxyFactory {
    return new ProxyFactory("ProxyFactory", address);
  }

  proxyCreationCode(): Bytes {
    let result = super.call("proxyCreationCode", []);
    return result[0].toBytes();
  }

  proxyRuntimeCode(): Bytes {
    let result = super.call("proxyRuntimeCode", []);
    return result[0].toBytes();
  }
}

export class CreateProxyWithNonceCall extends EthereumCall {
  get inputs(): CreateProxyWithNonceCall__Inputs {
    return new CreateProxyWithNonceCall__Inputs(this);
  }

  get outputs(): CreateProxyWithNonceCall__Outputs {
    return new CreateProxyWithNonceCall__Outputs(this);
  }
}

export class CreateProxyWithNonceCall__Inputs {
  _call: CreateProxyWithNonceCall;

  constructor(call: CreateProxyWithNonceCall) {
    this._call = call;
  }

  get _mastercopy(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get initializer(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get saltNonce(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class CreateProxyWithNonceCall__Outputs {
  _call: CreateProxyWithNonceCall;

  constructor(call: CreateProxyWithNonceCall) {
    this._call = call;
  }

  get proxy(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class CreateProxyCall extends EthereumCall {
  get inputs(): CreateProxyCall__Inputs {
    return new CreateProxyCall__Inputs(this);
  }

  get outputs(): CreateProxyCall__Outputs {
    return new CreateProxyCall__Outputs(this);
  }
}

export class CreateProxyCall__Inputs {
  _call: CreateProxyCall;

  constructor(call: CreateProxyCall) {
    this._call = call;
  }

  get masterCopy(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class CreateProxyCall__Outputs {
  _call: CreateProxyCall;

  constructor(call: CreateProxyCall) {
    this._call = call;
  }

  get proxy(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}
