export interface IOrderProps {
  flavorsList: Array<string>;
  currentFlavorIdx: number;
  withCone?: boolean;
  onPick: any;
}
