import Welcome from '@entities/home/components/Welcom.tsx'

import useReadUsersDataHook from '@/entities/home/hooks/useReadUsersDataHook.ts'

const Home = () => {
  const { data } = useReadUsersDataHook()

  if (data) {
    console.log(data)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Welcome />
    </div>
  )
}

export default Home
