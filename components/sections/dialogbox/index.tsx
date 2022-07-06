import type {
  ComponentType,
  Dispatch,
  FunctionComponent,
  ReactNode,
  SetStateAction,
  SVGProps,
} from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Button from "../../elements/button";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  message: string;
  action?: {
    name: ReactNode;
    onClick: () => void;
  };
}

const Dialogbox: FunctionComponent<Props> = ({
  Icon,
  isOpen,
  setIsOpen,
  title,
  message,
  action,
}: Props) => {
  const closeDialogbox = () => {
    setIsOpen(false);
  };

  const eventHandler = () => {
    setIsOpen(false);
    action?.onClick();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeDialogbox}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="grid min-h-full place-items-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="w-full max-w-md rounded-base bg-primary-light p-6 transition-all">
                <Dialog.Title
                  as="h3"
                  className="flex items-center gap-2 text-lg font-medium">
                  <Icon className="h-6 w-6" />
                  <span>{title}</span>
                </Dialog.Title>
                <div className="mt-2 text-sm text-fade-dark">
                  <p>{message}</p>
                </div>
                <div className="mt-5 flex justify-end gap-2">
                  <Button onClick={closeDialogbox} variant="transparent">
                    Close
                  </Button>
                  {action && (
                    <Button onClick={eventHandler}>{action.name}</Button>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Dialogbox;
