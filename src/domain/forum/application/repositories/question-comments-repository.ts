import { PaginationParams } from '@/core/repositories/pagination-params'
import { QuestionComment } from '../../enterprise/entities/question-comment'

export abstract class QuestionCommentsRepository {
  abstract findById(commentId: string): Promise<QuestionComment | null>
  abstract findManyByQuestionId(
    questionId: string,
    params: PaginationParams,
  ): Promise<QuestionComment[]>

  abstract delete(questionComment: QuestionComment): Promise<void>
  abstract create(questionComment: QuestionComment): Promise<void>
}
