import { Module } from '@nestjs/common'
import { BcryptHasher } from './bcrypt-hasher'
import { JwtEncrypter } from './jwt-encrypter'
import { Encrypter } from '@/domain/forum/application/cryptograph/encrypter'
import { HashComparer } from '@/domain/forum/application/cryptograph/hash-comparer'
import { HashGenerator } from '@/domain/forum/application/cryptograph/hash-generator'

@Module({
  providers: [
    { provide: Encrypter, useClass: JwtEncrypter },
    { provide: HashComparer, useClass: BcryptHasher },
    { provide: HashGenerator, useClass: BcryptHasher },
  ],
  exports: [Encrypter, HashComparer, HashGenerator],
})
export class CryptographModule {}
