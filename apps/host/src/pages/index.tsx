import dynamic from 'next/dynamic';
import { useEffect } from 'react';

import { INextEvent, WindowEventService, WindowEvents } from '@shared/ui';

import styles from './index.module.css';

const Header = dynamic(
  () => import('header/Header').then((mod) => mod.Header),
  {
    ssr: false,
  }
);

const Actions = dynamic(
  () => import('actions/Actions').then((mod) => mod.Actions),
  {
    ssr: false,
  }
);

const List = dynamic(() => import('list/List').then((mod) => mod.List), {
  ssr: false,
});

export function Index() {
  const handleNext = (event: Event) => {
    const {
      detail: { requestNext },
    } = event as CustomEvent<INextEvent>;

    WindowEventService.fire(WindowEvents.REQUEST, {
      detail: {
        request: requestNext,
      },
    });
  };

  useEffect(() => {
    WindowEventService.subscribe(WindowEvents.NEXT, handleNext);

    return () => {
      WindowEventService.unsubscribe(WindowEvents.NEXT, handleNext);
    };
  }, []);

  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <Header />
          <Actions />
          <List />
        </div>
      </div>
    </div>
  );
}

export default Index;
