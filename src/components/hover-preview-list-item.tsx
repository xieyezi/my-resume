"use client";

import type { ReactNode } from "react";

type HoverPreviewListItemHtml = {
  hoverImageSrc?: string | null;
  html: string;
  children?: never;
};

type HoverPreviewListItemChildren = {
  hoverImageSrc?: string | null;
  html?: never;
  children: ReactNode;
};

export type HoverPreviewListItemProps = HoverPreviewListItemHtml | HoverPreviewListItemChildren;

const spanClassName =
  "transition-colors duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100 [&_a]:transition-colors [&_a]:group-hover:text-gray-800 dark:[&_a]:group-hover:text-gray-200";

const popoverClassName =
  "pointer-events-none invisible absolute left-0 top-full z-50 mt-2 box-border w-max max-w-[min(32rem,100%)] opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100 md:max-w-[min(40rem,calc(100vw-2rem))]";

const imgClassName =
  "max-h-[min(55vh,22rem)] w-full max-w-full rounded-md object-contain md:max-h-[min(65vh,28rem)]";

export function HoverPreviewListItem(props: HoverPreviewListItemProps) {
  const { hoverImageSrc } = props;
  const src = hoverImageSrc?.trim();

  if (!src) {
    if ("html" in props && props.html !== undefined) {
      return <li dangerouslySetInnerHTML={{ __html: props.html }} />;
    }
    return <li>{props.children}</li>;
  }

  return (
    <li className='group relative min-w-0 cursor-pointer'>
      {"html" in props && props.html !== undefined ? (
        <span className={spanClassName} dangerouslySetInnerHTML={{ __html: props.html }} />
      ) : (
        <span className={spanClassName}>{props.children}</span>
      )}
      <div className={popoverClassName} aria-hidden>
        <div className='rounded-lg border border-gray-200 bg-white p-1.5 shadow-lg dark:border-gray-600 dark:bg-gray-900'>
          <img src={src} alt='' className={imgClassName} />
        </div>
      </div>
    </li>
  );
}
