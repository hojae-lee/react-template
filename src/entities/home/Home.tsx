import { useEffect } from 'react'
import Welcome from '@entities/home/components/Welcom.tsx'

const Home = () => {
  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <Welcome />
    </div>
  )
}

export default Home
