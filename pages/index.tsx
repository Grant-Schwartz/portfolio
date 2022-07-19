import { Nav } from 'components/Nav'
import type { NextPage } from 'next'
import { Grid } from 'components/Grid'

const Home: NextPage = () => {
  return (
    <div>
      <Nav />
      <Grid />
    </div>
  )
}

export default Home
