import { LABEL_STYLES } from "../const/styles";

export const labelStyle = (l: string) =>
  LABEL_STYLES[
    [...l].reduce((a, c) => a + c.charCodeAt(0), 0) % LABEL_STYLES.length
  ];
