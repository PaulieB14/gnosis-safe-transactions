import {
  ExecutionSuccess as ExecutionSuccessEvent,
  RemovedOwner as RemovedOwnerEvent,
  SafeReceived as SafeReceivedEvent,
  SafeSetup as SafeSetupEvent,
  SignMsg as SignMsgEvent,
} from '../generated/GnosisSafe/GnosisSafe'
import {
  ExecutionSuccess,
  RemovedOwner,
  SafeReceived,
  SafeSetup,
  SignMsg,
} from '../generated/schema'

export function handleExecutionSuccess(event: ExecutionSuccessEvent): void {
  let entity = new ExecutionSuccess(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.txHash = event.params.txHash
  entity.payment = event.params.payment

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRemovedOwner(event: RemovedOwnerEvent): void {
  let entity = new RemovedOwner(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSafeReceived(event: SafeReceivedEvent): void {
  let entity = new SafeReceived(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.sender = event.params.sender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSafeSetup(event: SafeSetupEvent): void {
  let entity = new SafeSetup(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )

  // Manual conversion of Address[] to Bytes[]
  let ownersBytes: Bytes[] = new Array<Bytes>(event.params.owners.length)
  for (let i = 0; i < event.params.owners.length; i++) {
    ownersBytes[i] = event.params.owners[i].toBytes()
  }
  entity.owners = ownersBytes

  entity.initiator = event.params.initiator
  entity.threshold = event.params.threshold
  entity.initializer = event.params.initializer
  entity.fallbackHandler = event.params.fallbackHandler

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSignMsg(event: SignMsgEvent): void {
  let entity = new SignMsg(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.msgHash = event.params.msgHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
