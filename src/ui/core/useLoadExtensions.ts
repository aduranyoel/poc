import { Extension } from 'poc-core-system';
import { TodoExtension } from 'poc-todo-extension';
import { useEffect, useState } from 'react';

const extensions: Extension[] = [
  new TodoExtension(),
];

export const useLoadExtensions = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      await Promise.allSettled(extensions.map(extension => extension.init()));
      setReady(true);
    })();
  }, []);

  return { ready };
};
