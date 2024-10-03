// src/components/CustomDialog.tsx
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';


const CustomDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Open Dialog
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg max-w-md w-full p-6">
          <Dialog.Title className="text-lg font-medium text-gray-900">
            Dialog Title
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-gray-700">
            This is a description of the dialog. It provides additional context for the user.
          </Dialog.Description>

          <div className="mt-4">
            <button className="px-4 py-2 bg-green-500 text-white rounded-md">
              Confirm
            </button>
          </div>

          <Dialog.Close asChild>
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CustomDialog;
