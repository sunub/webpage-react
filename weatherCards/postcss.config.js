import PostcssPresetEnv from "postcss-preset-env";
import PostcssNesting from "postcss-nesting";
import Autoprefixer from "autoprefixer";

export default {
  plugin: [PostcssNesting(), PostcssPresetEnv(), Autoprefixer()],
};
