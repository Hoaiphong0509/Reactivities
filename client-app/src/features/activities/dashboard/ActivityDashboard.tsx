import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import ActivityList from './ActivityList'

const ActivityDashboard = () => {
  const { activityStore } = useStore()
  const { loadActivities, activityRegisty } = activityStore

  useEffect(() => {
    if (activityRegisty.size <= 0) loadActivities()
  }, [activityRegisty, loadActivities])

  if (activityStore.loadingInitial)
    return <LoadingComponent content='Loading app' />

  return (
    <Grid>
      <Grid.Column width='10'>
        <ActivityList />
      </Grid.Column>
      <Grid.Column width='6'>
        <h1>Activity filter</h1>
      </Grid.Column>
    </Grid>
  )
}

export default observer(ActivityDashboard)
