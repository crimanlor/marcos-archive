import { useState, useCallback } from 'react';

interface UseGalleryModalReturn<T> {
  selectedIndex: number | null;
  selectedItem: T | null;
  isOpen: boolean;
  openModal: (index: number) => void;
  closeModal: () => void;
  handleNext: () => void;
  handlePrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

/**
 * Hook personalizado para gestionar el estado de un modal de galería
 * @param items - Array de elementos de la galería
 * @returns Objeto con el estado y funciones del modal
 */
export function useGalleryModal<T>(items: T[]): UseGalleryModalReturn<T> {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handleNext = useCallback(() => {
    if (selectedIndex !== null && selectedIndex < items.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  }, [selectedIndex, items.length]);

  const handlePrevious = useCallback(() => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  }, [selectedIndex]);

  const selectedItem = selectedIndex !== null ? items[selectedIndex] : null;
  const hasNext = selectedIndex !== null && selectedIndex < items.length - 1;
  const hasPrevious = selectedIndex !== null && selectedIndex > 0;

  return {
    selectedIndex,
    selectedItem,
    isOpen: selectedItem !== null,
    openModal,
    closeModal,
    handleNext,
    handlePrevious,
    hasNext,
    hasPrevious,
  };
}
