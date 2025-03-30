import { FC } from 'react';
import { CheckoutPage, HomePage, NotFound, SignInPage, SignUpPage } from '@/views';
import { Route, Switch } from "wouter";
import { PATHS } from '@/global';


const Router: FC = () => {
  return (
    <Switch>
      <Route path={PATHS.ROOT} component={HomePage} />
      <Route path={PATHS.HOME} component={HomePage} />
      <Route path={PATHS.CHECKOUT} component={CheckoutPage} />
      <Route path={PATHS.AUTH} nest>
        <Route path={PATHS.SIGN_IN} component={SignInPage} />
        <Route path={PATHS.SIGN_UP} component={SignUpPage} />
      </Route>
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Router;