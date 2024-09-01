"use client";

import Providers from "@/app/Providers";
import { ISidebarItem } from "@/types";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Fragment } from "react";
import ItemProvider from "./ItemProvider";
import SidebarItemDragDrop from "./SidebarItemDragDrop";
import UpdatedItem from "./UpdatedItem";
import { useSidebarItemContext } from "@/store/SidebarItemContext";

type SidebarListDragDropProps = {
  navItems: ISidebarItem[];
  openSidebar: boolean[];
  handleOpenSidebarSubList: (index: number) => void;
};

const SidebarListDragDrop = ({
  navItems,
  openSidebar,
  handleOpenSidebarSubList,
}: SidebarListDragDropProps) => {
  const { editingItemId, handleEdit, handleSaveEdit, newTitle, setNewTitle, handleVisibility, isPending } =
    useSidebarItemContext();

  return (
    <>
      {!isPending ? navItems.map((item: ISidebarItem, index: number) => (
        <Fragment key={item.id}>
          <SidebarItemDragDrop
            item={item}
            handleOpenSidebarSubList={handleOpenSidebarSubList}
            index={index}
          />
          <div
            className={`transition-all duration-500 overflow-hidden w-full flex flex-col gap-1 ${openSidebar[index]
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
              }`}>
            <Providers initItems={navItems}>
              {item?.children && item.children.length > 0 && (
                <SortableContext
                  items={item.children}
                  strategy={verticalListSortingStrategy}>
                  {item.children.map((subL: ISidebarItem) => (
                    <div
                      key={subL.id}
                      className='p-3 bg-gray-100 font-semibold self-end w-4/5'>
                      <ItemProvider handleVisibility={handleVisibility} handleOpenEdit={handleEdit} item={subL}>
                        {editingItemId === subL.id ? (
                          <UpdatedItem
                            handleSaveEdit={handleSaveEdit}
                            newTitle={newTitle}
                            setNewTitle={setNewTitle}
                          />
                        ) : (
                          subL.title
                        )}
                      </ItemProvider>
                    </div>
                  ))}
                </SortableContext>
              )}
            </Providers>
          </div>
        </Fragment>
      )) : "Loading..."}
    </>
  );
};

export default SidebarListDragDrop;
