export type IResponse = {
  id: number;
  height: number;
  weight: number;
  sprites: ISprite;
  types: IType[];
  name: string;
};

type ISprite = {
  other: {
    dream_world: {
      front_default: string;
    };
  };
};

type IType = {
  type: {
    name: string;
  };
};
