import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";

const blog = [
  {
    title: "Over-generalization",
    tags: "react, typescript",
    description:
      "在追求組件通用性的過程中，容易陷入過度泛化的陷阱，導致組件變得複雜且難以維護。文章中將探討過度泛化的常見警訊與建議。",
    img: "/blog/techstack/react.svg",
    href: "/blog/react/over-generalization",
  },
  {
    title: "Avoid Fetch on Render",
    tags: "react",
    description:
      "本文解析為何應避免 Fetch on Render，並推薦 Render as You Fetch 以提升使用者體驗與渲染效能。",
    img: "/blog/techstack/react.svg",
    href: "/blog/react/avoid-fetch-on-render",
  },
  {
    title: "Deep Dive into Vite",
    tags: "infra, vite",
    description:
      "深入介紹其核心架構與效能優勢，並與傳統工具如 Webpack 做出比較，揭示其成為現代建構工具首選的關鍵與潛在挑戰。",
    img: "/blog/techstack/vite.svg",
    href: "/blog/infra/deep-dive-into-vite",
  },
  {
    title: "Stop Using Enums in TS",
    tags: "typescript",
    description:
      "避免使用 TypeScript enums！了解其型別不安全與維護困難等缺點，並用 as const 物件替代，提升靈活性與字串相容性。",
    img: "/blog/techstack/ts.svg",
    href: "/blog/typescript/stop-using-enums-in-ts",
  },
  {
    title: "Native Execution of TS",
    tags: "typescript, nodejs",
    description:
      "Node.js 近期釋出版本引入實驗性標誌，支持直接執行 TypeScript 檔案，免去手動編譯，提升開發效率。",
    img: "/blog/techstack/ts.svg",
    href: "/blog/typescript/support-native-execution",
  },
  {
    title: "gRPC vs RESTful API",
    tags: "grpc, restful",
    description:
      "gRPC 與 REST 是常見的 API 通訊架構，gRPC 採用服務導向設計與高效的 Protocol Buffers，適合高效能內部微服務。",
    img: "/blog/techstack/grpc.svg",
    href: "/blog/grpc/restful-api-vs-grpc",
  },
];

const firstRow = blog.slice(0, blog.length / 2);
const secondRow = blog.slice(blog.length / 2);

const ReviewCard = ({
  img,
  title,
  tags,
  description,
  href,
}: {
  img: string;
  title: string;
  tags: string;
  description: string;
  href?: string;
}) => {
  return (
    <a
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
      href={href}
    >
      <div className="flex flex-row items-center gap-2 mb-4">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {title}
          </figcaption>
          <span className="text-xs font-medium dark:text-white/40">{tags}</span>
        </div>
      </div>
      <blockquote className="mt-2 text-xs!">{description}</blockquote>
    </a>
  );
};

const MarqueeArticles = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.title} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.title} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background dark:from-[#1B1B1D]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background dark:from-[#1B1B1D]" />
    </div>
  );
};

export default MarqueeArticles;
