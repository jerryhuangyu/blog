import { useColorMode } from "@docusaurus/theme-common";
import Giscus from "@giscus/react";
import React from "react";

const GiscusComment = () => {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      repo="jerryhuangyu/blog"
      repoId="R_kgDOOwFMkw"
      category="Announcements"
      categoryId="DIC_kwDOOwFMk84CqoeV"
      mapping="title"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={colorMode}
      lang="zh-TW"
      loading="lazy"
      // crossorigin="anonymous"
      // async
    />
  );
};

export default GiscusComment;
