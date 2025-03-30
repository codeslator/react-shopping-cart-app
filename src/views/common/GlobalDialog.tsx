import { FC } from 'react';
import { Button } from '@/components/ui/button'
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface GlobalDialogProps {}

const GlobalDialog: FC<GlobalDialogProps> = ({}) => {
  return (
    <div>GlobalDialog</div>
  );
};

export default GlobalDialog;