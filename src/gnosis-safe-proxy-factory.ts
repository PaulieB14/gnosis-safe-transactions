import { ProxyCreation as ProxyCreationEvent } from '../generated/GnosisSafeProxyFactory/GnosisSafeProxyFactory'
import { ProxyCreation } from '../generated/schema'

export function handleProxyCreation(event: ProxyCreationEvent): void {
  let id = event.transaction.hash.toHex() + '-' + event.logIndex.toString()
  // 'id' uniquely identifies this ProxyCreation event instance.

  let entity = new ProxyCreation(id)
  // Assuming 'ProxyCreation' is the name of the entity in your GraphQL schema.

  // Set properties on the entity based on the event parameters.
  entity.proxy = event.params.proxy.toHex() // Convert Address to hex string.
  entity.singleton = event.params.singleton.toHex() // Convert Address to hex string.

  // Assuming your entity has fields for block number and timestamp.
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp

  entity.save() // Save the entity to the store.
}
