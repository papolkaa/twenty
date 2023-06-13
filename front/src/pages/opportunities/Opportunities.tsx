import { FaBullseye } from 'react-icons/fa';

import { WithTopBarContainer } from '@/ui/layout/containers/WithTopBarContainer';
import { AppPage } from '~/AppPage';

import { Board } from '../../modules/opportunities/components/Board';
import { useBoard } from '../../modules/opportunities/hooks/useBoard';

export function Opportunities() {
  const { initialBoard, items, pipelines, entities } = useBoard();

  if (pipelines.loading || entities.loading) return <div>Loading...</div>;
  if (pipelines.error || entities.error) return <div>Error...</div>;
  return (
    <AppPage>
      <WithTopBarContainer title="Opportunities" icon={<FaBullseye />}>
        <Board initialBoard={initialBoard} items={items} />
      </WithTopBarContainer>
    </AppPage>
  );
}
