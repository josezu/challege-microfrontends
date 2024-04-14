import { Button, WindowEventService, WindowEvents } from '@shared/ui';

import styles from './Actions.module.css';

export function Actions({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const triggerNext = () => {
    WindowEventService.fire(WindowEvents.NEXT, {
      detail: {
        requestNext: true,
      },
    });
  };

  return (
    <div className={styles.actions} {...props}>
      <Button text="Cambiar" onClick={triggerNext} />
      {children}
    </div>
  );
}

export default Actions;
