import { ProxyCreation } from "./types/ProxyFactory/ProxyFactory";
import { ContractBasedAccount } from "./types/schema";

export function handleNewProxy(event: ProxyCreation): void {
  let contractBasedAccount = new ContractBasedAccount(event.params.id.toHex());
  contractBasedAccount.address = event.params.proxy;
  contractBasedAccount.save();
}
