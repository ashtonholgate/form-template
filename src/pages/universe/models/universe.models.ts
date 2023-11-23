import { FormString } from "../../../models/form.models";

export type Universe = {
  galaxies: Galaxy[];
};

export type Galaxy = {
  id: string;
  name: FormString;
  stars: Star[];
};

export type Star = {
  id: string;
  name: FormString;
  planets: Planet[];
};

export type Planet = {
  id: string;
  name: FormString;
};
