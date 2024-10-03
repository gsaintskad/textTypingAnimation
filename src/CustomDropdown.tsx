// src/components/CustomDropdown.tsx
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon } from '@radix-ui/react-icons';


const CustomDropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
          Options <ChevronDownIcon className="ml-2 w-4 h-4" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[160px] bg-white rounded-md shadow-lg p-2"
          sideOffset={5}
        >
          <DropdownMenu.Item
            className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100 rounded-md"
          >
            Profile
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100 rounded-md"
          >
            Settings
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100 rounded-md"
          >
            Log out
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="h-px bg-gray-200 my-2" />
          <DropdownMenu.Item
            className="px-4 py-2 text-red-600 cursor-pointer hover:bg-gray-100 rounded-md"
          >
            Delete Account
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default CustomDropdown;
