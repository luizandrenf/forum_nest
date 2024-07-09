import { HashComparer } from '@/domain/forum/application/cryptograph/hash-comparer'
import { HashGenerator } from '@/domain/forum/application/cryptograph/hash-generator'
import { compare, hash } from 'bcryptjs'

export class BcryptHasher implements HashGenerator, HashComparer {
  private HASH_SALT_LENGHT = 8
  hash(plain: string): Promise<string> {
    return hash(plain, 8)
  }

  compare(plain: string, hash: string): Promise<boolean> {
    return compare(plain, hash)
  }
}
