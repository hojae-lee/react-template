import { WelcomeType } from '@entities/home/types/index.ts'

const Welcome = ({ welcome = 'Welcom to My App' }: WelcomeType) => (
  <div className="mb-8">
    <h1 className="text-4xl font-bold mb-6">{welcome}</h1>
    <p className="text-xl">다양한 서비스를 경험해보세요!</p>
  </div>
)

export default Welcome
