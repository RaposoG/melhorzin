import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig, {
  type Colors,
  type DefaultColors,
} from "../../tailwind.config";

const tw = resolveConfig(tailwindConfig);
const { theme } = tw as unknown as {
  theme: (typeof tw)["theme"] & { colors: DefaultColors & Colors };
};

export default theme;
