import { IResponse } from '@list/hooks/types';

export type ITransformData = {
  id: number;
  height: number;
  weight: number;
  image: string;
  name: string;
  type: string;
};

export const transformData = (data: IResponse): ITransformData => {
  return {
    id: data.id,
    height: data.height,
    weight: data.weight,
    image: data.sprites.other.dream_world.front_default,
    name: data.name,
    type: data.types[0].type.name,
  };
};
