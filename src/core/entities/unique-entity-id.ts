import { randomUUID } from 'node:crypto'

export class UniqueEntityId {
  private value: string

  toString() {
    return this.value
  }

  toValue() {
    return this.value
  }

  constructor(value: string | null = null) {
    this.value = value ?? randomUUID()
  }

  public equals(id: UniqueEntityId): boolean {
    return id.toValue() === this.value
  }
}
