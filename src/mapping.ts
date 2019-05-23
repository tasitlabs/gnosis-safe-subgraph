import { ProxyCreation } from "./types/ProxyFactory/ProxyFactory";
import { ContractBasedAccount } from "./types/schema";

export function handleNewProxy(event: ProxyCreation): void {
  let contractBasedAccount = new ContractBasedAccount(
    event.params.proxy.toHex()
  );
  contractBasedAccount.timeCreated = event.block.timestamp;
  contractBasedAccount.save();
}
