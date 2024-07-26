'use client';

import { useCallback, useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';
import StartRouterChangeContext from './state';

function RouterEventWrapper({
  onStart = () => null,
  onComplete = () => null,
  children
}: React.PropsWithChildren<{ onStart?: () => void; onComplete?: () => void }>) {
  const [isChanging, setIsChanging] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => setIsChanging(false), [pathname, searchParams]);

  useEffect(() => {
    if (isChanging) onStart();
    else onComplete();
  }, [isChanging]);

  return (
    <StartRouterChangeContext.Provider value={() => setIsChanging(true)}>
      {children}
    </StartRouterChangeContext.Provider>
  );
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  const onStart = useCallback(() => NProgress.start(), []);
  const onComplete = useCallback(() => NProgress.done(), []);
  return (
    <RouterEventWrapper onStart={onStart} onComplete={onComplete}>
      {children}
    </RouterEventWrapper>
  );
}
