declare module '*module.css' {
  const styles: {
    [className: string]: string;
  };
  export default styles;
}

interface CategoriesInterface {
  id: string;
  name: string;
}

interface BadgeProps {
  readonly variant: string | null;
}

interface ChipProps {
  readonly variant: string;
  readonly optionsTime?: TimeVariantProps;
}

interface TimeVariantProps {
  readonly min: number;
  readonly max: number;
}

interface FoodInterface {
  id: string;
  index: number;
  rating: number;
  promotion: string | null;
  isNew: boolean;
  categoryId: string;
  minCookTime: number;
  maxCookTime: number;
  restaurant: string;
  name: string;
  imageUrl: string;
}

interface LabelProps {
  readonly label: string;
}

interface ButtonProps {
  readonly onClick: MouseEvent<HTMLButtonElement>;
}

interface ListProps {
  readonly items: CategoriesInterface[];
  onClick: (id: string) => void;
}

interface RatingProps {
  readonly rating: number;
}

interface FoodInterface {
  id: string;
  index: number;
  rating: number;
  promotion: string | null;
  isNew: boolean;
  categoryId: string;
  minCookTime: number;
  maxCookTime: number;
  restaurant: string;
  name: string;
  imageUrl: string;
}

interface CardProps {
  readonly items: FoodInterface;
}

interface InputProps {
  readonly placeholder: string;
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
