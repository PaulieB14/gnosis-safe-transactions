import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  AddedOwner,
  ApproveHash,
  ChangedFallbackHandler,
  ChangedGuard,
  ChangedThreshold,
  DisabledModule,
  EnabledModule,
  ExecutionFailure,
  ExecutionFromModuleFailure,
  ExecutionFromModuleSuccess,
  ExecutionSuccess,
  RemovedOwner,
  SafeReceived,
  SafeSetup,
  SignMsg
} from "../generated/GnosisSafe/GnosisSafe"

export function createAddedOwnerEvent(owner: Address): AddedOwner {
  let addedOwnerEvent = changetype<AddedOwner>(newMockEvent())

  addedOwnerEvent.parameters = new Array()

  addedOwnerEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return addedOwnerEvent
}

export function createApproveHashEvent(
  approvedHash: Bytes,
  owner: Address
): ApproveHash {
  let approveHashEvent = changetype<ApproveHash>(newMockEvent())

  approveHashEvent.parameters = new Array()

  approveHashEvent.parameters.push(
    new ethereum.EventParam(
      "approvedHash",
      ethereum.Value.fromFixedBytes(approvedHash)
    )
  )
  approveHashEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return approveHashEvent
}

export function createChangedFallbackHandlerEvent(
  handler: Address
): ChangedFallbackHandler {
  let changedFallbackHandlerEvent = changetype<ChangedFallbackHandler>(
    newMockEvent()
  )

  changedFallbackHandlerEvent.parameters = new Array()

  changedFallbackHandlerEvent.parameters.push(
    new ethereum.EventParam("handler", ethereum.Value.fromAddress(handler))
  )

  return changedFallbackHandlerEvent
}

export function createChangedGuardEvent(guard: Address): ChangedGuard {
  let changedGuardEvent = changetype<ChangedGuard>(newMockEvent())

  changedGuardEvent.parameters = new Array()

  changedGuardEvent.parameters.push(
    new ethereum.EventParam("guard", ethereum.Value.fromAddress(guard))
  )

  return changedGuardEvent
}

export function createChangedThresholdEvent(
  threshold: BigInt
): ChangedThreshold {
  let changedThresholdEvent = changetype<ChangedThreshold>(newMockEvent())

  changedThresholdEvent.parameters = new Array()

  changedThresholdEvent.parameters.push(
    new ethereum.EventParam(
      "threshold",
      ethereum.Value.fromUnsignedBigInt(threshold)
    )
  )

  return changedThresholdEvent
}

export function createDisabledModuleEvent(module: Address): DisabledModule {
  let disabledModuleEvent = changetype<DisabledModule>(newMockEvent())

  disabledModuleEvent.parameters = new Array()

  disabledModuleEvent.parameters.push(
    new ethereum.EventParam("module", ethereum.Value.fromAddress(module))
  )

  return disabledModuleEvent
}

export function createEnabledModuleEvent(module: Address): EnabledModule {
  let enabledModuleEvent = changetype<EnabledModule>(newMockEvent())

  enabledModuleEvent.parameters = new Array()

  enabledModuleEvent.parameters.push(
    new ethereum.EventParam("module", ethereum.Value.fromAddress(module))
  )

  return enabledModuleEvent
}

export function createExecutionFailureEvent(
  txHash: Bytes,
  payment: BigInt
): ExecutionFailure {
  let executionFailureEvent = changetype<ExecutionFailure>(newMockEvent())

  executionFailureEvent.parameters = new Array()

  executionFailureEvent.parameters.push(
    new ethereum.EventParam("txHash", ethereum.Value.fromFixedBytes(txHash))
  )
  executionFailureEvent.parameters.push(
    new ethereum.EventParam(
      "payment",
      ethereum.Value.fromUnsignedBigInt(payment)
    )
  )

  return executionFailureEvent
}

export function createExecutionFromModuleFailureEvent(
  module: Address
): ExecutionFromModuleFailure {
  let executionFromModuleFailureEvent = changetype<ExecutionFromModuleFailure>(
    newMockEvent()
  )

  executionFromModuleFailureEvent.parameters = new Array()

  executionFromModuleFailureEvent.parameters.push(
    new ethereum.EventParam("module", ethereum.Value.fromAddress(module))
  )

  return executionFromModuleFailureEvent
}

export function createExecutionFromModuleSuccessEvent(
  module: Address
): ExecutionFromModuleSuccess {
  let executionFromModuleSuccessEvent = changetype<ExecutionFromModuleSuccess>(
    newMockEvent()
  )

  executionFromModuleSuccessEvent.parameters = new Array()

  executionFromModuleSuccessEvent.parameters.push(
    new ethereum.EventParam("module", ethereum.Value.fromAddress(module))
  )

  return executionFromModuleSuccessEvent
}

export function createExecutionSuccessEvent(
  txHash: Bytes,
  payment: BigInt
): ExecutionSuccess {
  let executionSuccessEvent = changetype<ExecutionSuccess>(newMockEvent())

  executionSuccessEvent.parameters = new Array()

  executionSuccessEvent.parameters.push(
    new ethereum.EventParam("txHash", ethereum.Value.fromFixedBytes(txHash))
  )
  executionSuccessEvent.parameters.push(
    new ethereum.EventParam(
      "payment",
      ethereum.Value.fromUnsignedBigInt(payment)
    )
  )

  return executionSuccessEvent
}

export function createRemovedOwnerEvent(owner: Address): RemovedOwner {
  let removedOwnerEvent = changetype<RemovedOwner>(newMockEvent())

  removedOwnerEvent.parameters = new Array()

  removedOwnerEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return removedOwnerEvent
}

export function createSafeReceivedEvent(
  sender: Address,
  value: BigInt
): SafeReceived {
  let safeReceivedEvent = changetype<SafeReceived>(newMockEvent())

  safeReceivedEvent.parameters = new Array()

  safeReceivedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  safeReceivedEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return safeReceivedEvent
}

export function createSafeSetupEvent(
  initiator: Address,
  owners: Array<Address>,
  threshold: BigInt,
  initializer: Address,
  fallbackHandler: Address
): SafeSetup {
  let safeSetupEvent = changetype<SafeSetup>(newMockEvent())

  safeSetupEvent.parameters = new Array()

  safeSetupEvent.parameters.push(
    new ethereum.EventParam("initiator", ethereum.Value.fromAddress(initiator))
  )
  safeSetupEvent.parameters.push(
    new ethereum.EventParam("owners", ethereum.Value.fromAddressArray(owners))
  )
  safeSetupEvent.parameters.push(
    new ethereum.EventParam(
      "threshold",
      ethereum.Value.fromUnsignedBigInt(threshold)
    )
  )
  safeSetupEvent.parameters.push(
    new ethereum.EventParam(
      "initializer",
      ethereum.Value.fromAddress(initializer)
    )
  )
  safeSetupEvent.parameters.push(
    new ethereum.EventParam(
      "fallbackHandler",
      ethereum.Value.fromAddress(fallbackHandler)
    )
  )

  return safeSetupEvent
}

export function createSignMsgEvent(msgHash: Bytes): SignMsg {
  let signMsgEvent = changetype<SignMsg>(newMockEvent())

  signMsgEvent.parameters = new Array()

  signMsgEvent.parameters.push(
    new ethereum.EventParam("msgHash", ethereum.Value.fromFixedBytes(msgHash))
  )

  return signMsgEvent
}
