"use client";

import React from 'react'
import { closestCorners, DndContext, useSensor, useSensors, MouseSensor, TouchSensor, KeyboardSensor } from '@dnd-kit/core';
import { postTrackItem, postSidebarItems } from '@/lib/actions';
import { ISidebarItem } from '@/types';
import { SidebarItemProvider } from '@/store/SidebarItemContext';

type ProvidersProps = {
  children: React.ReactNode;
  initItems: ISidebarItem[];
}

const Providers = ({ children, initItems }: ProvidersProps) => {

  const handleDragEnd = async (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    let updatedItems = [...initItems];
    let oldIndex, newIndex, movedItem;

    // Check if the dragged item is a child
    const parentItem = initItems.find(item => item.children?.some(child => child.id === active.id));
    if (parentItem) {
      // Handle child item drag
      oldIndex = parentItem.children!.findIndex(child => child.id === active.id);
      newIndex = parentItem.children!.findIndex(child => child.id === over.id);

      if (oldIndex === -1 || newIndex === -1) return;

      const updatedChildren = [...parentItem.children!];
      [movedItem] = updatedChildren.splice(oldIndex, 1);
      updatedChildren.splice(newIndex, 0, movedItem);

      updatedItems = initItems.map(item =>
        item.id === parentItem.id ? { ...item, children: updatedChildren } : item
      );
    } else {
      // Handle top-level item drag
      oldIndex = initItems.findIndex(item => item.id === active.id);
      newIndex = initItems.findIndex(item => item.id === over.id);

      if (oldIndex === -1 || newIndex === -1) return;

      [movedItem] = updatedItems.splice(oldIndex, 1);
      updatedItems.splice(newIndex, 0, movedItem);
    }

    try {
      await postTrackItem({ id: active.id, from: oldIndex, to: newIndex });
      await postSidebarItems(updatedItems);
      console.log('Items successfully saved');
    } catch (error) {
      console.error('Failed to save items', error);
    }
  };

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor),
  );
  return (
    <SidebarItemProvider>
      <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>{children}</DndContext>
    </SidebarItemProvider>
  )
}

export default Providers