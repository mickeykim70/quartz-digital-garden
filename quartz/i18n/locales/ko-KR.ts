import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "제목 없음",
    description: "설명 없음",
  },
  components: {
    callout: {
      note: "Note",
      abstract: "Abstract",
      info: "Info",
      todo: "Todo",
      tip: "Tip",
      success: "Success",
      question: "Qustion",
      warning: "Warning",
      failure: "Failure",
      danger: "Danger",
      bug: "Bug",
      example: "Example",
      quote: "Quote",
    },
    backlinks: {
      title: "Back-link",
      noBacklinksFound: "Back-link가 없습니다.",
    },
    themeToggle: {
      lightMode: "Light Mode",
      darkMode: "Dark Mode",
    },
    explorer: {
      title: "Explorer",
    },
    footer: {
      createdWith: "Created with",
    },
    graph: {
      title: "Graph View",
    },
    recentNotes: {
      title: "최근 게시글",
      seeRemainingMore: ({ remaining }) => `${remaining}건 더보기 →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `${targetSlug}의 포함`,
      linkToOriginal: "원본 링크",
    },
    search: {
      title: "Search",
      searchBarPlaceholder: "검색어를 입력하세요",
    },
    tableOfContents: {
      title: "Title",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} min read`,
    },
  },
  pages: {
    rss: {
      recentNotes: "최근 게시글",
      lastFewNotes: ({ count }) => `최근 ${count} 건`,
    },
    error: {
      title: "Not Found",
      notFound: "페이지가 존재하지 않거나 비공개 설정이 되어 있습니다.",
      home: "홈페이지로 돌아가기",
    },
    folderContent: {
      folder: "Folder",
      itemsUnderFolder: ({ count }) => `${count}건의 항목`,
    },
    tagContent: {
      tag: "Tag",
      tagIndex: "Tag Index",
      itemsUnderTag: ({ count }) => `${count}건의 항목`,
      showingFirst: ({ count }) => `처음 ${count}개의 태그`,
      totalTags: ({ count }) => `총 ${count}개의 태그를 찾았습니다.`,
    },
  },
} as const satisfies Translation
