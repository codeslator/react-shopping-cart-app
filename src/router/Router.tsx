import { FC } from 'react';
import { HomePage } from '@/views';
import { Route, Switch } from "wouter";


const Router: FC = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route>This is rendered when nothing above has matched</Route>
    </Switch>
  );
};

export default Router;