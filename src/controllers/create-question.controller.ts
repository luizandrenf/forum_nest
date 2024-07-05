import { Controller, Post, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard'
import { PrismaService } from 'src/prisma/prisma.service'
// import { z } from 'zod'

// const createQuestionBodySchema = z.object({
//   name: z.string(),
//   email: z.string().email(),
//   password: z.string().min(6),
// })

// type CreateQuestionBodySchema = z.infer<typeof createQuestionBodySchema>

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  constructor(private prisma: PrismaService) {}

  @Post()
  handle() {
    return 'oi'
  }
}
