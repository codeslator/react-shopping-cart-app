import { FC } from 'react';
import { HomePage } from '@/views';
import { Route, Switch } from "wouter";
import { PATHS } from '@/global';


const Router: FC = () => {
  return (
    <Switch>
      <Route path={PATHS.ROOT} component={HomePage} />
      <Route path={PATHS.HOME} component={HomePage} />
      <Route path={PATHS.CHECKOUT} component={HomePage} />
      <Route path={PATHS.GUITAR} component={HomePage} />
      <Route>Error</Route>
    </Switch>
  );
};

export default Router;