import Container from "../Container";
import { usePathname, useSearchParams } from 'next/navigation';
import CategoryBox from "./categoryBox";
export const categoriesList = [
  {
    label: "Gym",

    description: "This property is close to the beach!",
  },
  {
    label: "Yoga",

    description: "This property is has windmills!",
  },
  {
    label: "Home Gym",

    description: "This property is modern!",
  },
  {
    label: "Clothes",

    description: "This property is in the countryside!",
  },
  
];
const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
            pt-4
            flex 
            flex-row 
            items-center 
            justify-between
            overflow-x-auto
          "
      >
        {categoriesList.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
