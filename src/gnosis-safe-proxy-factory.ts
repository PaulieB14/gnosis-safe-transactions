import { ProxyCreation as ProxyCreationEvent } from '../generated/GnosisSafeProxyFactory/GnosisSafeProxyFactory'
import { ProxyCreation } from '../generated/schema'

export function handleYourEventName(event: YourEventType): void {
  let id = event.transaction.hash.toHex() + '-' + event.logIndex.toString()
  // Now 'id' is a string that combines the transaction hash and log index.

  // Use 'id' for your entity's ID or wherever you need a unique identifier
  let entity = new YourEntityName(id)
  // Set other properties on your entity...

  entity.save()
}
