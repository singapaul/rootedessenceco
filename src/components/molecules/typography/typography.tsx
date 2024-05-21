import clsx from "clsx";
import { Amatic_SC } from "next/font/google";
export const amatic = Amatic_SC({ subsets: ['latin'], weight: ['700']})

export function TypographyH1({ children , className}: { children: any, className?:string }) {
  return (
    <h1 className={clsx('scroll-m-20 text-4xl font-extrabold lg:text-5xl', className, amatic.className)}>
      {children}
    </h1>
  );
}

export function TypographyH2({ children , className}: { children: any, className?:string }) {
  return (
    <h2 className={clsx("scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0", className,amatic.className)}>
      {children}
    </h2>
  );
}

export function TypographyH3({ children , className}: { children: any, className?:string }) {
  return (
    <h3 className={clsx("scroll-m-20 text-2xl font-semibold tracking-tight", className, amatic.className)}>
      {children}
    </h3>
  );
}

export function TypographyH4({ children , className}: { children: any, className?:string }) {
  return (
    <h4 className={clsx("scroll-m-20 text-xl font-semibold tracking-tight", className, amatic.className)}>
      {children}
    </h4>
  );
}

export function TypographyP({ children , className}: { children: any, className?:string }) {
  return <p className={clsx("leading-7 [&:not(:first-child)]:mt-6", className)}>{children}</p>;
}

export function TypographyBlockquote({ children , className}: { children: any, className?:string }) {
  return (
    <blockquote className={clsx("mt-6 border-l-2 pl-6 italic", className)}>{children}</blockquote>
  );
}
