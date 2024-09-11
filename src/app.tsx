import { Dialog } from './components/ui/dialog';
// import { EmptyGoal } from './components/empty-goal';
import { Summary } from './components/summary';
import { CreateGoal } from './components/create-goal';

export function App() {
  return (
    <Dialog>
      {/* <EmptyGoal /> */}
      <Summary />
      <CreateGoal />
    </Dialog>
  );
}
