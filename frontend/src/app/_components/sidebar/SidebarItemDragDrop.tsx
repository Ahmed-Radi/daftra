"use client";

import { SidebarItemDragDropProps } from "@/types";
import { memo } from "react";
import ItemProvider from "./ItemProvider";
import { useSidebarItemContext } from "@/app/store/SidebarItemContext";
import UpdatedItem from "./UpdatedItem";

const SidebarItemDragDrop = ({
  item,
  handleOpenSidebarSubList,
  index,
}: SidebarItemDragDropProps) => {
  const { editingItemId, handleEdit, handleSaveEdit, setNewTitle, newTitle, handleVisibility } =
    useSidebarItemContext();

  return (
    <ItemProvider handleVisibility={handleVisibility} handleOpenEdit={handleEdit} item={item}>
      <div
        key={item.title}
        className='text-gray-700 w-full'>
        {editingItemId === item.id ? (
          <UpdatedItem
            handleSaveEdit={handleSaveEdit}
            newTitle={newTitle}
            setNewTitle={setNewTitle}
          />
        ) : (
          <span onClick={() => handleOpenSidebarSubList(index)}>
            {item.title}
          </span>
        )}
      </div>
    </ItemProvider>
  );
};

export default memo(SidebarItemDragDrop);
