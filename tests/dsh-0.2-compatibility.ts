import type {
  GenerateOptions,
  Message,
  StreamChunk,
  TokenUsage,
} from '@deepseek-ai/dsh-llm'
import type {
  Session,
  SessionEvent,
  SessionEventMap,
} from '@deepseek-ai/dsh-session'
import type {
  DshEventDataMap,
  DshGenerateOptions,
  DshMessage,
  DshSession,
  DshSessionEvent,
  DshStreamChunk,
  DshTokenUsage,
} from '../src/dsh-types.js'

type Assignable<From, To> = [From] extends [To] ? true : false
type Assert<Value extends true> = Value

type LatestMessageIsAccepted = Assert<Assignable<Message, DshMessage>>
type LatestGenerateOptionsAreAccepted = Assert<Assignable<GenerateOptions, DshGenerateOptions>>
type LatestStreamChunksAreAccepted = Assert<Assignable<StreamChunk, DshStreamChunk>>
type LatestUsageIsAccepted = Assert<Assignable<TokenUsage, DshTokenUsage>>
type LatestSessionIsAccepted = Assert<Assignable<Session, DshSession>>
type LatestSessionEventsAreAccepted = Assert<Assignable<SessionEvent, DshSessionEvent>>

type LatestUserMessageIsAccepted = Assert<
  Assignable<SessionEventMap['user/message'], DshEventDataMap['user/message']>
>
type LatestDeveloperMessageIsAccepted = Assert<
  Assignable<SessionEventMap['developer/message'], DshEventDataMap['developer/message']>
>
type LatestSystemMessageIsAccepted = Assert<
  Assignable<SessionEventMap['system/message'], DshEventDataMap['system/message']>
>
type LatestAssistantMessageIsAccepted = Assert<
  Assignable<SessionEventMap['assistant/message'], DshEventDataMap['assistant/message']>
>
type LatestToolResultIsAccepted = Assert<
  Assignable<SessionEventMap['tool/result'], DshEventDataMap['tool/result']>
>

export type Dsh020CompatibilityAssertions =
  | LatestMessageIsAccepted
  | LatestGenerateOptionsAreAccepted
  | LatestStreamChunksAreAccepted
  | LatestUsageIsAccepted
  | LatestSessionIsAccepted
  | LatestSessionEventsAreAccepted
  | LatestUserMessageIsAccepted
  | LatestDeveloperMessageIsAccepted
  | LatestSystemMessageIsAccepted
  | LatestAssistantMessageIsAccepted
  | LatestToolResultIsAccepted
