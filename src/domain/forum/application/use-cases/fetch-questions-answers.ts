import { Either, right } from '@/core/either'
import { Answer } from '../../enterprise/entities/answer'
import { AnswersRepository } from '../repositories/answers-repository'
import { Injectable } from '@nestjs/common'

interface FetchQuestionsAnswersUseCaseRequest {
  questionId: string
  page: number
}

type FetchQuestionsAnswersUseCaseResposnse = Either<
  null,
  {
    answers: Answer[]
  }
>

@Injectable()
export class FetchQuestionsAnswersUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    page,
    questionId,
  }: FetchQuestionsAnswersUseCaseRequest): Promise<FetchQuestionsAnswersUseCaseResposnse> {
    const answers = await this.answersRepository.findManyByQuestionId(
      questionId,
      { page },
    )

    return right({
      answers,
    })
  }
}
