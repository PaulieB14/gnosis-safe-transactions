import { Bytes } from '@graphprotocol/graph-ts'
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
  let id = event.transaction.hash.toHex() + '-' + event.logIndex.toString()

  let entity = new ExecutionSuccess(id)
  entity.txHash = event.params.txHash
  entity.payment = event.params.payment

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRemovedOwner(event: RemovedOwnerEvent): void {
  let id = event.transaction.hash.toHex() + '-' + event.logIndex.toString()

  let entity = new RemovedOwner(id)
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSafeReceived(event: SafeReceivedEvent): void {
  let id = event.transaction.hash.toHex() + '-' + event.logIndex.toString()

  let entity = new SafeReceived(id)
  entity.sender = event.params.sender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSafeSetup(event: SafeSetupEvent): void {
  let id = event.transaction.hash.toHex() + '-' + event.logIndex.toString()

  let entity = new SafeSetup(id)

  // Assuming event.params.owners is an array of addresses (Bytes)
  entity.owners = entity.owners

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
  let id = event.transaction.hash.toHex() + '-' + event.logIndex.toString()

  let entity = new SignMsg(id)
  entity.messageHash = event.params.msgHash // Assuming msgHash is of type Bytes

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
