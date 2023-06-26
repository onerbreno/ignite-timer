import { Cycle } from './reducer'

export enum ActionsType {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_AS_FINISHED = 'MARK_CURRENT_AS_FINISHED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionsType.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionsType.INTERRUPT_CURRENT_CYCLE,
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionsType.MARK_CURRENT_AS_FINISHED,
  }
}
