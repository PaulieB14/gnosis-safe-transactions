import { ProxyCreation as ProxyCreationEvent } from '../generated/GnosisSafeProxyFactory/GnosisSafeProxyFactory'
import { ProxyCreation } from '../generated/schema'

export function handleProxyCreation(event: ProxyCreationEvent): void {
  let id = event.transaction.hash.toHex() + '-' + event.logIndex.toString()

  let entity = new ProxyCreation(id)
  entity.proxy = event.params.proxy // Directly assign, no conversion needed
  entity.singleton = event.params.singleton // Directly assign, no conversion needed
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
