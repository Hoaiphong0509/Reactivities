import { observer } from 'mobx-react-lite'
import { Route, useLocation } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'
import ActivityDetail from '../../features/activities/details/ActivityDetail'
import ActivityForm from '../../features/activities/form/ActivityForm'
import HomePage from '../../features/home/HomePage'
import Navbar from './Navbar'

function App() {
  const location = useLocation()
  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <Navbar />
            <Container style={{ marginTop: '7em' }}>
              <Route exact path='/activities' component={ActivityDashboard} />
              <Route path='/activities/:id' component={ActivityDetail} />
              <Route
                key={location.key}
                path={['/createActivity', '/manage/:id']}
                component={ActivityForm}
              />
            </Container>
          </>
        )}
      ></Route>
    </>
  )
}

export default observer(App)
