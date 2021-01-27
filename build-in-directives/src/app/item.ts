
export const items: Item[] = [{id: 1, name: 'Lamp', feature: 'bright'}, {id: 2, name: 'Phone', feature: 'slim'}, {id: 3, name: 'Television', feature: 'vintage'}, {id: 4, name: 'Fishbowl'}];

export interface Item {
  id?: number;
  name?:string;
  feature?:string;
  url?:string;
  rate?:string;
}