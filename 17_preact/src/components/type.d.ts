export interface IOrderProps {
  flavorsList: Array<string>;
  currentFlavorIdx: number;
  setCurrentFlavorIdx?: StateUpdater<number>;
  withCone?: boolean;
  onPick?: any;
}

export interface IPickedProps {
  flavors: Array<string>;
  withCone: boolean;
}
